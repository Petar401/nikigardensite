"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "nlg-a11y";

type Prefs = {
  largeText: boolean;
  contrast: boolean;
  reduceMotion: boolean;
};

const DEFAULT_PREFS: Prefs = {
  largeText: false,
  contrast: false,
  reduceMotion: false,
};

function applyToDocument(prefs: Prefs) {
  const root = document.documentElement;
  root.dataset.a11yLargeText = prefs.largeText ? "on" : "off";
  root.dataset.a11yContrast = prefs.contrast ? "on" : "off";
  root.dataset.a11yReduceMotion = prefs.reduceMotion ? "on" : "off";
}

function readPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFS;
    const parsed = JSON.parse(raw) as Partial<Prefs>;
    return { ...DEFAULT_PREFS, ...parsed };
  } catch {
    return DEFAULT_PREFS;
  }
}

function LargeTextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h10" />
      <path d="M9 6v14" />
      <path d="M14 12h6" />
      <path d="M17 12v8" />
    </svg>
  );
}
function ContrastIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" fill="currentColor" stroke="none" />
      <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
    </svg>
  );
}
function MotionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h10" />
      <path d="M14 8l4 4-4 4" />
      <path d="M20 5v14" />
    </svg>
  );
}
function A11yIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4.5" r="1.75" fill="currentColor" />
      <path d="M4 8.5c3 1 5 1.4 8 1.4s5-.4 8-1.4" />
      <path d="M12 9.9v5.1" />
      <path d="M8.5 21l3.5-6 3.5 6" />
    </svg>
  );
}

export default function AccessibilityWidget() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [open, setOpen] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = readPrefs();
    setPrefs(saved);
    applyToDocument(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        fabRef.current &&
        !fabRef.current.contains(t)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const update = useCallback((patch: Partial<Prefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      applyToDocument(next);
      return next;
    });
  }, []);

  return (
    <>
      <button
        ref={fabRef}
        type="button"
        className="a11y-fab"
        aria-label={open ? "Close accessibility options" : "Open accessibility options"}
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <A11yIcon />
      </button>

      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          className="a11y-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="a11y-panel-title"
        >
          <div className="a11y-panel-header">
            <div id="a11y-panel-title" className="a11y-panel-title">
              Accessibility
            </div>
            <button
              type="button"
              className="chat-close"
              aria-label="Close accessibility options"
              onClick={() => {
                setOpen(false);
                fabRef.current?.focus();
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="a11y-panel-body">
            <button
              type="button"
              className="a11y-toggle"
              role="switch"
              aria-checked={prefs.largeText}
              onClick={() => update({ largeText: !prefs.largeText })}
            >
              <span className="a11y-toggle-icon" aria-hidden="true">
                <LargeTextIcon />
              </span>
              <span className="a11y-toggle-text">
                <span className="a11y-toggle-label">Larger text</span>
                <span className="a11y-toggle-desc">Bumps text size site-wide.</span>
              </span>
              <span className="a11y-switch" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="a11y-toggle"
              role="switch"
              aria-checked={prefs.contrast}
              onClick={() => update({ contrast: !prefs.contrast })}
            >
              <span className="a11y-toggle-icon" aria-hidden="true">
                <ContrastIcon />
              </span>
              <span className="a11y-toggle-text">
                <span className="a11y-toggle-label">High contrast</span>
                <span className="a11y-toggle-desc">Stronger colours and underlined links.</span>
              </span>
              <span className="a11y-switch" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="a11y-toggle"
              role="switch"
              aria-checked={prefs.reduceMotion}
              onClick={() => update({ reduceMotion: !prefs.reduceMotion })}
            >
              <span className="a11y-toggle-icon" aria-hidden="true">
                <MotionIcon />
              </span>
              <span className="a11y-toggle-text">
                <span className="a11y-toggle-label">Reduce motion</span>
                <span className="a11y-toggle-desc">Stops hover animations and smooth scrolling.</span>
              </span>
              <span className="a11y-switch" aria-hidden="true" />
            </button>
          </div>

          <div className="a11y-panel-foot">
            Read our <Link href="/accessibility">accessibility statement</Link>.
          </div>
        </div>
      )}
    </>
  );
}
