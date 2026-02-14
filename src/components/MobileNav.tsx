'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/cart', label: 'Cart' },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Slide-out panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-iron-dark z-50 border-l border-white/5 flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <span className="font-heading text-xl font-bold text-iron-white">
                PURE<span className="text-iron-red">iron</span>
              </span>
              <button
                onClick={onClose}
                className="p-2 text-iron-white/70 hover:text-iron-red transition-colors"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 px-4 font-heading text-lg uppercase tracking-widest text-iron-white/70 hover:text-iron-red hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom branding */}
            <div className="mt-auto p-6 border-t border-white/5">
              <p className="text-xs text-iron-white/30 uppercase tracking-widest">
                Forged for the Relentless
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
