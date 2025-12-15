export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuideHeroImage = {
  src: string;
  alt: string;
};

export type Guide = {
  slug: string;
  title: string;
  author: string;
  dek: string;
  heroImage?: GuideHeroImage;
  sections: GuideSection[];
  publishedAt?: string;
};

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-plan-a-meaningful-farewell',
    title: 'How to Plan A Meaningful Farewell',
    author: 'Kara Silverman',
    dek: 'A grounded guide to shaping a ceremony that reflects your person—without adding pressure or overwhelm.',
    heroImage: {
      src: '/images/placeholder.png',
      alt: 'Soft waves at sunset',
    },
    sections: [
      {
        heading: 'Our Story',
        paragraphs: [
          'Evermore was created from a simple belief: no one should have to navigate a funeral alone. During grief, families are often forced into difficult decisions, overwhelming logistics, and a system that can feel opaque, transactional, and emotionally out of sync with what they need most—space, clarity, and real human presence.',
          'We started Evermore because we know what it feels like to be in that moment. We’ve experienced the confusion, the pressure, the rush, and the deep desire to honor someone with care. We built the company we wished existed: a steady, compassionate partner who shows up, handles the details, and helps families focus on being with one another.',
        ],
      },
      {
        heading: 'Start with what matters',
        paragraphs: [
          'Before you choose a venue, a date, or a format, take a moment to name what you want people to feel when they leave. Peace. Connection. Gratitude. A sense of truth.',
          'A meaningful farewell doesn’t have to be elaborate. It has to be aligned—rooted in who your person was and what your family needs right now.',
        ],
      },
      {
        heading: 'Choose a shape that fits',
        paragraphs: [
          'There is no single “right” template. A farewell can be intimate or expansive, traditional or modern, spiritual or secular, home-based or hosted elsewhere.',
          'If you’re unsure, start with constraints (timeline, budget, travel, cultural or religious needs) and build from there. Clarity reduces overwhelm.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-plan-a-meaningful-funeral',
    title: 'How to Plan a Meaningful Funeral',
    author: 'Kara Silverman',
    dek: 'A step-by-step overview of the decisions ahead, with a focus on care, clarity, and practicality.',
    sections: [
      {
        heading: 'A note to begin',
        paragraphs: [
          'If you’re planning a funeral, you’re likely doing it under emotional strain. Our goal is to make the path in front of you a little more legible—and a little less lonely.',
        ],
      },
      {
        heading: 'What to decide first',
        paragraphs: [
          'Start with timing, location, and who needs to be present. Then move outward to format, roles, and logistics. When you decide in this order, you protect energy for what matters most.',
        ],
      },
    ],
  },
  {
    slug: 'what-to-do-in-the-first-72-hours',
    title: 'What to Do in the First 72 Hours',
    author: 'Kara Silverman',
    dek: 'A practical checklist for the earliest decisions—when focus is hardest and support matters most.',
    sections: [
      {
        heading: 'The immediate essentials',
        paragraphs: [
          'In the first hours and days, it can help to narrow attention to just a few essentials: caring for the body, notifying key people, and creating space for rest.',
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
