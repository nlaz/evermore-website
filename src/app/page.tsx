import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Button from '@/components/ui/button';
import TestimonialCard from '@/components/ui/testimonial-card';
import FAQAccordion from '@/components/ui/faq-accordion';

export default function Home() {
  // Sample FAQ items
  const faqItems = [
    {
      question: 'How transparent is your pricing?',
      answer: 'We provide clear, itemized quotes—no hidden fees, no upsells.'
    },
    {
      question: 'Can we hold the service at our own venue?',
      answer: 'Absolutely. We\'re vendor‑neutral and will help you secure the perfect location.'
    },
    {
      question: 'What support do you offer after the funeral?',
      answer: 'We stay with you—helping with paperwork, meal trains, and emotional resources.'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-charred-plum">
      <Navbar />

      {/* Hero section - Aligned with Brand Style Guide */}
      <section className="w-full h-screen flex items-center bg-charred-plum relative overflow-hidden p-8 md:p-12">
        <div className="absolute inset-6 md:inset-8 z-0 rounded-2xl border border-pale-stone/50">
          <div className="absolute inset-px rounded-2xl bg-charred-plum overflow-hidden">
            {/* Subtle texture overlay for tactile feel */}
            <div className="absolute inset-0 bg-[url('/images/subtle-texture.png')] opacity-5 z-10 pointer-events-none"></div>
            <div className="h-full w-full bg-gradient-to-br from-charred-plum via-charred-plum to-charred-plum/80"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            {/* Header styling aligned with mockup */}
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
                className="px-10 py-4 text-base font-light tracking-wide bg-soft-parchment text-charred-plum rounded hover:bg-pale-stone transition-all duration-300"
              >
                Begin your journey
              </Link>
              <Link
                href="/resources/family-guide"
                className="px-10 py-4 text-base font-light tracking-wide border-2 border-pale-stone/60 text-pale-stone rounded hover:bg-pale-stone/10 transition-all duration-300"
              >
                Download family guide
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator with brand-aligned styling */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
          <div className="w-px h-16 bg-gradient-to-b from-pale-stone/30 to-transparent animate-slow-pulse"></div>
        </div>
      </section>
      
      {/* Why Evermore section - World-Class Design */}
      <section id="why-evermore" className="w-full bg-white py-32 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-texture-pattern opacity-5 pointer-events-none"></div>
        
        {/* Signature design element */}
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-charred-plum/5 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-deep-slate/5 blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="flex flex-col md:flex-row items-center gap-20 mb-32">
            <div className="w-full md:w-1/2 fade-in-up">
              <span className="text-sm uppercase tracking-widest text-deep-slate font-light mb-8 block">Our Approach</span>
              <h2 className="text-4xl md:text-6xl font-heading mb-8 tracking-wide leading-tight text-charred-plum">Why families <br/>choose Evermore</h2>
              <p className="text-xl text-deep-slate/80 mb-10 leading-relaxed font-light">
                We're your partner, not your salesperson. From our first conversation through life's most tender moments, 
                we stand beside you with compassion, clarity, and respect.
              </p>
              <div className="h-px w-40 bg-gradient-to-r from-deep-slate to-deep-slate/0"></div>
            </div>
            
            <div className="w-full md:w-1/2 relative group">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-pale-stone/30 transform -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              {/* Image with subtle hover effect */}
              <div 
                className="aspect-[4/5] bg-cover bg-center relative overflow-hidden transform group-hover:scale-[1.02] transition-all duration-700 ease-in-out"
                style={{ backgroundImage: 'url("/images/why-bg.jpg")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charred-plum/30 to-transparent opacity-70"></div>
              </div>
            </div>
          </div>
          
          {/* Core values section with refined typography and layout */}
          <div className="grid md:grid-cols-2 gap-10 mb-32">
            <div className="relative slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-charred-plum/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-charred-plum">Empathy‑First</h3>
                <p className="text-lg text-deep-slate/70 font-light leading-relaxed">
                  We listen deeply, offering calm guidance at every step of the journey. Your emotions and needs guide our approach.
                </p>
              </div>
            </div>
            
            <div className="relative slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-charred-plum/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-charred-plum">Vendor‑Neutral</h3>
                <p className="text-lg text-deep-slate/70 font-light leading-relaxed">
                  Your choices matter deeply. We recommend only what aligns with your values, priorities, and budget.
                </p>
              </div>
            </div>
            
            <div className="relative slide-in-left" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-charred-plum/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-charred-plum">Culturally Fluent</h3>
                <p className="text-lg text-deep-slate/70 font-light leading-relaxed">
                  Whether it's a traditional janazah, a Jewish tahara, or a hybrid celebration-of-life, we honor your traditions with respect and understanding.
                </p>
              </div>
            </div>
            
            <div className="relative slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-charred-plum/30 to-transparent"></div>
              <div className="pl-10 py-2">
                <h3 className="text-2xl font-heading mb-4 text-charred-plum">Post‑Funeral Care</h3>
                <p className="text-lg text-deep-slate/70 font-light leading-relaxed">
                  When the service ends, our support continues—from paperwork assistance to meal trains and bereavement resources.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonial with refined styling */}
          <div className="relative px-16 py-20 max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pale-stone/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pale-stone/40 to-transparent"></div>
            
            {/* Quote marks */}
            <div className="text-6xl font-heading text-charred-plum/30 absolute -top-8 left-8">"</div>
            <div className="text-6xl font-heading text-charred-plum/30 absolute -bottom-14 right-8 transform rotate-180">"</div>
            
            <TestimonialCard
              quote="Evermore allowed us to focus on one another during such a difficult time. They handled everything with grace, dignity, and a profound sense of compassion that made us feel truly supported."
              author="Maria R."
              relation="Daughter"
              className="max-w-3xl mx-auto text-center"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works section - Squarespace-style */}
      <section id="how-it-works" className="w-full bg-deep-slate text-soft-parchment py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">How It Works</h2>
            <p className="text-xl opacity-90 leading-relaxed">Our process is designed to give you space to grieve while we handle the details with dignity and care.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-20">
            <div className="bg-white/10 p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-6xl font-heading opacity-50 mr-4">1</div>
                <h3 className="text-2xl font-heading">Consult & Customize</h3>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">We begin by listening—understanding your wishes, values, and traditions to create a meaningful service.</p>
            </div>
            <div className="bg-white/10 p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-6xl font-heading opacity-50 mr-4">2</div>
                <h3 className="text-2xl font-heading">Plan & Coordinate</h3>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">We manage logistics, vendors, and all day‑of details so you can focus on what matters most.</p>
            </div>
            <div className="bg-white/10 p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-6xl font-heading opacity-50 mr-4">3</div>
                <h3 className="text-2xl font-heading">Support & Heal</h3>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">We guide paperwork, meal trains, and emotional care—long after the service has concluded.</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/10 p-12 max-w-3xl border-t border-white/20">
              <div className="text-center mb-8">
                <p className="text-xl italic">"The journey of grief isn't a straight line. We walk beside you, at your pace, for as long as you need us."</p>
              </div>
              <div className="flex justify-center">
                <Button href="/consultation" variant="outline" size="lg" className="px-8 py-4 border-soft-parchment text-soft-parchment hover:bg-white/10">Schedule a Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services section - Squarespace-style */}
      <section id="services" className="w-full bg-soft-parchment py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading mb-6 text-center text-charred-plum">Services & Packages</h2>
            <p className="text-xl text-deep-slate/80 text-center leading-relaxed">
              Choose the support that fits your family. All packages are transparent, vendor‑neutral, and customizable.
            </p>
            <div className="h-px w-40 bg-charred-plum mx-auto mt-10"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 max-w-5xl mx-auto mb-24">
            <div className="p-12 bg-white border border-charred-plum/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-heading mb-2 text-charred-plum">Consulting Only</h3>
              <div className="mb-6 border-b border-charred-plum/20 pb-4">
                <span className="text-3xl font-bold text-charred-plum">$1,500</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-deep-slate/80">
                  <svg className="h-5 w-5 text-charred-plum mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert guidance and consultation</span>
                </li>
                <li className="flex items-start text-deep-slate/80">
                  <svg className="h-5 w-5 text-charred-plum mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Planning templates and documents</span>
                </li>
                <li className="flex items-start text-deep-slate/80">
                  <svg className="h-5 w-5 text-charred-plum mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Curated vendor recommendations</span>
                </li>
              </ul>
              <Button href="/consultation" variant="outline" className="w-full justify-center">Learn More</Button>
            </div>
            
            <div className="p-12 bg-charred-plum text-soft-parchment border-y-2 border-soft-parchment relative hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="px-4 py-1 bg-deep-slate text-soft-parchment text-sm uppercase tracking-wide font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-heading mb-2">Day‑of Coordination</h3>
              <div className="mb-6 border-b border-soft-parchment/20 pb-4">
                <span className="text-3xl font-bold">$3,500</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-soft-parchment/90">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete event management</span>
                </li>
                <li className="flex items-start text-soft-parchment/90">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>On‑site professional support</span>
                </li>
                <li className="flex items-start text-soft-parchment/90">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vendor coordination and oversight</span>
                </li>
                <li className="flex items-start text-soft-parchment/90">
                  <svg className="h-5 w-5 text-soft-parchment mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Family and guest management</span>
                </li>
              </ul>
              <Button href="/consultation" variant="primary" className="bg-soft-parchment text-charred-plum hover:bg-soft-parchment/90 w-full justify-center">Select This Package</Button>
            </div>
            
            <div className="p-12 bg-white border border-charred-plum/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-heading mb-2 text-charred-plum">Full‑Service Support</h3>
              <div className="mb-6 border-b border-charred-plum/20 pb-4">
                <span className="text-3xl font-bold text-charred-plum">$5,500</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-deep-slate/80">
                  <svg className="h-5 w-5 text-charred-plum mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive planning services</span>
                </li>
                <li className="flex items-start text-deep-slate/80">
                  <svg className="h-5 w-5 text-charred-plum mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete event execution</span>
                </li>
                <li className="flex items-start text-deep-slate/80">
                  <svg className="h-5 w-5 text-charred-plum mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extended post‑funeral care</span>
                </li>
                <li className="flex items-start text-deep-slate/80">
                  <svg className="h-5 w-5 text-charred-plum mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete administrative support</span>
                </li>
              </ul>
              <Button href="/consultation" variant="outline" className="w-full justify-center">Learn More</Button>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-deep-slate/80 mb-10">
              <span className="font-medium text-charred-plum">Custom Add‑Ons Available:</span> obituary writing • digital tributes • death certificate processing • meal‑train coordination
            </p>
            <Button href="/consultation" variant="primary" size="lg" className="px-10">Contact Us for a Custom Quote</Button>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section id="about" className="w-full bg-soft-parchment py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-heading mb-10 text-center text-charred-plum">About Us</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-10 text-center">
              Evermore was founded on the belief that funerals should honor life and support the living.<br />
              Our mission is to transform the funeral experience with dignity, cultural respect, and emotional care.
            </p>
            
            <h3 className="text-2xl font-heading mb-6 text-center">Our Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-4">
                <p className="font-medium">Empathy First</p>
              </div>
              <div className="text-center p-4">
                <p className="font-medium">Clarity & Transparency</p>
              </div>
              <div className="text-center p-4">
                <p className="font-medium">Presence Over Pressure</p>
              </div>
              <div className="text-center p-4 md:col-span-2">
                <p className="font-medium">Dignity in Detail</p>
              </div>
              <div className="text-center p-4">
                <p className="font-medium">People First</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-heading mb-2">Meet Our Founder</h3>
              <p className="font-medium mb-2">Zara [Last Name], Funeral Coordination Specialist</p>
              <p className="italic">"With compassion at our core, we guide you through logistics so you can focus on healing."</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources section with FAQs */}
      <section id="resources" className="w-full bg-charred-plum text-soft-parchment py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-heading mb-10 text-center">Resources & FAQs</h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-heading mb-6 text-center">Featured Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-deep-slate/30 p-6 rounded-lg">
                <p className="italic">What to Expect at a Modern Funeral</p>
              </div>
              <div className="bg-deep-slate/30 p-6 rounded-lg">
                <p className="italic">How to Incorporate Digital Tributes</p>
              </div>
              <div className="bg-deep-slate/30 p-6 rounded-lg">
                <p className="italic">A Guide to Pre‑Planning Your Goodbye</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading mb-6 text-center">Top Questions</h3>
            <FAQAccordion items={faqItems} />
            
            <div className="text-center mt-12">
              <Button href="/resources" variant="primary">View All Resources</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="contact" className="w-full bg-soft-parchment py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-heading mb-10 text-center text-charred-plum">Contact & Location</h2>
          <p className="text-xl max-w-4xl mx-auto text-center mb-12 text-deep-slate/80">
            Have questions or ready to begin? Reach out today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-heading mb-6 text-charred-plum">Schedule a Consultation</h3>
              <ul className="space-y-4 text-deep-slate/80">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-charred-plum">Phone:</span> (212) 555‑1234
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-charred-plum">Email:</span> hello@evermorefuneral.com
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-charred-plum">Hours:</span> Mon–Fri, 9 AM–6 PM ET
                </li>
                <li className="flex items-start mt-6">
                  <span className="font-medium mr-2 text-charred-plum">Office:</span> Serving the NYC metro area and beyond
                </li>
              </ul>
              
              <div className="mt-8">
                <Button href="/consultation" variant="primary">Book a Consultation Online</Button>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-deep-slate">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-charred-plum/30 rounded-lg bg-soft-parchment focus:border-charred-plum focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-deep-slate">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-charred-plum/30 rounded-lg bg-soft-parchment focus:border-charred-plum focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 text-deep-slate">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border border-charred-plum/30 rounded-lg bg-soft-parchment focus:border-charred-plum focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-deep-slate">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 border border-charred-plum/30 rounded-lg bg-soft-parchment focus:border-charred-plum focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <Button variant="primary" type="submit">Send Message</Button>
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