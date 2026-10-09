export function PreviewNavigation({ active }: { active: "a" | "b" }) {
  return (
    <nav className="preview-navigation" aria-label="Açılış tasarımı alternatifleri">
      <span className="preview-label">Açılış tasarımları</span>
      <a href="/a" aria-current={active === "a" ? "page" : undefined}>A <span>Eser odaklı</span></a>
      <a href="/b" aria-current={active === "b" ? "page" : undefined}>B <span>Sanatçı odaklı</span></a>
    </nav>
  );
}
