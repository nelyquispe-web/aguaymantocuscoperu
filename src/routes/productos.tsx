import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { PageHero, Mayoristas, CTABanda } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/Cards";
import { productos } from "@/data/productos";
import { atributosCalidad } from "@/data/empresa";
import { seo } from "@/lib/seo";
import heroFruto from "@/assets/hero-fruto.jpg";
import empaque from "@/assets/empaque.jpg";

export const Route = createFileRoute("/productos")({
  head: () =>
    seo({
      title: "Productos — Aguaymanto fresco y presentaciones comerciales",
      description: "Aguaymanto fresco seleccionado, presentaciones para distribución y opciones especiales. Consulta disponibilidad y precios por volumen.",
      path: "/productos",
    }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero eyebrow="Nuestros productos" titulo="Aguaymanto peruano seleccionado" texto="Presentaciones para consumo, negocios gastronómicos y distribución comercial." imagen={heroFruto} alt="Aguaymanto fresco en caja de madera" />

      <section id="presentaciones" className="container-page py-24">
        <SectionTitle eyebrow="Catálogo" titulo="Nuestras presentaciones" texto="Cada producto puede adaptarse según volumen y disponibilidad. Consúltanos por presentación, peso y precio." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productos.map((p, i) => <ProductCard key={p.id} producto={p} delay={i * 100} />)}
        </div>
      </section>

      <section id="calidad" className="bg-cream py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Calidad que se nota" titulo="Cuidamos cada detalle del fruto" />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {atributosCalidad.map((a, i) => (
                <Reveal as="li" key={a.titulo} delay={(i % 2) * 100} className="flex gap-3">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h3 className="text-base text-primary">{a.titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal><img src={empaque} alt="Empaque cuidadoso de aguaymanto en envases" width={1200} height={912} loading="lazy" className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift" /></Reveal>
        </div>
      </section>

      <Mayoristas />
      <CTABanda />
    </>
  );
}
