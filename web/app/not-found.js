import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-charcoal-deep px-6 text-center text-ivory">
      <p className="section-label !text-brass-light">✦ Lost Frame</p>
      <h1 className="display-title mt-4 text-[clamp(3rem,10vw,7rem)]">404</h1>
      <p className="mt-4 max-w-md font-body text-sm font-light text-ivory/70">
        This frame never made the final cut. Let&rsquo;s walk you back into the gallery.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-luxury btn-luxury-primary">Return Home</Link>
        <Link href="/portfolio" className="btn-luxury btn-luxury-glass !border-ivory/30 !text-ivory">View Portfolio</Link>
      </div>
    </section>
  );
}
