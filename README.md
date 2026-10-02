# Portfólio — Lecino Lucas

Portfólio profissional de **Lecino Lucas** — Analista de Sistemas & Desenvolvedor Full Stack.
SPA estática em React + Vite + TypeScript, seguindo o **Lecino Lucas Engineering Standard (LES)**.

## Stack

React 19 · Vite 6 · TypeScript · Tailwind CSS v4 · shadcn/ui (fundação) · Radix Dialog · Lucide · Vitest

## Scripts

| Comando | Ação |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | `tsc -b` + build de produção em `dist/` |
| `npm run preview` | Serve o `dist/` localmente |
| `npm test` | Testes (Vitest) |
| `npm run lint` | ESLint |
| `npm run typecheck` | Checagem de tipos sem emitir |
| `npm run set-domain -- https://seudominio.com` | Troca o endereço do site (SEO e currículo) pelo novo; ver `docs/decisoes/0002-endereco-firebase-hosting.md` |

## Governança LES

| Comando | Ação |
| --- | --- |
| `npx @lecinolucas/les check` | Quality gate determinístico |
| `npx @lecinolucas/les audit` | Auditoria de conformidade arquitetural |

Contrato do projeto: [`AGENTS.md`](./AGENTS.md) · Arquitetura: [`docs/arquitetura.md`](./docs/arquitetura.md) · Decisões: [`docs/decisoes/`](./docs/decisoes/)

## Editar conteúdo

Todo o conteúdo é tipado em `src/data/`:

- `perfil.ts` — identidade, headline, bio, fatos
- `experiencias.ts` — timeline profissional
- `formacao.ts` — formação acadêmica
- `projetos.ts` — projetos e detalhamento do drawer
- `tecnologias.ts` — stack por domínio
- `principios.ts` — princípios de engenharia
- `links.ts` — GitHub, LinkedIn, e-mail, currículo

## Pendências antes de publicar

- [ ] Definir o domínio real: `npm run set-domain -- https://seudominio.com`
      (metadados usam o placeholder `https://example.com` até lá)
- [ ] Confirmar a localização (`Goiás · Brasil`) em `src/data/perfil.ts` e `index.html`
      — inferida a partir de PUC Goiás / Rede Marajó, não informada explicitamente

O currículo (`public/curriculo-lecino-lucas.pdf`) e a imagem social
(`public/og-image.png`) já estão no repositório, gerados a partir dos dados
validados em `src/data/*`.

## Deploy

Build estático, compatível com Cloudflare Pages (ou equivalente):

```
Build command:    npm run build
Output directory: dist
```
