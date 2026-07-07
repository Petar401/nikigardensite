import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
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
          padding: "11px 24px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
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
          }}
        >
          <div
            style={{
              flex: "0 0 auto",
              position: "relative",
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              background: "#f4efe1",
              boxShadow: "0 1px 5px rgba(20,60,36,.28)",
              border: "1.5px solid #14432a",
            }}
          >
            <Image
              src="/assets/logo.jpg"
              alt="Niki's Lawn & Garden logo"
              fill
              sizes="44px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: 0.3,
                color: "#14432a",
              }}
            >
              NIKI&apos;S LAWN &amp; GARDEN
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

        <nav style={{ display: "flex", gap: 26, alignItems: "center" }}>
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
          <Link href="/contact" className="btn btn-cta" style={{ fontSize: 14, letterSpacing: 0.6, padding: "10px 18px", borderRadius: 8 }}>
            Get a free quote
          </Link>
        </div>
      </div>
    </header>
  );
}
