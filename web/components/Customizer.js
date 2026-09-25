'use client';

import { useState } from 'react';

const TIERS = [
  { key: 'portrait', name: 'The Portrait Atelier', price: 450, desc: '1.5 hours editorial session · 25 hand-graded frames · wardrobe styling consultation' },
  { key: 'family', name: 'The Family & Maternity', price: 650, desc: '2 hours on-location at Kelso or your residence · 40 frames · 48h sneak peek' },
  { key: 'wedding', name: 'The Wedding Heirloom', price: 3800, desc: '8 hours comprehensive coverage · 400+ editorial film frames · planning consultation' },
  { key: 'signature', name: 'The Signature Commission', price: 6500, desc: 'Full day · second master shooter · archival fine-art album & 4K cinematic reel' },
];

const ADDONS = [
  { key: 'reel', name: '4K Cinematic Reel', price: 400 },
  { key: 'album', name: 'Fine-Art Layflat Album', price: 600 },
  { key: 'rush', name: 'Rush 5-Day Delivery', price: 200 },
  { key: 'extraHour', name: 'Extra Coverage Hour', price: 250 },
];

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export default function Customizer() {
  const [tier, setTier] = useState('family');
  const [addons, setAddons] = useState([]);
  const [status, setStatus] = useState('idle');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const base = TIERS.find((t) => t.key === tier);
  const subtotal = base.price + addons.reduce((sum, k) => sum + (ADDONS.find((a) => a.key === k)?.price || 0), 0);
  const retainer = Math.max(500, Math.round(subtotal * 0.3));

  const toggleAddon = (key) => {
    setAddons((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const checkout = async () => {
    if (!clientEmail.includes('@')) {
      setStatus('needs-email');
      return;
    }
    setStatus('working');
    try {
      const res = await fetch(`${API_BASE}/api/payments/package-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageKey: tier,
          addonKeys: addons,
          clientName: clientName || 'Valued Client',
          clientEmail,
          date: 'Preferred date discussed at consultation',
          location: 'Oakville / Burlington / Milton / Halton',
          successUrl: window.location.origin + '/booking?reserved=true',
          cancelUrl: window.location.href,
        }),
      });
      const data = await res.json();
      if (data && data.url) {
        window.location.href = data.url;
        return;
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="customizer" aria-label="Interactive package builder" className="bg-charcoal-deep py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label !text-brass-light">✦ Bespoke Commissions &amp; Retainer Lock</p>
          <h2 className="display-title mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">Design Your Visual Story</h2>
          <p className="mt-4 font-body text-sm font-light leading-relaxed text-ivory/70">
            Select your foundation collection, tailor bespoke add-ons, and lock your priority date with a reservation retainer — 100% credited toward your collection.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <fieldset>
              <legend className="sr-only">Choose your collection</legend>
              <div className="space-y-3">
                {TIERS.map((t) => (
                  <label
                    key={t.key}
                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-sm border p-5 transition-all duration-300 ${
                      tier === t.key ? 'border-brass bg-brass/10' : 'border-ivory/15 hover:border-ivory/35'
                    }`}
                  >
                    <input
                      type="radio"
                      name="package-tier"
                      value={t.key}
                      checked={tier === t.key}
                      onChange={() => setTier(t.key)}
                      className="sr-only"
                    />
                    <span>
                      <span className="block font-display text-xl font-medium">{t.name}</span>
                      <span className="mt-1 block font-body text-xs font-light text-ivory/60">{t.desc}</span>
                    </span>
                    <span className="font-body text-lg font-bold text-brass-light">${t.price.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <p className="mt-8 font-body text-[0.68rem] font-bold uppercase tracking-[0.28em] text-ivory/50">Bespoke Heirlooms &amp; Enhancements</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {ADDONS.map((a) => (
                <label
                  key={a.key}
                  className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-full border px-5 py-3 transition-all duration-300 ${
                    addons.includes(a.key) ? 'border-brass bg-brass/15 text-brass-light' : 'border-ivory/20 text-ivory/75 hover:border-ivory/40'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addons.includes(a.key)}
                    onChange={() => toggleAddon(a.key)}
                    className="h-4 w-4 accent-brass"
                  />
                  <span className="font-body text-sm">{a.name}</span>
                  <span className="font-body text-xs font-bold">+${a.price}</span>
                </label>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-sm border border-ivory/15 bg-ivory/[0.04] p-7 lg:sticky lg:top-28">
            <h3 className="font-display text-2xl font-medium">Commission Summary</h3>
            <ul className="mt-5 space-y-3 font-body text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-ivory/80">{base.name}</span>
                <span className="font-bold">${base.price.toLocaleString()}</span>
              </li>
              {addons.map((k) => {
                const a = ADDONS.find((x) => x.key === k);
                return (
                  <li key={k} className="flex justify-between gap-4 text-brass-light">
                    <span>+ {a.name}</span>
                    <span className="font-bold">+${a.price}</span>
                  </li>
                );
              })}
            </ul>
            <hr className="my-5 border-ivory/15" />
            <div className="flex justify-between font-body">
              <span className="text-ivory/70">Total investment</span>
              <span className="text-xl font-bold">${subtotal.toLocaleString()}</span>
            </div>
            <div className="mt-6 rounded-sm border border-brass/40 bg-brass/10 p-4 text-center">
              <p className="font-body text-[0.6rem] font-bold uppercase tracking-[0.28em] text-brass-light">Date reservation retainer</p>
              <p className="mt-1 font-display text-4xl font-semibold">${retainer.toLocaleString()}</p>
              <p className="mt-2 font-body text-[0.7rem] font-light text-ivory/60">100% credited toward your collection.</p>
            </div>
            <div className="mt-6 grid gap-3">
              <div>
                <label htmlFor="cz-name" className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ivory/55">Your name</label>
                <input id="cz-name" type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Your full name" autoComplete="name" className="mt-1 w-full rounded-sm border border-ivory/25 bg-ivory/[0.06] px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 outline-none focus:border-brass" />
              </div>
              <div>
                <label htmlFor="cz-email" className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ivory/55">Email for your receipt *</label>
                <input id="cz-email" type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="you@email.com" autoComplete="email" className="mt-1 w-full rounded-sm border border-ivory/25 bg-ivory/[0.06] px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 outline-none focus:border-brass" />
              </div>
            </div>
            <button
              type="button"
              onClick={checkout}
              disabled={status === 'working'}
              className="btn-luxury btn-luxury-primary mt-6 w-full justify-center disabled:opacity-60"
            >
              {status === 'working' ? '✦ Connecting to secure Stripe…' : `✦ Lock Date With $${retainer.toLocaleString()} Retainer`}
            </button>
            {status === 'needs-email' && (
              <p className="mt-3 text-center font-body text-xs text-rose">A valid email is required so your retainer receipt reaches you.</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-center font-body text-xs text-rose">Checkout is briefly unavailable — please call (647) 909-3135.</p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
