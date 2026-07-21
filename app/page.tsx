import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ElfsightReviews, BarkBadge } from "@/components/ReviewsWidgets";
import frontBg from "@/public/assets/front-bg.jpg";
import lawnStripes from "@/public/assets/lawn-stripes.jpg";
import hedge from "@/public/assets/hedge.jpg";
import flowerBed from "@/public/assets/flower-bed.jpg";
import roseMulch from "@/public/assets/rose-mulch.jpg";

const SERVICES = [
  {
    title: "Lawns",
    desc: "Mowing & edging, crisp stripes, feeding and fresh turf laid.",
    bg: lawnStripes,
  },
  {
    title: "Hedges, shrubs & small trees",
    desc: "Trimming, shaping and sensible reductions — send photos for a fair quote.",
    bg: hedge,
  },
  {
    title: "Borders & Beds",
    desc: "Planting, weeding, mulching and fresh bark chip.",
    bg: flowerBed,
  },
  {
    title: "The Bigger Jobs",
    desc: "Full clearances plus one-off and seasonal tidies.",
    bg: roseMulch,
  },
];

const REASONS = [
  { stat: "On time", title: "Reliable, every visit", desc: "I turn up when I say I will — no missed days, no excuses." },
  { stat: "Spotless", title: "Left tidy after", desc: "Clippings cleared and paths swept before I leave." },
  { stat: "Insured", title: "Fully covered", desc: "Public liability insured and waste-carrier licensed." },
  { stat: "Local", title: "Norwich born & based", desc: "A familiar face who knows the local gardens well." },
];

