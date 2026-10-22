import { business, BUSINESS_ID, SITE_URL } from './business';
import { areas } from './areas';
import type { Faq } from './services';

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['TaxiService', 'LocalBusiness'],
  '@id': BUSINESS_ID,
  name: business.name,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
  hasMap: business.mapsUrl,
  image: `${SITE_URL}/og-image.png`,
  telephone: business.phoneE164,
  email: business.email,
  priceRange: business.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: ['Moncton', ...areas.map((a) => a.city), 'Saint John', 'Fredericton', 'Halifax', 'Charlottetown'].map((name) => ({ '@type': 'City', name })),
  sameAs: Object.values(business.socials),
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: business.name,
  publisher: { '@id': BUSINESS_ID },
};

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumbSchema = (crumbs: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE_URL}${c.href === '/' ? '' : c.href}` })),
});

export const serviceSchema = (name: string, description: string, path: string, city = 'Moncton', inLanguage = 'en-CA') => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Taxi service',
  name,
  description,
  url: `${SITE_URL}${path}`,
  inLanguage,
  provider: { '@id': BUSINESS_ID },
  areaServed: { '@type': 'City', name: city },
});
