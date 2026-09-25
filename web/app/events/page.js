import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Event Photography — Oakville, Burlington, Milton, Toronto & the GTA',
  description: 'Celebrations, galas, brand launches and mitzvahs photographed cinematically across Halton and the GTA. 4 hours, 200+ frames. From $1,200 CAD + HST.',
  alternates: { canonical: '/events' },
};

export default function EventsPage() {
  return (
    <>
      <PageHero tag='Celebrations' title='Every Toast, Caught Mid-Air' lede='Documentary celebration coverage that never interrupts the party — 4 hours, 200+ frames, cinematic colour.' image='/images/corridor/corridor-4.jpg' imageAlt='Every Toast, Caught Mid-Air' />
      <StorySection label='The Approach' title='A Guest With a Camera'>
        <p>Galas, baby showers, bar and bat mitzvahs, brand launches, backyard anniversaries — I photograph them the same way: documentary-first, never interrupting a moment to manufacture one.</p>
        <p>Four hours of coverage with 200+ hand-graded frames, same-week delivery for event teams, and venue-lighting expertise from the Distillery District to Paletta Mansion.</p>
      </StorySection>
      <FeatureGrid label='What&apos;s Included' title='The Event Chapter — $1,200 CAD' items={[
        { title: '4 Hours of Coverage', body: 'Arrivals to last dance — or the hours that matter most for your event.' },
        { title: '200+ Frames', body: 'Hand-graded, print-ready, and organized for easy sharing with hosts and guests.' },
        { title: 'Same-Week Delivery', body: 'Event teams and PR timelines get priority turnaround on request.' },
        { title: 'Venue Fluency', body: 'Toronto\'s Distillery District, Paletta Mansion, LE venues, backyard tents — light plans included.' },
        { title: 'Brand Add-Ons', body: 'Commercial usage licensing and reel coverage available for launches and openings.' },
        { title: 'Guest Gallery Link', body: 'A shareable private gallery so every guest relives the night.' },
      ]} />
      <CTABand title='Put your celebration on film.' lede='Share your date, venue, and vibe — you&apos;ll have a plan within the hour.' primaryHref='/contact' primaryLabel='Plan Your Event' secondaryHref='/portfolio' secondaryLabel='See Event Films' />
    </>
  );
}
