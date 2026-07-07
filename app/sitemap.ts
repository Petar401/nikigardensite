import type { MetadataRoute } from "next";
import { POSTS } from "./blog/posts";

const SITE_URL = "https://www.nikislawngardens.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
