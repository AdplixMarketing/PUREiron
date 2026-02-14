export interface Collection {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: 'hoodies-tops',
    name: 'Hoodies & Tops',
    description: 'Performance hoodies and training tees built for the iron paradise.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
  },
  {
    slug: 'joggers-shorts',
    name: 'Joggers & Shorts',
    description: 'Athletic joggers and training shorts engineered for maximum mobility.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    description: 'Gym bags, wrist wraps, and headbands to complete your arsenal.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
