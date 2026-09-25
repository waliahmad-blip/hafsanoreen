'use client';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Starts a Stripe (or simulated) checkout for a shop product.
 * - productKey is the catalog slug (aliased server-side in stripe.js SLUG_PRODUCTS)
 * - amount is always sent explicitly so the charged price can never drift
 * - variants (e.g. gift voucher denominations) change the amount, not the key
 */
export async function startProductCheckout(product, { email, name, variant } = {}) {
  const productKey = product.slug;
  const amount = Number(variant || product.price);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/payments/product-checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productKey,
      amount,
      clientEmail: email,
      clientName: name,
      successUrl: window.location.origin + `/shop/${product.slug}?purchased=true`,
      cancelUrl: window.location.href,
    }),
  });
  const data = await res.json().catch(() => null);
  if (data && data.url) {
    window.location.href = data.url;
    return true;
  }
  return false;
}
