import type { Metadata } from 'next';

import NotYet from '@/components/site/not-yet';

export const metadata: Metadata = { title: 'Terms & Conditions', robots: { index: false, follow: true } };

export default function Page() {
  return <NotYet title="Our terms and conditions are on their way." />;
}
