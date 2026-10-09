import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({ src: "../../public/fonts/barlow-condensed-bold.woff2", variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Ağaçkakan Tattoo | Ten Üzerinde Heykel",
  description: "Barış Çakmak. Esenler, İstanbul’da kişiye özel dövme tasarımı ve uygulama.",
  robots: { index: false, follow: false },
  icons: { icon: "/images/agackakan-logo-acik.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr" className={display.variable}><body>{children}</body></html>;
}
