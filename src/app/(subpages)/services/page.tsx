import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ServiceCard } from '@/components/services/service-card';
import { getAssetPath } from '@/utils/asset-path';

export const metadata: Metadata = {
  title: 'Services | Evermore',
  description: 'Transparent, vendor-neutral support tailored to your family.',
};

export default function ServicesPage() {
  const services = {
    funeralPlanning: {
      title: 'Funeral Planning',
      summary: 'Thoughtful, step-by-step guidance for creating a meaningful farewell.',
      body: [
        "We help you design a ceremony that reflects your loved one’s life, values, and community.",
        "Our role is to simplify decisions, offer clarity, and carry the logistics so you don’t have to.",
      ],
    },
    afterCare: {
      title: 'After-Care Support',
      summary: 'Help with paperwork, clean-outs, and next steps.',
      body: [
        'We can help you untangle the practical details—at a pace that feels humane.',
        'From forms and phone calls to coordinating support, we stay with you beyond the service.',
      ],
    },
  };

  return (
    <section className="pb-24">
      {/* Hero */}
      <header className="relative pt-10 sm:pt-14 md:pt-16">
        {/* Decorative sprig */}
        <div className="pointer-events-none absolute left-0 top-24 hidden lg:block">
          <Image
            src={getAssetPath('/images/forget-me-nots.png')}
            alt=""
            aria-hidden="true"
            width={280}
            height={900}
            className="h-[320px] w-auto opacity-65 -rotate-[8deg]"
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-light leading-relaxed text-soft-parchment/70">
            Below you’ll find the ways we support you, crafted to meet your needs—whether you want full-service planning or simply
            someone to steady the day.
          </p>

          <h1 className="mt-8 text-[34px] leading-[1.18] sm:text-5xl sm:leading-[1.18] md:text-6xl md:leading-[1.15] text-soft-parchment text-balance">
            Gentle guidance, steady presence, and thoughtful care from the first call to everything that follows.
          </h1>

          <div className="mt-10 sm:mt-12">
            <div className="relative flex items-center justify-center">
              <div className="h-px w-full bg-soft-parchment/15" />
              <Link
                href="#services-overview"
                className={[
                  'absolute px-4 py-2 bg-deep-plum text-[11px] tracking-[0.18em] uppercase font-light',
                  'text-soft-parchment/75 hover:text-soft-parchment transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum',
                ].join(' ')}
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Overview cards */}
      <div id="services-overview" className="scroll-mt-24 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title={services.funeralPlanning.title}
            summary={services.funeralPlanning.summary}
            body={services.funeralPlanning.body}
            href="#funeral-planning"
            variant="featured"
          />
          <ServiceCard
            title={services.afterCare.title}
            summary={services.afterCare.summary}
            body={services.afterCare.body}
            href="#after-care"
            variant="outline"
            className="min-h-[320px]"
          />
        </div>
      </div>

      {/* Feature rows (image + tall card) */}
      <div className="mt-16 sm:mt-20 space-y-14 sm:space-y-16">
        <section id="funeral-planning" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-8 relative overflow-hidden rounded-md border border-soft-parchment/10 bg-white/5 aspect-[16/10] sm:aspect-[16/9] md:aspect-auto min-h-[260px] sm:min-h-[420px]">
              <Image
                src={getAssetPath('/images/placeholder.jpg')}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-4">
              <ServiceCard
                title={services.funeralPlanning.title}
                summary={services.funeralPlanning.summary}
                body={services.funeralPlanning.body}
                href="#services-overview"
                variant="featured"
                className="h-full"
              />
            </div>
          </div>
        </section>

        <section id="after-care" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-8 relative overflow-hidden rounded-md border border-soft-parchment/10 bg-white/5 aspect-[16/10] sm:aspect-[16/9] md:aspect-auto min-h-[260px] sm:min-h-[420px]">
              <Image
                src={getAssetPath('/images/placeholder.jpg')}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-4">
              <ServiceCard
                title={services.afterCare.title}
                summary={services.afterCare.summary}
                body={services.afterCare.body}
                href="#services-overview"
                variant="featured"
                className="h-full"
              />
            </div>
          </div>
        </section>
      </div>

      <p className="mt-20 sm:mt-24 text-center text-soft-parchment/70 font-light">
        You&apos;re not meant to hold all of this alone.
      </p>
    </section>
  );
}
