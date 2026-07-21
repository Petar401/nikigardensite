"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer style={{ background: "#0f3521", color: "#e7ddc7", fontFamily: "var(--font-body)" }}>
      {/* CTA band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "44px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-label)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                color: "#bfe88a",
              }}
            >
              READY WHEN YOU ARE
            </div>
            <div
              style={{
                marginTop: 6,
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(26px, 5vw, 38px)",
                lineHeight: 1,
                color: "#ffffff",
              }}
            >
              Let&apos;s get your garden looking its best.
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="tel:+447843818290"
              className="btn btn-cta"
              style={{ fontSize: 16, letterSpacing: 0.5, padding: "14px 24px", borderRadius: 9 }}
            >
              Call 07843 818290
            </a>
            <Link
              href="/contact"
              className="btn btn-ghost-footer"
              style={{ fontSize: 16, letterSpacing: 0.5, padding: "13px 24px", borderRadius: 9 }}
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div
        className="footer-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px 36px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <div
              style={{
                flex: "0 0 auto",
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "#f4efe1 url('/assets/logo.jpg') center/cover no-repeat",
                border: "1.5px solid #bfe88a",
              }}
            />
            <div style={{ lineHeight: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: 0.3,
                  color: "#ffffff",
                }}
              >
                NIKI&apos;S LAWN &amp; GARDEN
              </div>
              <div
                style={{
                  marginTop: 3,
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: 9.5,
                  letterSpacing: 2.6,
                  color: "#bfe88a",
                }}
              >
                SERVICES &middot; NORWICH &middot; EST. 2020
              </div>
            </div>
          </div>
          <p style={{ margin: "16px 0 0", maxWidth: 340, fontSize: 14.5, lineHeight: 1.6, color: "#c3d1b6" }}>
            Reliable, tidy lawn and garden care right across Norwich. I turn up when I say I will, do a
            proper job, and always leave the place spotless.
          </p>
          <div
            style={{
              marginTop: 16,
              fontFamily: "var(--font-signature)",
              fontWeight: 700,
              fontSize: 30,
              color: "#bfe88a",
              transform: "rotate(-4deg)",
              display: "inline-block",
            }}
          >
            Niki
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12, letterSpacing: 1.6, color: "#8fb36a" }}>
            EXPLORE
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="/" className="foot-link">Home</Link>
            <Link href="/services" className="foot-link">Services &amp; pricing</Link>
            <Link href="/gallery" className="foot-link">Recent work</Link>
            <Link href="/blog" className="foot-link">Garden care blog</Link>
            <Link href="/contact" className="foot-link">Get a quote</Link>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12, letterSpacing: 1.6, color: "#8fb36a" }}>
            GET IN TOUCH
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="tel:+447843818290"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 24,
                letterSpacing: 0.3,
              }}
            >
              07843 818290
            </a>
            <a href="mailto:info@nikislawngardens.co.uk" className="foot-link" style={{ fontSize: 14.5 }}>
              info@nikislawngardens.co.uk
            </a>
            <div style={{ fontSize: 14.5, color: "#c3d1b6", lineHeight: 1.5 }}>
              Norwich &amp; 15 miles around
              <br />
              Mon&ndash;Sat, 8am&ndash;6pm
            </div>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
              fontFamily: "var(--font-label)",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: 0.4,
              color: "#9fb389",
            }}
          >
            <span>
              Fully insured &middot; Waste-carrier licensed &middot; &copy; 2026 Niki&apos;s Lawn &amp; Garden Services
            </span>
            <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
            <Link href="/privacy" className="foot-link" style={{ fontSize: 12.5, fontWeight: 600 }}>
              Privacy
            </Link>
            <Link href="/accessibility" className="foot-link" style={{ fontSize: 12.5, fontWeight: 600 }}>
              Accessibility
            </Link>
            <button
              type="button"
              className="foot-link-button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("nlg:open-cookie-prefs"));
                }
              }}
            >
              Cookie preferences
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="https://www.facebook.com/profile.php?id=61561680606312"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex" }}
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#bfe88a">
                <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.2-1.5 1.5-1.5H16V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H7.5v3H10v8h3z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@nikisserviceshg?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex" }}
              aria-label="TikTok"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#bfe88a">
                <path d="M16.5 3c.4 1.7 1.4 3 3 3.6.7.3 1.5.4 2.3.4v3.1c-1.9 0-3.6-.6-5-1.7v6.9a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.2a2.8 2.8 0 1 0 1.9 2.7V3h2.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
