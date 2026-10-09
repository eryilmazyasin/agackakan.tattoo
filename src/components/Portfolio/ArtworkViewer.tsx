"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { ArtworkViewerProps } from "./Portfolio.types";

export function ArtworkViewer({ artwork, sourceElement, sourceButton, onClose }: ArtworkViewerProps) {
  const visibleWidth = artwork.width - (artwork.cropRight ?? 0);
  const dialog = useRef<HTMLDialogElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const transition = useRef<Animation[]>([]);
  const closing = useRef(false);
  const reducedMotion = useRef(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useLayoutEffect(() => {
    const element = dialog.current;
    const target = frame.current;
    if (!element || !target) return;
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    // Matching aspect ratios let the photograph travel from its thumbnail without stretching.
    if (!reducedMotion.current) {
      const origin = sourceElement.getBoundingClientRect();
      const destination = target.getBoundingClientRect();
      const transform = `translate(${origin.left - destination.left}px, ${origin.top - destination.top}px) scale(${origin.width / destination.width})`;
      target.style.transformOrigin = "top left";
      transition.current = [
        target.animate([{ transform }, { transform: "none" }], { duration: 600, easing: "cubic-bezier(.22,1,.36,1)" }),
        ...Array.from(element.querySelectorAll(".viewer-scrim, .viewer-info, .viewer-close"), (part) => part.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400 })),
      ];
    }
    return () => {
      transition.current.forEach((animation) => animation.cancel());
      document.body.style.overflow = previousOverflow;
      if (element.open) element.close();
      sourceButton.focus({ preventScroll: true });
      // Restore pinned geometry after releasing the dialog's body scroll lock.
      // Pinning is removed; stable scrollbar gutters now preserve the source geometry.
    };
  }, [sourceElement, sourceButton]);

  function closeViewer() {
    if (closing.current) return;
    closing.current = true;
    const finish = () => { dialog.current?.close(); onClose(); };
    const target = frame.current;
    if (reducedMotion.current || !target) { finish(); return; }
    const currentTransform = getComputedStyle(target).transform;
    transition.current.forEach((animation) => animation.cancel());
    const origin = sourceElement.getBoundingClientRect();
    const destination = target.getBoundingClientRect();
    const sourceIsVisible = origin.bottom > 0 && origin.top < window.innerHeight;
    const transform = sourceIsVisible
      ? `translate(${origin.left - destination.left}px, ${origin.top - destination.top}px) scale(${origin.width / destination.width})`
      : "translateY(10px) scale(.98)";
    const exit = target.animate([{ transform: currentTransform }, { transform, opacity: sourceIsVisible ? 1 : 0 }], { duration: 400, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
    transition.current = [exit, ...Array.from(dialog.current?.querySelectorAll(".viewer-scrim, .viewer-info, .viewer-close") ?? [], (part) => part.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: "forwards" }))];
    // Only the frame controls unmounting; cancellation during navigation cannot close another viewer.
    exit.onfinish = finish;
  }

  return (
    <dialog ref={dialog} className="artwork-viewer" aria-labelledby="viewer-title" aria-describedby="viewer-description" onCancel={(event) => { event.preventDefault(); closeViewer(); }}>
      <div className="viewer-scrim" onClick={closeViewer} aria-hidden="true" />
      <button type="button" className="viewer-close" onClick={closeViewer} autoFocus>Kapat <span aria-hidden="true">×</span></button>
      <div className="viewer-layout">
        <div ref={frame} className="viewer-frame" style={{ "--photo-ratio": visibleWidth / artwork.height, "--photo-width": `${visibleWidth}px` } as CSSProperties}>
          <div className={`viewer-photo${imageLoaded ? " is-loaded" : ""}`}><Image src={artwork.src} alt={artwork.alt} fill loading="eager" sizes="(max-width: 767px) 90vw, 640px" style={{ width: `${artwork.width / visibleWidth * 100}%`, right: "auto", maxWidth: "none" }} onLoad={() => setImageLoaded(true)} onError={() => setImageError(true)} /></div>
          {imageError && <p className="viewer-image-error" role="alert">Fotoğraf yüklenemedi. <a href={artwork.src} target="_blank" rel="noopener noreferrer">Fotoğrafı ayrı aç</a></p>}
        </div>
        <div className="viewer-info">
          <p className="viewer-category">{artwork.category}</p><h2 id="viewer-title">{artwork.title}</h2><p id="viewer-description">{artwork.description}</p>
          {artwork.source && <a href={artwork.source} className="viewer-source" target="_blank" rel="noopener noreferrer">Instagram’da gör</a>}
        </div>
      </div>
    </dialog>
  );
}
