import type { Tecnologias } from "@/types";

/**
 * Cada competência diz como foi usada: uso profissional, projeto próprio entregue, projeto
 * em desenvolvimento ou estudo. `comprovada` marca o que o código dos repositórios lidos
 * confirma (2026-10); o restante é declarado pelo autor e aguarda conferência.
 */
export const tecnologias: Tecnologias = {
  abertura:
    "Cada competência mostra onde foi usada e em que estado está. Uso IA para aprender e construir mais rápido, e reviso e entendo o que entrego.",

  grupos: [
    {
      titulo: "Backend e APIs",
      itens: [
        { nome: "Node.js", estado: "profissional", onde: "Portal de Engenharia, BankingProtheus", comprovada: true },
        { nome: "JavaScript", estado: "profissional", onde: "Portal de Engenharia", comprovada: true },
        { nome: "TypeScript", estado: "profissional", onde: "Portal de Engenharia", comprovada: true },
        { nome: "NestJS", estado: "profissional", onde: "BankingProtheus", comprovada: false },
        { nome: "Express", estado: "desenvolvimento", onde: "Alphamen Barbearia", comprovada: true },
        { nome: "Python", estado: "entregue", onde: "ImportNFe, Portal de RH", comprovada: true },
        { nome: "FastAPI", estado: "entregue", onde: "ImportNFe, Portal de RH", comprovada: true },
        { nome: "APIs REST", estado: "profissional", onde: "Portal de Engenharia", comprovada: true },
        { nome: "JWT", estado: "profissional", onde: "Portal de Engenharia (chamados)", comprovada: true },
        { nome: "Zod", estado: "desenvolvimento", onde: "Alphamen Barbearia", comprovada: true },
        { nome: "RBAC", estado: "profissional", onde: "Portal de Engenharia", comprovada: true },
      ],
    },
    {
      titulo: "Banco de dados e arquitetura",
      itens: [
        { nome: "SQL", estado: "profissional", onde: "Protheus (SQL Server), Portal de Engenharia", comprovada: true },
        { nome: "PostgreSQL", estado: "profissional", onde: "Portal de Engenharia, Portal de RH", comprovada: true },
        { nome: "Prisma", estado: "profissional", onde: "Portal de Engenharia", comprovada: true },
        { nome: "Arquitetura modular", estado: "desenvolvimento", onde: "Alphamen Barbearia (24 módulos por domínio)", comprovada: true },
        { nome: "Redis", estado: "entregue", onde: "Portal de RH (workers)", comprovada: true },
        { nome: "Celery", estado: "entregue", onde: "Portal de RH", comprovada: true },
        { nome: "BullMQ", estado: "estudo", comprovada: false },
      ],
    },
    {
      titulo: "Cloud e DevOps",
      itens: [
        { nome: "Docker", estado: "entregue", onde: "Este portfólio, Cert Monitor", comprovada: true },
        { nome: "Google Cloud Run", estado: "entregue", onde: "Este portfólio", comprovada: true },
        { nome: "Firebase Hosting", estado: "entregue", onde: "Este portfólio", comprovada: true },
        { nome: "GitHub Actions", estado: "entregue", onde: "Portal de RH, Cert Monitor, este portfólio", comprovada: true },
        { nome: "CI/CD", estado: "entregue", onde: "Este portfólio (verificações e publicação automáticas)", comprovada: true },
        { nome: "Cloudflare", estado: "estudo", comprovada: false },
      ],
    },
    {
      titulo: "Inteligência artificial e automação",
      itens: [
        { nome: "LLMs (Claude e Gemini)", estado: "entregue", onde: "Portal de RH", comprovada: true },
        { nome: "LangChain", estado: "desenvolvimento", onde: "Assistente de WhatsApp", comprovada: true },
        { nome: "LangGraph", estado: "desenvolvimento", onde: "Assistente de WhatsApp (ainda fora do fluxo principal)", comprovada: true },
        { nome: "Orquestração de agentes", estado: "desenvolvimento", onde: "Assistente de WhatsApp", comprovada: true },
      ],
    },
    {
      titulo: "Integrações empresariais",
      itens: [
        { nome: "TOTVS Protheus", estado: "profissional", onde: "Rede Marajó", comprovada: true },
        { nome: "CNAB e APIs bancárias", estado: "profissional", onde: "Rede Marajó, BankingProtheus", comprovada: true },
        { nome: "NF-e (XML)", estado: "entregue", onde: "ImportNFe", comprovada: true },
        { nome: "ExecAuto", estado: "desenvolvimento", onde: "Ponte RH e Protheus (dry-run, homologação pendente)", comprovada: true },
        { nome: "SEFAZ", estado: "desenvolvimento", onde: "Portal Fiscal", comprovada: false },
        { nome: "Google Calendar", estado: "entregue", onde: "Portal de RH", comprovada: true },
        { nome: "WhatsApp", estado: "desenvolvimento", onde: "Assistente de WhatsApp, Clínica", comprovada: true },
        { nome: "Instagram", estado: "estudo", comprovada: false },
        { nome: "Open Finance", estado: "estudo", comprovada: false },
        { nome: "BrasilAPI", estado: "estudo", comprovada: false },
      ],
    },
    {
      titulo: "Qualidade e testes",
      itens: [
        { nome: "Vitest", estado: "profissional", onde: "Portal de Engenharia, Portal de RH", comprovada: true },
        { nome: "Playwright", estado: "profissional", onde: "Portal de Engenharia, Portal de RH", comprovada: true },
        { nome: "k6", estado: "profissional", onde: "Portal de Engenharia", comprovada: false },
        { nome: "Stryker", estado: "profissional", onde: "Portal de Engenharia", comprovada: false },
        { nome: "pytest", estado: "entregue", onde: "Portal de RH, ImportNFe", comprovada: true },
        { nome: "Supertest", estado: "desenvolvimento", onde: "Cert Monitor", comprovada: true },
        { nome: "Jest", estado: "estudo", comprovada: false },
      ],
    },
    {
      titulo: "Frontend",
      itens: [
        { nome: "React", estado: "profissional", onde: "Portal de Engenharia", comprovada: true },
        { nome: "HTML e CSS", estado: "entregue", onde: "Este portfólio, Portal de RH", comprovada: true },
        { nome: "Tailwind CSS", estado: "entregue", onde: "Este portfólio, Portal de RH", comprovada: true },
      ],
    },
  ],

  aplicados: [
    { nome: "UTC e fusos horários", estado: "desenvolvimento", onde: "Alphamen Barbearia (luxon, com testes)", comprovada: true },
    { nome: "Agendamentos e bloqueios de agenda", estado: "desenvolvimento", onde: "Alphamen Barbearia", comprovada: true },
    { nome: "Transações", estado: "desenvolvimento", onde: "Alphamen Barbearia (pagamentos e atendimentos)", comprovada: true },
    { nome: "Concorrência", estado: "entregue", onde: "Portal de RH (análises em workers)", comprovada: true },
    { nome: "Idempotência", estado: "entregue", onde: "Portal de RH, ponte RH e Protheus", comprovada: true },
    { nome: "Filas e workers", estado: "entregue", onde: "Portal de RH (Celery e Redis)", comprovada: true },
    { nome: "Fluxo de caixa", estado: "desenvolvimento", onde: "Alphamen Barbearia (pagamentos, despesas e receita)", comprovada: true },
    { nome: "Controle de estoque", estado: "estudo", comprovada: false },
    { nome: "Transcrição de áudio", estado: "desenvolvimento", onde: "Assistente de WhatsApp", comprovada: true },
    { nome: "Processamento de documentos", estado: "entregue", onde: "Portal de RH, ImportNFe", comprovada: true },
  ],
};
