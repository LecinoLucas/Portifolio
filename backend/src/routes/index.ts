import { Router } from "express";
import { HealthControlador } from "../controllers/health.controlador.js";
import { ProjetoControlador } from "../controllers/projeto.controlador.js";
import { ContatoControlador } from "../controllers/contato.controlador.js";
import { ProjetoServico } from "../services/projeto.servico.js";
import { ContatoServico } from "../services/contato.servico.js";
import { ProjetoRepositorioMemoria } from "../repositories/projeto.repositorio.js";
import { ContatoRepositorioMemoria } from "../repositories/contato.repositorio.js";
import { middlewareTaxaLimiteContato } from "../middlewares/taxa-limite.middleware.js";

export function criarRoteador(): Router {
  const router = Router();

  // Injeção de dependências (facilmente substituível por repositórios Prisma)
  const projetoRepo = new ProjetoRepositorioMemoria();
  const contatoRepo = new ContatoRepositorioMemoria();

  const projetoServico = new ProjetoServico(projetoRepo);
  const contatoServico = new ContatoServico(contatoRepo);

  const healthControlador = new HealthControlador();
  const projetoControlador = new ProjetoControlador(projetoServico);
  const contatoControlador = new ContatoControlador(contatoServico);

  // Health check
  router.get("/health", (req, res) => healthControlador.verificar(req, res));

  // Rotas da API v1
  const v1 = Router();

  // Projetos
  v1.get("/projects", projetoControlador.listar);
  v1.get("/projects/:slug", projetoControlador.obterPorSlug);

  // Contato
  v1.post("/contact", middlewareTaxaLimiteContato, contatoControlador.enviar);

  router.use("/api/v1", v1);

  return router;
}
