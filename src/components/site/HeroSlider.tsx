import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VideoPromoButton } from "@/components/site/VideoPromoButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroCampo from "@/assets/hero-campo.jpg";
import heroFruto from "@/assets/hero-fruto.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

type Slide = {
  imagen: string;
  alt: string;
  titulo: string;
  texto?: string;
  acciones: { label: string; to: string; variant: "cta" | "outlineLight" }[];
};

const slides: Slide[] = [
  {
    imagen: heroCampo,
    alt: "Plantación de aguaymanto peruano al atardecer con montañas de fondo",
    titulo: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    texto:
      "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    acciones: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "cta" },
      { label: "Solicitar cotización", to: "/contacto", variant: "outlineLight" },
    ],
  },
  {
    imagen: heroCosecha,
    alt: "Agricultores peruanos cosechando aguaymanto en el campo",
    titulo: "Del campo peruano a nuevos mercados",
    texto:
      "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    acciones: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "cta" }],
  },
  {
    imagen: heroFruto,
    alt: "Aguaymanto fresco recién cosechado en una caja de madera",
    titulo: "Natural, versátil y de excelente calidad",
    acciones: [{ label: "Ver productos", to: "/productos", variant: "cta" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused, index]);

  return (
    <section
      aria-label="Presentación principal"
      aria-roledescription="carrusel"
      className="relative h-[86svh] min-h-[560px] w-full overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.titulo}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.imagen}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn("size-full object-cover", i === index && "animate-slow-zoom")}
          />
          <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
        </div>
      ))}

      <div className="container-page relative flex h-full items-end pb-24 md:items-center md:pb-0">
        <div key={index} className="max-w-3xl animate-fade-up">
          <span className="eyebrow text-accent-soft">
            <span className="h-px w-8 bg-accent-soft/70" aria-hidden="true" />
            Aguaymanto del Perú
          </span>
          <h1 className="mt-4 text-balance text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-[3.8rem]">
            {slides[index]!.titulo}
          </h1>
          {slides[index]!.texto ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {slides[index]!.texto}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {slides[index]!.acciones.map((a) => (
              <Button key={a.label} asChild variant={a.variant} size="xl">
                <Link to={a.to}>{a.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page absolute inset-x-0 bottom-6 flex items-center justify-between">
        <div className="flex gap-2.5" role="tablist" aria-label="Diapositivas">
          {slides.map((s, i) => (
            <button
              key={s.titulo}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft",
                i === index ? "w-10 bg-accent" : "w-5 bg-primary-foreground/45 hover:bg-primary-foreground/70",
              )}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => go(-1)}
            aria-label="Diapositiva anterior"
            className="grid size-10 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Siguiente diapositiva"
            className="grid size-10 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
