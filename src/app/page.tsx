import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { HOME_NAV_LINKS } from '@/components/layout/home-links';
import { getAssetPath } from '@/utils/asset-path';

export const metadata: Metadata = {
  title: 'Evermore',
  description: 'Human-first support for modern, meaningful farewells.',
};

export default function HomePage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={getAssetPath('/images/subtle-texture.png')} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f2ea]/75 via-[#f6f2ea]/55 to-[#f6f2ea]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0)_55%)]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-12">
        {/* Top emblem */}
        <div className="pt-2">
          <Image
            src={getAssetPath('/logos/Evermore_Emblem_Simple.svg')}
            alt="Evermore"
            width={44}
            height={44}
            priority
            className="h-10 w-10 opacity-80"
          />
        </div>

        {/* Center wordmark */}
        <div className="flex grow flex-col items-center justify-center text-center">
          <Image
            src={getAssetPath('/logos/evermore-wordmark.svg')}
            alt="Evermore"
            width={720}
            height={220}
            priority
            className="h-auto w-[240px] sm:w-[340px] md:w-[460px] lg:w-[560px]"
          />
        </div>

        {/* Bottom links */}
        <nav aria-label="Primary" className="pb-2">
          <ul className="flex flex-col items-center gap-3 sm:gap-4">
            {HOME_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    'text-[15px] sm:text-base md:text-lg',
                    'tracking-[0.18em] uppercase font-light',
                    'text-deep-plum/80 hover:text-deep-plum',
                    'transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f2ea]',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
