import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  relation?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  relation,
  className = '',
}: TestimonialCardProps) {
  return (
    <div className={`testimonial-card ${className}`}>
      <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 tracking-wide">
        {quote}
      </blockquote>
      <div className="flex items-center justify-center mt-8">
        <div className="h-px w-8 bg-soft-parchment/40 mr-4"></div>
        <div className="text-center">
          <p className="font-medium tracking-wide text-soft-parchment">{author}</p>
          {relation && (
            <p className="text-sm uppercase tracking-wider text-soft-parchment/70 mt-1">{relation}</p>
          )}
        </div>
        <div className="h-px w-8 bg-soft-parchment/40 ml-4"></div>
      </div>
    </div>
  );
}
