import Link from 'next/link';
import ShopGrid from '@/components/shop/ShopGrid';
import LivePresetRoom from '@/components/shop/LivePresetRoom';

export const metadata = {
  title: 'The Atelier Shop — Presets, AI Portraits & Heirloom Digital Goods',
  description: 'Shop Hafsa Noreen\'s signature Lightroom presets, cinematic LUTs, AI portrait sittings, photo restoration, storybooks, gift vouchers and memberships. Try every preset live on your own photo before you buy.',
  alternates: { canonical: '/shop' },
};

export default function ShopPage() {
  return (
    <>
      <section aria-labelledby="shop-heading" className="bg-charcoal-deep pb-16 pt-32 text-ivory md:pt-40">
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
          <p className="section-label !text-brass-light mt-5">✦ The Atelier Store</p>
          <h1 id="shop-heading" className="display-title mt-4 text-[clamp(2.4rem,6vw,4.2rem)]">
            Everything Beautiful, Digitally
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-[0.95rem] font-light leading-relaxed text-ivory/70">
            Presets graded from the atelier&rsquo;s film looks, AI experiences rendered in Hafsa&rsquo;s signature light, and heirloom goods for our clients — instant delivery, worldwide.
          </p>
        </div>
      </section>
      <LivePresetRoom />
      <ShopGrid />
    </>
  );
}
