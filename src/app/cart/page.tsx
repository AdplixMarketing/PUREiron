'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

function CheckoutModal({ onClose }: { onClose: () => void }) {
  const { clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      onClose();
    }, 2000);
  };

  return (
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
        className="bg-iron-dark rounded-2xl p-8 max-w-md w-full border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl font-bold text-iron-white">Order Placed!</h2>
            <p className="text-iron-white/50 mt-2">This is a demo. No real order was placed.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-xl font-bold text-iron-white">Checkout</h2>
              <button onClick={onClose} className="text-iron-white/50 hover:text-iron-red transition-colors" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-iron-white/50 mb-1 block">Full Name</label>
                <input required type="text" className="w-full bg-iron-gray border border-white/10 rounded-lg px-4 py-3 text-sm text-iron-white placeholder:text-iron-white/30 focus:outline-none focus:border-iron-red" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-iron-white/50 mb-1 block">Email</label>
                <input required type="email" className="w-full bg-iron-gray border border-white/10 rounded-lg px-4 py-3 text-sm text-iron-white placeholder:text-iron-white/30 focus:outline-none focus:border-iron-red" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-iron-white/50 mb-1 block">Address</label>
                <input required type="text" className="w-full bg-iron-gray border border-white/10 rounded-lg px-4 py-3 text-sm text-iron-white placeholder:text-iron-white/30 focus:outline-none focus:border-iron-red" placeholder="123 Main St, City, State" />
              </div>
              <button
                type="submit"
                className="w-full bg-iron-red hover:bg-iron-red-light text-white font-heading uppercase tracking-wider text-sm py-4 rounded-lg transition-all mt-4"
              >
                Place Order (Demo)
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const shipping = totalPrice >= 100 ? 0 : 9.99;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-3">
            Your Gear
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-iron-white uppercase">
            Cart
          </h1>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-iron-white/40 text-lg mb-6">Your cart is empty.</p>
            <Link
              href="/shop"
              className="inline-block bg-iron-red hover:bg-iron-red-light text-white font-heading uppercase tracking-wider text-sm px-8 py-3 rounded-lg transition-all"
            >
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={`${item.productId}-${item.size}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20, height: 0 }}
                    className="flex gap-4 bg-iron-dark rounded-xl p-4 border border-white/5"
                  >
                    <Link href={`/shop/${item.slug}`} className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link href={`/shop/${item.slug}`} className="font-heading text-sm font-medium text-iron-white hover:text-iron-red transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-xs text-iron-white/40 mt-1">Size: {item.size}</p>
                      <p className="text-iron-red font-semibold text-sm mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.productId, item.size)}
                        className="text-iron-white/30 hover:text-iron-red transition-colors"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-iron-gray text-iron-white/50 hover:text-iron-white flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="text-iron-white text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-iron-gray text-iron-white/50 hover:text-iron-white flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-iron-dark rounded-xl p-6 border border-white/5 sticky top-28">
                <h2 className="font-heading text-lg font-bold text-iron-white mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-iron-white/60">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-iron-white/60">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-500">Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-iron-white/30">Free shipping on orders over $100</p>
                  )}
                  <div className="pt-3 border-t border-white/5 flex justify-between text-iron-white font-semibold text-base">
                    <span>Total</span>
                    <span>${(totalPrice + shipping).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-iron-red hover:bg-iron-red-light text-white font-heading uppercase tracking-wider text-sm py-4 rounded-lg transition-all mt-6 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
                >
                  Checkout
                </button>
                <Link
                  href="/shop"
                  className="block text-center text-sm text-iron-white/50 hover:text-iron-red transition-colors mt-3"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
      </AnimatePresence>
    </div>
  );
}
