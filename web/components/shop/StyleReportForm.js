'use client';

import { useState } from 'react';

/**
 * Intake form for the What-to-Wear Style Report — collects the wardrobe
 * brief and returns the drafted guide inline (also emailed when the
 * studio email service is configured).
 */
const D_INPUT = 'mt-1 w-full rounded-sm border border-charcoal/20 bg-white px-4 py-3 font-body text-sm outline-none focus:border-brass';
const LABEL = 'font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-charcoal/60';

export default function StyleReportForm() {
  const [status, setStatus] = useState('idle');
  const [report, setReport] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('working');
    const payload = Object.fromEntries(new FormData(e.target).entries());
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/haffu/style-report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data && (data.report || data.message)) {
        setReport(data.report || data.message);
        setStatus('done');
      } else {
        throw new Error('no report');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="rounded-sm border border-sage/50 bg-sage/10 p-7">
        <p className="font-display text-2xl font-medium text-charcoal">Your style brief is drafted ✦</p>
        <p className="mt-2 font-body text-sm font-light text-charcoal/70">
          A copy is on its way to your inbox — keep it with you when you shop.
        </p>
        {report && (
          <div className="mt-5 max-h-80 overflow-y-auto whitespace-pre-line rounded-sm border border-charcoal/10 bg-white p-5 font-body text-sm font-light leading-relaxed text-charcoal/85">
            {report}
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-sm border border-charcoal/10 bg-white p-7">
      <p className="section-label">✦ Style Intake</p>
      <h3 className="display-title mt-2 text-2xl text-charcoal">Tell Haffu about your session</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sr-name" className={LABEL}>Your name *</label>
          <input id="sr-name" name="clientName" required className={D_INPUT} placeholder="Your full name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="sr-email" className={LABEL}>Email *</label>
          <input id="sr-email" name="email" type="email" required className={D_INPUT} placeholder="you@email.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="sr-type" className={LABEL}>Session type *</label>
          <select id="sr-type" name="sessionType" required defaultValue="" className={D_INPUT}>
            <option value="" disabled>Choose…</option>
            <option value="wedding">Wedding</option>
            <option value="family">Family</option>
            <option value="maternity">Maternity</option>
            <option value="event">Event / Celebration</option>
            <option value="portrait">Portrait</option>
            <option value="brand">Brand / Commercial</option>
          </select>
        </div>
        <div>
          <label htmlFor="sr-season" className={LABEL}>Season *</label>
          <select id="sr-season" name="season" required defaultValue="" className={D_INPUT}>
            <option value="" disabled>Choose…</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sr-venue" className={LABEL}>Venue / location</label>
          <input id="sr-venue" name="venue" className={D_INPUT} placeholder="e.g. Kelso Conservation, Gairloch Gardens, your backyard…" />
        </div>
      </div>
      <button type="submit" disabled={status === 'working'} className="btn-luxury btn-luxury-primary mt-6 w-full justify-center disabled:opacity-60">
        {status === 'working' ? '✦ Curating your wardrobe…' : '✦ Draft My Style Report'}
      </button>
      {status === 'error' && (
        <p className="mt-3 text-center font-body text-xs text-charcoal/60">
          The studio pipeline hiccuped — email hello@hafsanoreen.com and Hafsa will draft your guide personally.
        </p>
      )}
      <p className="mt-4 text-center font-body text-xs font-light text-charcoal/50">
        Have your order confirmation handy — the guide is included with your purchase.
      </p>
    </form>
  );
}
