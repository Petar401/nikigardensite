// Local knowledge base for the Niki's Lawn & Garden chatbot.
// This is the single source of truth the offline bot answers from — mirrored
// from the site's own content (app/page.tsx, app/services/page.tsx,
// app/contact/page.tsx). No API, no backend: everything ships in the bundle.

export type Action = { label: string; href: string };

export type KbEntry = {
  id: string;
  /** Weighted trigger terms — multi-word phrases score higher when matched. */
  keywords: string[];
  answer: string;
  actions?: Action[];
};

export const SITE_FACTS = {
  name: "Niki's Lawn & Garden Services",
  since: 2020,
  phoneDisplay: "07843 818290",
  phoneHref: "tel:+447843818290",
  email: "info@nikislawngardens.co.uk",
  emailHref: "mailto:info@nikislawngardens.co.uk",
  hours: "Mon–Sat, 8am–6pm",
  areaSummary: "Norwich & roughly 15 miles around it",
  discount: "20% off your first visit",
  areas: [
    "Norwich",
    "Thorpe St Andrew",
    "Eaton",
    "Hellesdon",
    "Sprowston",
    "Wymondham",
    "Costessey",
    "Drayton",
    "Taverham",
    "Poringland",
  ],
};

const CONTACT_ACTIONS: Action[] = [
  { label: "Get a free quote", href: "/contact" },
  { label: "Call 07843 818290", href: SITE_FACTS.phoneHref },
];

// Starter chips shown when the chat is first opened.
export const SUGGESTIONS = [
  "What do you offer?",
  "How much is mowing?",
  "What areas do you cover?",
  "How do I book?",
];

// Fallback used when nothing scores above the confidence threshold.
export const FALLBACK: Pick<KbEntry, "answer" | "actions"> = {
  answer:
    "I'm not totally sure on that one, but Niki will know! The quickest way is to " +
    "call 07843 818290 or send a message with your postcode and a bit about your garden — " +
    "you'll get a free, no-obligation quote back.",
  actions: CONTACT_ACTIONS,
};

