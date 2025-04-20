import React from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ConsultationForm from '@/components/booking/consultation-form';

export const metadata = {
  title: 'Schedule a Consultation | Evermore',
  description: 'Book a free consultation with our funeral coordination specialists.',
};

export default function ConsultationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      
      <section className="w-full bg-soft-ivory py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-mortuary mb-6 text-center">Schedule Your Free Consultation</h1>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
              Take the first step toward planning a meaningful farewell. Our team is here to listen and guide you with compassion.
            </p>
            
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-moss-olive/10">
              <ConsultationForm />
            </div>
            
            <div className="mt-16 bg-forest-charcoal text-soft-ivory p-8 rounded-lg">
              <h2 className="text-2xl font-mortuary mb-4">What to Expect</h2>
              <p className="mb-4">
                During your 30-minute consultation, we'll discuss your needs, answer questions, and explore how Evermore can support you and your family.
              </p>
              <ul className="list-disc pl-5 space-y-2">
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