"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getAnswer } from "./engine";
import { SUGGESTIONS, SITE_FACTS, type Action } from "./knowledge";

type Message = {
  from: "bot" | "user";
  text: string;
  actions?: Action[];
};

const GREETING: Message = {
  from: "bot",
  text:
    "Hi! 👋 I'm Niki's garden assistant. Ask me about services, prices, the areas we cover, " +
    "or how to book a free quote.",
};

const STORAGE_KEY = "niki-chat-history";

// Renders an action as an internal Next.js link or an external tel:/mailto: anchor.
function ActionButton({ action }: { action: Action }) {
  const external = action.href.startsWith("tel:") || action.href.startsWith("mailto:");
  if (external) {
    return (
      <a href={action.href} className="chat-action">
        {action.label}
      </a>
    );
  }
  return (
    <Link href={action.href} className="chat-action">
      {action.label}
    </Link>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Restore transcript from this browser tab's session (survives navigation).
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Message[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* storage unavailable — no problem, chat still works in-memory */
    }
  }, [messages]);

  // Keep the latest message in view; focus the input when the panel opens.
  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = getAnswer(trimmed);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      { from: "bot", text: reply.answer, actions: reply.actions },
    ]);
    setInput("");
  }

  const showSuggestions = messages.length <= 1;

  return (
    <>
      {/* Floating action button */}
      <button
        className="chat-fab"
        aria-label={open ? "Close chat" : "Open chat with Niki's garden assistant"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with Niki's garden assistant">
          <div className="chat-header">
            <div className="chat-header-avatar" aria-hidden="true">
              🌿
            </div>
            <div className="chat-header-text">
              <div className="chat-header-title">Ask Niki</div>
              <div className="chat-header-sub">Garden assistant · replies instantly</div>
            </div>
            <button className="chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-row ${m.from}`}>
                <div className={`chat-bubble ${m.from}`}>
                  {m.text.split("\n").map((line, j) => (
                    <span key={j} style={{ display: "block" }}>
                      {line}
                    </span>
                  ))}
                  {m.actions && m.actions.length > 0 && (
                    <div className="chat-actions">
                      {m.actions.map((a) => (
                        <ActionButton key={a.href + a.label} action={a} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="chat-chip" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, prices, areas…"
              aria-label="Type your question"
            />
            <button type="submit" className="chat-send" aria-label="Send message" disabled={!input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </form>

          <div className="chat-footnote">
            Prefer to talk? Call{" "}
            <a href={SITE_FACTS.phoneHref}>{SITE_FACTS.phoneDisplay}</a>
          </div>
        </div>
      )}
    </>
  );
}
