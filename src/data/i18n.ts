import { BOOK_LABEL } from './business';

export type Lang = 'en' | 'fr';

// English page → its French translation. Base.astro reads this to emit hreflang alternates and
// the header language switch, so every translated pair links to the other automatically.
export const translations: Record<string, string> = {
  '/': '/fr',
  '/moncton-airport-taxi': '/fr/taxi-aeroport-moncton',
  '/long-distance-taxi': '/fr/taxi-longue-distance',
  '/taxi-dieppe': '/fr/taxi-dieppe',
  '/taxi-shediac': '/fr/taxi-shediac',
};

export const alternateOf = (path: string): { lang: Lang; href: string } | undefined => {
  if (translations[path]) return { lang: 'fr', href: translations[path] };
  const en = Object.keys(translations).find((k) => translations[k] === path);
  return en ? { lang: 'en', href: en } : undefined;
};

export const langOf = (path: string): Lang => (path === '/fr' || path.startsWith('/fr/') ? 'fr' : 'en');

export const ui = {
  en: {
    book: BOOK_LABEL,
    call: 'Call',
    callNow: 'Call now',
    textUs: 'Text us',
    textToBook: 'Text to book',
    openMenu: 'Open menu',
    home: 'home',
    switchLabel: 'Français',
    ctaHeading: 'Need a ride? We’re on the road 24/7.',
    ctaText: 'See your fare instantly and book online in seconds — or call or text dispatch any time.',
    faqEyebrow: 'FAQ',
    faqHeading: 'Frequently asked questions',
    faqHelp: 'Can’t find your answer? Call or text dispatch any time.',
  },
  fr: {
    book: 'Réserver',
    call: 'Appeler le',
    callNow: 'Appeler',
    textUs: 'Texto',
    textToBook: 'Réserver par texto',
    openMenu: 'Ouvrir le menu',
    home: 'accueil',
    switchLabel: 'English',
    ctaHeading: 'Besoin d’un taxi? Nous roulons 24 h sur 24.',
    ctaText: 'Obtenez votre tarif instantanément et réservez en ligne en quelques secondes, ou appelez ou textez la répartition à toute heure.',
    faqEyebrow: 'FAQ',
    faqHeading: 'Questions fréquentes',
    faqHelp: 'Vous ne trouvez pas votre réponse? Appelez ou textez-nous à toute heure.',
  },
} as const;

export const frNav = [
  { label: 'Taxi aéroport', href: '/fr/taxi-aeroport-moncton' },
  { label: 'Longue distance', href: '/fr/taxi-longue-distance' },
  { label: 'Taxi Dieppe', href: '/fr/taxi-dieppe' },
  { label: 'Taxi Shediac', href: '/fr/taxi-shediac' },
];
