import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Hafsa Noreen Photography collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero tag='Legal' title='Privacy Policy' lede='Plain-language privacy for clients, shoppers, and visitors.' />
      <StorySection label='Last Updated' title='January 2026' dark>
        <p>We collect only what we need to serve you: contact details you provide in forms, commission and purchase records, and standard analytics about how the site is used. Payment card data is processed exclusively by Stripe and never touches our servers.</p>
        <p>Your photographs are private by default: galleries are passcode-protected links, images are never sold, and model or brand usage only ever happens with written permission. Email addresses are used for delivery and studio correspondence only — never sold, never bulk-spammed, unsubscribe anytime.</p>
        <p>You may request a copy, correction, or deletion of your personal data at any time by emailing privacy@hafsanoreen.com. We respond within 30 days, in line with PIPEDA and Ontario privacy practice.</p>
      </StorySection>
      <CTABand title='Questions about your data?' lede='privacy@hafsanoreen.com — a human answers.' primaryHref='/contact' primaryLabel='Contact The Studio' secondaryHref='/terms' secondaryLabel='Read Terms' />
    </>
  );
}
