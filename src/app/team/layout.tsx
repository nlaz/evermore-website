import React from 'react';

import SubpageFooter from '@/components/layout/subpage-footer';
import SubpageNavbar from '@/components/layout/subpage-navbar';

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-lilac-mist text-deep-plum flex flex-col">
      <SubpageNavbar theme="light" />
      <main className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-10 lg:px-12 pb-20 flex-1">
        <div className="pt-14 sm:pt-16 md:pt-20">{children}</div>
      </main>
      <SubpageFooter />
    </div>
  );
}

