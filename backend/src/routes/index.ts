import { Router } from "express";
import { HealthControlador } from "../controllers/health.controlador.js";
import { ProjetoControlador } from "../controllers/projeto.controlador.js";
import { ContatoControlador } from "../controllers/contato.controlador.js";
import { ProjetoServico } from "../services/projeto.servico.js";
import { ContatoServico } from "../services/contato.servico.js";
import { EmailServico, EmailServicoMock, type IEmailServico } from "../services/email.servico.js";
import { ProjetoRepositorioMemoria } from "../repositories/projeto.repositorio.js";
import { ContatoRepositorioMemoria } from "../repositories/contato.repositorio.js";
import { ProjetoRepositorioPrisma } from "../repositories/projeto.repositorio.prisma.js";
import { ContatoRepositorioPrisma } from "../repositories/contato.repositorio.prisma.js";
import type { IProjetoRepositorio } from "../repositories/projeto.repositorio.interface.js";
import type { IContatoRepositorio } from "../repositories/contato.repositorio.interface.js";
import { middlewareTaxaLimiteContato } from "../middlewares/taxa-limite.middleware.js";

export interface OpcoesRoteador {
  projetoRepo?: IProjetoRepositorio;
  contatoRepo?: IContatoRepositorio;
  emailServico?: IEmailServico;
}

export function criarRoteador(opcoes?: OpcoesRoteador): Router {
  const router = Router();
  const isTest = process.env.NODE_ENV === "test";

  // Injeção de dependências: Prisma em desenvolvimento/produção; Memória nos testes
  const projetoRepo =
    opcoes?.projetoRepo ||
    (isTest ? new ProjetoRepositorioMemoria() : new ProjetoRepositorioPrisma());

  const contatoRepo =
    opcoes?.contatoRepo ||
    (isTest ? new ContatoRepositorioMemoria() : new ContatoRepositorioPrisma());

  const emailServico =
    opcoes?.emailServico || (isTest ? new EmailServicoMock() : new EmailServico());

  const projetoServico = new ProjetoServico(projetoRepo);
  const contatoServico = new ContatoServico(contatoRepo, emailServico);

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
