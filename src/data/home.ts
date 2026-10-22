import type { Faq } from './services';

export const routes = [
  { to: 'Halifax, NS', note: 'City or Halifax Stanfield (YHZ)', time: '~2.5 hrs' },
  { to: 'Saint John, NB', note: 'City or Saint John Airport (YSJ)', time: '~1.5 hrs' },
  { to: 'Fredericton, NB', note: 'Business, UNB & appointments', time: '~2 hrs' },
  { to: 'Charlottetown, PEI', note: 'Via Confederation Bridge', time: '~2 hrs' },
  { to: 'Shediac, NB', note: 'Parlee Beach & Pointe-du-Chêne', time: '~25 min', href: '/taxi-shediac' },
  { to: 'Sussex, NB', note: 'Appointments & family visits', time: '~1 hr', href: '/taxi-sussex' },
];

// Add real Google reviews here (with the reviewer's name exactly as shown on Google).
// The reviews section stays hidden until this list has entries — never invent reviews.
export const reviews: { name: string; text: string; rating: number }[] = [];
export const GOOGLE_REVIEWS_URL = '';

export const homeFaqs: Faq[] = [
  { q: 'Is Taxi Moncton open 24/7?', a: 'Yes. We dispatch cabs 24 hours a day, 7 days a week, including holidays. Call or text (506) 797-0087 any time.' },
  { q: 'How do I book a taxi in Moncton?', a: 'The easiest way is our online fare calculator: enter your pickup and drop-off, see your price instantly and book in the same step. You can also call or text (506) 797-0087 or message us on WhatsApp.' },
  { q: 'How much is a taxi from Moncton to Halifax?', a: 'The fare depends on your exact pickup and drop-off addresses. Enter them in our online fare calculator for an instant quote, or call us for a price before you book.' },
  { q: 'Do you pick up at Moncton airport (YQM)?', a: 'Yes. We do pickups and drop-offs at Greater Moncton Roméo LeBlanc International Airport. Share your flight number and we track your arrival.' },
  { q: 'Can I book a taxi in advance?', a: 'Yes. We recommend booking ahead for early-morning flights, long-distance trips and events. Call, text or email with your date, time and addresses.' },
  { q: 'Do you have vans for groups or extra luggage?', a: 'Our fleet includes sedans, SUVs and vans. Tell us how many passengers and bags you have when you book and we will send the right vehicle.' },
  { q: 'Which areas do you serve?', a: 'All of Greater Moncton — Moncton, Dieppe and Riverview — plus Shediac, Sussex and long-distance trips to Saint John, Fredericton, Halifax and Charlottetown.' },
];
