'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { asset } from '@/components/site/asset';
import SiteFooter from '@/components/site/site-footer';

const CTA = 'Not sure where to start? Let us help.';

const SERVICES = [
  { num: 'I.', name: 'Planning Ahead', href: '/planning-ahead' },
  { num: 'II.', name: 'Navigating Loss', href: '/navigating-loss' },
  { num: 'III.', name: 'After the Service', href: '/after-the-service' },
];

type View = 'home' | 'planning-ahead' | 'contact' | 'quiz' | 'not-yet';

function viewFor(pathname: string): View {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/') return 'home';
  if (p === '/planning-ahead' || p === '/contact' || p === '/quiz') return p.slice(1) as View;
  return 'not-yet';
}

function Burger() {
  return (
    <svg width="56" height="30" viewBox="0 0 56 30" fill="none" aria-hidden="true">
      <path d="M56 1H0M56 15H0M56 29H0" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Header, menu, bottom fade, floating mobile CTA and footer for the redesign.
 * Header states (from the handoff): transparent over the home hero, cream bar
 * once scrolled or on other pages, and the open menu panel.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const view = viewFor(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [overHero, setOverHero] = useState(view === 'home');
  const [showFade, setShowFade] = useState(false);
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const toggleBtn = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const onScroll = useCallback(() => {
    const over = view === 'home' && window.scrollY < window.innerHeight - 160;
    setOverHero(over);
    const footer = document.querySelector('.site-footer');
    const footerVisible = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
    const fadeView = view === 'home' || view === 'planning-ahead';
    setShowFade(fadeView && !over && !footerVisible && window.scrollY > 40);
  }, [view]);

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [onScroll]);

  // Close the menu on navigation.
  useEffect(() => setMenuOpen(false), [pathname]);

  const closeMenu = useCallback((refocus: boolean) => {
    setMenuOpen(false);
    if (refocus) openBtn.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    // Mobile shows a "Close" text button; desktop shows the burger in the panel.
    const target = closeBtn.current && closeBtn.current.offsetParent ? closeBtn.current : toggleBtn.current;
    target?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu(true);
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closeMenu(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [menuOpen, closeMenu]);

  const classes = ['ev', `view-${view}`];
  if (view === 'home') classes.push('ev-home');
  if (overHero && !menuOpen) classes.push('over-hero');
  if (showFade) classes.push('show-fade');

  return (
    <div className={classes.join(' ')}>
      <header className="site-header" ref={headerRef}>
        <div className="bar">
          <button
            ref={openBtn}
            className="burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="menu"
            onClick={() => setMenuOpen(true)}
          >
            <Burger />
          </button>
          <Link className="btn d-only" href="/quiz">
            {CTA}
          </Link>
        </div>
        <Link className="mark" href="/" aria-label="Evermore home">
          <img src={asset('r-plum.svg')} alt="" />
        </Link>
        <div className="menu" id="menu" hidden={!menuOpen}>
          <div className="menu-top">
            <button
              ref={toggleBtn}
              className="burger"
              type="button"
              aria-label="Close menu"
              aria-expanded="true"
              aria-controls="menu"
              onClick={() => closeMenu(true)}
            >
              <Burger />
            </button>
            <Link className="btn" href="/quiz">
              {CTA}
            </Link>
          </div>
          <button ref={closeBtn} className="menu-close" type="button" onClick={() => closeMenu(true)}>
            Close
          </button>
          <nav aria-label="Services">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => closeMenu(false)}>
                <span className="num">{s.num}</span>
                <span className="name">{s.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <div className="fade" aria-hidden="true" />
      <div className="float-cta">
        <Link className="btn" href="/quiz">
          {CTA}
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
