import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Button from '@/components/ui/button';

export const metadata = {
  title: 'Family Support Guide | Evermore',
  description: 'Download our free guide to funeral planning and grief support.',
};

export default function FamilyGuidePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      
      <section className="w-full bg-soft-ivory py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-mortuary mb-6 text-center">Family Support Guide</h1>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
              A comprehensive resource to help you navigate funeral planning, grief, and family support.
            </p>
            
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-moss-olive/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-mortuary mb-4">What's Inside</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-moss-olive mr-2">•</span>
                      <span>Step-by-step funeral planning checklist</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-moss-olive mr-2">•</span>
                      <span>Guide to different cultural and religious traditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-moss-olive mr-2">•</span>
                      <span>Understanding grief and supporting loved ones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-moss-olive mr-2">•</span>
                      <span>Legal considerations and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-moss-olive mr-2">•</span>
                      <span>Self-care practices during bereavement</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="font-medium mb-2">Enter your email to download:</h3>
                    <form className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                          type="email" 
                          placeholder="Your email address" 
                          className="flex-1 p-3 border border-moss-olive/30 rounded-lg bg-soft-ivory focus:border-moss-olive focus:outline-none" 
                          required
                        />
                        <Button type="submit" variant="primary">Download Guide</Button>
                      </div>
                      <p className="text-sm text-forest-charcoal/70">
                        We respect your privacy and will never share your information.
                      </p>
                    </form>
                  </div>
                </div>
                
                <div className="bg-forest-charcoal/5 p-6 rounded-lg">
                  <div className="aspect-[3/4] bg-forest-charcoal/20 rounded flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="font-mortuary text-3xl mb-4">Family Support Guide</div>
                      <div className="text-lg">EVERMORE</div>
                      <div className="mt-16 text-sm italic">
                        A compassionate guide to navigating life's most meaningful goodbye
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-4">Need immediate assistance?</p>
              <Button href="/consultation" variant="outline">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-forest-charcoal text-soft-ivory py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-mortuary mb-6 text-center">Additional Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-forest-charcoal/50 p-6 rounded-lg">
                <h3 className="font-mortuary text-xl mb-3">Articles</h3>
                <p className="mb-4">Explore our collection of thoughtful articles on grief, memorial planning, and healing.</p>
                <Link href="/resources" className="text-moss-olive hover:underline">
                  Browse Articles →
                </Link>
              </div>
              
              <div className="bg-forest-charcoal/50 p-6 rounded-lg">
                <h3 className="font-mortuary text-xl mb-3">Pre-Planning</h3>
                <p className="mb-4">Learn how planning ahead can provide peace of mind and ease the burden on your loved ones.</p>
                <Link href="/pre-planning" className="text-moss-olive hover:underline">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-forest-charcoal/50 p-6 rounded-lg">
                <h3 className="font-mortuary text-xl mb-3">FAQ</h3>
                <p className="mb-4">Find answers to common questions about funeral planning, costs, and arrangements.</p>
                <Link href="/resources#faq" className="text-moss-olive hover:underline">
                  View FAQs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}