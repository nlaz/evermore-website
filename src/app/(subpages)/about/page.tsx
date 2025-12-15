import type { Metadata } from 'next';
import Image from 'next/image';

import { getAssetPath } from '@/utils/asset-path';

export const metadata: Metadata = {
  title: 'About',
  description: 'Our story, what we believe, and why Evermore exists.',
};

export default function AboutPage() {
  return (
    <section className="relative">
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Decorative floral (absolute so it doesn't affect layout).
            We reserve a left gutter so it never overlaps the text. */}
        <div aria-hidden="true" className="pointer-events-none hidden lg:block absolute left-0 bottom-0 z-0">
          <Image
            src={getAssetPath('/images/forget-me-not.png')}
            alt=""
            width={280}
            height={1100}
            sizes="(min-width: 1024px) 240px, 0px"
            className="h-auto w-[200px] xl:w-[220px] opacity-70"
            priority
          />
        </div>

        <div className="relative z-10 lg:grid lg:grid-cols-[240px_minmax(0,988px)] lg:gap-16 lg:justify-center">
          {/* spacer column to match comp + keep text clear of floral */}
          <div className="hidden lg:block" aria-hidden="true" />

          <div className="w-full space-y-14">
            <header className="space-y-6 text-left">
              <p className="text-soft-parchment/65 text-left text-sm font-light">
                We’re here to make the hardest moments a little gentler.
              </p>
              <h1 className="text-left text-4xl sm:text-5xl md:text-6xl font-heading leading-tight text-soft-parchment">
                Human-first support for modern, meaningful farewells.
              </h1>
            </header>

            <div className="space-y-12 text-left">
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading text-soft-parchment">Our Story</h2>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  Evermore was created from a simple belief: no one should have to navigate a funeral alone. During grief, families
                  are often forced into difficult decisions, overwhelming logistics, and a system that can feel opaque,
                  transactional, and emotionally out of sync with what they need most—space, clarity, and real human presence.
                </p>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  We started Evermore because we know what it feels like to be in that moment. We’ve experienced the confusion, the
                  pressure, the rush, and the deep desire to honor someone with care. We built the company we wished existed: a
                  steady, compassionate partner who shows up, handles the details, and helps families focus on being with one
                  another.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading text-soft-parchment">What We Believe</h2>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  At Evermore, we reimagine what end-of-life support should be.
                </p>
                <p className="text-soft-parchment/65 font-light leading-relaxed">Our philosophy is simple:</p>

                <div className="space-y-5">
                  <p className="text-soft-parchment/65 font-light leading-relaxed">
                    <span className="text-soft-parchment/80">Presence matters.</span>
                    <br />
                    You deserve someone in your corner who stays through the final details—from the first call to the last dish
                    washed.
                  </p>
                  <p className="text-soft-parchment/65 font-light leading-relaxed">
                    Care should be culturally fluent. Every family, tradition, belief, and identity deserves respect and thoughtful
                    guidance.
                  </p>
                  <p className="text-soft-parchment/65 font-light leading-relaxed">
                    <span className="text-soft-parchment/80">Support should extend beyond the ceremony.</span>
                    <br />
                    Grief doesn’t end at the service, and neither does our care.
                    <br />
                    We help with everything that comes after: belongings, documents, logistics, and next steps.
                  </p>
                  <p className="text-soft-parchment/65 font-light leading-relaxed">
                    <span className="text-soft-parchment/80">Transparency is non-negotiable.</span>
                    <br />
                    No upselling. No pressure. No hidden agendas.
                    <br />
                    Just honest, clear, compassionate guidance.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading text-soft-parchment">Who We Are</h2>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  Evermore was founded by Zara Khan, whose background in education and experiential design shapes our deeply
                  personal approach, and Kara Silverman, whose work in operations and communications has centered around making
                  essential resources accessible to more people.
                </p>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  Together, they’ve built a team of caring, culturally attuned planners and coordinators committed to supporting
                  families with warmth, steadiness, and respect. We are planners, listeners, organizers, and advocates—here to help
                  you create a farewell that truly reflects your loved one’s life and values.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading text-soft-parchment">Why Evermore</h2>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  Families choose Evermore because we offer something rare:
                  <br />
                  full-spectrum support that blends emotional understanding with meticulous planning.
                </p>
                <p className="text-soft-parchment/65 font-light leading-relaxed">We’re not here to sell products or push packages.</p>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  We’re here to guide, to carry weight, and to help you create a meaningful, modern, values-aligned farewell.
                </p>
                <p className="text-soft-parchment/65 font-light leading-relaxed">
                  In life’s hardest moments, you deserve a partner who shows up.
                </p>
                <p className="text-soft-parchment/65 font-light leading-relaxed">That’s what Evermore was built to be.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
