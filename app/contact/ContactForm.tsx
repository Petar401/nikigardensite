"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div style={{ textAlign: "center", padding: "36px 10px" }}>
      <div style={{ width: 72, height: 72, margin: "0 auto", borderRadius: "50%", background: "#e2eecb", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5f8a2e" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </div>
      <h2 style={{ margin: "22px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 34, color: "#14432a" }}>
        Thanks — message sent!
      </h2>
      <p style={{ margin: "12px auto 0", maxWidth: 360, fontSize: 16.5, lineHeight: 1.55, color: "#5a6b52" }}>
        I&apos;ll be in touch very soon with your free quote. Need me sooner? Give me a ring on{" "}
        <strong style={{ color: "#14432a" }}>07843 818290</strong>.
      </p>
      <button
        onClick={() => setSubmitted(false)}
        className="btn btn-outline"
        style={{ marginTop: 24, fontSize: 14, letterSpacing: 0.5, padding: "11px 20px", borderRadius: 9 }}
      >
        Send another
      </button>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 30, color: "#14432a" }}>
        Request a free quote
      </h2>
      <p style={{ margin: "8px 0 24px", fontSize: 15, color: "#5a6b52" }}>
        Tell me a little about your garden — no detail too small.
      </p>

      <div className="field-grid">
        <label style={{ display: "block" }}>
          <span className="field-label">Your name</span>
          <input className="fld" type="text" placeholder="e.g. Sarah Miller" required />
        </label>
        <label style={{ display: "block" }}>
          <span className="field-label">Phone</span>
          <input className="fld" type="tel" placeholder="07…" required />
        </label>
        <label style={{ display: "block" }}>
          <span className="field-label">Email</span>
          <input className="fld" type="email" placeholder="you@email.com" />
        </label>
        <label style={{ display: "block" }}>
          <span className="field-label">Postcode</span>
          <input className="fld" type="text" placeholder="NR…" />
        </label>
      </div>

      <label style={{ display: "block", marginTop: 16 }}>
        <span className="field-label">What do you need?</span>
        <select className="fld" defaultValue="Regular lawn mowing">
          <option>Regular lawn mowing</option>
          <option>Hedge trimming</option>
          <option>Borders &amp; beds</option>
          <option>Garden clearance / tidy</option>
          <option>A mix of things</option>
          <option>Not sure — need advice</option>
        </select>
      </label>

      <label style={{ display: "block", marginTop: 16 }}>
        <span className="field-label">A bit more detail</span>
        <textarea className="fld" placeholder="Garden size, how often you'd like visits, anything specific…" />
      </label>

      <button
        type="submit"
        className="btn btn-cta"
        style={{ marginTop: 22, width: "100%", fontSize: 17, letterSpacing: 0.6, padding: 16, borderRadius: 10, boxShadow: "0 6px 18px rgba(244,161,29,.35)" }}
      >
        Send my request &rarr;
      </button>
      <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 13, color: "#a3ac96" }}>
        Or call direct on 07843 818290 &middot; First visit gets 20% off
      </p>
    </form>
  );
}
