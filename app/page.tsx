import { BadgeCheck, LayoutTemplate, Rocket, Send } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Next.js App Router",
    description: "Base solide pour une vitrine performante et SEO-friendly.",
    icon: LayoutTemplate,
  },
  {
    title: "Tailwind + shadcn/ui",
    description: "Composants modernes et theming prets a etendre.",
    icon: BadgeCheck,
  },
  {
    title: "Resend integre",
    description: "Formulaire contact connecte a un envoi email transactionnel.",
    icon: Send,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0f9ff,_#fff)]">
      <main className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:items-start">
        <section className="space-y-6">
          <p className="inline-flex rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
            Boilerplate Vitrine
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Lancez un site vitrine maintenant, evoluez vers une web app ensuite.
          </h1>
          <p className="max-w-xl text-lg text-zinc-600">
            Ce starter inclut la structure, le style et le formulaire de contact
            avec envoi d&apos;email pour aller vite en production.
          </p>

          <div className="grid gap-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-zinc-200/60 bg-white/90"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                  <feature.icon className="size-5 text-zinc-800" />
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="inline-flex items-center gap-2 text-sm text-zinc-500">
            <Rocket className="size-4" />
            Prochaine etape: ajouter auth, dashboard, billing ou CMS.
          </p>
        </section>

        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
