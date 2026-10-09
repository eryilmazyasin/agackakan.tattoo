import type { ReactNode } from "react";
import type { Artwork } from "@/content/site.types";

export interface PortfolioExperienceProps { children: ReactNode; artworks: Artwork[]; }
export interface SelectedArtwork { artwork: Artwork; sourceElement: HTMLElement; sourceButton: HTMLButtonElement; }
