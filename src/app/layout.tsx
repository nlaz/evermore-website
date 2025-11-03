import './globals.css';
import type { Metadata } from 'next';

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
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}