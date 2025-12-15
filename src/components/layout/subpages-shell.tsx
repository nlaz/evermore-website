'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import SubpageFooter from '@/components/layout/subpage-footer';
import SubpageNavbar from '@/components/layout/subpage-navbar';

type SubpageTheme = 'dark' | 'light';

export default function SubpagesShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isConnect = pathname === '/connect';
  const isGuidesIndex = pathname === '/guides';
  const isGuideDetail = pathname.startsWith('/guides/');
  const isAbout = pathname === '/about';

  const theme = useMemo<SubpageTheme>(() => {
    return isConnect || isGuideDetail ? 'light' : 'dark';
  }, [isConnect, isGuideDetail]);

  const wrapperClassName = useMemo(() => {
    if (isConnect) return 'min-h-screen bg-soft-parchment text-deep-plum flex flex-col';
    if (isGuideDetail) return 'min-h-screen bg-bone text-deep-plum flex flex-col';
    return 'min-h-screen bg-deep-plum text-soft-parchment flex flex-col';
  }, [isConnect, isGuideDetail]);

  // Default subpages are intentionally narrow, but About needs room for the
  // full-width hero rhythm + decorative florals.
  const mainMaxWidthClassName = isGuideDetail
    ? 'max-w-5xl'
    : isAbout
      ? 'max-w-7xl'
      : isGuidesIndex
        ? 'max-w-[1720px]'
        : 'max-w-4xl';

  return (
    <div className={wrapperClassName}>
      <SubpageNavbar theme={theme} />
      <main className={['mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-12 pb-20 flex-1', mainMaxWidthClassName].join(' ')}>
        <div className="pt-14 sm:pt-16 md:pt-20">{children}</div>
      </main>
      <SubpageFooter />
    </div>
  );
}
