import type { Faq } from './services';
import { fareFor, longDistanceRoutes } from './routes';

const route = (slug: string) => {
  const r = longDistanceRoutes.find((x) => x.slug === slug)!;
  return { href: `/${r.slug}`, fare: fareFor(r.km) };
};

// `fare` is the one-way price from downtown Moncton (see src/data/routes.ts); Shediac and Sussex
// vary more with the exact address, so they link to their area pages without a fixed price.
export const routes: { to: string; note: string; time: string; href: string; fare?: number }[] = [
  { to: 'Halifax, NS', note: 'City or Halifax Stanfield (YHZ)', time: '~2.5 hrs', ...route('moncton-to-halifax-taxi') },
  { to: 'Saint John, NB', note: 'City or Saint John Airport (YSJ)', time: '~1.5 hrs', ...route('moncton-to-saint-john-taxi') },
  { to: 'Fredericton, NB', note: 'Business, UNB & appointments', time: '~2 hrs', ...route('moncton-to-fredericton-taxi') },
  { to: 'Charlottetown, PEI', note: 'Via Confederation Bridge', time: '~1.75 hrs', ...route('moncton-to-charlottetown-taxi') },
  { to: 'Shediac, NB', note: 'Parlee Beach & Pointe-du-Chêne', time: '~25 min', href: '/taxi-shediac' },
  { to: 'Sussex, NB', note: 'Appointments & family visits', time: '~1 hr', href: '/taxi-sussex' },
];

// Add real Google reviews here (with the reviewer's name exactly as shown on Google).
// The reviews section stays hidden until this list has entries — never invent reviews.
// Copied verbatim from the Google Business Profile (Oct 2026). Skip any review that names the old
// "Super Cab" brand — scripts/check-nap.mjs fails the build on it.
export const reviews: { name: string; text: string; rating: number }[] = [
  { name: 'Emily Deiter', rating: 5, text: 'What an organized and professional company! If I could give more stars, I would. I reached out to prearrange a taxi to get from the airport to Miramichi. I unfortunately had three flight delays and they handled the constant change with grace. They were there and waiting for me once I arrived.' },
  { name: 'Pamela Riddell', rating: 5, text: 'We called from our aircraft after being diverted to Moncton and asked for a vehicle for 5 of us to share to the Saint John Airport. Our driver was fantastic! Accommodating, and a safe driver too! The fare was lower than the guy already parked at the airport from another company, as well.' },
  { name: 'Krystle Ford', rating: 5, text: 'We were pulling a camper trailer for the first time and didnt relize how much, much more the gas goes and we ran out of gas :/ We called and they were very helpful getting our location and then they very promptly brought us gas and even put the gas in for us. They were very friendly on the phone and in person.' },
  { name: 'Jeannine LeBlanc', rating: 5, text: 'The driver was very courteous and nice. I am a senior and had a problem with walking. He came to the door to escort me to the car. Opened the car door like a gentleman. He made sure I was comfortable. … His car was always clean and inviting.' },
  { name: 'James Turner', rating: 5, text: 'First time I’ve used these these guys, but it won’t be the last. The service was excellent. The driver showed up on time, was very polite and helpful loading gear, was really interesting to talk to.' },
  { name: 'Jenny C', rating: 5, text: 'If needed my family would go with them again. They were accommodating, understanding and good company. Child seat was also available.' },
];
// Overall rating shown on the Google Business Profile. Update occasionally; never mark it up as
// AggregateRating schema (Google ignores self-hosted ratings for LocalBusiness).
export const GOOGLE_RATING = { score: 4.9, count: 135 };
export const GOOGLE_REVIEWS_URL = 'https://share.google/LFdKrL89FjvW5z6s1';

export const homeFaqs: Faq[] = [
  { q: 'Is Taxi Moncton open 24/7?', a: 'Yes. We dispatch cabs 24 hours a day, 7 days a week, including holidays. Call or text (506) 797-0087 any time.' },
  { q: 'How do I book a taxi in Moncton?', a: 'The easiest way is our online fare calculator: enter your pickup and drop-off, see your price instantly and book in the same step. You can also call or text (506) 797-0087 or message us on WhatsApp.' },
  { q: 'How much is a taxi from Moncton to Halifax?', a: 'About $429.62 one way from downtown Moncton to downtown Halifax, or $380.75 to Halifax Stanfield airport (YHZ). The fare is for the whole vehicle, not per person. Enter your exact addresses in our online fare calculator for your price.' },
  { q: 'Do you pick up at Moncton airport (YQM)?', a: 'Yes. We do pickups and drop-offs at Greater Moncton Roméo LeBlanc International Airport. Share your flight number and we track your arrival.' },
  { q: 'Can I book a taxi in advance?', a: 'Yes. We recommend booking ahead for early-morning flights, long-distance trips and events. Call, text or email with your date, time and addresses.' },
  { q: 'Do you have vans for groups or extra luggage?', a: 'Our fleet includes sedans, SUVs and vans. Tell us how many passengers and bags you have when you book and we will send the right vehicle.' },
  { q: 'Which areas do you serve?', a: 'All of Greater Moncton — Moncton, Dieppe and Riverview — plus Shediac, Sussex and long-distance trips to Saint John, Fredericton, Halifax and Charlottetown.' },
];
