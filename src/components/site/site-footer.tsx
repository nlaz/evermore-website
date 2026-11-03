'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';

import { asset } from '@/components/site/asset';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SiteFooter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setMessage('Enter a full email address, like name@example.com.');
      return;
    }
    // TODO: connect to the newsletter provider.
    setMessage('Thank you. You’re on the list.');
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <nav className="foot-legal foot-small" aria-label="Company and legal">
          <Link className="trim" href="/about">About</Link>
          <Link className="trim" href="/privacy-policy">Privacy Policy</Link>
          <Link className="trim" href="/cookie-policy">Cookie Policy</Link>
          <Link className="trim" href="/terms">Terms &amp; Conditions</Link>
        </nav>
        <div className="foot-side">
          <div className="foot-social foot-small">
            <Link className="trim" href="/instagram">Instagram</Link>
            <Link className="trim" href="/contact">Contact</Link>
          </div>
          <div>
            <form className="news" noValidate onSubmit={onSubmit}>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address for updates"
                aria-describedby="news-msg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Enter</button>
            </form>
            <p className="news-msg" id="news-msg" aria-live="polite" hidden={!message}>
              {message}
            </p>
            <p className="copyright foot-small trim">© Rituals, 2026.</p>
          </div>
        </div>
      </div>
      <img className="foot-wordmark wm-plum" src={asset('wordmark-plum.svg')} alt="Rituals" />
      <img className="foot-wordmark wm-cream" src={asset('wordmark-cream.svg')} alt="Rituals" />
    </footer>
  );
}
