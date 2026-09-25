'use client';

import { useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

const INPUT = 'mt-1 w-full rounded-sm border border-charcoal/20 bg-white px-4 py-3 font-body text-sm outline-none focus:border-brass';
const LABEL = 'font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-charcoal/60';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('working');
    const fd = new FormData(e.target);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('sent');
        return;
      }
      setStatus('fallback');
    } catch {
      setStatus('fallback');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-sm border border-sage/50 bg-sage/10 p-8 text-center">
        <p className="font-display text-2xl font-medium text-charcoal">Your inquiry is on the easel.</p>
        <p className="mt-2 font-body text-sm font-light text-charcoal/70">Haffu has routed it — Hafsa replies personally within 60 seconds during studio hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate={false} className="rounded-sm border border-charcoal/10 bg-white p-7 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={LABEL}>Full name *</label>
          <input id="c-name" name="name" required className={INPUT} placeholder="Your full name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="c-email" className={LABEL}>Email *</label>
          <input id="c-email" name="email" type="email" required className={INPUT} placeholder="you@email.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="c-phone" className={LABEL}>Phone</label>
          <input id="c-phone" name="phone" type="tel" className={INPUT} placeholder="(647) 555-0123" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="c-type" className={LABEL}>Session type *</label>
          <select id="c-type" name="sessionType" required defaultValue="" className={INPUT}>
            <option value="" disabled>Choose…</option>
            <option value="wedding">Wedding</option>
            <option value="family">Family</option>
            <option value="maternity">Maternity</option>
            <option value="event">Event</option>
            <option value="portrait">Portrait</option>
            <option value="brand">Brand / Commercial</option>
          </select>
        </div>
        <div>
          <label htmlFor="c-date" className={LABEL}>Preferred date</label>
          <input id="c-date" name="date" type="date" className={INPUT} />
        </div>
        <div>
          <label htmlFor="c-location" className={LABEL}>Location</label>
          <select id="c-location" name="location" defaultValue="" className={INPUT}>
            <option value="">Choose…</option>
            <option value="oakville">Oakville</option>
            <option value="burlington">Burlington</option>
            <option value="milton">Milton</option>
            <option value="halton-hills">Halton Hills</option>
            <option value="toronto">Toronto</option>
            <option value="other">Other / destination</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="c-message" className={LABEL}>Tell us your story *</label>
        <textarea id="c-message" name="message" required rows={4} className={INPUT} placeholder="The date, the vibe, the people — everything you know so far." />
      </div>
      <button type="submit" disabled={status === 'working'} className="btn-luxury btn-luxury-primary mt-6 w-full justify-center disabled:opacity-60">
        {status === 'working' ? '✦ Sending to the atelier…' : '✦ Send Your Inquiry'}
      </button>
      {status === 'fallback' && (
        <p className="mt-3 text-center font-body text-xs text-charcoal/60">
          The form pipeline hiccuped — please email <a className="text-brass underline" href="mailto:hello@hafsanoreen.com">hello@hafsanoreen.com</a> and we&apos;ll answer within the hour.
        </p>
      )}
    </form>
  );
}
