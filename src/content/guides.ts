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
      src: '/images/hero-bg.jpg',
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
  {
    slug: 'writing-an-obituary-that-feels-true',
    title: 'Writing an Obituary That Feels True',
    author: 'Kara Silverman',
    dek: 'A simple structure to help you name a life with clarity and tenderness—without forcing the “right” words.',
    heroImage: {
      src: '/images/placeholder.jpg',
      alt: 'Soft, neutral abstract placeholder',
    },
    sections: [
      {
        heading: 'Start by lowering the bar',
        paragraphs: [
          'An obituary doesn’t have to capture everything. It has to be honest enough to recognize your person, and clear enough to guide the community.',
          'If you feel stuck, begin with facts. The warmth can come later. You can always revise after you’ve slept.',
        ],
      },
      {
        heading: 'A gentle outline (you can copy)',
        paragraphs: [
          '1) Name, age, and where they lived. 2) The date of death (and, if you choose, the cause—only if it feels right). 3) A few sentences about who they were and what they loved. 4) Immediate family and close relationships (in whatever order is true for you). 5) Service details and ways to show support.',
          'If the family structure is complicated, keep it simple: “They are survived by…” and list the people who should be named. You don’t owe the public an explanation.',
        ],
      },
      {
        heading: 'Make it specific, not perfect',
        paragraphs: [
          'The details people remember are small: a favorite walk, a kitchen habit, a song they played too loud. Specificity brings someone back into the room.',
          'If you’re unsure what to include, try: “They were known for…” or “They never left the house without…”',
        ],
      },
      {
        heading: 'Service details: what readers need',
        paragraphs: [
          'Include date, time, location, and whether it’s open to the public. If travel is involved, note any livestream link and the time zone.',
          'If you want to name a cause (donations, meals, a memory book), give one clear action with a link or instruction.',
        ],
      },
      {
        heading: 'A final line that feels like you',
        paragraphs: [
          'Some families choose a closing sentence: a blessing, a quote, or simply: “We love you. We miss you.”',
          'Choose language that aligns with your family’s beliefs. Traditional, spiritual, secular, poetic—any of it can be true.',
        ],
      },
    ],
  },
  {
    slug: 'talking-to-children-about-death',
    title: 'Talking to Children About Death',
    author: 'Kara Silverman',
    dek: 'Clear, age-appropriate language that helps kids feel safe—without overexplaining or leaving them alone with guesses.',
    heroImage: {
      src: '/images/placeholder.jpg',
      alt: 'Soft, neutral abstract placeholder',
    },
    sections: [
      {
        heading: 'Use simple, direct words',
        paragraphs: [
          'Children do better with clarity than euphemisms. Phrases like “passed away” or “went to sleep” can create fear and confusion.',
          'Try: “Their body stopped working, and they died. That means we won’t see them in the way we used to.”',
        ],
      },
      {
        heading: 'Expect questions in waves',
        paragraphs: [
          'Kids often return to the same question repeatedly. This is how they process. Answer the question that’s being asked—briefly—and let them lead.',
          'It’s okay to say, “I don’t know.” It’s also okay to say, “That’s a big question. Let’s talk about what we do know right now.”',
        ],
      },
      {
        heading: 'Name what stays the same',
        paragraphs: [
          'In the middle of change, anchors matter: who will pick them up, where they’ll sleep, what tomorrow looks like.',
          'Even one sentence can help: “You are safe. We will take care of you. We will keep talking about this.”',
        ],
      },
      {
        heading: 'Let feelings be ordinary',
        paragraphs: [
          'Children may cry, laugh, play, or seem “fine.” None of that is wrong. Grief can look like stomachaches, irritability, clinginess, or sudden quiet.',
          'Offer choices: drawing a picture, lighting a candle, bringing a note to the service—small rituals that give them a role.',
        ],
      },
      {
        heading: 'If you’re bringing them to a service',
        paragraphs: [
          'Tell them what they will see and hear before you arrive: adults crying, a casket or urn, a quiet room, unfamiliar people.',
          'If possible, assign one supportive adult who can step outside with them at any point—no questions, no pressure.',
        ],
      },
    ],
  },
  {
    slug: 'planning-a-celebration-of-life-checklist',
    title: 'Planning a Celebration of Life: A Gentle Checklist',
    author: 'Kara Silverman',
    dek: 'A practical, calm path through planning—so the day can feel like presence, not production.',
    heroImage: {
      src: '/images/placeholder.jpg',
      alt: 'Soft, neutral abstract placeholder',
    },
    sections: [
      {
        heading: 'Begin with the purpose',
        paragraphs: [
          'A celebration of life can be joyful and still be serious. The goal isn’t to “make it upbeat.” The goal is to reflect a real person and gather the people who loved them.',
          'If you choose one guiding question, let it be: “What would feel like them?”',
        ],
      },
      {
        heading: 'Decide the container',
        paragraphs: [
          'Choose a date, a location, and a rough length. Then decide whether this is open-invitation or smaller and private. The container protects everyone’s energy.',
          'If travel is involved, consider a later date and a livestream option. It’s okay to plan in phases.',
        ],
      },
      {
        heading: 'Choose 3–5 elements (not 25)',
        paragraphs: [
          'Keep it simple. Most gatherings need only a few anchors: music, a welcome, a story or reading, shared time, and a closing.',
          'Meaning often comes from pacing and tenderness—not volume.',
        ],
      },
      {
        heading: 'A checklist you can move through',
        paragraphs: [
          'Who will host and open the gathering? Who will speak (and who will not be put on the spot)? What photos or objects will you display? What music matters? Will there be food, and who will handle it? What accessibility needs should you plan for (seating, sound, mobility, sensory considerations)?',
          'Write down one “must” and two “nice-to-haves.” Let the rest go.',
        ],
      },
      {
        heading: 'Afterward: care for the living',
        paragraphs: [
          'Plan a small decompression: a quiet meal, an early night, a day without decisions. The body keeps the score.',
          'If people ask how to help, give one concrete option: meals, childcare, errands, or contributions toward a fund or cause.',
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
