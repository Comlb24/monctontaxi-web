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
  // Slug of the English long-distance route (src/data/routes.ts) whose fares and toll this page shows.
  route?: string;
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
      { q: 'Faites-vous des trajets vers l’aéroport de Halifax?', a: 'Oui. Nous conduisons de Moncton et des environs jusqu’à l’aéroport Stanfield de Halifax (YHZ). Depuis le centre-ville de Moncton, le tarif est de 380,75 $ l’aller simple, plus un péage routier de 4 $ par direction payé par le client. Utilisez notre calculateur de tarif pour votre adresse exacte.' },
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
        bullets: ['Moncton → Halifax : 429,62 $', 'Moncton → aéroport de Halifax (YHZ) : 380,75 $', 'Moncton → Fredericton : 301,19 $', 'Moncton → Charlottetown : 272,31 $', 'Moncton → Saint John : 262,03 $', 'Moncton → aéroport de Saint John (YSJ) : 253,99 $', 'Péages en sus, payés par le client : 4 $ par direction vers Halifax; 20 $ une fois par trajet pour le pont de la Confédération'],
      },
    ],
    faqs: [
      { q: 'Combien coûte un taxi de Moncton à Halifax?', a: 'Depuis le centre-ville de Moncton : 429,62 $ l’aller simple jusqu’à Halifax et 380,75 $ jusqu’à l’aéroport Stanfield. Saint John coûte 262,03 $, Fredericton 301,19 $ et Charlottetown 272,31 $. Le tarif est par véhicule. Les péages sont en sus et payés par le client : 4 $ par direction vers Halifax, et 20 $ une seule fois par trajet pour le pont de la Confédération. Entrez vos adresses exactes dans notre calculateur pour votre prix.' },
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
      { q: 'Combien coûte un taxi de Moncton à Shediac?', a: 'Du centre-ville de Moncton à Shediac : 43,71 $ l’aller simple (environ 25 km) ou 87,41 $ aller-retour, sans péage. Entrez vos adresses exactes dans notre calculateur pour votre prix.' },
    ],
  },
];

