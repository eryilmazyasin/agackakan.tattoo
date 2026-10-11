import Image from "next/image";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header id="sayfa-basi" className="site-header">
      <a href="/" className="brand" aria-label="Ağaçkakan Tattoo, ana sayfa">
        <Image src={site.logo} width={80} height={81} alt="Ağaçkakan Tattoo orijinal logosu" loading="eager" />
      </a>
      <div className="header-links">
        <nav className="site-navigation" aria-label="Ana gezinme"><a href="/#eserler">Eserler</a><a href="/#sanatci">Sanatçı</a></nav>
        <a className="appointment" href={site.appointment} target="_blank" rel="noopener noreferrer">Randevu al</a>
      </div>
    </header>
  );
}
