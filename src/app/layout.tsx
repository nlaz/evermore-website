import './globals.css';
import { Jost, Cinzel } from 'next/font/google';
import type { Metadata } from 'next';
import FeedbackWidget from '@/components/feedback/feedback-widget';

// Load Jost font for body text
const inter = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Load Cinzel as elegant serif font for headings
const mortuary = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mortuary',
});

export const metadata: Metadata = {
  title: 'Evermore | Funeral Coordination, Planning & Support',
  description: 'Holistic funeral planning that frees you to grieve, reflect, and heal.',
  keywords: ['funeral planning', 'funeral coordination', 'funeral support', 'funeral services'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evermore-website.vercel.app',
    title: 'Evermore | Funeral Coordination, Planning & Support',
    description: 'Holistic funeral planning that frees you to grieve, reflect, and heal.',
    siteName: 'Evermore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evermore | Funeral Coordination, Planning & Support',
    description: 'Holistic funeral planning that frees you to grieve, reflect, and heal.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mortuary.variable}`}>
      <body className="antialiased min-h-screen">
        {children}
        <FeedbackWidget />
      </body>
    </html>
  );
}