import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CircleAlert,
  Clock3,
  DollarSign,
  FolderKanban,
  Home,
  Inbox,
  Layers3,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "neutral";
  icon: ComponentType<{ className?: string }>;
};

type Deal = {
  client: string;
  service: string;
  amount: string;
  stage: "Nouveau" | "Proposition" | "Negociation" | "Gagne";
  owner: string;
};

type Task = {
  title: string;
  due: string;
  priority: "Haute" | "Moyenne" | "Basse";
  status: "En cours" | "Bloquee" | "Terminee";
};

const metrics: Metric[] = [
  {
    label: "CA mensuel",
    value: "42 800 EUR",
    delta: "+18.2% vs mois precedent",
    tone: "positive",
    icon: DollarSign,
  },
  {
    label: "Nouveaux leads",
    value: "126",
    delta: "+11 cette semaine",
    tone: "positive",
    icon: Users,
  },
  {
    label: "Projets actifs",
    value: "9",
    delta: "2 livraisons aujourd'hui",
    tone: "neutral",
    icon: BriefcaseBusiness,
  },
  {
    label: "Taux de conversion",
    value: "24.3%",
    delta: "+3.1 points",
    tone: "positive",
    icon: TrendingUp,
  },
];

const deals: Deal[] = [
  {
    client: "Maison Cime",
    service: "Refonte vitrine",
    amount: "6 500 EUR",
    stage: "Proposition",
    owner: "Jeremie",
  },
  {
    client: "Atlas RH",
    service: "Landing recrutement",
    amount: "4 200 EUR",
    stage: "Negociation",
    owner: "Nina",
  },
  {
    client: "Maree Studio",
    service: "Maintenance annuelle",
    amount: "2 800 EUR",
    stage: "Nouveau",
    owner: "Sofiane",
  },
  {
    client: "Novaly",
    service: "Mini dashboard B2B",
    amount: "9 900 EUR",
    stage: "Gagne",
    owner: "Jeremie",
  },
];

const tasks: Task[] = [
  {
    title: "Valider le wireframe mobile du client Atlas RH",
    due: "Aujourd'hui",
    priority: "Haute",
    status: "En cours",
  },
  {
    title: "Configurer domaine email Resend en production",
    due: "Demain",
    priority: "Moyenne",
    status: "Bloquee",
  },
  {
    title: "Publier case study Maison Cime",
    due: "Vendredi",
    priority: "Basse",
    status: "Terminee",
  },
];

const menuItems = [
  { label: "Overview", icon: Home, active: true },
  { label: "Pipeline", icon: FolderKanban, active: false },
  { label: "Messages", icon: MessageSquare, active: false },
  { label: "Calendrier", icon: CalendarClock, active: false },
  { label: "Fichiers", icon: Inbox, active: false },
];

function statusClass(stage: Deal["stage"]) {
  if (stage === "Gagne") return "bg-emerald-100 text-emerald-700";
  if (stage === "Negociation") return "bg-amber-100 text-amber-700";
  if (stage === "Proposition") return "bg-sky-100 text-sky-700";
  return "bg-zinc-100 text-zinc-700";
}

function priorityClass(priority: Task["priority"]) {
  if (priority === "Haute") return "bg-red-100 text-red-700";
  if (priority === "Moyenne") return "bg-amber-100 text-amber-700";
  return "bg-zinc-100 text-zinc-700";
}

