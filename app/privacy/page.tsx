import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Niki's Lawn & Garden Services collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const UPDATED = "July 2026";

export default function PrivacyPage() {
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
            LEGAL
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
            Privacy Policy
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
            This policy explains what personal information Niki&apos;s Lawn &amp;
            Garden Services (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when you use
            this website or contact us, and how we look after it. It&apos;s written
            to comply with UK GDPR and the Data Protection Act 2018.
          </p>

          <h2>Who we are</h2>
          <p>
            Niki&apos;s Lawn &amp; Garden Services is a sole-trader gardening
            business based in Norwich, Norfolk. You can reach us at{" "}
            <a href="mailto:info@nikislawngardens.co.uk">info@nikislawngardens.co.uk</a>{" "}
            or on <a href="tel:+447843818290">07843 818290</a>. For any privacy
            question — including a request to see, correct or delete your data —
            use those same contacts.
          </p>

          <h2>What we collect</h2>
          <p>
            The only information we ask you for is what we need to give you a
            quote and do the work. Through the <Link href="/contact">contact
            form</Link> that&apos;s your name, email address, phone number,
            postcode and a short message describing the job. If you call, text or
            email us directly, we&apos;ll have whatever you share in that
            conversation.
          </p>
          <p>
            The website itself doesn&apos;t use analytics, advertising or
            fingerprinting. Our web host (Vercel) records standard access logs
            for security and abuse prevention, held for a short retention period
            set by Vercel — we don&apos;t link these logs to individuals.
          </p>

          <h2>Cookies and local storage</h2>
          <p>
            We don&apos;t set advertising or tracking cookies. The site uses a
            small amount of your browser&apos;s local storage to remember:
          </p>
          <ul style={{ margin: "0 0 20px 22px" }}>
            <li>Your cookie banner choice, so we don&apos;t keep asking.</li>
            <li>Your accessibility preferences (larger text, high contrast, reduced motion).</li>
            <li>Your chat transcript with the on-site assistant, for the current browser tab only.</li>
          </ul>
          <p>
            You can clear these at any time from your browser settings, or reopen
            the cookie banner via the &ldquo;Cookie preferences&rdquo; link at
            the bottom of any page.
          </p>

          <h2>Why we hold your data</h2>
          <p>
            We use the details you share only to reply to your enquiry, give a
            quote, arrange visits, do the work and invoice for it. Where you
            fill in the contact form, our lawful basis is your consent and our
            legitimate interest in responding to enquiries about our services.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries that don&apos;t turn into a job are deleted within twelve
            months. For customers, we keep contact details and job records for
            up to six years after the last visit, to meet HMRC record-keeping
            requirements and to handle any warranty or insurance question that
            comes back around later.
          </p>

          <h2>Who we share it with</h2>
          <p>
            We don&apos;t sell or trade your data. We only share it with service
            providers we can&apos;t operate without — the web host that runs the
            site (Vercel Inc.) and the email provider we use to send and receive
            messages. If we ever had to disclose information to comply with a
            legal obligation, we&apos;d only share what was strictly required.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK GDPR you can ask us to show you the data we hold about you,
            correct anything that&apos;s wrong, delete it, or restrict how we
            use it. Email <a href="mailto:info@nikislawngardens.co.uk">info@nikislawngardens.co.uk</a> and
            we&apos;ll respond within a month. If you&apos;re not happy with our
            reply you have the right to complain to the Information
            Commissioner&apos;s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change anything material we&apos;ll update the date at the top
            of this page. For questions about anything you&apos;ve read here,
            just get in touch.
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
