import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Get in touch with Niki for a free, no-obligation quote. Call 07843 818290 or send a few details — covering Norwich and 15 miles around.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
