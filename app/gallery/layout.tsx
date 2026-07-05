import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Recent lawns, hedges and borders looked after around Norwich. Real photos of the work — striped lawns, sharp hedging and freshly mulched beds.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