export const KB: KbEntry[] = [
  // ---- Greetings / small talk ----
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "howdy", "good morning", "good afternoon", "good evening"],
    answer:
      "Hi there! 👋 I'm Niki's garden assistant. Ask me about our services, prices, the areas " +
      "we cover, or how to book a free quote.",
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "cheers", "ta", "appreciate"],
    answer: "You're very welcome! Anything else I can help with about your garden?",
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "that's all", "no thanks"],
    answer:
      "Thanks for stopping by! When you're ready, Niki's just a call away on 07843 818290. 🌿",
    actions: CONTACT_ACTIONS,
  },

  // ---- Overview / about ----
  {
    id: "services-overview",
    keywords: [
      "what do you offer",
      "what do you do",
      "services",
      "service",
      "help with",
      "what can you do",
      "list of services",
      "everything",
    ],
    answer:
      "Niki looks after the whole garden — the main services are:\n" +
      "• Lawns — mowing, edging, striping, feeding, scarifying and fresh turf\n" +
      "• Hedges, shrubs & small trees — trimming, shaping and sensible reductions\n" +
      "• Borders & Beds — planting, weeding, mulching and fresh bark chip\n" +
      "• Clearances & Tidies — overgrown gardens, one-off tidies and full clear-outs\n" +
      "Which one would you like to know more about?",
    actions: [{ label: "See all services", href: "/services" }],
  },
  {
    id: "about",
    keywords: [
      "about niki",
      "who are you",
      "who is niki",
      "how long",
      "experience",
      "established",
      "since when",
      "reliable",
      "trust",
    ],
    answer:
      "Niki is a friendly local gardener who's kept Norwich lawns and borders looking their best " +
      "since 2020. The promise is simple: turn up when I say I will, do a proper job, and always " +
      "leave the place spotless — no churned-up beds, no bags of clippings left behind.",
    actions: [{ label: "See recent work", href: "/gallery" }],
  },

  // ---- Individual services ----
  {
    id: "lawns",
    keywords: [
      "lawn",
      "lawns",
      "mow",
      "mowing",
      "grass",
      "cut the grass",
      "edging",
      "stripe",
      "striping",
      "turf",
      "scarify",
      "scarifying",
      "aerate",
      "aerating",
      "feed",
      "feeding",
      "weed control",
    ],
    answer:
      "Lawns are the heart of most gardens. Niki keeps yours neat, healthy and striped — from a " +
      "quick weekly cut to reviving a tired lawn or laying fresh turf. That covers mowing & edging, " +
      "decorative striping, feeding & weed control, scarifying & aerating, fresh turf and seasonal " +
      "treatments. Regular mowing starts from £25 per visit.",
    actions: [{ label: "Lawn services & pricing", href: "/services" }],
  },
  {
    id: "hedges",
    keywords: [
      "hedge",
      "hedges",
      "tree",
      "trees",
      "trim",
      "trimming",
      "prune",
      "pruning",
      "shape",
      "shaping",
      "topiary",
      "reduction",
      "reduce height",
      "overgrown hedge",
    ],
    answer:
      "Crisp hedges, tidy shrubs and well-shaped small trees. Niki will trim, shape and reduce sensibly, " +
      "then clear every last cutting away — including hedge trimming, shrub shaping, small-tree pruning, " +
      "height reductions and overgrowth tidy-ups. Price depends on scope, access, height and waste " +
      "handling, so hedge work is quoted from photos — you can attach them to the contact form. The price " +
      "is always confirmed before any booking or payment.",
    actions: [{ label: "Hedges, shrubs & small trees", href: "/services" }],
  },
  {
    id: "borders",
    keywords: [
      "border",
      "borders",
      "bed",
      "beds",
      "flower",
      "flowers",
      "plant",
      "planting",
      "weed",
      "weeding",
      "mulch",
      "mulching",
      "bark",
      "bark chip",
      "re-edging",
      "seasonal colour",
    ],
    answer:
      "Beds that look cared for all year — planting, weeding and a fresh layer of mulch or bark to " +
      "keep things tidy and thriving. That includes planting, weeding, mulching, bark chip, bed " +
      "re-edging and seasonal colour. Borders & beds start from £35 per session.",
    actions: [{ label: "Borders & beds", href: "/services" }],
  },
  {
    id: "clearance",
    keywords: [
      "clearance",
      "clearances",
      "clear",
      "tidy",
      "tidies",
      "tidy up",
      "overgrown",
      "overgrown garden",
      "rubbish",
      "rubbish removal",
      "blitz",
      "one-off",
      "one off",
      "pre-sale",
      "big job",
      "bigger jobs",
      "jungle",
      "neglected",
    ],
    answer:
      "Let it get away from you? No problem. From full overgrown clearances to a one-off tidy before " +
      "guests arrive, Niki will get it back under control — full clearances, one-off tidies, seasonal " +
      "blitzes, rubbish removal and pre-sale spruce-ups. Garden clearances start from £110 per project " +
      "(quoted after a quick look).",
    actions: [{ label: "Clearances & tidies", href: "/services" }],
  },

  // ---- Pricing ----
  {
    id: "pricing",
    keywords: [
      "price",
      "prices",
      "pricing",
      "cost",
      "how much",
      "rate",
      "rates",
      "charge",
      "fee",
      "quote price",
      "expensive",
      "cheap",
      "budget",
    ],
    answer:
      "Here are the guide starting prices — every garden's different, so you'll always get a firm price " +
      "before any work begins:\n" +
      "• Regular mowing — from £25 per visit\n" +
      "• Hedge / shrub / small-tree work — quoted from photos (varies by scope, access, height & waste)\n" +
      "• Borders & beds — planting, weeding, mulching (quoted per job)\n" +
      "• Garden clearance — from £110 per project\n" +
      "Prices depend on garden size, access and condition — and your first visit gets 20% off.",
    actions: [{ label: "Full pricing guide", href: "/services" }],
  },

  // ---- Booking / quotes ----
  {
    id: "booking",
    keywords: [
      "book",
      "booking",
      "quote",
      "get a quote",
      "hire",
      "appointment",
      "arrange",
      "get started",
      "sign up",
      "how do i",
      "estimate",
    ],
    answer:
      "Easy — just call Niki on 07843 818290 or send a message through the contact page with your " +
      "postcode and a rough idea of what you need. Most quotes are free, and Niki will usually pop round " +
      "for a quick look before giving you a firm price. No long contract to sign, either.",
    actions: CONTACT_ACTIONS,
  },
  {
    id: "regular-visits",
    keywords: [
      "regular",
      "weekly",
      "fortnightly",
      "every week",
      "ongoing",
      "schedule",
      "recurring",
      "maintenance",
      "contract",
      "subscription",
    ],
    answer:
      "Yes — lots of customers are on a weekly or fortnightly schedule, especially through the growing " +
      "season. Niki fits around what suits you, and there's no long contract to sign.",
    actions: [{ label: "Set up regular visits", href: "/contact" }],
  },

  // ---- Areas ----
  {
    id: "areas",
    keywords: [
      "area",
      "areas",
      "cover",
      "coverage",
      "where",
      "location",
      "postcode",
      "post code",
      "come to",
      "travel",
      "norwich",
      "thorpe",
      "eaton",
      "hellesdon",
      "sprowston",
      "wymondham",
      "costessey",
      "drayton",
      "taverham",
      "poringland",
      "near me",
      "do you come",
    ],
    answer:
      "Niki covers Norwich and roughly 15 miles around it — including Thorpe St Andrew, Eaton, Hellesdon, " +
      "Sprowston, Wymondham, Costessey, Drayton, Taverham and Poringland. Not sure if you're in the patch? " +
      "Send your postcode and Niki will confirm.",
    actions: [{ label: "Check your postcode", href: "/contact" }],
  },

  // ---- Green waste ----
  {
    id: "waste",
    keywords: [
      "waste",
      "green waste",
      "clippings",
      "cuttings",
      "take away",
      "removal",
      "dispose",
      "disposal",
      "rubbish left",
      "bags",
      "licensed",
      "waste carrier",
    ],
    answer:
      "Always taken away. Niki is waste-carrier licensed, so every clipping, cutting and bag of clearings " +
      "leaves with him — you'll never be left with piles to deal with.",
  },

  // ---- Insurance ----
  {
    id: "insurance",
    keywords: [
      "insured",
      "insurance",
      "public liability",
      "liability",
      "covered",
      "cover me",
      "qualified",
      "safe",
      "guarantee",
    ],
    answer:
      "Fully covered — Niki carries public liability insurance and is licensed to carry waste, so you're " +
      "completely protected while work is being done on your garden.",
  },

  // ---- Discount ----
  {
    id: "discount",
    keywords: [
      "discount",
      "offer",
      "deal",
      "20%",
      "first visit",
      "voucher",
      "money off",
      "special",
      "promotion",
    ],
    answer:
      "Yes! New customers get 20% off their first visit — just mention it when you get in touch. It applies " +
      "to any of the services.",
    actions: CONTACT_ACTIONS,
  },

  // ---- Contact / hours ----
  {
    id: "contact",
    keywords: [
      "contact",
      "phone",
      "phone number",
      "call",
      "number",
      "email",
      "reach",
      "get in touch",
      "speak to",
      "message",
    ],
    answer:
      "You can reach Niki on 📞 07843 818290 or ✉️ info@nikislawngardens.co.uk. He's around Mon–Sat, " +
      "8am–6pm, covering Norwich & 15 miles around.",
    actions: CONTACT_ACTIONS,
  },
  {
    id: "hours",
    keywords: [
      "hours",
      "open",
      "opening",
      "times",
      "when are you",
      "availability",
      "available",
      "weekend",
      "saturday",
      "sunday",
      "what days",
    ],
    answer:
      "Niki works Mon–Sat, 8am–6pm. Send a message any time and he'll get back to you quickly with a free quote.",
    actions: [{ label: "Get in touch", href: "/contact" }],
  },

  // ---- Gallery ----
  {
    id: "gallery",
    keywords: [
      "gallery",
      "photos",
      "pictures",
      "portfolio",
      "examples",
      "see your work",
      "recent work",
      "before and after",
      "show me",
    ],
    answer:
      "Have a look at the gallery — real lawns, hedges and borders from around Norwich, with a filter to " +
      "browse by type of work.",
    actions: [{ label: "View the gallery", href: "/gallery" }],
  },

  // ---- Blog / advice ----
  {
    id: "blog",
    keywords: [
      "blog",
      "advice",
      "tips",
      "guide",
      "article",
      "summer care",
      "summer garden",
      "when to water",
      "watering tips",
      "lawn brown",
      "brown lawn",
      "dry weather",
      "heatwave",
      "read",
    ],
    answer:
      "There's a garden care blog with seasonal tips written for Norwich gardens. The latest one covers " +
      "looking after your lawn and borders through the summer — watering, mowing in a heatwave and what to " +
      "do after all that rain.",
    actions: [{ label: "Read the blog", href: "/blog" }],
  },
];
