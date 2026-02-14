'use client';

export default function MarqueeTicker() {
  const items = [
    'FREE SHIPPING OVER $100',
    'NEW DROP: STEALTH COLLECTION',
    'FORGED FOR THE RELENTLESS',
    'JOIN THE IRON CIRCLE — 10% OFF',
    'BUILT TO OUTPERFORM',
  ];

  // Repeat enough times to guarantee no gaps on any screen width
  const repeated = [...items, ...items, ...items, ...items, ...items];

  const content = repeated.map((item, i) => (
    <span
      key={i}
      className="font-heading text-sm uppercase tracking-widest text-white shrink-0 flex items-center gap-8 mx-8"
    >
      {item}
      <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full" />
    </span>
  ));

  return (
    <div className="bg-iron-red overflow-hidden py-3 relative">
      <div className="flex whitespace-nowrap">
        {/* Two identical strips back-to-back — when the first finishes scrolling, the second is in its place */}
        <div
          className="flex shrink-0 items-center"
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {content}
        </div>
        <div
          className="flex shrink-0 items-center"
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
