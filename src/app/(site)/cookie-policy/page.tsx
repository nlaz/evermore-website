import type { Metadata } from 'next';

import NotYet from '@/components/site/not-yet';

export const metadata: Metadata = { title: 'Cookie Policy', robots: { index: false, follow: true } };

export default function Page() {
  return <NotYet title="Our cookie policy is on its way." />;
}
