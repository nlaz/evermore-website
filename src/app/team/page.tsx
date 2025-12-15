import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Team',
  description: 'Meet the people behind Evermore.',
};

function PortraitPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase())
    .join('')
    .slice(0, 2);

  return (
    <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl bg-soft-parchment/35 ring-1 ring-deep-plum/15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(42,29,38,0.22),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(42,29,38,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,247,242,0.55),transparent_55%,rgba(42,29,38,0.06))]" />
      <span className="absolute inset-0 flex items-center justify-center font-heading text-3xl tracking-[0.08em] text-deep-plum/55">
        {initials}
      </span>
    </div>
  );
}

function WideHeroBlock() {
  return (
    <div className="w-full rounded-sm overflow-hidden ring-1 ring-deep-plum/10 bg-soft-parchment/25">
      <div className="aspect-[16/9] w-full bg-[radial-gradient(circle_at_20%_40%,rgba(54,38,48,0.20),transparent_55%),radial-gradient(circle_at_65%_35%,rgba(42,29,38,0.18),transparent_60%),linear-gradient(180deg,rgba(249,247,242,0.22),rgba(249,247,242,0.05))] bg-texture-pattern" />
    </div>
  );
}

type TeamMember = {
  name: string;
  title: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    name: 'Zara Khan',
    title: 'Founder & CEO',
    bio: 'Despite this demand, few companies offer holistic, full-service funeral planning that combines logistical expertise with emotional and cultural sensitivity. Most existing providers focus narrowly on the event itself, leaving families to piece together the rest on their own.',
  },
  {
    name: 'Kara Silverman',
    title: 'Founder & COO',
    bio: 'Despite this demand, few companies offer holistic, full-service funeral planning that combines logistical expertise with emotional and cultural sensitivity. Most existing providers focus narrowly on the event itself, leaving families to piece together the rest on their own.',
  },
];

export default function TeamPage() {
  return (
    <section className="space-y-14">
      <header className="space-y-5 text-left max-w-[988px]">
        <p className="text-deep-plum/65 text-sm font-light">We’re here to make the hardest moments a little gentler.</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading leading-tight text-deep-plum">The Team</h1>
      </header>

      <WideHeroBlock />

      <section className="mx-auto max-w-[988px] space-y-4">
        <h2 className="text-lg sm:text-xl font-heading text-deep-plum">Our Story</h2>
        <p className="text-deep-plum/70 font-light leading-relaxed text-sm sm:text-[15px]">
          Evermore was created from a simple belief: no one should have to navigate a funeral alone. During grief, families are
          often forced into difficult decisions, overwhelming logistics, and a system that can feel opaque, transactional, and
          emotionally out of sync with what they need most—space, clarity, and real human presence.
        </p>
        <p className="text-deep-plum/70 font-light leading-relaxed text-sm sm:text-[15px]">
          We started Evermore because we know what it feels like to be in that moment. We’ve experienced the confusion, the
          pressure, the rush, and the deep desire to honor someone with care. We built the company we wished existed: a steady,
          compassionate partner who shows up, handles the details, and helps families focus on being with one another.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 pt-2">
        {TEAM.map((member) => (
          <article key={member.name} className="text-center space-y-5">
            <PortraitPlaceholder name={member.name} />

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-heading text-deep-plum">{member.name}</h3>
              <p className="text-xs tracking-[0.14em] uppercase text-deep-plum/65 font-light">{member.title}</p>
            </div>

            <p className="mx-auto max-w-sm text-deep-plum/70 font-light leading-relaxed text-sm sm:text-[15px]">
              {member.bio}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-[988px] space-y-4 pt-6">
        <h2 className="text-lg sm:text-xl font-heading text-deep-plum">Our Story</h2>
        <p className="text-deep-plum/70 font-light leading-relaxed text-sm sm:text-[15px]">
          Evermore was created from a simple belief: no one should have to navigate a funeral alone. During grief, families are
          often forced into difficult decisions, overwhelming logistics, and a system that can feel opaque, transactional, and
          emotionally out of sync with what they need most—space, clarity, and real human presence.
        </p>
        <p className="text-deep-plum/70 font-light leading-relaxed text-sm sm:text-[15px]">
          We started Evermore because we know what it feels like to be in that moment. We’ve experienced the confusion, the
          pressure, the rush, and the deep desire to honor someone with care. We built the company we wished existed: a steady,
          compassionate partner who shows up, handles the details, and helps families focus on being with one another.
        </p>
      </section>
    </section>
  );
}

