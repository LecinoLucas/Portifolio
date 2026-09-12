import type { ContatoEntidade } from "../models/entidades.js";

export interface IContatoRepositorio {
  salvar(contato: Omit<ContatoEntidade, "id" | "criadoEm" | "respondido">): Promise<ContatoEntidade>;
  obterPorId(id: string): Promise<ContatoEntidade | null>;
  listarRecentes(limite?: number): Promise<ContatoEntidade[]>;
}
