import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'FAQ — Booking, Sessions & Investment',
  description: 'Answers on booking timelines, what to wear, delivery, travel, retainers, and working with Haffu.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <PageHero tag='Questions' title='Everything, Answered' lede='If your question isn&apos;t here, Haffu answers within 60 seconds — any hour.' image='/images/corridor/corridor-3.jpg' imageAlt='Everything, Answered' />
      <FeatureGrid label='The Essentials' title='Before You Book' dark items={[
        { title: 'How far ahead should I book?', body: 'Most clients book 3–6 months ahead; weddings 6–12 months. Fall weekends go first — but ask, last-minute light happens.' },
        { title: 'What should we wear?', body: 'Every confirmed client receives a personalized style guide: soft neutrals, classic silhouettes, textures that photograph like film.' },
        { title: 'How do retainers work?', body: 'A reservation retainer (from $500) locks your date and is 100% credited to your collection. The remainder is due 48h before your session.' },
      ]} />
      <FeatureGrid label='The Details' title='After You Book' dark items={[
        { title: 'When do we see photos?', body: 'Sneak peek within 48 hours; the complete hand-graded gallery in 3–4 weeks — rush delivery available.' },
        { title: 'Do you travel?', body: 'Niagara wine country, Muskoka cottages, and GTA West destinations — boutique travel packages quoted up front.' },
        { title: 'Who is Haffu?', body: 'Hafsa\'s Creative Intelligence: it answers inquiries instantly, books discovery calls, and hands Hafsa every thread that needs her eye.' },
      ]} />
      <CTABand title='Still curious?' lede='Ask anything — Haffu answers instantly, Hafsa personally.' primaryHref='/contact' primaryLabel='Ask Your Question' secondaryHref='/booking' secondaryLabel='Reserve Your Date' />
    </>
  );
}
