import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import TestimonialCard from '@/components/ui/testimonial-card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-charred-plum">
      <Navbar />

      {/* Hero section */}
      <section className="w-full h-screen flex items-center bg-charred-plum relative overflow-hidden p-8 md:p-12">
        <div className="absolute inset-y-8 md:inset-y-12 lg:inset-y-16 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] z-0 rounded-2xl border border-pale-stone/50">
          <div className="absolute inset-px rounded-2xl bg-charred-plum overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/subtle-texture.png')] opacity-5 z-10 pointer-events-none"></div>
            <div className="h-full w-full bg-gradient-to-br from-charred-plum via-charred-plum to-charred-plum/80"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 text-pale-stone leading-tight tracking-wide">
              Plan a meaningful<br/>
              farewell
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-pale-stone/90 font-light leading-relaxed">
              Holistic funeral planning that creates space for what matters most—<br className="hidden md:block"/>allowing you to grieve, reflect, and begin healing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/consultation"
                className="px-7 py-2.5 text-base font-light tracking-wide bg-soft-parchment text-charred-plum hover:bg-pale-stone transition-all duration-300"
                style={{ borderRadius: '12px' }}
              >
                Begin your journey
              </Link>
              <Link
                href="#contact"
                className="px-7 py-2.5 text-base font-light tracking-wide border-2 border-pale-stone/60 text-pale-stone hover:bg-pale-stone/10 transition-all duration-300"
                style={{ borderRadius: '12px' }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
          <div className="w-px h-16 bg-gradient-to-b from-pale-stone/30 to-transparent animate-slow-pulse"></div>
        </div>
      </section>
      
      {/* About Us section */}
      <section id="about" className="w-full bg-charred-plum text-soft-parchment py-32">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-heading mb-10 text-center">About Us</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-16 text-center leading-relaxed opacity-90">
              Evermore was founded on the belief that funerals should honor life and support the living.<br />
              Our mission is to transform the funeral experience with dignity, cultural respect, and emotional care.
            </p>
            
            <h3 className="text-2xl font-heading mb-8 text-center">Our Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-white/5 border border-soft-parchment/10 rounded-lg">
                <p className="font-medium text-soft-parchment">Empathy First</p>
              </div>
              <div className="text-center p-6 bg-white/5 border border-soft-parchment/10 rounded-lg">
                <p className="font-medium text-soft-parchment">Clarity & Transparency</p>
              </div>
              <div className="text-center p-6 bg-white/5 border border-soft-parchment/10 rounded-lg">
                <p className="font-medium text-soft-parchment">Presence Over Pressure</p>
              </div>
              <div className="text-center p-6 bg-white/5 border border-soft-parchment/10 rounded-lg md:col-span-2">
                <p className="font-medium text-soft-parchment">Dignity in Detail</p>
              </div>
              <div className="text-center p-6 bg-white/5 border border-soft-parchment/10 rounded-lg">
                <p className="font-medium text-soft-parchment">People First</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-heading mb-8 text-center">Meet Our Founders</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Zara Khan */}
              <div className="bg-white/5 border border-soft-parchment/10 rounded-lg p-10 flex flex-col items-center">
                <div className="w-40 h-40 mb-6 rounded-full overflow-hidden bg-soft-parchment/20 border-2 border-soft-parchment/30">
                  <div className="w-full h-full flex items-center justify-center text-soft-parchment/40">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-heading mb-1 text-soft-parchment">Zara Khan</h4>
                <p className="text-soft-parchment/60 mb-6 text-sm uppercase tracking-wider">CEO & Co-Founder</p>
                <p className="text-soft-parchment/80 text-center leading-relaxed mb-4">
                  With a background in education, leadership, and technology, Zara brings meticulous attention to the details that make each farewell uniquely meaningful. She believes every life deserves a deeply personal tribute.
                </p>
                <p className="text-soft-parchment/60 text-sm italic text-center mt-auto">
                  "Planning should honor who they were, not just check boxes."
                </p>
              </div>
              
              {/* Kara Silverman */}
              <div className="bg-white/5 border border-soft-parchment/10 rounded-lg p-10 flex flex-col items-center">
                <div className="w-40 h-40 mb-6 rounded-full overflow-hidden bg-soft-parchment/20 border-2 border-soft-parchment/30">
                  <div className="w-full h-full flex items-center justify-center text-soft-parchment/40">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-heading mb-1 text-soft-parchment">Kara Silverman</h4>
                <p className="text-soft-parchment/60 mb-6 text-sm uppercase tracking-wider">COO & Co-Founder</p>
                <p className="text-soft-parchment/80 text-center leading-relaxed mb-4">
                  A proven leader in marketing, operations, and team building, Kara is passionate about making end-of-life resources accessible to all. She's dedicated to removing barriers and building systems that support families when they need it most.
                </p>
                <p className="text-soft-parchment/60 text-sm italic text-center mt-auto">
                  "Everyone deserves support during life's hardest moments."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do section */}
      <section id="what-we-do" className="w-full bg-charred-plum py-40 md:py-48 relative overflow-hidden">
        <div className="absolute inset-y-8 md:inset-y-12 lg:inset-y-16 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] max-w-[120rem] z-0 rounded-2xl bg-deep-plum overflow-hidden"></div>
        <div className="container-custom relative z-10 text-soft-parchment">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">What We Do</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              We're your partner, not your salesperson. From our first conversation through life's most tender moments, 
              we stand beside you with compassion, clarity, and respect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="relative">
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-soft-parchment/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-soft-parchment">Empathy‑First</h3>
                <p className="text-lg text-soft-parchment/80 font-light leading-relaxed">
                  We listen deeply, offering calm guidance at every step of the journey. Your emotions and needs guide our approach.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-soft-parchment/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-soft-parchment">Vendor‑Neutral</h3>
                <p className="text-lg text-soft-parchment/80 font-light leading-relaxed">
                  Your choices matter deeply. We recommend only what aligns with your values, priorities, and budget.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-soft-parchment/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-soft-parchment">Culturally Fluent</h3>
                <p className="text-lg text-soft-parchment/80 font-light leading-relaxed">
                  Whether it's a traditional janazah, a Jewish tahara, or a hybrid celebration-of-life, we honor your traditions with respect and understanding.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-soft-parchment/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-soft-parchment">Post‑Funeral Care</h3>
                <p className="text-lg text-soft-parchment/80 font-light leading-relaxed">
                  When the service ends, our support continues—from paperwork assistance to meal trains and bereavement resources.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative px-16 py-20 max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-soft-parchment/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-soft-parchment/20 to-transparent"></div>
            
            <div className="text-6xl font-heading text-soft-parchment/20 absolute -top-6 left-12">"</div>
            <div className="text-6xl font-heading text-soft-parchment/20 absolute -bottom-6 right-12 transform rotate-180">"</div>
            
            <TestimonialCard
              quote="Evermore allowed us to focus on one another during such a difficult time. They handled everything with grace, dignity, and a profound sense of compassion that made us feel truly supported."
              author="Maria R."
              relation="Daughter"
              className="max-w-3xl mx-auto text-center"
            />
          </div>
        </div>
      </section>
      
      {/* Offerings section */}
      <section id="offerings" className="w-full bg-charred-plum text-soft-parchment py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">Our Offerings</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Choose the support that fits your family. All services are transparent, vendor‑neutral, and customizable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="p-10 bg-white/5 border border-soft-parchment/20 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-heading mb-6 text-soft-parchment">Consultation Services</h3>
              <ul className="space-y-4 text-soft-parchment/80">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert guidance and consultation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Planning templates and documents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Curated vendor recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Culturally sensitive planning support</span>
                </li>
              </ul>
            </div>
            
            <div className="p-10 bg-white/10 border-2 border-soft-parchment/40 rounded-lg relative hover:bg-white/15 transition-all duration-300">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="px-4 py-1 bg-soft-parchment text-charred-plum text-sm uppercase tracking-wide font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-heading mb-6 text-soft-parchment">Day‑of Coordination</h3>
              <ul className="space-y-4 text-soft-parchment/80">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete event management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>On‑site professional support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vendor coordination and oversight</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Family and guest management</span>
                </li>
              </ul>
            </div>
            
            <div className="p-10 bg-white/5 border border-soft-parchment/20 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-heading mb-6 text-soft-parchment">Full‑Service Support</h3>
              <ul className="space-y-4 text-soft-parchment/80">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive planning services</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete event execution</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extended post‑funeral care</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete administrative support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center bg-white/5 border border-soft-parchment/20 rounded-lg p-10">
            <h3 className="text-2xl font-heading mb-4">Custom Add‑Ons</h3>
            <p className="text-lg text-soft-parchment/80 mb-6 leading-relaxed">
              Obituary writing • Digital tributes • Death certificate processing • Meal‑train coordination
            </p>
            <Link
              href="/consultation"
              className="inline-block px-5 py-2.5 text-base font-normal tracking-wide bg-golden-ochre text-midnight-moss rounded-full border border-golden-ochre hover:bg-golden-ochre/90 transition-all duration-300"
              style={{ borderRadius: '12px' }}
            >
              Contact Us for Details
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact & Location section */}
      <section id="contact" className="w-full bg-charred-plum py-32 relative overflow-hidden">
        <div className="absolute inset-y-8 md:inset-y-12 lg:inset-y-16 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] max-w-[120rem] z-0 rounded-2xl border border-pale-stone/30">
          <div className="absolute inset-px rounded-2xl bg-charred-plum overflow-hidden"></div>
        </div>
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading mb-10 text-center text-pale-stone">Contact & Location</h2>
          <p className="text-xl max-w-4xl mx-auto text-center mb-12 text-pale-stone/90">
            Have questions or ready to begin? Reach out today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-heading mb-6 text-pale-stone">Get in Touch</h3>
              <ul className="space-y-4 text-pale-stone/80 mb-8">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-pale-stone">Phone:</span> (212) 555‑1234
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-pale-stone">Email:</span> hello@evermorefuneral.com
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-pale-stone">Hours:</span> Mon–Fri, 9 AM–6 PM ET
                </li>
              </ul>

              <h3 className="text-2xl font-heading mb-6 text-pale-stone mt-10">Our Location</h3>
              <ul className="space-y-4 text-pale-stone/80">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-pale-stone">Office:</span> Serving the NYC metro area and beyond
                </li>
                <li className="flex items-start">
                  <span className="text-pale-stone/70 italic">We provide services throughout New York City and surrounding areas, with virtual consultations available nationwide.</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/consultation"
                  className="inline-block px-5 py-2.5 text-base font-normal tracking-wide bg-golden-ochre text-midnight-moss rounded-full border border-golden-ochre hover:bg-golden-ochre/90 transition-all duration-300"
                  style={{ borderRadius: '12px' }}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading mb-6 text-pale-stone">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-pale-stone">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    className="w-full p-3 border border-pale-stone/30 rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-pale-stone">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-pale-stone/30 rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 text-pale-stone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="(212) 555-1234"
                    className="w-full p-3 border border-pale-stone/30 rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-pale-stone">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell us how we can assist you..."
                    className="w-full p-3 border border-pale-stone/30 rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-base font-normal tracking-wide bg-golden-ochre text-midnight-moss rounded-full border border-golden-ochre hover:bg-golden-ochre/90 transition-all duration-300"
                    style={{ borderRadius: '12px' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}