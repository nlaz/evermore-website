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
    <div className="border-b border-moss-olive/20 py-4">
      <h3>
        <button
          className="flex w-full justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-moss-olive rounded-sm px-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId}
          id={id}
        >
          <span className="text-lg font-medium">{question}</span>
          <span className="text-2xl" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </h3>
      
      <div 
        id={answerId}
        className={`mt-2 text-forest-charcoal/80 ${isOpen ? '' : 'hidden'}`}
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
