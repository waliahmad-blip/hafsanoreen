'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * The 18 editorial gallery plates, migrated verbatim from the legacy archive.
 * Category chips filter the rail; every plate links to its gallery chapter.
 */
const PLATES = [
  { category: 'Weddings', title: 'Golden Hour Vows at Gairloch Gardens', location: 'Gairloch Gardens, Oakville', light: 'Amber horizon rim light', href: '/weddings', image: '/images/corridor/corridor-1.jpg' },
  { category: 'Weddings', title: 'Whispered Promises Along Brant Pier', location: 'Brant Street Pier, Burlington', light: 'Marine dusk pastels', href: '/weddings', image: '/images/corridor/corridor-2.jpg' },
  { category: 'Weddings', title: 'Heritage Stone Architecture & Veil Grace', location: 'Paletta Lakefront Mansion, Burlington', light: 'Limestone daylight geometry', href: '/weddings', image: '/images/corridor/corridor-5.jpg' },
  { category: 'Weddings', title: 'Distillery Cobblestones & Editorial Glamour', location: 'Distillery District, Toronto', light: 'Victorian brick warmth', href: '/weddings', image: '/images/corridor/corridor-6.jpg' },
  { category: 'Weddings', title: 'Lakeside First Dance at Twilight', location: 'Burlington Shoreline Terrace', light: 'Twilight blue-hour glow', href: '/weddings', image: '/images/corridor/corridor-2.jpg' },
  { category: 'Weddings', title: 'Quiet Stroll Through Sunken Rose Arches', location: 'Gairloch Gardens Estate, Oakville', light: 'Soft directional garden light', href: '/weddings', image: '/images/corridor/corridor-1.jpg' },
  { category: 'Families', title: 'Generations Along Sixteen Mile Creek', location: "Lion's Valley Park, Oakville", light: 'Dappled creek canopy', href: '/families', image: '/images/corridor/corridor-3.jpg' },
  { category: 'Families', title: 'Autumn Wildflowers & Joyful Embrace', location: 'Scotsdale Farm, Halton Hills', light: 'Warm amber horizon rim light', href: '/families', image: '/images/corridor/corridor-4.jpg' },
  { category: 'Families', title: 'Rustic Suspension Bridge & Creek Splashes', location: 'Lowville Park, Burlington', light: 'Forest bounce diffusions', href: '/families', image: '/images/corridor/corridor-5.jpg' },
  { category: 'Families', title: 'Sun-Drenched Heritage Orchard Walk', location: 'Country Heritage Park, Milton', light: 'Orchard golden backlight', href: '/families', image: '/images/corridor/corridor-6.jpg' },
  { category: 'Maternity', title: 'Ethereal Shoreline Reverie', location: 'Coronation Park, Oakville', light: 'Silk-linen shoreline breeze', href: '/maternity', image: '/images/corridor/corridor-1.jpg' },
  { category: 'Maternity', title: 'Soft Coastal Breeze & Linen Movement', location: 'Bronte Harbour Pier, Oakville', light: 'Marine pastel spectrum', href: '/maternity', image: '/images/corridor/corridor-2.jpg' },
  { category: 'Maternity', title: 'Botanical Solitude & Rose Pavilions', location: 'Royal Botanical Gardens, Burlington', light: 'Greenhouse diffusion glow', href: '/maternity', image: '/images/corridor/corridor-3.jpg' },
  { category: 'Maternity', title: 'Intimate Nursery Reverie & Gentle Cradle', location: 'Private Atelier Residence, Oakville', light: 'Window-light whisper', href: '/maternity', image: '/images/corridor/corridor-4.jpg' },
  { category: 'Events', title: 'Candlelight Dinner & Intimate Toasts', location: 'Old Oakville Atelier Reception', light: 'Atmospheric ambient warmth', href: '/events', image: '/images/corridor/corridor-5.jpg' },
  { category: 'Events', title: 'Distillery Evening Celebration & Toasts', location: 'Historic Fermenting Cellar, Toronto', light: 'Candlelit stone romance', href: '/events', image: '/images/corridor/corridor-6.jpg' },
  { category: 'Landscapes', title: 'Ancient Cedar Crests & Cliffside Mist', location: 'Rattlesnake Point, Milton', light: 'Escarpment fog diffusion', href: '/service-areas', image: '/images/corridor/corridor-3.jpg' },
  { category: 'Landscapes', title: 'Limestone Crags in Autumn Splendor', location: 'Mount Nemo Escarpment, Burlington', light: 'Autumn brass reflections', href: '/service-areas', image: '/images/corridor/corridor-5.jpg' },
];

const FILTERS = ['All', 'Weddings', 'Families', 'Maternity', 'Events', 'Landscapes'];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PLATES : PLATES.filter((p) => p.category === filter);

  return (
    <section aria-label="Portfolio galleries" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-[44px] rounded-full border px-6 py-2.5 font-body text-[0.68rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                filter === f ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/25 text-charcoal/70 hover:border-charcoal'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Link
              key={p.title}
              href={p.href}
              className="group block overflow-hidden rounded-sm border border-charcoal/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(43,39,36,0.45)]"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.location}`}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-charcoal-deep/85 px-3 py-1 font-body text-[0.55rem] font-bold uppercase tracking-[0.24em] text-brass-light">
                  {p.category}
                </span>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-charcoal/50">✦ {p.location}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-charcoal transition-colors group-hover:text-brass">
                  {p.title}
                </h3>
                <p className="mt-1 font-body text-xs font-light italic text-brass">{p.light}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brass transition-transform duration-300 group-hover:translate-x-1">
                  View the chapter →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
