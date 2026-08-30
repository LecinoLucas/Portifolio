# ADR 0001 — SPA estática com Vite, sem backend nesta fase

- **Status**: Aceita
- **Data**: 2026-08-29
- **Contexto LES**: Horizonte H1

## Contexto

O `les init` detectou cenário greenfield e pré-preencheu o contrato com defaults de
sistema empresarial: Next.js, backend Fastify/Express, PostgreSQL + Prisma/Kysely e
módulos `autenticacao/usuarios/faturamento/notificacoes`.

O objetivo real do projeto é diferente: um **portfólio profissional** para currículo,
LinkedIn e processos seletivos. Requisitos do proprietário:

- funcionar como aplicação frontend estática;
- sem API própria, banco, autenticação, filas ou microservices sem necessidade real;
- dados de projetos/experiências tipados em arquivos locais;
- build estático (`npm run build`) pronto para deploy gratuito (Cloudflare Pages);
- stack preferencial: React + TypeScript + **Vite** + Tailwind + shadcn/ui + Lucide.

## Decisão

1. **Vite** como build tool, em vez de Next.js. Não há necessidade de SSR/SSG,
   rotas de servidor ou API routes para um site de página única orientado a conteúdo.
   Vite entrega bundle menor, build simples e saída 100% estática.
2. **Sem backend, banco ou ORM** nesta fase. Conteúdo versionado em `src/data/*.ts`.
3. **Módulos de backend** do contrato (`autenticacao`, `faturamento`...) não se
   aplicam; os "domínios" passam a ser blocos de conteúdo (`perfil`, `experiencias`,
   `projetos`, `tecnologias`, `les`).
4. As seções normativas do LES que **permanecem plenamente aplicáveis**: LES Frontend
   & UX Foundation (tokens semânticos, hierarquia de componentes, matriz de
   superfície, acessibilidade) e a Definition of Done.
5. `AGENTS.md`, `docs/arquitetura.md` e `.les/manifest.json` foram atualizados para
   refletir o estado real — mantendo o padrão como "fonte viva de verdade".

## Consequências

- **Positivas**: menor superfície, deploy trivial e gratuito, tempo de carregamento
  baixo, manutenção de conteúdo em um único lugar tipado.
- **Custos**: sem formulário de contato com persistência (usa-se `mailto:`); sem
  dados dinâmicos do GitHub em tempo real.
- **Evolução (H2)**: se surgir necessidade real (contato persistido, integração com
  API do GitHub, CMS próprio), introduz-se um backend **Monolito Modular** conforme
  as seções 3, 6, 7, 8 e 9 do `AGENTS.md`, sem reescrever o frontend.

## Alternativas consideradas

- **Next.js (default do init)**: rejeitado — SSR/rotas de API não agregam a um
  portfólio estático e aumentam a complexidade de build e deploy.
- **Astro**: bom para conteúdo estático, mas o proprietário pediu explicitamente
  React + Vite e o ecossistema shadcn/ui é first-class nesse conjunto.
