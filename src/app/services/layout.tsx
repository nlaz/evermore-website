import React from 'react';

import SubpageFooter from '@/components/layout/subpage-footer';
import SubpageNavbar from '@/components/layout/subpage-navbar';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-deep-plum text-soft-parchment flex flex-col">
      <SubpageNavbar theme="dark" />
      <main className="mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-12 pb-20 flex-1">{children}</main>
      <SubpageFooter />
    </div>
  );
}
