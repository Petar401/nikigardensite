"use client";

import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SiteNav />

      {/* ============ PAGE HEADER ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('/assets/lawn-stripes.jpg') center 40%/cover no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,24,14,.8), rgba(9,24,14,.66))" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "60px 24px 64px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 2.4, color: "#cfe8a8" }}>
            GET IN TOUCH
          </div>
          <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(38px, 9vw, 62px)", lineHeight: 0.98, color: "#ffffff" }}>
            Let&apos;s sort your garden out
          </h1>
          <p style={{ margin: "14px auto 0", maxWidth: 540, fontSize: 18, lineHeight: 1.55, color: "#e4ecdb" }}>
            Call for a chat or send a few details below. I&apos;ll get back to you quickly with a free,
            no-obligation quote.
          </p>
        </div>
      </section>

      {/* ============ CONTACT BODY ============ */}
      <section className="contact-grid" style={{ maxWidth: 1120, margin: "0 auto", padding: "70px 24px 90px" }}>
        {/* FORM */}
        <div style={{ background: "#fff", border: "1px solid #e6ddc6", borderRadius: 18, padding: "34px 34px 38px", boxShadow: "0 10px 30px rgba(20,60,36,.09)" }}>
          {submitted ? (
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
          )}
        </div>

        {/* DETAILS SIDEBAR */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ background: "#14432a", color: "#f4efe1", borderRadius: 16, padding: "28px 26px" }}>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12, letterSpacing: 1.8, color: "#bfe88a" }}>
              CALL NIKI
            </div>
            <a href="tel:+447843818290" style={{ display: "block", marginTop: 6, fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 38, lineHeight: 1, color: "#ffffff", textDecoration: "none" }}>
              07843 818290
            </a>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:hello@nikislawngardens.co.uk" style={{ display: "flex", alignItems: "center", gap: 11, color: "#e7ddc7", textDecoration: "none", fontSize: 15.5 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bfe88a" strokeWidth="2">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5"></rect>
                  <path d="m3 6 9 6 9-6"></path>
                </svg>
                hello@nikislawngardens.co.uk
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 11, color: "#e7ddc7", fontSize: 15.5 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bfe88a" strokeWidth="2">
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Norwich &amp; 15 miles around
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 11, color: "#e7ddc7", fontSize: 15.5 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bfe88a" strokeWidth="2">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
                Mon&ndash;Sat, 8am&ndash;6pm
              </div>
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e6ddc6", borderRadius: 16, padding: "24px 26px" }}>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12, letterSpacing: 1.8, color: "#5f8a2e" }}>
              PEACE OF MIND
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 11 }}>
              {["Fully insured (public liability)", "Waste-carrier licensed", "Free, no-obligation quotes", "No long contracts"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500, color: "#2b3724" }}>
                  <span style={{ color: "#5f8a2e", fontSize: 16 }}>&#10003;</span> {t}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#f4a11d", borderRadius: 16, padding: "22px 26px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: "0 0 auto", fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 46, color: "#14432a", lineHeight: 0.8 }}>
              20%
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 19, letterSpacing: 0.5, color: "#14432a" }}>
                OFF YOUR FIRST VISIT
              </div>
              <div style={{ marginTop: 3, fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 13, color: "#5a3a06" }}>
                Just mention it when you get in touch.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
