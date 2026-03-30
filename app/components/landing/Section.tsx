import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  inverted?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  inverted = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
                inverted
                  ? "border border-cyan-200/30 bg-cyan-300/10 text-cyan-200"
                  : "border border-sky-200 bg-sky-50 text-sky-800",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
              inverted ? "text-white" : "text-slate-950",
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "text-pretty text-base leading-relaxed sm:text-lg",
                inverted ? "text-slate-200" : "text-slate-600",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
