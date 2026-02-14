'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

function StatsCounter({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl md:text-5xl font-bold text-iron-red">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-iron-white/50 text-sm uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="Gym atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-iron-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-iron-red mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-iron-white uppercase">
            Built Different
          </h1>
        </motion.div>
      </section>

      {/* Story sections */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-iron-white uppercase mb-6">
              The <span className="text-iron-red">Beginning</span>
            </h2>
            <p className="text-iron-white/60 leading-relaxed mb-4">
              PUREiron started in a garage gym in 2020. Frustrated with athletic wear that fell
              apart after a few washes and looked generic, we set out to create something
              different — gear that could survive the most brutal training sessions and look
              lethal doing it.
            </p>
            <p className="text-iron-white/60 leading-relaxed">
              We sourced the most durable fabrics, tested with real athletes, and refined every
              detail until it was perfect. No compromises. No shortcuts. Pure iron discipline.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80"
              alt="Training"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80"
              alt="Quality materials"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-iron-white uppercase mb-6">
              The <span className="text-iron-red">Standard</span>
            </h2>
            <p className="text-iron-white/60 leading-relaxed mb-4">
              Every PUREiron piece goes through rigorous testing. We simulate thousands of
              washes, test stretch recovery, and measure breathability in real training
              conditions. If it doesn&apos;t pass, it doesn&apos;t ship.
            </p>
            <p className="text-iron-white/60 leading-relaxed">
              Our commitment to quality means we produce smaller batches with better materials.
              We&apos;d rather make 100 pieces that last years than 10,000 that fall apart in months.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-iron-white uppercase mb-6">
            The <span className="text-iron-red">Mission</span>
          </h2>
          <p className="text-iron-white/60 leading-relaxed max-w-2xl mx-auto">
            To equip every athlete — from the 5 AM grinder to the competitive powerlifter —
            with gear that matches their intensity. We believe your clothing should be the
            last thing you worry about when you step into the gym. It should just work.
            Always.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-iron-dark py-20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCounter end={10000} label="Athletes" suffix="+" />
          <StatsCounter end={50} label="Products" suffix="+" />
          <StatsCounter end={15} label="Countries" />
          <StatsCounter end={98} label="Satisfaction" suffix="%" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-iron-white uppercase mb-6">
            Ready to <span className="text-iron-red">Level Up</span>?
          </h2>
          <p className="text-iron-white/60 text-lg mb-8">
            Join thousands of athletes who refuse to settle for anything less.
          </p>
          <a
            href="/shop"
            className="inline-block bg-iron-red hover:bg-iron-red-light text-white font-heading uppercase tracking-wider text-sm px-10 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
          >
            Shop the Collection
          </a>
        </motion.div>
      </section>
    </div>
  );
}
