/** Dados 100% fictícios para a demonstração do Portal RH. */

export const etapas = [
  { id: "entry", rotulo: "Entrada" },
  { id: "screening", rotulo: "Triagem" },
  { id: "hr_interview", rotulo: "Entrevista RH" },
  { id: "technical_interview", rotulo: "Entrevista técnica" },
  { id: "final", rotulo: "Final" },
  { id: "offer", rotulo: "Oferta" },
  { id: "hired", rotulo: "Contratado" },
] as const;

export type EtapaId = (typeof etapas)[number]["id"] | "rejected";

export interface Candidato {
  id: number;
  nome: string;
  vaga: string;
  score: number;
  etapa: EtapaId;
}

export const candidatosIniciais: Candidato[] = [
  { id: 1, nome: "Candidato 01", vaga: "Analista Fiscal", score: 86, etapa: "entry" },
  { id: 2, nome: "Candidato 02", vaga: "Analista Fiscal", score: 74, etapa: "screening" },
  { id: 3, nome: "Candidato 03", vaga: "Auxiliar Financeiro", score: 91, etapa: "hr_interview" },
  { id: 4, nome: "Candidato 04", vaga: "Analista Fiscal", score: 68, etapa: "screening" },
  { id: 5, nome: "Candidato 05", vaga: "Auxiliar Financeiro", score: 82, etapa: "technical_interview" },
  { id: 6, nome: "Candidato 06", vaga: "Analista Fiscal", score: 88, etapa: "offer" },
];

export type StatusAnalise = "pending" | "processing" | "completed";

export const rotuloStatusAnalise: Record<StatusAnalise, string> = {
  pending: "Pendente",
  processing: "Processando",
  completed: "Concluída",
};

export const criteriosAnalise = [
  { criterio: "Experiência em rotinas fiscais", situacao: "atende", nota: "3 anos descritos no currículo." },
  { criterio: "Conhecimento de ERP", situacao: "atende", nota: "Cita uso de ERP em contas a pagar." },
  { criterio: "Escolaridade exigida", situacao: "atende", nota: "Graduação em andamento." },
  { criterio: "Domínio de Excel avançado", situacao: "lacuna", nota: "Não há evidência no currículo; validar em entrevista." },
] as const;

export const documentosAdmissao = [
  { id: "identificacao", rotulo: "Documento de identificação" },
  { id: "residencia", rotulo: "Comprovante de residência" },
  { id: "aso", rotulo: "Exame admissional (ASO)" },
  { id: "foto", rotulo: "Foto 3x4" },
] as const;

export const camposObrigatorios = [
  "candidato.nome",
  "candidato.email",
  "vaga.titulo",
  "admissao.data_inicio",
  "admissao.salario",
  "decisao.id",
] as const;
