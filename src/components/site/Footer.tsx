import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { contacto, navegacion, redes, site, whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {site.eslogan}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">{site.nombre}</p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">Enlaces</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navegacion.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/75 transition-colors hover:text-accent-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">Información</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-accent-soft">
                WhatsApp {contacto.whatsappVisible}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
              <a href={contacto.telefonoHref} className="hover:text-accent-soft">
                {contacto.telefono}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
              <a href={`mailto:${contacto.correo}`} className="hover:text-accent-soft">
                {contacto.correo}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
              <span>{contacto.direccion} — {contacto.ciudad}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
              <span>{contacto.horario}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">Redes sociales</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/75 transition-colors hover:text-accent-soft"
                >
                  {red.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© 2026 {site.nombre}. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidad" className="hover:text-accent-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="hover:text-accent-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
