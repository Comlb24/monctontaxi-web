// French (fr-CA) pages under /fr. Each one maps to its English original in src/data/i18n.ts.
import type { Faq } from './services';

export type FrPage = {
  slug: string;
  name: string;
  city?: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  badge?: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: Faq[];
};

export const frPages: FrPage[] = [
  {
    slug: 'taxi-aeroport-moncton',
    name: 'Taxi aéroport',
    title: 'Taxi aéroport de Moncton (YQM) – 24 h/24 | Taxi Moncton',
    description: 'Taxi pour l’aéroport de Moncton (YQM), ainsi que vers Halifax (YHZ) et Saint John (YSJ). Suivi des vols, service 24 h/24. Appelez ou textez le (506) 797-0087.',
    h1: 'Taxi aéroport de Moncton – YQM, YHZ et YSJ',
    lead: 'Des trajets fiables vers et depuis l’aéroport international Roméo-LeBlanc du Grand Moncton, à toute heure du jour ou de la nuit. Réservez à l’avance et votre chauffeur vous attendra, même si votre vol arrive en retard.',
    sections: [
      {
        heading: 'Prise en charge avec suivi de vol',
        body: 'Donnez-nous votre numéro de vol lors de la réservation et nous suivons votre heure d’arrivée. Votre chauffeur s’ajuste aux arrivées hâtives comme aux retards : inutile de nous appeler depuis le carrousel à bagages.',
      },
      {
        heading: 'Transferts vers les aéroports de Halifax et de Saint John',
        body: 'Vous partez de Halifax Stanfield (YHZ) ou de Saint John (YSJ)? Nous assurons les transferts longue distance depuis Moncton, Dieppe, Riverview, Shediac et Sussex, avec un prix connu d’avance.',
        bullets: ['Aéroport international Roméo-LeBlanc du Grand Moncton (YQM)', 'Aéroport international Stanfield de Halifax (YHZ)', 'Aéroport de Saint John (YSJ)'],
      },
      {
        heading: 'De la place pour les bagages et les groupes',
        body: 'Choisissez une berline pour voyager seul ou à deux, ou un VUS ou une fourgonnette pour les familles, les groupes et les bagages supplémentaires. Dites-nous ce que vous transportez au moment de réserver.',
      },
    ],
    faqs: [
      { q: 'Comment réserver un taxi à l’aéroport de Moncton?', a: 'Appelez ou textez le (506) 797-0087 avec votre numéro de vol et le nombre de passagers, ou réservez en ligne avec notre calculateur de tarif. Pour les vols très tôt ou très tard, réservez à l’avance.' },
      { q: 'Faites-vous des trajets vers l’aéroport de Halifax?', a: 'Oui. Nous conduisons de Moncton et des environs jusqu’à l’aéroport Stanfield de Halifax (YHZ). Depuis le centre-ville de Moncton, le tarif est de 380,75 $ l’aller simple. Utilisez notre calculateur de tarif pour votre adresse exacte.' },
      { q: 'Que se passe-t-il si mon vol est retardé?', a: 'Donnez-nous votre numéro de vol à la réservation : nous suivons votre arrivée pour que le chauffeur soit là quand vous atterrissez.' },
    ],
  },
  {
    slug: 'taxi-longue-distance',
    name: 'Taxi longue distance',
    title: 'Taxi longue distance depuis Moncton | Taxi Moncton',
    description: 'Taxi longue distance de Moncton vers Halifax, Saint John, Fredericton, Charlottetown et plus. Prix instantané en ligne ou au (506) 797-0087. Service 24 h/24.',
    h1: 'Taxi longue distance depuis Moncton',
    lead: 'Des trajets interurbains de porte à porte au Nouveau-Brunswick, en Nouvelle-Écosse et à l’Île-du-Prince-Édouard. Obtenez un prix instantané avec notre calculateur de tarif et réservez en ligne du même coup, ou par téléphone, texto ou WhatsApp.',
    sections: [
      {
        heading: 'Trajets populaires',
        body: 'Nous faisons régulièrement la route entre Moncton et les grandes villes des Maritimes, pour les voyages d’affaires, les rendez-vous médicaux, les visites familiales et les correspondances aériennes.',
        bullets: ['Moncton ⇄ Halifax (N.-É.)', 'Moncton ⇄ Saint John (N.-B.)', 'Moncton ⇄ Fredericton (N.-B.)', 'Moncton ⇄ Charlottetown (Î.-P.-É.)', 'Moncton ⇄ Sussex (N.-B.)'],
      },
      {
        heading: 'Aller simple ou aller-retour',
        body: 'Besoin de faire l’aller-retour dans la même journée? Demandez un aller-retour avec temps d’attente, idéal pour un rendez-vous à Saint John ou à Halifax.',
      },
      {
        heading: 'Connaître le prix avant de partir',
        body: 'Le tarif est de 3 $ plus 1,65 $ par kilomètre de route, avec un minimum de 25 $; un aller-retour coûte le double. Notre calculateur de tarif en ligne donne un prix instantané pour n’importe quelle adresse. Aucuns frais cachés.',
        bullets: ['Moncton → Halifax : 429,62 $', 'Moncton → aéroport de Halifax (YHZ) : 380,75 $', 'Moncton → Fredericton : 301,19 $', 'Moncton → Charlottetown : 272,31 $', 'Moncton → Saint John : 262,03 $', 'Moncton → aéroport de Saint John (YSJ) : 253,99 $'],
      },
    ],
    faqs: [
      { q: 'Combien coûte un taxi de Moncton à Halifax?', a: 'Depuis le centre-ville de Moncton : 429,62 $ l’aller simple jusqu’à Halifax et 380,75 $ jusqu’à l’aéroport Stanfield. Saint John coûte 262,03 $, Fredericton 301,19 $ et Charlottetown 272,31 $. Le tarif est par véhicule. Entrez vos adresses exactes dans notre calculateur pour votre prix.' },
      { q: 'Puis-je réserver un taxi longue distance à l’avance?', a: 'Oui, et nous le recommandons. Réservez par téléphone, texto, WhatsApp ou courriel en indiquant la date, l’heure et les adresses.' },
      { q: 'Allez-vous à l’Île-du-Prince-Édouard?', a: 'Oui, nous conduisons à Charlottetown et ailleurs à l’Î.-P.-É. par le pont de la Confédération.' },
    ],
  },
  {
    slug: 'taxi-dieppe',
    name: 'Taxi Dieppe',
    city: 'Dieppe',
    title: 'Taxi Dieppe N.-B. – Service 24 h/24 | Taxi Moncton',
    description: 'Besoin d’un taxi à Dieppe? Taxi Moncton offre des trajets locaux 24 h/24, des transferts vers l’aéroport de Moncton (YQM) et des trajets longue distance. (506) 797-0087.',
    h1: 'Service de taxi à Dieppe (N.-B.)',
    lead: 'Dieppe touche au centre-ville de Moncton et abrite l’aéroport international Roméo-LeBlanc du Grand Moncton : nos voitures sont donc généralement à quelques minutes. Pour le travail, l’aéroport ou une visite à Riverview, nous vous prenons partout à Dieppe, jour et nuit.',
    badge: 'À quelques minutes du centre-ville de Moncton',
    sections: [
      {
        heading: 'Le taxi le plus proche de l’aéroport de Moncton',
        body: 'Comme l’aéroport YQM se trouve à Dieppe, la plupart des résidences et hôtels de Dieppe sont à quelques minutes du terminal. Pratique pour les départs très tôt et les arrivées tardives : réservez avec l’heure de votre vol et nous serons à votre porte ou aux arrivées au bon moment.',
      },
      {
        heading: 'Magasinage, marché et sorties',
        body: 'Nous faisons régulièrement la navette entre les quartiers de Dieppe et le CF Champlain, les commerces du boulevard Dieppe, le Marché de Dieppe le samedi et les restaurants du centre-ville de Moncton. Vous revenez avec des sacs ou l’épicerie? Demandez un VUS ou une fourgonnette.',
      },
      {
        heading: 'Vers Moncton et Riverview',
        body: 'Dieppe et Moncton se touchent : un trajet vers le centre-ville de Moncton, le campus de l’Université de Moncton ou les hôpitaux est généralement rapide. Nous traversons aussi la rivière jusqu’à Riverview pour le travail et les visites familiales.',
        bullets: ['Aéroport international Roméo-LeBlanc du Grand Moncton (YQM)', 'CF Champlain', 'Marché de Dieppe', 'Place 1604', 'Boulevard Dieppe et rue Paul'],
      },
    ],
    faqs: [
      { q: 'Combien de temps pour aller de Dieppe à l’aéroport de Moncton en taxi?', a: 'L’aéroport est à Dieppe : la plupart des trajets ne prennent que quelques minutes. Réservez à l’avance pour les vols matinaux.' },
      { q: 'Pouvez-vous m’amener au CF Champlain ou au Marché de Dieppe?', a: 'Oui. Appelez ou textez le (506) 797-0087 et nous vous prenons partout à Dieppe. Demandez un véhicule plus grand si vous rapportez des achats.' },
      { q: 'Offrez-vous le service à Dieppe 24 h/24?', a: 'Oui. La répartition fonctionne 24 heures sur 24, 7 jours sur 7, jours fériés compris.' },
      { q: 'Combien coûte un taxi à Dieppe?', a: 'Le tarif dépend de vos adresses de départ et d’arrivée. Utilisez notre calculateur de tarif en ligne pour un prix instantané, ou appelez-nous.' },
    ],
  },
  {
    slug: 'taxi-shediac',
    name: 'Taxi Shediac',
    city: 'Shediac',
    title: 'Taxi Shediac N.-B. – Moncton à Shediac | Taxi Moncton',
    description: 'Taxi entre Moncton et Shediac, la plage Parlee et Pointe-du-Chêne. Service 24 h/24, transferts vers l’aéroport et prix connu d’avance. (506) 797-0087.',
    h1: 'Taxi vers et depuis Shediac (N.-B.)',
    lead: 'Shediac, capitale mondiale du homard, est à courte distance de Moncton par la route 15. Nous assurons les trajets pour les journées à la plage Parlee, les séjours au chalet, les soupers au restaurant et les correspondances aériennes, toute l’année.',
    badge: 'Environ 25 minutes de Moncton par la route 15',
    sections: [
      {
        heading: 'L’été à la plage Parlee',
        body: 'En juillet et en août, la plage Parlee et Pointe-du-Chêne figurent parmi nos destinations les plus populaires. Évitez les stationnements pleins : nous vous déposons à la plage, puis vous nous appelez ou textez quand vous êtes prêts à rentrer à Moncton ou au chalet.',
      },
      {
        heading: 'Arrivée au chalet ou à la location de vacances',
        body: 'Vous arrivez par avion à Moncton pour une semaine sur le détroit de Northumberland? Nous vous prenons à l’aéroport YQM et vous conduisons directement à votre location à Shediac, Pointe-du-Chêne, Grande-Digue ou Cap-Pelé, avec de la place pour les bagages dans un VUS ou une fourgonnette.',
      },
      {
        heading: 'Un souper de homard sans avoir à conduire',
        body: 'Les restaurants de Shediac et le Festival du homard en été sont encore meilleurs quand personne n’a à conduire. Réservez un aller-retour depuis Moncton ou Dieppe pour votre groupe et nous ramenons tout le monde en sécurité.',
        bullets: ['Parc provincial de la Plage-Parlee', 'Quai de Pointe-du-Chêne', 'Rue Main, Shediac', 'Le homard géant', 'Cap-Pelé et Grande-Digue'],
      },
    ],
    faqs: [
      { q: 'Combien de temps dure le trajet en taxi de Moncton à Shediac?', a: 'Environ 25 minutes par la route 15, selon la circulation et vos adresses exactes.' },
      { q: 'Pouvez-vous nous prendre à l’aéroport de Moncton et nous conduire au chalet à Shediac?', a: 'Oui. Réservez à l’avance avec votre numéro de vol et l’adresse du chalet, en précisant le nombre de passagers et de bagages.' },
      { q: 'Allez-vous à la plage Parlee l’été?', a: 'Oui, tous les jours en saison. Appelez ou textez le (506) 797-0087 pour l’aller et le retour.' },
      { q: 'Combien coûte un taxi de Moncton à Shediac?', a: 'Entrez vos adresses dans notre calculateur de tarif en ligne pour un prix instantané, ou appelez-nous.' },
    ],
  },
];

