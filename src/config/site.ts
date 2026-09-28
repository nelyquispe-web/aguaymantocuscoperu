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
  whatsapp: "51999999999", // [WHATSAPP] solo dígitos, con código de país
  whatsappVisible: "[WHATSAPP]",
  telefono: "[TELÉFONO]",
  telefonoHref: "tel:+51999999999",
  correo: "[CORREO]",
  direccion: "[DIRECCIÓN]",
  ciudad: "[CIUDAD], Perú",
  horario: "[HORARIO DE ATENCIÓN]",
};

export const whatsappMensaje =
  "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.";

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
