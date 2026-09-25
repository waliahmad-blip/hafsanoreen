'use client';

import { useRef } from 'react';

const TILES = [
  { href: '/weddings', title: 'Weddings', count: 'Plate No. 01 · Vows', img: '/images/corridor/corridor-1.jpg' },
  { href: '/families', title: 'Families', count: 'Plate No. 02 · Heirlooms', img: '/images/corridor/corridor-2.jpg' },
  { href: '/maternity', title: 'Maternity', count: 'Plate No. 03 · Reverie', img: '/images/corridor/corridor-3.jpg' },
  { href: '/events', title: 'Celebrations', count: 'Plate No. 04 · Gatherings', img: '/images/corridor/corridor-4.jpg' },
];

function TiltCard({ tile, index }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
  };

  return (
    <a
      ref={ref}
      href={tile.href}
      className="group relative block overflow-hidden rounded-sm transition-transform duration-300 ease-out will-change-transform"
      style={{ aspectRatio: '3 / 4' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tile.img}
        alt={`${tile.title} photography by Hafsa Noreen`}
        loading={index < 2 ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(201,167,111,0.25), transparent 65%)' }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-2xl font-medium text-ivory">{tile.title}</h3>
        <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.3em] text-brass-light">{tile.count}</span>
      </div>
    </a>
  );
}

export default function GalleryRail() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-label">✦ The Galleries</p>
            <h2 id="gallery-heading" className="display-title mt-3 text-[clamp(2rem,4.5vw,3.4rem)] text-charcoal">
              Choose Your Chapter
            </h2>
          </div>
          <a href="/portfolio" className="font-body text-[0.7rem] font-bold uppercase tracking-[0.24em] text-brass hover:text-charcoal">
            View full portfolio →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t, i) => (
            <TiltCard key={t.href} tile={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
