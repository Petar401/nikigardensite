import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Barlow_Semi_Condensed, Caveat } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chatbot/ChatWidget";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-semi-condensed",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const SITE_URL = "https://www.nikislawngardens.co.uk";
const SITE_NAME = "Niki's Lawn & Garden Services";
const SITE_DESCRIPTION =
  "Reliable lawn mowing, hedge trimming, borders and garden clearances across Norwich and 15 miles around. Fully insured, waste-carrier licensed. Free quotes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Norwich`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "gardener Norwich",
    "lawn mowing Norwich",
    "hedge trimming Norwich",
    "garden clearance Norwich",
    "lawn care Norfolk",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Norwich`,
    description: SITE_DESCRIPTION,
    images: [
      { url: "/assets/front-bg.jpg", width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Norwich`,
    description: SITE_DESCRIPTION,
    images: ["/assets/front-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#14432a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable} ${caveat.variable}`}
      >
        {children}
        <ChatWidget />
        <AccessibilityWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
