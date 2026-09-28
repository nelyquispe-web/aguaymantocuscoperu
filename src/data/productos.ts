/** Catálogo de productos — estructura preparada para agregar nuevos productos. */

import productoFresco from "@/assets/producto-fresco.jpg";
import productoMayorista from "@/assets/producto-mayorista.jpg";
import productoEspecial from "@/assets/producto-especial.jpg";

export type Producto = {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  cta: string;
  presentacion?: string;
  peso?: string;
  disponibilidad?: string;
  precio?: string;
  caracteristicas: string[];
  fichaTecnica?: string;
};

export const productos: Producto[] = [
  {
    id: "aguaymanto-fresco",
    titulo: "Aguaymanto fresco",
    descripcion: "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    imagen: productoFresco,
    alt: "Aguaymanto fresco seleccionado en envase para venta",
    cta: "Solicitar información",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "Precio según volumen — consultar",
    caracteristicas: ["Selección manual del fruto", "Cuidado en el manejo y traslado", "Presentación uniforme"],
    fichaTecnica: "[FICHA TÉCNICA]",
  },
  {
    id: "aguaymanto-distribucion",
    titulo: "Aguaymanto para distribución",
    descripcion: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    imagen: productoMayorista,
    alt: "Cajas de aguaymanto listas para distribución comercial",
    cta: "Consultar",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "Precio mayorista — consultar",
    caracteristicas: ["Pedidos por volumen", "Coordinación de entregas", "Empaque adecuado para traslado"],
    fichaTecnica: "[FICHA TÉCNICA]",
  },
  {
    id: "presentaciones-especiales",
    titulo: "Presentaciones especiales",
    descripcion: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    imagen: productoEspecial,
    alt: "Diferentes presentaciones de aguaymanto en bolsa, caja de madera y frasco",
    cta: "Consultar presentación",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "A evaluar según requerimiento",
    caracteristicas: ["Formatos según requerimiento", "Evaluación caso por caso", "Asesoría comercial incluida"],
    fichaTecnica: "[FICHA TÉCNICA]",
  },
];
