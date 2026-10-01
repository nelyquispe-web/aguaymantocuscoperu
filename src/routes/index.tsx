import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard, ServiceCard, NewsCard } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { Mayoristas, PorQueElegirnos, FAQAccordion, CTABanda } from "@/components/site/Sections";
import { productos } from "@/data/productos";
import { servicios } from "@/data/servicios";
import { noticias } from "@/data/noticias";
import { seo } from "@/lib/seo";
import seleccion from "@/assets/seleccion.jpg";
import cultivo from "@/assets/cultivo.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Aguaymanto Perú — Producción y venta de aguaymanto peruano",
      description:
        "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor para restaurantes, tiendas y distribuidores. Solicita tu cotización.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Sobre nosotros"
            titulo="Comprometidos con la calidad del aguaymanto peruano"
            texto="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
          />
          <Reveal delay={150}>
            <Button asChild variant="verde" size="xl" className="mt-8">
              <Link to="/quienes-somos">Conoce quiénes somos</Link>
            </Button>
          </Reveal>
        </div>
        <Reveal className="relative">
          <img src={cultivo} alt="Planta de aguaymanto con frutos en el campo" width={1200} height={912} loading="lazy" className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift" />
          <img src={seleccion} alt="Selección cuidadosa del aguaymanto" width={1200} height={912} loading="lazy" className="absolute -bottom-10 -left-6 hidden w-2/5 rounded-xl border-4 border-background object-cover shadow-lift md:block" />
        </Reveal>
      </section>

      <section className="bg-cream py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Nuestros productos" titulo="Aguaymanto seleccionado para cada cliente" />
            <Button asChild variant="outlineVerde" size="lg"><Link to="/productos">Ver productos</Link></Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {productos.map((p, i) => <ProductCard key={p.id} producto={p} delay={i * 100} />)}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Nuestros servicios" titulo="Soluciones para particulares y negocios" />
          <Button asChild variant="outlineVerde" size="lg"><Link to="/servicios">Conocer nuestros servicios</Link></Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => <ServiceCard key={s.id} servicio={s} delay={(i % 3) * 100} />)}
        </div>
      </section>

      <PorQueElegirnos />
      <Mayoristas />

      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionTitle align="center" eyebrow="Galería" titulo="Del campo a tu mesa" texto="Campos, cosecha, selección y empaque: así trabajamos el aguaymanto." />
          <div className="mt-12"><Gallery /></div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Noticias" titulo="Novedades y actualidad" />
          <Button asChild variant="outlineVerde" size="lg"><Link to="/noticias">Ver todas las noticias</Link></Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {noticias.map((n, i) => <NewsCard key={n.slug} noticia={n} delay={i * 100} />)}
        </div>
      </section>

      <FAQAccordion />
      <CTABanda />
    </>
  );
}
