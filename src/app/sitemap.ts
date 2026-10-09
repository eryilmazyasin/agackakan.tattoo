import type { MetadataRoute } from "next";
import { artworks } from "@/content/site";
import { indexable, siteUrl } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Include only the canonical page; don't invent content modification dates.
  return indexable ? [{ url: siteUrl.href, images: artworks.map((artwork) => new URL(artwork.src, siteUrl).href) }] : [];
}
