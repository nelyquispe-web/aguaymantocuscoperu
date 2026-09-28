/** Servicios — contenido editable. */

export type Servicio = {
  id: string;
  titulo: string;
  descripcion: string;
  icono: "shopping-basket" | "package" | "utensils" | "store" | "settings" | "headset";
};

export const servicios: Servicio[] = [
  {
    id: "venta",
    titulo: "Venta de aguaymanto",
    descripcion: "Venta de producto para clientes particulares y comerciales.",
    icono: "shopping-basket",
  },
  {
    id: "venta-mayorista",
    titulo: "Venta al por mayor",
    descripcion: "Atención de pedidos de mayor volumen.",
    icono: "package",
  },
  {
    id: "restaurantes",
    titulo: "Atención a restaurantes",
    descripcion: "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    icono: "utensils",
  },
  {
    id: "tiendas",
    titulo: "Atención a tiendas y distribuidores",
    descripcion: "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    icono: "store",
  },
  {
    id: "personalizados",
    titulo: "Pedidos personalizados",
    descripcion: "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    icono: "settings",
  },
  {
    id: "asesoria",
    titulo: "Asesoría comercial",
    descripcion: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    icono: "headset",
  },
];
