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
import { Section } from "@/components/landing/Section";
import {
  detailedServices,
  navLinks,
  serviceCards,
  valueItems,
} from "@/components/landing/data";
import { ServiceDetails, ServiceGrid, ValueGrid } from "@/components/landing/ServiceCards";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
          <a href="#accueil" className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-cyan-300">
              NC
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Nova Clean</p>
              <p className="text-lg font-semibold leading-none text-slate-900">Excellence & confiance</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button asChild className="hidden h-10 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-800 sm:inline-flex">
            <a href="#contact">Demander un devis</a>
          </Button>
        </div>
        <nav className="border-t border-slate-200/80 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-5 overflow-x-auto px-6 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="accueil" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
          <div className="absolute left-1/3 top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div className="space-y-8">
              <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Entreprise locale de nettoyage premium
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                L&apos;excellence au service de vos espaces
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
                Bienvenue chez Nova Clean, l&apos;excellence au service de vos espaces. Nous accompagnons particuliers,
                entreprises et regies dans l&apos;entretien et la mise en valeur de leurs espaces.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="h-11 rounded-full bg-cyan-400 px-6 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
                  <a href="#contact">Demander un devis</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-cyan-100/40 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <a href="#services" className="inline-flex items-center gap-2">
                    Decouvrir nos services
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
                <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <ShieldCheck className="size-4 text-cyan-300" aria-hidden="true" />
                  Process rigoureux
                </p>
                <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Clock3 className="size-4 text-cyan-300" aria-hidden="true" />
                  Interventions rapides
                </p>
                <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="size-4 text-cyan-300" aria-hidden="true" />
                  Qualite constante
                </p>
              </div>
            </div>

            <aside className="animate-fade-up rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="rounded-2xl border border-cyan-200/20 bg-slate-950/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Nova Clean</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Des espaces impeccables, sans compromis</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Une equipe engagee pour entretenir, valoriser et proteger vos environnements au quotidien.
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-cyan-300">8</p>
                  <p className="mt-1 text-sm text-slate-200">services complets</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-cyan-300">24h</p>
                  <p className="mt-1 text-sm text-slate-200">reponse devis</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Section
          id="a-propos"
          eyebrow="Presentation"
          title="Nova Clean, votre partenaire proprete au quotidien"
          description="Chez Nova Clean, nous accompagnons particuliers, entreprises et regies dans l'entretien et la mise en valeur de leurs espaces. Grace a une approche professionnelle et un souci constant du detail, nous garantissons des resultats a la hauteur de vos exigences. Notre engagement: vous offrir des environnements propres, sains et parfaitement entretenus, tout en vous simplifiant le quotidien."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Methodes de nettoyage precises et adaptees a chaque environnement.",
              "Equipe stable, formee et engagee sur la qualite de chaque intervention.",
              "Suivi rigoureux et communication claire a chaque etape.",
            ].map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Services"
          title="Des prestations completes, un seul partenaire"
          description="Chaque intervention est concue pour offrir un niveau de proprete exigeant, avec une execution fluide et professionnelle."
          className="bg-gradient-to-b from-slate-100/60 to-slate-50"
        >
          <ServiceGrid items={serviceCards} />
        </Section>

        <Section id="difference" eyebrow="Pourquoi Nova Clean" title="Notre difference">
          <ValueGrid items={valueItems} />
        </Section>

        <Section
          id="valorisation"
          eyebrow="Mise en valeur"
          title="Valorisez vos espaces au quotidien"
          description="Qu'il s'agisse d'un entretien regulier, d'une remise en etat ou d'une intervention specifique, nous vous apportons des solutions efficaces et durables. Avec Nova Clean, vos espaces restent propres, accueillants et valorises, en toute circonstance."
          className="bg-slate-900"
          inverted
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-slate-700/80 bg-slate-800 p-8">
              <p className="text-sm uppercase tracking-[0.14em] text-cyan-300">Approche premium</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">Des espaces accueillants qui refletent votre image</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-200">
                Nous combinons rigueur operationnelle, precision des gestes et sens du detail pour maintenir des espaces
                propres, harmonieux et valorisants.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-cyan-200/20 bg-gradient-to-br from-cyan-400/25 via-sky-500/15 to-slate-900 p-10">
              <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-cyan-300/35 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-2xl border border-white/30 bg-white/90 p-7 shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Qualite visible</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Interventions soignees, resultat durable</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Des protocoles clairs et une execution precise pour garantir une qualite constante dans le temps.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="details-services"
          eyebrow="Detail des prestations"
          title="Un service adapte a chaque besoin"
          description="Chaque mission est structuree pour repondre a vos contraintes, avec un meme niveau d'exigence sur la qualite, la ponctualite et la fiabilite."
        >
          <ServiceDetails items={detailedServices} />
        </Section>

        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto w-full max-w-5xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Parlons de votre projet</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900">
              Besoin d&apos;un service fiable et professionnel?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Notre equipe est a votre disposition pour vous proposer une solution adaptee. Nova Clean, l&apos;excellence
              au service de vos espaces.
            </p>
            <Button asChild className="mt-8 h-11 rounded-full bg-slate-900 px-8 text-sm font-semibold text-white hover:bg-slate-800">
              <a href="#contact">Demander un devis</a>
            </Button>
          </div>
        </section>

        <Section id="contact" eyebrow="Contact" title="Discutons de vos besoins">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)] sm:p-9">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Demande de devis</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reponse rapide avec une proposition claire, adaptee a votre contexte.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-5">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">Coordonnees</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Phone className="size-4 text-sky-700" aria-hidden="true" />
                    +41 78 809 61 35
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="size-4 text-sky-700" aria-hidden="true" />
                    Info@novacleanservices.ch
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="size-4 text-sky-700" aria-hidden="true" />
                    Yverdon et Region
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">Zone d&apos;intervention</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Nous intervenons pour particuliers, entreprises et regies sur Yverdon et les communes environnantes,
                  avec une organisation flexible selon vos contraintes.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                <h3 className="text-lg font-semibold">Nova Clean</h3>
                <p className="mt-2 text-sm text-slate-200">L&apos;excellence au service de vos espaces.</p>
              </article>
            </aside>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 py-14 text-slate-300">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-cyan-300 text-sm font-bold text-slate-950">NC</div>
              <p className="text-xl font-semibold text-white">Nova Clean</p>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              Entreprise de nettoyage premium pour particuliers, entreprises et regies. Un service fiable, soigne et
              oriente resultat.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Liens rapides</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>+41 78 809 61 35</li>
              <li>Info@novacleanservices.ch</li>
              <li>Yverdon et Region</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-800 px-6 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Nova Clean. Tous droits reserves.
        </p>
      </footer>
    </div>
  );
}
