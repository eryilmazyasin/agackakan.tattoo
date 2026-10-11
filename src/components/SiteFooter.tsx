import Link from "next/link";
import { InstagramLogoIcon, PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Copyright } from "@/components/Copyright";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="contact-footer">
      <div className="contact-footer-details">
        <div className="contact-footer-intro">
          <div><p className="eyebrow">Ağaçkakan Tattoo · {site.location}</p><h2>Fikrini konuşalım.</h2></div>
          <address><p>{site.contact.address}</p><a className="footer-map" href={site.contact.maps} target="_blank" rel="noopener noreferrer">Yol tarifi al <span aria-hidden="true">↗</span></a></address>
        </div>
        <div className="contact-footer-channels"><span>İletişim</span><a className="footer-social" href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsappLogoIcon size={20} aria-hidden="true" /><span>WhatsApp’tan yaz</span></a><a href={site.contact.telephone}><PhoneIcon size={20} aria-hidden="true" />{site.contact.phone}</a><a className="footer-social" href={site.appointment} target="_blank" rel="noopener noreferrer"><InstagramLogoIcon size={20} aria-hidden="true" /><span>Instagram</span></a></div>
      </div>
      <div className="guide-footer">
        <Link href="/">{site.name}</Link>
        <Link href="/rehber">Dövme Rehberi</Link>
        <Copyright />
      </div>
    </footer>
  );
}
