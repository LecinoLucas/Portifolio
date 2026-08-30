# Arquitetura do Projeto: Portifolio

> **Padrao**: Lucas Engineering Standard (LES) — v2.2.0
> **Filosofia**: "Design for evolution, not for imaginary scale."

---

## 1. Visao Geral

O **Portifolio** e uma **Single Page Application estatica** (React + Vite + TypeScript),
sem backend, banco ou autenticacao nesta fase (H1). Todo o conteudo e tipado em
`src/data/*` e a saida (`npm run build`) e um conjunto de arquivos estaticos
publicavel em qualquer host (alvo: Cloudflare Pages).

```text
[ Navegador ]
     |
     v
+---------------------------------------------+
|  SPA React (Vite build -> dist/ estatico)   |
|                                             |
|  app/         -> shell + provider de tema   |
|  sections/    -> composicao das secoes      |
|  components/  -> ui (shadcn) > layout >      |
|                  portfolio (dominio) >      |
|                  shared                      |
|  data/        -> conteudo tipado            |
+---------------------------------------------+
```

Ver decisao em `docs/decisoes/0001-spa-estatica-sem-backend.md`.

---

## 2. Stack Tecnologica Real
- **Linguagem**: TypeScript (modo estrito).
- **Build**: Vite 6.
- **UI**: React 19, Tailwind CSS v4 (tokens semanticos via CSS variables), shadcn/ui como fundacao de componentes, Lucide para icones.
- **Overlays acessiveis**: `@radix-ui/react-dialog` (Drawer de detalhe de projeto e menu mobile) — focus trap, ESC e restauracao de foco de fabrica.
- **Fonte**: Inter (self-hosted via `@fontsource-variable/inter`, sem requisicao externa).
- **Testes**: Vitest + Testing Library (`src/**/*.test.ts(x)`).
- **Lint**: ESLint (flat config) + typescript-eslint.

---

## 3. Camadas e Hierarquia de Componentes (LES Frontend)

```text
shadcn/ui (src/components/ui)
   -> componente compartilhado (src/components/shared)
   -> composicao (src/sections)
   -> componente de dominio (src/components/portfolio)
   -> CSS customizado somente se necessario (src/styles/globals.css)
```

- **Design Tokens**: definidos como CSS variables em `:root` e `.dark`
  (`--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--ring`,
  `--radius`...). Nenhuma cor hardcoded em componentes.
- **Matriz de Superficie**: detalhe de projeto e menu mobile usam **Drawer**
  (`Sheet`), conforme a regra do LES para "detalhes/filtros/historico".
- **Estados**: nesta fase todo o conteudo e local e tipado — nao ha estados de
  Loading/Error/Empty de origem externa. O `Sheet` trata teclado, foco e ESC.
  Quando dados externos forem introduzidos (ex.: API do GitHub), os 9 estados
  passam a valer para os componentes afetados.

---

## 4. Dados

Conteudo versionado em codigo, um arquivo por dominio:

| Arquivo | Conteudo |
| --- | --- |
| `src/data/perfil.ts` | Identidade, headline, bio, fatos |
| `src/data/experiencias.ts` | Timeline profissional |
| `src/data/projetos.ts` | Projetos + detalhamento do Drawer |
| `src/data/tecnologias.ts` | Stack agrupada por dominio |
| `src/data/principios.ts` | Principios de engenharia |
| `src/data/links.ts` | GitHub, LinkedIn, e-mail, curriculo, LES |

---

## 5. Horizontes de Evolucao
- **H1 (Agora)**: SPA estatica, deploy estatico, sem backend.
- **H2 (Crescimento)**: Backend Monolito Modular **apenas se** houver necessidade
  real (formulario de contato com persistencia, integracao com API do GitHub,
  CMS proprio). Aplicam-se entao PostgreSQL, migrations versionadas, contrato
  canonico de erro e autorizacao no backend.
- **H3 (Escala)**: Nao aplicavel a um portfolio; proibido antecipar.

---

## 6. Deploy
- `npm run build` gera `dist/` estatico.
- Alvo: Cloudflare Pages (ou equivalente). Sem dependencia de servidor.
- `public/` contem `favicon.svg`, `robots.txt`, `site.webmanifest`; falta adicionar
  `curriculo-lecino-lucas.pdf` e `og-image.png` (ver `public/README.md`).
