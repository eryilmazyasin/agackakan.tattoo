"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export function useParallax(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop = () => {};

    function configure() {
      stop();
      // Native view timelines own motion where available. Older browsers use DOM-only updates.
      if (preference.matches || CSS.supports("animation-timeline", "view()")) return;
      const targets = Array.from(element!.querySelectorAll<HTMLElement>("[data-parallax]"));
      const visible = new Set<HTMLElement>();
      let frame = 0;
      let previousScroll = Number.NaN;
      let previousHeight = 0;
      let previousWidth = 0;

      function update() {
        frame = 0;
        if (document.hidden || visible.size === 0) return;
        const height = window.innerHeight;
        const width = window.innerWidth;
        if (window.scrollY !== previousScroll || height !== previousHeight || width !== previousWidth) {
          previousScroll = window.scrollY;
          previousHeight = height;
          previousWidth = width;
          const positions = Array.from(visible, (target) => {
            const bounds = target.getBoundingClientRect();
            // Offset belongs to the individual figure, so the full photograph never gets cropped.
            const translatedOffset = target.dataset.parallaxMode === "background" ? 0 : (parseFloat(target.style.getPropertyValue("--parallax-y")) || 0);
            const progress = Math.max(-1, Math.min(1, (height / 2 - (bounds.top - translatedOffset + bounds.height / 2)) / ((height + bounds.height) / 2)));
            const direction = target.matches(".work:nth-child(2n)") ? -1 : 1;
            const depth = Number(target.dataset.parallax) * direction * (width < 768 ? 0.2 : 1);
            return { target, offset: progress * depth };
          });
          positions.forEach(({ target, offset }) => target.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`));
        }
        frame = requestAnimationFrame(update);
      }

      function resume() {
        if (!frame && !document.hidden && visible.size) frame = requestAnimationFrame(update);
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target as HTMLElement);
          else visible.delete(entry.target as HTMLElement);
        });
        previousScroll = Number.NaN;
        resume();
      }, { rootMargin: "100px" });
      targets.forEach((target) => observer.observe(target));
      document.addEventListener("visibilitychange", resume);
      stop = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        document.removeEventListener("visibilitychange", resume);
        targets.forEach((target) => target.style.removeProperty("--parallax-y"));
      };
    }

    configure();
    preference.addEventListener("change", configure);
    return () => { stop(); preference.removeEventListener("change", configure); };
  }, [root]);
}
