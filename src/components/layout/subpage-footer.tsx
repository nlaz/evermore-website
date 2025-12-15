'use client';

import React from 'react';
import Image from 'next/image';

import { getAssetPath } from '@/utils/asset-path';

export default function SubpageFooter() {
  return (
    <footer className="mt-24 bg-soft-parchment text-deep-plum">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-6">
            <Image
              src={getAssetPath('/logos/evermore-wordmark.svg')}
              alt="Evermore"
              width={320}
              height={80}
              className="h-auto w-[220px]"
            />

            <p className="text-sm leading-relaxed text-deep-plum/80 max-w-sm">
              Evermore is here to support you, your family, and your community—with clarity, presence, and compassion.
            </p>

            <div className="space-y-3">
              <p className="text-xs tracking-[0.14em] uppercase text-deep-plum/70">Sign up for our newsletter to stay notified</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="w-full sm:max-w-xs rounded-md border border-deep-plum/25 bg-transparent px-3 py-2 text-sm placeholder:text-deep-plum/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/40"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-deep-plum/25 px-4 py-2 text-xs tracking-[0.14em] uppercase hover:bg-deep-plum/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/40"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.14em] uppercase text-deep-plum/70">Legal</p>
              <ul className="space-y-2 text-sm text-deep-plum/80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs tracking-[0.14em] uppercase text-deep-plum/70">Social</p>
              <ul className="space-y-2 text-sm text-deep-plum/80">
                <li>@EVERMOREFAREWELL</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs tracking-[0.14em] uppercase text-deep-plum/70">Contact</p>
              <ul className="space-y-2 text-sm text-deep-plum/80">
                <li>HELLO@EVERMOREFAREWELL.COM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-deep-plum/15">
          <p className="text-xs tracking-[0.12em] uppercase text-deep-plum/60">© EVERMORE, 2025</p>
        </div>
      </div>
    </footer>
  );
}
