# AGENTS.md — Contrato Normativo do Projeto Portifolio

> **Padrao Base**: Lucas Engineering Standard (LES) — v2.2.0
> **Principio Central**: "Design for evolution, not for imaginary scale."
> **Status**: Fonte Primaria de Verdade do Projeto
> **LES_VERSION**: 2.2.0

Este documento estabelece as diretrizes normativas de engenharia, arquitetura, seguranca, governanca e padroes de Frontend/UX 2.0 para desenvolvedores e agentes de IA (Claude Code, OpenAI Codex, Antigravity, GitHub Copilot).

---

## 1. Projeto
- **Nome**: Portifolio — Portfolio profissional de Lecino Lucas (Analista de Sistemas & Desenvolvedor Full Stack).
- **Tipo**: Novo Sistema (Greenfield).
- **Objetivo**: Aplicacao web moderna e profissional, para uso em curriculo, LinkedIn, GitHub e processos seletivos. Aparencia de produto SaaS / engenharia de software — o conteudo tecnico e mais importante que o efeito visual.
- **Escopo H2**: Full Stack desacoplado com Frontend React 19 + Vite e Backend Node.js em camadas MVC com Prisma e PostgreSQL. Build estatico compativel com Cloudflare Pages e backend compativel com Render.

## 2. Stack
- **Linguagem**: TypeScript (modo estrito).
- **Build/Bundler**: Vite 6 (Frontend) + tsc/tsx (Backend).
- **Frontend**: React 19 + Vite + Tailwind CSS v4 + shadcn/ui (fundacao) + Lucide Icons.
- **Backend**: Node.js + Express + Prisma ORM + PostgreSQL.
- **Acessibilidade de overlays**: Radix (`@radix-ui/react-dialog`) para Drawer/Modal/menu mobile.
- **Testes**: Vitest + Testing Library + Supertest (unitarios e integracao).
- **Contratos**: `@portfolio/contracts` compartilhado via npm workspaces.

## 3. Arquitetura
- **Padrao**: **Modular Monolith** (Monolito Modular com isolamento logico estrito).
- **Classificacao de Regras**:
  - **Nivel A (Obrigatorio)**: Simplicidade, seguranca deny-by-default, zero secrets, testes de regras criticas e arquivos < 300 linhas (max 500).
  - **Nivel B (Preferencial)**: Modular Monolith First, React+TS quando for React, shadcn/ui, PostgreSQL e migrations versionadas.
  - **Nivel C (Opcional/Condicional)**: Redis, Kafka, mensageria, microsservicos e feature flags (somente com necessidade comprovada).
- **Horizontes de Decisao**:
  - **H1 (Agora)**: SPA estatica (React + Vite), conteudo tipado em `src/data/*`, zero backend. Deploy estatico.
  - **H2 (Crescimento)**: Introduzir backend **Monolito Modular** apenas se surgir necessidade real — ex.: formulario de contato com persistencia, integracao com a API do GitHub, area administrativa de conteudo. Nesse ponto valem as secoes 3 (Modular Monolith), 6, 7, 8 e 9.
  - **H3 (Escala)**: Proibido implementar complexidades de H3 prematuramente (cache distribuido, filas, microsservicos).
- **Regra Anti-Overengineering**: "Preparar para evolucao nao significa implementar antecipadamente a solucao de escala."

