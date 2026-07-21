import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { POSTS, getPost } from "../posts";
import SummerGardenCareNorwich from "../_content/summer-garden-care-norwich";

const SITE_URL = "https://www.nikislawngardens.co.uk";
const SITE_NAME = "Niki's Lawn & Garden Services";

/** Maps a post slug to the component that renders its body. */
const BODIES: Record<string, React.ComponentType> = {
  "summer-garden-care-norwich": SummerGardenCareNorwich,
};

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.dateISO,
      images: [{ url: post.image, width: 1366, height: 768, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const Body = BODIES[slug];
  if (!post || !Body) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <SiteNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============ ARTICLE HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,24,14,.72), rgba(9,24,14,.72))" }} />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", padding: "60px 24px 64px" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 1.6, textTransform: "uppercase", color: "#cfe8a8", textDecoration: "none", padding: "8px 4px", minHeight: 44 }}>
            &larr; Back to the blog
          </Link>
          <div style={{ marginTop: 12, display: "flex", gap: 9, flexWrap: "wrap" }}>
            {post.tags.map((t) => (
              <span key={t} style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12.5, letterSpacing: 1, textTransform: "uppercase", color: "#14432a", background: "rgba(191,232,138,.9)", borderRadius: 20, padding: "5px 12px" }}>
                {t}
              </span>
            ))}
          </div>
          <h1 style={{ margin: "16px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(32px, 6.5vw, 52px)", lineHeight: 1.02, color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,.35)", textWrap: "balance" }}>
            {post.title}
          </h1>
          <div className="post-meta">
            By Niki &middot; {post.dateLabel} &middot; {post.readTime}
          </div>
        </div>
      </section>

      {/* ============ ARTICLE BODY ============ */}
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "52px 24px 24px" }}>
        <Body />
      </section>

      {/* ============ CTA ============ */}
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "16px 24px 90px" }}>
        <div style={{ background: "#14432a", borderRadius: 16, padding: "34px 32px", color: "#f4efe1", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12.5, letterSpacing: 2, color: "#bfe88a" }}>
              RATHER LEAVE IT TO SOMEONE?
            </div>
            <div style={{ marginTop: 6, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 27, lineHeight: 1.05, color: "#ffffff" }}>
              I&apos;ll keep your garden looking its best all summer.
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-cta" style={{ fontSize: 15, letterSpacing: 0.5, padding: "13px 22px", borderRadius: 9 }}>
              Get a free quote
            </Link>
            <Link href="/services" className="btn btn-ghost-footer" style={{ fontSize: 15, letterSpacing: 0.5, padding: "12px 22px", borderRadius: 9 }}>
              See my services
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
