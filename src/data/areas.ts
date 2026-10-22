import type { Faq } from './services';

export type Area = {
  slug: string;
  city: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  distance: string;
  highlights: string[];
  landmarks: string[];
  // Unique, city-specific copy so each area page stands on its own (not a templated doorway page).
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: Faq[];
};

export const areas: Area[] = [
  {
    slug: 'taxi-dieppe',
    city: 'Dieppe',
    title: 'Taxi Dieppe NB – 24/7 Cab Service | Taxi Moncton',
    description: 'Need a taxi in Dieppe? Taxi Moncton offers 24/7 local rides, Moncton airport (YQM) transfers and long-distance trips from Dieppe. Call or text (506) 797-0087.',
    h1: 'Taxi Service in Dieppe, NB',
    intro: 'Dieppe sits right next to downtown Moncton and is home to the Greater Moncton Roméo LeBlanc International Airport, so our cars are usually only minutes away. Whether you are heading to work, the airport or across the bridge to Riverview, we pick up anywhere in Dieppe, day or night.',
    distance: 'Minutes from downtown Moncton',
    highlights: ['Fast pickups — the airport is in Dieppe', 'Rides to and from CF Champlain', 'Bilingual service area, English & French'],
    landmarks: ['Greater Moncton Roméo LeBlanc International Airport (YQM)', 'CF Champlain', 'Marché de Dieppe (Dieppe Market)', 'Place 1604', 'Dieppe Boulevard & Paul Street'],
    sections: [
      {
        heading: 'The closest taxi to Moncton airport',
        body: 'Because YQM is in Dieppe, most Dieppe homes and hotels are a short drive from the terminal. That makes us a practical choice for early-morning departures and late arrivals: book ahead with your flight time and we will be at your door or at arrivals when you need us.',
      },
      {
        heading: 'Shopping, markets and nights out',
        body: 'We run regular trips between Dieppe neighbourhoods and CF Champlain, the big-box stores along Dieppe Boulevard, the Saturday Marché de Dieppe and restaurants in downtown Moncton. Heading home with bags or groceries? Ask for an SUV or van when you call.',
      },
      {
        heading: 'Getting to Moncton and Riverview',
        body: 'Dieppe and Moncton run into each other, so a ride to downtown Moncton, the Université de Moncton campus or the city hospitals is usually quick. We also cross the river to Riverview for commutes and family visits.',
      },
    ],
    faqs: [
      { q: 'How long does a taxi take from Dieppe to Moncton airport?', a: 'The airport is in Dieppe, so most trips take only a few minutes. Book ahead for early flights so a driver is ready when you are.' },
      { q: 'Can you take me from Dieppe to CF Champlain or the Dieppe Market?', a: 'Yes. Call or text (506) 797-0087 and we will pick you up anywhere in Dieppe. Ask for a larger vehicle if you will be bringing shopping home.' },
      { q: 'Do you pick up in Dieppe 24/7?', a: 'Yes. Dispatch runs 24 hours a day, 7 days a week, including holidays.' },
      { q: 'How much is a taxi from Dieppe?', a: 'Fares depend on your pickup and drop-off addresses. Use our online fare calculator for an instant price or call us for a quote.' },
    ],
  },
  {
    slug: 'taxi-riverview',
    city: 'Riverview',
    title: 'Taxi Riverview NB – Local & Airport Rides | Taxi Moncton',
    description: 'Book a taxi in Riverview, NB. 24/7 pickups, rides into Moncton, airport transfers and long-distance trips. Call or text Taxi Moncton at (506) 797-0087.',
    h1: 'Taxi Service in Riverview, NB',
    intro: 'Just across the Petitcodiac River from Moncton, Riverview residents rely on us for commutes into the city, medical appointments, nights out and early-morning airport runs. Call or text and a driver will meet you at your door.',
    distance: 'Across the Gunningsville Bridge from downtown Moncton',
    highlights: ['Commutes into Moncton', 'Medical appointment rides', 'Early-morning airport pickups'],
    landmarks: ['Gunningsville Bridge', 'Petitcodiac River causeway', 'Coverdale Road', 'Mill Creek Nature Park', 'Riverview Arts Centre'],
    sections: [
      {
        heading: 'Into Moncton by bridge or causeway',
        body: 'Riverview connects to Moncton by the Gunningsville Bridge into downtown and by the causeway near Coverdale Road. Our drivers pick the faster crossing for your time of day, so a trip to downtown, Main Street or the Avenir Centre is usually short.',
      },
      {
        heading: 'Rides to medical appointments',
        body: 'Many Riverview riders use us to reach The Moncton Hospital, the Dr. Georges-L.-Dumont University Hospital Centre and clinics across the city. Book a return pickup in advance, or call when your appointment ends and we will send the next available car.',
      },
      {
        heading: 'Airport runs without the parking',
        body: 'From Riverview to the Greater Moncton Roméo LeBlanc International Airport is a straightforward drive across the river and through Moncton to Dieppe. Share your flight number and we will time your pickup around it.',
      },
    ],
    faqs: [
      { q: 'How do I get a taxi from Riverview to downtown Moncton?', a: 'Call or text (506) 797-0087 or book online. Downtown Moncton is just across the Gunningsville Bridge, so it is one of our quickest trips.' },
      { q: 'Can you take me from Riverview to The Moncton Hospital?', a: 'Yes. We drive Riverview residents to The Moncton Hospital, the Dumont hospital and clinics every day. Book your return ride in advance if you know your appointment time.' },
      { q: 'How early can I book a Riverview to YQM airport ride?', a: 'Any time. We run 24/7, and we recommend booking the day before for early-morning flights.' },
    ],
  },
  {
    slug: 'taxi-shediac',
    city: 'Shediac',
    title: 'Taxi Shediac NB – Moncton to Shediac Cab | Taxi Moncton',
    description: 'Taxi between Moncton and Shediac, Parlee Beach and Pointe-du-Chêne. 24/7 service, airport transfers and upfront quotes. Call or text (506) 797-0087.',
    h1: 'Taxi to & from Shediac, NB',
    intro: 'Shediac, the Lobster Capital of the World, is a short drive from Moncton along Route 15. We run trips for beach days at Parlee Beach, cottage stays, restaurant nights and airport connections all year round.',
    distance: 'About 25 minutes from Moncton via Route 15',
    highlights: ['Parlee Beach & Pointe-du-Chêne drop-offs', 'Cottage and vacation rental pickups', 'Airport transfers from Shediac'],
    landmarks: ['Parlee Beach Provincial Park', 'Pointe-du-Chêne Wharf', 'Main Street Shediac', 'The Giant Lobster', 'Cap-Pelé & Grande-Digue'],
    sections: [
      {
        heading: 'Summer at Parlee Beach',
        body: 'In July and August, Parlee Beach and Pointe-du-Chêne are some of our busiest destinations. Skip the full parking lots and have us drop you at the beach, then call or text when you are ready to head back to Moncton or your cottage.',
      },
      {
        heading: 'Cottage and vacation-rental arrivals',
        body: 'Flying into Moncton for a week on the Northumberland Strait? We pick you up at YQM and take you straight to your rental in Shediac, Pointe-du-Chêne, Grande-Digue or Cap-Pelé, with room for luggage and beach gear in an SUV or van.',
      },
      {
        heading: 'Lobster dinners without the drive home',
        body: 'Shediac’s restaurants and the summer Lobster Festival are better when nobody has to drive. Book a round trip from Moncton or Dieppe for your group and we will bring everyone home safely.',
      },
    ],
    faqs: [
      { q: 'How long is the taxi ride from Moncton to Shediac?', a: 'About 25 minutes via Route 15, depending on traffic and your exact addresses.' },
      { q: 'Can you pick us up at Moncton airport and drive us to our Shediac cottage?', a: 'Yes. Book ahead with your flight number and the cottage address. Tell us how many passengers and bags so we send the right vehicle.' },
      { q: 'Do you drive to Parlee Beach in summer?', a: 'Yes, every day in season. Call or text (506) 797-0087 for a drop-off and arrange your return pickup the same way.' },
      { q: 'How much is a taxi from Moncton to Shediac?', a: 'Enter your pickup and drop-off in our online fare calculator for an instant price, or call us for a quote.' },
    ],
  },
  {
    slug: 'taxi-sussex',
    city: 'Sussex',
    title: 'Taxi Sussex NB – Long Distance from Moncton | Taxi Moncton',
    description: 'Long-distance taxi between Moncton and Sussex, NB. Upfront quotes, round trips, appointments and airport transfers. Call or text Taxi Moncton (506) 797-0087.',
    h1: 'Taxi Between Moncton & Sussex, NB',
    intro: 'Sussex is on the highway corridor between Moncton and Saint John. We drive Sussex passengers to Moncton for appointments, shopping and flights, and bring Moncton riders to Sussex for work and family visits, with an upfront price before you book.',
    distance: 'About 1 hour from Moncton via Route 2 / Route 1',
    highlights: ['Upfront long-distance pricing', 'Round trips with wait time', 'YQM and Saint John (YSJ) airport runs'],
    landmarks: ['Downtown Sussex', 'Route 1 corridor', 'Sussex Health Centre', 'Atlantic Balloon Fiesta grounds'],
    sections: [
      {
        heading: 'Sussex to Moncton appointments',
        body: 'Specialist appointments, hospital visits and day surgery often mean a trip to Moncton. We offer round trips with wait time so you have a ride home without arranging a second booking, and we can wait or return when you are done.',
      },
      {
        heading: 'Two airports within reach',
        body: 'Sussex sits between Moncton (YQM) and Saint John (YSJ) airports. We drive to either one, so you can choose the flight that suits you best rather than the airport that is easiest to reach.',
      },
      {
        heading: 'Events and family visits',
        body: 'From the Atlantic Balloon Fiesta in September to family gatherings and farm visits around Kings County, we bring Moncton-area riders to Sussex and back with an upfront price.',
      },
    ],
    faqs: [
      { q: 'How long is the taxi ride from Moncton to Sussex?', a: 'About one hour via Route 2 and Route 1, depending on weather and traffic.' },
      { q: 'Can the driver wait for me in Moncton and bring me back to Sussex?', a: 'Yes. Ask for a round trip with wait time when you book and tell us roughly how long your appointment will take.' },
      { q: 'Do you drive from Sussex to Saint John airport?', a: 'Yes. We drive Sussex passengers to both Saint John Airport (YSJ) and Moncton airport (YQM).' },
      { q: 'How much is a taxi from Sussex to Moncton?', a: 'Use our online fare calculator for an instant quote based on your exact addresses, or call (506) 797-0087.' },
    ],
  },
];
