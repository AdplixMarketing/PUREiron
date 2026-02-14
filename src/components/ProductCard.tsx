'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-iron-gray">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-iron-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-iron-red text-white text-xs font-heading uppercase tracking-wider px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}

          {/* Quick view button */}
          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-iron-white text-iron-black font-heading text-sm uppercase tracking-wider px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-iron-red hover:text-white"
            >
              Quick View
            </button>
          )}
        </div>

        <div className="mt-5 space-y-1.5">
          <h3 className="font-heading text-base font-medium text-iron-white group-hover:text-iron-red transition-colors">
            {product.name}
          </h3>
          <p className="text-iron-white/50 text-sm">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
