import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Oakville Photographer — Cinematic Sessions in Gairloch, Kerr Village & Lakeshore',
  description: 'Oakville\'s cinematic natural-light photographer: Gairloch Gardens, Kerr Village, Lakeshore Woods & Bronte sessions. Family, maternity, wedding & portrait commissions from $450.',
  alternates: { canonical: '/oakville-photographer' },
};

export default function OakvillePhotographerPage() {
  return (
    <>
      <PageHero tag='Oakville, ON' title='Oakville&apos;s Cinematic Photographer' lede='From Gairloch&apos;s lakefront gardens to Bronte Harbour&apos;s golden promenade — your story, shot in the town&apos;s best light.' image='/images/corridor/corridor-1.jpg' imageAlt='Oakville&apos;s Cinematic Photographer' />
      <StorySection label='Home Turf' title='The Studio Is Here — So Is the Light Map'>
        <p>The atelier sits at 3404 Millicent Avenue, minutes from the Oakville locations I know second-by-second: Gairloch Gardens&apos; lake-facing lawn glows two hours before sunset; Kerr Village back alleys give soft editorial texture; Bronte Harbour&apos;s pier catches the last brass light of the day.</p>
        <p>Being local means sessions are scheduled around Oakville&apos;s exact golden windows — and if the light goes moody, we simply slide to the next window at no charge.</p>
      </StorySection>
      <FeatureGrid label='Oakville Locations' title='Where We Shoot' items={[
        { title: 'Gairloch Gardens', body: 'Lake Ontario backdrop, Japanese garden textures, and estate lawns — Oakville\'s signature wedding and family location.' },
        { title: 'Bronte Harbour', body: 'Working marina, boardwalk golden hour, and the lighthouse silhouette for adventurous couples.' },
        { title: 'Lakeshore Woods', body: 'Tall old-growth shade and meadow light — perfect for maternity and family chapters.' },
        { title: 'Kerr Village & Downtown', body: 'Brick, neon, and café-light editorial portraits for brands and personal branding.' },
        { title: 'Coronation Park', body: 'Oak canopy and picnic-table realness — ideal for multigenerational family sessions.' },
        { title: 'Your Home', body: 'In-home lifestyle sessions in Oakville\'s bright family rooms and nurseries.' },
      ]} />
      <CTABand title='Book your Oakville session.' lede='Local studio, local light maps, local advantage.' primaryHref='/booking' primaryLabel='Reserve Your Date' secondaryHref='/portfolio' secondaryLabel='Oakville Frames' />
    </>
  );
}
