"use client";

import { useState } from "react";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import lawnStripes from "@/public/assets/lawn-stripes.jpg";
import hedge from "@/public/assets/hedge.jpg";
import flowerBed from "@/public/assets/flower-bed.jpg";
import roseMulch from "@/public/assets/rose-mulch.jpg";

const SERVICES = [
  {
    kicker: "LAWN CARE",
    title: "Lawns",
    bg: lawnStripes,
    reverse: false,
    desc: "The heart of most gardens. I’ll keep yours neat, healthy and striped — from a quick weekly cut to reviving a tired lawn or laying fresh turf.",
    items: ["Mowing & edging", "Decorative striping", "Feeding & weed control", "Scarifying & aerating", "Fresh turf laid", "Seasonal treatments"],
  },
  {
    kicker: "HEDGES, SHRUBS & SMALL TREES",
    title: "Hedges, shrubs & small trees",
    bg: hedge,
    reverse: true,
    desc: "Crisp hedges, tidy shrubs and well-shaped small trees. I’ll trim, shape and reduce sensibly — then clear every last cutting away. Send photos through the contact form and I’ll confirm a fair price before we book anything.",
    items: ["Hedge trimming", "Shrub shaping", "Small-tree pruning", "Height reductions", "Overgrowth tidy-ups", "All waste removed"],
  },
  {
    kicker: "BORDERS & BEDS",
    title: "Borders & Beds",
    bg: flowerBed,
    reverse: false,
    desc: "Beds that look cared for all year. Planting, weeding and a fresh layer of mulch or bark to keep things tidy and thriving.",
    items: ["Planting", "Weeding", "Mulching", "Bark chip", "Bed re-edging", "Seasonal colour"],
  },
  {
    kicker: "THE BIGGER JOBS",
    title: "Clearances & Tidies",
    bg: roseMulch,
    reverse: true,
    desc: "Let it get away from you? No problem. From full overgrown clearances to a one-off tidy before guests arrive, I’ll get it back under control.",
    items: ["Full clearances", "One-off tidies", "Seasonal blitzes", "Rubbish removal", "Overgrown gardens", "Pre-sale spruce-ups"],
  },
];

type Price = {
  name: string;
  price: string;
  unit: string;
  popular: boolean;
  feats: string[];
  hideFrom?: boolean;
};

const PRICES: Price[] = [
  { name: "Regular Mowing", price: "£25", unit: "per visit", popular: false, feats: ["Mow, edge & stripe", "Clippings cleared", "Weekly or fortnightly"] },
  { name: "Hedge Trimming", price: "Quoted", unit: "from photos", popular: true, hideFrom: true, feats: ["Send photos through the form", "Price depends on size, access, height & waste", "Confirmed before any booking or payment"] },
  { name: "Garden Clearance", price: "£110", unit: "per project", popular: false, feats: ["Overgrown gardens", "Full waste removal", "Quoted after a look"] },
  { name: "Garden Maintenance", price: "£35", unit: "per hour", popular: false, feats: ["Regular ongoing care", "Kept fresh and calm", "Weekly, fortnightly or monthly"] },
  { name: "Bed & Border Clearance", price: "£60", unit: "per project", popular: false, feats: ["Weeds & tired planting removed", "Messy borders tidied", "Ready for fresh planting or mulch"] },
  { name: "Leaf Clearance", price: "£35", unit: "seasonal reset", popular: false, feats: ["Paths, lawns & borders cleared", "Quick, satisfying clear-outs", "Before things get messy"] },
];

const FAQS = [
  {
    q: "How do I get a quote?",
    a: "Just call or drop me a message through the contact page with your postcode and a rough idea of what you need. Most quotes are free and I’ll usually pop round for a quick look before giving you a firm price.",
  },
  {
    q: "Do you offer regular visits?",
    a: "Yes — lots of my customers are on a weekly or fortnightly schedule, especially through the growing season. I’ll fit around what suits you, and there’s no long contract to sign.",
  },
  {
    q: "What areas do you cover?",
    a: "Norwich and roughly 15 miles around it, including Thorpe St Andrew, Eaton, Hellesdon, Sprowston, Wymondham and the surrounding villages. Not sure? Send your postcode and I’ll confirm.",
  },
  {
    q: "Do you take the green waste away?",
    a: "Always. I’m waste-carrier licensed, so every clipping, cutting and bag of clearings leaves with me. You’ll never be left with piles to deal with.",
  },
  {
    q: "Are you insured?",
    a: "Fully — I carry public liability insurance and I’m licensed to carry waste, so you’re completely covered while I’m working on your garden.",
  },
];

