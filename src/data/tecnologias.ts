import type { EtapaTecnologia, GrupoTecnologia } from "@/types";

/**
 * Tecnologias ligadas à etapa do fluxo de integração bancária em que entram
 * no trabalho real (as mesmas etapas da planta do topo). Sem barras de
 * porcentagem: proficiência não é medida de forma confiável por número.
 */
export const fluxoTecnologias: EtapaTecnologia[] = [
  { numero: "01", etapa: "Protheus", descricao: "ERP de origem das operações", itens: ["TOTVS Protheus", "Financeiro", "Contábil", "Fiscal", "Compras", "TMS"] },
  { numero: "02", etapa: "Remessa", descricao: "Canal de comunicação com o banco", itens: ["CNAB de pagamento", "CNAB de recebimento", "VAN bancária", "API de extrato", "mTLS", "Certificados digitais", "APIs REST"] },
  { numero: "03", etapa: "Banco", descricao: "Instituições e produtos", itens: ["Itaú", "Santander", "Sicoob", "Votorantim", "Boletos"] },
  { numero: "04", etapa: "Retorno", descricao: "Baixas e extratos de volta ao ERP", itens: ["Retorno CNAB", "Extratos", "Rotinas agendadas"] },
  { numero: "05", etapa: "Conciliação", descricao: "Dados que provam que fechou", itens: ["SQL", "PostgreSQL", "SQL Server", "Modelagem relacional"] },
  { numero: "06", etapa: "Divergências", descricao: "Investigação até a causa raiz", itens: ["Troubleshooting", "Análise de causa raiz", "Homologação", "Documentação"] },
];

/** Tecnologias de desenvolvimento de aplicações, por domínio. */
export const tecnologias: GrupoTecnologia[] = [
  { dominio: "Frontend", itens: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"] },
  { dominio: "Backend", itens: ["Node.js", "Python", "FastAPI", "REST APIs", "JWT / RBAC"] },
  { dominio: "Dados", itens: ["Prisma", "SQLAlchemy / Alembic", "XML NF-e", "Excel (OpenPyXL)"] },
  { dominio: "IA aplicada", itens: ["LLMs", "Triagem / classificação", "Integração provider-agnostic"] },
  { dominio: "DevOps", itens: ["Git", "GitHub", "Docker", "Google Cloud Run"] },
  { dominio: "Engenharia", itens: ["Lecino Lucas Engineering Standard (LES)", "Modular Monolith", "ADRs", "Conventional Commits"] },
];
