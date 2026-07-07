"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                textAlign: "left",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "20px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                fontFamily: "var(--font-label)",
                fontWeight: 700,
                fontSize: 19,
                color: "#ffffff",
              }}
            >
              {f.q}
              <span
                style={{
                  flex: "0 0 auto",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: isOpen ? "#bfe88a" : "rgba(255,255,255,.12)",
                  color: isOpen ? "#14432a" : "#bfe88a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 400,
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform .2s, background .2s",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 22px 22px", fontSize: 16, lineHeight: 1.6, color: "#c3d1b6" }}>{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
