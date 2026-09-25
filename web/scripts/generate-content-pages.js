/**
 * HAFFU WEB — Content Page Generator
 * Reads lib/page-content-*.json and writes app/<route>/page.js files.
 * JSX attributes are escaped as HTML entities; JS expression strings use backslash escapes.
 */
const fs = require('fs');
const path = require('path');

const libDir = path.join(__dirname, '..', 'lib');
const appDir = path.join(__dirname, '..', 'app');

const data = ['page-content-1.json', 'page-content-2.json', 'page-content-3.json']
  .map((f) => JSON.parse(fs.readFileSync(path.join(libDir, f), 'utf8')))
  .reduce((acc, cur) => ({ ...acc, ...cur }), {});

// For JSX attribute string literals: entities only, never backslashes.
function jsxAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&apos;');
}

// For JS string literals (metadata, items arrays): backslash escapes.
function jsStr(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function pageTemplate(route, page) {
  const compName = route.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join('') + 'Page';
  const heroImage = page.hero.image ? " image='" + page.hero.image + "' imageAlt='" + jsxAttr(page.hero.title) + "'" : '';
  const darkLegal = route === 'privacy' || route === 'terms';
  const darkGrid = ['reviews', 'client-portal', 'faq'].includes(route);

  const sectionsJsx = page.sections.map((s) => {
    if (s.type === 'story') {
      const paras = s.paras.map((p) => '        <p>' + p.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</p>').join('\n');
      return '      <StorySection label=\'' + jsxAttr(s.label) + '\' title=\'' + jsxAttr(s.title) + '\'' + (darkLegal ? ' dark' : '') + '>\n' + paras + '\n      </StorySection>';
    }
    const items = s.items.map((i) => '        { title: \'' + jsStr(i.title) + '\', body: \'' + jsStr(i.body) + '\' },').join('\n');
    return '      <FeatureGrid label=\'' + jsxAttr(s.label) + '\' title=\'' + jsxAttr(s.title) + '\'' + (darkGrid ? ' dark' : '') + ' items={[\n' + items + '\n      ]} />';
  }).join('\n');

  return "import { PageHero, StorySection, FeatureGrid, CTABand } from '@/components/PageScaffold';\n\nexport const metadata = {\n  title: '" + jsStr(page.title) + "',\n  description: '" + jsStr(page.description) + "',\n  alternates: { canonical: '/" + route + "' },\n};\n\nexport default function " + compName + "() {\n  return (\n    <>\n      <PageHero tag='" + jsxAttr(page.hero.tag) + "' title='" + jsxAttr(page.hero.title) + "' lede='" + jsxAttr(page.hero.lede) + "'" + heroImage + " />\n" + sectionsJsx + "\n      <CTABand title='" + jsxAttr(page.cta.title) + "' lede='" + jsxAttr(page.cta.lede) + "' primaryHref='" + page.cta.primary[0] + "' primaryLabel='" + jsxAttr(page.cta.primary[1]) + "' secondaryHref='" + page.cta.secondary[0] + "' secondaryLabel='" + jsxAttr(page.cta.secondary[1]) + "' />\n    </>\n  );\n}\n";
}

let written = 0;
for (const [route, page] of Object.entries(data)) {
  const dir = path.join(appDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.js'), pageTemplate(route, page), 'utf8');
  written += 1;
}
console.log('[pages] ' + written + ' content pages generated.');
