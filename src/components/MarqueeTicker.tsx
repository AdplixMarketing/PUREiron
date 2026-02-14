'use client';

export default function MarqueeTicker() {
  const items = [
    'FREE SHIPPING OVER $100',
    'NEW DROP: STEALTH COLLECTION',
    'FORGED FOR THE RELENTLESS',
    'JOIN THE IRON CIRCLE — 10% OFF',
    'BUILT TO OUTPERFORM',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="bg-iron-red overflow-hidden py-3 relative">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-heading text-sm uppercase tracking-widest text-white mx-8 flex items-center gap-8"
          >
            {item}
            <span className="inline-block w-2 h-2 bg-white/50 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
