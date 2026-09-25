import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms for commissions, digital products, licensing, and use of the Hafsa Noreen Photography website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <PageHero tag='Legal' title='Terms of Service' lede='The straightforward fine print.' />
      <StorySection label='The Essentials' title='Commissions &amp; Retainers' dark>
        <p>Session dates are reserved by retainer, credited in full to your collection. Remaining balances are due 48 hours before the session. Rescheduling for weather or illness is always free; cancellations forfeit the retainer, which covers reserved calendar time and preparation.</p>
        <p>All photographs remain the copyright of Hafsa Noreen Photography. Clients receive a personal-use print release with every gallery; commercial and brand usage is licensed separately in writing.</p>
      </StorySection>
      <StorySection label='Digital Products' title='Shop Licensing' dark>
        <p>Presets, LUTs, overlays, prompts, and templates are licensed per single user for personal and client work; resale, redistribution, or sharing of files is prohibited. Digital deliveries are non-refundable once license keys are issued — but if a file fails, we re-issue it, forever.</p>
        <p>AI experiences (portrait sittings, restoration, storybooks) are services with clear per-order scope; delivery timelines are stated at purchase. HAFFU-in-a-Box subscriptions bill monthly and may be cancelled anytime before the next cycle.</p>
      </StorySection>
      <CTABand title='Need clarity?' lede='We would rather explain than assume.' primaryHref='/contact' primaryLabel='Ask The Studio' secondaryHref='/privacy' secondaryLabel='Read Privacy' />
    </>
  );
}
