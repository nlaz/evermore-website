import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testing Tools - Evermore',
  description: 'Internal testing tools for Evermore website development',
  robots: {
    index: false,
    follow: false
  }
};

export default function TestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="testing-environment">
      {children}
    </div>
  );
}