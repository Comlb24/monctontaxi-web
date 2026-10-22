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
};

export const areas: Area[] = [
  {
    slug: 'taxi-dieppe',
    city: 'Dieppe',
    title: 'Taxi Dieppe NB – 24/7 Cab Service | Taxi Moncton',
    description: 'Need a taxi in Dieppe? Taxi Moncton offers 24/7 local rides, Moncton airport (YQM) transfers and long-distance trips from Dieppe. Call or text (506) 797-0087.',
    h1: 'Taxi Service in Dieppe, NB',
    intro: 'Dieppe sits right next to downtown Moncton and the Greater Moncton Roméo LeBlanc International Airport, so our cars are usually only minutes away. Whether you are heading to work, the airport or across the bridge to Riverview, we pick up anywhere in Dieppe, day or night.',
    distance: 'Minutes from downtown Moncton',
    highlights: ['Fast pickups — Dieppe borders the airport', 'Rides to and from Champlain Place', 'Bilingual service area, English & French'],
    landmarks: ['Greater Moncton Roméo LeBlanc International Airport (YQM)', 'CF Champlain', 'Dieppe Boulevard'],
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
    landmarks: ['Gunningsville Bridge', 'Coverdale Road', 'Mill Creek Nature Park'],
  },
  {
    slug: 'taxi-shediac',
    city: 'Shediac',
    title: 'Taxi Shediac NB – Moncton to Shediac Cab | Taxi Moncton',
    description: 'Taxi between Moncton and Shediac, Parlee Beach and Pointe-du-Chêne. 24/7 service, airport transfers and flat-rate quotes. Call or text (506) 797-0087.',
    h1: 'Taxi to & from Shediac, NB',
    intro: 'Shediac, the Lobster Capital of the World, is a short drive from Moncton along Route 15. We run trips for beach days at Parlee Beach, cottage stays, restaurant nights and airport connections all year round.',
    distance: 'About 25 minutes from Moncton via Route 15',
    highlights: ['Parlee Beach & Pointe-du-Chêne drop-offs', 'Cottage and vacation rental pickups', 'Airport transfers from Shediac'],
    landmarks: ['Parlee Beach Provincial Park', 'Pointe-du-Chêne Wharf', 'Main Street Shediac'],
  },
  {
    slug: 'taxi-sussex',
    city: 'Sussex',
    title: 'Taxi Sussex NB – Long Distance from Moncton | Taxi Moncton',
    description: 'Long-distance taxi between Moncton and Sussex, NB. Upfront quotes, round trips, appointments and airport transfers. Call or text Taxi Moncton (506) 797-0087.',
    h1: 'Taxi Between Moncton & Sussex, NB',
    intro: 'Sussex is on the Route 1 corridor between Moncton and Saint John. We drive Sussex passengers to Moncton for appointments, shopping and flights, and bring Moncton riders to Sussex for work and family visits, with an upfront price before you book.',
    distance: 'About 1 hour from Moncton via Route 2 / Route 1',
    highlights: ['Upfront long-distance pricing', 'Round trips with wait time', 'YQM and Saint John (YSJ) airport runs'],
    landmarks: ['Downtown Sussex', 'Route 1 corridor', 'Sussex Health Centre'],
  },
];
