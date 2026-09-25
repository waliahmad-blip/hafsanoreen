import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Maternity Photography — Oakville, Burlington, Milton & Halton',
  description: 'Reverent, editorial maternity photography in Halton. Golden-hour sessions at home or on the escarpment. From $650 CAD + HST.',
  alternates: { canonical: '/maternity' },
};

export default function MaternityPage() {
  return (
    <>
      <PageHero tag='Maternity' title='Reverie, In Gold' lede='The quiet strength of waiting — photographed in window light, field light, and the last warm hour of the day.' image='/images/corridor/corridor-3.jpg' imageAlt='Reverie, In Gold' />
      <StorySection label='The Approach' title='Slow, Warm, and Wholly Yours'>
        <p>Maternity sessions are booked for weeks 28–35, at home in your best window light or out on the escarpment at golden hour. Partners and siblings belong in the frame — this is a family portrait too.</p>
        <p>Wardrobe styling is included: flowing neutrals, knit textures, and a curated client closet. Every gallery is hand-graded warm and archival, ready for the nursery wall.</p>
      </StorySection>
      <FeatureGrid label='What&apos;s Included' title='The Family &amp; Maternity — $650 CAD' items={[
        { title: 'Timing Consultation', body: 'We book your exact golden window between weeks 28–35, when the glow is real.' },
        { title: 'Home or Escarpment', body: 'Your nursery light or Kelso\'s limestone at sunset — both are entirely yours.' },
        { title: 'Wardrobe Styling', body: 'Personal style guide plus access to the atelier\'s curated client closet of gowns and knits.' },
        { title: '40 Hand-Graded Frames', body: 'Intimate detail, partner hands, silhouettes, and the full-family portrait.' },
        { title: 'Newborn Bridge', body: 'Book a newborn follow-up within 6 months and receive priority calendar access.' },
        { title: 'Nursery-Ready Prints', body: 'Soft-gloss museum prints sized for above-the-crib, shipped ready to frame.' },
      ]} />
      <CTABand title='Reserve your window.' lede='These dates are set by the calendar of you — book early in your second trimester.' primaryHref='/booking' primaryLabel='Reserve Your Date' secondaryHref='/families' secondaryLabel='Family Sessions' />
    </>
  );
}
