import Link from 'next/link';
import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: 'Reserve Your Date — Booking & Retainer',
  description: 'Reserve your session date with Hafsa Noreen Photography. A reservation retainer from $500 locks your golden-hour window — 100% credited toward your collection.',
  alternates: { canonical: '/booking' },
};

export default function BookingPage() {
  return (
    <>
      <section aria-labelledby="booking-heading" className="bg-charcoal-deep pb-14 pt-36 text-ivory md:pt-44">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-[0.62rem] font-bold uppercase tracking-[0.26em] text-ivory/60 transition-colors hover:text-brass-light"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <p className="section-label !text-brass-light mt-5">✦ Reservations</p>
          <h1 id="booking-heading" className="display-title mt-4 text-[clamp(2.4rem,6vw,4.2rem)]">Hold Your Golden Window</h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-[0.95rem] font-light leading-relaxed text-ivory/70">
            Dates are reserved in order of inquiry. A retainer locks yours — the rest is conversation and light.
          </p>
        </div>
      </section>
      <section aria-label="Booking form" className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <Suspense fallback={<div className="py-10 text-center font-body text-sm text-ivory/60">Preparing your reservation…</div>}>
            <BookingForm />
          </Suspense>
          <div className="mt-10 grid gap-4 text-center text-ivory/70 sm:grid-cols-3">
            <div className="rounded-sm border border-ivory/12 p-5">
              <p className="font-display text-2xl">48h</p>
              <p className="mt-1 font-body text-[0.62rem] font-bold uppercase tracking-[0.26em] text-ivory/45">Sneak peek</p>
            </div>
            <div className="rounded-sm border border-ivory/12 p-5">
              <p className="font-display text-2xl">3–4 wks</p>
              <p className="mt-1 font-body text-[0.62rem] font-bold uppercase tracking-[0.26em] text-ivory/45">Full gallery</p>
            </div>
            <div className="rounded-sm border border-ivory/12 p-5">
              <p className="font-display text-2xl">100%</p>
              <p className="mt-1 font-body text-[0.62rem] font-bold uppercase tracking-[0.26em] text-ivory/45">Retainer credited</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
