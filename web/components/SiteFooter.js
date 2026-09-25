import Link from 'next/link';

const NAV = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/weddings', 'Weddings'],
  ['/families', 'Families'],
  ['/packages', 'Packages'],
  ['/shop', 'Shop'],
  ['/portfolio', 'Portfolio'],
  ['/reviews', 'Reviews'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export default function SiteFooter() {
  return (
    <footer className="bg-charcoal-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/hafsa-logo.webp" alt="" width={44} height={44} className="h-11 w-11 rounded-full border border-brass/50 object-cover" />
            <p className="font-body text-[0.82rem] font-black tracking-[0.3em] text-brass-light">HAFSA NOREN STUDIO</p>
          </div>
          <p className="mt-4 max-w-xs font-display text-2xl font-light italic text-ivory/85">
            Capturing the laughter, tenderness, and fleeting beauty of life like scenes from your favourite film.
          </p>
        </div>
        <div>
          <h2 className="font-body text-[0.7rem] font-bold uppercase tracking-[0.3em] text-ivory/50">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-ivory/80 transition-colors hover:text-brass-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-body text-[0.7rem] font-bold uppercase tracking-[0.3em] text-ivory/50">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            <li className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="shrink-0 text-brass-light"><path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
              3404 Millicent Avenue, Oakville, ON L6H 0Z3
            </li>
            <li className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="shrink-0 text-brass-light"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg>
              <a href="tel:+16479093135" className="hover:text-brass-light">(647) 909-3135</a>
            </li>
            <li className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="shrink-0 text-brass-light"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              <a href="mailto:hello@hafsanoreen.com" className="hover:text-brass-light">hello@hafsanoreen.com</a>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a href="https://www.instagram.com/hafsanoreen" target="_blank" rel="noopener" aria-label="Instagram" className="text-ivory/70 transition-colors hover:text-brass-light">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.4"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-ivory/45 md:flex-row md:px-10">
          <p>&copy; 2026 Hafsa Noreen Photography. All rights reserved.</p>
          <p className="font-display italic">&ldquo;Art is not what you see, but what you make others see.&rdquo; &mdash; Edgar Degas</p>
          <p>
            <Link href="/privacy" className="hover:text-brass-light">Privacy</Link> · <Link href="/terms" className="hover:text-brass-light">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
