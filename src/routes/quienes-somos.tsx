import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, CTABanda } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ValueCard, IconBadge } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { historia, mision, vision, valores, compromiso } from "@/data/empresa";
import { seo } from "@/lib/seo";
import campoAndino from "@/assets/campo-andino.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () =>
    seo({
      title: "Quiénes Somos — Aguaymanto Perú",
      description: "Conoce nuestra empresa, historia, misión, visión y valores. Producimos y comercializamos aguaymanto con raíces en el campo peruano.",
      path: "/quienes-somos",
    }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero eyebrow="Quiénes somos" titulo="Una empresa con raíces en el campo peruano" texto="Producimos y comercializamos aguaymanto con compromiso, responsabilidad y visión de crecimiento." imagen={cosecha} alt="Agricultores cosechando aguaymanto" />

      <section id="nuestra-empresa" className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal><img src={campoAndino} alt="Andenes de cultivo de aguaymanto en la sierra peruana" width={1200} height={912} loading="lazy" className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift" /></Reveal>
        <div>
          <SectionTitle eyebrow="Nuestra empresa" titulo="Quiénes somos y qué hacemos" />
          <Reveal delay={100} className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>Somos una empresa peruana dedicada a la producción, comercialización y venta de aguaymanto. Trabajamos con fruto seleccionado y presentaciones pensadas para distintos tipos de clientes.</p>
            <p>Atendemos a clientes particulares, restaurantes, hoteles, tiendas, distribuidores y compradores mayoristas. Nos diferencia la atención personalizada y el cuidado que ponemos en cada etapa, desde el campo hasta la entrega.</p>
            <p>Nuestro compromiso con la calidad guía cada decisión que tomamos.</p>
          </Reveal>
        </div>
      </section>

      <section id="historia" className="bg-cream py-24">
        <div className="container-page">
          <SectionTitle align="center" eyebrow="Nuestra historia" titulo="Un camino en crecimiento" />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            <span className="absolute left-0 right-0 top-6 hidden h-px bg-accent/50 md:block" aria-hidden="true" />
            {historia.map((h, i) => (
              <Reveal as="li" key={h.numero} delay={i * 120} className="relative">
                <span className="relative grid size-12 place-items-center rounded-full bg-primary font-display text-lg text-accent-soft">{h.numero}</span>
                <h3 className="mt-5 text-xl text-primary">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="mision-vision" className="container-page grid gap-6 py-24 md:grid-cols-2">
        {[{ t: "Nuestra Misión", x: mision, I: Target, id: "mision" }, { t: "Nuestra Visión", x: vision, I: Eye, id: "vision" }].map(({ t, x, I, id }, i) => (
          <Reveal key={t} delay={i * 120} className={i === 0 ? "rounded-2xl bg-primary p-10 text-primary-foreground shadow-lift" : "rounded-2xl border border-border bg-card p-10 shadow-soft"}>
            <div id={id}>
              <span className="grid size-14 place-items-center rounded-xl bg-gradient-aguaymanto text-accent-foreground"><I className="size-7" aria-hidden="true" /></span>
              <h2 className={`mt-6 text-3xl ${i === 0 ? "text-primary-foreground" : "text-primary"}`}>{t}</h2>
              <p className={`mt-4 text-lg leading-relaxed ${i === 0 ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{x}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section id="valores" className="bg-cream py-24">
        <div className="container-page">
          <SectionTitle align="center" eyebrow="Nuestros valores" titulo="Lo que nos define" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => <ValueCard key={v.titulo} {...v} delay={(i % 3) * 100} />)}
          </div>
        </div>
      </section>

      <section id="compromiso" className="container-page py-24">
        <SectionTitle eyebrow="Nuestro compromiso" titulo="Tres pilares que guían nuestro trabajo" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {compromiso.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 120} className="border-t-2 border-accent pt-7">
              <IconBadge name={c.icono} large />
              <h3 className="mt-5 text-2xl text-primary">{c.titulo}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.texto}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12"><Button asChild variant="verde" size="xl"><Link to="/productos">Ver productos</Link></Button></Reveal>
      </section>

      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionTitle align="center" eyebrow="Galería" titulo="Nuestro trabajo en imágenes" />
          <div className="mt-12"><Gallery /></div>
        </div>
      </section>

      <div className="pt-24"><CTABanda /></div>
    </>
  );
}
