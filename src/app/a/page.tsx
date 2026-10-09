import Image from "next/image";
import { OpeningMotion } from "@/components/OpeningMotion/OpeningMotion";
import { PreviewNavigation } from "@/components/PreviewNavigation";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

export default function ArtworkOpening() {
  const artwork = site.images.artwork;
  return (
    <>
      <OpeningMotion variant="artwork">
        <SiteHeader />
        <main className="artwork-scene">
          <div className="artwork-copy">
            <p className="eyebrow">Realistic / Black & Grey</p>
            <h1><span data-title-line>Ten üzerinde</span><span data-title-line>heykel.</span></h1>
            <div className="artwork-support" data-support>
              <p>Anatomiyle akan, sana özel dövme.<br />Barış Çakmak’ın çizgisinden.</p>
              <a className="text-link" href={site.appointment} target="_blank" rel="noopener noreferrer">Randevu için yaz</a>
            </div>
          </div>
          <figure className="artwork-figure">
            <div className="artwork-image">
              <Image src={artwork.src} alt={artwork.alt} fill preload sizes="(max-width: 767px) 90vw, 46vw" style={{ objectPosition: artwork.focalPoint }} />
            </div>
            <figcaption><span>{artwork.caption}</span><span>{site.artist}</span></figcaption>
          </figure>
        </main>
      </OpeningMotion>
      <PreviewNavigation active="a" />
    </>
  );
}
