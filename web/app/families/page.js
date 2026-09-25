import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Family Photography — Oakville, Burlington, Milton & Halton',
  description: 'Unscripted, golden-hour family photography in Oakville, Burlington, Milton & Halton. 2 hours on location, 40 hand-graded frames. From $650 CAD + HST.',
  alternates: { canonical: '/families' },
};

export default function FamiliesPage() {
  return (
    <>
      <PageHero tag='Families' title='The Way Your Family Actually Laughs' lede='Two unhurried hours at Kelso, Gairloch, or your own backyard — and the frames your grandkids will frame.' image='/images/corridor/corridor-2.jpg' imageAlt='The Way Your Family Actually Laughs' />
      <StorySection label='The Approach' title='No Stiff Poses. Ever.'>
        <p>Sessions move like a picnic: chase-the-dog, tickle-the-toddler, walk-toward-the-light. I direct only when it helps — the rest of the time I am quietly collecting the real stuff.</p>
        <p>Two hours on location, 40 hand-graded frames, and a 48-hour sneak peek. Extra images, museum prints, and layflat albums available from your private gallery.</p>
      </StorySection>
      <FeatureGrid label='Good To Know' title='The Family &amp; Maternity — $650 CAD' items={[
        { title: '2 Hours On Location', body: 'Kelso, Gairloch Gardens, your home, or a location that means something to your crew.' },
        { title: '40 Hand-Graded Frames', body: 'The full story arc — wide portraits, in-between chaos, and the close quiet ones.' },
        { title: 'Style Guide Included', body: 'A personalized wardrobe guide in soft neutrals and classic silhouettes once your date is set.' },
        { title: 'Weather Insurance', body: 'Golden hour is unpredictable in Halton — rescheduling is always warm and free.' },
        { title: 'Grandparent-Proof Prints', body: 'Museum cotton-rag prints and albums designed to be handed down, not deleted.' },
        { title: 'Every Age Welcome', body: 'Newborns, teens who\'d rather be elsewhere, grandparents, dogs — all welcome, all anticipated.' },
      ]} />
      <CTABand title='Book your family&apos;s golden hour.' lede='Fall dates go first — the escarpment maple colour is worth it.' primaryHref='/booking' primaryLabel='Reserve Your Date' secondaryHref='/portfolio' secondaryLabel='See Family Films' />
    </>
  );
}
