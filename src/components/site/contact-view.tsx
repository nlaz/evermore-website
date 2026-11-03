'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { asset } from '@/components/site/asset';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REASONS = [
  { value: 'vault', label: 'Everafter Vault: I am looking to get organized and plan ahead.' },
  { value: 'planning', label: 'Everafter Planning: A loved one has passed and I would like to plan a meaningful farewell.' },
  { value: 'support', label: 'Everafter Support: I am looking for moral, physical and/or emotional support.' },
  { value: 'questionnaire', label: 'Questionnaire: I’ve taken the questionnaire and would like to talk through my results.' },
  { value: 'other', label: 'Other' },
] as const;

type Errors = { name?: string; email?: string; reason?: string };
type Status = 'idle' | 'sending' | 'sent';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reasons, setReasons] = useState<string[]>([]);
  const [other, setOther] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const firstReasonRef = useRef<HTMLInputElement>(null);
  const sentRef = useRef<HTMLDivElement>(null);

  // "Talk To Us" on a service page links here with ?reason=<value> to pre-tick it.
  useEffect(() => {
    const reason = new URLSearchParams(window.location.search).get('reason');
    if (reason && REASONS.some((r) => r.value === reason)) setReasons([reason]);
  }, []);

  useEffect(() => {
    if (status === 'sent') sentRef.current?.focus();
  }, [status]);

  const toggle = (value: string) =>
    setReasons((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = 'Add your name so we know who to reply to.';
    if (!EMAIL.test(email.trim()))
      next.email = email.trim()
        ? 'That email address looks incomplete. Check it and try again.'
        : 'Add an email address so we can reply.';
    if (!reasons.length) next.reason = 'Pick at least one reason so the right person replies.';
    setErrors(next);
    if (next.name) return nameRef.current?.focus();
    if (next.email) return emailRef.current?.focus();
    if (next.reason) return firstReasonRef.current?.focus();

    setStatus('sending');
    // TODO: send to the contact endpoint. The handoff has no backend yet.
    window.setTimeout(() => {
      setStatus('sent');
      setName('');
      setEmail('');
      setPhone('');
      setReasons([]);
      setOther('');
    }, 900);
  };

  return (
    <div className="plum">
      <div className="contact">
        <img className="ornament flip" src={asset('frame-top-cream.svg')} alt="" />
        {status === 'sent' ? (
          <div className="sent" ref={sentRef} tabIndex={-1}>
            <h1>Thank you. We’ll be in touch.</h1>
            <p className="body-copy">
              Someone from our team will reply within one business day. If anything is urgent, say so when we call and
              we’ll start there.
            </p>
            <Link className="btn" href="/">
              Back to home
            </Link>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit}>
            <h1>We’re here for you.</h1>
            <div className="fields">
              <div className="field" data-invalid={errors.name ? '' : undefined}>
                <input
                  ref={nameRef}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="name-err"
                  aria-invalid={!!errors.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className="err" id="name-err" hidden={!errors.name}>
                  {errors.name}
                </p>
              </div>
              <div className="field" data-invalid={errors.email ? '' : undefined}>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="email-err"
                  aria-invalid={!!errors.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="err" id="email-err" hidden={!errors.email}>
                  {errors.email}
                </p>
              </div>
              <div className="field">
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone (optional)"
                  aria-label="Phone (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="reasons-block">
              <img className="moon" src={asset('moon-cream.svg')} alt="" />
              <div className="reasons" role="group" aria-labelledby="reasons-h" aria-describedby="reason-err">
                <h2 className="trim" id="reasons-h">
                  What brings you here?
                </h2>
                <div className="opts">
                  {REASONS.map((r, i) => (
                    <label className="opt" key={r.value}>
                      <input
                        ref={i === 0 ? firstReasonRef : undefined}
                        type="checkbox"
                        name="reason"
                        value={r.value}
                        checked={reasons.includes(r.value)}
                        onChange={() => toggle(r.value)}
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                  <div className="field" hidden={!reasons.includes('other')}>
                    <textarea
                      name="other"
                      placeholder="Tell us a little more"
                      aria-label="Tell us a little more"
                      value={other}
                      onChange={(e) => setOther(e.target.value)}
                    />
                  </div>
                  <p className="err" id="reason-err" hidden={!errors.reason}>
                    {errors.reason}
                  </p>
                </div>
              </div>
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
        <img className="ornament" src={asset('frame-top-cream.svg')} alt="" />
      </div>
    </div>
  );
}
