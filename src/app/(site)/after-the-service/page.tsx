import type { Metadata } from 'next';

import NotYet from '@/components/site/not-yet';

export const metadata: Metadata = { title: 'After the Service', robots: { index: false, follow: true } };

export default function Page() {
  return <NotYet title="After the Service is on its way." />;
}
