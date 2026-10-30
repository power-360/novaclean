import { Star } from "lucide-react";

import type { Testimonial } from "./data";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.name}
          className="animate-fade-up flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: item.rating }).map((_, starIndex) => (
              <Star
                key={starIndex}
                className="size-4 fill-current"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
            « {item.quote} »
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-800">
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {item.name}
              </p>
              <p className="text-xs text-slate-500">
                {item.service} · {item.date}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
