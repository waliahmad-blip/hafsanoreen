import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Wedding Photographer — Oakville, Burlington, Milton & Halton',
  description: 'Cinematic wedding photography across Halton & the GTA. 8 hours of coverage, 400+ editorial film frames, 48h sneak peek. From $3,800 CAD + HST.',
  alternates: { canonical: '/weddings' },
};

export default function WeddingsPage() {
  return (
    <>
      <PageHero tag='Weddings' title='Your Day, Shot Like a Film' lede='Unscripted vows, kinetic joy, quiet in-between glances — preserved in golden natural light and heirloom film colour.' image='/images/corridor/corridor-1.jpg' imageAlt='Your Day, Shot Like a Film' />
      <StorySection label='The Approach' title='Quiet Where It Matters, Bold Where It Counts'>
        <p>During your ceremony I am nearly invisible — a long lens, a held breath. During your golden-hour portraits I am a director: gentle prompts, real movement, and the patience to wait for the exact frame.</p>
        <p>Every wedding receives 8 hours of comprehensive coverage, 400+ hand-graded frames, a planning consultation, and a sneak-peek gallery within 48 hours so you can relive it while the confetti is still in your shoes.</p>
      </StorySection>
      <FeatureGrid label='What&apos;s Included' title='The Wedding Heirloom — $3,800 CAD' items={[
        { title: '8 Hours, Two Angles', body: 'Comprehensive coverage from preparations to send-off, with second-shooter options for the Signature commission.' },
        { title: '400+ Editorial Frames', body: 'Every gallery image hand-graded in the atelier film palette — high-resolution, print-ready, yours forever.' },
        { title: '48-Hour Sneak Peek', body: 'A curated teaser gallery while the celebration is still fresh enough to text everyone about.' },
        { title: 'Planning Consultation', body: 'Timeline design, light-mapping for your venue, and a family-photo game plan that never feels rushed.' },
        { title: 'Venue Expertise', body: 'Gairloch Gardens, Kelso, Rattlesnake Point, Paletta Mansion, Distillery District — we know the light by heart.' },
        { title: 'Heirloom Add-Ons', body: 'Fine-art layflat albums, 4K cinematic reels, and museum wall art to turn the day into a family archive.' },
      ]} />
      <CTABand title='Hold your wedding date.' lede='Weekend dates book 6–12 months ahead. A $500 retainer locks yours.' primaryHref='/booking' primaryLabel='Reserve Your Date' secondaryHref='/portfolio' secondaryLabel='View Wedding Films' />
    </>
  );
}
