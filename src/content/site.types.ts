export interface Artwork {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  cropRight?: number;
  focalPoint: string;
  detailPoint: string;
  detailScale: number;
  source?: string;
}
