'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-iron-dark rounded-2xl overflow-hidden max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative aspect-square bg-iron-gray">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className={product.imageBlend ? 'object-contain object-[center_20%]' : 'object-cover'}
            />
            {product.imageBlend && (
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26,26,26,0.5) 60%, #1A1A1A 85%)'
              }} />
            )}
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col">
            <button
              onClick={onClose}
              className="self-end p-1 text-iron-white/50 hover:text-iron-red transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="font-heading text-2xl font-bold text-iron-white mt-2">
              {product.name}
            </h2>
            <p className="text-iron-red text-xl font-semibold mt-1">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-iron-white/50 text-sm mt-3 line-clamp-3">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-iron-white/50 mb-2">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                      selectedSize === size
                        ? 'border-iron-red bg-iron-red/20 text-iron-red'
                        : 'border-white/10 text-iron-white/60 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-4 flex flex-col gap-2">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-3 rounded-lg font-heading uppercase tracking-wider text-sm transition-all ${
                  added
                    ? 'bg-green-600 text-white'
                    : selectedSize
                    ? 'bg-iron-red hover:bg-iron-red-light text-white'
                    : 'bg-iron-gray text-iron-white/30 cursor-not-allowed'
                }`}
              >
                {added ? 'Added!' : 'Add to Cart'}
              </button>
              <Link
                href={`/shop/${product.slug}`}
                onClick={onClose}
                className="text-center text-sm text-iron-white/50 hover:text-iron-red transition-colors"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
