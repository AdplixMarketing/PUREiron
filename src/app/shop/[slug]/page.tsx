'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProductBySlug, getProductsByCollection } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-heading text-4xl text-iron-white">Product Not Found</h1>
        <Link href="/shop" className="text-iron-red mt-4 inline-block hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

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
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-iron-white/40 mb-8">
          <Link href="/shop" className="hover:text-iron-red transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-iron-white/70">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-iron-gray mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-iron-red text-white text-xs font-heading uppercase tracking-wider px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === i ? 'border-iron-red' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-iron-white uppercase">
              {product.name}
            </h1>
            <p className="text-iron-red text-2xl font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-iron-white/60 leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-wider text-iron-white/50 mb-3">
                Size {selectedSize && <span className="text-iron-red">— {selectedSize}</span>}
              </p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-iron-red bg-iron-red/20 text-iron-red'
                        : 'border-white/10 text-iron-white/60 hover:border-white/30 hover:text-iron-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full sm:w-auto px-12 py-4 rounded-lg font-heading uppercase tracking-wider text-sm transition-all ${
                  added
                    ? 'bg-green-600 text-white'
                    : selectedSize
                    ? 'bg-iron-red hover:bg-iron-red-light text-white hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]'
                    : 'bg-iron-gray text-iron-white/30 cursor-not-allowed'
                }`}
              >
                {added ? 'Added to Cart!' : selectedSize ? 'Add to Cart' : 'Select a Size'}
              </button>
            </div>

            {/* Details */}
            <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-sm text-iron-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-iron-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H6.375c-.621 0-1.125-.504-1.125-1.125V14.25m17.25 0V5.625A1.125 1.125 0 0021.75 4.5H2.25A1.125 1.125 0 001.125 5.625v8.625m20.25 0h-1.5m-17.25 0h1.5" />
                </svg>
                Free shipping on orders over $100
              </div>
              <div className="flex items-center gap-3 text-sm text-iron-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-iron-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                30-day returns, no questions asked
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="font-heading text-2xl font-bold text-iron-white uppercase mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: product.images,
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            brand: {
              '@type': 'Brand',
              name: 'PUREiron',
            },
          }),
        }}
      />
    </div>
  );
}
