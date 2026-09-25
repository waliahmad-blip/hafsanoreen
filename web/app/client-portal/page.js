import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Client Portal — Your Gallery, Retainer & Session Details',
  description: 'The Hafsa Noreen client portal: session details, retainer receipts, gallery links, and heirloom orders in one place.',
  alternates: { canonical: '/client-portal' },
};

export default function ClientPortalPage() {
  return (
    <>
      <PageHero tag='Client Sanctuary' title='Your Private Portal' lede='Everything about your commission — timeline, retainer, gallery, heirlooms — gathered in one calm place.' image='/images/corridor/corridor-2.jpg' imageAlt='Your Private Portal' />
      <FeatureGrid label='Inside The Portal' title='What Lives Here' dark items={[
        { title: 'Session Timeline', body: 'Countdown to your date, golden-hour call times, and weather-day policy in plain view.' },
        { title: 'Retainer & Receipts', body: 'Your reservation retainer, remaining balance, and Stripe receipts — always current.' },
        { title: 'Gallery Access', body: '48-hour sneak peek and the full hand-graded gallery, private and passcode-protected.' },
        { title: 'Heirloom Orders', body: 'Albums, museum prints, and extra-image packs ordered directly from your gallery.' },
        { title: 'Contracts & Forms', body: 'E-sign your commission agreement and questionnaires without printing anything.' },
        { title: 'Haffu Assistance', body: 'Ask Haffu anything about your booking — timelines, reschedules, print sizing — anytime.' },
      ]} />
      <CTABand title='Clients: check your email link.' lede='Portal links are sent with your booking confirmation. Lost it? Ask Haffu.' primaryHref='/contact' primaryLabel='Request Portal Link' secondaryHref='/faq' secondaryLabel='Read The FAQ' />
    </>
  );
}
