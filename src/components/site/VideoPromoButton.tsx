import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Botón que abre un video de YouTube a pantalla completa.
 * Cambia VIDEO_ID_YOUTUBE en src/config/site.ts para usar otro video.
 */
export function VideoPromoButton({ variante = "claro", etiqueta = "Ver video" }: { variante?: "claro" | "oscuro"; etiqueta?: string }) {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const cerrarConEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    document.addEventListener("keydown", cerrarConEscape);
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = previo;
    };
  }, [abierto]);

  return (
    <>
      <Button
        variant={variante === "claro" ? "outlineLight" : "outlineVerde"}
        size="xl"
        onClick={() => setAbierto(true)}
      >
        <Play className="size-5 fill-current" aria-hidden="true" />
        {etiqueta}
      </Button>

      {abierto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video sobre el aguaymanto peruano"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setAbierto(false)}
        >
          <button
            aria-label="Cerrar video"
            onClick={() => setAbierto(false)}
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <div
            className={cn(
              "relative aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-lift animate-fade-up",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/Q9hFoMARo3A?autoplay=1&rel=0"
              title="La producción de aguaymanto en Cajamarca, Perú"
              className="absolute inset-0 size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
