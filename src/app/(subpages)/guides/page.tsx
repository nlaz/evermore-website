import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { GUIDES } from '@/content/guides';

export const metadata: Metadata = {
  title: 'Guides | Evermore',
  description: 'Practical, compassionate guides for navigating loss and planning.',
};

function FloralMark() {
  // Decorative only.
  return (
    <div aria-hidden="true" className="pointer-events-none hidden lg:block">
      <div className="sticky top-28">
        <Image
          src="/images/forget-me-not-2.png"
          alt=""
          width={184}
          height={766}
          sizes="(min-width: 1024px) 90px, 0px"
          className="h-auto w-[90px] opacity-70"
          priority
        />
      </div>
    </div>
  );
}

export default function GuidesPage() {
  return (
    <section className="relative">
      <div className="w-full">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          <aside className="hidden lg:flex justify-center">
            <FloralMark />
          </aside>

          <div className="space-y-14 lg:justify-self-center lg:w-full">
            <header className="mx-auto max-w-[928px] space-y-8 text-center">
              <p className="text-soft-parchment/65 text-sm font-light tracking-[0.14em] uppercase">This library is for you</p>
              <div className="space-y-5">
                <p className="text-soft-parchment/70 font-light leading-relaxed">
                  This library is here for you: practical tools, step-by-step guidance, and gentle reflections to support you
                  through planning, loss, and everything that follows.
                </p>
                <p className="text-soft-parchment/70 font-light leading-relaxed">
                  Whether you’re preparing for a service, sorting through next steps, or simply seeking a moment of grounding,
                  we’ve gathered insights to help you move at your own pace.
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading leading-tight text-soft-parchment">
                Take what you need.
              </h1>
            </header>

            <div className="mx-auto w-full max-w-[1605px]">
              <div className="border-t border-soft-parchment/15">
                {GUIDES.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className={[
                      'group block w-full border-b border-soft-parchment/15',
                      'px-6 sm:px-8 py-7 sm:py-8',
                      'transition-colors duration-200',
                      'hover:bg-soft-parchment hover:text-deep-plum',
                      'focus:outline-none focus-visible:bg-soft-parchment focus-visible:text-deep-plum',
                      'focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
                    ].join(' ')}
                  >
                    <p className="text-xs tracking-[0.18em] uppercase font-light text-soft-parchment/60 group-hover:text-deep-plum/70 group-focus-visible:text-deep-plum/70">
                      {guide.author}
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-heading leading-snug text-soft-parchment group-hover:text-deep-plum group-focus-visible:text-deep-plum">
                      {guide.title}
                    </h2>
                  </Link>
                ))}
              </div>
            </div>

            <p className="pt-10 text-center text-soft-parchment/60 font-heading text-lg sm:text-xl">One thing at a time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
