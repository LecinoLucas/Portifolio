/** Tipos de domínio do portfólio. Conteúdo real vive em `src/data/*` e `@portfolio/contracts`. */

export type FocoPerfil = "analista" | "fullstack" | "ambos";

export interface CompetenciaPerfil {
  titulo: string;
  subtitulo: string;
  headline: string;
  destaques: string[];
  competencias: string[];
  aplicacaoReal: string;
}

export interface CartaoImpacto {
  rotulo: string;
  subtitulo: string;
  descricao: string;
}

export interface CompetenciaCategoria {
  categoria: string;
  itens: string[];
}

export interface Perfil {
  nome: string;
  posicionamento: string;
  titulo: string;
  headline: string;
  localizacao: string;
  disponibilidade: string;
  telefone?: string;
  email?: string;
  resumoProfissional?: string;
  cartoesImpacto?: CartaoImpacto[];
  competenciasCategorizadas?: CompetenciaCategoria[];
  bio: string[];
  fatos: { rotulo: string; valor: string }[];
  perfis: {
    analista: CompetenciaPerfil;
    fullstack: CompetenciaPerfil;
  };
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
  seguranca?: string;
  usuariosOuEscala?: string;
}

export interface Projeto {
  slug: string;
  titulo: string;
  categoria: string;
  focoPerfil?: FocoPerfil;
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
