import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => seo({ title: "Términos y condiciones — Aguaymanto Perú", description: "Condiciones de uso del sitio web y de nuestras cotizaciones comerciales.", path: "/terminos-y-condiciones" }),
  component: () => (
    <section className="container-page max-w-3xl space-y-5 py-20 leading-relaxed text-foreground/85">
      <h1 className="text-4xl text-primary">Términos y condiciones</h1>
      <p>[TEXTO PENDIENTE] Al utilizar el sitio web de {site.nombre} aceptas estas condiciones de uso.</p>
      <p>Este contenido es provisional y debe ser reemplazado por los términos oficiales de la empresa.</p>
    </section>
  ),
});
