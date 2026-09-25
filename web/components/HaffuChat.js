'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import DimensionCanvasClient from '@/components/three/DimensionCanvasClient';

const DEFAULT_QUICK_REPLIES = ['Check date availability', 'Pricing', 'What should we wear?', 'Do you travel?'];


const ACTION_LINKS = {
  booking: { href: '/booking', label: 'Reserve Your Date' },
  gallery: { href: '/portfolio', label: 'View The Portfolio' },
  packages: { href: '/packages', label: 'See Packages' },
  shop: { href: '/shop', label: 'Visit The Shop' },
};

function actionLinkFor(key) {
  return ACTION_LINKS[key] || null;
}

/** Stable per-visitor session id so Haffu keeps the thread across reloads. */
function getSessionId() {
  const KEY = 'haffu-session-id';
  try {
    let id = window.localStorage.getItem(KEY);
    if (!id) {
      id = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `hs-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      window.localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return `hs-ephemeral-${Math.random().toString(36).slice(2)}`;
  }
}

/**
 * Safe rich-text renderer — **bold** and [label](/path) become real elements.
 * Everything else renders as plain text; raw HTML can never execute.
 */
function renderRich(text) {
  return String(text || '').split('\n').map((line, li) => {
    const parts = [];
    const TOKEN = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)\s]+\))|(https?:\/\/[^\s)]+)/g;
    let last = 0;
    let match;
    while ((match = TOKEN.exec(line)) !== null) {
      if (match.index > last) parts.push({ kind: 'text', value: line.slice(last, match.index) });
      const token = match[0];
      if (token.startsWith('**')) {
        parts.push({ kind: 'bold', value: token.slice(2, -2) });
      } else if (token.startsWith('[')) {
        const link = token.match(/\[([^\]]+)\]\(([^)\s]+)\)/);
        if (link) parts.push({ kind: 'link', label: link[1], href: link[2] });
      } else {
        parts.push({ kind: 'link', label: token, href: token });
      }
      last = match.index + token.length;
    }
    if (last < line.length) parts.push({ kind: 'text', value: line.slice(last) });
    return (
      <span key={li} className="block">
        {parts.length === 0
          ? '\u00A0'
          : parts.map((p, i) => {
            if (p.kind === 'bold') return <strong key={i} className="font-bold text-brass-light">{p.value}</strong>;
            if (p.kind === 'link') return <a key={i} href={p.href} className="text-brass underline underline-offset-2">{p.label}</a>;
            return <span key={i}>{p.value}</span>;
          })}
      </span>
    );
  });
}

/** Rich action cards rendered beneath a Haffu reply. */
function ActionCard({ card, onNavigate, onQuery }) {
  if (!card || typeof card !== 'object') return null;

  if (card.type === 'quick_actions_card' && Array.isArray(card.options)) {
    return (
      <div className="mt-3 flex flex-col gap-1.5">
        {card.options.map((o) => (
          <button
            key={o.label}
            type="button"
            onClick={() => onQuery(o.query)}
            className="w-full rounded-full border border-ivory/20 px-4 py-2.5 text-left font-body text-xs text-ivory/80 transition-colors hover:border-brass-light hover:text-brass-light"
          >
            {o.label}
          </button>
        ))}
      </div>
    );
  }

  if (card.type === 'instant_retainer_card') {
    return (
      <div className="mt-3 rounded-sm border border-brass/40 bg-brass/10 p-4">
        <p className="font-display text-base font-medium text-brass-light">{card.title || '✦ Instant Date Reservation'}</p>
        {card.subtitle && <p className="mt-1 font-body text-xs text-ivory/70">{card.subtitle}</p>}
        {typeof card.amount === 'number' && (
          <p className="mt-2 font-display text-2xl font-semibold text-ivory">
            ${card.amount.toLocaleString()} <span className="font-body text-xs font-normal text-ivory/60">{card.currency || 'CAD'}</span>
          </p>
        )}
        {Array.isArray(card.features) && card.features.length > 0 && (
          <ul className="mt-2 space-y-1">
            {card.features.map((f) => (
              <li key={f} className="font-body text-[0.7rem] font-light text-ivory/65">✦ {f}</li>
            ))}
          </ul>
        )}
        <Link
          href={card.checkoutUrl || '/booking?instant=500'}
          onClick={onNavigate}
          className="btn-luxury btn-luxury-primary mt-4 !min-h-[40px] w-full justify-center !px-4 !py-2 !text-[0.62rem]"
        >
          {card.ctaLabel || 'Reserve Instantly →'}
        </Link>
      </div>
    );
  }

  if (card.type === 'shop_showcase_card' && Array.isArray(card.items)) {
    return (
      <div className="mt-3 space-y-1.5">
        {card.items.map((item) => (
          <Link
            key={item.key || item.name}
            href={item.href || '/shop'}
            onClick={onNavigate}
            className="flex items-center justify-between gap-3 rounded-sm border border-ivory/15 bg-ivory/[0.05] px-3 py-2 transition-colors hover:border-brass/50"
          >
            <span className="font-body text-xs text-ivory/85">{item.name}</span>
            <span className="shrink-0 font-body text-xs font-bold text-brass-light">${item.price}</span>
          </Link>
        ))}
      </div>
    );
  }

  const generic = actionLinkFor(card.key);
  if (generic) {
    return (
      <Link href={generic.href} onClick={onNavigate} className="btn-luxury btn-luxury-primary mt-3 !min-h-[40px] w-full justify-center !px-4 !py-2 !text-[0.62rem]">
        {generic.label}
      </Link>
    );
  }
  return null;
}

/** CSS media query the React 19 way — no setState-in-effect. */
function usePrefersReducedMotion() {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    [],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  );
}

export default function HaffuChat() {
  // 'closed' → 'open' (iris-in animation) → 'closing' (iris-out) → 'closed'
  const [mode, setMode] = useState('closed');
  const [messages, setMessages] = useState([]);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState('');
  const [unread, setUnread] = useState(false);
  const [quickReplies, setQuickReplies] = useState(DEFAULT_QUICK_REPLIES);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const bootedRef = useRef(false);
  const sessionIdRef = useRef(null);
  const closeTimerRef = useRef(null);

  const open = mode !== 'closed';
  const reduced = usePrefersReducedMotion();

  const openDimension = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMode('open');
    setUnread(false);
  }, []);

  const closeDimension = useCallback(() => {
    setMode((current) => {
      if (current !== 'open') return current;
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      // 0.72s iris-close animation, then unmount (releases the GPU canvas).
      closeTimerRef.current = setTimeout(() => {
        closeTimerRef.current = null;
        setMode('closed');
      }, 760);
      return 'closing';
    });
  }, []);

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!sessionIdRef.current) sessionIdRef.current = getSessionId();
  }, []);

  useEffect(() => {
    if (mode === 'open' && !bootedRef.current) {
      bootedRef.current = true;
      setMessages([
        {
          from: 'haffu',
          text: 'Welcome to the atelier. I am Haffu, Creative Intelligence to Hafsa Noreen. Ask me about dates, pricing, or your session — I answer instantly.',
        },
      ]);
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'closed') {
      const t = setTimeout(() => setUnread(true), 4500);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [mode]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, thinking]);

  // ESC exits, page scroll locks, composer takes focus while inside.
  useEffect(() => {
    if (mode === 'closed') return undefined;
    const lenis = typeof window !== 'undefined' ? window.__lenis : null;
    const prevOverflow = document.body.style.overflow;
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';
    if (inputRef.current) inputRef.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') closeDimension();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = prevOverflow || '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mode, closeDimension]);

  const send = async (text) => {
    const message = (text || input).trim();
    if (!message || thinking) return;
    setInput('');
    const history = messages
      .filter((m) => m.from !== 'system')
      .slice(-8)
      .map((m) => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text }));
    setMessages((prev) => [...prev, { from: 'user', text: message }]);
    setThinking(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/haffu/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, message, history }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data && data.message) {
        setMessages((prev) => [...prev, { from: 'haffu', text: data.message, actionCard: data.actionCard || null }]);
        if (Array.isArray(data.quickReplies) && data.quickReplies.length > 0) {
          setQuickReplies(data.quickReplies.slice(0, 4));
        }
      } else {
        throw new Error('no reply');
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: 'system', text: 'My connection flickered — please try again, or email hello@hafsanoreen.com and Hafsa will reply personally.' },
      ]);
    } finally {
      setThinking(false);
    }
  };

  return (
    <>
      {/* Launcher — the Haffu diamond. One click steps into the dimension. */}
      <button
        type="button"
        onClick={() => (open ? closeDimension() : openDimension())}
        aria-label={open ? 'Close Haffu — exit the dimension' : 'Chat with Haffu'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[95] flex h-14 w-14 items-center justify-center rounded-full border border-brass/40 bg-charcoal-deep text-brass-light shadow-[0_16px_40px_-10px_rgba(26,23,21,0.8)] transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 2 20 12 12 22 4 12Z" />
            <path d="M12 6.5 16.5 12 12 17.5 7.5 12Z" opacity="0.55" />
          </svg>
        )}
        {unread && !open && <span aria-hidden="true" className="absolute -top-1 -right-1 h-4 w-4 animate-pulse rounded-full bg-brass" />}
      </button>

      {/* The Dimension — a full-screen aperture irising open from the launcher. */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Haffu — Creative Intelligence"
          className={`fixed inset-0 z-[90] overflow-hidden bg-charcoal-deep text-ivory ${mode === 'closing' ? 'haffu-dimension-closing' : 'haffu-dimension-opening'}`}
        >
          {!reduced && <DimensionCanvasClient />}

          {/* Readability scrim over the WebGL void */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 90% 72% at 50% 46%, rgba(26,23,21,0.18) 0%, rgba(26,23,21,0.55) 60%, rgba(26,23,21,0.88) 100%)' }}
          />
          {reduced && (
            <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 38%, #2c241c 0%, #12100e 72%)' }} />
          )}

          <div className="relative z-10 flex h-full flex-col">
            <header className="flex items-center gap-3 border-b border-ivory/10 bg-charcoal-deep/40 px-5 py-4 backdrop-blur-md md:px-8">
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/40 bg-brass/10 text-brass-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2 20 12 12 22 4 12Z" /><path d="M12 6.5 16.5 12 12 17.5 7.5 12Z" opacity="0.55" /></svg>
              </span>
              <div className="flex-1">
                <p className="font-display text-lg font-semibold text-ivory">Haffu</p>
                <p className="flex items-center gap-1.5 font-body text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ivory/50">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" /> Creative Intelligence · The Dimension
                </p>
              </div>
              <button type="button" onClick={closeDimension} aria-label="Close Haffu and return to the atelier" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-brass-light hover:text-brass-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </header>

            <div ref={listRef} aria-live="polite" className="mx-auto w-full max-w-3xl flex-1 space-y-3 overflow-y-auto px-5 py-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2.5 font-body text-sm leading-relaxed ${
                  m.from === 'user'
                    ? 'rounded-br-sm bg-brass/25 text-ivory'
                    : m.from === 'system'
                      ? 'border border-rose/40 bg-rose/10 text-ivory/80'
                      : 'rounded-bl-sm bg-ivory/[0.08] text-ivory/90'
                }`}
              >
                {renderRich(m.text)}
                {m.from === 'haffu' && <ActionCard card={m.actionCard} onNavigate={closeDimension} onQuery={(q) => send(q)} />}
              </div>
            </div>
          ))}
          {thinking && (
            <div className="flex justify-start">
              <div className="flex gap-1.5 rounded-lg rounded-bl-sm bg-ivory/[0.08] px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-brass-light" style={{ animationDelay: `${d * 140}ms` }} />
                ))}
              </div>
            </div>
          )}
        </div>

            <footer className="border-t border-ivory/10 bg-charcoal-deep/55 px-5 pb-6 pt-4 backdrop-blur-md md:px-8">
              <div className="mx-auto w-full max-w-3xl">
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="shrink-0 rounded-full border border-ivory/20 px-4 py-2 font-body text-xs text-ivory/75 transition-colors hover:border-brass-light hover:text-brass-light"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <form
                  onSubmit={(e) => { e.preventDefault(); if (input.trim()) { send(input.trim()); setInput(''); } }}
                  className="flex gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Haffu anything…"
                    aria-label="Message Haffu"
                    className="min-h-[48px] flex-1 rounded-full border border-ivory/20 bg-ivory/[0.06] px-5 font-body text-sm text-ivory outline-none placeholder:text-ivory/35 focus:border-brass"
                  />
                  <button type="submit" aria-label="Send" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass text-ivory transition-colors hover:bg-brass-light">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                  </button>
                </form>
                <p className="mt-3 text-center font-body text-[0.62rem] font-light text-ivory/40">
                  Haffu books sessions, answers pricing &amp; curates the atelier — press Esc to return.
                </p>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
