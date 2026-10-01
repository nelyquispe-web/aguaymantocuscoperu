import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => seo({ title: "Política de privacidad — Aguaymanto Perú", description: "Cómo tratamos los datos personales enviados a través de nuestro sitio web.", path: "/politica-de-privacidad" }),
  component: () => (
    <section className="container-page max-w-3xl space-y-5 py-20 leading-relaxed text-foreground/85">
      <h1 className="text-4xl text-primary">Política de privacidad</h1>
      <p>[TEXTO PENDIENTE] {site.nombre} utilizará los datos enviados a través del formulario de contacto únicamente para responder consultas y cotizaciones.</p>
      <p>Este contenido es provisional y debe ser reemplazado por la política oficial de la empresa.</p>
    </section>
  ),
});
