<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS

- Editable business content lives in `src/config/site.ts` and `src/data/*.ts`; components only read it — so the company can update text without touching layout.
- Site chrome (Header, Footer, WhatsApp button) renders in `src/routes/__root.tsx`; each section is its own route with `seo()` head from `src/lib/seo.ts`.
- Contact form submission is isolated in `enviarConsulta` (ContactForm.tsx) — swap it for email/CRM/backend later.