// French long-distance route pages. Fares and tolls are read from src/data/routes.ts so they always
// match the English pages; the dollar amounts in the FAQ text must be kept in sync by hand.
frPages.push(
  {
    slug: 'taxi-moncton-halifax',
    route: 'moncton-to-halifax-taxi',
    name: 'Moncton – Halifax',
    city: 'Halifax',
    title: 'Taxi Moncton à Halifax – 430 $ aller simple | Taxi Moncton',
    description: 'Taxi de Moncton à Halifax : 429,62 $ l’aller simple (258 km), ou 380,75 $ jusqu’à l’aéroport Stanfield (YHZ). Porte à porte, 24 h/24. (506) 797-0087.',
    h1: 'Taxi de Moncton à Halifax',
    lead: 'Des trajets de porte à porte depuis Moncton, Dieppe et Riverview jusqu’au centre-ville de Halifax, à Dartmouth et à l’aéroport international Stanfield de Halifax. Voyez votre tarif exact en ligne, puis réservez du même coup.',
    sections: [
      {
        heading: 'Le trajet',
        body: 'Nous prenons la Transcanadienne vers l’est en passant par Sackville et Amherst, puis l’autoroute 104 par Truro et l’autoroute 102 jusqu’à Halifax. Le trajet fait environ 258 km depuis le centre-ville de Moncton, soit environ deux heures et demie selon la météo et la circulation.',
      },
      {
        heading: 'Transferts vers l’aéroport Stanfield (YHZ)',
        body: 'L’aéroport Stanfield se trouve le long de l’autoroute 102, avant la ville : un transfert vers l’aéroport est donc plus court et moins cher qu’une course au centre-ville. Nous planifions votre départ pour que vous arriviez avec une bonne marge, et nous vous prenons aux arrivées pour le retour.',
      },
      {
        heading: 'Destinations courantes à Halifax',
        body: 'Nous conduisons les gens de la région de Moncton à Halifax pour des rendez-vous à l’hôpital, des rentrées universitaires, des croisières, des réunions d’affaires et des visites familiales.',
        bullets: ['Centre des sciences de la santé QEII et Centre de santé IWK', 'Universités Dalhousie, Saint Mary’s et Mount Saint Vincent', 'Centre-ville de Halifax et le front de mer', 'Dartmouth et Bedford', 'Aéroport international Stanfield de Halifax (YHZ)'],
      },
    ],
    faqs: [
      { q: 'Combien coûte un taxi de Moncton à Halifax?', a: 'Notre calculateur de tarif indique 429,62 $ l’aller simple du centre-ville de Moncton au centre-ville de Halifax (environ 258 km), et 859,24 $ aller-retour. Le péage routier de 4 $ est en sus et payé par le client, par direction.' },
      { q: 'Combien coûte un taxi de Moncton à l’aéroport de Halifax?', a: 'L’aller simple du centre-ville de Moncton à l’aéroport international Stanfield de Halifax (YHZ) coûte 380,75 $ (environ 229 km), plus le péage de 4 $.' },
      { q: 'Combien de temps dure le trajet?', a: 'Environ deux heures et demie jusqu’au centre-ville de Halifax, un peu moins jusqu’à l’aéroport, selon la météo et la circulation.' },
      { q: 'Le prix est-il par personne?', a: 'Non. Le tarif est pour le véhicule : les personnes qui voyagent ensemble partagent un seul prix.' },
    ],
  },
  {
    slug: 'taxi-moncton-saint-john',
    route: 'moncton-to-saint-john-taxi',
    name: 'Moncton – Saint John',
    city: 'Saint John',
    title: 'Taxi Moncton à Saint John – 262 $ | Taxi Moncton',
    description: 'Taxi de Moncton à Saint John : 262,03 $ l’aller simple (157 km), ou 253,99 $ jusqu’à l’aéroport de Saint John (YSJ). Porte à porte, 24 h/24. (506) 797-0087.',
    h1: 'Taxi de Moncton à Saint John',
    lead: 'Des trajets directs du Grand Moncton jusqu’au centre-ville de Saint John, à l’hôpital régional, au port et à l’aéroport de Saint John. Voyez votre tarif exact en ligne avant de réserver.',
    sections: [
      {
        heading: 'Le trajet',
        body: 'Nous prenons la route 2 puis la route 1 par Sussex jusqu’à Saint John : environ 157 km depuis le centre-ville de Moncton, soit à peu près une heure et demie de route. Il n’y a aucun péage sur ce trajet.',
      },
      {
        heading: 'Rendez-vous médicaux et allers-retours',
        body: 'Beaucoup de nos trajets vers Saint John sont pour des rendez-vous à l’Hôpital régional de Saint John. Demandez un aller-retour avec temps d’attente : votre chauffeur peut attendre ou revenir vous chercher.',
      },
      {
        heading: 'Destinations courantes à Saint John',
        body: 'Des bureaux du centre-ville au terminal de croisières, nous desservons toute la ville.',
        bullets: ['Hôpital régional de Saint John', 'Centre-ville de Saint John et Market Square', 'Terminal de croisières du port de Saint John', 'UNB Saint John', 'Traversier Saint John–Digby', 'Aéroport de Saint John (YSJ)'],
      },
    ],
    faqs: [
      { q: 'Combien coûte un taxi de Moncton à Saint John?', a: 'Notre calculateur de tarif indique 262,03 $ l’aller simple du centre-ville de Moncton à Saint John (environ 157 km), et 524,06 $ aller-retour, sans péage.' },
      { q: 'Combien coûte un taxi de Moncton à l’aéroport de Saint John?', a: 'L’aller simple du centre-ville de Moncton à l’aéroport de Saint John (YSJ) coûte 253,99 $ (environ 152 km).' },
      { q: 'Le chauffeur peut-il attendre pendant mon rendez-vous?', a: 'Oui. Réservez un aller-retour en indiquant la durée approximative. L’attente au-delà des 15 premières minutes est facturée 60 $ l’heure, au prorata, sauf entente préalable.' },
    ],
  },
  {
    slug: 'taxi-moncton-fredericton',
    route: 'moncton-to-fredericton-taxi',
    name: 'Moncton – Fredericton',
    city: 'Fredericton',
    title: 'Taxi Moncton à Fredericton – 301 $ | Taxi Moncton',
    description: 'Taxi de Moncton à Fredericton : 301,19 $ l’aller simple (181 km). Porte à porte pour l’UNB, l’hôpital, le gouvernement et l’aéroport, 24 h/24. (506) 797-0087.',
    h1: 'Taxi de Moncton à Fredericton',
    lead: 'Des trajets confortables et directs du Grand Moncton jusqu’à la capitale du Nouveau-Brunswick, pour les étudiants, les rendez-vous, les affaires gouvernementales et les vols. Voyez votre tarif exact en ligne avant de réserver.',
    sections: [
      {
        heading: 'Le trajet',
        body: 'Nous prenons la Transcanadienne (route 2) vers l’ouest jusqu’à Fredericton : environ 181 km depuis le centre-ville de Moncton, soit à peu près deux heures de route. Il n’y a aucun péage sur ce trajet.',
      },
      {
        heading: 'Étudiants et familles',
        body: 'Rentrée ou retour pour les fêtes? Nous conduisons les étudiants à l’UNB Fredericton et à l’Université St. Thomas, avec de la place pour les bagages et les boîtes dans un VUS ou une fourgonnette.',
      },
      {
        heading: 'Destinations courantes à Fredericton',
        body: 'Nous desservons toute la ville, des deux côtés de la rivière.',
        bullets: ['Université du Nouveau-Brunswick et Université St. Thomas', 'Hôpital régional Dr Everett Chalmers', 'Bureaux du gouvernement provincial au centre-ville', 'Aéroport international de Fredericton (YFC)', 'Centre-ville et Northside'],
      },
    ],
    faqs: [
      { q: 'Combien coûte un taxi de Moncton à Fredericton?', a: 'Notre calculateur de tarif indique 301,19 $ l’aller simple du centre-ville de Moncton à Fredericton (environ 181 km), et 602,38 $ aller-retour, sans péage.' },
      { q: 'Combien de temps dure le trajet?', a: 'Environ deux heures par la Transcanadienne, selon la météo et la circulation.' },
      { q: 'Allez-vous à l’aéroport de Fredericton?', a: 'Oui. Nous allons à l’aéroport international de Fredericton (YFC), au centre-ville et aux universités.' },
    ],
  },
  {
    slug: 'taxi-moncton-charlottetown',
    route: 'moncton-to-charlottetown-taxi',
    name: 'Moncton – Charlottetown',
    city: 'Charlottetown',
    title: 'Taxi Moncton à Charlottetown – 272 $ | Taxi Moncton',
    description: 'Taxi de Moncton à Charlottetown (Î.-P.-É.) : 272,31 $ l’aller simple (163 km) par le pont de la Confédération, plus 20 $ de péage par trajet. (506) 797-0087.',
    h1: 'Taxi de Moncton à Charlottetown',
    lead: 'Des trajets de porte à porte du Grand Moncton jusqu’à Charlottetown et partout à l’Île-du-Prince-Édouard, par le pont de la Confédération. Voyez votre tarif exact en ligne avant de réserver.',
    sections: [
      {
        heading: 'Le trajet',
        body: 'Nous prenons les routes 15 et 16 jusqu’à Cap-Jourimain, traversons le pont de la Confédération (12,9 km) jusqu’à Borden-Carleton, puis suivons la Transcanadienne jusqu’à Charlottetown : environ 163 km, soit à peu près 1 h 45.',
      },
      {
        heading: 'Destinations courantes à l’Î.-P.-É.',
        body: 'Charlottetown est notre destination la plus populaire sur l’Île, et nous allons partout ailleurs à l’Î.-P.-É. sur demande.',
        bullets: ['Centre-ville de Charlottetown et le front de mer', 'Hôpital Queen Elizabeth', 'Université de l’Île-du-Prince-Édouard (UPEI)', 'Aéroport de Charlottetown (YYG)', 'Summerside, Cavendish et autres collectivités'],
      },
      {
        heading: 'Prendre l’avion à Moncton',
        body: 'Beaucoup d’Insulaires prennent l’avion à Moncton (YQM) pour avoir plus de choix de vols. Nous faisons le trajet dans les deux sens : de Charlottetown à l’aéroport de Moncton, et des arrivées de YQM jusqu’à l’Île.',
      },
    ],
    faqs: [
      { q: 'Combien coûte un taxi de Moncton à Charlottetown?', a: 'Notre calculateur de tarif indique 272,31 $ l’aller simple du centre-ville de Moncton à Charlottetown (environ 163 km), et 544,62 $ aller-retour, plus le péage du pont de 20 $ une fois par trajet.' },
      { q: 'Le péage du pont de la Confédération est-il inclus?', a: 'Non. Le péage est de 20 $, payé par le client, et facturé une seule fois par trajet : aller simple ou aller-retour, c’est 20 $.' },
      { q: 'Pouvez-vous me prendre à Charlottetown pour aller à l’aéroport de Moncton?', a: 'Oui. Réservez à l’avance avec l’heure de votre vol et votre adresse. Les prises en charge hors ville doivent être payées à l’avance.' },
    ],
  },
);

