import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Mayoristas, PorQueElegirnos, FAQAccordion } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServiceCard } from "@/components/site/Cards";
import { servicios } from "@/data/servicios";
import { seo } from "@/lib/seo";
import mercado from "@/assets/mercado.jpg";

export const Route = createFileRoute("/servicios")({
  head: () =>
    seo({
      title: "Servicios — Venta de aguaymanto al por mayor y por menor",
      description: "Venta de aguaymanto, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      path: "/servicios",
    }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero eyebrow="Nuestros servicios" titulo="Atención comercial a la medida de tu negocio" texto="Desde compras particulares hasta pedidos mayoristas: te acompañamos en cada paso." imagen={mercado} alt="Aguaymanto exhibido en un punto de venta" />
      <section className="container-page py-24">
        <SectionTitle eyebrow="Lo que ofrecemos" titulo="Servicios alrededor del aguaymanto" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <div key={s.id} id={s.id}><ServiceCard servicio={s} delay={(i % 3) * 100} /></div>
          ))}
        </div>
      </section>
      <PorQueElegirnos />
      <Mayoristas />
      <FAQAccordion />
    </>
  );
}
