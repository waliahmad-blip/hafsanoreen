import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Reviews — 5.0 Stars Across 47 Commissions',
  description: 'Read what Halton families and couples say about Hafsa Noreen Photography — 5.0 stars across 47 commissions.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero tag='Kind Words' title='5.0 Across 47 Commissions' lede='We measure our work in returned clients, framed prints, and notes like these.' image='/images/corridor/corridor-1.jpg' imageAlt='5.0 Across 47 Commissions' />
      <FeatureGrid label='Testimonials' title='From The Films' dark items={[
        { title: 'Andrea & Marcus · Oakville', body: 'Hafsa didn\'t just capture our wedding — she captured the whispers, the tears, the joy we didn\'t know anyone saw. Every frame feels like a film still.' },
        { title: 'Priya & Daniel · Milton', body: 'Our maternity gallery made me cry in the best way. She found light in our living room I didn\'t know existed.' },
        { title: 'The Okafor Family · Burlington', body: 'The family session felt like a golden-hour picnic that happened to be photographed perfectly. The kids still ask when we go back.' },
        { title: 'Sarah & James · Halton Hills', body: 'The sneak peek arrived in 48 hours and our families texted non-stop for a week. The album is our most-touched possession.' },
        { title: 'Lena · Toronto', body: 'Professional, invisible when it mattered, and warm the rest of the time. The Distillery District portraits look like movie posters.' },
        { title: 'The Chen Family · Oakville', body: 'Third session with Hafsa in three years. She remembers our kids\' names, their shyness, their jokes. That\'s why we keep coming back.' },
      ]} />
      <CTABand title='Add your chapter to the reviews.' lede='The first step is a conversation.' primaryHref='/contact' primaryLabel='Say Hello' secondaryHref='/booking' secondaryLabel='Reserve Your Date' />
    </>
  );
}
