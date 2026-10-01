import type { GrupoTecnologia } from "@/types";

/**
 * Tecnologias organizadas por domínio. Sem barras de porcentagem —
 * proficiência não é medida de forma confiável por número.
 */
export const tecnologias: GrupoTecnologia[] = [
  {
    dominio: "Frontend",
    itens: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  },
  {
    dominio: "Backend",
    itens: ["Node.js", "Python", "FastAPI", "REST APIs", "JWT / RBAC"],
  },
  {
    dominio: "Dados",
    itens: ["PostgreSQL", "SQL", "Prisma", "SQLAlchemy / Alembic", "Modelagem relacional"],
  },
  {
    dominio: "Enterprise",
    itens: ["TOTVS Protheus P12", "Fiscal / Contábil", "Financeiro · CNAB", "Compras", "TMS"],
  },
  {
    dominio: "Integrações & Automação",
    itens: [
      "APIs bancárias (Itaú)",
      "OAuth2 · mTLS",
      "CNAB / Boletos / DDA",
      "VAN bancária",
      "Certificados digitais",
      "XML NFe",
      "Rotinas agendadas",
    ],
  },
  {
    dominio: "IA aplicada",
    itens: ["LLMs", "RAG", "Agentes", "Triagem / classificação", "Integração provider-agnostic"],
  },
  {
    dominio: "DevOps & Ferramentas",
    itens: ["Git", "GitHub", "Docker", "CI de build", "Google Cloud Run"],
  },
  {
    dominio: "Engenharia & Processo",
    itens: ["Lecino Lucas Engineering Standard (LES)", "Modular Monolith", "ADRs", "Conventional Commits"],
  },
];
