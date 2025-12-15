'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { EvermoreEmblem } from '@/components/brand/evermore-emblem';
import { ALL_NAV_LINKS, SUBPAGE_NAV_LEFT, SUBPAGE_NAV_RIGHT, type NavLink } from '@/components/layout/home-links';

type SubpageNavbarTheme = 'dark' | 'light';

type ThemeTokens = {
  header: string;
  navItemActive: string;
  navItemInactive: string;
  navItemFocus: string;
  iconFocus: string;
  mobileButton: string;
  divider: string;
  mobileItemActive: string;
  mobileItemInactive: string;
  mobileItemFocus: string;
};

function getThemeTokens(theme: SubpageNavbarTheme): ThemeTokens {
  if (theme === 'light') {
    return {
      header: 'bg-transparent text-deep-plum',
      navItemActive: 'text-deep-plum',
      navItemInactive: 'text-deep-plum/70 hover:text-deep-plum',
      navItemFocus:
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent',
      iconFocus:
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent',
      mobileButton:
        'text-deep-plum/80 hover:text-deep-plum focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent',
      divider: 'bg-deep-plum/15',
      mobileItemActive: 'text-deep-plum',
      mobileItemInactive: 'text-deep-plum/75 hover:text-deep-plum',
      mobileItemFocus:
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent',
    };
  }

  return {
    header: 'bg-deep-plum text-soft-parchment',
    navItemActive: 'text-soft-parchment',
    navItemInactive: 'text-soft-parchment/75 hover:text-soft-parchment',
    navItemFocus: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
    iconFocus: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
    mobileButton: 'text-soft-parchment/85 hover:text-soft-parchment focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
    divider: 'bg-soft-parchment/15',
    mobileItemActive: 'text-soft-parchment',
    mobileItemInactive: 'text-soft-parchment/80 hover:text-soft-parchment',
    mobileItemFocus: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
  };
}

function NavItem({
  link,
  isActive,
  onNavigate,
  tokens,
}: {
  link: NavLink;
  isActive: boolean;
  onNavigate?: () => void;
  tokens: ThemeTokens;
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={[
        'text-xs sm:text-sm tracking-[0.16em] uppercase font-light transition-colors',
        isActive ? tokens.navItemActive : tokens.navItemInactive,
        tokens.navItemFocus,
      ].join(' ')}
      aria-current={isActive ? 'page' : undefined}
    >
      {link.label}
    </Link>
  );
}

export default function SubpageNavbar({ theme = 'dark' }: { theme?: SubpageNavbarTheme }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const tokens = getThemeTokens(theme);

  const activeHref = useMemo(() => {
    // Mark a nav item active for exact matches, and for nested routes.
    const match = ALL_NAV_LINKS.find((l) => pathname === l.href || pathname.startsWith(`${l.href}/`));
    return match?.href;
  }, [pathname]);

  return (
    <header className={['w-full', tokens.header].join(' ')}>
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 pt-8 sm:pt-10 pb-6">
        <div className="grid grid-cols-3 items-center">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-10">
            {SUBPAGE_NAV_LEFT.map((link) => (
              <NavItem key={link.href} link={link} isActive={activeHref === link.href} tokens={tokens} />
            ))}
          </div>

          {/* Mobile hamburger (left) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className={['inline-flex items-center justify-center h-11 w-11', tokens.mobileButton].join(' ')}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="subpage-mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Center emblem */}
          <div className="flex justify-center">
            <Link
              href="/"
              aria-label="Evermore Home"
              className={['inline-flex items-center justify-center', tokens.iconFocus].join(' ')}
            >
              <EvermoreEmblem className="h-10 w-10 sm:h-11 sm:w-11 opacity-90" />
            </Link>
          </div>

          {/* Right links */}
          <div className="hidden md:flex items-center justify-end gap-10">
            {SUBPAGE_NAV_RIGHT.map((link) => (
              <NavItem key={link.href} link={link} isActive={activeHref === link.href} tokens={tokens} />
            ))}
          </div>

          {/* Mobile right spacer */}
          <div className="md:hidden" />
        </div>

        {/* Mobile menu */}
        <div
          id="subpage-mobile-menu"
          className={[
            'md:hidden overflow-hidden transition-[max-height,opacity] duration-300',
            mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="pt-6">
            <div className={['h-px w-full', tokens.divider].join(' ')} />
            <ul className="py-6 space-y-4">
              {ALL_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      'block py-2 text-sm tracking-[0.14em] uppercase font-light',
                      activeHref === link.href ? tokens.mobileItemActive : tokens.mobileItemInactive,
                      tokens.mobileItemFocus,
                    ].join(' ')}
                    aria-current={activeHref === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
