'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from '@/data/products';
import { collections } from '@/data/collections';
import ProductCard from '@/components/ProductCard';
import MarqueeTicker from '@/components/MarqueeTicker';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-iron-black/60" />

      {/* Red radial glow over video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,30,58,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-heading text-sm md:text-base uppercase tracking-[0.3em] text-iron-red mb-6">
            Forged for the Relentless
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] text-iron-white"
        >
          Train
          <br />
          <span className="text-iron-red">Harder</span>
          <br />
          Than Yesterday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-iron-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-8"
        >
          Premium athletic wear engineered for peak performance. Every fiber built to push limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link
            href="/shop"
            className="inline-block bg-iron-red hover:bg-iron-red-light text-white font-heading uppercase tracking-wider text-sm px-10 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
          >
            Shop Collection
          </Link>
          <Link
            href="/about"
            className="inline-block border border-white/20 hover:border-iron-red text-iron-white font-heading uppercase tracking-wider text-sm px-10 py-4 rounded-lg transition-all hover:text-iron-red"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-iron-red" />
        </div>
      </motion.div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-32 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-4">
          Top Picks
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-iron-white uppercase">
          Featured Gear
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featured.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link
          href="/shop"
          className="inline-block border border-white/20 hover:border-iron-red text-iron-white/70 hover:text-iron-red font-heading uppercase tracking-wider text-sm px-10 py-4 rounded-lg transition-all"
        >
          View All Products
        </Link>
      </motion.div>
    </section>
  );
}

function CategoryShowcase() {
  return (
    <section className="py-32 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-4">
          Collections
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-iron-white uppercase">
          Shop by Category
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection, i) => (
          <motion.div
            key={collection.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Link
              href={`/collections/${collection.slug}`}
              className="group block relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron-black via-iron-black/30 to-transparent" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-iron-red/50 rounded-xl transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-iron-white uppercase group-hover:text-iron-red transition-colors">
                  {collection.name}
                </h3>
                <p className="text-iron-white/50 text-sm mt-1">{collection.description}</p>
                <span className="inline-block mt-3 text-iron-red text-sm font-heading uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function BrandTeaser() {
  return (
    <section className="py-32 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            alt="PUREiron brand"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-iron-black/50 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-4">
            The Brand
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-iron-white uppercase leading-tight">
            Born in the
            <br />
            <span className="text-iron-red">Iron Paradise</span>
          </h2>
          <p className="text-iron-white/60 text-lg leading-relaxed mt-6">
            PUREiron was forged from a simple belief: your gear should work as hard as you do.
            We design every piece for athletes who refuse to settle — from the fabric selection
            to the final stitch, everything is engineered for performance.
          </p>
          <p className="text-iron-white/60 text-lg leading-relaxed mt-4">
            No gimmicks. No shortcuts. Just pure, relentless quality.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 border border-iron-red text-iron-red hover:bg-iron-red hover:text-white font-heading uppercase tracking-wider text-sm px-8 py-3 rounded-lg transition-all"
          >
            Read Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <FeaturedProducts />
      <CategoryShowcase />
      <BrandTeaser />
      <MarqueeTicker />
    </>
  );
}
