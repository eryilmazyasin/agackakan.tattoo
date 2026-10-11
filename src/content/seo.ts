import type { Metadata } from "next";
import { artworks, site } from "./site";

// A public origin is supplied at build time; local and preview deployments stay out of search results.
export const siteUrl = new URL(process.env.SITE_URL || "https://agackakantattoo.com");
if (!["http:", "https:"].includes(siteUrl.protocol) || siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash) {
  throw new Error("SITE_URL must be an absolute HTTP(S) origin without a path, query or fragment.");
}
// Development must remain noindex even when canonical URLs use the real domain.
export const indexable = process.env.NODE_ENV !== "development" && !["localhost", "127.0.0.1", "[::1]"].includes(siteUrl.hostname)
  && process.env.VERCEL_ENV !== "preview" && process.env.SEO_INDEXABLE !== "false";
export const seoTitle = "Ağaçkakan Tattoo | Esenler Dövme Stüdyosu";
export const seoDescription = "İstanbul Esenler’de Barış Çakmak ile kişiye özel dövme tasarımı ve uygulaması. Ağaçkakan Tattoo’nun çalışmalarını inceleyin, randevu için iletişime geçin.";
export const previewMetadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: new URL("/", siteUrl).href },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness", "@id": new URL("/#studio", siteUrl).href,
      name: site.name, url: siteUrl.href, description: seoDescription,
      telephone: site.contact.telephone.replace("tel:", ""),
      logo: new URL(site.logo, siteUrl).href, image: new URL(site.images.portrait.src, siteUrl).href,
      sameAs: [site.appointment], hasMap: site.contact.maps,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mimarsinan Mahallesi, Davutpaşa Caddesi No:7/3 (Dörtyol Yürüyüş Yolu)",
        addressLocality: "Esenler", addressRegion: "İstanbul", postalCode: "34200", addressCountry: "TR",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Dövme tasarımı ve uygulaması",
        itemListElement: [{ "@type": "Offer", itemOffered: {
          "@type": "Service", name: "Kişiye özel dövme tasarımı ve uygulaması",
          provider: { "@id": new URL("/#studio", siteUrl).href },
        } }],
      },
    },
    {
      "@type": "Person", "@id": new URL("/#artist", siteUrl).href,
      name: site.artist, jobTitle: "Dövme sanatçısı", image: new URL(site.images.portrait.src, siteUrl).href,
      worksFor: { "@id": new URL("/#studio", siteUrl).href },
    },
    {
      "@type": "WebSite", "@id": new URL("/#website", siteUrl).href,
      name: site.name, url: siteUrl.href, inLanguage: "tr-TR", publisher: { "@id": new URL("/#studio", siteUrl).href },
    },
    {
      "@type": "WebPage", "@id": new URL("/#webpage", siteUrl).href,
      name: seoTitle, url: siteUrl.href, description: seoDescription, inLanguage: "tr-TR",
      isPartOf: { "@id": new URL("/#website", siteUrl).href }, about: { "@id": new URL("/#studio", siteUrl).href },
      hasPart: { "@id": new URL("/#eserler", siteUrl).href },
    },
    {
      "@type": "ImageGallery", "@id": new URL("/#eserler", siteUrl).href,
      name: "Barış Çakmak’ın dövme çalışmaları",
      image: artworks.map((artwork) => ({
        "@type": "ImageObject", name: artwork.title, description: artwork.description,
        contentUrl: new URL(artwork.src, siteUrl).href, width: artwork.width, height: artwork.height,
        creator: { "@id": new URL("/#artist", siteUrl).href },
      })),
    },
  ],
};
