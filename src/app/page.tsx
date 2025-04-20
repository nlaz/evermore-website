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
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      
      {/* Hero section */}
      <section className="w-full bg-soft-ivory py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-mortuary mb-6">Honoring legacies with lasting love.</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">Holistic funeral planning that frees you to grieve, reflect, and heal.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/consultation" variant="primary" size="lg">Schedule Your Free Consultation</Button>
            <Button href="/resources/family-guide" variant="outline" size="lg">Download Our Family Support Guide</Button>
          </div>
        </div>
      </section>
      
      {/* Why Evermore section */}
      <section id="why-evermore" className="w-full bg-forest-charcoal text-soft-ivory py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-mortuary mb-10 text-center">Why Evermore</h2>
          <p className="text-xl max-w-4xl mx-auto text-center mb-16">
            We're your partner, not your salesperson. From our first conversation through life's most tender moments, 
            we stand beside you with compassion, clarity, and respect.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-forest-charcoal/50 p-8 rounded-lg">
              <h3 className="text-2xl font-mortuary mb-4">Empathy‑First</h3>
              <p>We listen deeply, offering calm guidance at every step.</p>
            </div>
            <div className="bg-forest-charcoal/50 p-8 rounded-lg">
              <h3 className="text-2xl font-mortuary mb-4">Vendor‑Neutral</h3>
              <p>Your choices matter. We recommend only what aligns with your values.</p>
            </div>
            <div className="bg-forest-charcoal/50 p-8 rounded-lg">
              <h3 className="text-2xl font-mortuary mb-4">Culturally Fluent</h3>
              <p>Whether it's a traditional janazah, a Jewish tahara, or a hybrid celebration-of-life, we honor your rituals.</p>
            </div>
            <div className="bg-forest-charcoal/50 p-8 rounded-lg">
              <h3 className="text-2xl font-mortuary mb-4">Post‑Funeral Care</h3>
              <p>When the service ends, our support continues—from paperwork to meal trains.</p>
            </div>
          </div>
          
          <TestimonialCard
            quote="Evermore allowed us to focus on one another. They handled everything with grace."
            author="Maria R."
            relation="Daughter"
            className="mt-16 max-w-3xl mx-auto"
          />
        </div>
      </section>
      
      {/* How It Works section */}
      <section id="how-it-works" className="w-full bg-soft-ivory py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-mortuary mb-10 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-moss-olive text-soft-ivory w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">1</div>
              <h3 className="text-2xl font-mortuary mb-4">Consult & Customize</h3>
              <p>We begin by listening—understanding your wishes, values, and traditions.</p>
            </div>
            <div className="text-center">
              <div className="bg-moss-olive text-soft-ivory w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">2</div>
              <h3 className="text-2xl font-mortuary mb-4">Plan & Coordinate</h3>
              <p>We manage logistics, vendors, and all day‑of details so you can rest.</p>
            </div>
            <div className="text-center">
              <div className="bg-moss-olive text-soft-ivory w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">3</div>
              <h3 className="text-2xl font-mortuary mb-4">Support & Heal</h3>
              <p>We guide paperwork, meal trains, and emotional care—long after the service is over.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button href="/consultation" variant="primary">Get Started</Button>
          </div>
        </div>
      </section>
      
      {/* Services section */}
      <section id="services" className="w-full bg-forest-charcoal text-soft-ivory py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-mortuary mb-10 text-center">Services & Packages</h2>
          <p className="text-xl max-w-4xl mx-auto text-center mb-16">
            Choose the support that fits your family. All packages are transparent, vendor‑neutral, and customizable.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead className="border-b border-soft-ivory/20">
                <tr>
                  <th scope="col" className="text-left py-4 px-4 font-mortuary">Package</th>
                  <th scope="col" className="text-left py-4 px-4 font-mortuary">What's Included</th>
                  <th scope="col" className="text-right py-4 px-4 font-mortuary">Starting Fee*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-soft-ivory/10">
                  <td className="py-4 px-4 font-medium">Consulting Only</td>
                  <td className="py-4 px-4">Expert guidance, planning templates, vendor lists</td>
                  <td className="py-4 px-4 text-right">$1,500</td>
                </tr>
                <tr className="border-b border-soft-ivory/10">
                  <td className="py-4 px-4 font-medium">Day‑of Coordination</td>
                  <td className="py-4 px-4">Full event management, on‑site support</td>
                  <td className="py-4 px-4 text-right">$3,500</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Full‑Service + Post‑Funeral Support</td>
                  <td className="py-4 px-4">End‑to‑end planning, execution, and follow‑up care</td>
                  <td className="py-4 px-4 text-right">$5,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center mt-8 italic">
            <span className="font-medium">Custom Add‑Ons:</span> obituary writing • digital tributes • death certificate processing • meal‑train coordination
          </p>
        </div>
      </section>
      
      {/* About section */}
      <section id="about" className="w-full bg-soft-ivory py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-mortuary mb-10 text-center">About Us</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-10 text-center">
              Evermore was founded on the belief that funerals should honor life and support the living.<br />
              Our mission is to transform the funeral experience with dignity, cultural respect, and emotional care.
            </p>
            
            <h3 className="text-2xl font-mortuary mb-6 text-center">Our Values</h3>
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
              <h3 className="text-2xl font-mortuary mb-2">Meet Our Founder</h3>
              <p className="font-medium mb-2">Zara [Last Name], Funeral Coordination Specialist</p>
              <p className="italic">"With compassion at our core, we guide you through logistics so you can focus on healing."</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources section with FAQs */}
      <section id="resources" className="w-full bg-forest-charcoal text-soft-ivory py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-mortuary mb-10 text-center">Resources & FAQs</h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-mortuary mb-6 text-center">Featured Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-forest-charcoal/50 p-6 rounded-lg">
                <p className="italic">What to Expect at a Modern Funeral</p>
              </div>
              <div className="bg-forest-charcoal/50 p-6 rounded-lg">
                <p className="italic">How to Incorporate Digital Tributes</p>
              </div>
              <div className="bg-forest-charcoal/50 p-6 rounded-lg">
                <p className="italic">A Guide to Pre‑Planning Your Goodbye</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-mortuary mb-6 text-center">Top Questions</h3>
            <FAQAccordion items={faqItems} />
            
            <div className="text-center mt-12">
              <Button href="/resources" variant="primary">View All Resources</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="contact" className="w-full bg-soft-ivory py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-mortuary mb-10 text-center">Contact & Location</h2>
          <p className="text-xl max-w-4xl mx-auto text-center mb-12">
            Have questions or ready to begin? Reach out today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-mortuary mb-6">Schedule a Consultation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Phone:</span> (212) 555‑1234
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Email:</span> hello@evermorefuneral.com
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Hours:</span> Mon–Fri, 9 AM–6 PM ET
                </li>
                <li className="flex items-start mt-6">
                  <span className="font-medium mr-2">Office:</span> Serving the NYC metro area and beyond
                </li>
              </ul>
              
              <div className="mt-8">
                <Button href="/consultation" variant="primary">Book a Consultation Online</Button>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-moss-olive/30 rounded-lg bg-soft-ivory focus:border-moss-olive focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-moss-olive/30 rounded-lg bg-soft-ivory focus:border-moss-olive focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border border-moss-olive/30 rounded-lg bg-soft-ivory focus:border-moss-olive focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 border border-moss-olive/30 rounded-lg bg-soft-ivory focus:border-moss-olive focus:outline-none"
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