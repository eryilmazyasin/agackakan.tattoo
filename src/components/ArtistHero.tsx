import Image from "next/image";
import { OpeningMotion } from "@/components/OpeningMotion/OpeningMotion";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

export function ArtistHero() {
  const { artist, hands } = site.images;
  return (
    <section id="acilis" aria-label="Ağaçkakan Tattoo">
      <OpeningMotion variant="artist">
        <div className="artist-photo" data-parallax="18">
          <Image src={artist.src} alt={artist.alt} fill preload sizes="(max-width: 767px) 100vw, 66vw" style={{ objectPosition: artist.focalPoint }} />
        </div>
        <SiteHeader />
        <div className="artist-scene">
          <div className="artist-copy">
            <p className="eyebrow">Barış Çakmak</p>
            <h1 className="hero-title"><span data-title-line>Fikrinden</span><span data-title-line>tenine.</span></h1>
            <div data-support className="artist-support">
              <p>Her çizgide bir karar.<br />Sana özel tasarım, elde hayat bulur.</p>
              <div className="hero-actions">
                <a className="text-link" href={site.appointment} target="_blank" rel="noopener noreferrer">Randevu için yaz</a>
                <a className="hero-gallery-link" href="#eserler">Eserleri keşfet <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
          <figure className="hands-detail" data-detail>
            <div className="hands-image"><Image src={hands.src} alt={hands.alt} fill sizes="(max-width: 767px) 28vw, 15vw" style={{ objectPosition: hands.focalPoint }} /></div>
            <figcaption>Tasarımdan uygulamaya.</figcaption>
          </figure>
        </div>
      </OpeningMotion>
    </section>
  );
}
