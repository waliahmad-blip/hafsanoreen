import Link from 'next/link';
import Image from 'next/image';
import LightCorridorClient from '@/components/three/LightCorridorClient';
import GalleryRail from '@/components/GalleryRail';
import Customizer from '@/components/Customizer';
import { PRODUCTS } from '@/lib/products';

const STATS = [
  ['Vogue & WedLuxe', 'Featured Atelier'],
  ['5.0 ★ (47)', 'Client Commissions'],
  ['From $450', 'CAD + HST'],
];

const TESTIMONIALS = [
  {
    quote: 'Hafsa didn\'t just capture our wedding — she captured the whispers, the tears, the joy we didn\'t know anyone saw. Every frame feels like a film still.',
    author: 'Andrea & Marcus',
    place: 'Oakville',
  },
  {
    quote: 'Our maternity gallery made me cry in the best way. She found light in our living room I didn\'t know existed.',
    author: 'Priya & Daniel',
    place: 'Milton',
  },
  {
    quote: 'The family session felt like a golden-hour picnic that happened to be photographed perfectly.',
    author: 'The Okafor Family',
    place: 'Burlington',
  },
];

const FAQS = [
  ['How far in advance should I book?', 'Most clients book 3–6 months ahead, especially for weddings and fall sessions — but reach out, last-minute openings happen.'],
  ['What should we wear?', 'Every confirmed client receives a personalized style guide. Think soft neutrals and classic silhouettes — they photograph beautifully.'],
  ['Do you travel outside Halton?', 'Absolutely — Niagara wine country, Muskoka cottages, and GTA West destinations with boutique travel packages.'],
];

export default function HomePage() {
  const teaser = PRODUCTS.slice(0, 4);
  return (
    <>
      <LightCorridorClient />

      {/* Stat band */}
      <section aria-label="Studio credentials" className="border-b border-charcoal/10 bg-ivory-deep">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-charcoal/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
          {STATS.map(([value, label]) => (
            <div key={label} className="flex flex-col items-center gap-1 py-8 text-center">
              <span className="font-display text-2xl font-semibold text-charcoal md:text-3xl">{value}</span>
              <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.3em] text-charcoal/50">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <GalleryRail />
      <Customizer />

      {/* Shop teaser */}
      <section aria-labelledby="shop-teaser-heading" className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-label">✦ The Atelier Store</p>
              <h2 id="shop-teaser-heading" className="display-title mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
                Presets, AI Portraits &amp; Heirlooms
              </h2>
            </div>
            <Link href="/shop" className="font-body text-[0.7rem] font-bold uppercase tracking-[0.24em] text-brass hover:text-charcoal">
              Enter the full shop →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teaser.map((p) => (
              <Link key={p.slug} href={`/shop/${p.slug}`} className="group block overflow-hidden rounded-sm border border-charcoal/10 bg-white transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(43,39,36,0.35)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.preview} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-charcoal-deep/85 px-3 py-1 font-body text-[0.55rem] font-bold uppercase tracking-[0.24em] text-brass-light">{p.tagline}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-charcoal">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-body text-sm font-bold text-charcoal">${p.price} CAD</span>
                    <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brass group-hover:translate-x-1 transition-transform">Buy →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Hafsa */}
      <section aria-labelledby="about-mini-heading" className="bg-ivory-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.85fr_1fr] md:px-10">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-[0_24px_60px_-20px_rgba(43,39,36,0.4)]">
              <Image src="/images/hafsa-portrait.jpg" alt="Hafsa Noreen, cinematic natural-light photographer" fill className="object-cover" sizes="(max-width: 768px) 90vw, 380px" />
            </div>
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-brass/40" />
          </div>
          <div>
            <p className="section-label">✦ The Founder</p>
            <h2 id="about-mini-heading" className="display-title mt-3 text-[clamp(2rem,4vw,3rem)]">Meet Hafsa</h2>
            <p className="mt-5 max-w-lg font-body text-[0.95rem] font-light leading-relaxed text-charcoal/80">
              Rooted in Oakville and serving every corner of Halton, I chase the kind of light that makes ordinary moments look like cinema. No stiff poses — just the real you, caught in the golden hour.
            </p>
            <Link href="/about" className="btn-luxury btn-luxury-glass mt-8">My Story →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonial-heading" className="bg-charcoal py-24 text-ivory md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="text-center">
            <p className="section-label !text-brass-light">✦ What They Say</p>
            <h2 id="testimonial-heading" className="display-title mt-3 text-[clamp(2rem,4vw,3rem)]">Words From The Films</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.author} className="rounded-sm border border-ivory/10 bg-ivory/[0.04] p-8">
                <div aria-hidden="true" className="font-display text-5xl leading-none text-brass-light">&ldquo;</div>
                <blockquote className="mt-2 font-display text-xl font-light italic leading-relaxed text-ivory/90">{t.quote}</blockquote>
                <figcaption className="mt-5 font-body text-[0.68rem] font-bold uppercase tracking-[0.26em] text-ivory/50">
                  — {t.author} · {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section aria-labelledby="faq-heading" className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <div className="text-center">
            <p className="section-label">✦ Quick Questions</p>
            <h2 id="faq-heading" className="display-title mt-3 text-[clamp(2rem,4vw,3rem)]">Before You Ask</h2>
          </div>
          <div className="mt-10 space-y-3">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group rounded-sm border border-charcoal/10 bg-white p-5 open:shadow-[0_16px_40px_-20px_rgba(43,39,36,0.25)]">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-body text-sm font-bold text-charcoal [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="text-brass transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-charcoal/75">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-14 rounded-sm bg-charcoal-deep p-10 text-center text-ivory md:p-14">
            <h3 className="display-title text-[clamp(1.6rem,3.5vw,2.6rem)]">Let&rsquo;s create something beautiful.</h3>
            <p className="mx-auto mt-3 max-w-md font-body text-sm font-light text-ivory/70">
              Tell Haffu your date and vision — Hafsa replies personally within 60 seconds during studio hours.
            </p>
            <Link href="/contact" className="btn-luxury btn-luxury-primary mt-8">Begin Your Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
