import type { ProjetoEntidade } from "../models/entidades.js";
import type { FiltroProjetos } from "../validators/projeto.validator.js";

export interface IProjetoRepositorio {
  listar(filtros?: FiltroProjetos): Promise<ProjetoEntidade[]>;
  buscarPorSlug(slug: string): Promise<ProjetoEntidade | null>;
  salvarEmLote(projetos: ProjetoEntidade[]): Promise<void>;
}
