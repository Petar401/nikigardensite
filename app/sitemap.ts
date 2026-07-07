import type { MetadataRoute } from "next";
import { POSTS } from "./blog/posts";

const SITE_URL = "https://www.nikislawngardens.co.uk";
// Bump when the static site copy changes so crawlers see a real update instead
// of a fresh timestamp on every build.
const SITE_UPDATED_AT = new Date("2026-07-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE_UPDATED_AT;
  const pages = ["", "/services", "/gallery", "/blog", "/contact"];
  const legalPages = ["/privacy", "/accessibility"];

  const staticEntries: MetadataRoute.Sitemap = pages.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const legalEntries: MetadataRoute.Sitemap = legalPages.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const postEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticEntries, ...legalEntries, ...postEntries];
}
