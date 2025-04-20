import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About' },
  { href: '#resources', label: 'Resources' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-ink-black text-soft-ivory py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <Image 
                src="/images/wordmark-white.png" 
                alt="Evermore" 
                width={150} 
                height={40} 
                priority
                className="h-auto"              
              />
            </div>
            <p className="text-sm opacity-70">Funeral Coordination, Planning & Support</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {footerLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="hover:text-moss-olive transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-soft-ivory/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">&copy; 2025 Evermore Funeral Coordination &bull; Privacy &bull; Terms</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
