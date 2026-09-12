import type { IProjetoRepositorio } from "./projeto.repositorio.interface.js";
import type { ProjetoEntidade } from "../models/entidades.js";
import type { FiltroProjetos } from "../validators/projeto.validator.js";
import { obterPrisma } from "./prisma.cliente.js";
import { PROJETOS_INICIAIS } from "./projeto.repositorio.js";
import type { FocoPerfil, DetalheProjetoDTO } from "@portfolio/contracts";

export class ProjetoRepositorioPrisma implements IProjetoRepositorio {
  async listar(filtros?: FiltroProjetos): Promise<ProjetoEntidade[]> {
    try {
      const prisma = obterPrisma();
      const where: Record<string, unknown> = {};

      if (filtros?.focoPerfil && filtros.focoPerfil !== "ambos") {
        where.OR = [{ focoPerfil: filtros.focoPerfil }, { focoPerfil: "ambos" }];
      }

      const lista = await prisma.projeto.findMany({
        where,
        orderBy: { criadoEm: "asc" },
      });

      if (lista.length === 0) {
        // Fallback para os projetos iniciais caso o banco não tenha sido populado
        return this.filtrarMemoria(PROJETOS_INICIAIS, filtros);
      }

      return lista.map((p) => ({
        id: p.id,
        slug: p.slug,
        titulo: p.titulo,
        categoria: p.categoria,
        focoPerfil: p.focoPerfil as FocoPerfil,
        destaque: p.destaque,
        resumo: p.resumo,
        stack: p.stack,
        detalhe: {
          contexto: p.contexto,
          problema: p.problema,
          participacao: p.participacao,
          solucao: p.solucao,
          arquitetura: p.arquitetura,
          desafios: p.desafios,
          resultado: p.resultado,
          seguranca: p.seguranca || undefined,
          usuariosOuEscala: p.usuariosOuEscala || undefined,
        },
        links: (p.links as Array<{ rotulo: string; href: string }>) || [],
        criadoEm: p.criadoEm,
        atualizadoEm: p.atualizadoEm,
      }));
    } catch {
      return this.filtrarMemoria(PROJETOS_INICIAIS, filtros);
    }
  }

  async buscarPorSlug(slug: string): Promise<ProjetoEntidade | null> {
    try {
      const prisma = obterPrisma();
      const p = await prisma.projeto.findUnique({ where: { slug } });

      if (!p) {
        const itemMemoria = PROJETOS_INICIAIS.find((proj) => proj.slug === slug);
        return itemMemoria || null;
      }

      return {
        id: p.id,
        slug: p.slug,
        titulo: p.titulo,
        categoria: p.categoria,
        focoPerfil: p.focoPerfil as FocoPerfil,
        destaque: p.destaque,
        resumo: p.resumo,
        stack: p.stack,
        detalhe: {
          contexto: p.contexto,
          problema: p.problema,
          participacao: p.participacao,
          solucao: p.solucao,
          arquitetura: p.arquitetura,
          desafios: p.desafios,
          resultado: p.resultado,
          seguranca: p.seguranca || undefined,
          usuariosOuEscala: p.usuariosOuEscala || undefined,
        },
        links: (p.links as Array<{ rotulo: string; href: string }>) || [],
        criadoEm: p.criadoEm,
        atualizadoEm: p.atualizadoEm,
      };
    } catch {
      const itemMemoria = PROJETOS_INICIAIS.find((proj) => proj.slug === slug);
      return itemMemoria || null;
    }
  }

  async salvarEmLote(projetos: ProjetoEntidade[]): Promise<void> {
    const prisma = obterPrisma();
    for (const p of projetos) {
      await prisma.projeto.upsert({
        where: { slug: p.slug },
        update: {
          titulo: p.titulo,
          categoria: p.categoria,
          focoPerfil: p.focoPerfil,
          destaque: p.destaque,
          resumo: p.resumo,
          stack: p.stack,
          contexto: p.detalhe.contexto,
          problema: p.detalhe.problema,
          participacao: p.detalhe.participacao,
          solucao: p.detalhe.solucao,
          arquitetura: p.detalhe.arquitetura,
          desafios: p.detalhe.desafios,
          resultado: p.detalhe.resultado,
          seguranca: p.detalhe.seguranca,
          usuariosOuEscala: p.detalhe.usuariosOuEscala,
          links: p.links,
        },
        create: {
          id: p.id,
          slug: p.slug,
          titulo: p.titulo,
          categoria: p.categoria,
          focoPerfil: p.focoPerfil,
          destaque: p.destaque,
          resumo: p.resumo,
          stack: p.stack,
          contexto: p.detalhe.contexto,
          problema: p.detalhe.problema,
          participacao: p.detalhe.participacao,
          solucao: p.detalhe.solucao,
          arquitetura: p.detalhe.arquitetura,
          desafios: p.detalhe.desafios,
          resultado: p.detalhe.resultado,
          seguranca: p.detalhe.seguranca,
          usuariosOuEscala: p.detalhe.usuariosOuEscala,
          links: p.links,
        },
      });
    }
  }

  private filtrarMemoria(
    projetos: ProjetoEntidade[],
    filtros?: FiltroProjetos,
  ): ProjetoEntidade[] {
    let resultado = [...projetos];
    if (filtros?.focoPerfil && filtros.focoPerfil !== "ambos") {
      resultado = resultado.filter(
        (p) => p.focoPerfil === filtros.focoPerfil || p.focoPerfil === "ambos",
      );
    }
    if (filtros?.busca) {
      const termo = filtros.busca.toLowerCase();
      resultado = resultado.filter(
        (p) =>
          p.titulo.toLowerCase().includes(termo) ||
          p.resumo.toLowerCase().includes(termo) ||
          p.stack.some((s: string) => s.toLowerCase().includes(termo)),
      );
    }
    return resultado;
  }
}