export const frHomeFaqs: Faq[] = [
  { q: 'Taxi Moncton est-il ouvert 24 h/24?', a: 'Oui. Nous répartissons les taxis 24 heures sur 24, 7 jours sur 7, jours fériés compris. Appelez ou textez le (506) 797-0087 à toute heure.' },
  { q: 'Comment réserver un taxi à Moncton?', a: 'Le plus simple est notre calculateur de tarif en ligne : entrez votre départ et votre destination, voyez votre prix instantanément et réservez du même coup. Vous pouvez aussi appeler ou texter le (506) 797-0087, ou nous écrire sur WhatsApp.' },
  { q: 'Desservez-vous l’aéroport de Moncton (YQM)?', a: 'Oui. Nous assurons les départs et les arrivées à l’aéroport international Roméo-LeBlanc du Grand Moncton. Donnez-nous votre numéro de vol et nous suivons votre arrivée.' },
  { q: 'Avez-vous des fourgonnettes pour les groupes ou les bagages?', a: 'Notre parc comprend des berlines, des VUS et des fourgonnettes. Indiquez le nombre de passagers et de bagages à la réservation et nous enverrons le bon véhicule.' },
  { q: 'Quels secteurs desservez-vous?', a: 'Tout le Grand Moncton (Moncton, Dieppe et Riverview), ainsi que Shediac, Sussex et des trajets longue distance vers Saint John, Fredericton, Halifax et Charlottetown.' },
];
