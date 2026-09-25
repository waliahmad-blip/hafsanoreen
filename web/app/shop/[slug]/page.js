import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, getProduct } from '@/lib/products';
import BuyButton from '@/components/shop/BuyButton';
import StyleReportForm from '@/components/shop/StyleReportForm';
import WallVisualizer from '@/components/shop/WallVisualizer';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: `${product.name} - $${product.price} CAD`,
    description: product.blurb,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: { images: [{ url: product.preview }] },
  };
}

const CATEGORY_LABEL = { creator: 'For Creators', ai: 'AI Experience', client: 'For Our Clients', gifting: 'Gifting' };

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  return (
    <>
      <div className="bg-charcoal-deep pb-10 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <nav aria-label="Breadcrumb" className="font-body text-[0.62rem] font-bold uppercase tracking-[0.24em] text-ivory/50">
            <Link href="/shop" className="hover:text-brass-light">Shop</Link> · <span className="text-brass-light">{CATEGORY_LABEL[product.category]}</span>
          </nav>
          <h1 className="display-title mt-4 text-[clamp(2.2rem,5.5vw,3.8rem)] text-ivory">{product.name}</h1>
        </div>
      </div>

      <div className="bg-ivory py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-[0_28px_70px_-28px_rgba(43,39,36,0.45)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.preview} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-charcoal-deep/85 px-3 py-1 font-body text-[0.55rem] font-bold uppercase tracking-[0.24em] text-brass-light">{product.tagline}</span>
          </div>
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-semibold text-charcoal">${product.price}</span>
              <span className="font-body text-sm text-charcoal/50">CAD</span>
              {product.compareAt && <span className="font-body text-sm text-charcoal/40 line-through">${product.compareAt}</span>}
            </div>
            <p className="mt-5 font-body text-[0.95rem] font-light leading-relaxed text-charcoal/80">{product.blurb}</p>

            {/* What's included - the full contents list */}
            {Array.isArray(product.includes) && product.includes.length > 0 && (
              <div className="mt-7 rounded-sm border border-charcoal/10 bg-white p-6">
                <p className="font-body text-[0.62rem] font-bold uppercase tracking-[0.24em] text-brass">What&rsquo;s included</p>
                <ul className="mt-4 space-y-2.5">
                  {product.includes.map((item) => (
                    <li key={item} className="flex gap-3 font-body text-sm font-light leading-relaxed text-charcoal/80">
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-brass">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How it arrives - the 3-step journey */}
            {Array.isArray(product.steps) && product.steps.length > 0 && (
              <div className="mt-5 rounded-sm border border-brass/30 bg-brass/[0.07] p-6">
                <p className="font-body text-[0.62rem] font-bold uppercase tracking-[0.24em] text-brass">How it arrives</p>
                <ol className="mt-4 space-y-3">
                  {product.steps.map((step, i) => (
                    <li key={step} className="flex gap-3 font-body text-sm font-light text-charcoal/80">
                      <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brass/50 font-body text-[0.62rem] font-bold text-brass">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <BuyButton product={product} />

            {/* Interactive experiences */}
            {product.interactive === 'style-report' && <StyleReportForm />}
            {product.interactive === 'wall-visualizer' && (
              <div className="mt-10 rounded-sm border border-charcoal/10 bg-ivory-deep p-6 md:p-8">
                <p className="section-label">✦ Try It Live</p>
                <h3 className="display-title mt-2 text-2xl text-charcoal">See It On Your Wall</h3>
                <p className="mt-2 font-body text-sm font-light text-charcoal/70">
                  Upload your room, drag the print, and order with confidence.
                </p>
                <WallVisualizer />
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-6xl px-5 md:px-10">
            <h2 className="display-title text-2xl text-charcoal">Pairs beautifully with</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/shop/${p.slug}`} className="group overflow-hidden rounded-sm border border-charcoal/10 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.preview} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <span className="font-display text-base font-semibold text-charcoal">{p.name}</span>
                    <span className="font-body text-sm font-bold">${p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
