'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { products, Product } from '@/data/products';
import { collections } from '@/data/collections';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

export default function ShopPage() {
  const [activeCollection, setActiveCollection] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = activeCollection === 'all'
      ? products
      : products.filter((p) => p.collection === activeCollection);

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc': return a.name.localeCompare(b.name);
        case 'name-desc': return b.name.localeCompare(a.name);
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        default: return 0;
      }
    });
  }, [activeCollection, sortBy]);

  return (
    <div className="pt-32 pb-24">
      {/* Page header */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-3">
            Full Arsenal
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-iron-white uppercase">
            Shop All
          </h1>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 pb-8 border-b border-white/5"
        >
          {/* Collection filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCollection('all')}
              className={`px-4 py-2 rounded-lg font-heading text-xs uppercase tracking-wider transition-all ${
                activeCollection === 'all'
                  ? 'bg-iron-red text-white'
                  : 'bg-iron-gray text-iron-white/50 hover:text-iron-white'
              }`}
            >
              All
            </button>
            {collections.map((col) => (
              <button
                key={col.slug}
                onClick={() => setActiveCollection(col.slug)}
                className={`px-4 py-2 rounded-lg font-heading text-xs uppercase tracking-wider transition-all ${
                  activeCollection === col.slug
                    ? 'bg-iron-red text-white'
                    : 'bg-iron-gray text-iron-white/50 hover:text-iron-white'
                }`}
              >
                {col.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-iron-gray border border-white/10 text-iron-white/70 text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-iron-red"
          >
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="price-asc">Price Low-High</option>
            <option value="price-desc">Price High-Low</option>
          </select>
        </motion.div>

        {/* Results count */}
        <p className="text-iron-white/40 text-sm mb-8">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-iron-white/40 text-lg">No products found in this collection.</p>
          </div>
        )}
      </div>

      {/* Quick view modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}
