import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "Garden Care Blog",
  description:
    "Seasonal garden advice from a local Norwich gardener — practical tips on lawns, borders, hedges and watering for gardens across Norwich and Norfolk.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Garden Care Blog | Niki's Lawn & Garden Services",
    description:
      "Seasonal garden advice from a local Norwich gardener — practical tips on lawns, borders, hedges and watering across Norwich and Norfolk.",
    images: [
      {
        url: "/assets/summer-garden-care.jpg",
        width: 1366,
        height: 768,
        alt: "A freshly striped green lawn beside a Norfolk cottage with borders in full summer bloom near Norwich",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      <SiteNav />

      {/* ============ PAGE HEADER ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('/assets/summer-garden-care.jpg') center 60%/cover no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,24,14,.78), rgba(9,24,14,.66))" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "64px 24px 68px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 2.4, color: "#cfe8a8" }}>
            GARDEN CARE BLOG
          </div>
          <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(38px, 9vw, 62px)", lineHeight: 0.98, color: "#ffffff", textWrap: "balance" }}>
            Tips from the garden gate
          </h1>
          <p style={{ margin: "16px auto 0", maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: "#e4ecdb" }}>
            Down-to-earth advice for keeping your garden looking its best through the Norfolk seasons —
            straight from someone who&apos;s out in them all week.
          </p>
        </div>
      </section>

      {/* ============ POST GRID ============ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 24px 90px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 26 }}>
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="service-card">
              <div style={{ height: 200, backgroundImage: `url('${p.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: "22px 22px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 11.5, letterSpacing: 1, textTransform: "uppercase", color: "#5f8a2e", background: "#eef4e2", borderRadius: 20, padding: "4px 11px" }}>
                    {p.tags[0]}
                  </span>
                  <span style={{ fontSize: 13, color: "#8a9680" }}>
                    {p.dateLabel} &middot; {p.readTime}
                  </span>
                </div>
                <h2 style={{ margin: "13px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 25, lineHeight: 1.08, letterSpacing: 0.2, color: "#14432a" }}>
                  {p.title}
                </h2>
                <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.55, color: "#5a6b52" }}>{p.excerpt}</p>
                <div style={{ marginTop: 16, fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: "#5f8a2e" }}>
                  Read more &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
