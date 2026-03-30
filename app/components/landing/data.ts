import {
  Briefcase,
  Building2,
  HardHat,
  Home,
  MoveRight,
  Shovel,
  Sparkles,
  Sun,
  Trees,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type ServiceCardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
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
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "A propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export const serviceCards: ServiceCardItem[] = [
  {
    title: "Nettoyage de fin / debut de bail",
    description:
      "Une remise en etat minutieuse pour restituer vos biens en toute serenite.",
    icon: Home,
  },
  {
    title: "Service de conciergerie",
    description:
      "Gestion quotidienne fiable et soignee pour residences, bureaux et commerces.",
    icon: Building2,
  },
  {
    title: "Entretien de locaux professionnels",
    description:
      "Un environnement de travail propre, sain et valorisant pour vos equipes.",
    icon: Briefcase,
  },
  {
    title: "Nettoyage de fin de chantier",
    description:
      "Une finition irreprochable avant livraison ou mise en exploitation.",
    icon: HardHat,
  },
  {
    title: "Nettoyage de toitures & tuiles",
    description:
      "Protection durable de votre toiture avec un nettoyage adapte aux materiaux.",
    icon: Sun,
  },
  {
    title: "Entretien des espaces exterieurs",
    description:
      "Des espaces exterieurs impeccables en toute saison, avec regularite.",
    icon: Trees,
  },
  {
    title: "Deneigement et salage",
    description:
      "Des acces degages et securises rapidement pendant les periodes hivernales.",
    icon: Shovel,
  },
  {
    title: "Demenagement & debarras",
    description:
      "Un accompagnement organise pour simplifier vos transitions en confiance.",
    icon: Warehouse,
  },
];

export const valueItems: ValueItem[] = [
  {
    title: "Un haut niveau d'exigence",
    description: "Chaque detail compte, chaque intervention est maitrisee.",
    icon: Sparkles,
  },
  {
    title: "Des solutions adaptees",
    description: "Nous nous ajustons a vos besoins, reguliers ou specifiques.",
    icon: MoveRight,
  },
  {
    title: "Une equipe fiable",
    description: "Des professionnels engages, formes et experimentes.",
    icon: Building2,
  },
  {
    title: "Une reactivite constante",
    description: "Des interventions rapides et une organisation efficace.",
    icon: Shovel,
  },
  {
    title: "Un service sur lequel vous pouvez compter",
    description: "Simplicite, confiance et tranquillite d'esprit.",
    icon: Briefcase,
  },
];

export const detailedServices: DetailedService[] = [
  {
    id: "service-bail",
    title: "Nettoyage de fin / debut de bail",
    shortIntro:
      "Simplifiez votre transition grace a un nettoyage soigne, a la hauteur des exigences de restitution.",
    paragraph:
      "Le nettoyage de fin de bail est une etape essentielle lors de la restitution d'un bien locatif. Il necessite une attention particuliere afin de garantir un logement impeccable, conforme aux attentes des regies et proprietaires. Nous intervenons avec methode et precision pour assurer une remise en etat complete, en portant une attention particuliere a chaque detail, afin de vous permettre d'aborder votre etat des lieux en toute serenite.",
    benefit:
      "Benefice client: un resultat maitrise, un gain de temps considerable et une tranquillite d'esprit totale au moment de remettre les cles.",
  },
  {
    id: "service-conciergerie",
    title: "Service de conciergerie",
    shortIntro:
      "Offrez a vos immeubles un service de conciergerie fiable, soigne et a la hauteur de vos attentes.",
    paragraph:
      "Nous assurons l'entretien et la gestion quotidienne de vos residences, bureaux et surfaces commerciales, avec une approche rigoureuse et un reel souci du detail. Notre objectif: garantir des espaces propres, fonctionnels et agreables a vivre pour tous les occupants. Grace a notre flexibilite, nous nous adaptons a chaque situation: contrats reguliers, interventions occasionnelles ou remplacement de concierge.",
    benefit:
      "Benefice client: une continuite de service irreprochable, meme en cas d'absence.",
  },
  {
    id: "service-locaux",
    title: "Entretien de vos locaux professionnels",
    shortIntro: "Des espaces propres, sains et valorises au quotidien.",
    paragraph:
      "Nous assurons l'entretien de tous types de locaux: bureaux, commerces, etablissements medicaux, ecoles et restaurants. Nos prestations incluent le nettoyage des sols et surfaces, l'entretien des sanitaires, le depoussierage et le maintien general de la proprete de vos espaces. Nous proposons un service fiable, rigoureux et professionnel, avec un niveau de qualite constant.",
    benefit:
      "Benefice client: une image professionnelle renforcee et un cadre de travail plus agreable pour tous.",
  },
  {
    id: "service-chantier",
    title: "Nettoyage de fin de chantier",
    shortIntro:
      "Offrez a vos espaces une remise en etat irreprochable apres travaux.",
    paragraph:
      "Le nettoyage de fin de chantier permet de reveler pleinement la qualite de vos espaces avant leur livraison ou leur mise en service. Nous intervenons avec exigence afin de garantir un rendu parfaitement propre, soigne et pret a etre occupe.",
    benefit:
      "Benefice client: une livraison valorisee et des locaux immediatement exploitables.",
  },
  {
    id: "service-toitures",
    title: "Nettoyage de toitures & tuiles",
    shortIntro:
      "Preservez durablement l'etat, l'esthetique et la solidite de vos toitures grace a un entretien professionnel et adapte.",
    paragraph:
      "Avec le temps, mousses, lichens et salissures peuvent alterer leur apparence et fragiliser leur structure. Nos interventions permettent d'eliminer efficacement ces depots tout en respectant les materiaux, afin de prolonger la duree de vie de votre toiture. Nous realisons egalement le nettoyage de panneaux solaires pour optimiser leur rendement et conserver leur performance dans le temps.",
    benefit:
      "Benefice client: une toiture protegee, plus durable et visuellement soignee.",
  },
  {
    id: "service-exterieurs",
    title: "Entretien de vos espaces exterieurs",
    shortIntro: "Des exterieurs soignes et valorises toute l'annee.",
    paragraph:
      "Nous assurons l'entretien avec exigence afin de preserver la proprete, l'esthetique et l'harmonie des espaces exterieurs dans le temps. Chaque prestation est realisee avec rigueur et precision.",
    benefit:
      "Benefice client: des abords accueillants qui valorisent durablement votre bien.",
  },
  {
    id: "service-neige",
    title: "Deneigement et salage",
    shortIntro:
      "Assurez la securite et l'accessibilite de vos espaces exterieurs en toute saison hivernale.",
    paragraph:
      "Nous intervenons avec reactivite pour le deneigement et le traitement des surfaces. Nous garantissons des acces degages, surs et praticables.",
    benefit:
      "Benefice client: des deplacements plus sereins pour vos occupants, clients et collaborateurs.",
  },
  {
    id: "service-debarras",
    title: "Demenagement & debarras",
    shortIntro:
      "Simplifiez vos transitions grace a un service complet, fiable et parfaitement maitrise.",
    paragraph:
      "Nous accompagnons les projets de demenagement ainsi que le debarras de logements ou locaux. Chaque mission est realisee avec soin et organisation.",
    benefit:
      "Benefice client: un processus simplifie, rapide et sans stress inutile.",
  },
];

export const serviceSelectOptions = detailedServices.map((service) => service.title);
