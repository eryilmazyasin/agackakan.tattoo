"use client";

import { useRef, useState } from "react";
import { useParallax } from "../OpeningMotion/useParallax";
import { ArtworkViewer } from "./ArtworkViewer";
import type { PortfolioExperienceProps, SelectedArtwork } from "./PortfolioExperience.types";

export function PortfolioExperience({ children, artworks }: PortfolioExperienceProps) {
  const root = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<SelectedArtwork | null>(null);

  // One brief pause lets the eye follow the full sleeve into its geometric details.
  // The previous pinned sequence now follows natural scrolling without stopping the page.
  // Alternating lateral entrances underline the different scales of the selected works.
  // The same rhythm now comes from alternating parallax depths rather than entrance offsets.
  useParallax(root);

  function openArtwork(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>("button[data-artwork-id]");
    if (!button || !root.current?.contains(button)) return;
    const artwork = artworks.find((item) => item.id === button.dataset.artworkId);
    const sourceElement = button.querySelector<HTMLElement>("[data-artwork-image]") ?? root.current.querySelector<HTMLElement>(`.work-button[data-artwork-id="${button.dataset.artworkId}"] [data-artwork-image]`);
    if (artwork && sourceElement) setSelected({ artwork, sourceElement, sourceButton: button });
  }

  return <div ref={root} onClickCapture={openArtwork}>{children}{selected && <ArtworkViewer key={selected.artwork.id} {...selected} onClose={() => setSelected(null)} />}</div>;
}
