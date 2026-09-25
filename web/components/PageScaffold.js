import Image from 'next/image';
import Link from 'next/link';

export function PageHero({ tag, title, lede, image, imageAlt, tall }) {
  return (
    <section aria-label="Page introduction" className="relative overflow-hidden bg-charcoal-deep text-ivory">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt={imageAlt || ''} fill priority className="object-cover opacity-30" sizes="100vw" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/70 via-charcoal-deep/40 to-charcoal-deep" />
        </div>
      )}
      <div className={`relative mx-auto max-w-4xl px-5 text-center md:px-10 ${tall ? 'pt-40 pb-20' : 'pt-36 pb-16'} md:pt-48`}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-[0.62rem] font-bold uppercase tracking-[0.26em] text-ivory/60 transition-colors hover:text-brass-light"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        <p className="section-label !text-brass-light mt-5">✦ {tag}</p>
        <h1 className="display-title mt-4 text-[clamp(2.4rem,6.5vw,4.6rem)]">{title}</h1>
        {lede && <p className="mx-auto mt-6 max-w-2xl font-body text-[0.95rem] font-light leading-relaxed text-ivory/75">{lede}</p>}
      </div>
    </section>
  );
}

export function StorySection({ label, title, children, dark }) {
  return (
    <section aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`} className={dark ? 'bg-charcoal py-20 text-ivory md:py-28' : 'bg-ivory py-20 md:py-28'}>
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <p className={`section-label ${dark ? '!text-brass-light' : ''}`}>✦ {label}</p>
        <h2 id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`} className="display-title mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)]">{title}</h2>
        <div className="mt-6 space-y-5 font-body text-[0.95rem] font-light leading-relaxed opacity-90">{children}</div>
      </div>
    </section>
  );
}

export function FeatureGrid({ label, title, items, dark }) {
  return (
    <section aria-labelledby={`grid-${title.replace(/\s+/g, '-').toLowerCase()}`} className={dark ? 'bg-charcoal py-20 text-ivory md:py-28' : 'bg-ivory-deep py-20 md:py-28'}>
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className={`section-label ${dark ? '!text-brass-light' : ''}`}>✦ {label}</p>
        <h2 id={`grid-${title.replace(/\s+/g, '-').toLowerCase()}`} className="display-title mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)]">{title}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className={`rounded-sm border p-7 ${dark ? 'border-ivory/12 bg-ivory/[0.04]' : 'border-charcoal/10 bg-white'}`}>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className={`mt-3 font-body text-sm font-light leading-relaxed ${dark ? 'text-ivory/70' : 'text-charcoal/70'}`}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABand({ title, lede, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <section aria-label="Call to action" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="rounded-sm bg-charcoal-deep p-10 text-center text-ivory md:p-14">
          <h2 className="display-title text-[clamp(1.6rem,3.5vw,2.6rem)]">{title}</h2>
          {lede && <p className="mx-auto mt-3 max-w-md font-body text-sm font-light text-ivory/70">{lede}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={primaryHref} className="btn-luxury btn-luxury-primary">{primaryLabel}</Link>
            {secondaryHref && (
              <Link href={secondaryHref} className="btn-luxury btn-luxury-glass !border-ivory/30 !text-ivory">{secondaryLabel}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
