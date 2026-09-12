import { v4 as uuidv4 } from "uuid";
import type { IContatoRepositorio } from "./contato.repositorio.interface.js";
import type { ContatoEntidade } from "../models/entidades.js";

export class ContatoRepositorioMemoria implements IContatoRepositorio {
  private contatos: ContatoEntidade[] = [];

  async salvar(
    dados: Omit<ContatoEntidade, "id" | "criadoEm" | "respondido">,
  ): Promise<ContatoEntidade> {
    const contato: ContatoEntidade = {
      id: uuidv4(),
      nome: dados.nome,
      email: dados.email,
      assunto: dados.assunto,
      mensagem: dados.mensagem,
      ipHash: dados.ipHash,
      respondido: false,
      criadoEm: new Date(),
    };

    this.contatos.push(contato);
    return contato;
  }

  async obterPorId(id: string): Promise<ContatoEntidade | null> {
    const contato = this.contatos.find((c) => c.id === id);
    return contato || null;
  }

  async listarRecentes(limite: number = 20): Promise<ContatoEntidade[]> {
    return [...this.contatos]
      .sort((a, b) => b.criadoEm.getTime() - a.criadoEm.getTime())
      .slice(0, limite);
  }
}
