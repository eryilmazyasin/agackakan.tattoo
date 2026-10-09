import Image from "next/image";
import { site } from "@/content/site";
import { ArtistMotion } from "./ArtistMotion";

export function ArtistProcess() {
  const { portrait } = site.images;
  return (
    <section id="sanatci" className="artist-section" aria-labelledby="artist-title">
      <ArtistMotion>
        <div className="artist-layout">
          <div className="artist-story">
            <h2 className="artist-name" id="artist-title"><span>Barış</span><span>Çakmak.</span></h2>
            <div className="artist-biography"><p>Kişiye özel dövme<br />tasarımı ve uygulama.</p></div>
            <p className="artist-process-copy">Barış Çakmak, uzun yıllardır profesyonel olarak dövme tasarımı ve uygulaması yapıyor. Yıllar içinde edindiği deneyimi, her kişinin hikâyesine ve bedenine özel tasarımlara yansıtıyor. İlk fikirden son çizgiye kadar, her çalışmayı detaylara verdiği özenle şekillendiriyor.</p>
          </div>
          <figure className="artist-composition" data-parallax="20">
            <div className="artist-canvas">
              <Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} sizes="(max-width: 767px) 90vw, 54vw" />
            </div>
            <figcaption>Tasarımdan uygulamaya. Her çizgide bir karar.</figcaption>
          </figure>
        </div>
      </ArtistMotion>
    </section>
  );
}
