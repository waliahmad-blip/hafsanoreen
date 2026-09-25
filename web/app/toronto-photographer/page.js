import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Toronto Photographer — Distillery District, Downtown & Lakeshore Editorial',
  description: 'Editorial and wedding photography in Toronto: Distillery District, King West, Harbourfront & Trinity Bellwoods. Brand, engagement & celebration commissions.',
  alternates: { canonical: '/toronto-photographer' },
};

export default function TorontoPhotographerPage() {
  return (
    <>
      <PageHero tag='Toronto, ON' title='Toronto, In Editorial Light' lede='Victorian brick, King West neon, harbour dusk — the city shot like a film location scout&apos;s dream.' image='/images/corridor/corridor-6.jpg' imageAlt='Toronto, In Editorial Light' />
      <StorySection label='The City' title='Urban Cinema, Block by Block'>
        <p>Toronto commissions are editorial at heart: engagement portraits in the Distillery&apos;s cobblestone lanes, brand campaigns in King West storefront light, celebrations on Harbourfront terraces.</p>
        <p>The atelier travels in with a location plan — permits, parking, light windows, and a rain plan — so city sessions run like productions.</p>
      </StorySection>
      <FeatureGrid label='Toronto Locations' title='Where We Shoot' items={[
        { title: 'Distillery District', body: '19th-century Victorian brick and cobblestone lanes for high-fashion urban romance.' },
        { title: 'King West & Queen Street', body: 'Storefront glow and street style energy for branding sessions.' },
        { title: 'Harbourfront', body: 'Lake skyline terraces and boardwalk sunsets for couples and events.' },
        { title: 'Trinity Bellwoods', body: 'Green-heart casual family and engagement sessions with the CN Tower edge.' },
        { title: 'Leslieville & Riverside', body: 'Mural walls and heritage storefronts — texture-rich editorial backdrops.' },
        { title: 'Permits & Access', body: 'City and private-location permits arranged in advance — productions, not improvisations.' },
      ]} />
      <CTABand title='Book your Toronto commission.' lede='Editorial, engagement, and brand sessions across the city.' primaryHref='/contact' primaryLabel='Plan Your Session' secondaryHref='/portfolio' secondaryLabel='Toronto Frames' />
    </>
  );
}
