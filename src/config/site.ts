/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: todo el sitio los toma de este archivo.
 */

export const site = {
  nombre: "[NOMBRE DE LA EMPRESA]",
  nombreCorto: "AGUAYMANTO PERÚ",
  eslogan: "Calidad y compromiso desde el campo peruano.",
  descripcion:
    "Producción, comercialización y venta de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",
  url: "https://aguaymantoperu.lovable.app",
};

export const contacto = {
  whatsapp: "51954046688",
  whatsappVisible: "+51 954 046 688",
  telefono: "+51 920 176 230",
  telefonoHref: "tel:+51920176230",
  correo: "comercio@aguaymantoperusauceda.com",
  direccion: "Comunidad de Sauceda S/N",
  ciudad: "Limatambo — Anta - Cusco",
  horario: "Lunes a viernes de 8:00 a. m. a 5:00 p. m.",
};

export const whatsappMensaje =
  "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.";

/** Video promocional (YouTube). Reemplaza el ID cuando tengas el video propio. */
export const videoYouTube = {
  id: "Q9hFoMARo3A",
  titulo: "La producción de aguaymanto en Cajamarca, Perú",
};

export function whatsappUrl(mensaje: string = whatsappMensaje) {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const redes = [
  { nombre: "Facebook", url: "#" },
  { nombre: "Instagram", url: "#" },
  { nombre: "TikTok", url: "#" },
  { nombre: "LinkedIn", url: "#" },
] as const;

export const navegacion = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
