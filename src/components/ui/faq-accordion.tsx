'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `faq-${question.replace(/\s+/g, '-').toLowerCase()}`;
  const answerId = `${id}-answer`;

  return (
    <div className="border-b border-pale-stone/20 py-3 sm:py-4">
      <h3>
        <button
          className="flex w-full justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-pale-stone rounded-sm px-1 py-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId}
          id={id}
        >
          <span className="text-base sm:text-lg font-medium pr-4">{question}</span>
          <span className="text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </h3>
      
      <div 
        id={answerId}
        className={`mt-2 sm:mt-3 text-sm sm:text-base text-soft-parchment/80 pl-1 pr-8 ${isOpen ? '' : 'hidden'}`}
        aria-labelledby={id}
        role="region"
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

interface FAQAccordionProps {
  items: FAQItemProps[];
  className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
