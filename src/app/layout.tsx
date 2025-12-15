import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Evermore',
    template: '%s | Evermore',
  },
  description: 'Human-first support for modern, meaningful farewells.',
  keywords: [
    'funeral planning',
    'funeral coordination',
    'end-of-life planning',
    'bereavement support',
    'memorial services',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Evermore',
    description: 'Human-first support for modern, meaningful farewells.',
    siteName: 'Evermore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evermore',
    description: 'Human-first support for modern, meaningful farewells.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}