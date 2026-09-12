# ADR 0002 — Evolução para Arquitetura Full Stack MVC Desacoplada (Frontend + Backend)

- **Status**: Aceita
- **Data**: 2026-09-12
- **Contexto LES**: Horizonte H2 (Crescimento e Especialização)
- **Referências**: LES v2.2.0, ADR 0001, Biblioteca_PadraoIA

---

## Contexto

A ADR 0001 estabeleceu o Horizonte H1 como uma Single Page Application estática focada na velocidade e simplicidade inicial. 

Com o amadurecimento dos projetos em produção (Portal de Engenharia, BankingProtheus com Itaú OAuth2/mTLS e Portal de RH com IA), surgiu a necessidade de comprovar competências reais de desenvolvimento Full Stack e Análise de Sistemas corporativos. O portfólio agora precisa:

1. Demonstrar capacidade arquitetural completa com separação estrita de camadas no backend (**Controller, Service, Repository, Model, Routes, Middlewares, Validators**).
2. Fornecer um serviço de contato real e seguro com persistência, sanitização, validação, proteção anti-spam e tratamento canônico de erros.
3. Servir dados estruturados dos projetos através de endpoints versionados (`/api/v1/projects`).
4. Apresentar um duplo posicionamento profissional transparente (**Analista de Sistemas / TOTVS Protheus** e **Desenvolvedor Full Stack Júnior**).
5. Seguir as diretrizes normativas da `Biblioteca_PadraoIA` e do padrão LES v2.2.0.

---

## Decisão

1. **Estrutura Monorepo com Workspaces (`npm workspaces`)**:
   - `frontend/`: Aplicação React 19 + Vite 6 + Tailwind CSS v4 + shadcn/ui.
   - `backend/`: API REST em Node.js com TypeScript, Express, Prisma ORM e PostgreSQL.
   - `packages/contracts/`: Contratos de interface, DTOs e esquema canônico de erro LES compartilhados entre cliente e servidor.
2. **Camadas MVC no Backend**:
   - **Controllers**: Recebem requisições HTTP, delegam aos serviços e retornam respostas estruturadas.
   - **Services**: Encapsulam regras de negócio, sanitização e orquestração.
   - **Repositories**: Isolamento do acesso a dados via Prisma e abstração por interface (permitindo implementações em memória para testes herméticos).
   - **Models / Entidades**: Definição das entidades do domínio.
   - **Routes & Validators**: Roteamento semântico com validação estrita via schemas Zod.
   - **Middlewares**: Correlation-ID rastreável, tratamento global de erros no formato canônico LES, rate limiting e proteção contra spam (honeypot).
3. **Persistência com PostgreSQL e Prisma**:
   - Modelagem com migrações versionadas e seed reproduzível.
   - Zero secrets no código (configuração centralizada via `.env` e `.env.example`).
4. **Resiliência e 9 Estados do LES no Frontend**:
   - Integração com a API através de cliente HTTP resiliente que suporta fallback gracioso/offline caso a API esteja em processo de cold start ou temporariamente indisponível.
   - Tratamento dos estados de Interface LES: Default, Loading (Skeleton), Error, Empty State, Offline e Feedback de Sucesso.

---

## Consequências

- **Positivas**:
  - Demonstração prática e auditável de maturidade técnica em arquitetura, segurança e boas práticas.
  - Formação de um backend funcional real e testado, sem simulações vazias.
  - Isolamento estrito entre camadas, facilitando manutenção e escalabilidade.
- **Compromissos**:
  - Necessidade de esteiras de deploy para dois componentes (Frontend na CDN Cloudflare Pages e Backend em serviço conteinerizado / PaaS gratuita com PostgreSQL).
  - Manutenção de contratos sincronizados em `packages/contracts`.
