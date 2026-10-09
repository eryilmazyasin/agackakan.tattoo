import { ArtworkThumbnail } from "./ArtworkThumbnail";
import { PortfolioExperience } from "./PortfolioExperience";
import type { PortfolioProps } from "./Portfolio.types";

export function Portfolio({ artworks }: PortfolioProps) {
  const [featured, ...selection] = artworks;
  if (!featured) return <section id="eserler" className="portfolio-empty"><h2>Seçilmiş eserler</h2><p>Yeni çalışmalar yakında burada.</p></section>;
  return (
    <section id="eserler" className="portfolio-section" aria-label="Seçilmiş dövmeler">
      <PortfolioExperience artworks={artworks}>
        <div className="featured-scene">
          <ArtworkThumbnail artwork={featured} featured />
          <div className="featured-copy"><h3>{featured.title}</h3><div className="scene-narrative"><p className="scene-whole">Ön kolda.<br />Siyah ve gri tonlarda.</p><p className="scene-detail">Kartlar, zarlar ve saat.<br />Birbirine bağlanan detaylar.</p></div><p className="featured-description">{featured.description}</p><button className="text-button" data-artwork-id={featured.id} type="button" aria-haspopup="dialog">Eseri incele</button></div>
        </div>
        <div className="works-grid">{selection.map((artwork) => <ArtworkThumbnail key={artwork.id} artwork={artwork} />)}</div>
      </PortfolioExperience>
    </section>
  );
}
