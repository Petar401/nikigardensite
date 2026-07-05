import type { MetadataRoute } from "next";

const SITE_URL = "https://www.nikislawngardens.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/services", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
