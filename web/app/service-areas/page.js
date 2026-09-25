import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Service Areas — Halton, Toronto & Destination Photography',
  description: 'Full service map: Oakville, Burlington, Milton, Halton Hills, Toronto, Niagara & Muskoka. No travel fees inside Halton.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero tag='Where We Work' title='The Service Map' lede='Home range Halton, editorial range Toronto, destination range everywhere golden.' image='/images/hafsa-portrait.jpg' imageAlt='The Service Map' />
      <FeatureGrid label='Coverage' title='Three Rings of Service' items={[
        { title: 'Home Range — Halton', body: 'Oakville, Burlington, Milton, Halton Hills (Georgetown & Acton): zero travel fees, deepest location knowledge.' },
        { title: 'Editorial Range — GTA & Toronto', body: 'Downtown Toronto, Etobicoke, Mississauga, Hamilton, Niagara-on-the-Lake: modest travel built into the quote.' },
        { title: 'Destination Range', body: 'Muskoka cottages, Niagara wine country, Blue Mountain, and beyond — boutique travel packages quoted transparently.' },
        { title: 'Studio Visits', body: '3404 Millicent Avenue, Oakville — consultations, album viewings, and print pickup by appointment.' },
        { title: 'Virtual Planning', body: 'Every commission includes a video planning consultation — light maps, timelines, and wardrobe, from anywhere.' },
        { title: 'Remote-First Products', body: 'The entire atelier shop — presets, AI portraits, restoration, storybooks — ships digitally worldwide.' },
      ]} />
      <CTABand title='Not on the map?' lede='If the light is beautiful there, we will come. Ask.' primaryHref='/contact' primaryLabel='Ask About Your Location' secondaryHref='/booking' secondaryLabel='Reserve Your Date' />
    </>
  );
}
