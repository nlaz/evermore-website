'use client';

import React, { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-soft-ivory/95 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" aria-label="Evermore Home">
          <Image 
            src={scrolled ? "/images/wordmark-green.png" : "/images/wordmark-white.png"} 
            alt="Evermore" 
            width={150} 
            height={40} 
            priority
            className="h-auto transition-opacity duration-300"              
          />
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                scrolled 
                  ? 'text-ink-black hover:text-moss-olive' 
                  : 'text-soft-ivory hover:text-soft-ivory/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            scrolled ? 'text-ink-black' : 'text-soft-ivory'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden fixed inset-0 bg-forest-charcoal/95 backdrop-blur-md z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-labelledby="mobile-menu-button"
      >
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-soft-ivory text-2xl font-mortuary hover:text-moss-olive transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
