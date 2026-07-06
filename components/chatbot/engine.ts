// Offline retrieval engine for the chatbot. Pure functions, no network calls.
// Scores the user's message against the local knowledge base and returns the
// best-matching answer, or a graceful fallback when nothing is confident enough.

import { KB, FALLBACK, type Action, type KbEntry } from "./knowledge";

export type BotReply = { answer: string; actions?: Action[] };

// Words that carry no intent — ignored when scoring so they don't create noise.
const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "of", "to", "for", "is", "are", "do", "does",
  "you", "your", "my", "i", "me", "we", "it", "in", "on", "at", "with", "can",
  "could", "would", "please", "some", "any", "get", "have",
]);

// Synonym groups: any token in a group expands to the whole group, so a user
// saying "how much" also matches keywords like "cost" or "price".
const SYNONYMS: string[][] = [
  ["cost", "price", "prices", "pricing", "charge", "rate", "rates", "fee", "expensive", "cheap"],
  ["area", "areas", "cover", "coverage", "where", "location", "postcode", "near"],
  ["book", "booking", "quote", "hire", "appointment", "arrange", "estimate"],
  ["contact", "phone", "call", "number", "email", "reach", "message"],
  ["insured", "insurance", "liability", "covered", "guarantee"],
  ["hours", "open", "opening", "times", "when", "available", "availability"],
  ["waste", "rubbish", "clippings", "cuttings", "green", "removal", "dispose"],
  ["mow", "mowing", "grass", "lawn", "lawns"],
  ["hedge", "hedges", "trim", "trimming", "prune", "pruning"],
  ["clearance", "clearances", "clear", "tidy", "overgrown", "jungle"],
  ["discount", "offer", "deal", "off", "voucher", "promotion"],
];

const SYNONYM_INDEX: Map<string, string[]> = (() => {
  const index = new Map<string, string[]>();
  for (const group of SYNONYMS) {
    for (const word of group) index.set(word, group);
  }
  return index;
})();

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s%]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): Set<string> {
  const tokens = new Set<string>();
  for (const word of normalize(text).split(" ")) {
    if (!word || STOP_WORDS.has(word)) continue;
    tokens.add(word);
    const group = SYNONYM_INDEX.get(word);
    if (group) for (const syn of group) tokens.add(syn);
  }
  return tokens;
}

// Score one KB entry against the user's normalized text + token set.
function scoreEntry(entry: KbEntry, normalizedQuery: string, queryTokens: Set<string>): number {
  let score = 0;
  for (const keyword of entry.keywords) {
    const kw = keyword.toLowerCase();
    if (kw.includes(" ")) {
      // Multi-word phrase: strong signal when the whole phrase appears.
      if (normalizedQuery.includes(kw)) score += 5;
    } else if (queryTokens.has(kw)) {
      // Whole-word / synonym-expanded match.
      score += 2;
    } else if (kw.length >= 5 && normalizedQuery.includes(kw)) {
      // Substring match for longer keywords (e.g. "mowing" inside "lawnmowing").
      score += 1;
    }
  }
  return score;
}

const CONFIDENCE_THRESHOLD = 2;

export function getAnswer(query: string): BotReply {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return { ...FALLBACK };

  const queryTokens = tokenize(query);

  let best: KbEntry | null = null;
  let bestScore = 0;
  for (const entry of KB) {
    const score = scoreEntry(entry, normalizedQuery, queryTokens);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (!best || bestScore < CONFIDENCE_THRESHOLD) return { ...FALLBACK };
  return { answer: best.answer, actions: best.actions };
}
