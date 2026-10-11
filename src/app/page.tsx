import { ArtistHero } from "@/components/ArtistHero";
import { TattooFilm } from "@/components/TattooFilm";
import { SiteFooter } from "@/components/SiteFooter";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { ArtistProcess } from "@/components/ArtistProcess/ArtistProcess";
import { artworks, prototypeLayers, site } from "@/content/site";
import { structuredData } from "@/content/seo";

export default function TattooPortfolio() {
  return (
    <div className="prototype">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#eserler" style={{ zIndex: prototypeLayers.skipLink }}>Eserlere geç</a>
      <main>
        <ArtistHero />
        <TattooFilm />
        <Portfolio artworks={artworks} />
        <ArtistProcess />
      </main>
      <SiteFooter />
      <nav className="mobile-contact-dock" aria-label="Hızlı erişim" style={{ zIndex: prototypeLayers.contactDock }}>
        <a href="#eserler">Eserler</a><a href={site.appointment} target="_blank" rel="noopener noreferrer">Randevu için yaz</a>
      </nav>
    </div>
  );
}
