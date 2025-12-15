import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { GUIDES, getGuideBySlug } from '@/content/guides';
import { getAssetPath } from '@/utils/asset-path';

type PageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: 'Guide Not Found',
      description: 'This guide could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const image = guide.heroImage?.src ? getAssetPath(guide.heroImage.src) : undefined;

  return {
    title: guide.title,
    description: guide.dek,
    openGraph: {
      title: guide.title,
      description: guide.dek,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: guide.title,
      description: guide.dek,
      images: image ? [image] : undefined,
    },
  };
}

export default function GuidePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <article className="space-y-12">
      <header className="space-y-6">
        <p className="text-xs tracking-[0.18em] uppercase text-deep-plum/60">Evermore Guide</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading leading-tight text-deep-plum">{guide.title}</h1>
        <p className="max-w-2xl text-deep-plum/75 font-light leading-relaxed">{guide.dek}</p>
      </header>

      {guide.heroImage?.src ? (
        <div className="overflow-hidden rounded-xl border border-deep-plum/15 bg-deep-plum/5">
          <Image
            src={getAssetPath(guide.heroImage.src)}
            alt={guide.heroImage.alt}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 900px, 100vw"
            priority
          />
        </div>
      ) : null}

      <div className="space-y-12">
        {guide.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-lg sm:text-xl font-heading text-deep-plum">{section.heading}</h2>
            <div className="space-y-4">
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="text-deep-plum/75 font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="pt-2">
        <Link
          href="/guides"
          className="inline-flex text-xs tracking-[0.18em] uppercase text-deep-plum/70 hover:text-deep-plum focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-bone"
        >
          Return to Guides
        </Link>
      </div>
    </article>
  );
}
