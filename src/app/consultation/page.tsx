import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ConsultationForm from '@/components/booking/consultation-form';

export const metadata = {
  title: 'Schedule a Consultation | Evermore',
  description: 'Book a free consultation with our funeral coordination specialists.',
};

export default function ConsultationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-charred-plum">
      <Navbar />
      
      <section className="w-full bg-charred-plum pt-48 md:pt-56 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-heading mb-6 text-center text-pale-stone">Schedule Your Free Consultation</h1>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-pale-stone/90">
              Take the first step toward planning a meaningful farewell. Our team is here to listen and guide you with compassion.
            </p>
            
            <ConsultationForm />
          </div>
        </div>
        
        <div className="container-custom mt-20 md:mt-24">
          <div className="bg-deep-plum text-pale-stone p-10 md:p-12 relative overflow-hidden" style={{ borderRadius: '16px' }}>
            {/* SVG Flourish */}
            <div className="absolute right-0 top-0 bottom-0 h-full flex items-center justify-end opacity-20 pointer-events-none overflow-hidden" style={{ width: '50%', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <Image
                src="/logos/Evermore_Emblem.svg"
                alt=""
                width={576}
                height={648}
                className="w-auto object-contain"
                style={{ 
                  height: 'calc(100% - 1rem)',
                  filter: 'brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(378%) hue-rotate(350deg) brightness(97%) contrast(86%)',
                  clipPath: 'inset(0 25% 0 0)',
                  transform: 'translateX(25%)'
                }}
              />
            </div>
            
            {/* Content - 3/4 width */}
            <div className="relative z-10 max-w-[75%]">
              <h2 className="text-2xl font-heading mb-6">What to Expect</h2>
              <p className="mb-6 text-pale-stone/90">
                During your 30-minute consultation, we'll discuss your needs, answer questions, and explore how Evermore can support you and your family.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-pale-stone/90">
                <li>No obligation or pressure</li>
                <li>Transparent discussion of services and costs</li>
                <li>Opportunity to share your specific wishes</li>
                <li>Clear next steps and timeline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}