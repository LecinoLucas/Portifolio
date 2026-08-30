/** Tipos de domínio do portfólio. Conteúdo real vive em `src/data/*`. */

export interface Perfil {
  nome: string;
  titulo: string;
  headline: string;
  localizacao: string;
  disponibilidade: string;
  bio: string[];
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

export interface GrupoTecnologia {
  dominio: string;
  itens: string[];
}

export interface Principio {
  titulo: string;
  descricao: string;
}
