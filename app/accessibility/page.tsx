import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "How we're working to make nikislawngardens.co.uk usable for everyone, and how to get in touch if you hit a barrier.",
  alternates: { canonical: "/accessibility" },
  robots: { index: true, follow: true },
};

const UPDATED = "July 2026";

export default function AccessibilityPage() {
  return (
    <>
      <SiteNav />

      <header
        style={{
          background: "var(--forest)",
          color: "#f4efe1",
          padding: "72px 24px 56px",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 2.2,
              color: "var(--lime)",
            }}
          >
            FOR EVERYONE
          </div>
          <h1
            style={{
              margin: "10px 0 0",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(34px, 6vw, 52px)",
              lineHeight: 1,
              color: "#fff",
            }}
          >
            Accessibility
          </h1>
          <div className="post-meta">Last updated: {UPDATED}</div>
        </div>
      </header>

      <main style={{ padding: "56px 24px 72px" }}>
        <article
          className="article-prose"
          style={{ maxWidth: 760, margin: "0 auto" }}
        >
          <p>
            We want the site to be usable for everyone — including people who
            rely on a keyboard, a screen reader, magnification, or reduced
            motion. This page explains what we&apos;ve done, what we&apos;re
            still working on, and how to tell us if something isn&apos;t
            working for you.
          </p>

          <h2>What we aim for</h2>
          <p>
            We&apos;re working towards conformance with the{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.2
            </a>{" "}
            at level AA. That means clear headings and link text, sufficient
            colour contrast, resizable text, keyboard-only navigation and
            captions or descriptions for any non-text content we add.
          </p>

          <h2>Built-in accessibility options</h2>
          <p>
            The floating accessibility button (bottom-left of every page) opens
            a small panel where you can turn on:
          </p>
          <ul style={{ margin: "0 0 20px 22px" }}>
            <li>
              <strong>Larger text</strong> — bumps text size across the site.
            </li>
            <li>
              <strong>High contrast</strong> — switches to a stronger colour
              palette with underlined links.
            </li>
            <li>
              <strong>Reduce motion</strong> — turns off hover animations, chat
              pop-in and smooth scrolling.
            </li>
          </ul>
          <p>
            Your choices are saved to your browser so they stay on when you come
            back. We also respect the operating system&apos;s{" "}
            <em>prefers-reduced-motion</em> setting.
          </p>

          <h2>Compatibility</h2>
          <p>
            The site is tested with recent versions of Chrome, Safari, Firefox
            and Edge on desktop and mobile. It should also work with popular
            screen readers (VoiceOver, NVDA, JAWS, TalkBack). If you use an
            older browser and something doesn&apos;t look right, please let us
            know — we&apos;ll take a look.
          </p>

          <h2>Known limitations</h2>
          <p>
            We&apos;re a small business and this policy is honest about what we
            haven&apos;t fixed yet. If we introduce content that can&apos;t meet
            the guidelines (for example, an older photo without a caption, or a
            third-party map embed), we&apos;ll flag it here and offer a
            plain-text alternative on request.
          </p>

          <h2>Tell us if something&apos;s wrong</h2>
          <p>
            If you&apos;ve hit a barrier — a button you can&apos;t reach, an
            image with no description, a form you can&apos;t complete — please
            email{" "}
            <a href="mailto:info@nikislawngardens.co.uk">
              info@nikislawngardens.co.uk
            </a>{" "}
            or call <a href="tel:+447843818290">07843 818290</a>. Tell us the
            page you were on and what went wrong; we&apos;ll aim to reply within
            five working days and fix it as soon as we reasonably can.
          </p>

          <h2>Enforcement</h2>
          <p>
            If you&apos;re not satisfied with our response, you can contact the
            Equality Advisory and Support Service (EASS) about your complaint.
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
