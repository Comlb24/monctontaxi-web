// Single source of truth for NAP. Every page, component and JSON-LD block reads from here —
// never hard-code the name, address, phone or email anywhere else.

export const SITE_URL = 'https://www.monctontaxi.com';
export const FARE_CALCULATOR_URL = 'https://farecalculator.vercel.app';
// Primary booking action across the site: the fare calculator doubles as the booking form.
export const BOOK_URL = FARE_CALCULATOR_URL;
export const BOOK_LABEL = 'Get fare & book';

export const business = {
  // Must match the Google Business Profile listing name exactly.
  name: 'Taxi Moncton Long Distance',
  legalName: 'Taxi Moncton Long Distance',
  phoneDisplay: '(506) 797-0087',
  phoneE164: '+15067970087',
  email: 'info@monctontaxi.com',
  address: {
    street: '165 Main St',
    city: 'Moncton',
    region: 'NB',
    regionName: 'New Brunswick',
    postalCode: 'E1C 2A1',
    country: 'CA',
  },
  // Approximate coordinates for 165 Main St — confirm against the GBP pin before launch.
  geo: { lat: 46.0878, lng: -64.7782 },
  hoursText: 'Open 24 hours, 7 days a week',
  openingHoursSchema: 'Mo-Su 00:00-23:59',
  priceRange: '$$',
  whatsapp: 'https://wa.me/message/FXJHX2CUK3W2A1',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Taxi+Moncton+Long+Distance+165+Main+St+Moncton+NB+E1C+2A1',
  socials: {
    facebook: 'https://www.facebook.com/supercab0800',
  },
  fleet: ['Sedans', 'SUVs', 'Vans'],
} as const;

export const tel = `tel:${business.phoneE164}`;
export const sms = `sms:${business.phoneE164}`;
export const mailto = `mailto:${business.email}`;
export const addressOneLine = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

export const BUSINESS_ID = `${SITE_URL}/#business`;
