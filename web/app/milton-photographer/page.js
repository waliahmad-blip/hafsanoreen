import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Milton Photographer — Kelso, Rattlesnake Point & Escarpment Sessions',
  description: 'Milton\'s cinematic photographer: golden-hour sessions at Kelso Conservation Area, Rattlesnake Point & Hilton Falls. Family, maternity & wedding commissions.',
  alternates: { canonical: '/milton-photographer' },
};

export default function MiltonPhotographerPage() {
  return (
    <>
      <PageHero tag='Milton, ON' title='Milton, Where the Escarpment Glows' lede='Limestone cliffs, thousand-year cedars, and reservoir reflections — Milton is the atelier&apos;s most requested location.' image='/images/corridor/corridor-3.jpg' imageAlt='Milton, Where the Escarpment Glows' />
      <StorySection label='The Escarpment' title='Kelso &amp; Rattlesnake, By Heart'>
        <p>Kelso&apos;s reservoir mirrors the first warm light of evening; Rattlesnake Point&apos;s cliffside cedars frame vows and maternity silhouettes alike. We hold permits knowledge for both conservation areas and schedule sessions to their exact golden windows.</p>
        <p>Autumn in Milton is the atelier&apos;s busiest season — the maple corridors around the escarpment turn brass-and-rose for roughly three weeks. Book early.</p>
      </StorySection>
      <FeatureGrid label='Milton Locations' title='Where We Shoot' items={[
        { title: 'Kelso Conservation Area', body: 'Cliff-and-reservoir panoramas; Hafsa\'s premier warm-autumn golden-hour canvas.' },
        { title: 'Rattlesnake Point', body: 'Ancient cedars and dramatic lookouts for editorial bridal and adventurous couples.' },
        { title: 'Hilton Falls', body: 'Waterfall mist and pine corridors — a quieter, cinematic alternative.' },
        { title: 'Country Heritage Park', body: 'Vintage barns and tractor lanes for rustic family chapters.' },
        { title: 'Milton Fairgrounds', body: 'Open-field light for large family gatherings and events.' },
        { title: 'Permits Handled', body: 'Conservation-area photography permits arranged for you — zero admin on your side.' },
      ]} />
      <CTABand title='Book your Milton session.' lede='Autumn windows sell out first — three weeks of brass light a year.' primaryHref='/booking' primaryLabel='Reserve Your Date' secondaryHref='/portfolio' secondaryLabel='Milton Frames' />
    </>
  );
}
