export type Faq = { q: string; a: string };
export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'moncton-airport-taxi',
    name: 'Airport Taxi',
    short: 'Flight-tracked pickups and drop-offs at YQM, plus transfers to Saint John and Halifax airports.',
    icon: 'plane',
    title: 'Moncton Airport Taxi (YQM) – 24/7 Pickups | Taxi Moncton',
    description: 'Moncton airport taxi to and from YQM, plus Halifax (YHZ) and Saint John (YSJ) transfers. Flight-tracked pickups, 24/7. Call or text (506) 797-0087.',
    h1: 'Moncton Airport Taxi – YQM, YHZ & YSJ Transfers',
    lead: 'Reliable rides to and from the Greater Moncton Roméo LeBlanc International Airport, any hour of the day. Book ahead and your driver will be waiting — even if your flight lands late.',
    sections: [
      {
        heading: 'Airport pickups with flight tracking',
        body: 'Give us your flight number when you book and we watch your arrival time, so your driver adjusts for early landings and delays. No need to call from the baggage carousel.',
      },
      {
        heading: 'Transfers to Halifax and Saint John airports',
        body: 'Flying out of Halifax Stanfield (YHZ) or Saint John (YSJ)? We run long-distance airport transfers from Moncton, Dieppe, Riverview, Shediac and Sussex with an upfront price.',
        bullets: ['Greater Moncton Roméo LeBlanc International (YQM)', 'Halifax Stanfield International (YHZ)', 'Saint John Airport (YSJ)'],
      },
      {
        heading: 'Room for luggage and groups',
        body: 'Choose a sedan for solo travellers, or an SUV or van for families, groups and extra luggage. Tell us what you are carrying when you book.',
      },
    ],
    faqs: [
      { q: 'How do I book a taxi from Moncton airport?', a: 'Call or text (506) 797-0087 with your flight number and number of passengers. For early-morning or late-night flights we recommend booking ahead.' },
      { q: 'Do you do trips to Halifax airport?', a: 'Yes. We drive from Moncton and the surrounding area to Halifax Stanfield International (YHZ). From downtown Moncton the fare is $380.75 one way; use our fare calculator for your exact address.' },
      { q: 'What if my flight is delayed?', a: 'Share your flight number when booking and we track your arrival so your driver is there when you land.' },
    ],
    related: ['long-distance-taxi', 'corporate-account', 'chauffeur-service'],
  },
  {
    slug: 'long-distance-taxi',
    name: 'Long Distance Taxi',
    short: 'Upfront-priced trips to Halifax, Saint John, Fredericton, Charlottetown and beyond.',
    icon: 'route',
    title: 'Long Distance Taxi from Moncton | Taxi Moncton',
    description: 'Long-distance taxi from Moncton to Halifax, Saint John, Fredericton, Charlottetown and more. Get an instant quote online or call (506) 797-0087. 24/7.',
    h1: 'Long Distance Taxi from Moncton',
    lead: 'Door-to-door intercity rides across New Brunswick, Nova Scotia and PEI. Get an instant quote with our online fare calculator and book online in the same step, or by phone, text or WhatsApp.',
    sections: [
      {
        heading: 'Popular routes',
        body: 'We regularly drive between Moncton and the major cities of the Maritimes, for business trips, medical appointments, family visits and airport connections.',
        bullets: ['Moncton ⇄ Halifax, NS', 'Moncton ⇄ Saint John, NB', 'Moncton ⇄ Fredericton, NB', 'Moncton ⇄ Charlottetown, PEI', 'Moncton ⇄ Sussex, NB'],
      },
      {
        heading: 'One-way or round trip',
        body: 'Need to get there and back the same day? Ask about round trips with wait time — ideal for appointments in Saint John or Halifax.',
      },
      {
        heading: 'Know the price before you go',
        body: 'Our online fare calculator gives an instant estimate for any address. No hidden fees — the quote you get is the price we discuss with you before the trip.',
      },
    ],
    faqs: [
      { q: 'How much is a taxi from Moncton to Halifax?', a: 'From downtown Moncton it is $429.62 one way to Halifax and $380.75 to Halifax Stanfield airport. Saint John is $262.03, Fredericton $301.19 and Charlottetown $272.31. Enter your exact addresses in our online fare calculator for your price.' },
      { q: 'Can I book a long-distance taxi in advance?', a: 'Yes, and we recommend it. Book by phone, text, WhatsApp or email with your date, time and addresses.' },
      { q: 'Do you go to PEI?', a: 'Yes, we drive to Charlottetown and other destinations on Prince Edward Island.' },
    ],
    related: ['moncton-airport-taxi', 'corporate-account', 'package-delivery'],
  },
  {
    slug: 'chauffeur-service',
    name: 'Chauffeur & Events',
    short: 'Premium rides for weddings, proms, anniversaries, corporate guests and city tours.',
    icon: 'star',
    title: 'Chauffeur Service Moncton – Weddings & Events | Taxi Moncton',
    description: 'Chauffeur service in Moncton for weddings, proms, anniversaries, corporate guests and city tours. Professional drivers, clean vehicles. Call (506) 797-0087.',
    h1: 'Chauffeur & Special Event Transportation in Moncton',
    lead: 'Make the day about the occasion, not the parking. Our professional drivers handle weddings, proms, anniversaries, parties and VIP guests with punctual, polished service.',
    sections: [
      {
        heading: 'Occasions we cover',
        body: 'From the ceremony to the reception and home again, we plan the timing so your group stays on schedule.',
        bullets: ['Weddings & wedding parties', 'Proms & graduations', 'Anniversaries & birthdays', 'Corporate guests & executives', 'Moncton city tours'],
      },
      {
        heading: 'Plan ahead',
        body: 'Event bookings fill up quickly, especially in prom and wedding season. Contact us with your date, number of guests and itinerary for a quote.',
      },
    ],
    faqs: [
      { q: 'Do you offer hourly bookings for events?', a: 'Yes. Tell us your itinerary and how long you need a vehicle and we will quote accordingly.' },
      { q: 'Can you transport a whole wedding party?', a: 'We can arrange multiple vehicles, including vans, for larger groups. Book early for peak dates.' },
    ],
    related: ['corporate-account', 'moncton-airport-taxi', 'long-distance-taxi'],
  },
  {
    slug: 'corporate-account',
    name: 'Corporate Accounts',
    short: 'Monthly billing and dependable rides for your staff, clients and guests.',
    icon: 'briefcase',
    title: 'Corporate Taxi Accounts in Moncton | Taxi Moncton',
    description: 'Open a corporate taxi account with Taxi Moncton. One bill for staff rides, client pickups and airport transfers. Call (506) 797-0087.',
    h1: 'Corporate Taxi Accounts in Moncton',
    lead: 'Give your team and clients dependable transportation without expense-report headaches. A corporate account keeps every ride on one bill.',
    sections: [
      {
        heading: 'Built for businesses',
        body: 'We support offices, hotels, clinics, dealerships and event organizers across Greater Moncton.',
        bullets: ['Consolidated billing', 'Staff commutes & shift work', 'Client & guest pickups', 'Airport and intercity transfers', 'Courier and package runs'],
      },
      {
        heading: 'How to set up an account',
        body: 'Email info@monctontaxi.com or call (506) 797-0087 with your company name and expected ride volume, and we will set up billing that suits you.',
      },
    ],
    faqs: [
      { q: 'Who can use a corporate account?', a: 'Any business, organization or institution that books rides regularly for staff, clients or guests.' },
      { q: 'Can we book rides for guests who are not employees?', a: 'Yes. Authorized bookers can arrange rides for anyone, with the cost billed to your account.' },
    ],
    related: ['moncton-airport-taxi', 'long-distance-taxi', 'package-delivery'],
  },
  {
    slug: 'package-delivery',
    name: 'Package Delivery',
    short: 'Same-day courier across Greater Moncton and to Saint John, Halifax, Fredericton and PEI.',
    icon: 'box',
    title: 'Same-Day Package Delivery Moncton – Courier | Taxi Moncton',
    description: 'Same-day package and courier delivery in Moncton, Dieppe and Riverview, plus Saint John, Halifax, Fredericton and Charlottetown. Call (506) 797-0087.',
    h1: 'Same-Day Package & Courier Delivery in Moncton',
    lead: 'Documents, parcels, forgotten items and urgent parts — delivered directly by our drivers, without the depot delays.',
    sections: [
      {
        heading: 'Where we deliver',
        body: 'Local deliveries across Greater Moncton, plus direct runs to major Maritime cities.',
        bullets: ['Moncton, Dieppe & Riverview', 'Saint John, NB', 'Fredericton, NB (same-day or next-day)', 'Sussex, NB', 'Halifax, NS', 'Charlottetown, PEI'],
      },
      {
        heading: 'How it works',
        body: 'Call or text with the pickup and delivery addresses and a description of the item. A driver collects it and takes it straight to the destination.',
      },
    ],
    faqs: [
      { q: 'Can you deliver on the same day?', a: 'Yes, for most local and many intercity deliveries. Contact us early in the day for long-distance same-day runs.' },
      { q: 'What can you deliver?', a: 'Documents, parcels, keys, small parts and other items that fit safely in a passenger vehicle. Hazardous or illegal items are not accepted.' },
    ],
    related: ['gas-delivery', 'grocery-delivery', 'corporate-account'],
  },
  {
    slug: 'gas-delivery',
    name: 'Gas Delivery',
    short: 'Ran out of fuel? We bring gas to your home, workplace or roadside.',
    icon: 'fuel',
    title: 'Gas Delivery Moncton – Out of Fuel Help 24/7 | Taxi Moncton',
    description: 'Out of gas in Moncton? We deliver fuel to your home, workplace or roadside, 24/7, across Moncton and surrounding areas. Call (506) 797-0087.',
    h1: 'Emergency Gas Delivery in Moncton',
    lead: 'Stuck with an empty tank? Call us and a driver will bring fuel to wherever you are in Moncton and the surrounding area — day or night.',
    sections: [
      {
        heading: 'Fuel where you need it',
        body: 'We deliver to driveways, parking lots, workplaces and safe roadside locations.',
        bullets: ['Available 24/7', 'Moncton, Dieppe, Riverview & nearby', 'Pay by cash or card'],
      },
      {
        heading: 'Stay safe while you wait',
        body: 'If you are on the roadside, turn on your hazard lights and stay in a safe place. Tell us your exact location when you call.',
      },
    ],
    faqs: [
      { q: 'How fast can you deliver gas?', a: 'It depends on your location and driver availability. Call (506) 797-0087 for a current time estimate.' },
    ],
    related: ['package-delivery', 'grocery-delivery', 'long-distance-taxi'],
  },
  {
    slug: 'grocery-delivery',
    name: 'Grocery Delivery',
    short: 'Order from your favourite store — we pick it up and bring it to your door.',
    icon: 'cart',
    title: 'Grocery Delivery Moncton – Store to Door | Taxi Moncton',
    description: 'Grocery pickup and delivery in Moncton, Dieppe and Riverview. Order from your favourite store and our driver brings it to your door. Call (506) 797-0087.',
    h1: 'Grocery Pickup & Delivery in Moncton',
    lead: 'Place your order directly with your preferred grocery store, then let our driver pick it up and deliver it to your door.',
    sections: [
      {
        heading: 'How it works',
        body: 'Order and pay with the store, then call or text us with your pickup details and address. We collect your order and bring it straight to you.',
        bullets: ['Great for seniors and busy families', 'Handy when you are unwell or without a car', 'Works with click-and-collect orders'],
      },
    ],
    faqs: [
      { q: 'Do I pay you for the groceries?', a: 'No — you order and pay the store directly. You pay us only for the delivery.' },
    ],
    related: ['package-delivery', 'gas-delivery', 'corporate-account'],
  },
];

export const localTaxi = {
  name: 'Local Taxi',
  short: 'Fast, 24/7 rides anywhere in Moncton, Dieppe and Riverview.',
  icon: 'car',
  href: '/services',
};

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
