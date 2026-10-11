import type { Metadata } from "next";
import type { Guide } from "./guides.types";
import { artworks, site } from "./site";
import { siteUrl } from "./seo";

export function getGuideArtwork(guide: Guide) {
  // Each editorial illustration references an actual portfolio work, not an invented result.
  return artworks.find((artwork) => artwork.id === guide.artworkId) ?? artworks[0];
}

export function getGuideMetadata(guide: Guide): Metadata {
  const url = `/rehber/${guide.slug}`;
  const images = [{ url: `${url}/opengraph-image`, width: 1200, height: 630, type: "image/png", alt: `${guide.title} — ${site.name}` }];
  return {
    title: guide.seoTitle, description: guide.description,
    authors: [{ name: site.name }], alternates: { canonical: url },
    openGraph: { type: "article", title: guide.seoTitle, description: guide.description, url, siteName: site.name, locale: "tr_TR", publishedTime: guide.publishedAt, modifiedTime: guide.publishedAt, authors: [site.name], images },
    twitter: { card: "summary_large_image", title: guide.seoTitle, description: guide.description, images },
  };
}

export function getGuideStructuredData(guide: Guide) {
  const url = new URL(`/rehber/${guide.slug}`, siteUrl).href;
  const artwork = getGuideArtwork(guide);
  return {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BlogPosting", "@id": `${url}#article`, mainEntityOfPage: url, headline: guide.title, description: guide.description, image: new URL(artwork.src, siteUrl).href, inLanguage: "tr-TR", datePublished: guide.publishedAt, dateModified: guide.publishedAt,
        author: { "@type": "Organization", name: site.name, url: siteUrl.href },
        publisher: { "@type": "Organization", name: site.name, url: siteUrl.href, logo: { "@type": "ImageObject", url: new URL(site.logo, siteUrl).href } } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: siteUrl.href },
        { "@type": "ListItem", position: 2, name: "Dövme Rehberi", item: new URL("/rehber", siteUrl).href },
        { "@type": "ListItem", position: 3, name: guide.title, item: url },
      ] },
    ],
  };
}
