'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/lib/products';

export default function ShopGrid() {
  const [cat, setCat] = useState('all');
  const visible = cat === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <section aria-label="All products" className="bg-ivory py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={cat === c.key}
              onClick={() => setCat(c.key)}
              className={`min-h-[44px] rounded-full border px-6 py-2.5 font-body text-[0.68rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                cat === c.key ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/25 text-charcoal/70 hover:border-charcoal'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/shop/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(43,39,36,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.preview} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-charcoal-deep/85 px-3 py-1 font-body text-[0.55rem] font-bold uppercase tracking-[0.24em] text-brass-light">
                  {p.tagline}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-charcoal">{p.name}</h3>
                <p className="mt-2 flex-1 font-body text-[0.8rem] font-light leading-relaxed text-charcoal/65">{p.blurb}</p>
                <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-4">
                  <span className="font-body text-sm font-bold text-charcoal">
                    ${p.price} CAD
                    {p.compareAt && <span className="ml-2 font-normal text-charcoal/40 line-through">${p.compareAt}</span>}
                    {p.subscription && <span className="ml-1 font-normal text-charcoal/50">/mo+</span>}
                  </span>
                  <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brass transition-transform group-hover:translate-x-1">View →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
