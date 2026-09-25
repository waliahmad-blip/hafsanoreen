import Link from 'next/link';
import { PageHero, CTABand } from '@/components/PageScaffold';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata = {
  title: 'Portfolio — Cinematic Photography Across Halton & the GTA',
  description: 'Selected film frames: weddings, families, maternity, celebrations and escarpment landscapes across Oakville, Burlington, Milton, Halton Hills & Toronto.',
  alternates: { canonical: '/portfolio' },
};

const FEATURED = [
  {
    tag: 'Oakville Private Commission',
    title: 'Lakeside Devotion at Gairloch Gardens',
    href: '/weddings',
    note: '10 Hours Coverage · 680 Hand-Graded Heirlooms · Italian Leather Album',
  },
  {
    tag: 'Milton Destination Commission',
    title: 'Escarpment Summit Vows at Rattlesnake Point',
    href: '/weddings',
    note: '8 Hours Coverage · 520 Hand-Graded Heirlooms · Fine-Art Layflat Album',
  },
  {
    tag: 'Halton Hills Family Commission',
    title: 'Generational Legacy at Scotsdale Farm',
    href: '/families',
    note: '6 Hours Coverage · 450 Hand-Graded Heirlooms · Deckled Fine Art Prints',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        tag='Portfolio'
        title='Selected Frames'
        lede='A curated corridor of the atelier&rsquo;s favourite stills — each one a scene from somebody&rsquo;s favourite film.'
        image='/images/corridor/corridor-6.jpg'
        imageAlt='Selected Frames'
      />

      <PortfolioGrid />

      <section aria-labelledby="featured-heading" className="bg-charcoal py-20 text-ivory md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <p className="section-label !text-brass-light">✦ Featured Commissions</p>
          <h2 id="featured-heading" className="display-title mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)]">
            Real Love Stories &amp; Family Legacies
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FEATURED.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group flex flex-col justify-between rounded-sm border border-brass/25 bg-charcoal-deep p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass/60 hover:shadow-[0_24px_60px_-24px_rgba(201,167,111,0.35)]"
              >
                <div>
                  <p className="font-body text-[0.62rem] font-bold uppercase tracking-[0.24em] text-brass-light">{f.tag}</p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ivory">{f.title}</h3>
                </div>
                <p className="mt-5 font-body text-xs font-light italic text-brass-light/80">{f.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title='Your story belongs in this corridor.'
        lede='Book a session and the next frame could be yours.'
        primaryHref='/booking'
        primaryLabel='Reserve Your Date'
        secondaryHref='/contact'
        secondaryLabel='Ask About A Session'
      />
    </>
  );
}
