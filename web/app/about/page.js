import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';

export const metadata = {
  title: 'About Hafsa — Cinematic Natural-Light Photographer in Halton',
  description: 'Meet Hafsa Noreen: Oakville-based cinematic natural-light photographer serving Oakville, Burlington, Milton & Halton. Vogue & WedLuxe featured. 5.0 stars from 47 commissions.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero tag='The Founder' title='Hafsa Noreen' lede='Rooted in Oakville and serving every corner of Halton, I chase the kind of light that makes ordinary moments look like cinema.' image='/images/hafsa-portrait.jpg' imageAlt='Hafsa Noreen' />
      <StorySection label='My Philosophy' title='Art Is Not What You See, But What You Make Others See'>
        <p>I photograph the way films are made: with patience, with intention, and with an obsession for the exact second the light turns golden. Nothing stiff, nothing staged — just the real choreography of your day, caught mid-breath.</p>
        <p>My studio sits at 3404 Millicent Avenue in Oakville, but my heart shoots across the limestone bluffs of Kelso, the windswept cedars of Rattlesnake Point, the distillery cobbles of Toronto, and every backyard where a family gathers unscripted.</p>
      </StorySection>
      <FeatureGrid label='The Craft' title='How The Atelier Works' items={[
        { title: 'Natural Light Only', body: 'No flash walls, no stiff studio backdrops. I hunt window light, golden hour, and open shade — the light your memories actually lived in.' },
        { title: 'Film-Inspired Colour', body: 'Every gallery is hand-graded in the atelier palette: warm ivory skin tones, deep archival blacks, and the faintest film grain.' },
        { title: 'Haffu, My Creative Intelligence', body: 'My AI studio manager answers inquiries in seconds, books discovery calls, and protects my editing hours — so my full attention stays on your story.' },
        { title: 'Editorial Background', body: 'Featured by Vogue and WedLuxe; trusted for 47 commissions with a 5.0-star average across Google and formal reviews.' },
        { title: 'Heirloom Delivery', body: 'Sneak peek within 48 hours, full gallery in 3–4 weeks, and museum-grade print options that outlive us all.' },
        { title: 'Local To Halton', body: 'Oakville, Burlington, Milton, Halton Hills — and destination commissions across Niagara, Muskoka, and the GTA West.' },
      ]} />
      <CTABand title='Let&apos;s plan your film.' lede='Tell me your date and your story — I reply personally, fast.' primaryHref='/contact' primaryLabel='Begin Your Inquiry' secondaryHref='/portfolio' secondaryLabel='See The Work' />
    </>
  );
}
