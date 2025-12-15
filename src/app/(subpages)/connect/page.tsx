import type { Metadata } from 'next';

import ContactForm from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Connect With Us | Evermore',
  description: 'Reach out for questions, guidance, or to begin working together.',
};

export default function ConnectPage() {
  return (
    <section className="pb-6">
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading leading-tight text-deep-plum">Connect with Us</h1>

        <p className="mt-8 mx-auto max-w-[620px] text-sm sm:text-base font-light leading-relaxed text-deep-plum/70">
          Evermore was created from a simple belief: no one should have to navigate a funeral alone. During grief, families are
          often forced into difficult decisions, overwhelming logistics, and a system that can feel opaque, transactional, and
          emotionally out of sync with what they need most—space, clarity, and real human presence.
        </p>
      </header>

      <div className="mt-14 sm:mt-16">
        <ContactForm />
      </div>
    </section>
  );
}
