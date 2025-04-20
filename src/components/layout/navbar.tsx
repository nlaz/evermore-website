'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#why-evermore', label: 'Why Evermore' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-soft-ivory border-b border-moss-olive/10 sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" aria-label="Evermore Home">
          <Image 
            src="/images/wordmark-green.png" 
            alt="Evermore" 
            width={150} 
            height={40} 
            priority
            className="h-auto"              
          />
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="hover:text-moss-olive transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-ink-black focus:outline-none focus:ring-2 focus:ring-moss-olive"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <span className="text-2xl" aria-hidden="true">&times;</span>
          ) : (
            <span className="text-2xl" aria-hidden="true">≡</span>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden bg-soft-ivory border-t border-moss-olive/10 py-4 ${mobileMenuOpen ? '' : 'hidden'}`}
        aria-labelledby="mobile-menu-button"
      >
        <nav className="container-custom">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="hover:text-moss-olive transition-colors focus:outline-none focus:ring-2 focus:ring-moss-olive focus:ring-offset-1 rounded px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}
