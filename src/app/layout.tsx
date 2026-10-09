import type { Metadata } from "next";
import localFont from "next/font/local";
import { indexable, seoDescription, seoTitle, siteUrl } from "@/content/seo";
import { site } from "@/content/site";
import "./globals.css";

const display = localFont({ src: "../../public/fonts/barlow-condensed-bold.woff2", variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: seoTitle, template: "%s | Ağaçkakan Tattoo" },
  description: seoDescription,
  applicationName: site.name,
  authors: [{ name: site.artist }],
  creator: site.artist,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", title: seoTitle, description: seoDescription, url: "/", siteName: site.name, locale: "tr_TR" },
  twitter: { card: "summary_large_image", title: seoTitle, description: seoDescription, images: [{ url: "/opengraph-image", alt: "Ağaçkakan Tattoo — Barış Çakmak, Esenler dövme stüdyosu" }] },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION, other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined },
  icons: { icon: "/images/agackakan-logo-acik.png", apple: "/images/agackakan-logo-acik.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr" className={display.variable}><body>{children}</body></html>;
}
