"use client";

import { useEffect, useRef, useState } from "react";

export function TattooFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;

    // Only play while the hero is visible and motion is welcome.
    // The film now lives below the hero; visibility follows this video's own bounds.
    function updatePlayback() {
      if (visible && !document.hidden && !preference.matches && !paused) {
        void element!.play().catch(() => {});
      } else {
        element!.pause();
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.1 });
    observer.observe(element);
    preference.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      element.pause();
    };
  }, [paused]);

  return (
    <section className="tattoo-film-section" aria-labelledby="tattoo-film-title">
      <div className="tattoo-film-frame" aria-hidden="true">
        <video ref={video} muted loop playsInline disablePictureInPicture preload="metadata" tabIndex={-1} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
          <source src="/images/hero-tattoo-film.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="tattoo-film-copy">
        <h2 id="tattoo-film-title">Omuzdan<br /><span>bileğe.</span></h2>
        <p>Ejderha, samuray, kaplan ve portreyi aynı tasarımda buluşturan bir tam kol çalışması.</p>
        <a className="text-link" href="#eserler">Eserleri keşfet</a>
        <button className="film-control" type="button" onClick={() => setPaused(!paused)}>{paused ? "Otomatik oynatmayı aç" : "Otomatik oynatmayı kapat"}<span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span></button>
      </div>
    </section>
  );
}
