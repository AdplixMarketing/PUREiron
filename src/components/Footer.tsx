'use client';

import Link from 'next/link';

const footerLinks = {
  Shop: [
    { href: '/shop', label: 'All Products' },
    { href: '/collections/hoodies-tops', label: 'Hoodies & Tops' },
    { href: '/collections/joggers-shorts', label: 'Joggers & Shorts' },
    { href: '/collections/accessories', label: 'Accessories' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
  ],
  Support: [
    { href: '#', label: 'Shipping & Returns' },
    { href: '#', label: 'Size Guide' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'FAQ' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-iron-dark border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold tracking-wider text-iron-white">
                PURE<span className="text-iron-red">iron</span>
              </span>
            </Link>
            <p className="text-iron-white/50 text-sm leading-relaxed mb-6">
              Premium gym clothing forged for those who never quit. Every stitch, every fiber — built to perform.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-iron-white/50 hover:border-iron-red hover:text-iron-red transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-iron-white mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-iron-white/50 hover:text-iron-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-iron-white mb-1">
                Join the Iron Circle
              </h3>
              <p className="text-sm text-iron-white/50">
                Get early access, exclusive drops, and training content.
              </p>
            </div>
            <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-iron-gray border border-white/10 rounded-l-lg px-4 py-3 text-sm text-iron-white placeholder:text-iron-white/30 focus:outline-none focus:border-iron-red w-full md:w-64 transition-colors"
              />
              <button
                type="submit"
                className="bg-iron-red hover:bg-iron-red-light text-white font-heading text-sm uppercase tracking-wider px-6 py-3 rounded-r-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-iron-white/30">
            &copy; {new Date().getFullYear()} PUREiron. All rights reserved. Forged for the Relentless.
          </p>
        </div>
      </div>
    </footer>
  );
}
