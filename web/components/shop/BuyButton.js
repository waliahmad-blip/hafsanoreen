'use client';

import { useState } from 'react';
import { startProductCheckout } from '@/lib/checkout';

export default function BuyButton({ product }) {
  const [variant, setVariant] = useState(product.variants ? product.variants[0] : null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');

  const buy = async () => {
    if (!email.includes('@')) {
      setStatus('needs-email');
      return;
    }
    setStatus('working');
    const ok = await startProductCheckout(product, { email, name: name || 'Valued Client', variant });
    if (!ok) setStatus('error');
  };

  return (
    <div className="mt-8">
      {product.variants && (
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariant(v)}
              aria-pressed={variant === v}
              className={`min-h-[44px] rounded-full border px-5 py-2 font-body text-sm font-bold transition-all ${
                variant === v ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/25 hover:border-charcoal'
              }`}
            >
              ${v}
            </button>
          ))}
        </div>
      )}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="buy-name" className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-charcoal/60">Your name</label>
          <input
            id="buy-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-sm border border-charcoal/20 bg-white px-4 py-3 font-body text-sm outline-none focus:border-brass"
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="buy-email" className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-charcoal/60">Email for delivery *</label>
          <input
            id="buy-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-sm border border-charcoal/20 bg-white px-4 py-3 font-body text-sm outline-none focus:border-brass"
            placeholder="you@email.com"
            autoComplete="email"
          />
        </div>
      </div>
      <button type="button" onClick={buy} disabled={status === 'working'} className="btn-luxury btn-luxury-primary mt-5 w-full justify-center disabled:opacity-60">
        {status === 'working' ? '✦ Opening secure checkout…' : `✦ Buy Now — $${variant || product.price} CAD`}
      </button>
      {status === 'needs-email' && <p className="mt-3 font-body text-xs text-rose">A valid email is required for instant digital delivery.</p>}
      {status === 'error' && <p className="mt-3 font-body text-xs text-rose">Checkout is briefly unavailable — email hello@hafsanoreen.com and we&apos;ll hold your order.</p>}
      <p className="mt-4 font-body text-xs font-light text-charcoal/55">{product.delivery}</p>
    </div>
  );
}
