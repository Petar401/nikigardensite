"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "nlg-cookie-consent";
const REOPEN_EVENT = "nlg:open-cookie-prefs";

type Consent = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);

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

  // Expose banner presence + measured height so floating buttons can offset above it.
  useEffect(() => {
    const body = document.body;
    if (!visible) {
      body.removeAttribute("data-cookie-visible");
      body.style.removeProperty("--cookie-banner-h");
      return;
    }
    body.setAttribute("data-cookie-visible", "true");
    acceptRef.current?.focus();

    const el = bannerRef.current;
    if (!el) return;
    const setHeight = () => {
      body.style.setProperty("--cookie-banner-h", `${el.offsetHeight}px`);
    };
    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    return () => {
      ro.disconnect();
      body.removeAttribute("data-cookie-visible");
      body.style.removeProperty("--cookie-banner-h");
    };
  }, [visible]);

  // Simple focus trap between the two action buttons.
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = bannerRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button"
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible]);

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
      ref={bannerRef}
      className="cookie-banner"
      role="dialog"
      aria-modal="true"
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
            ref={acceptRef}
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
