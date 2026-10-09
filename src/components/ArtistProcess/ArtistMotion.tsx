"use client";

import { useRef } from "react";
import { useParallax } from "../OpeningMotion/useParallax";
import type { ArtistMotionProps } from "./ArtistMotion.types";

export function ArtistMotion({ children }: ArtistMotionProps) {
  const root = useRef<HTMLDivElement>(null);
  // The name enters first; the real working portrait stays visible throughout.
  useParallax(root);
  return <div ref={root}>{children}</div>;
}