## 4. Estrutura
```text
Portifolio/
├── frontend/             # SPA React 19 + Vite 6 + Tailwind CSS v4
│   ├── src/
│   │   ├── app/          # App shell + provider de tema
│   │   ├── components/   # ui (shadcn) > layout > portfolio > shared (estados LES)
│   │   ├── sections/     # Composicao das secoes (hero, atuacao, sobre, projetos...)
│   │   ├── data/         # Conteudo tipado (perfil, projetos, experiencias, links...)
│   │   └── services/     # Cliente HTTP resiliente com fallback offline
│   └── public/           # Estaticos (favicon, curriculos PDF, og-image, sitemap)
├── backend/              # API REST em camadas MVC (Node.js + TypeScript + Express)
│   ├── src/
│   │   ├── config/       # Variaveis de ambiente validadas (Zod)
│   │   ├── controllers/  # Controllers HTTP
│   │   ├── services/     # Regras de negocio e sanitizacao
│   │   ├── repositories/ # Padrão Repository (Prisma e memoria)
│   │   ├── models/       # Entidades de dominio
│   │   ├── routes/       # Rotas versionadas (/api/v1/...)
│   │   ├── validators/   # Schemas Zod de entrada
│   │   └── middlewares/  # Correlation-id, erro canonico LES, rate-limit
│   ├── prisma/           # Schema PostgreSQL e seeds
│   └── tests/            # Testes de integracao com Vitest e Supertest
├── packages/
│   └── contracts/        # DTOs e contrato canonico de erro LES compartilhado
├── docs/                 # Documentacao tecnica viva e decisoes (ADRs)
├── AGENTS.md             # Este contrato
└── CLAUDE.md             # Ponto de entrada Claude Code
```

## 5. Modulos / Dominios de conteudo
O projeto opera em monorepo com contratos canonicos em `@portfolio/contracts`.
Os dominios de negocio e conteudo contemplam:
  - `perfil` — posicionamento dual (Analista de Sistemas / Protheus e Desenvolvedor Full Stack)
  - `projetos` — estudos de caso em producao (Portal de Engenharia ~500 usuarios, BankingProtheus Itaú mTLS, Portal de RH IA, LES)
  - `contato` — servico seguro de mensagens com persistencia, sanitizacao e rate-limiting
  - `les` — Lecino Lucas Engineering Standard e Biblioteca_PadraoIA
- **Regra de Fronteira**: componentes de frontend consomem a API atraves do client `services/api.ts` com tipagem de `@portfolio/contracts`.

## 6. Banco de Dados
- Migrations versionadas obrigatorias para toda alteracao de schema.
- Integridade referencial com Foreign Keys explicitas.
- Soft delete padronizado (`deletado_em`, `deletado_por`) com indices parciais `WHERE deletado_em IS NULL` quando aplicavel.
- Zero-Downtime Migrations (*Expand & Contract*) em ambientes produtivos.

## 7. Seguranca
- Principios: *Secure by Design*, *Deny-by-Default* e Menor Privilegio.
- Prevencao rigorosa ao OWASP Top 10 (SQL Injection via queries parametrizadas, sanitizacao XSS, protecao CSRF).
- Segredos e chaves de API NUNCA commitados no repositorio (injetados via variaveis de ambiente).

## 8. Autenticacao
- Access Token de curta duracao (max 15 min) + Refresh Token rotativo de longa duracao (max 7 dias) em cookie seguro `HttpOnly`, `Secure`, `SameSite=Strict`.
- Hashing de senhas seguro utilizando Argon2id ou bcrypt (fator >= 12).
- Rate limiting obrigatorio em rotas de login e recuperacao de conta.

## 9. Autorizacao
- Autorizacao centralizada no backend no formato canonico: `modulo.recurso.acao`.
- Deny-by-default para qualquer acesso sem permissao explicita.
- Isolamento de contexto organizacional (Multi-tenant / Multiempresa / Multifilial).

## 10. LES Frontend & UX Foundation (LES Frontend)
- **Principio Central**: Novo Projeto = Aplicar a Fundacao LES + Adaptar Identidade Visual + Implementar Regras de Negocio.
- **Regra de Ouro**: A interface deve mostrar somente o que ajuda o usuario a executar a tarefa atual.
- **Hierarquia de Componentes**: Biblioteca existente (shadcn/ui) > Componente reutilizavel > Composicao > Componente de dominio > CSS custom.
- **Design Tokens**: Estilizacao estritamente via variaveis CSS semanticas (`--primary`, `--muted`, `--card`, `--destructive`).
- **Os 9 Estados**: Toda tela trata Default, Loading (Skeleton), Success, Empty State, Error, Disabled, Readonly, Permission Denied, Offline.
- **Cadastro Contextual**: Seletores de entidades oferecem `[+ Cadastrar novo...]` com modal in-place e auto-selecao sem perda de dados.
- **Valores Sensiveis**: Saldos financeiros e documentos mascarados (`R$ ••••••••`) com alternancia visual (`Mostrar`).
- **Acoes Contextuais**: Acoes em tabelas agrupadas no menu `[⋮]` para evitar poluicao visual.
- **Matriz de Superficie**: Modal (acoes curtas < 6 campos), Drawer lateral (detalhes/filtros/historico), Pagina (fluxos longos/wizards/configuracoes).
- **Responsividade Real**: Mobile com Bottom Sheets e tabelas convertidas em Cards verticais.
- **Templates Executaveis**: Reutilizar templates de `templates/frontend/` (AppShell, DataTable, SelectContextual, MaskedValue, KpiCard).

