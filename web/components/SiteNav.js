'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/story', label: 'My Story' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/shop', label: 'Shop' },
  { href: '/packages', label: 'Packages' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLinkRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    // A drawer link navigated — close during render (React's endorsed
    // "adjust state on prop change" pattern; no effect-setState cascade).
    setPrevPath(pathname);
    setOpen(false);
  }

  // ── Scroll lock while the drawer is open (the mobile-freeze fix) ──
  useEffect(() => {
    if (!open) return undefined;
    const lenis = typeof window !== 'undefined' ? window.__lenis : null;
    const prevOverflow = document.body.style.overflow;
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';
    if (firstLinkRef.current) firstLinkRef.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const toggleEl = toggleRef.current;
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = prevOverflow || '';
      window.removeEventListener('keydown', onKey);
      if (toggleEl) toggleEl.focus();
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/90 shadow-[0_8px_30px_-16px_rgba(43,39,36,0.4)] backdrop-blur-xl'
          // Every page opens on a dark hero — a soft gradient scrim guarantees
          // the ivory nav stays readable over it until the user scrolls.
          : 'bg-gradient-to-b from-charcoal-deep/70 via-charcoal-deep/30 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link
          href="/"
          aria-label="Hafsa Noreen Studio — home"
          className={`flex items-center gap-3 transition-colors ${scrolled ? 'text-charcoal' : 'text-ivory'}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/hafsa-logo.webp"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-brass/50 object-cover shadow-[0_6px_18px_-6px_rgba(26,23,21,0.55)]"
          />
          <span className={`font-body text-[0.82rem] font-black tracking-[0.3em] ${scrolled ? 'text-charcoal' : 'text-ivory'}`}>
            HAFSA&nbsp;NOREN&nbsp;STUDIO
          </span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close navigation' : 'Toggle navigation'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[1.5px] w-6 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-ivory'} ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-6 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-ivory'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-ivory'} ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`font-body text-[0.68rem] font-bold uppercase tracking-[0.22em] transition-colors ${
                  pathname === l.href
                    ? 'text-brass-light'
                    : scrolled
                      ? 'text-charcoal/80 hover:text-brass'
                      : 'text-ivory/85 hover:text-brass-light'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile drawer — fully inert when closed; locks background scroll when open */}
      <div
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-charcoal-deep/97 backdrop-blur-xl transition-[opacity,visibility] duration-500 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
        onClick={close}
      >
        <div className="flex items-center justify-end px-5 pt-6">
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            tabIndex={open ? 0 : -1}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-brass-light hover:text-brass-light"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-1 flex-col items-center justify-center gap-7 px-5 pb-16">
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: `${i * 45}ms` }}
              className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={l.href}
                tabIndex={open ? 0 : -1}
                className={`font-display text-4xl font-medium text-ivory transition-colors hover:text-brass-light ${
                  pathname === l.href ? 'text-brass-light' : ''
                }`}
                onClick={close}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
