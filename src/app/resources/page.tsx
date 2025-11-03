import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Button from '@/components/ui/button';
import FAQAccordion from '@/components/ui/faq-accordion';

export const metadata = {
  title: 'Resources & Articles | Evermore',
  description: 'Helpful resources, articles, and guides for funeral planning and grief support.',
};

export default function ResourcesPage() {
  const faqItems = [
    {
      question: 'How transparent is your pricing?',
      answer: 'We provide clear, itemized quotes—no hidden fees, no upsells. We believe in complete transparency throughout the planning process.'
    },
    {
      question: 'Can we hold the service at our own venue?',
      answer: 'Absolutely. We\'re vendor-neutral and will help you secure the perfect location. Whether it\'s a place of worship, a home setting, or a meaningful outdoor location, we can coordinate services anywhere.'
    },
    {
      question: 'What support do you offer after the funeral?',
      answer: 'We stay with you—helping with paperwork, meal trains, and emotional resources. Our post-funeral care includes processing death certificates, coordinating thank-you notes, connecting you with grief counseling, and more.'
    },
    {
      question: 'How far in advance should we contact you?',
      answer: 'While we recommend reaching out as soon as possible to allow for thoughtful planning, we understand that circumstances often require immediate assistance. We\'re equipped to provide support at any stage of need, including same-day coordination.'
    },
    {
      question: 'Do you work with existing funeral homes?',
      answer: 'Yes, we collaborate seamlessly with funeral homes of your choosing. Our role is complementary, focusing on personalization, coordination, and support beyond what traditional funeral homes typically offer.'
    },
    {
      question: 'Can you accommodate different cultural and religious traditions?',
      answer: 'Absolutely. We\'re experienced in diverse cultural and religious funeral practices and will work closely with you to ensure all traditions are honored authentically and respectfully.'
    }
  ];

  const featuredArticles = [
    {
      title: 'What to Expect at a Modern Funeral',
      excerpt: 'How funeral services have evolved to become more personal, meaningful celebrations of life.',
      category: 'Planning',
      slug: '/resources/modern-funeral'
    },
    {
      title: 'How to Incorporate Digital Tributes',
      excerpt: 'Innovative ways to use technology to honor and remember your loved one.',
      category: 'Technology',
      slug: '/resources/digital-tributes'
    },
    {
      title: 'A Guide to Pre‑Planning Your Goodbye',
      excerpt: 'Why planning ahead provides peace of mind and eases the burden on your loved ones.',
      category: 'Pre-Planning',
      slug: '/resources/pre-planning-guide'
    },
    {
      title: 'Supporting Children Through Grief',
      excerpt: 'Age-appropriate approaches to helping children understand and process loss.',
      category: 'Grief Support',
      slug: '/resources/children-grief'
    },
    {
      title: 'Eco-Friendly Funeral Options',
      excerpt: 'Sustainable approaches to honoring your loved one while respecting the environment.',
      category: 'Sustainability',
      slug: '/resources/eco-friendly'
    },
    {
      title: 'Creating Meaningful Funeral Rituals',
      excerpt: 'How personalized rituals can provide comfort and healing during the grieving process.',
      category: 'Ceremony',
      slug: '/resources/meaningful-rituals'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      
      <section className="w-full bg-soft-ivory py-16 sm:py-20">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-mortuary mb-4 sm:mb-6 text-center px-4 sm:px-0">Resources & Articles</h1>
          <p className="text-lg sm:text-xl text-center mb-10 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            Helpful guidance to support you through every step of funeral planning and the grief journey.
          </p>
          
          <div className="mb-12 sm:mb-16">
            <div className="bg-forest-charcoal/5 p-6 sm:p-8 rounded-lg text-center">
              <h2 className="text-xl sm:text-2xl font-mortuary mb-3 sm:mb-4">Download Our Family Support Guide</h2>
              <p className="mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Our comprehensive guide includes planning checklists, cultural considerations, grief support resources, and more.
              </p>
              <Button href="/resources/family-guide" variant="primary">Get the Free Guide</Button>
            </div>
          </div>
          
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-mortuary mb-6 sm:mb-8 text-center">Featured Articles</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredArticles.map((article, index) => (
                <article key={index} className="bg-white rounded-lg shadow-sm border border-moss-olive/10 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-5 sm:p-6">
                    <div className="text-xs sm:text-sm text-moss-olive mb-2">{article.category}</div>
                    <h3 className="font-mortuary text-lg sm:text-xl mb-2 sm:mb-3">{article.title}</h3>
                    <p className="mb-3 sm:mb-4 text-sm sm:text-base text-forest-charcoal/80 line-clamp-3">{article.excerpt}</p>
                    <Link href={article.slug} className="text-sm sm:text-base text-moss-olive hover:underline inline-flex items-center">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <div id="faq">
            <h2 className="text-2xl sm:text-3xl font-mortuary mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      
      <section className="w-full bg-forest-charcoal text-soft-ivory py-12 sm:py-16">
        <div className="container-custom text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-mortuary mb-4 sm:mb-6 px-4 sm:px-0">Have a Question We Haven't Answered?</h2>
          <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Our team is here to provide personalized guidance for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button href="/consultation" variant="primary">Schedule a Consultation</Button>
            <Button href="/#contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}