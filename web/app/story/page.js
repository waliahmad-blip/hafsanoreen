import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';
import { STORY_QUOTE, STORY_CHAPTERS, CRAFT_PILLARS, STORY_TESTIMONIALS, PHILOSOPHY, STORY_CTA } from '@/lib/story-content';

export const metadata = {
  title: 'My Story — From a Courtyard in Lahore to the Shores of Lake Ontario',
  description:
    'The story of Hafsa Noreen — from Malir Cantt and Lahore to an acclaimed fine-art photographer in Oakville, Ontario. A story of resilience, love, and light.',
  alternates: { canonical: '/story' },
};

const ARTICLE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hafsa: A Love Story Told in Light and Shadow',
  author: { '@type': 'Person', name: 'Hafsa Noreen' },
  publisher: { '@type': 'PhotographyBusiness', name: 'Hafsa Noreen Photography', url: 'https://hafsanoreen.com' },
  description:
    'The poignant artistic biography of Hafsa Noreen — from Malir Cantt and Lahore to Oakville, Ontario. A story of resilience, love, loss, and the light that never left.',
  url: 'https://hafsanoreen.com/story',
};

export default function StoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />

      <PageHero
        tag='My Story'
        title='A Love Story Told in Light & Shadow'
        lede={STORY_QUOTE}
        image='/images/corridor/corridor-2.jpg'
        imageAlt='A Love Story Told in Light and Shadow'
      />

      {STORY_CHAPTERS.map((chapter) => (
        <StorySection key={chapter.title} label={chapter.label} title={chapter.title} dark={chapter.dark}>
          {chapter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          {chapter.closingQuote && (
            <blockquote className="border-l-2 border-brass pl-5 font-display text-xl font-light italic leading-relaxed text-brass-light">
              {chapter.closingQuote}
            </blockquote>
          )}
        </StorySection>
      ))}

      <FeatureGrid label={CRAFT_PILLARS.label} title={CRAFT_PILLARS.title} items={CRAFT_PILLARS.items} />

      <section aria-labelledby="story-reflections-heading" className="bg-charcoal py-20 text-ivory md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="text-center">
            <p className="section-label !text-brass-light">✦ In Their Words</p>
            <h2 id="story-reflections-heading" className="display-title mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)]">
              Reflections from Families Who Know Our Story
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {STORY_TESTIMONIALS.map((t) => (
              <figure key={t.attribution} className="rounded-sm border border-ivory/10 bg-ivory/[0.04] p-8">
                <div aria-hidden="true" className="font-display text-5xl leading-none text-brass-light">&ldquo;</div>
                <blockquote className="mt-2 font-display text-lg font-light italic leading-relaxed text-ivory/90">{t.quote}</blockquote>
                <figcaption className="mt-5 font-body text-[0.68rem] font-bold uppercase tracking-[0.26em] text-ivory/50">
                  — {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid label={PHILOSOPHY.label} title={PHILOSOPHY.title} items={PHILOSOPHY.items} dark />

      <CTABand
        title={STORY_CTA.title}
        lede={STORY_CTA.lede}
        primaryHref='/booking'
        primaryLabel='Reserve Your Date'
        secondaryHref='/about'
        secondaryLabel='Meet Hafsa'
      />
    </>
  );
}

