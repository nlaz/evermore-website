import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/utils/asset-path';

const footerLinks = [
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#about', label: 'About Us' },
  { href: '#offerings', label: 'Offerings' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-charred-plum text-pale-stone py-10 sm:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 sm:mb-8 md:mb-0">
            <div className="mb-3 sm:mb-4">
              <Image
                src={getAssetPath('/logos/Evermore_Logo_Horizontal_GoldenOchre.png')}
                alt="Evermore"
                width={220}
                height={60}
                priority
                className="h-auto w-40 sm:w-48 md:w-52"
                style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(378%) hue-rotate(350deg) brightness(97%) contrast(86%)' }}
              />
            </div>
            <p className="text-xs sm:text-sm opacity-70">Funeral Coordination, Planning & Support</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-pale-stone/10 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm opacity-70 text-center md:text-left">&copy; 2025 Evermore Funeral Coordination &bull; Privacy &bull; Terms</p>
          <div className="flex space-x-4 text-xs sm:text-sm">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="opacity-70 hover:opacity-100 hover:text-white transition-all"
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
