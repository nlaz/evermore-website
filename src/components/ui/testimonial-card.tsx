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
    <div className={`bg-moss-olive/20 p-8 rounded-lg ${className}`}>
      <blockquote className="text-xl italic">
        "{quote}"
      </blockquote>
      <p className="mt-4 text-right">
        — {author}{relation ? `, ${relation}` : ''}
      </p>
    </div>
  );
}
