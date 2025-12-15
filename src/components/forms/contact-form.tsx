'use client';

import React, { useMemo, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  telephone: string;
  support: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SubmitStatus = 'idle' | 'submitting' | 'success';

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  telephone: '',
  support: '',
};

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!state.name.trim()) errors.name = 'Please enter your name.';
  if (!state.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!state.support.trim()) errors.support = 'Please tell us what you need support with.';

  return errors;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const isSubmitting = status === 'submitting';

  const canSubmit = useMemo(() => {
    return !isSubmitting;
  }, [isSubmitting]);

  function onChange<K extends keyof FormState>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setState((prev) => ({ ...prev, [key]: value }));

      if (status === 'success') setStatus('idle');

      // Clear field error as user edits.
      setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    const nextErrors = validate(state);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    setErrors({});
    setStatus('submitting');

    // UI-only: simulate a request.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setState(INITIAL_STATE);
    setStatus('success');
  }

  const inputClassName =
    'w-full h-10 rounded-md bg-transparent border border-deep-plum/30 px-3 text-sm text-deep-plum placeholder:text-deep-plum/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

  const textareaClassName =
    'w-full rounded-md bg-transparent border border-deep-plum/30 px-3 py-2 text-sm text-deep-plum placeholder:text-deep-plum/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-start gap-x-10 gap-y-5">
        <label htmlFor="contact-name" className="text-sm text-deep-plum/85 leading-10">
          Name
        </label>
        <div className="space-y-2">
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={state.name}
            onChange={onChange('name')}
            className={inputClassName}
          />
          {errors.name ? <p className="text-xs text-deep-plum/70">{errors.name}</p> : null}
        </div>

        <label htmlFor="contact-email" className="text-sm text-deep-plum/85 leading-10">
          Email
        </label>
        <div className="space-y-2">
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={state.email}
            onChange={onChange('email')}
            className={inputClassName}
          />
          {errors.email ? <p className="text-xs text-deep-plum/70">{errors.email}</p> : null}
        </div>

        <label htmlFor="contact-telephone" className="text-sm text-deep-plum/85 leading-10">
          Telephone (Optional)
        </label>
        <div>
          <input
            id="contact-telephone"
            name="telephone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={state.telephone}
            onChange={onChange('telephone')}
            className={inputClassName}
          />
        </div>

        <label htmlFor="contact-support" className="text-sm text-deep-plum/85 pt-2">
          What would you like our support in?
        </label>
        <div className="space-y-2">
          <textarea
            id="contact-support"
            name="support"
            required
            rows={4}
            value={state.support}
            onChange={onChange('support')}
            className={textareaClassName}
          />
          {errors.support ? <p className="text-xs text-deep-plum/70">{errors.support}</p> : null}
        </div>

        <div className="hidden sm:block" />
        <div className="pt-3">
          <button
            type="submit"
            disabled={!canSubmit}
            className={[
              'inline-flex items-center justify-center rounded-md bg-deep-plum px-7 py-2.5 text-sm font-light text-soft-parchment',
              'transition-colors hover:bg-deep-plum/90',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              'disabled:opacity-60 disabled:cursor-not-allowed',
            ].join(' ')}
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>

          <p aria-live="polite" className="mt-3 text-sm text-deep-plum/70">
            {status === 'success' ? 'Thank you—someone will reach out soon.' : null}
          </p>
        </div>
      </div>
    </form>
  );
}
