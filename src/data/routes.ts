import type { Faq } from './services';

// Rates used by the online fare calculator (farecalculator.vercel.app, Oct 2026):
// fare = max(minimum, base + perKm × driving km); a return trip is twice the one-way fare.
// If the calculator's rates change, update them here (and the dollar amounts written into the route
// titles, descriptions and FAQs below).
export const RATES = { base: 3, perKm: 1.65, minimum: 25, currency: 'CAD' } as const;

export const fareFor = (km: number) => Math.max(RATES.minimum, RATES.base + RATES.perKm * km);
export const money = (n: number) => `$${n.toFixed(2)}`;
export const roundedMoney = (n: number) => `$${Math.round(n)}`;

export type Route = {
  slug: string;
  city: string;
  province: string;
  // Driving distance from downtown Moncton (165 Main St), as measured by the fare calculator.
  km: number;
  time: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  airport?: { name: string; code: string; km: number };
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: Faq[];
};

export const longDistanceRoutes: Route[] = [
  {
    slug: 'moncton-to-halifax-taxi',
    city: 'Halifax',
    province: 'NS',
    km: 258.557,
    time: 'about 2.5 hours',
    title: 'Moncton to Halifax Taxi – $430 One Way | Taxi Moncton',
    description: 'Taxi from Moncton to Halifax: $429.62 one way (258 km), or $380.75 to Halifax Stanfield Airport (YHZ). Door to door, 24/7. Book online or call (506) 797-0087.',
    h1: 'Moncton to Halifax Taxi',
    lead: 'Door-to-door rides from Moncton, Dieppe and Riverview to downtown Halifax, Dartmouth and Halifax Stanfield International Airport. See your exact fare online, then book in the same step.',
    airport: { name: 'Halifax Stanfield International Airport', code: 'YHZ', km: 228.939 },
    sections: [
      {
        heading: 'The route',
        body: 'We take the Trans-Canada east past Sackville and Amherst, then Highway 104 through Truro and Highway 102 into Halifax. It is about 258 km from downtown Moncton to downtown Halifax, and roughly two and a half hours of driving depending on weather and traffic.',
      },
      {
        heading: 'Halifax Stanfield airport (YHZ) transfers',
        body: 'Halifax Stanfield sits beside Highway 102 before you reach the city, so an airport transfer is shorter and cheaper than a ride downtown. Many travellers fly out of YHZ for more direct flights and international connections; we time your pickup so you arrive with plenty of margin, and we pick up from YHZ arrivals for the trip home.',
      },
      {
        heading: 'Common Halifax destinations',
        body: 'We drive Moncton-area riders to Halifax for hospital appointments, university move-ins, cruise departures, business meetings and family visits.',
        bullets: ['QEII Health Sciences Centre & IWK Health Centre', 'Dalhousie, Saint Mary’s & Mount Saint Vincent universities', 'Downtown Halifax & the waterfront', 'Dartmouth & Bedford', 'Halifax Stanfield International Airport (YHZ)'],
      },
      {
        heading: 'Why take a taxi instead of driving',
        body: 'No parking fees at the airport or downtown, no winter driving on the 104 and no one stuck driving home after a long day. For two or more people splitting the fare, a taxi is often comparable to the cost of driving and parking.',
      },
    ],
    faqs: [
      { q: 'How much is a taxi from Moncton to Halifax?', a: 'Our fare calculator prices a one-way trip from downtown Moncton to downtown Halifax at $429.62 (about 258 km). A return trip is $859.24. Your exact price depends on your addresses — enter them in the fare calculator to see it instantly.' },
      { q: 'How much is a taxi from Moncton to Halifax airport?', a: 'A one-way trip from downtown Moncton to Halifax Stanfield International Airport (YHZ) is $380.75 for about 229 km.' },
      { q: 'How long is the taxi ride from Moncton to Halifax?', a: 'About two and a half hours to downtown Halifax, and a little less to Halifax Stanfield airport, depending on weather and traffic.' },
      { q: 'Is the price per person?', a: 'No. The fare is for the vehicle, so friends or family travelling together share one price. Tell us how many passengers and bags you have so we send the right vehicle.' },
      { q: 'Can you pick me up in Halifax and drive me to Moncton?', a: 'Yes. Enter your Halifax pickup and Moncton drop-off in the fare calculator, or call (506) 797-0087 to arrange it. Out-of-town pickups require prepayment.' },
    ],
  },
  {
    slug: 'moncton-to-saint-john-taxi',
    city: 'Saint John',
    province: 'NB',
    km: 156.989,
    time: 'about 1.5 hours',
    title: 'Moncton to Saint John Taxi – $262 One Way | Taxi Moncton',
    description: 'Taxi from Moncton to Saint John: $262.03 one way (157 km), or $253.99 to Saint John Airport (YSJ). Door to door, 24/7. Book online or call (506) 797-0087.',
    h1: 'Moncton to Saint John Taxi',
    lead: 'Direct rides from Greater Moncton to uptown Saint John, the regional hospital, the port and Saint John Airport. See your exact fare online before you book.',
    airport: { name: 'Saint John Airport', code: 'YSJ', km: 152.118 },
    sections: [
      {
        heading: 'The route',
        body: 'We take Route 2 and Route 1 through Sussex down to Saint John — about 157 km from downtown Moncton and roughly an hour and a half on the road.',
      },
      {
        heading: 'Medical appointments and day trips',
        body: 'Many of our Saint John trips are for appointments at the Saint John Regional Hospital. Ask for a round trip with wait time and your driver can wait or come back when you are done, so you are not left looking for a ride home.',
      },
      {
        heading: 'Saint John Airport (YSJ) transfers',
        body: 'Saint John Airport is on Loch Lomond Road on the Moncton side of the city, so an airport transfer is a little shorter than a ride uptown. We drop off for departures and pick up at arrivals.',
      },
      {
        heading: 'Common Saint John destinations',
        body: 'From uptown offices to the cruise terminal, we cover the whole city.',
        bullets: ['Saint John Regional Hospital', 'Uptown Saint John & Market Square', 'Port of Saint John cruise terminal', 'UNB Saint John', 'Saint John–Digby ferry terminal', 'Saint John Airport (YSJ)'],
      },
    ],
    faqs: [
      { q: 'How much is a taxi from Moncton to Saint John?', a: 'Our fare calculator prices a one-way trip from downtown Moncton to Saint John at $262.03 (about 157 km), and $524.06 return. Enter your exact addresses in the fare calculator for your price.' },
      { q: 'How much is a taxi from Moncton to Saint John Airport?', a: 'A one-way trip from downtown Moncton to Saint John Airport (YSJ) is $253.99 for about 152 km.' },
      { q: 'How long does it take to get from Moncton to Saint John by taxi?', a: 'About an hour and a half, depending on weather and traffic.' },
      { q: 'Can the driver wait during my appointment?', a: 'Yes. Book a round trip and tell us roughly how long you need. Waiting beyond the first 15 minutes is charged at $60 per hour, billed proportionally, unless a custom rate is agreed in advance.' },
    ],
  },
  {
    slug: 'moncton-to-fredericton-taxi',
    city: 'Fredericton',
    province: 'NB',
    km: 180.72,
    time: 'about 2 hours',
    title: 'Moncton to Fredericton Taxi – $301 One Way | Taxi Moncton',
    description: 'Taxi from Moncton to Fredericton: $301.19 one way (181 km). Door to door for UNB, hospital, government and airport trips, 24/7. Book online or call (506) 797-0087.',
    h1: 'Moncton to Fredericton Taxi',
    lead: 'Comfortable, direct rides from Greater Moncton to New Brunswick’s capital — for students, appointments, government business and flights. See your exact fare online before you book.',
    sections: [
      {
        heading: 'The route',
        body: 'We take the Trans-Canada Highway (Route 2) west to Fredericton — about 181 km from downtown Moncton and roughly two hours of driving.',
      },
      {
        heading: 'Students and families',
        body: 'Moving in or heading home for the holidays? We drive students to UNB Fredericton and St. Thomas University with room for luggage, boxes and bedding in an SUV or van.',
      },
      {
        heading: 'Common Fredericton destinations',
        body: 'We cover the whole city, both sides of the river.',
        bullets: ['University of New Brunswick & St. Thomas University', 'Dr. Everett Chalmers Regional Hospital', 'Provincial government offices downtown', 'Fredericton International Airport (YFC)', 'Downtown Fredericton & the North Side'],
      },
      {
        heading: 'Business travel',
        body: 'For meetings at the legislature or government departments, a taxi lets you work on the way and arrive without hunting for parking. Corporate accounts can be billed monthly.',
      },
    ],
    faqs: [
      { q: 'How much is a taxi from Moncton to Fredericton?', a: 'Our fare calculator prices a one-way trip from downtown Moncton to Fredericton at $301.19 (about 181 km), and $602.38 return. Enter your exact addresses in the fare calculator for your price.' },
      { q: 'How long is the taxi ride from Moncton to Fredericton?', a: 'About two hours on the Trans-Canada Highway, depending on weather and traffic.' },
      { q: 'Do you drive to Fredericton airport?', a: 'Yes. We drive to Fredericton International Airport (YFC) as well as downtown Fredericton and the universities.' },
      { q: 'Can I book a Moncton to Fredericton taxi in advance?', a: 'Yes, and we recommend it. Book online with the fare calculator, or call, text or WhatsApp (506) 797-0087 with your date, time and addresses.' },
    ],
  },
  {
    slug: 'moncton-to-charlottetown-taxi',
    city: 'Charlottetown',
    province: 'PEI',
    km: 163.218,
    time: 'about 1 hour 45 minutes',
    title: 'Moncton to Charlottetown Taxi – $272 One Way | Taxi Moncton',
    description: 'Taxi from Moncton to Charlottetown, PEI: $272.31 one way (163 km) over the Confederation Bridge. Door to door, 24/7. Book online or call (506) 797-0087.',
    h1: 'Moncton to Charlottetown Taxi',
    lead: 'Door-to-door rides from Greater Moncton across the Confederation Bridge to Charlottetown and the rest of Prince Edward Island. See your exact fare online before you book.',
    sections: [
      {
        heading: 'The route',
        body: 'We take Route 15 and Route 16 to Cape Jourimain, cross the 12.9 km Confederation Bridge to Borden-Carleton, then follow the Trans-Canada into Charlottetown — about 163 km from downtown Moncton and roughly an hour and 45 minutes.',
      },
      {
        heading: 'About the bridge toll',
        body: 'The Confederation Bridge toll is collected only when leaving the Island, so there is no toll on the way to Charlottetown. Online fares are estimates that do not include tolls; if you are booking a return trip, ask us about the toll when you book.',
      },
      {
        heading: 'Common PEI destinations',
        body: 'Charlottetown is our most popular Island destination, and we drive anywhere else on PEI on request.',
        bullets: ['Downtown Charlottetown & the waterfront', 'Queen Elizabeth Hospital', 'University of Prince Edward Island (UPEI)', 'Charlottetown Airport (YYG)', 'Summerside, Cavendish and other PEI communities'],
      },
      {
        heading: 'Flying from Moncton instead',
        body: 'Islanders often fly out of Moncton (YQM) for more flight choices. We run the trip in both directions: Charlottetown to the Moncton airport, and YQM arrivals back to the Island.',
      },
    ],
    faqs: [
      { q: 'How much is a taxi from Moncton to Charlottetown?', a: 'Our fare calculator prices a one-way trip from downtown Moncton to Charlottetown at $272.31 (about 163 km), and $544.62 return. Enter your exact addresses in the fare calculator for your price.' },
      { q: 'Is the Confederation Bridge toll included?', a: 'Online fares are estimates and do not include tolls. The bridge toll is only charged when leaving PEI, so a one-way trip to Charlottetown has no toll. Ask us about it when booking a return trip.' },
      { q: 'How long is the taxi ride from Moncton to Charlottetown?', a: 'About an hour and 45 minutes, including the bridge crossing, depending on weather and traffic.' },
      { q: 'Can you pick me up in Charlottetown and take me to Moncton airport?', a: 'Yes. Book ahead with your flight time and pickup address. Out-of-town pickups require prepayment.' },
    ],
  },
];
