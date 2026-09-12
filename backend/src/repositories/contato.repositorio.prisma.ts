import type { IContatoRepositorio } from "./contato.repositorio.interface.js";
import type { ContatoEntidade } from "../models/entidades.js";
import { obterPrisma } from "./prisma.cliente.js";

export class ContatoRepositorioPrisma implements IContatoRepositorio {
  async salvar(
    dados: Omit<ContatoEntidade, "id" | "criadoEm" | "respondido">,
  ): Promise<ContatoEntidade> {
    const prisma = obterPrisma();
    const salvo = await prisma.contato.create({
      data: {
        nome: dados.nome,
        email: dados.email,
        assunto: dados.assunto,
        mensagem: dados.mensagem,
        ipHash: dados.ipHash,
      },
    });

    return {
      id: salvo.id,
      nome: salvo.nome,
      email: salvo.email,
      assunto: salvo.assunto,
      mensagem: salvo.mensagem,
      ipHash: salvo.ipHash,
      respondido: salvo.respondido,
      criadoEm: salvo.criadoEm,
    };
  }

  async obterPorId(id: string): Promise<ContatoEntidade | null> {
    const prisma = obterPrisma();
    const contato = await prisma.contato.findUnique({ where: { id } });
    if (!contato) return null;

    return {
      id: contato.id,
      nome: contato.nome,
      email: contato.email,
      assunto: contato.assunto,
      mensagem: contato.mensagem,
      ipHash: contato.ipHash,
      respondido: contato.respondido,
      criadoEm: contato.criadoEm,
    };
  }

  async listarRecentes(limite: number = 20): Promise<ContatoEntidade[]> {
    const prisma = obterPrisma();
    const lista = await prisma.contato.findMany({
      orderBy: { criadoEm: "desc" },
      take: limite,
    });

    return lista.map((c) => ({
      id: c.id,
      nome: c.nome,
      email: c.email,
      assunto: c.assunto,
      mensagem: c.mensagem,
      ipHash: c.ipHash,
      respondido: c.respondido,
      criadoEm: c.criadoEm,
    }));
  }
}
