import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteNav />

      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "clamp(64px, 12vw, 120px) 24px",
          textAlign: "center",
        }}
      >
        <div className="kicker">PAGE NOT FOUND</div>
        <h1
          style={{
            margin: "12px 0 0",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "clamp(56px, 14vw, 96px)",
            lineHeight: 0.95,
            color: "#14432a",
          }}
        >
          404
        </h1>
        <p
          style={{
            margin: "16px auto 0",
            maxWidth: 460,
            fontSize: 18,
            lineHeight: 1.55,
            color: "#5a6b52",
          }}
        >
          Looks like this page has been cleared away. Let&apos;s get you back to
          something useful.
        </p>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/"
            className="btn btn-dark"
            style={{ fontSize: 15, letterSpacing: 0.5, padding: "13px 22px", borderRadius: 9 }}
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline"
            style={{ fontSize: 15, letterSpacing: 0.5, padding: "12px 22px", borderRadius: 9 }}
          >
            Get a free quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
