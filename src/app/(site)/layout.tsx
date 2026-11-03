import React from 'react';

import SiteChrome from '@/components/site/site-chrome';

import '@/styles/evermore.css';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
