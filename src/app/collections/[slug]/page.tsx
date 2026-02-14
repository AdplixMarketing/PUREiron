'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProductsByCollection, Product } from '@/data/products';
import { getCollectionBySlug } from '@/data/collections';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collection = getCollectionBySlug(slug);
  const products = getProductsByCollection(slug);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  if (!collection) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-heading text-4xl text-iron-white">Collection Not Found</h1>
        <Link href="/shop" className="text-iron-red mt-4 inline-block hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-3">
            Collection
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-iron-white uppercase">
            {collection.name}
          </h1>
          <p className="text-iron-white/50 mt-4 max-w-xl mx-auto">{collection.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-iron-white/40 text-lg">No products in this collection yet.</p>
          </div>
        )}
      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}
