import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { HeaderScrollAccent } from "@/components/landing/HeaderScrollAccent";
import { Section } from "@/components/landing/Section";
import {
  detailedServices,
  navLinks,
  galleryPhotos,
  serviceCards,
  valueItems,
} from "@/components/landing/data";
import {
  ServiceDetails,
  ServiceGrid,
  ValueGrid,
} from "@/components/landing/ServiceCards";
import { Button } from "@/components/ui/button";

function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div>
        <Image
          src={`/logo.svg`}
          alt="Logo Nova Clean Services"
          width={90}
          height={90}
          className="h-15 w-15 object-cover rounded-xl"
          unoptimized
        />
      </div>
      <div>
        <p
          className={`text-sm font-semibold uppercase tracking-[0.16em] ${
            dark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          Nova Clean Services
        </p>
        <p
          className={`text-base font-semibold leading-none ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Entreprise de nettoyage suisse romande.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 text-white shadow-[0_12px_30px_rgba(2,6,23,0.22)] backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
          <a href="#accueil" className="flex items-center gap-3">
            <BrandMark dark />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="hidden h-10 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-200 sm:inline-flex"
          >
            <a href="#contact">Demander un devis</a>
          </Button>
        </div>
        <nav className="border-t border-slate-800 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-5 overflow-x-auto px-6 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <HeaderScrollAccent />
      </header>

      <main>
        <section
          id="accueil"
          className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
        >
          <div
            className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/3 top-40 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div className="space-y-8">
              <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                Entreprise de nettoyage suisse romande
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                L&apos;excellence au service de vos espaces
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
                Bienvenue chez Nova Clean Services. Nous accompagnons
                particuliers, entreprises et régies dans l&apos;entretien et la
                mise en valeur de leurs espaces partout en Suisse romande.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-11 rounded-full bg-blue-500 px-6 text-sm font-semibold text-white hover:bg-blue-400"
                >
                  <a href="#contact">Demander un devis</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-blue-100/40 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2"
                  >
                    Découvrir nos services
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
                <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <ShieldCheck
                    className="size-4 text-blue-300"
                    aria-hidden="true"
                  />
                  Processus rigoureux
                </p>
                <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Clock3 className="size-4 text-blue-300" aria-hidden="true" />
                  Interventions rapides
                </p>
                <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2
                    className="size-4 text-blue-300"
                    aria-hidden="true"
                  />
                  Qualité constante
                </p>
              </div>
            </div>

            <aside className="animate-fade-up rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  Nova Clean Services
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Des espaces impeccables, sans compromis
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Une équipe engagée pour entretenir, valoriser et protéger vos
                  environnements au quotidien.
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-blue-300">
                    {serviceCards.length}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    services complets
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-blue-300">24h</p>
                  <p className="mt-1 text-sm text-slate-200">réponse devis</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Section
          id="a-propos"
          eyebrow="Présentation"
          title="Nova Clean Services, votre partenaire propreté au quotidien"
          description="Chez Nova Clean Services, nous accompagnons particuliers, entreprises et régies dans l'entretien et la mise en valeur de leurs espaces. Grâce à une approche professionnelle et un souci constant du détail, nous garantissons des résultats à la hauteur de vos exigences. Notre engagement : vous offrir des environnements propres, sains et parfaitement entretenus, tout en vous simplifiant le quotidien."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Méthodes de nettoyage précises et adaptées à chaque environnement.",
              "Équipe stable, formée et engagée sur la qualité de chaque intervention.",
              "Suivi rigoureux et communication claire à chaque étape.",
            ].map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
              >
                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Services"
          title="Des prestations complètes, un seul partenaire"
          description="Cliquez sur une prestation pour accéder directement à son détail complet plus bas sur la page."
          className="bg-gradient-to-b from-slate-100/60 to-slate-50"
        >
          <ServiceGrid items={serviceCards} />
        </Section>

        {false && (
          <Section
            id="galerie"
            eyebrow="Galerie"
            title="Exemples d'interventions en images"
            description="Photos de démonstration libres de droit (Unsplash), remplaçables progressivement par vos propres réalisations."
          >
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {galleryPhotos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className="animate-fade-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={900}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                  <figcaption className="space-y-1 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {photo.label}
                    </p>
                    <a
                      href={photo.creditHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-sky-700 underline-offset-2 hover:underline"
                    >
                      {photo.creditLabel}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}

        <Section
          id="difference"
          eyebrow="Pourquoi Nova Clean Services"
          title="Notre différence"
        >
          <ValueGrid items={valueItems} />
        </Section>

        <Section
          id="valorisation"
          eyebrow="Mise en valeur"
          title="Valorisez vos espaces au quotidien"
          description="Qu'il s'agisse d'un entretien régulier, d'une remise en état ou d'une intervention spécifique, nous vous apportons des solutions efficaces et durables. Avec Nova Clean Services, vos espaces restent propres, accueillants et valorisés, en toute circonstance."
          className="bg-slate-950"
          inverted
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-slate-700/80 bg-slate-800 p-8">
              <p className="text-sm uppercase tracking-[0.14em] text-blue-300">
                Approche professionnelle
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Des espaces accueillants qui reflètent votre image
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-200">
                Nous combinons rigueur opérationnelle, précision des gestes et
                sens du détail pour maintenir des espaces propres, harmonieux et
                valorisants.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-10">
              <div
                className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-blue-300/35 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl border border-white/30 bg-white/90 p-7 shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Qualité visible
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Interventions soignées, résultat durable
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Des protocoles clairs et une exécution précise pour garantir
                  une qualité constante dans le temps.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="details-services"
          eyebrow="Détails des prestations"
          title="Un service adapté à chaque besoin"
          description="Chaque mission est structurée pour répondre à vos contraintes, avec un même niveau d'exigence sur la qualité, la ponctualité et la fiabilité."
        >
          <ServiceDetails items={detailedServices} />
        </Section>

        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto w-full max-w-5xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Parlons de votre projet
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900">
              Besoin d&apos;un service fiable et professionnel ?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Notre équipe est à votre disposition pour vous proposer une
              solution adaptée. Nova Clean Services, l&apos;excellence au
              service de vos espaces.
            </p>
            <Button
              asChild
              className="mt-8 h-11 rounded-full bg-blue-700 px-8 text-sm font-semibold text-white hover:bg-blue-800"
            >
              <a href="#contact">Demander un devis</a>
            </Button>
          </div>
        </section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Discutons de vos besoins"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)] sm:p-9">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                Demande de devis
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Réponse rapide avec une proposition claire, adaptée à votre
                contexte.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-5">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Coordonnées
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Phone
                      className="size-4 text-blue-700"
                      aria-hidden="true"
                    />
                    <a href="tel:+41788096135" className="hover:underline">
                      +41 78 809 61 35
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="size-4 text-blue-700" aria-hidden="true" />
                    info@novacleanservices.ch
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin
                      className="size-4 text-blue-700"
                      aria-hidden="true"
                    />
                    Suisse romande (siège à Yverdon-les-Bains)
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Zone d&apos;intervention
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Nous intervenons pour particuliers, entreprises et régies sur
                  toute la Suisse romande et ses environs, avec une organisation
                  flexible selon vos contraintes.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                <h3 className="text-lg font-semibold">Nova Clean Services</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Entreprise de nettoyage suisse romande.
                </p>
              </article>
            </aside>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 py-14 text-slate-300">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandMark dark />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              Entreprise de nettoyage suisse romande pour particuliers,
              entreprises et régies. Un service fiable, soigné et orienté
              résultat.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Liens rapides
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="tel:+41788096135" className="hover:text-white">
                  +41 78 809 61 35
                </a>
              </li>
              <li>info@novacleanservices.ch</li>
              <li>Suisse romande</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-800 px-6 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Nova Clean Services. Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
}
