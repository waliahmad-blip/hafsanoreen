import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Burlington Photographer — LaSalle Waterfront, Spencer Smith & Downtown',
  description: 'Cinematic photography in Burlington: Spencer Smith Park, LaSalle waterfront, downtown Whaletail alleys & the Escarpment. From $450 CAD.',
  alternates: { canonical: '/burlington-photographer' },
};

export default function BurlingtonPhotographerPage() {
  return (
    <>
      <PageHero tag='Burlington, ON' title='Burlington, In Golden Frame' lede='Pier light, lakeside breezes, and escarpment backroads — Burlington photographs beautifully and we know exactly when.' image='/images/corridor/corridor-2.jpg' imageAlt='Burlington, In Golden Frame' />
      <StorySection label='The Burlington Light' title='Waterfront Gold and Escarpment Green'>
        <p>Burlington gives the atelier two signature canvases: the Spencer Smith and LaSalle waterfront with its wide open sunset sky, and the Niagara Escarpment corridors minutes north where fields turn amber in late September.</p>
        <p>Twenty minutes from the Oakville studio, sessions here get the same hand-graded heirloom treatment — family, maternity, weddings, and downtown editorial portraits included.</p>
      </StorySection>
      <FeatureGrid label='Burlington Locations' title='Where We Shoot' items={[
        { title: 'Spencer Smith Park', body: 'Fountain gardens, pier views, and festival-light evenings for celebration sessions.' },
        { title: 'LaSalle Waterfront', body: 'Long meadows and marina boards — a family favourite with room for kids to run.' },
        { title: 'Downtown Burlington', body: 'Brant Street\'s patios and storefront glow for personal-branding portraits.' },
        { title: 'Hidden Valley & Lowville', body: 'Escarpment fields and heritage churches for cinematic engagement sessions.' },
        { title: 'Beachway Park', body: 'Sailboats, reeds, and sunset water — maternity sessions at their softest.' },
        { title: 'Mount Nemo', body: 'Cliffside cedar lookouts for adventurous couples and elopements.' },
      ]} />
      <CTABand title='Book your Burlington session.' lede='Waterfront weekends fill by late spring.' primaryHref='/booking' primaryLabel='Reserve Your Date' secondaryHref='/portfolio' secondaryLabel='Burlington Frames' />
    </>
  );
}
