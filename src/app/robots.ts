import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/cart',
    },
    sitemap: 'https://pureiron.com/sitemap.xml',
  };
}