## 11. Governanca
- Commits no padrao Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`, `test:`).
- Decisoes estruturais registradas como ADRs em `docs/decisoes/`.

## 12. Configuracao
- Modulo central de configuracoes administrativas organizado em abas (Geral, Seguranca, Notificacoes, Integracoes, Modulos).

## 13. Tratamento de Erros
- Contrato padronizado em todas as APIs:
```json
{
  "sucesso": false,
  "codigo": "RECURSO_NAO_ENCONTRADO",
  "mensagem": "Descricao compreensivel do erro.",
  "detalhes": null,
  "correlationId": "uuid-v4"
}
```
- O frontend deve tomar decisoes utilizando o campo `codigo`.

## 14. Testes
- Piramide de testes: Unitarios (regras de dominio em Services), Integracao (APIs e banco) e E2E (Playwright para fluxos criticos).
- Proibido simular execucao de testes nao executados.

## 15. Performance
- Paginacao obrigatoria em todas as listagens (`pagina`, `limite` max 100).
- Eliminacao rigorosa de queries N+1.
- Cache-Aside com TTL explicito obrigatorio e invalidacao reativa em mutacoes.
- Frontend: Debounce de 300ms em buscas, Skeletons e lazy-loading em rotas/componentes pesados.

## 16. Observabilidade
- Logs estruturados em JSON com `correlationId` e `requestId`.
- Endpoints de saude: `/health/liveness` e `/health/readiness`.
- Metricas RED/USE e instrumentacao compativel com OpenTelemetry/Prometheus.

## 17. Integracoes
- Timeouts rigidos em chamadas externas (conexao <= 2s, leitura <= 5s).
- Retry com Exponential Backoff e Jitter (max 3 tentativas).
- Chave `Idempotency-Key` para mutacoes financeiras e de escrita.

## 18. IA (se aplicavel)
- Arquitetura *Provider-Agnostic* via interface `ProvedorIA` com adapters (Gemini, Claude, OpenAI).
- Fallback automatico, timeouts estritos e governanca FinOps sobre consumo de tokens.

## 19. Producao
- Docker multi-stage com imagens minimas e execucao com usuario nao-root.
- Plano de rollback automatizado e backups com restauracao testada (RPO/RTO).

## 20. Definition of Done (DoD)
Toda feature so e concluida apos validar o checklist de qualidade:
- [ ] Requisito de negocio e fluxo de usuario atendidos
- [ ] Hierarquia visual clara e sem poluicao
- [ ] Separacao de camadas respeitada e arquivos < 300 linhas (max 500)
- [ ] Migrations reversiveis criadas
- [ ] Seguranca e autorizacao no backend
- [ ] UX e Design System validados com os 9 estados tratados
- [ ] Cadastro contextual in-place e valores sensiveis protegidos
- [ ] Contrato canonico de erro aplicado
- [ ] Testes unitarios/integracao verdes
- [ ] Performance (sem N+1, com paginacao e debounce)
- [ ] Observabilidade e logs com correlationId
- [ ] Build e CI aprovados

## 21. Regras para Agentes de IA
1. Regras de negocio, metodos, classes e variaveis em portugues claro.
2. Responsabilidade unica e arquivos < 300 linhas (max 500).
3. Nao inventar tabelas, APIs ou bibliotecas inexistentes.
4. Nunca comitar secrets ou tokens.
5. Informar com clareza exatamente o que foi implementado.