const AREAS = [
  "Norwich",
  "Thorpe St Andrew",
  "Eaton",
  "Hellesdon",
  "Sprowston",
  "Wymondham",
  "Costessey",
  "Drayton",
  "Taverham",
  "Poringland",
];

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src={frontBg}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(9,24,14,.86) 0%, rgba(9,24,14,.62) 42%, rgba(9,24,14,.15) 100%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "96px 24px 104px" }}>
          <div style={{ maxWidth: 620 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(191,232,138,.16)",
                border: "1px solid rgba(191,232,138,.4)",
                borderRadius: 30,
                padding: "6px 14px",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#bfe88a" }} />
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: 12.5,
                  letterSpacing: 1.8,
                  color: "#cfe8a8",
                }}
              >
                TRUSTED IN NORWICH SINCE 2020
              </span>
            </div>
            <h1
              style={{
                margin: "22px 0 0",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(44px, 9vw, 76px)",
                lineHeight: 0.94,
                letterSpacing: 0.3,
                color: "#ffffff",
                textShadow: "0 2px 20px rgba(0,0,0,.35)",
                textWrap: "balance",
              }}
            >
              Lawns &amp; gardens, properly looked after.
            </h1>
            <p style={{ margin: "22px 0 0", maxWidth: 500, fontSize: 19, lineHeight: 1.55, color: "#e4ecdb", fontWeight: 400 }}>
              Mowing, hedges, borders and the bigger clearances — done reliably and left spotless. One
              friendly local gardener you can count on, every visit.
            </p>
            <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn btn-cta"
                style={{ fontSize: 17, letterSpacing: 0.5, padding: "16px 28px", borderRadius: 10, boxShadow: "0 6px 20px rgba(244,161,29,.4)" }}
              >
                Get a free quote &rarr;
              </Link>
              <a
                href="tel:+447843818290"
                className="btn btn-ghost-hero"
                style={{ fontSize: 17, letterSpacing: 0.5, padding: "15px 26px", borderRadius: 10 }}
              >
                Call 07843 818290
              </a>
            </div>
            <div style={{ marginTop: 30, display: "flex", gap: "10px 22px", flexWrap: "wrap" }}>
              {["Fully insured", "Waste-carrier licensed", "Free, no-obligation quotes"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, color: "#dbe6cf", fontSize: 14.5, fontWeight: 500 }}>
                  <span style={{ color: "#bfe88a", fontSize: 17 }}>&#10003;</span> {t}
                </div>
              ))}
            </div>
            <div className="hero-inline-pill">
              <span>20% off your first visit</span>
            </div>
          </div>
        </div>
        <div
          className="hero-badge"
          style={{
            position: "absolute",
            right: 56,
            top: "50%",
            transform: "translateY(-50%) rotate(-9deg)",
            width: 150,
            height: 150,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#f4a11d",
              border: "4px solid #0f3521",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
          >
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 56, color: "#14432a", lineHeight: 0.7 }}>
              20%
            </div>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 26, letterSpacing: 3, color: "#14432a", lineHeight: 1 }}>
              OFF
            </div>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 11, letterSpacing: 1, color: "#1c4a30", marginTop: 5, lineHeight: 1 }}>
              YOUR FIRST VISIT
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "84px 24px 20px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div className="kicker">WHAT I DO</div>
          <h2 className="section-heading">Everything your garden needs</h2>
          <p className="section-lede">
            From a regular tidy mow to a full seasonal overhaul — pick what you need, or ask me to keep
            the whole lot in check.
          </p>
        </div>
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 22 }}>
          {SERVICES.map((s) => (
            <Link key={s.title} href="/services" className="service-card">
              <div style={{ position: "relative", height: 168 }}>
                <Image
                  src={s.bg}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 20px 22px" }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24, letterSpacing: 0.3, color: "#14432a" }}>
                  {s.title}
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.5, color: "#5a6b52" }}>{s.desc}</p>
                <div style={{ marginTop: 14, fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: "#5f8a2e" }}>
                  Learn more &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ ABOUT NIKI ============ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "84px 24px" }}>
        <div className="split-2">
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(20,60,36,.22)",
                aspectRatio: "4/3",
                background: "url('/assets/lawn-stripes.jpg') center/cover no-repeat",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -26,
                left: -26,
                background: "#14432a",
                color: "#fff",
                borderRadius: 14,
                padding: "20px 24px",
                boxShadow: "0 12px 30px rgba(0,0,0,.25)",
              }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 44, lineHeight: 0.9, color: "#bfe88a" }}>
                5<span style={{ fontSize: 24 }}>yrs</span>
              </div>
              <div style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 12.5, letterSpacing: 0.5, color: "#dbe6cf", marginTop: 2 }}>
                keeping Norwich
                <br />
                gardens tidy
              </div>
            </div>
          </div>
          <div>
            <div className="kicker">ABOUT NIKI</div>
            <h2 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(30px, 6vw, 44px)", lineHeight: 1.02, color: "#14432a" }}>
              A local gardener who actually turns up.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 17, lineHeight: 1.6, color: "#3c4837" }}>
              Hi — I&apos;m Niki. For five years I&apos;ve kept lawns and borders looking their best right
              across Norwich. I turn up when I say I will, do a proper job, and always leave the place
              spotless — no churned-up beds, no bags of clippings left behind.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 17, lineHeight: 1.6, color: "#3c4837" }}>
              Whether it&apos;s a weekly mow or a one-off tidy before the family visit, you&apos;ll get the
              same friendly, careful service every time.
            </p>
            <div
              style={{
                marginTop: 18,
                fontFamily: "var(--font-signature)",
                fontWeight: 700,
                fontSize: 40,
                color: "#14432a",
                transform: "rotate(-4deg)",
                display: "inline-block",
                lineHeight: 0.8,
              }}
            >
              Niki
            </div>
            <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/gallery" className="btn btn-dark" style={{ fontSize: 15, letterSpacing: 0.5, padding: "13px 22px", borderRadius: 9 }}>
                See my work
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ fontSize: 15, letterSpacing: 0.5, padding: "12px 22px", borderRadius: 9 }}>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section style={{ background: "#14432a", color: "#f4efe1" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 36 }}>
            {REASONS.map((r) => (
              <div key={r.title}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 40, color: "#bfe88a", lineHeight: 1 }}>
                  {r.stat}
                </div>
                <div style={{ marginTop: 8, fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 16, letterSpacing: 0.3, color: "#ffffff" }}>
                  {r.title}
                </div>
                <div style={{ marginTop: 5, fontSize: 14.5, lineHeight: 1.5, color: "#c3d1b6" }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "84px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <div className="kicker">KIND WORDS</div>
          <h2 className="section-heading">What Norwich neighbours say</h2>
          <p className="section-lede">
            Real reviews from Niki&apos;s Google Business profile — updated automatically as new ones come in.
          </p>
        </div>
        <div style={{ marginTop: 36 }}>
          <ElfsightReviews />
        </div>
        <BarkBadge />
      </section>

      {/* ============ SERVICE AREA ============ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 90px" }}>
        <div className="split-media" style={{ background: "#e7ddc7", borderRadius: 18, overflow: "hidden" }}>
          <div style={{ padding: "52px 48px" }}>
            <div className="kicker">WHERE I WORK</div>
            <h2 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(30px, 6vw, 42px)", lineHeight: 1.02, color: "#14432a" }}>
              Norwich &amp; 15 miles all around
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "#3c4837", maxWidth: 420 }}>
              Based in Norwich and covering the surrounding villages. Not sure if you&apos;re in the patch?
              Drop me a message with your postcode and I&apos;ll let you know.
            </p>
            <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 9 }}>
              {AREAS.map((a) => (
                <span key={a} style={{ background: "#fff", border: "1px solid #d3c9ae", borderRadius: 20, padding: "7px 15px", fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 14, color: "#14432a" }}>
                  {a}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="btn btn-cta"
              style={{ marginTop: 26, display: "inline-block", fontSize: 15, letterSpacing: 0.5, padding: "13px 22px", borderRadius: 9 }}
            >
              Check your postcode
            </Link>
          </div>
          <div style={{ minHeight: 340, position: "relative" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60324.50462952578!2d1.28649405!3d52.6410033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe8a3fb86db0cbbd%3A0x8d19b7ffe00d259b!2sNikis%20Lawn%20%26%20Garden%20Services!5e1!3m2!1sen!2suk!4v1784647946662!5m2!1sen!2suk"
              title="Niki's Lawn & Garden Services on Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: 340, position: "absolute", inset: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
