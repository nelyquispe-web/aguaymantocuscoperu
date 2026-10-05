import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galeria } from "@/data/galeria";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i! + 1) % galeria.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i! - 1 + galeria.length) % galeria.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
        {galeria.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 80}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Ampliar imagen: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-3/4" : "aspect-4/3"}`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-primary/95 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={galeria[open]!.src}
            alt={galeria[open]!.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 inset-x-0 text-center text-sm text-primary-foreground/80">
            {galeria[open]!.alt}
          </p>
          <button aria-label="Cerrar" onClick={() => setOpen(null)} className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
            <X className="size-5" />
          </button>
          <button aria-label="Anterior" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + galeria.length) % galeria.length); }} className="absolute left-4 grid size-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
            <ChevronLeft className="size-5" />
          </button>
          <button aria-label="Siguiente" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % galeria.length); }} className="absolute right-4 grid size-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </>
  );
}
