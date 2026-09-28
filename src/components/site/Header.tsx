import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navegacion, contacto } from "@/config/site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "hidden bg-primary text-primary-foreground/80 transition-all duration-300 md:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="container-page flex items-center justify-between py-2 text-xs">
          <p>{contacto.ciudad} · {contacto.horario}</p>
          <p className="flex items-center gap-2">
            <Phone className="size-3.5" aria-hidden="true" />
            <a href={contacto.telefonoHref} className="hover:text-accent-soft">
              {contacto.telefono}
            </a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${contacto.correo}`} className="hover:text-accent-soft">
              {contacto.correo}
            </a>
          </p>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border bg-background/95 shadow-soft backdrop-blur-md"
            : "border-transparent bg-background",
        )}
      >
        <div className={cn("container-page flex items-center justify-between transition-all duration-300", scrolled ? "py-2.5" : "py-4")}>
          <Logo />

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
            {navegacion.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="cta" size="lg" className="hidden sm:inline-flex">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid size-11 place-items-center rounded-md border border-border text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div
          id="menu-movil"
          className={cn(
            "overflow-hidden border-t border-border bg-background transition-[max-height] duration-400 lg:hidden",
            open ? "max-h-[32rem]" : "max-h-0",
          )}
        >
          <nav aria-label="Navegación móvil" className="container-page flex flex-col gap-1 py-4">
            {navegacion.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary [&.active]:bg-secondary [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="lg" className="mt-2">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
