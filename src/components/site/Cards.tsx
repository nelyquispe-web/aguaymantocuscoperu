import { Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  Handshake,
  Headset,
  Leaf,
  Lightbulb,
  Package,
  Scale,
  Settings,
  Shield,
  ShoppingBasket,
  Sprout,
  Store,
  Users,
  Utensils,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import type { Producto } from "@/data/productos";
import type { Servicio } from "@/data/servicios";
import type { Noticia } from "@/data/noticias";

const iconos: Record<string, LucideIcon> = {
  award: Award,
  handshake: Handshake,
  shield: Shield,
  scale: Scale,
  lightbulb: Lightbulb,
  leaf: Leaf,
  "badge-check": BadgeCheck,
  users: Users,
  sprout: Sprout,
  "shopping-basket": ShoppingBasket,
  package: Package,
  utensils: Utensils,
  store: Store,
  settings: Settings,
  headset: Headset,
};

export function IconBadge({ name, large = false }: { name: string; large?: boolean }) {
  const Icon = iconos[name] ?? Leaf;
  return (
    <span
      className={
        large
          ? "grid size-14 place-items-center rounded-xl bg-gradient-aguaymanto text-accent-foreground"
          : "grid size-11 place-items-center rounded-lg bg-secondary text-primary-soft"
      }
      aria-hidden="true"
    >
      <Icon className={large ? "size-7" : "size-5"} />
    </span>
  );
}

export function ProductCard({ producto, delay = 0 }: { producto: Producto; delay?: number }) {
  return (
    <Reveal delay={delay} as="article" className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
        <div className="aspect-4/3 overflow-hidden bg-muted">
          <img
            src={producto.imagen}
            alt={producto.alt}
            width={1200}
            height={900}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl text-primary">{producto.titulo}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{producto.descripcion}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-foreground/75">
            {producto.caracteristicas.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <Button asChild variant="outlineVerde" size="lg" className="mt-6 w-full">
            <Link to="/contacto" search={{ producto: producto.id }}>
              {producto.cta}
            </Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceCard({ servicio, delay = 0 }: { servicio: Servicio; delay?: number }) {
  return (
    <Reveal delay={delay} as="article" className="h-full">
      <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
        <IconBadge name={servicio.icono} />
        <h3 className="mt-5 text-lg text-primary">{servicio.titulo}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{servicio.descripcion}</p>
        <Link
          to="/contacto"
          search={{ servicio: servicio.id }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft transition-colors hover:text-primary"
        >
          Consultar
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  );
}

export function ValueCard({
  titulo,
  texto,
  icono,
  delay = 0,
}: {
  titulo: string;
  texto: string;
  icono: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} as="article" className="h-full">
      <div className="h-full rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
        <IconBadge name={icono} />
        <h3 className="mt-4 text-base text-primary">{titulo}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
      </div>
    </Reveal>
  );
}

export function NewsCard({ noticia, delay = 0 }: { noticia: Noticia; delay?: number }) {
  return (
    <Reveal delay={delay} as="article" className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
        <div className="aspect-16/10 overflow-hidden bg-muted">
          <img
            src={noticia.imagen}
            alt={noticia.alt}
            width={1200}
            height={900}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold uppercase tracking-wide text-primary-soft">
              {noticia.categoria}
            </span>
            <time dateTime={noticia.fecha} className="text-muted-foreground">
              {noticia.fechaTexto}
            </time>
          </div>
          <h3 className="mt-3 text-lg leading-snug text-primary">{noticia.titulo}</h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{noticia.resumen}</p>
          <Link
            to="/noticias/$slug"
            params={{ slug: noticia.slug }}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft transition-colors hover:text-primary"
          >
            Leer más
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
