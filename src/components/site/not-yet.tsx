/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import { asset } from '@/components/site/asset';

/** Stand-in for pages linked from the design but not yet in the 10/31 handoff. */
export default function NotYet({ title }: { title: string }) {
  return (
    <div className="not-yet">
      <img className="ornament flip" src={asset('frame-top-plum.svg')} alt="" />
      <h1>{title}</h1>
      <p className="body-copy">
        It isn’t in the 10/31 design handoff yet. Talk to us in the meantime and we’ll walk you through it.
      </p>
      <Link className="btn" href="/contact">
        Talk To Us
      </Link>
      <img className="ornament" src={asset('frame-top-plum.svg')} alt="" />
    </div>
  );
}
