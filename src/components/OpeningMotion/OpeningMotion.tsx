"use client";

import { useRef } from "react";
import { useParallax } from "./useParallax";
import type { OpeningMotionProps } from "./OpeningMotion.types";

export function OpeningMotion({ children, variant }: OpeningMotionProps) {
  const root = useRef<HTMLDivElement>(null);
  // Photography stays visible from the first frame; type follows the visual hierarchy.
  useParallax(root);
  return <div ref={root} className={`opening opening-${variant}`}>{children}</div>;
}
