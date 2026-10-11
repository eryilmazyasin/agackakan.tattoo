import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { guides, getReadingMinutes } from "@/content/guides";
import { getGuideArtwork } from "@/content/guidesSeo";
import { siteUrl } from "@/content/seo";
import { site } from "@/content/site";

const description = "İlk dövmeden tam kol planlamasına; tasarım, bölge, boyut ve dövme kapatma hakkında karar vermene yardımcı olacak Ağaçkakan Tattoo rehberleri.";
export const metadata: Metadata = {
  title: "Dövme Rehberi: Tasarım ve Dövme Öncesi Sorular", description,
  alternates: { canonical: "/rehber" },
  openGraph: { type: "website", title: "Dövme Rehberi", description, url: "/rehber", siteName: site.name, locale: "tr_TR", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Dövme Rehberi", description, images: ["/opengraph-image"] },
};

export default function GuideIndex() {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Dövme Rehberi", description, url: new URL("/rehber", siteUrl).href, inLanguage: "tr-TR", mainEntity: { "@type": "ItemList", itemListElement: guides.map((guide, index) => ({ "@type": "ListItem", position: index + 1, name: guide.title, url: new URL(`/rehber/${guide.slug}`, siteUrl).href })) } };
  return <div className="guide-index">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <div className="guide-index-heading"><p className="eyebrow">Dövme hakkında</p><h1>Dövme rehberi.</h1><p>Aklında bir fikir var, ama nereden başlayacağını bilmiyor olabilirsin. Tasarımdan yer seçimine, görüşmeye gelmeden önce düşünmene yardımcı olacak birkaç konu.</p></div>
    <div className="guide-list">{guides.map((guide) => {
      const artwork = getGuideArtwork(guide);
      return <Link href={`/rehber/${guide.slug}`} className="guide-preview" key={guide.slug}>
        <div className="guide-preview-image"><Image src={artwork.src} alt={artwork.alt} fill sizes="(max-width: 700px) 90vw, 44vw" style={{ objectPosition: artwork.focalPoint }} /></div>
        <p className="guide-meta">{guide.category} · {getReadingMinutes(guide)} dakika okuma</p><h2>{guide.title}</h2><p>{guide.description}</p>
      </Link>;
    })}</div>
  </div>;
}
