import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Ağaçkakan Tattoo — Barış Çakmak, Esenler dövme stüdyosu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [font, portrait, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/barlow-condensed-bold.ttf")),
    readFile(join(process.cwd(), "public", site.images.portrait.src)),
    readFile(join(process.cwd(), "public", site.logo)),
  ]);
  // Embed local brand assets so sharing cards don't depend on the site's network availability.
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#151515", color: "#efefeb" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 710, padding: "48px 60px", justifyContent: "space-between" }}>
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={100} height={100} alt="" />
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Barlow", fontSize: 98, lineHeight: 1 }}>
          <span>AĞAÇKAKAN</span><span style={{ color: "#b3b3ad" }}>TATTOO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Barlow", fontSize: 30, lineHeight: 1.3 }}>
          <span>Barış Çakmak</span><span style={{ color: "#b3b3ad" }}>Kişiye özel dövme · Esenler / İstanbul</span>
        </div>
      </div>
      <img src={`data:image/jpeg;base64,${portrait.toString("base64")}`} width={490} height={630} style={{ objectFit: "cover" }} alt="" />
    </div>,
    { ...size, fonts: [{ name: "Barlow", data: font, weight: 700, style: "normal" }] },
  );
}
