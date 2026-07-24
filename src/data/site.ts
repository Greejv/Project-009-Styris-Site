/**
 * Single source of truth for site-wide metadata and the business entity.
 *
 * Everything here feeds two consumers:
 *  1. `<SEO />` — titles, canonicals, OpenGraph/Twitter tags.
 *  2. JSON-LD — the Schema.org `@graph` that search engines and LLM-based
 *     answer engines (Perplexity, ChatGPT Search, Gemini, Copilot) parse to
 *     resolve "who is Styris" into a citable entity.
 *
 * Only facts the business can back up belong here. No certifications, no
 * warranties, no opening hours we haven't confirmed.
 */

export const SITE_URL = 'https://styris.sk';

/** Stable @id anchors. Reusing these lets every page point at ONE entity
 *  instead of redeclaring a slightly different business on each URL. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const SITE = {
  url: SITE_URL,
  name: 'Styris',
  /** Registered legal entity behind the Styris brand. */
  legalName: 'Human Slovakia s. r. o.',
  vatId: '53657420',
  locale: 'sk_SK',
  lang: 'sk',
  titleDefault: 'Styris — Kovovýroba na mieru | Schody, brány, zábradlia, pergoly',
  descriptionDefault:
    'Navrhneme, vyrobíme a osadíme kovové schody, brány, zábradlia a pergoly na mieru. Oceľ, nerez aj hliník — vlastná dielňa, Košice a celé Slovensko. Ozveme sa do 48 hodín.',
  /** One-paragraph entity definition. Short, factual, quotable — this is the
   *  sentence an LLM is most likely to lift when asked "what is Styris?". */
  entityDescription:
    'Styris je slovenská kovovýroba so sídlom pri Košiciach. Navrhuje, vyrába a montuje kovové schodiská, brány a ploty, zábradlia a madlá, pergoly a zastrešenia, kovové doplnky na mieru aj väčšie oceľové konštrukcie. Všetko vzniká vo vlastnej dielni z ocele, nerezu a hliníka, s montážou po celom Slovensku.',
  phone: '+421940896866',
  phoneDisplay: '+421 940 896 866',
  email: 'info@styris.sk',
  instagram: 'https://www.instagram.com/styris.sk/',
  address: {
    street: 'Košická 18',
    postalCode: '044 14',
    locality: 'Čaňa',
    region: 'Košický kraj',
    country: 'SK',
  },
  /** Human-readable service area shown in the UI. */
  areaLabel: 'Košice · celé Slovensko',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Styris — kovovýroba na mieru: oceľové schodiská, brány, zábradlia a pergoly',
} as const;

/** Absolute-URL helper. og:image and canonical must never be relative — several
 *  crawlers and every social scraper refuse to resolve relative paths. */
export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).href;

/** Service catalogue, in the order the business leads with it.
 *  `slug` matches a case study under /prace/ so schema, sitemap and nav agree. */
export const SERVICES = [
  { slug: 'schodiska-na-mieru', name: 'Schodiská na mieru' },
  { slug: 'zabradlia-a-madla', name: 'Zábradlia a madlá' },
  { slug: 'kovove-brany-a-ploty', name: 'Kovové brány a ploty' },
  { slug: 'pergoly-a-zastresenia', name: 'Pergoly a zastrešenia' },
  { slug: 'kovove-doplnky', name: 'Kovové doplnky na mieru' },
  { slug: 'priemyselne-konstrukcie', name: 'Veľké a atypické oceľové konštrukcie' },
] as const;

/** Materials the workshop actually works with — a concrete, checkable attribute
 *  set that helps answer engines match "kto robí nerezové zábradlia" queries. */
export const MATERIALS = ['Konštrukčná oceľ', 'Nerez', 'Hliník'] as const;

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  postalCode: SITE.address.postalCode,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  addressCountry: SITE.address.country,
} as const;

/**
 * The Organization node. Typed as `HomeAndConstructionBusiness` (a LocalBusiness
 * subtype), so it satisfies both the Organization and LocalBusiness requirements
 * the brief asks for without declaring two competing entities.
 */
export const organizationSchema = () => ({
  '@type': ['HomeAndConstructionBusiness', 'Organization'],
  '@id': ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: 'Styris kovovýroba',
  description: SITE.entityDescription,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: absoluteUrl('/favicon-512.png'),
    width: 512,
    height: 512,
    caption: SITE.name,
  },
  image: absoluteUrl(SITE.ogImage),
  telephone: SITE.phone,
  email: SITE.email,
  vatID: SITE.vatId,
  address: postalAddress,
  sameAs: [SITE.instagram],
  areaServed: [
    { '@type': 'Country', name: 'Slovensko' },
    { '@type': 'City', name: 'Košice' },
  ],
  knowsLanguage: ['sk', 'en'],
  slogan: 'Kovovýroba na mieru',
  /** What the business offers, one entry per category. The detailed catalogue
   *  lives on the homepage's Service node — no need to repeat it here. */
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: s.name,
      url: absoluteUrl(`/prace/${s.slug}`),
    },
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: 'SK',
    availableLanguage: ['sk'],
  },
});

/** The WebSite node — gives search engines the canonical site name and lets
 *  them attribute every page on the domain to one publisher. */
export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE.name,
  description: SITE.descriptionDefault,
  inLanguage: SITE.lang,
  publisher: { '@id': ORG_ID },
});

export type Crumb = { name: string; path: string };

/** BreadcrumbList for a page. Pass the trail WITHOUT the home entry — added here. */
export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  '@id': `${absoluteUrl(crumbs[crumbs.length - 1]?.path ?? '/')}#breadcrumb`,
  itemListElement: [{ name: 'Domov', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});
