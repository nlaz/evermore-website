import React from 'react';
import Link from 'next/link';

type ServiceCardVariant = 'featured' | 'outline';

function FlowerMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className ?? 'h-4 w-4'}
      fill="currentColor"
    >
      <path d="M12 2.9c1.6 0 2.9 1.3 2.9 2.9 0 .6-.2 1.2-.5 1.6.4-.1.8-.2 1.2-.2 1.6 0 2.9 1.3 2.9 2.9 0 1-.5 1.9-1.3 2.4 1.3.3 2.2 1.5 2.2 2.9 0 1.6-1.3 2.9-2.9 2.9-.7 0-1.3-.2-1.8-.6.1.3.2.7.2 1.1 0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9c0-.4.1-.8.2-1.1-.5.4-1.1.6-1.8.6-1.6 0-2.9-1.3-2.9-2.9 0-1.4 1-2.6 2.2-2.9-.8-.5-1.3-1.4-1.3-2.4 0-1.6 1.3-2.9 2.9-2.9.4 0 .8.1 1.2.2-.3-.5-.5-1-.5-1.6C9.1 4.2 10.4 2.9 12 2.9z" />
    </svg>
  );
}

export function ServiceCard({
  title,
  summary,
  body,
  href,
  variant,
  className,
}: {
  title: string;
  summary: string;
  body: readonly string[];
  href: string;
  variant: ServiceCardVariant;
  className?: string;
}) {
  const shell =
    variant === 'featured'
      ? 'bg-soft-parchment text-deep-plum border border-deep-plum/15 shadow-[0_14px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_52px_rgba(0,0,0,0.24)]'
      : 'bg-transparent text-soft-parchment border border-soft-parchment/25 hover:bg-white/5';

  const metaText = variant === 'featured' ? 'text-deep-plum/70' : 'text-soft-parchment/70';
  const bodyText = variant === 'featured' ? 'text-deep-plum/70' : 'text-soft-parchment/70';
  const divider = variant === 'featured' ? 'bg-deep-plum/15' : 'bg-soft-parchment/15';
  const ctaText = variant === 'featured' ? 'text-deep-plum/70 hover:text-deep-plum' : 'text-soft-parchment/75 hover:text-soft-parchment';
  const focus =
    variant === 'featured'
      ? 'focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/35 focus-visible:ring-offset-4 focus-visible:ring-offset-soft-parchment'
      : 'focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-parchment/60 focus-visible:ring-offset-4 focus-visible:ring-offset-deep-plum';

  return (
    <article className={['rounded-md transition-[background-color,box-shadow] duration-300', shell, className].filter(Boolean).join(' ')}>
      <div className="p-7 sm:p-8 md:p-9 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className={metaText}>
            <FlowerMark className="h-[18px] w-[18px]" />
          </div>
        </div>

        <h2 className="mt-5 text-2xl sm:text-[28px] leading-tight">{title}</h2>
        <p className={['mt-3 text-sm leading-relaxed', metaText].join(' ')}>{summary}</p>

        <div className="mt-6 space-y-4">
          {body.map((p) => (
            <p key={p.slice(0, 24)} className={['text-sm leading-relaxed', bodyText].join(' ')}>
              {p}
            </p>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className={['h-px w-full', divider].join(' ')} />
          <div className="pt-4 flex justify-center">
            <Link
              href={href}
              className={['text-[11px] tracking-[0.16em] uppercase transition-colors', ctaText, focus].join(' ')}
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

