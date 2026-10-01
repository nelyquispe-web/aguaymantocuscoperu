import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Button } from "@/components/ui/button";
import { contacto, whatsappUrl } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  validateSearch: z.object({ producto: z.string().optional(), servicio: z.string().optional() }),
  head: () =>
    seo({
      title: "Contacto y cotizaciones — Aguaymanto Perú",
      description: "Solicita una cotización de aguaymanto o conversa con nosotros sobre una oportunidad comercial. WhatsApp, teléfono, correo y formulario.",
      path: "/contacto",
    }),
  component: Contacto,
});

function Contacto() {
  const { producto } = Route.useSearch();
  const datos = [
    { I: MessageCircle, t: "WhatsApp", v: contacto.whatsappVisible, href: whatsappUrl() },
    { I: Phone, t: "Teléfono", v: contacto.telefono, href: contacto.telefonoHref },
    { I: Mail, t: "Correo electrónico", v: contacto.correo, href: `mailto:${contacto.correo}` },
    { I: MapPin, t: "Dirección", v: `${contacto.direccion} — ${contacto.ciudad}` },
    { I: Clock, t: "Horario de atención", v: contacto.horario },
  ];
  return (
    <>
      <section className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionTitle as="h1" eyebrow="Contacto" titulo="Estamos aquí para atenderte" texto="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos." />
          <ul className="mt-10 space-y-5">
            {datos.map(({ I, t, v, href }) => (
              <li key={t} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary-soft"><I className="size-5" aria-hidden="true" /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-primary hover:text-primary-soft">{v}</a>
                  ) : (
                    <p className="font-medium text-primary">{v}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Button asChild variant="verde" size="xl" className="mt-10">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar por WhatsApp</a>
          </Button>
        </div>
        <ContactForm productoInicial={producto ?? ""} />
      </section>
      <FAQAccordion />
    </>
  );
}
