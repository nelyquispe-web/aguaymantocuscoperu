import { Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, razones } from "@/data/empresa";
import { whatsappUrl } from "@/config/site";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import mayoristaImg from "@/assets/producto-mayorista.jpg";

/** Cabecera interna de páginas. */
export function PageHero({ eyebrow, titulo, texto, imagen, alt }: { eyebrow: string; titulo: string; texto: string; imagen: string; alt: string }) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <img src={imagen} alt={alt} width={1920} height={1088} className="absolute inset-0 size-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div className="container-page relative py-24 md:py-32">
        <span className="eyebrow text-accent-soft">
          <span className="h-px w-8 bg-accent-soft/70" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl animate-fade-up text-balance text-4xl leading-[1.1] text-primary-foreground md:text-5xl">{titulo}</h1>
        <p className="mt-5 max-w-2xl animate-fade-up text-lg text-primary-foreground/80">{texto}</p>
      </div>
    </section>
  );
}

export function Mayoristas() {
  const items = ["Pedidos por volumen", "Atención personalizada", "Presentaciones comerciales", "Coordinación de entregas", "Cotizaciones"];
  return (
    <section id="mayoristas" className="container-page py-24">
      <div className="grid overflow-hidden rounded-2xl bg-primary shadow-lift lg:grid-cols-2">
        <div className="p-8 md:p-14">
          <SectionTitle light eyebrow="Clientes empresariales" titulo="¿Buscas un proveedor de aguaymanto?" texto="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto." />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-3 text-primary-foreground/90">
                <span className="grid size-6 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3.5" aria-hidden="true" /></span>
                {i}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="xl"><Link to="/contacto">Solicitar cotización</Link></Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar por WhatsApp</a>
            </Button>
          </div>
        </div>
        <img src={mayoristaImg} alt="Cajas de aguaymanto preparadas para pedidos mayoristas" loading="lazy" className="h-72 w-full object-cover lg:h-full" />
      </div>
    </section>
  );
}

export function PorQueElegirnos() {
  return (
    <section className="bg-cream py-24">
      <div className="container-page">
        <SectionTitle align="center" eyebrow="¿Por qué elegirnos?" titulo="Razones para confiar en nosotros" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {razones.map((r, i) => (
            <Reveal key={r.titulo} delay={i * 80} className="bg-card p-7">
              <span className="font-display text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-lg text-primary">{r.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQAccordion() {
  return (
    <section className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
      <SectionTitle eyebrow="Preguntas frecuentes" titulo="Resolvemos tus dudas" texto="Si no encuentras la respuesta que buscas, escríbenos y te atenderemos personalmente." />
      <Reveal>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.pregunta} value={`f-${i}`}>
              <AccordionTrigger className="py-5 text-left font-display text-lg text-primary hover:no-underline">{f.pregunta}</AccordionTrigger>
              <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">{f.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function CTABanda() {
  return (
    <section className="container-page">
      <Reveal className="relative overflow-hidden rounded-2xl bg-gradient-aguaymanto px-8 py-14 text-center md:px-16">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl text-accent-foreground md:text-4xl">¿Listo para trabajar con aguaymanto peruano de calidad?</h2>
        <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80">Cuéntanos qué necesitas y te enviaremos una propuesta.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="verde" size="xl"><Link to="/contacto">Contactarnos</Link></Button>
          <Button asChild variant="outlineVerde" size="xl"><Link to="/servicios">Conocer nuestros servicios</Link></Button>
        </div>
      </Reveal>
    </section>
  );
}
