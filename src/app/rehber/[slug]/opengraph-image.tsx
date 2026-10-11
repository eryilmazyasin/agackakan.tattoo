import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getGuide } from "@/content/guides";
import { getGuideArtwork } from "@/content/guidesSeo";
import { site } from "@/content/site";
import type { GuidePageProps } from "./page.types";

export const alt = "Ağaçkakan Tattoo Dövme Rehberi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function GuideSharingImage({ params }: GuidePageProps) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const artwork = getGuideArtwork(guide);
  const [font, photo, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/barlow-condensed-bold.ttf")),
    readFile(join(process.cwd(), "public", artwork.src)),
    readFile(join(process.cwd(), "public", site.logo)),
  ]);
  // Render the actual article title at landscape card dimensions instead of sharing a portrait crop.
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#151515", color: "#efefeb", fontFamily: "Barlow" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 730, padding: "44px 54px", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}><img src={`data:image/png;base64,${logo.toString("base64")}`} width={88} height={88} alt="" /><span style={{ color: "#b3b3ad", fontSize: 28 }}>DÖVME REHBERİ</span></div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05 }}>{guide.title}</div>
        <span style={{ color: "#b3b3ad", fontSize: 27 }}>agackakantattoo.com · {guide.category}</span>
      </div>
      <img src={`data:image/jpeg;base64,${photo.toString("base64")}`} width={470} height={630} style={{ objectFit: "cover", objectPosition: artwork.focalPoint }} alt="" />
    </div>,
    { ...size, fonts: [{ name: "Barlow", data: font, weight: 700, style: "normal" }] },
  );
}
