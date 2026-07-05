import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Lawn care, hedge & tree work, borders and full garden clearances across Norwich. Clear, honest pricing and a free, no-obligation quote.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
