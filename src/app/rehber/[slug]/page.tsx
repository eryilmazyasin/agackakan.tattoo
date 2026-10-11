import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide, getReadingMinutes } from "@/content/guides";
import { getGuideArtwork, getGuideMetadata, getGuideStructuredData } from "@/content/guidesSeo";
import { site } from "@/content/site";
import type { GuidePageProps } from "./page.types";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  return getGuideMetadata(guide);
}

export default async function GuideArticle({ params }: GuidePageProps) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const artwork = getGuideArtwork(guide);
  const related = guide.related.map(getGuide).filter((item) => item !== undefined);
  const publicationDate = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" }).format(new Date(guide.publishedAt));
  return <article className="guide-article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGuideStructuredData(guide)).replace(/</g, "\\u003c") }} />
    <nav className="guide-breadcrumb" aria-label="İçerik yolu"><Link href="/">Ana sayfa</Link><span>/</span><Link href="/rehber">Dövme Rehberi</Link><span>/</span><span aria-current="page">{guide.category}</span></nav>
    <header className="guide-article-heading"><div><p className="eyebrow">{guide.category}</p><h1>{guide.title}</h1><p className="guide-deck">{guide.description}</p><p className="guide-meta">{site.name} · <time dateTime={guide.publishedAt}>{publicationDate}</time> · {getReadingMinutes(guide)} dakika okuma</p></div><figure><Image src={artwork.src} alt={artwork.alt} width={artwork.width} height={artwork.height} sizes="(max-width: 700px) 90vw, 36vw" /><figcaption>Portföyden: {artwork.title}</figcaption></figure></header>
    <div className="guide-reading-layout"><aside className="guide-contents"><nav aria-label="Bu yazıda"><p>Bu yazıda</p><ul>{guide.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}<li><a href="#sorular">Sık sorulanlar</a></li></ul></nav></aside>
      <div className="guide-prose">{guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {guide.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        <section id="sorular"><h2>Sık sorulanlar</h2>{guide.questions.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section>
        <div className="guide-contact"><h2>Aklındaki fikri konuşalım.</h2><p>Referanslarını ve düşündüğün bölgeyi paylaş. Tasarımın nasıl ilerleyebileceğine birlikte bakalım.</p><a className="text-link" href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp’tan yaz</a></div>
      </div>
    </div>
    <section className="guide-related" aria-labelledby="ilgili-yazilar"><h2 id="ilgili-yazilar">Buradan devam edebilirsin.</h2><div>{related.map((item) => <Link key={item.slug} href={`/rehber/${item.slug}`}><span className="guide-meta">{item.category}</span><h3>{item.title}</h3></Link>)}</div><Link className="text-link" href="/rehber">Bütün rehberler</Link></section>
  </article>;
}
