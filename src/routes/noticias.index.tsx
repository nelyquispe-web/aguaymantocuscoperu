import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Sections";
import { NewsCard } from "@/components/site/Cards";
import { noticias, categorias } from "@/data/noticias";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";
import cultivo from "@/assets/cultivo.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () =>
    seo({
      title: "Noticias y actualidad — Aguaymanto Perú",
      description: "Novedades de la empresa, agricultura, mercado y producción de aguaymanto peruano.",
      path: "/noticias",
    }),
  component: Noticias,
});

function Noticias() {
  const [cat, setCat] = useState<string | null>(null);
  const lista = cat ? noticias.filter((n) => n.categoria === cat) : noticias;
  return (
    <>
      <PageHero eyebrow="Noticias y actualidad" titulo="Lo último desde el campo peruano" texto="Novedades de la empresa, agricultura y mercado del aguaymanto." imagen={cultivo} alt="Planta de aguaymanto en cultivo" />
      <section className="container-page py-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
          {[null, ...categorias].map((c) => (
            <button
              key={c ?? "todas"}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-secondary",
              )}
            >
              {c ?? "Todas"}
            </button>
          ))}
        </div>
        {lista.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lista.map((n, i) => <NewsCard key={n.slug} noticia={n} delay={i * 100} />)}
          </div>
        ) : (
          <p className="mt-12 text-muted-foreground">Aún no hay noticias en esta categoría.</p>
        )}
      </section>
    </>
  );
}
