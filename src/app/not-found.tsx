import type { Metadata } from 'next';
import Link from 'next/link';

import SubpageFooter from '@/components/layout/subpage-footer';
import SubpageNavbar from '@/components/layout/subpage-navbar';

export const metadata: Metadata = {
  title: 'Page not found | Evermore',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-plum text-soft-parchment flex flex-col">
      <SubpageNavbar theme="dark" />

      <main className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-10 lg:px-12 pb-20 flex-1 flex">
        <section className="w-full pt-14 sm:pt-16 md:pt-20 pb-6 flex flex-col justify-center min-h-[62svh]">
          <header className="space-y-4 text-center">
            <p className="text-xs tracking-[0.18em] uppercase text-soft-parchment/70 font-light">404</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading leading-tight text-balance">Page not found</h1>
            <p className="mx-auto text-soft-parchment/75 max-w-2xl font-light leading-relaxed">
              The link may be broken, or the page may have moved. You can return home, or reach out and we’ll help you find what
              you need.
            </p>
          </header>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center">
            <Link
              href="/"
              className={[
                'inline-flex items-center justify-center rounded-md px-5 py-3',
                'bg-soft-parchment text-deep-plum',
                'text-xs sm:text-sm tracking-[0.16em] uppercase font-light',
                'hover:bg-soft-parchment/90 transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
              ].join(' ')}
            >
              Return home
            </Link>
            <Link
              href="/connect"
              className={[
                'inline-flex items-center justify-center rounded-md px-5 py-3',
                'border border-soft-parchment/35 text-soft-parchment',
                'text-xs sm:text-sm tracking-[0.16em] uppercase font-light',
                'hover:bg-soft-parchment/10 transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
              ].join(' ')}
            >
              Connect with us
            </Link>
          </div>

          <p className="mt-10 text-center text-sm text-soft-parchment/65 font-light">
            If you’d rather email directly:{' '}
            <a className="underline underline-offset-4 hover:text-soft-parchment" href="mailto:hello@evermorefuneral.com">
              hello@evermorefuneral.com
            </a>
          </p>
        </section>
      </main>

      <SubpageFooter />
    </div>
  );
}
