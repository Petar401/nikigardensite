"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close on route change.
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Escape closes; focus returns to hamburger.
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  // Body scroll lock while open.
  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  // Move focus into the drawer when opened.
  useEffect(() => {
    if (!drawerOpen) return;
    const first = drawerRef.current?.querySelector<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])"
    );
    first?.focus();
  }, [drawerOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,239,225,.94)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #ddd4bd",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "11px 20px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
            marginRight: "auto",
            minWidth: 0,
          }}
        >
          <div
            style={{
              flex: "0 0 auto",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#f4efe1 url('/assets/logo.jpg') center/cover no-repeat",
              boxShadow: "0 1px 5px rgba(20,60,36,.28)",
              border: "1.5px solid #14432a",
            }}
          />
          <div style={{ lineHeight: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(15px, 3.6vw, 19px)",
                letterSpacing: 0.3,
                color: "#14432a",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              NIKI&apos;S LAWN &amp; GARDEN SERVICES
            </div>
            <div
              style={{
                marginTop: 3,
                fontFamily: "var(--font-label)",
                fontWeight: 700,
                fontSize: 9.5,
                letterSpacing: 2.6,
                color: "#5f8a2e",
              }}
            >
              NORWICH&nbsp;&nbsp;&middot;&nbsp;&nbsp;EST. 2020
            </div>
          </div>
        </Link>

        {/* Desktop nav + phone + CTA — hidden on mobile via CSS */}
        <nav className="nav-desktop" style={{ justifyContent: "flex-end" }}>
          <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${isActiveLink(pathname, link.href) ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginLeft: 6 }}>
            <a
              href="tel:+447843818290"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                textDecoration: "none",
                color: "#14432a",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5f8a2e"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 19,
                  letterSpacing: 0.3,
                }}
              >
                07843 818290
              </span>
            </a>
            <Link
              href="/contact"
              className="btn btn-cta"
              style={{ fontSize: 14, letterSpacing: 0.6, padding: "10px 18px", borderRadius: 8 }}
            >
              Get a free quote
            </Link>
          </div>
        </nav>

        {/* Mobile controls — hidden on desktop via CSS */}
        <div className="nav-mobile-controls">
          <a
            href="tel:+447843818290"
            className="nav-mobile-icon-btn"
            aria-label="Call Niki on 07843 818290"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
          <button
            ref={hamburgerRef}
            type="button"
            className="nav-mobile-icon-btn"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {mounted && drawerOpen && createPortal(
        <>
          <div className="mobile-drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
          <div
            ref={drawerRef}
            id="mobile-drawer"
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="mobile-drawer-head">
              <div className="mobile-drawer-title">Menu</div>
              <button
                type="button"
                className="mobile-drawer-close"
                aria-label="Close menu"
                onClick={() => {
                  setDrawerOpen(false);
                  hamburgerRef.current?.focus();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="mobile-drawer-body">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-drawer-link${isActiveLink(pathname, link.href) ? " active" : ""}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mobile-drawer-divider" />
              <a href="tel:+447843818290" className="mobile-drawer-phone">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5f8a2e"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: 0.3,
                  }}
                >
                  07843 818290
                </span>
              </a>
              <Link
                href="/contact"
                className="btn btn-cta mobile-drawer-cta"
                onClick={() => setDrawerOpen(false)}
              >
                Get a free quote &rarr;
              </Link>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
