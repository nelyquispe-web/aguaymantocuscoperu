import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** [LOGO DE LA EMPRESA] — logotipo temporal de texto con marca gráfica del fruto. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${site.nombreCorto} — Inicio`}>
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:scale-105",
          light ? "bg-accent/20" : "bg-secondary",
        )}
      >
        <svg viewBox="0 0 32 32" className="size-6" aria-hidden="true">
          <path
            d="M16 5c3 3.5 7 4.5 10 4-.5 4.5-3.5 8-10 9.5C9.5 17 6.5 13.5 6 9c3 .5 7-.5 10-4Z"
            fill="var(--accent)"
          />
          <circle cx="16" cy="21.5" r="5" fill="var(--accent-soft)" />
          <path d="M16 5v9" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[1.05rem] font-semibold tracking-tight",
            light ? "text-primary-foreground" : "text-primary",
          )}
        >
          {site.nombreCorto}
        </span>
        <span
          className={cn(
            "block text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
            light ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Producción y comercio
        </span>
      </span>
    </Link>
  );
}
