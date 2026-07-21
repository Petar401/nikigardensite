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
 * Bark reviews badge for Niki's Lawn & Garden Services — official Bark
 * "medium-gold" embed snippet. Bark's v2 widget script scans for anchors with
 * `class="bark-widget"` and hydrates them in place with the badge image.
 * The anchor text ("Nikis Lawn and Garden Services") is the graceful
 * degradation if the script never loads.
 */
export function BarkBadge() {
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
      />
      <a
        href="https://www.bark.com/en/gb/company/nikis-lawn-and-garden-services/J47GK/"
        target="_blank"
        rel="noopener noreferrer"
        className="bark-widget"
        data-type="reviews"
        data-id="J47GK"
        data-image="medium-gold"
        data-version="3.0"
      >
        Nikis Lawn and Garden Services
      </a>
    </div>
  );
}
