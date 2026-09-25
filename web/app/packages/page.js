import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'Photography Packages & Investment — Oakville & Halton',
  description: 'Transparent investment: Portrait $450, Family & Maternity $650, Event $1,200, Wedding $3,800, Signature $6,500 CAD + HST. Add-ons: reel, album, extra hour.',
  alternates: { canonical: '/packages' },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero tag='Investment' title='Collections &amp; Investment' lede='Five collections, one standard: cinematic natural light, hand-graded frames, heirloom delivery.' image='/images/corridor/corridor-6.jpg' imageAlt='Collections &amp; Investment' />
      <FeatureGrid label='The Collections' title='From $450 to $6,500 CAD' items={[
        { title: 'The Portrait Atelier — $450', body: '90 minutes, 1 location, 25 hand-graded frames. Headshots, personal branding, and just-because editorial.' },
        { title: 'The Family & Maternity — $650', body: '2 hours at home or on location, 40 frames, 48h sneak peek, wardrobe styling guide.' },
        { title: 'The Event Chapter — $1,200', body: '4 hours of celebration coverage, 200+ frames, same-week delivery on request.' },
        { title: 'The Wedding Heirloom — $3,800', body: '8 hours, 400+ frames, planning consultation, 48h sneak peek. The one they\'ll rewatch at anniversaries.' },
        { title: 'The Signature Commission — $6,500', body: 'Full-day coverage, second master shooter, 800+ frames, archival fine-art album, and 4K cinematic reel.' },
        { title: 'Every Collection Includes', body: 'Private gallery delivery, print-release, 13% Ontario HST remittance handled transparently, and my personal attention end to end.' },
      ]} />
      <StorySection label='Bespoke Enhancements' title='Add-Ons &amp; Heirlooms'>
        <p>4K Cinematic Highlight Reel +$400 · Fine-Art Layflat Album from +$600 · Rush 5-Day Delivery +$200 · Extra Coverage Hour +$250. Destination commissions across Niagara, Muskoka, and beyond are quoted with travel built in — no surprises.</p>
        <p>Every date is locked with a reservation retainer — 100% credited toward your collection, remainder due 48 hours before your session. Use the live customizer on the home page to price your exact commission in seconds.</p>
      </StorySection>
      <CTABand title='Design your commission.' lede='Build it live, lock it with a retainer, and start counting down.' primaryHref='/#customizer' primaryLabel='Open The Customizer' secondaryHref='/contact' secondaryLabel='Ask A Question' />
    </>
  );
}
