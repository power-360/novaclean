import { ArrowUpRight } from "lucide-react";

import type { DetailedService, ServiceCardItem, ValueItem } from "./data";

export function ServiceGrid({ items }: { items: ServiceCardItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <a
          key={item.id}
          href={item.href}
          className="group animate-fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_16px_36px_rgba(14,116,144,0.18)]"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="mb-5 inline-flex rounded-xl border border-sky-100 bg-sky-50 p-3 text-sky-800">
            <item.icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-900">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
            Voir les détails
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        </a>
      ))}
    </div>
  );
}

export function ValueGrid({ items }: { items: ValueItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="mb-4 inline-flex rounded-lg bg-slate-900 p-2.5 text-sky-200">
            <item.icon className="size-4" aria-hidden="true" />
          </div>
          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ServiceDetails({ items }: { items: DetailedService[] }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <article
          key={item.id}
          id={item.id}
          className="animate-fade-up scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_26px_rgba(15,23,42,0.06)] sm:p-9"
          data-service-id={item.id}
          style={{ animationDelay: `${index * 55}ms` }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700">{item.shortIntro}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{item.paragraph}</p>
              <p className="mt-4 rounded-xl border border-sky-100 bg-sky-50 p-4 text-sm font-medium leading-relaxed text-sky-900">
                {item.benefit}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Demander un devis
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
