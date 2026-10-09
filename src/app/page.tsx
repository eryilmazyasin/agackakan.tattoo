import { InstagramLogoIcon, PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { ArtistHero } from "@/components/ArtistHero";
import { TattooFilm } from "@/components/TattooFilm";
import { Copyright } from "@/components/Copyright";
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
      <footer className="site-footer">
        <p>Fikrini konuşalım.</p>
        <div className="footer-contact">
          <div className="footer-channels">
            <a className="footer-whatsapp" href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsappLogoIcon size={26} aria-hidden="true" /><span>WhatsApp’tan yaz</span></a>
            <a className="footer-phone" href={site.contact.telephone}><span className="footer-channel-label"><PhoneIcon size={26} aria-hidden="true" /><span>Telefonla ara</span></span><span>{site.contact.phone}</span></a>
            <a className="footer-instagram" href={site.appointment} target="_blank" rel="noopener noreferrer"><InstagramLogoIcon size={26} aria-hidden="true" /><span>Instagram</span></a>
          </div>
          <address className="footer-address"><span>{site.name}</span><p>{site.contact.address}</p><a href={site.contact.maps} target="_blank" rel="noopener noreferrer">Yol tarifi al</a></address>
        </div>
        <div className="footer-details"><span>{site.name}</span><Copyright /><a href="#acilis">Başa dön</a></div>
      </footer>
      <nav className="mobile-contact-dock" aria-label="Hızlı erişim" style={{ zIndex: prototypeLayers.contactDock }}>
        <a href="#eserler">Eserler</a><a href={site.appointment} target="_blank" rel="noopener noreferrer">Randevu için yaz</a>
      </nav>
    </div>
  );
}
