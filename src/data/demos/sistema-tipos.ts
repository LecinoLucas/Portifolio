/** Tipos do "sistema genérico" de demonstração visual: a mesma estrutura serve a vários projetos. */

export type TomSistema = "azul" | "verde" | "laranja" | "vermelho" | "cinza" | "destaque" | "roxo";

export type CelulaSistema = string | { selo: string; tom: TomSistema };

export interface ItemAgenda {
  hora: string;
  titulo: string;
  detalhe: string;
  selo: string;
  tom: TomSistema;
}

export type BlocoSistema =
  | { tipo: "kpis"; itens: { rotulo: string; valor: string; apoio?: string; tom?: TomSistema }[] }
  | { tipo: "tabela"; titulo?: string; colunas: string[]; linhas: CelulaSistema[][] }
  | { tipo: "cartoes"; itens: { titulo: string; texto?: string; meta?: string; selo?: string; tom?: TomSistema; progresso?: number }[] }
  | { tipo: "agenda"; colunas: { nome: string; itens: ItemAgenda[] }[] }
  | { tipo: "barras"; titulo: string; itens: { rotulo: string; valor: number; texto: string }[] }
  | { tipo: "aviso"; tom: TomSistema; titulo: string; texto: string };

export interface TelaSistema {
  id: string;
  rotulo: string;
  titulo: string;
  descricao: string;
  acao?: string;
  blocos: BlocoSistema[];
}

export interface DefinicaoSistema {
  /** Seleciona o tema visual em `sistema-demo.css`. */
  tema: "barbearia" | "clinica" | "banking" | "aluguel";
  titulo: string;
  marca: string;
  submarca: string;
  usuario: { nome: string; papel: string };
  telas: TelaSistema[];
}
