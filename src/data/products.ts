export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  collection: string;
  images: string[];
  sizes: string[];
  featured: boolean;
  badge?: string;
  imageBlend?: boolean;
}

export const products: Product[] = [
  // CODE 1 Compression — Best Seller
  {
    id: '13',
    slug: 'code-1-compression',
    name: 'CODE 1 Compression',
    price: 39.99,
    description: 'Engineered for the relentless. The CODE 1 Compression top delivers a second-skin fit with four-way stretch fabric and targeted compression zones that promote blood flow and reduce muscle fatigue. Featuring signature red accent stitching, the heat transfer PUREiron logo on the chest, and bold vertical branding down the spine. Built for heavy lifts, intense sessions, and everything in between.',
    collection: 'hoodies-tops',
    images: [
      '/products/code1-compression/front.png',
      '/products/code1-compression/detail.png',
      '/products/code1-compression/back.png',
      '/products/code1-compression/pose.png',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    badge: 'Best Seller',
    imageBlend: true,
  },
  // Hoodies & Tops
  {
    id: '1',
    slug: 'iron-performance-hoodie',
    name: 'Iron Performance Hoodie',
    price: 89.99,
    description: 'Heavyweight cotton-blend hoodie with moisture-wicking inner lining. Features the PUREiron embossed logo on chest and reinforced kangaroo pocket. Built to keep you warm during cold morning sessions and cool enough for post-workout wear.',
    collection: 'hoodies-tops',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1578768079470-4deaf6a5e4b4?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    badge: 'Best Seller',
  },
  {
    id: '2',
    slug: 'stealth-training-tee',
    name: 'Stealth Training Tee',
    price: 44.99,
    description: 'Ultra-light performance tee with four-way stretch fabric. Flatlock seams eliminate chafing, and the raglan sleeve design maximizes shoulder mobility. Sweat-activated graphic reveals the PUREiron mark.',
    collection: 'hoodies-tops',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: '3',
    slug: 'blackout-muscle-tank',
    name: 'Blackout Muscle Tank',
    price: 34.99,
    description: 'Deep-cut armholes for unrestricted movement. Breathable mesh back panel dumps heat during high-intensity sets. Dropped hem keeps you covered during overhead lifts.',
    collection: 'hoodies-tops',
    images: [
      'https://images.unsplash.com/photo-1503341504253-dff4f37c0ac8?w=800&q=80',
      'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: false,
  },
  {
    id: '4',
    slug: 'compression-long-sleeve',
    name: 'Compression Long Sleeve',
    price: 54.99,
    description: 'Second-skin compression fit promotes blood flow and reduces muscle fatigue. Thumbhole cuffs keep sleeves locked in place. Reflective PUREiron logo for visibility during early morning outdoor sessions.',
    collection: 'hoodies-tops',
    images: [
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80',
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: false,
    badge: 'New',
  },
  // Joggers & Shorts
  {
    id: '5',
    slug: 'iron-tapered-joggers',
    name: 'Iron Tapered Joggers',
    price: 74.99,
    description: 'Tapered fit joggers with zippered ankle cuffs and deep side pockets. Brushed fleece interior for all-day comfort. Elastic waistband with internal drawcord for a locked-in fit.',
    collection: 'joggers-shorts',
    images: [
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    badge: 'Best Seller',
  },
  {
    id: '6',
    slug: 'apex-training-shorts',
    name: 'Apex Training Shorts',
    price: 49.99,
    description: '7-inch inseam shorts with built-in compression liner. Side split hem allows full range of motion for squats and lunges. Zippered back pocket secures your essentials.',
    collection: 'joggers-shorts',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
      'https://images.unsplash.com/photo-1562886812-41775a01195d?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: '7',
    slug: 'raw-power-shorts',
    name: 'Raw Power Shorts',
    price: 44.99,
    description: 'Heavyweight cotton shorts with a relaxed fit. Double-stitched seams handle the stress of heavy lifting. Side pockets deep enough for your phone and chalk.',
    collection: 'joggers-shorts',
    images: [
      'https://images.unsplash.com/photo-1562886812-41775a01195d?w=800&q=80',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: false,
  },
  {
    id: '8',
    slug: 'stealth-cargo-joggers',
    name: 'Stealth Cargo Joggers',
    price: 79.99,
    description: 'Utility-inspired joggers with cargo pockets and articulated knees. Water-resistant ripstop fabric stands up to any environment. From the gym to the street without missing a beat.',
    collection: 'joggers-shorts',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: false,
    badge: 'New',
  },
  // Accessories
  {
    id: '9',
    slug: 'iron-duffle-bag',
    name: 'Iron Duffle Bag',
    price: 64.99,
    description: '40L gym duffle with ventilated shoe compartment and wet/dry separation. Padded shoulder strap and reinforced handles. Water-resistant 1000D nylon construction.',
    collection: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ],
    sizes: ['ONE SIZE'],
    featured: true,
  },
  {
    id: '10',
    slug: 'wrist-wraps-pro',
    name: 'Wrist Wraps Pro',
    price: 24.99,
    description: '18-inch heavy-duty wrist wraps with thumb loop. Stiff support for bench press and overhead movements. Embroidered PUREiron branding with red accent stitching.',
    collection: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    ],
    sizes: ['ONE SIZE'],
    featured: false,
  },
  {
    id: '11',
    slug: 'iron-headband',
    name: 'Iron Headband',
    price: 14.99,
    description: 'Moisture-wicking performance headband with silicone grip strip. Keeps sweat out of your eyes and hair locked down. Available in stealth black with red PUREiron logo.',
    collection: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
    ],
    sizes: ['ONE SIZE'],
    featured: false,
  },
  {
    id: '12',
    slug: 'lifting-belt-elite',
    name: 'Lifting Belt Elite',
    price: 59.99,
    description: '10mm genuine leather powerlifting belt with single-prong buckle. Break-in period is minimal thanks to pre-conditioned leather. Provides rock-solid core support for heavy compound lifts.',
    collection: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    badge: 'Popular',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collection === collectionSlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
