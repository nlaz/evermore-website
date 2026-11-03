/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { asset } from '@/components/site/asset';

export const metadata: Metadata = {
  title: 'Planning Ahead',
  description: 'Organize your wishes, documents and digital life into an Everafter Vault for the people you love.',
};

export default function PlanningAheadPage() {
  return (
    <div className="plum">
      <h1 className="svc-title">
        I.
        <br />
        <span>Planning Ahead</span>
      </h1>
      <div className="svc-hero">
        <img className="photo" src={asset('service-hero.jpg')} alt="" />
        <img className="glyph" src={asset('angel-gold.svg')} alt="" />
      </div>
      <div className="svc-body">
        <div className="svc-intro">
          <img className="m-only" src={asset('angel-cream.svg')} alt="" width={269} height={144} />
          <h2 className="trim">
            You don&apos;t have to plan everything.
            <br className="d-only" /> You just have to know where to begin.
          </h2>
          <p className="body-copy">
            Talking about death can be hard. Planning for it can be even more challenging. It does not have to be. We
            believe a little more understanding and organization helps make it easier for all parties.
          </p>
        </div>

        <section className="svc-section">
          <img className="glyph" src={asset('moon-cream.svg')} alt="" />
          <div className="text">
            <h2 className="trim">No one wants to think about their absence.</h2>
            <p className="body-copy">
              No one wants to think about their absence.
              <br />
              <br />
              That’s a very real and human response. Unfortunately, this introduces a unique challenge to the people we
              love to pick up what we left behind.
              <br />
              <br />
              Do you know what would happen if someone you love died? You can do things today to make it easier later.
              You don’t have to plan everything. You just need to know where to begin and to make progress.
            </p>
          </div>
        </section>

        <section className="svc-section">
          <img className="glyph d-only" src={asset('angel-cream.svg')} alt="" />
          <img className="glyph m-only" src={asset('flowers-cream.svg')} alt="" />
          <div className="text">
            <h2 className="trim">How we work together</h2>
            <p className="body-copy">
              Evermore was created from a simple belief: no one should have to navigate a funeral alone. During grief,
              families are often forced into difficult decisions, overwhelming logistics, and a system that can feel
              opaque, transactional, and emotionally out of sync with what they need most—space, clarity, and real
              human presence. We started Evermore because we know what it feels like to be in that moment.
              <br />
              <br />
              We’ve experienced the confusion, the pressure, the rush, and the deep desire to honor someone with care.
              We built the company we wished existed: a steady, compassionate partner who shows up, handles the
              details, and helps families focus on being with one another.
            </p>
          </div>
        </section>

        <section className="svc-section">
          <img className="glyph d-only" src={asset('flowers-cream.svg')} alt="" />
          <img className="glyph m-only" src={asset('angel-cream.svg')} alt="" />
          <div className="text">
            <h2 className="trim" style={{ lineHeight: 1.1 }}>
              The Everafter Vault
            </h2>
            <div className="vault-text body-copy">
              <p>Planning ahead is one of the most meaningful gifts you can leave your loved ones.</p>
              <p>We meet weekly and guide you through a simple, supportive process. Together we:</p>
              <ul>
                <li>Clarify your funeral or memorial wishes</li>
                <li>Organize important documents, digital information, and records</li>
                <li>Catalog accounts, passwords, and digital presence</li>
                <li>Gather personal items, letters, and meaningful materials</li>
                <li>Document instructions and final wishes for loved ones</li>
              </ul>
              <p>
                By the end of our time together, everything is thoughtfully organized into an Everafter Vault — a
                clear, accessible collection of the information and materials your loved ones will need when the time
                comes.
              </p>
            </div>
          </div>
        </section>

        <div className="svc-cta">
          <h2 className="trim">
            We can’t make losing someone easier,
            <br className="d-only" /> but we can make what comes next easier to navigate.
          </h2>
          <Link className="btn" href="/contact?reason=vault">
            Talk To Us
          </Link>
        </div>

        <div className="other">
          <p className="other-head link">Explore our other services</p>
          <div className="other-row">
            <div className="other-card">
              <h3 className="trim">Navigating a Loss</h3>
              <p className="body-copy">
                Organizing documents, coordinating legal paperwork, capturing your wishes, and managing your digital
                presence.
                <br />
                <br />
                When the day comes, your loved ones know exactly where to find it all. No lost passwords, no guessing.
              </p>
              <Link className="link" href="/navigating-loss">
                Explore more
              </Link>
            </div>
            <div className="other-card">
              <h3 className="trim">After the Service</h3>
              <p className="body-copy">
                Whether planned or sudden, we handle the details from service planning to being on-site on the day, so
                you don’t have to ask twice.
              </p>
              <Link className="link" href="/after-the-service">
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
