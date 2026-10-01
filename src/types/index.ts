/** Tipos de domínio do portfólio. Conteúdo real vive em `src/data/*`. */

export interface Perfil {
  nome: string;
  titulo: string;
  headline: string;
  localizacao: string;
  disponibilidade: string;
  bio: { rotulo: string; texto: string }[];
  fatos: { rotulo: string; valor: string }[];
}

export interface LinkExterno {
  rotulo: string;
  href: string;
}

export interface DetalheProjeto {
  contexto: string;
  problema: string;
  participacao: string;
  solucao: string;
  arquitetura: string;
  desafios: string[];
  resultado: string;
}

export interface Projeto {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  stack: string[];
  destaque?: boolean;
  /** Situação real do projeto, exibida como selo no card e no painel. */
  situacao?: "producao" | "entregue";
  /** Detalhe da situação (ex.: forma de uso). */
  situacaoDetalhe?: string;
  /** Demonstração interativa com dados fictícios. */
  demo?: "importnfe" | "rh";
  detalhe: DetalheProjeto;
  links?: LinkExterno[];
}

export interface Experiencia {
  cargo: string;
  organizacao: string;
  periodo: string;
  atual?: boolean;
  /** "direcao" = direção de evolução profissional, não um cargo. */
  tipo?: "cargo" | "direcao";
  resumo: string;
  destaques: string[];
  tags: string[];
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
  status: string;
}

export interface EtapaTecnologia {
  numero: string;
  etapa: string;
  descricao: string;
  itens: string[];
}

export interface GrupoTecnologia {
  dominio: string;
  itens: string[];
}

export interface Principio {
  titulo: string;
  descricao: string;
}

export interface EtapaInvestigacao {
  titulo: string;
  /** O que se examina nesta etapa (método, não relato de um incidente). */
  descricao: string;
  itens: string[];
}

/** Relato de um incidente real. Só é exibido quando preenchido e confirmado. */
export interface CasoReal {
  titulo: string;
  contexto: string[];
  problema: { texto: string; perguntas: string[] };
  investigacao: { texto: string[]; tabelas: { nome: string; descricao: string }[]; objetivo: string };
  raciocinio: string;
  riscos: { texto: string; itens: string[] };
  /** O que se concluiu e aprendeu; não é um desfecho técnico do incidente. */
  resultado: string;
  aprendizado: string[];
  competencias: string[];
}

export interface Investigacao {
  etapas: EtapaInvestigacao[];
  riscos: string[];
  consultaIlustrativa: { legenda: string; sql: string };
  casoReal: CasoReal | null;
}
