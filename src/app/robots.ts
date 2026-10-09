import type { MetadataRoute } from "next";
import { indexable, siteUrl } from "@/content/seo";

export default function robots(): MetadataRoute.Robots {
  // Crawlers must be able to read the alternative pages' noindex tags.
  return indexable
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", siteUrl).href }
    : { rules: { userAgent: "*", disallow: "/" } };
}
