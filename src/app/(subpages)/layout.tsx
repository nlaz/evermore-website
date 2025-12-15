import React from 'react';

import SubpagesShell from '@/components/layout/subpages-shell';

export default function SubpagesLayout({ children }: { children: React.ReactNode }) {
  return <SubpagesShell>{children}</SubpagesShell>;
}
