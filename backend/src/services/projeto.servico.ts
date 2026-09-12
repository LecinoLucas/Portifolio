import type { IProjetoRepositorio } from "../repositories/projeto.repositorio.interface.js";
import type { ProjetoEntidade } from "../models/entidades.js";
import type { ProjetoDTO } from "@portfolio/contracts";
import type { FiltroProjetos } from "../validators/projeto.validator.js";
import { AppErro } from "../middlewares/erro-global.middleware.js";

export class ProjetoServico {
  constructor(private readonly projetoRepositorio: IProjetoRepositorio) {}

  async listar(filtros?: FiltroProjetos): Promise<ProjetoDTO[]> {
    const projetos = await this.projetoRepositorio.listar(filtros);

    return projetos.map((p: ProjetoEntidade) => ({
      slug: p.slug,
      titulo: p.titulo,
      categoria: p.categoria,
      focoPerfil: p.focoPerfil,
      destaque: p.destaque,
      resumo: p.resumo,
      stack: p.stack,
      detalhe: p.detalhe,
      links: p.links,
    }));
  }

  async buscarPorSlug(slug: string): Promise<ProjetoDTO> {
    if (!slug || slug.trim().length === 0) {
      throw new AppErro("PARAMETRO_INVALIDO", "O slug do projeto é obrigatório.", 400);
    }

    const projeto = await this.projetoRepositorio.buscarPorSlug(slug.trim());

    if (!projeto) {
      throw new AppErro(
        "PROJETO_NAO_ENCONTRADO",
        `Nenhum projeto encontrado com o identificador '${slug}'.`,
        404,
      );
    }

    return {
      slug: projeto.slug,
      titulo: projeto.titulo,
      categoria: projeto.categoria,
      focoPerfil: projeto.focoPerfil,
      destaque: projeto.destaque,
      resumo: projeto.resumo,
      stack: projeto.stack,
      detalhe: projeto.detalhe,
      links: projeto.links,
    };
  }
}
