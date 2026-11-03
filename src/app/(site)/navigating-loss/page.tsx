import type { Metadata } from 'next';

import NotYet from '@/components/site/not-yet';

export const metadata: Metadata = { title: 'Navigating Loss', robots: { index: false, follow: true } };

export default function Page() {
  return <NotYet title="Navigating Loss is on its way." />;
}
