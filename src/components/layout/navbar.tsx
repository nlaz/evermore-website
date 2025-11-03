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
    <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-charred-plum/95 backdrop-blur-sm border-b border-pale-stone/10'
        : 'bg-charred-plum'
    }`}>
      <div className="container-custom flex items-center justify-between py-6">
        <Link href="/" aria-label="Evermore Home" className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pale-stone/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm blur-sm"></div>
          <Image
            src="/logos/Evermore_Logo_Horizontal_GoldenOchre.png"
            alt="Evermore"
            width={220}
            height={60}
            priority
            className="h-auto relative transition-all duration-500"
            style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(378%) hue-rotate(350deg) brightness(97%) contrast(86%)' }}
          />
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider font-light text-pale-stone hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-pale-stone/60 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/consultation"
            className="ml-6 px-6 py-2.5 text-xs tracking-widest uppercase font-light transition-all duration-300 relative overflow-hidden text-pale-stone border border-pale-stone/60 rounded hover:bg-pale-stone hover:text-charred-plum"
          >
            <span className="relative z-10">Begin your journey</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none transition-colors duration-300 text-pale-stone"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu - Refined with animation and texture */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-charred-plum/95 backdrop-blur-md z-40 transition-all duration-500 transform ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        aria-labelledby="mobile-menu-button"
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-texture-pattern opacity-5 pointer-events-none"></div>

        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6">
            <div className="w-44 opacity-70">
              <Image
                src="/logos/Evermore_Logo_Horizontal_GoldenOchre.png"
                alt="Evermore"
                width={220}
                height={60}
                priority
                className="h-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(378%) hue-rotate(350deg) brightness(97%) contrast(86%)' }}
              />
            </div>
            <button
              className="focus:outline-none text-pale-stone/80 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-8 px-12">
              {navLinks.map((link, index) => (
                <li key={link.href} className={`overflow-hidden fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-pale-stone/90 text-2xl font-heading hover:text-white transition-colors duration-300 block border-b border-pale-stone/10 pb-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-10 fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Link
                  href="/consultation"
                  className="inline-block px-8 py-3 border border-pale-stone text-pale-stone text-xs tracking-widest uppercase rounded hover:bg-pale-stone hover:text-charred-plum transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Begin your journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Visual design element */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pale-stone/30 to-transparent"></div>
        </div>
      </div>
    </nav>
  );
}
