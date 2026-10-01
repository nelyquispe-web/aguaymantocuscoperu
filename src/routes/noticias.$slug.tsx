import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { NewsCard } from "@/components/site/Cards";
import { Button } from "@/components/ui/button";
import { getNoticia, noticias } from "@/data/noticias";
import { seo } from "@/lib/seo";
import { site } from "@/config/site";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = getNoticia(params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Noticia no encontrada" }] };
    const n = loaderData.noticia;
    const base = seo({ title: `${n.titulo} — Aguaymanto Perú`, description: n.resumen, path: `/noticias/${n.slug}` });
    return {
      ...base,
      meta: [...base.meta.filter((m) => !("property" in m && m.property === "og:type")), { property: "og:type", content: "article" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: n.titulo,
            datePublished: n.fecha,
            author: { "@type": "Person", name: n.autor },
            publisher: { "@type": "Organization", name: site.nombre },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl text-primary">Noticia no encontrada</h1>
      <Link to="/noticias" className="mt-6 inline-block font-semibold text-primary-soft underline">Ver todas las noticias</Link>
    </div>
  ),
  component: NoticiaPage,
});

function NoticiaPage() {
  const { noticia: n } = Route.useLoaderData();
  const relacionadas = noticias.filter((x) => x.slug !== n.slug).slice(0, 3);
  return (
    <article>
      <header className="container-page max-w-4xl pt-16">
        <Link to="/noticias" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft hover:text-primary">
          <ArrowLeft className="size-4" aria-hidden="true" /> Noticias
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-secondary px-3 py-1 font-semibold uppercase tracking-wide text-primary-soft">{n.categoria}</span>
          <time dateTime={n.fecha} className="text-muted-foreground">{n.fechaTexto}</time>
          <span className="text-muted-foreground">· Por {n.autor}</span>
        </div>
        <h1 className="mt-5 animate-fade-up text-balance text-4xl leading-tight text-primary md:text-5xl">{n.titulo}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{n.resumen}</p>
      </header>
      <div className="container-page mt-10 max-w-5xl">
        <img src={n.imagen} alt={n.alt} width={1200} height={912} className="aspect-16/9 w-full rounded-2xl object-cover shadow-lift" />
      </div>
      <div className="container-page max-w-3xl space-y-5 py-14 text-[1.07rem] leading-relaxed text-foreground/85">
        {n.contenido.map((p, i) => <p key={i}>{p}</p>)}
        {n.galeria?.length ? (
          <div className="grid grid-cols-2 gap-3 pt-6">
            {n.galeria.map((g) => <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="rounded-lg object-cover" />)}
          </div>
        ) : null}
        <div className="pt-6"><Button asChild variant="cta" size="lg"><Link to="/contacto">Contactarnos</Link></Button></div>
      </div>
      <section className="bg-cream py-20">
        <div className="container-page">
          <h2 className="text-3xl text-primary">Noticias relacionadas</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relacionadas.map((r, i) => <NewsCard key={r.slug} noticia={r} delay={i * 100} />)}
          </div>
        </div>
      </section>
    </article>
  );
}
