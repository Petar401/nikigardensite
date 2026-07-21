"use client";

import Script from "next/script";

/**
 * Elfsight Google Reviews widget.
 *
 * Setup:
 *  1. Log in to https://elfsight.com/dashboard, create a "Google Reviews" widget,
 *     connect Niki's Google Business profile.
 *  2. Copy the widget ID (the 8-character hex, e.g. "abcd1234").
 *  3. Set NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID in .env.local (and Vercel).
 *
 * Until the ID is set, we render a clean fallback link to the Google profile so
 * the section never looks broken in production.
 */
export function ElfsightReviews() {
  const widgetId = process.env.NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID;

  if (!widgetId) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #e6ddc6",
          borderRadius: 14,
          padding: "34px 28px",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(20,60,36,.06)",
        }}
      >
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#3c4837" }}>
          Read our latest reviews on Google — the widget will appear here once
          it&apos;s connected.
        </p>
        <a
          href="https://maps.app.goo.gl/ukwxYm7qc4RGmAJe7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-cta"
          style={{
            display: "inline-block",
            marginTop: 18,
            fontSize: 15,
            letterSpacing: 0.5,
            padding: "12px 22px",
            borderRadius: 9,
          }}
        >
          Read reviews on Google →
        </a>
      </div>
    );
  }

  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" async />
      <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
    </>
  );
}

/**
 * Bark reviews badge for Niki's Lawn & Garden Services
 * (https://www.bark.com/en/gb/b/nikis-lawn-and-garden-services/J47GK/).
 *
 * We load Bark's v2 widget bundle and drop a container div with the seller
 * slug + id — Bark's script auto-hydrates matching containers. If the widget
 * doesn't render (attribute names sometimes change across script versions),
 * the styled outbound button below stays visible as a graceful fallback.
 */
export function BarkBadge() {
  const barkUrl =
    "https://www.bark.com/en/gb/b/nikis-lawn-and-garden-services/J47GK/";

  return (
    <div
      style={{
        marginTop: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
      }}
    >
      <Script
        src="https://www.bark.com/assets/js/frontend-v2/widgets-v2.1dc2c9b7ea23e9fcfdf5ee373ee1a493.v2.js"
        strategy="lazyOnload"
        async
      />
      <div
        className="bark-widget"
        data-widget="reviews-badge"
        data-slug="nikis-lawn-and-garden-services"
        data-id="J47GK"
      />
      <a
        href={barkUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See Niki's Lawn & Garden Services reviews on Bark"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 18px",
          borderRadius: 999,
          background: "#fff",
          border: "1px solid #e6ddc6",
          color: "#14432a",
          fontFamily: "var(--font-label)",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 0.5,
          textDecoration: "none",
          boxShadow: "0 4px 14px rgba(20,60,36,.06)",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#f4a11d",
          }}
        />
        Reviewed on Bark →
      </a>
    </div>
  );
}