export default function ServicesPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <SiteNav />

      {/* ============ PAGE HEADER ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src={flowerBed}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,24,14,.78), rgba(9,24,14,.66))" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "64px 24px 68px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 2.4, color: "#cfe8a8" }}>
            SERVICES &amp; PRICING
          </div>
          <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(38px, 9vw, 62px)", lineHeight: 0.98, color: "#ffffff", textWrap: "balance" }}>
            Whatever your garden needs
          </h1>
          <p style={{ margin: "16px auto 0", maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: "#e4ecdb" }}>
            Regular upkeep or a one-off rescue — here&apos;s exactly what I can take off your hands, and a
            guide to what it costs.
          </p>
        </div>
      </section>

      {/* ============ DETAILED SERVICES ============ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px 20px", display: "flex", flexDirection: "column", gap: 72 }}>
        {SERVICES.map((s) => (
          <div key={s.title} style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap", flexDirection: s.reverse ? "row-reverse" : "row" }}>
            <div style={{ flex: "1 1 0", minWidth: 280 }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 18px 44px rgba(20,60,36,.2)",
                  aspectRatio: "5/4",
                }}
              >
                <Image
                  src={s.bg}
                  alt={s.title}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 860px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 280 }}>
              <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12.5, letterSpacing: 2, color: "#5f8a2e" }}>
                {s.kicker}
              </div>
              <h2 style={{ margin: "8px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, lineHeight: 1, color: "#14432a" }}>
                {s.title}
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: 17, lineHeight: 1.6, color: "#3c4837" }}>{s.desc}</p>
              <div className="svc-feature-grid" style={{ marginTop: 18 }}>
                {s.items.map((it) => (
                  <div key={it} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 15.5, fontWeight: 500, color: "#2b3724" }}>
                    <span style={{ flex: "0 0 auto", width: 20, height: 20, borderRadius: "50%", background: "#e2eecb", color: "#5f8a2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>
                      &#10003;
                    </span>
                    {it}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ============ PRICING GUIDE ============ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "84px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
          <div className="kicker">GUIDE PRICES</div>
          <h2 className="section-heading">Fair, honest pricing</h2>
          <p className="section-lede">
            Every garden&apos;s different, so these are starting points to give you a feel. You&apos;ll
            always get a firm price before any work begins — no surprises.
          </p>
        </div>

        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
          {PRICES.map((p) => {
            const dark = p.popular;
            return (
              <div
                key={p.name}
                className="price-card"
                style={{
                  position: "relative",
                  background: dark ? "#14432a" : "#fff",
                  border: dark ? "1px solid #14432a" : "1px solid #e6ddc6",
                  borderRadius: 16,
                  padding: "28px 26px",
                  boxShadow: dark ? "0 14px 34px rgba(20,60,36,.22)" : "0 6px 18px rgba(20,60,36,.06)",
                }}
              >
                {p.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: "#f4a11d",
                      color: "#14432a",
                      fontFamily: "var(--font-label)",
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    Most popular
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 1.4, textTransform: "uppercase", color: dark ? "#bfe88a" : "#5f8a2e" }}>
                  {p.name}
                </div>
                <div style={{ marginTop: 12, display: "flex", alignItems: "baseline", gap: 6 }}>
                  {!p.hideFrom && (
                    <span style={{ fontSize: 16, fontWeight: 600, color: dark ? "#c3d1b6" : "#8a9680" }}>from</span>
                  )}
                  <span
                    className="price-card-value"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: p.hideFrom ? 40 : 52,
                      lineHeight: 0.85,
                      color: dark ? "#ffffff" : "#14432a",
                    }}
                  >
                    {p.price}
                  </span>
                </div>
                <div style={{ marginTop: 6, fontSize: 14, color: dark ? "#c3d1b6" : "#8a9680" }}>{p.unit}</div>
                <div style={{ marginTop: 18, height: 1, background: dark ? "rgba(255,255,255,.15)" : "#eadfc6" }} />
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 9 }}>
                  {p.feats.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14.5, lineHeight: 1.4, color: dark ? "#dbe6cf" : "#3c4837" }}>
                      <span style={{ color: dark ? "#bfe88a" : "#5f8a2e", fontWeight: 700 }}>&#10003;</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 18, textAlign: "center", fontSize: 14, color: "#8a9680", maxWidth: 720, marginLeft: "auto", marginRight: "auto", lineHeight: 1.55 }}>
          Prices are a guide only and depend on garden size, access and condition. Hedge, shrub and small-tree work is
          quoted from photos — cost varies by scope, access, height and waste handling, and is always confirmed before any
          booking or payment. First visit gets <strong style={{ color: "#5f8a2e" }}>20% off</strong>.
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ background: "#14432a", color: "#f4efe1" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 2.2, color: "#bfe88a" }}>
              GOOD TO KNOW
            </div>
            <h2 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(32px, 6vw, 48px)", lineHeight: 1, color: "#ffffff" }}>
              Frequently asked questions
            </h2>
          </div>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "20px 22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      fontFamily: "var(--font-label)",
                      fontWeight: 700,
                      fontSize: 19,
                      color: "#ffffff",
                    }}
                  >
                    {f.q}
                    <span
                      style={{
                        flex: "0 0 auto",
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: isOpen ? "#bfe88a" : "rgba(255,255,255,.12)",
                        color: isOpen ? "#14432a" : "#bfe88a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        fontWeight: 400,
                        lineHeight: 1,
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: "transform .2s, background .2s",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 22px", fontSize: 16, lineHeight: 1.6, color: "#c3d1b6" }}>{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
