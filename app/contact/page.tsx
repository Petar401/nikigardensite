import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "./ContactForm";
import { SAME_AS } from "@/lib/site";

const GBP_URL = SAME_AS.find((u) => u.includes("google")) ?? "";

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      {/* ============ PAGE HEADER ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/assets/lawn-stripes.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,24,14,.8), rgba(9,24,14,.66))" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "60px 24px 64px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 13, letterSpacing: 2.4, color: "#cfe8a8" }}>
            GET IN TOUCH
          </div>
          <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(38px, 9vw, 62px)", lineHeight: 0.98, color: "#ffffff" }}>
            Let&apos;s sort your garden out
          </h1>
          <p style={{ margin: "14px auto 0", maxWidth: 540, fontSize: 18, lineHeight: 1.55, color: "#e4ecdb" }}>
            Call for a chat or send a few details below. I&apos;ll get back to you quickly with a free,
            no-obligation quote.
          </p>
        </div>
      </section>

      {/* ============ CONTACT BODY ============ */}
      <section className="contact-grid" style={{ maxWidth: 1120, margin: "0 auto", padding: "70px 24px 40px" }}>
        {/* FORM */}
        <div style={{ background: "#fff", border: "1px solid #e6ddc6", borderRadius: 18, padding: "34px 34px 38px", boxShadow: "0 10px 30px rgba(20,60,36,.09)" }}>
          <ContactForm />
        </div>

        {/* DETAILS SIDEBAR */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ background: "#14432a", color: "#f4efe1", borderRadius: 16, padding: "28px 26px" }}>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12, letterSpacing: 1.8, color: "#bfe88a" }}>
              CALL NIKI
            </div>
            <a href="tel:+447843818290" style={{ display: "block", marginTop: 6, fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 38, lineHeight: 1, color: "#ffffff", textDecoration: "none" }}>
              07843 818290
            </a>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:hello@nikislawngardens.co.uk" style={{ display: "flex", alignItems: "center", gap: 11, color: "#e7ddc7", textDecoration: "none", fontSize: 15.5 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bfe88a" strokeWidth="2">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5"></rect>
                  <path d="m3 6 9 6 9-6"></path>
                </svg>
                hello@nikislawngardens.co.uk
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 11, color: "#e7ddc7", fontSize: 15.5 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bfe88a" strokeWidth="2">
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Norwich &amp; 15 miles around
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 11, color: "#e7ddc7", fontSize: 15.5 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bfe88a" strokeWidth="2">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
                Mon&ndash;Sat, 8am&ndash;6pm
              </div>
              {GBP_URL && (
                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 11, color: "#e7ddc7", textDecoration: "none", fontSize: 15.5 }}
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bfe88a" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                  </svg>
                  Find us on Google
                </a>
              )}
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e6ddc6", borderRadius: 16, padding: "24px 26px" }}>
            <div style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: 12, letterSpacing: 1.8, color: "#5f8a2e" }}>
              PEACE OF MIND
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 11 }}>
              {["Fully insured (public liability)", "Waste-carrier licensed", "Free, no-obligation quotes", "No long contracts"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500, color: "#2b3724" }}>
                  <span style={{ color: "#5f8a2e", fontSize: 16 }}>&#10003;</span> {t}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#f4a11d", borderRadius: 16, padding: "22px 26px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: "0 0 auto", fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 46, color: "#14432a", lineHeight: 0.8 }}>
              20%
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 19, letterSpacing: 0.5, color: "#14432a" }}>
                OFF YOUR FIRST VISIT
              </div>
              <div style={{ marginTop: 3, fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 13, color: "#5a3a06" }}>
                Just mention it when you get in touch.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREA MAP ============ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 90px" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div className="kicker">WHERE I WORK</div>
          <h2 style={{ margin: "8px 0 0", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(26px, 5vw, 36px)", lineHeight: 1.05, color: "#14432a" }}>
            Covering Norwich &amp; 15 miles around
          </h2>
        </div>
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #e6ddc6",
            boxShadow: "0 10px 30px rgba(20,60,36,.09)",
            aspectRatio: "16/9",
            background: "#e7ddc7",
          }}
        >
          <iframe
            title="Map of Norwich service area"
            src="https://www.google.com/maps?q=Norwich%2C+Norfolk%2C+UK&z=10&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "100%", border: 0, display: "block" }}
          />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
