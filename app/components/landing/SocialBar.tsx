import type { SocialLink } from "./data";

export function SocialBar({ items }: { items: SocialLink[] }) {
  return (
    <div className="fixed bottom-6 right-6 z-30 hidden flex-col gap-3 sm:flex">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition-colors hover:bg-blue-700 hover:text-white"
        >
          <item.icon className="size-5" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
