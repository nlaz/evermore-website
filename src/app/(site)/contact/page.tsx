import type { Metadata } from 'next';

import ContactView from '@/components/site/contact-view';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us what brings you here and someone from Evermore will reply within one business day.',
};

export default function ContactPage() {
  return <ContactView />;
}
