"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "nlg-cookie-consent";
const REOPEN_EVENT = "nlg:open-cookie-prefs";

type Consent = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== "accepted" && saved !== "rejected") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }

    const openHandler = () => setVisible(true);
    window.addEventListener(REOPEN_EVENT, openHandler);
    return () => window.removeEventListener(REOPEN_EVENT, openHandler);
  }, []);

  function decide(choice: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage disabled — still hide the banner for this session */
    }
    document.dispatchEvent(
      new CustomEvent("nlg:consent", { detail: { consent: choice } }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-banner-title"
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <strong id="cookie-banner-title">Cookies on this site</strong>
          We only store what&apos;s needed to remember your choices (like your
          accessibility preferences). There&apos;s no tracking or advertising.
          Read more in our <Link href="/privacy">privacy policy</Link>.
        </div>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="btn cookie-reject"
            onClick={() => decide("rejected")}
          >
            Reject
          </button>
          <button
            type="button"
            className="btn btn-cta"
            onClick={() => decide("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