export const frHomeFaqs: Faq[] = [
  { q: 'Taxi Moncton est-il ouvert 24 h/24?', a: 'Oui. Nous répartissons les taxis 24 heures sur 24, 7 jours sur 7, jours fériés compris. Appelez ou textez le (506) 797-0087 à toute heure.' },
  { q: 'Comment réserver un taxi à Moncton?', a: 'Le plus simple est notre calculateur de tarif en ligne : entrez votre départ et votre destination, voyez votre prix instantanément et réservez du même coup. Vous pouvez aussi appeler ou texter le (506) 797-0087, ou nous écrire sur WhatsApp.' },
  { q: 'Desservez-vous l’aéroport de Moncton (YQM)?', a: 'Oui. Nous assurons les départs et les arrivées à l’aéroport international Roméo-LeBlanc du Grand Moncton. Donnez-nous votre numéro de vol et nous suivons votre arrivée.' },
  { q: 'Avez-vous des fourgonnettes pour les groupes ou les bagages?', a: 'Notre parc comprend des berlines, des VUS et des fourgonnettes. Indiquez le nombre de passagers et de bagages à la réservation et nous enverrons le bon véhicule.' },
  { q: 'Quels secteurs desservez-vous?', a: 'Tout le Grand Moncton (Moncton, Dieppe et Riverview), ainsi que Shediac, Sussex et des trajets longue distance vers Saint John, Fredericton, Halifax et Charlottetown.' },
];
