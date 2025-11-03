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
      <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-6 sm:mb-8 tracking-wide">
        {quote}
      </blockquote>
      <div className="flex items-center justify-center mt-6 sm:mt-8">
        <div className="h-px w-6 sm:w-8 bg-soft-parchment/40 mr-3 sm:mr-4"></div>
        <div className="text-center">
          <p className="font-medium tracking-wide text-soft-parchment text-sm sm:text-base">{author}</p>
          {relation && (
            <p className="text-xs sm:text-sm uppercase tracking-wider text-soft-parchment/70 mt-1">{relation}</p>
          )}
        </div>
        <div className="h-px w-6 sm:w-8 bg-soft-parchment/40 ml-3 sm:ml-4"></div>
      </div>
    </div>
  );
}
