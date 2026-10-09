import Image from "next/image";
import type { CSSProperties } from "react";
import type { ArtworkThumbnailProps } from "./Portfolio.types";

export function ArtworkThumbnail({ artwork, featured = false }: ArtworkThumbnailProps) {
  const visibleWidth = artwork.width - (artwork.cropRight ?? 0);
  const imageStyle: CSSProperties = { objectPosition: artwork.focalPoint, width: `${artwork.width / visibleWidth * 100}%`, right: "auto", maxWidth: "none" };
  return (
    <figure className={featured ? "featured-artwork" : `work work-${artwork.id}`} data-parallax={featured ? "24" : "36"} style={{ "--work-ratio": visibleWidth / artwork.height } as CSSProperties}>
      <button type="button" className="work-button" data-artwork-id={artwork.id} aria-label={`${artwork.title} Tam fotoğrafı incele`} aria-haspopup="dialog">
        <span className="work-image" data-artwork-image>
          {/* Load the visible layer ahead of scrolling so mobile gallery navigation never lands on empty frames. */}
          <Image loading="eager" className="work-monochrome" src={artwork.src} alt={artwork.alt} fill sizes={featured ? "(max-width: 767px) 90vw, 44vw" : "(max-width: 767px) 90vw, 38vw"} style={imageStyle} />
          <Image className="work-color" src={artwork.src} alt="" aria-hidden="true" fill sizes={featured ? "(max-width: 767px) 90vw, 44vw" : "(max-width: 767px) 90vw, 38vw"} style={imageStyle} />
        </span>
      </button>
      <figcaption><div><span className="work-title">{artwork.title}</span><span className="work-category">{artwork.category}</span></div></figcaption>
    </figure>
  );
}
