"use client";

import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const PHOTOS = [
  { src: "/assets/lawn-stripes.jpg", cat: "lawns", catLabel: "LAWNS", title: "Freshly striped back lawn" },
  { src: "/assets/hedge.jpg", cat: "hedges", catLabel: "HEDGES", title: "Sharp, squared-off hedging" },
  { src: "/assets/flower-bed.jpg", cat: "borders", catLabel: "BORDERS & BEDS", title: "Weeded & mulched border" },
  { src: "/assets/rose-mulch.jpg", cat: "borders", catLabel: "BORDERS & BEDS", title: "Fresh bark chip rose bed" },
  { src: "/assets/front-bg.jpg", cat: "lawns", catLabel: "LAWNS", title: "Front lawn at its best" },
];

const FILTERS = [
  { key: "all", label: "All work" },
  { key: "lawns", label: "Lawns" },
  { key: "hedges", label: "Hedges" },
  { key: "borders", label: "Borders & beds" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(-1);

  const visible = filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);
  const active = lightbox >= 0 && lightbox < visible.length ? visible[lightbox] : null;

  return (
    <>
      <SiteNav />

      {/* ============ PAGE HEADER ============ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "70px 24px 8px", textAlign: "center" }}>
        <div className="kicker">RECENT WORK</div>
        <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 62, lineHeight: 0.98, color: "#14432a" }}>
          Gardens I&apos;ve been looking after
        </h1>
        <p style={{ margin: "14px auto 0", maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: "#5a6b52" }}>
          A few from around Norwich. Real lawns, hedges and borders — click any photo to take a closer
          look.
        </p>
      </section>

      {/* ============ FILTERS ============ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 8px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
          {FILTERS.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setLightbox(-1);
                }}
                style={{
                  cursor: "pointer",
                  border: isActive ? "1.5px solid #14432a" : "1.5px solid #d3c9ae",
                  background: isActive ? "#14432a" : "#fff",
                  color: isActive ? "#fff" : "#14432a",
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: 0.4,
                  padding: "10px 20px",
                  borderRadius: 24,
                  transition: "all .15s",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ============ GRID ============ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "28px 24px 90px" }}>
        <div style={{ columns: "3 300px", columnGap: 18 }}>
          {visible.map((p, i) => (
            <button key={p.src} onClick={() => setLightbox(i)} className="gallery-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.title} style={{ display: "block", width: "100%", height: "auto" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg, rgba(9,24,14,.72) 0%, rgba(9,24,14,0) 45%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 18,
                  textAlign: "left",
                }}
              >
                <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 10.5, letterSpacing: 1.6, color: "#bfe88a" }}>
                  {p.catLabel}
                </div>
                <div style={{ marginTop: 3, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, lineHeight: 1, color: "#fff" }}>
                  {p.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      {active && (
        <div
          onClick={() => setLightbox(-1)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(8,18,11,.92)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
          }}
        >
          <button
            onClick={() => setLightbox(-1)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 22,
              right: 26,
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,.14)",
              color: "#fff",
              fontSize: 24,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#10005;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + visible.length) % visible.length);
            }}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: 26,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,.14)",
              color: "#fff",
              fontSize: 26,
              cursor: "pointer",
            }}
          >
            &#8249;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % visible.length);
            }}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: 26,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,.14)",
              color: "#fff",
              fontSize: 26,
              cursor: "pointer",
            }}
          >
            &#8250;
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 900, maxHeight: "82vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.title}
              style={{ maxWidth: "100%", maxHeight: "72vh", borderRadius: 12, boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}
            />
            <div style={{ marginTop: 16, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12, letterSpacing: 1.8, color: "#bfe88a" }}>
                {active.catLabel}
              </div>
              <div style={{ marginTop: 4, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 28, color: "#fff" }}>
                {active.title}
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </>
  );
}
