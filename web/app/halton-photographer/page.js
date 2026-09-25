import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Halton Region Photographer — Oakville, Burlington, Milton & Halton Hills',
  description: 'One atelier for all of Halton: Oakville, Burlington, Milton, Georgetown & Acton. Cinematic family, maternity, wedding & event photography.',
  alternates: { canonical: '/halton-photographer' },
};

export default function HaltonPhotographerPage() {
  return (
    <>
      <PageHero tag='Halton Region' title='One Atelier, All of Halton' lede='Four communities, escarpment to lake — every commission receives the same cinematic standard.' image='/images/corridor/corridor-4.jpg' imageAlt='One Atelier, All of Halton' />
      <StorySection label='The Region' title='From Lake Ontario to the Escarpment Ridge'>
        <p>Halton is the atelier&apos;s home range: Oakville&apos;s lakefront estates, Burlington&apos;s waterfront, Milton&apos;s conservation lands, and Halton Hills&apos; heritage villages. Fifteen years of shooting here built a private light-map most photographers never see.</p>
        <p>One studio covers the whole region — with Halton&apos;s simplest travel policy: no travel fees inside the region, ever.</p>
      </StorySection>
      <FeatureGrid label='By Community' title='Where You&apos;ll Find Us' items={[
        { title: 'Oakville', body: 'Gairloch Gardens, Bronte Harbour, Lakeshore Woods, Coronation Park — the studio\'s home turf.' },
        { title: 'Burlington', body: 'Spencer Smith, LaSalle waterfront, Mount Nemo, Lowville village.' },
        { title: 'Milton', body: 'Kelso, Rattlesnake Point, Hilton Falls, and the agricultural-gold backroads.' },
        { title: 'Halton Hills', body: 'Georgetown\'s heritage downtown, Dominion Seed House fields, Acton badlands edge.' },
        { title: 'Regional Perk', body: 'Zero travel fees anywhere in Halton — your session is quoted clean.' },
        { title: 'All Session Types', body: 'Weddings, families, maternity, events, portraits, and brand work across the region.' },
      ]} />
      <CTABand title='Halton&apos;s atelier is yours.' lede='Tell us your town and your story.' primaryHref='/booking' primaryLabel='Reserve Your Date' secondaryHref='/service-areas' secondaryLabel='All Service Areas' />
    </>
  );
}
