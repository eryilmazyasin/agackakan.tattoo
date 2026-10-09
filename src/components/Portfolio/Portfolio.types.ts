import type { Artwork } from "@/content/site.types";

export interface PortfolioProps { artworks: Artwork[]; }
export interface ArtworkThumbnailProps { artwork: Artwork; featured?: boolean; }
export interface ArtworkViewerProps {
  artwork: Artwork;
  sourceElement: HTMLElement;
  sourceButton: HTMLButtonElement;
  onClose: () => void;
}
