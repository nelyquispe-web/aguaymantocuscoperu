/** Noticias de ejemplo — contenido editable / eliminable. */

import mercado from "@/assets/mercado.jpg";
import cultivo from "@/assets/cultivo.jpg";
import seleccion from "@/assets/seleccion.jpg";

export type Noticia = {
  slug: string;
  titulo: string;
  categoria: string;
  fecha: string; // ISO
  fechaTexto: string;
  autor: string;
  resumen: string;
  imagen: string;
  alt: string;
  contenido: string[];
  galeria?: { src: string; alt: string }[];
};

export const categorias = [
  "Noticias de la empresa",
  "Agricultura",
  "Aguaymanto",
  "Mercado",
  "Eventos",
  "Innovación",
  "Producción",
];

export const noticias: Noticia[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    titulo: "El aguaymanto peruano y su presencia en nuevos mercados",
    categoria: "Mercado",
    fecha: "2026-08-12",
    fechaTexto: "12 de agosto de 2026",
    autor: "[AUTOR]",
    resumen:
      "El interés comercial por el aguaymanto continúa creciendo y abre oportunidades para productores y distribuidores peruanos.",
    imagen: mercado,
    alt: "Aguaymanto fresco exhibido en un punto de venta",
    contenido: [
      "El aguaymanto es un fruto originario de los Andes que ha ganado espacio en distintos canales comerciales, tanto en el mercado local como en propuestas orientadas a nuevos destinos.",
      "Para los negocios que trabajan con productos frescos, la constancia en la calidad y la presentación del fruto son factores determinantes al momento de elegir un proveedor.",
      "Este contenido es un texto de ejemplo y puede ser reemplazado por información propia de la empresa.",
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    titulo: "Conoce más sobre el cultivo del aguaymanto",
    categoria: "Agricultura",
    fecha: "2026-07-03",
    fechaTexto: "3 de julio de 2026",
    autor: "[AUTOR]",
    resumen:
      "Desde la siembra hasta la cosecha, el aguaymanto requiere cuidados específicos que influyen directamente en la calidad del fruto.",
    imagen: cultivo,
    alt: "Planta de aguaymanto con frutos envueltos en su cáliz",
    contenido: [
      "El cultivo del aguaymanto se desarrolla en zonas con condiciones de clima y altitud favorables, donde la planta alcanza un buen desarrollo y produce frutos de sabor característico.",
      "El manejo agronómico, el momento de cosecha y el cuidado posterior determinan la presentación final del producto que llega al cliente.",
      "Este contenido es un texto de ejemplo y puede ser reemplazado por información propia de la empresa.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad-y-produccion-responsable",
    titulo: "Nuestra apuesta por la calidad y la producción responsable",
    categoria: "Noticias de la empresa",
    fecha: "2026-06-18",
    fechaTexto: "18 de junio de 2026",
    autor: "[AUTOR]",
    resumen:
      "Trabajamos en procesos de selección y control que buscan mantener una calidad consistente en cada entrega.",
    imagen: seleccion,
    alt: "Personal seleccionando aguaymanto en una mesa de trabajo",
    contenido: [
      "La calidad no es un resultado aislado: depende del trabajo coordinado en el campo, la selección y el empaque del producto.",
      "Nuestro enfoque busca mantener prácticas responsables con las personas y con el entorno en el que operamos.",
      "Este contenido es un texto de ejemplo y puede ser reemplazado por información propia de la empresa.",
    ],
  },
];

export function getNoticia(slug: string) {
  return noticias.find((n) => n.slug === slug);
}
