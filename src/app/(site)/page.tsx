/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import { asset } from '@/components/site/asset';

type Service = {
  title: string;
  body: React.ReactNode;
  href: string;
  photo: string;
  glyph: string;
  glyphStyle: React.CSSProperties;
  mobileGlyph: { src: string; width: number; height: number };
  imageFirst?: boolean;
};

const SERVICES: Service[] = [
  {
    title: 'Leave them clarity.',
    body: (
      <>
        Organizing documents, coordinating legal paperwork, capturing your wishes, and managing your digital presence.
        <br />
        <br />
        When the day comes, your loved ones know exactly where to find it all. No lost passwords, no guessing.
      </>
    ),
    href: '/planning-ahead',
    photo: 'waves-cream.jpg',
    glyph: 'moon-gold.svg',
    glyphStyle: { left: '4.6%', top: '74.5%', width: '65.7%' },
    mobileGlyph: { src: 'moon-plum.svg', width: 172, height: 86 },
  },
  {
    title: 'We’ll take it from here.',
    body: 'Whether planned or sudden, we handle the details from service planning to being on-site on the day, so you don’t have to ask twice.',
    href: '/navigating-loss',
    photo: 'rocks-cream.jpg',
    glyph: 'angel-gold.svg',
    glyphStyle: { left: '4.6%', top: '8.74%', width: '61.3%' },
    mobileGlyph: { src: 'angel-plum.svg', width: 160, height: 86 },
    imageFirst: true,
  },
  {
    title: 'Care doesn’t end at the funeral.',
    body: 'When the to-do list doesn’t stop, we step in. Returning equipment, cleaning out a home, canceling accounts, and everything in between.',
    href: '/after-the-service',
    photo: 'leaves-cream.jpg',
    glyph: 'flowers-gold.svg',
    glyphStyle: { left: '60.73%', top: '75.05%', width: '34.29%' },
    mobileGlyph: { src: 'flowers-plum.svg', width: 134, height: 129 },
  },
];

function ServiceRow({ service }: { service: Service }) {
  const text = (
    <div className="svc-text">
      <img className="ornament flip" src={asset('frame-top-plum.svg')} alt="" />
      <div className="svc-copy">
        <h2>{service.title}</h2>
        <p className="body-copy">{service.body}</p>
        <Link className="link" href={service.href}>
          Explore more
        </Link>
      </div>
      <img className="ornament" src={asset('frame-top-plum.svg')} alt="" />
    </div>
  );
  const image = (
    <div className="svc-img">
      <img className="photo" src={asset(service.photo)} alt="" />
      <img className="glyph" src={asset(service.glyph)} alt="" style={service.glyphStyle} />
    </div>
  );
  return (
    <>
      <img
        className="m-only m-glyph"
        src={asset(service.mobileGlyph.src)}
        alt=""
        width={service.mobileGlyph.width}
        height={service.mobileGlyph.height}
      />
      <div className="svc">
        {service.imageFirst ? image : text}
        {service.imageFirst ? text : image}
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <img className="hero-bg" src={asset('hero-leaves.jpg')} alt="" />
        <div className="hero-copy">
          <img className="wordmark" src={asset('wordmark-hero-cream.svg')} alt="Rituals" />
          <h1 className="trim">We carry the logistics. You carry the memory.</h1>
          <p className="trim d-only">
            From funeral planning to after-service care,
            <br />
            we’re beside you at every step.
          </p>
          <p className="trim m-only">
            From funeral planning to
            <br />
            after-service care, we’re beside you at every step.
          </p>
          <img className="logo" src={asset('logo-cream.svg')} alt="" />
        </div>
      </section>
      <section className="paper" aria-label="What we do">
        <img className="paper-bg d-only" src={asset('paper-desktop.jpg')} alt="" />
        <img className="paper-bg m-only" src={asset('paper-mobile.jpg')} alt="" />
        <div className="services">
          <div className="mission-block">
            <img className="flower" src={asset('radial-flower-plum.svg')} alt="" />
            <p className="mission">
              We imagine a world where families can grieve without being overwhelmed by logistics.
            </p>
            <img className="flower" src={asset('radial-flower-plum.svg')} alt="" />
          </div>
          {SERVICES.map((s) => (
            <ServiceRow key={s.href} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
