import type { FocoPerfil, DetalheProjetoDTO } from "@portfolio/contracts";

export interface ProjetoEntidade {
  id: string;
  slug: string;
  titulo: string;
  categoria: string;
  focoPerfil: FocoPerfil;
  destaque: boolean;
  resumo: string;
  stack: string[];
  detalhe: DetalheProjetoDTO;
  links: Array<{ rotulo: string; href: string }>;
  criadoEm: Date;
  atualizadoEm: Date;
}

export interface ContatoEntidade {
  id: string;
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
  ipHash: string;
  respondido: boolean;
  criadoEm: Date;
}
