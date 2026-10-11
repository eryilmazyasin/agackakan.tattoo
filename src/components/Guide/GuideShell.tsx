import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function GuideShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="guide-shell">
    <a className="skip-link" href="#rehber-icerik">İçeriğe geç</a>
    <SiteHeader />
    <main id="rehber-icerik">{children}</main>
    <SiteFooter />
  </div>;
}
