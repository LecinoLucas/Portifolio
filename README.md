# Portfólio Profissional — Lecino Lucas

> **Posicionamento**: "Lecino Lucas — Sistemas, Integrações e Desenvolvimento"  
> **Perfis Alvo**: Analista de Sistemas / TOTVS Protheus & Desenvolvedor Full Stack Júnior  
> **Padrão de Engenharia**: Lucas Engineering Standard (LES) v2.2.0 + Biblioteca_PadraoIA  
> **Repositório Oficial**: [https://github.com/LecinoLucas/Portifolio](https://github.com/LecinoLucas/Portifolio)

---

## 1. Visão Geral

Este portfólio profissional foi desenvolvido para demonstrar competências reais de engenharia de software, integração de sistemas corporativos e desenvolvimento web moderno para dois perfis de atuação:

1. **Analista de Sistemas / TOTVS Protheus**: Especialista em regras de negócio corporativas (Financeiro, Contábil, Fiscal, Compras, TMS), SQL, conciliação financeira automatizada e integrações bancárias via APIs (Itaú OAuth2 + mTLS).
2. **Desenvolvedor Full Stack Júnior**: Desenvolvimento de aplicações completas com React 19, TypeScript, Node.js (camadas MVC), Express, PostgreSQL, Prisma ORM, segurança deny-by-default, autenticação, RBAC e testes automatizados.

---

## 2. Arquitetura do Projeto

O projeto adota uma estrutura **Monorepo com Workspaces (`npm workspaces`)**, garantindo separação limpa de responsabilidades e reutilização de contratos:

```text
portifolio/
├── frontend/                     # Aplicação SPA React 19 + Vite 6 + Tailwind CSS v4
│   ├── src/
│   │   ├── app/                 # App Shell, Provedor de Tema e testes de montagem
│   │   ├── components/          # Primitivos shadcn/ui, layout e estados de interface
│   │   ├── sections/            # Hero dual, Especialidades, Sobre, Experiência, Projetos, etc.
│   │   ├── services/            # Cliente HTTP resiliente (com fallback offline)
│   │   └── data/                # Conteúdo tipado e modelos de dados
│   ├── public/                  # Favicon, currículos em PDF, og-image, sitemap e robots
│   └── package.json
├── backend/                      # API REST Node.js + TypeScript + Express + Prisma
│   ├── src/
│   │   ├── config/              # Variáveis de ambiente validadas com Zod
│   │   ├── controllers/         # ProjetosController, ContatoController, HealthController
│   │   ├── services/            # Regras de negócio, sanitização de entrada e anti-spam
│   │   ├── repositories/        # Padrão Repository (interfaces, Prisma e memória)
│   │   ├── models/              # Entidades de domínio
│   │   ├── routes/              # Rotas versionadas (/api/v1/...)
│   │   ├── validators/          # Schemas Zod para payloads e queries
│   │   └── middlewares/         # Correlation-ID, erro canônico LES e rate-limit
│   ├── prisma/                  # Schema PostgreSQL, migrations e seed reproduzível
│   ├── tests/                   # Testes de integração e unidade (Vitest + Supertest)
│   └── package.json
├── packages/
│   └── contracts/               # Contratos compartilhados, DTOs e contrato canônico LES
├── docs/
│   ├── arquitetura.md           # Documentação arquitetural
│   └── decisoes/                # Architecture Decision Records (ADR 0001, ADR 0002)
├── scripts/                     # Scripts de automação (configuração de domínio)
├── .env.example                 # Guia de variáveis de ambiente
└── package.json                 # Orquestrador raiz do monorepo
```

---

## 3. Endpoints da API Backend

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/health` | Verificação de integridade (status, uptime, versão e ambiente) |
| `GET` | `/api/v1/projects` | Lista projetos reais com suporte a filtro `?focoPerfil=analista\|fullstack` e busca |
| `GET` | `/api/v1/projects/:slug` | Retorna o estudo de caso aprofundado do projeto |
| `POST` | `/api/v1/contact` | Envio de mensagem com sanitização HTML, honeypot anti-spam e rate-limiting |

### Contrato Canônico de Resposta e Erro (LES)
Todas as respostas seguem o padrão normativo da `Biblioteca_PadraoIA`:

```json
// Sucesso (HTTP 200/201)
{
  "sucesso": true,
  "dados": { ... },
  "mensagem": "Operação realizada com sucesso."
}

// Erro Canônico (HTTP 4xx/5xx)
{
  "sucesso": false,
  "codigo": "DADOS_INVALIDOS",
  "mensagem": "Um ou mais campos enviados são inválidos.",
  "detalhes": [{ "campo": "email", "erro": "Informe um endereço de e-mail válido." }],
  "correlationId": "4f7daa9d-1328-415b-8490-c46331c1c19a"
}
```

---

## 4. Projetos Principais (Estudos de Caso Reais)

1. **Portal de Engenharia**:
   - Aplicação corporativa em produção para gestão de obras, chamados, fornecedores, cotações, documentos e dashboards analíticos.
   - **Escala**: Utilizado por cerca de **500 usuários corporativos**.
   - **Stack**: React, TypeScript, Node.js, PostgreSQL, Prisma, APIs REST, RBAC, Auditoria.
2. **BankingProtheus — Conciliação Bancária Itaú**:
   - Integração bancária direta com as APIs corporativas do Itaú sobre canal criptografado **mTLS** e **OAuth2 Client Credentials**.
   - Automatização de conciliação de contas, extratos e pagamentos contra registros do ERP TOTVS Protheus.
   - **Stack**: React, TypeScript, Node.js, PostgreSQL, SQL, APIs Itaú, OAuth2, mTLS, TOTVS Protheus.
3. **Portal de RH**:
   - Plataforma de apoio ao recrutamento com triagem assistida por IA (modelos de linguagem) para leitura, extração e classificação explicável de currículos.
   - **Stack**: Python, IA / LLMs, React, PostgreSQL, APIs REST.
4. **Lecino Lucas Engineering Standard (LES)**:
   - Padrão normativo versionado e executável para governança de software e desenvolvimento assistido por IA.
   - Distribuído via npm (`@lecinolucas/les`) com CLI de verificação e auditoria determinística.

---

## 5. Instalação e Execução Local

### Pré-requisitos
- Node.js >= 20.x
- npm >= 10.x

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/LecinoLucas/Portifolio.git
   cd Portifolio
   ```

2. Instale as dependências de todos os workspaces:
   ```bash
   npm install
   ```

3. Crie os arquivos de ambiente locais:
   ```bash
   cp .env.example .env
   cp backend/.env.example backend/.env
   ```

4. Compile os contratos compartilhados:
   ```bash
   npm run build --workspace=@portfolio/contracts
   ```

5. Inicie as aplicações em desenvolvimento:
   - **Frontend**: `npm run dev:frontend` (disponível em `http://localhost:5173`)
   - **Backend**: `npm run dev:backend` (disponível em `http://localhost:3001`)

---

## 6. Scripts e Qualidade

| Comando | Ação |
| :--- | :--- |
| `npm run build` | Compilação de todos os workspaces (contracts, frontend e backend) |
| `npm run test` | Execução de toda a suíte de testes (Vitest + Testing Library + Supertest) |
| `npm run typecheck` | Verificação estrita de tipagem TypeScript em todo o monorepo |
| `npm run lint` | Validação de qualidade de código com ESLint 9 |
| `npm run set-domain -- <url>` | Atualização automática do domínio nos metadados de SEO |

---

## 7. Estratégia de Deploy Gratuito e Seguro

A infraestrutura foi desenhada para operar em planos gratuitos permanentes com **zero risco de cobranças inesperadas**:

### 1. Frontend: Cloudflare Pages
- **Custo**: 100% gratuito (sem exigência de cartão de crédito).
- **Vantagens**: Tráfego e largura de banda ilimitados, CDN global de baixa latência e build automático a cada push no branch `main`.
- **Configuração no painel Cloudflare**:
  - **Framework preset**: `Vite`
  - **Root directory**: `frontend`
  - **Build command**: `npm run build`
  - **Build output directory**: `dist`
  - **Variável de ambiente**: `VITE_API_URL=https://sua-api-backend.onrender.com`

### 2. Backend: Render (Web Service Free)
- **Custo**: Gratuito (plano Free para Web Services).
- **Configuração**:
  - **Root directory**: `backend`
  - **Build command**: `npm install && npm run build`
  - **Start command**: `npm start`
  - **Variáveis de ambiente**: `NODE_ENV=production`, `PORTA=10000`, `CORS_ORIGEM=https://lecinolucas.dev`

### 3. Banco de Dados: Neon ou Supabase (PostgreSQL Serverless)
- **Custo**: Gratuito permanente (0.5 GB de armazenamento, ideal para contatos e portfólio).
- Conexão segura via variável `DATABASE_URL` com SSL habilitado.

---

## 8. Governança e Decisões de Arquitetura

- **Contrato Normativo**: [`AGENTS.md`](./AGENTS.md)
- **Instruções Claude/Antigravity**: [`CLAUDE.md`](./CLAUDE.md)
- **ADR 0001**: [`docs/decisoes/0001-spa-estatica-sem-backend.md`](./docs/decisoes/0001-spa-estatica-sem-backend.md)
- **ADR 0002**: [`docs/decisoes/0002-arquitetura-fullstack-mvc.md`](./docs/decisoes/0002-arquitetura-fullstack-mvc.md)
