import {
  Briefcase,
  Building2,
  HardHat,
  Home,
  MoveRight,
  ShieldAlert,
  Shovel,
  Sparkles,
  Sun,
  Trees,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type ServiceCardItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export type ValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DetailedService = {
  id: string;
  title: string;
  shortIntro: string;
  paragraph: string;
  benefit: string;
  imageSrc: string;
  imageAlt: string;
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
  creditLabel: string;
  creditHref: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1774979161326-6ba6ed3a1864?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    alt: "Équipe de nettoyage sur façade vitrée en hauteur.",
    label: "Interventions spécialisées en extérieur",
    creditLabel: "Adhitya Sibikumar / Unsplash",
    creditHref:
      "https://unsplash.com/photos/two-window-cleaners-work-on-a-tall-building-BXsBr9a_z7E",
  },
  {
    src: "https://images.unsplash.com/photo-1762008310482-ac087b26c1a2?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    alt: "Nettoyage d'un espace d'entrée commercial.",
    label: "Entretien régulier de sites professionnels",
    creditLabel: "MAK / Unsplash",
    creditHref:
      "https://unsplash.com/photos/two-people-cleaning-outside-a-building-entrance-bgIMFj7i6Ec",
  },
  {
    src: "https://images.unsplash.com/photo-1707897283710-4beef9a1b066?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    alt: "Agent en intervention avec un jet d'eau haute pression.",
    label: "Nettoyage intensif et remise en état",
    creditLabel: "The ProClean Team / Unsplash",
    creditHref:
      "https://unsplash.com/photos/a-man-is-cleaning-the-street-with-a-hose-DyYMrJYXE84",
  },
  {
    src: "https://images.unsplash.com/photo-1668600418929-118f4d7fd53a?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    alt: "Professionnel en tenue de protection pour nettoyage technique.",
    label: "Prestations techniques et zones sensibles",
    creditLabel: "Toon Lambrechts / Unsplash",
    creditHref:
      "https://unsplash.com/photos/a-person-wearing-a-mask-and-gloves-3trrmy1-8bU",
  },
  {
    src: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    alt: "Matériel de nettoyage professionnel prêt à l'emploi.",
    label: "Équipement professionnel adapté",
    creditLabel: "Crystal Chabot / Unsplash",
    creditHref: "https://unsplash.com/photos/clear-spray-bottle-9gzU1mtTzWM",
  },
  {
    src: "https://images.unsplash.com/photo-1740511106124-625b02369494?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    alt: "Intervention de nettoyage urbain sur voie extérieure.",
    label: "Interventions exceptionnelles sur mesure",
    creditLabel: "Jose Manuel Esp / Unsplash",
    creditHref:
      "https://unsplash.com/photos/a-man-in-a-yellow-and-black-uniform-is-cleaning-the-street-QC5CzfCxNkA",
  },
];

export const serviceCards: ServiceCardItem[] = [
  {
    id: "service-fin-bail",
    title: "Nettoyage de fin de bail",
    description:
      "Une remise en état minutieuse pour restituer votre bien en toute sérénité.",
    icon: Home,
    href: "#service-fin-bail",
  },
  {
    id: "service-conciergerie",
    title: "Service de conciergerie",
    description:
      "Gestion quotidienne fiable et soignée pour résidences, bureaux et commerces.",
    icon: Building2,
    href: "#service-conciergerie",
  },
  {
    id: "service-locaux",
    title: "Entretien de locaux professionnels",
    description:
      "Un environnement de travail propre, sain et valorisant pour vos équipes.",
    icon: Briefcase,
    href: "#service-locaux",
  },
  {
    id: "service-chantier",
    title: "Nettoyage de fin de chantier",
    description:
      "Une finition irréprochable avant livraison ou mise en exploitation.",
    icon: HardHat,
    href: "#service-chantier",
  },
  {
    id: "service-toitures",
    title: "Nettoyage de toitures & tuiles",
    description:
      "Protection durable de votre toiture avec un nettoyage adapté aux matériaux.",
    icon: Sun,
    href: "#service-toitures",
  },
  {
    id: "service-exterieurs",
    title: "Entretien des espaces extérieurs",
    description:
      "Des espaces extérieurs impeccables en toute saison, avec régularité.",
    icon: Trees,
    href: "#service-exterieurs",
  },
  {
    id: "service-neige",
    title: "Déneigement et salage",
    description:
      "Des accès dégagés et sécurisés rapidement pendant les périodes hivernales.",
    icon: Shovel,
    href: "#service-neige",
  },
  {
    id: "service-debarras",
    title: "Déménagement & débarras",
    description:
      "Un accompagnement organisé pour simplifier vos transitions en confiance.",
    icon: Warehouse,
    href: "#service-debarras",
  },
  {
    id: "service-exceptionnel",
    title: "Autres prestations exceptionnelles",
    description:
      "Interventions spécifiques après incendie, inondation ou autre sinistre.",
    icon: ShieldAlert,
    href: "#service-exceptionnel",
  },
];

