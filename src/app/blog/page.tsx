'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    slug: 'ultimate-guide-gym-wardrobe',
    title: 'The Ultimate Guide to Building Your Gym Wardrobe',
    excerpt: 'Stop wearing cotton tees to the gym. Here\'s how to build a training wardrobe that actually performs.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    date: '2025-01-15',
    category: 'Style',
  },
  {
    slug: '5-exercises-you-are-doing-wrong',
    title: '5 Exercises You\'re Probably Doing Wrong',
    excerpt: 'Common form mistakes that are killing your gains and increasing injury risk. Fix them today.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
    date: '2025-01-10',
    category: 'Training',
  },
  {
    slug: 'why-compression-gear-matters',
    title: 'Why Compression Gear Actually Matters',
    excerpt: 'The science behind compression clothing and how it can improve your training performance and recovery.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80',
    date: '2025-01-05',
    category: 'Science',
  },
  {
    slug: 'morning-routine-elite-athletes',
    title: 'The Morning Routine of Elite Athletes',
    excerpt: 'What the top 1% of athletes do before the sun rises. Spoiler: it starts the night before.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
    date: '2024-12-28',
    category: 'Lifestyle',
  },
  {
    slug: 'how-to-choose-lifting-belt',
    title: 'How to Choose the Right Lifting Belt',
    excerpt: 'Leather vs nylon, 10mm vs 13mm, single prong vs lever. Everything you need to know.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    date: '2024-12-20',
    category: 'Gear',
  },
  {
    slug: 'nutrition-for-muscle-building',
    title: 'Nutrition 101: Eating for Muscle Growth',
    excerpt: 'Forget complicated meal plans. Here are the fundamentals that actually drive muscle growth.',
    image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80',
    date: '2024-12-15',
    category: 'Nutrition',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-3">
            Knowledge Base
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-iron-white uppercase">
            The Iron Blog
          </h1>
          <p className="text-iron-white/50 mt-4 max-w-xl mx-auto">
            Training tips, gear guides, and the mindset behind the relentless.
          </p>
        </motion.div>

        {/* Featured post */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl mb-12 cursor-pointer"
        >
          <div className="relative aspect-[21/9]">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iron-black via-iron-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block bg-iron-red text-white text-xs font-heading uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-iron-white uppercase group-hover:text-iron-red transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-iron-white/60 mt-2 max-w-xl">{blogPosts[0].excerpt}</p>
              <p className="text-iron-white/30 text-sm mt-4">{new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </motion.article>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron-black/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-iron-red/90 text-white text-xs font-heading uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-iron-white uppercase group-hover:text-iron-red transition-colors">
                {post.title}
              </h3>
              <p className="text-iron-white/50 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
              <p className="text-iron-white/30 text-xs mt-3">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
