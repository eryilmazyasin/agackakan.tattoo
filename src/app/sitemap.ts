import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { getGuideArtwork } from "@/content/guidesSeo";
import { artworks } from "@/content/site";
import { indexable, siteUrl } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Include only the canonical page; don't invent content modification dates.
  // Guide modification dates track their editorial publication, never the build time.
  return indexable ? [
    { url: siteUrl.href, images: artworks.map((artwork) => new URL(artwork.src, siteUrl).href) },
    { url: new URL("/rehber", siteUrl).href },
    ...guides.map((guide) => ({ url: new URL(`/rehber/${guide.slug}`, siteUrl).href, lastModified: guide.publishedAt, images: [new URL(getGuideArtwork(guide).src, siteUrl).href] })),
  ] : [];
}
