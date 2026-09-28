import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="¿Necesitas información? Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary-soft p-3.5 text-primary-foreground shadow-lift transition-all duration-300 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:bottom-7 md:right-7"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[12rem] group-hover:pr-1 md:inline-block">
        ¿Necesitas información?
      </span>
    </a>
  );
}
