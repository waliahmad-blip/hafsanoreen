'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const D_INPUT = 'mt-1 w-full rounded-sm border border-ivory/25 bg-ivory/[0.06] px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 outline-none focus:border-brass';
const D_LABEL = 'font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ivory/55';

const RETAINER_FEATURES = [
  'Guaranteed golden-hour priority booking',
  'Direct 1-on-1 wardrobe & styling consultation with Hafsa',
  'Complimentary 48-hour rush sneak peek',
  '100% credited toward your final collection',
];

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export default function BookingForm() {
  const params = useSearchParams();

  // Haffu's instant-retainer handoff: /booking?instant=500&date=2026-06-20
  const instantRaw = params.get('instant');
  const instantDate = params.get('date');
  // Clamp the amount to a sane, trusted range whatever the link carried.
  const instantAmount = instantRaw
    ? Math.min(Math.max(parseInt(instantRaw, 10) || 500, 100), 2000)
    : null;
  const prettyDate = instantDate && ISO_DATE.test(instantDate)
    ? new Date(`${instantDate}T12:00:00`).toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    : instantDate;
  const reserved = params.get('reserved') === 'true';

  const [status, setStatus] = useState('idle');
  const [rName, setRName] = useState('');
  const [rEmail, setREmail] = useState('');
  const [rStatus, setRStatus] = useState('idle');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('working');
    const payload = Object.fromEntries(new FormData(e.target).entries());
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: payload.clientName,
          clientEmail: payload.clientEmail,
          location: payload.location,
          sessionType: payload.sessionType,
          date: payload.date || 'Preferred date discussed at consultation',
        }),
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

  const reserveInstant = async () => {
    if (!rEmail.includes('@')) {
      setRStatus('needs-email');
      return;
    }
    setRStatus('working');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/payments/instant-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: rName || 'Valued Client',
          clientEmail: rEmail,
          sessionType: 'Priority Date Reservation',
          date: instantDate || '',
          location: 'Confirmed with Hafsa at consultation',
          amount: instantAmount,
          successUrl: window.location.origin + '/booking?reserved=true',
          cancelUrl: window.location.href,
        }),
      });
      const data = await res.json().catch(() => null);
      if (data && data.url) {
        window.location.href = data.url;
        return;
      }
      setRStatus('error');
    } catch {
      setRStatus('error');
    }
  };

  if (reserved || status === 'sent') {
    return (
      <div className="rounded-sm border border-brass/40 bg-brass/10 p-10 text-center">
        <p className="font-display text-3xl font-medium text-ivory">Your date is being held. ✦</p>
        <p className="mt-3 font-body text-sm font-light text-ivory/75">
          Check your inbox for the confirmation and retainer link. Hafsa personally confirms every reservation within studio hours.
        </p>
      </div>
    );
  }

  return (
    <>
      {instantAmount && (
        <section aria-labelledby="instant-retainer-heading" className="mb-10 rounded-sm border border-brass/40 bg-brass/10 p-7 md:p-10">
          <p className="section-label !text-brass-light">✦ Instant Reservation</p>
          <h2 id="instant-retainer-heading" className="display-title mt-3 text-[clamp(1.7rem,3.5vw,2.6rem)] text-ivory">
            Lock {prettyDate || 'Your Priority Date'}
          </h2>
          <p className="mt-3 max-w-lg font-body text-sm font-light leading-relaxed text-ivory/75">
            Hafsa&rsquo;s weekend calendar fills 2–4 months in advance — especially for golden-hour sessions. Secure your priority slot right now with a flat reservation retainer.
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <ul className="space-y-2">
                {RETAINER_FEATURES.map((f) => (
                  <li key={f} className="font-body text-sm font-light text-ivory/80">✦ {f}</li>
                ))}
              </ul>
              <p className="mt-5 font-display text-4xl font-semibold text-ivory">
                ${instantAmount.toLocaleString()} <span className="font-body text-sm font-normal text-ivory/60">CAD</span>
              </p>
            </div>
            <div>
              <div className="grid gap-3">
                <div>
                  <label htmlFor="r-name" className={D_LABEL}>Your name</label>
                  <input id="r-name" type="text" value={rName} onChange={(e) => setRName(e.target.value)} className={D_INPUT} placeholder="Your full name" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="r-email" className={D_LABEL}>Email for your receipt *</label>
                  <input id="r-email" type="email" value={rEmail} onChange={(e) => setREmail(e.target.value)} className={D_INPUT} placeholder="you@email.com" autoComplete="email" />
                </div>
              </div>
              <button
                type="button"
                onClick={reserveInstant}
                disabled={rStatus === 'working'}
                className="btn-luxury btn-luxury-primary mt-4 w-full justify-center disabled:opacity-60"
              >
                {rStatus === 'working' ? '✦ Opening secure checkout…' : `✦ Reserve With $${instantAmount.toLocaleString()} Retainer`}
              </button>
              {rStatus === 'needs-email' && <p className="mt-3 font-body text-xs text-rose">A valid email is required for your reservation receipt.</p>}
              {rStatus === 'error' && <p className="mt-3 font-body text-xs text-rose">Checkout is briefly unavailable — email hello@hafsanoreen.com and we&apos;ll hold your date manually within the hour.</p>}
            </div>
          </div>
        </section>
      )}

      <form onSubmit={submit} className="rounded-sm border border-ivory/15 bg-ivory/[0.04] p-7 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="b-name" className={D_LABEL}>Your name *</label>
          <input id="b-name" name="clientName" required className={D_INPUT} placeholder="Your full name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="b-email" className={D_LABEL}>Email *</label>
          <input id="b-email" name="clientEmail" type="email" required className={D_INPUT} placeholder="you@email.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="b-type" className={D_LABEL}>Collection *</label>
          <select id="b-type" name="sessionType" required defaultValue="" className={D_INPUT}>
            <option value="" disabled>Choose…</option>
            <option value="portrait">The Portrait Atelier — $450</option>
            <option value="family">The Family & Maternity — $650</option>
            <option value="event">The Event Chapter — $1,200</option>
            <option value="wedding">The Wedding Heirloom — $3,800</option>
            <option value="signature">The Signature Commission — $6,500</option>
          </select>
        </div>
        <div>
          <label htmlFor="b-location" className={D_LABEL}>Location *</label>
          <select id="b-location" name="location" required defaultValue="" className={D_INPUT}>
            <option value="" disabled>Choose…</option>
            <option value="oakville">Oakville</option>
            <option value="burlington">Burlington</option>
            <option value="milton">Milton</option>
            <option value="halton-hills">Halton Hills</option>
            <option value="toronto">Toronto / GTA</option>
            <option value="destination">Destination</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="b-date" className={D_LABEL}>Preferred date</label>
          <input
            id="b-date"
            name="date"
            type="date"
            className={D_INPUT}
            defaultValue={instantDate && ISO_DATE.test(instantDate) ? instantDate : undefined}
          />
        </div>
      </div>
      <button type="submit" disabled={status === 'working'} className="btn-luxury btn-luxury-primary mt-6 w-full justify-center disabled:opacity-60">
        {status === 'working' ? '✦ Locking your window…' : '✦ Reserve My Date'}
      </button>
      <p className="mt-3 text-center font-body text-[0.7rem] font-light text-ivory/50">
        A reservation retainer (from $500) secures the date — 100% credited toward your collection.
      </p>
      {status === 'fallback' && (
        <p className="mt-3 text-center font-body text-xs text-rose">
          The calendar pipeline hiccuped — please email hello@hafsanoreen.com with your date and we&apos;ll hold it manually within the hour.
        </p>
      )}
      </form>
    </>
  );
}