function taskStatusClass(status: Task["status"]) {
  if (status === "Terminee") return "text-emerald-700";
  if (status === "Bloquee") return "text-red-700";
  return "text-zinc-700";
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(150deg,#f5f7fa_0%,#eef7ff_50%,#fff8ef_100%)] p-4 md:p-6">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-white/80 bg-white/75 p-4 shadow-xl backdrop-blur md:grid-cols-[240px_minmax(0,1fr)] md:p-6">
        <aside className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4">
          <div className="mb-6 flex items-center gap-2 text-zinc-900">
            <Sparkles className="size-5" />
            <p className="font-semibold">Studio Dashboard</p>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm ${
                  item.active
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Objectif du mois
            </p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">60 000 EUR</p>
            <div className="mt-3 h-2 rounded-full bg-zinc-200">
              <div className="h-2 w-[71%] rounded-full bg-zinc-900" />
            </div>
            <p className="mt-2 text-xs text-zinc-500">42 800 EUR signes (71%)</p>
          </div>

          <Button asChild className="mt-6 w-full">
            <Link href="/">Retour vitrine</Link>
          </Button>
        </aside>

        <section className="space-y-4">
          <header className="flex flex-col gap-3 rounded-2xl border border-zinc-200/80 bg-white/90 p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-zinc-500">Pilotage commercial et delivery</p>
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Dashboard general
              </h1>
            </div>
            <div className="flex gap-2">
              <div className="relative w-full md:w-64">
                <Search className="pointer-events-none absolute top-2.5 left-3 size-4 text-zinc-400" />
                <Input className="pl-9" placeholder="Rechercher un client..." />
              </div>
              <Button variant="outline">Exporter</Button>
              <Button>Nouveau lead</Button>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="border-zinc-200/80 bg-white/90">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-600">
                    {metric.label}
                  </CardTitle>
                  <metric.icon className="size-4 text-zinc-500" />
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="text-2xl font-semibold text-zinc-900">{metric.value}</p>
                  <p
                    className={`text-xs ${
                      metric.tone === "positive" ? "text-emerald-700" : "text-zinc-500"
                    }`}
                  >
                    {metric.delta}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <Card className="border-zinc-200/80 bg-white/90">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Pipeline commercial</CardTitle>
                <Button variant="outline" size="sm">
                  Voir tout
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 text-left text-zinc-500">
                        <th className="py-2 font-medium">Client</th>
                        <th className="py-2 font-medium">Service</th>
                        <th className="py-2 font-medium">Montant</th>
                        <th className="py-2 font-medium">Statut</th>
                        <th className="py-2 font-medium">Owner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deals.map((deal) => (
                        <tr key={`${deal.client}-${deal.service}`} className="border-b border-zinc-100">
                          <td className="py-3 font-medium text-zinc-900">{deal.client}</td>
                          <td className="py-3 text-zinc-600">{deal.service}</td>
                          <td className="py-3 text-zinc-900">{deal.amount}</td>
                          <td className="py-3">
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass(deal.stage)}`}
                            >
                              {deal.stage}
                            </span>
                          </td>
                          <td className="py-3 text-zinc-600">{deal.owner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-200/80 bg-white/90">
              <CardHeader>
                <CardTitle>Activite recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 text-emerald-600" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">
                      Proposition envoyee a Maison Cime
                    </p>
                    <p className="text-xs text-zinc-500">Il y a 2 heures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-0.5 size-4 text-amber-600" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">
                      Domaine email Resend non verifie
                    </p>
                    <p className="text-xs text-zinc-500">Il y a 4 heures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers3 className="mt-0.5 size-4 text-sky-600" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">
                      Nouveau brief recu depuis le formulaire contact
                    </p>
                    <p className="text-xs text-zinc-500">Hier</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Card className="border-zinc-200/80 bg-white/90">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Priorites de la semaine</CardTitle>
                <Target className="size-4 text-zinc-500" />
              </CardHeader>
              <CardContent className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.title}
                    className="rounded-lg border border-zinc-200 bg-white p-3"
                  >
                    <p className="text-sm font-medium text-zinc-900">{task.title}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
                      <Clock3 className="size-3.5" />
                      <span>{task.due}</span>
                      <span
                        className={`rounded-full px-2 py-1 font-medium ${priorityClass(task.priority)}`}
                      >
                        {task.priority}
                      </span>
                      <span className={`ml-auto font-medium ${taskStatusClass(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-zinc-200/80 bg-white/90">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Execution roadmap</CardTitle>
                <ArrowUpRight className="size-4 text-zinc-500" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-zinc-900">Sprint front-end</p>
                  <div className="mt-2 h-2 rounded-full bg-zinc-200">
                    <div className="h-2 w-[84%] rounded-full bg-sky-600" />
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">84% complete</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Integrations API</p>
                  <div className="mt-2 h-2 rounded-full bg-zinc-200">
                    <div className="h-2 w-[56%] rounded-full bg-amber-500" />
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">56% complete</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">QA / production</p>
                  <div className="mt-2 h-2 rounded-full bg-zinc-200">
                    <div className="h-2 w-[31%] rounded-full bg-emerald-600" />
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">31% complete</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
