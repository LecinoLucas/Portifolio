import type { Request, Response, NextFunction } from "express";
import type { ProjetoServico } from "../services/projeto.servico.js";
import { esquemaFiltroProjetos } from "../validators/projeto.validator.js";
import type { RespostaSucessoCanonica, ProjetoDTO } from "@portfolio/contracts";

export class ProjetoControlador {
  constructor(private readonly projetoServico: ProjetoServico) {}

  listar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const filtros = esquemaFiltroProjetos.parse(req.query);
      const projetos = await this.projetoServico.listar(filtros);

      const resposta: RespostaSucessoCanonica<ProjetoDTO[]> = {
        sucesso: true,
        dados: projetos,
        meta: {
          total: projetos.length,
        },
      };

      res.status(200).json(resposta);
    } catch (erro) {
      next(erro);
    }
  };

  obterPorSlug = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rawSlug = req.params.slug;
      const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
      const projeto = await this.projetoServico.buscarPorSlug(slug);

      const resposta: RespostaSucessoCanonica<ProjetoDTO> = {
        sucesso: true,
        dados: projeto,
      };

      res.status(200).json(resposta);
    } catch (erro) {
      next(erro);
    }
  };
}
