export interface GuideSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  artworkId: string;
  publishedAt: string;
  intro: string[];
  sections: GuideSection[];
  questions: { question: string; answer: string }[];
  related: string[];
}
