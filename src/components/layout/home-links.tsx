export type NavLink = {
  href: string;
  label: string;
  shortLabel?: string;
};

// Source of truth for primary site navigation.
// Order here matches the homepage bottom-link stack from the mockup.
export const HOME_NAV_LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/guides', label: 'Guides' },
  { href: '/team', label: 'Team' },
  { href: '/connect', label: 'Connect With Us', shortLabel: 'Connect' },
];

export const SUBPAGE_NAV_LEFT: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Our Services', shortLabel: 'Services' },
];

export const SUBPAGE_NAV_RIGHT: NavLink[] = [
  { href: '/guides', label: 'Guides' },
  { href: '/connect', label: 'Connect With Us', shortLabel: 'Connect' },
];

export const ALL_NAV_LINKS: NavLink[] = [
  ...SUBPAGE_NAV_LEFT,
  ...SUBPAGE_NAV_RIGHT,
];
