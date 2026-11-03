import type { Metadata } from 'next';

import NotYet from '@/components/site/not-yet';

export const metadata: Metadata = { title: 'Instagram', robots: { index: false, follow: true } };

export default function Page() {
  return <NotYet title="Our Instagram link is on its way." />;
}
