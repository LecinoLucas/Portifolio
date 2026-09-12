/**
 * DADOS FICTÍCIOS DE DEMONSTRAÇÃO DO PORTAL RH — NÃO REAIS
 * 
 * Este arquivo contém estritamente dados mockados para a demonstração interativa
 * do módulo Portal RH (/projetos/portal-rh/demo).
 * Nenhum dado de candidatos reais, currículos, e-mails ou contatos é utilizado.
 */

export type EtapaPipeline =
  | "entrada"
  | "triagem"
  | "entrevista_rh"
  | "entrevista_tecnica"
  | "final"
  | "proposta"
  | "contratado"
  | "reprovado";

export interface CandidatoDemo {
  id: string;
  nome: string;
  etapa: EtapaPipeline;
  competencias: string[];
  aderencia: number | null; // null quando em processamento pela IA
  senioridade: string;
  analiseStatus: "concluida" | "processando";
}

export interface EtapaConfig {
  id: EtapaPipeline;
  rotulo: string;
  descricao: string;
  corBadge: string;
}

export const ETAPAS_PIPELINE: EtapaConfig[] = [
  {
    id: "entrada",
    rotulo: "Entrada",
    descricao: "Currículos recebidos aguardando triagem",
    corBadge: "text-tech-cyan border-tech-cyan/30 bg-tech-cyan/10",
  },
  {
    id: "triagem",
    rotulo: "Triagem",
    descricao: "Classificação assistida por IA e triagem inicial",
    corBadge: "text-primary border-primary/30 bg-primary/10",
  },
  {
    id: "entrevista_rh",
    rotulo: "Entrevista RH",
    descricao: "Alinhamento cultural e expectativas",
    corBadge: "text-tech-violet border-tech-violet/30 bg-tech-violet/10",
  },
  {
    id: "entrevista_tecnica",
    rotulo: "Entrevista Técnica",
    descricao: "Avaliação prática de stack e arquitetura",
    corBadge: "text-tech-magenta border-tech-magenta/30 bg-tech-magenta/10",
  },
  {
    id: "final",
    rotulo: "Final",
    descricao: "Entrevista com liderança e parecer final",
    corBadge: "text-tech-orange border-tech-orange/30 bg-tech-orange/10",
  },
  {
    id: "proposta",
    rotulo: "Proposta",
    descricao: "Envio de oferta e negociação",
    corBadge: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
  {
    id: "contratado",
    rotulo: "Contratado",
    descricao: "Oferta aceita e admissão iniciada",
    corBadge: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  },
];

export const ETAPA_REPROVADO: EtapaConfig = {
  id: "reprovado",
  rotulo: "Reprovados",
  descricao: "Candidatos não aprovados no processo",
  corBadge: "text-destructive border-destructive/30 bg-destructive/10",
};

export interface VagaDemo {
  titulo: string;
  area: string;
  local: string;
  modelo: string;
  senioridade: string;
  status: "Publicada" | "Rascunho" | "Encerrada";
  resumo: string;
  competenciasEssenciais: string[];
  diferenciais: string[];
  metricas: {
    totalCandidatos: number;
    emEntrevistas: number;
    finalistas: number;
  };
}

export const VAGA_DEMO: VagaDemo = {
  titulo: "Desenvolvedor(a) Full Stack Júnior",
  area: "Tecnologia",
  local: "Goiânia — GO",
  modelo: "Híbrido",
  senioridade: "Júnior",
  status: "Publicada",
  resumo:
    "Buscamos uma pessoa desenvolvedora para colaborar na evolução de aplicações web, APIs e integrações corporativas.",
  competenciasEssenciais: [
    "JavaScript",
    "TypeScript",
    "React",
    "APIs REST",
    "SQL",
  ],
  diferenciais: [
    "Node.js",
    "PostgreSQL",
    "Testes automatizados",
    "Experiência com sistemas corporativos",
  ],
  metricas: {
    totalCandidatos: 6,
    emEntrevistas: 2,
    finalistas: 1,
  },
};

/**
 * Candidatos fictícios para a demonstração interativa.
 * Todos os nomes, competências e notas foram criados especificamente para a demo.
 */
export const CANDIDATOS_INICIAIS: CandidatoDemo[] = [
  {
    id: "c-1",
    nome: "Ana Martins",
    etapa: "triagem",
    competencias: ["React", "TypeScript"],
    aderencia: 86,
    senioridade: "Júnior",
    analiseStatus: "concluida",
  },
  {
    id: "c-2",
    nome: "Bruno Costa",
    etapa: "entrada",
    competencias: ["Node.js", "PostgreSQL"],
    aderencia: 79,
    senioridade: "Júnior",
    analiseStatus: "concluida",
  },
  {
    id: "c-3",
    nome: "Camila Nunes",
    etapa: "entrevista_tecnica",
    competencias: ["React", "Testes"],
    aderencia: 91,
    senioridade: "Júnior",
    analiseStatus: "concluida",
  },
  {
    id: "c-4",
    nome: "Daniel Rocha",
    etapa: "entrevista_rh",
    competencias: ["APIs REST", "SQL"],
    aderencia: 74,
    senioridade: "Júnior",
    analiseStatus: "concluida",
  },
  {
    id: "c-5",
    nome: "Elisa Souza",
    etapa: "final",
    competencias: ["TypeScript", "PostgreSQL"],
    aderencia: 88,
    senioridade: "Júnior",
    analiseStatus: "concluida",
  },
  {
    id: "c-6",
    nome: "Felipe Lima",
    etapa: "entrada",
    competencias: ["JavaScript", "React"],
    aderencia: null,
    senioridade: "Júnior",
    analiseStatus: "processando",
  },
];