export const valueItems: ValueItem[] = [
  {
    title: "Un haut niveau d'exigence",
    description: "Chaque détail compte, chaque intervention est maîtrisée.",
    icon: Sparkles,
  },
  {
    title: "Des solutions adaptées",
    description: "Nous nous ajustons à vos besoins, réguliers ou spécifiques.",
    icon: MoveRight,
  },
  {
    title: "Une équipe fiable",
    description: "Des professionnels engagés, formés et expérimentés.",
    icon: Building2,
  },
  {
    title: "Une réactivité constante",
    description: "Des interventions rapides et une organisation efficace.",
    icon: Shovel,
  },
  {
    title: "Un service sur lequel vous pouvez compter",
    description: "Simplicité, confiance et tranquillité d'esprit.",
    icon: Briefcase,
  },
];

export const detailedServices: DetailedService[] = [
  {
    id: "service-fin-bail",
    title: "Nettoyage de fin de bail",
    shortIntro:
      "Simplifiez votre transition grâce à un nettoyage soigné, à la hauteur des exigences de restitution.",
    paragraph:
      "Le nettoyage de fin de bail est une étape essentielle lors de la restitution d'un bien locatif. Il nécessite une attention particulière afin de garantir un logement impeccable, conforme aux attentes des régies et des propriétaires. Nous intervenons avec méthode et précision pour assurer une remise en état complète, en portant une attention soutenue à chaque détail.",
    benefit:
      "Bénéfice client : un résultat maîtrisé, un gain de temps considérable et une tranquillité d'esprit totale au moment de remettre les clés.",
    imageSrc: "/services/A56EFE80-0111-4032-9EAD-553FDA1CA1B4.PNG",
    imageAlt: "Nettoyage professionnel d'un logement avant restitution.",
  },
  {
    id: "service-conciergerie",
    title: "Service de conciergerie",
    shortIntro:
      "Offrez à vos immeubles un service de conciergerie fiable, soigné et à la hauteur de vos attentes.",
    paragraph:
      "Nous assurons l'entretien et la gestion quotidienne de vos résidences, bureaux et surfaces commerciales, avec une approche rigoureuse et un réel souci du détail. Notre objectif est de garantir des espaces propres, fonctionnels et agréables pour les occupants. Grâce à notre flexibilité, nous nous adaptons à chaque situation : contrats réguliers, interventions occasionnelles ou remplacement de concierge.",
    benefit:
      "Bénéfice client : une continuité de service irréprochable, même en cas d'absence.",
    imageSrc: "/services/IMG_5245.JPG.jpeg",
    imageAlt: "Entretien de parties communes et accès d'immeuble.",
  },
  {
    id: "service-locaux",
    title: "Entretien de vos locaux professionnels",
    shortIntro: "Des espaces propres, sains et valorisés au quotidien.",
    paragraph:
      "Nous assurons l'entretien de tous types de locaux : bureaux, commerces, établissements médicaux, écoles et restaurants. Nos prestations incluent le nettoyage des sols et surfaces, l'entretien des sanitaires, le dépoussiérage et le maintien général de la propreté de vos espaces. Nous garantissons un service fiable, rigoureux et professionnel.",
    benefit:
      "Bénéfice client : une image professionnelle renforcée et un cadre de travail plus agréable pour tous.",
    imageSrc: "/services/IMG_5265.webp",
    imageAlt: "Matériel de nettoyage professionnel pour locaux d'entreprise.",
  },
  {
    id: "service-chantier",
    title: "Nettoyage de fin de chantier",
    shortIntro:
      "Offrez à vos espaces une remise en état irréprochable après travaux.",
    paragraph:
      "Le nettoyage de fin de chantier permet de révéler pleinement la qualité de vos espaces avant leur livraison ou leur mise en service. Nous intervenons avec exigence afin de garantir un rendu parfaitement propre, soigné et prêt à être occupé.",
    benefit:
      "Bénéfice client : une livraison valorisée et des locaux immédiatement exploitables.",
    imageSrc: "/services/5D25C221-DF96-408C-A4AC-6E1DD438DDA4.png",
    imageAlt: "Espace de chantier préparé pour une remise en état.",
  },
  {
    id: "service-toitures",
    title: "Nettoyage de toitures & tuiles",
    shortIntro:
      "Préservez durablement l'état, l'esthétique et la solidité de vos toitures grâce à un entretien professionnel adapté.",
    paragraph:
      "Avec le temps, mousses, lichens et salissures peuvent altérer l'apparence de la toiture et fragiliser sa structure. Nos interventions permettent d'éliminer efficacement ces dépôts tout en respectant les matériaux, afin de prolonger la durée de vie de votre toiture. Nous réalisons également le nettoyage de panneaux solaires pour optimiser leur rendement.",
    benefit:
      "Bénéfice client : une toiture protégée, plus durable et visuellement soignée.",
    imageSrc: "/services/1753597A-0B79-4E81-BA53-4016B3CA07CF.png",
    imageAlt: "Toiture entretenue par une équipe spécialisée.",
  },
  {
    id: "service-exterieurs",
    title: "Entretien de vos espaces extérieurs",
    shortIntro: "Des extérieurs soignés et valorisés toute l'année.",
    paragraph:
      "Nous assurons l'entretien avec exigence afin de préserver la propreté, l'esthétique et l'harmonie de vos espaces extérieurs dans le temps. Chaque prestation est réalisée avec rigueur et précision, selon vos contraintes.",
    benefit:
      "Bénéfice client : des abords accueillants qui valorisent durablement votre bien.",
    imageSrc: "/services/EFF64A4D-791F-4F63-8306-A00D46562FE5.png",
    imageAlt: "Entretien professionnel d'espaces extérieurs.",
  },
  {
    id: "service-neige",
    title: "Déneigement et salage",
    shortIntro:
      "Assurez la sécurité et l'accessibilité de vos espaces extérieurs en saison hivernale.",
    paragraph:
      "Nous intervenons avec réactivité pour le déneigement et le traitement des surfaces glissantes. Notre objectif est de garantir des accès dégagés, sûrs et praticables pour vos résidents, clients et collaborateurs.",
    benefit:
      "Bénéfice client : des déplacements plus sereins et une continuité d'activité renforcée.",
    imageSrc: "/services/IMG_5242.JPG.jpeg",
    imageAlt: "Accès extérieur sécurisé pendant la période hivernale.",
  },
  {
    id: "service-debarras",
    title: "Déménagement & débarras",
    shortIntro:
      "Simplifiez vos transitions grâce à un service complet, fiable et parfaitement maîtrisé.",
    paragraph:
      "Nous accompagnons les projets de déménagement ainsi que le débarras de logements ou de locaux professionnels. Chaque mission est réalisée avec soin et organisation pour vous faire gagner du temps.",
    benefit:
      "Bénéfice client : un processus simplifié, rapide et sans stress inutile.",
    imageSrc: "/services/297AAC64-DCBE-48C8-AE72-515DAD35CC07.png",
    imageAlt: "Cartons et matériel préparés pour un déménagement.",
  },
  {
    id: "service-exceptionnel",
    title: "Autres prestations exceptionnelles",
    shortIntro:
      "Des interventions ciblées pour les situations urgentes ou non standards.",
    paragraph:
      "Nous proposons des prestations exceptionnelles, notamment après incendie, inondation ou autre sinistre. Chaque intervention est préparée avec méthode pour remettre les lieux en état dans les meilleurs délais, en coordination avec vos contraintes.",
    benefit:
      "Bénéfice client : une prise en charge rapide, structurée et rassurante dans les situations sensibles.",
    imageSrc: "/services/IMG_5266.webp",
    imageAlt: "Intervention technique avec équipement de protection.",
  },
];

export const serviceSelectOptions = detailedServices.map(
  (service) => service.title,
);
