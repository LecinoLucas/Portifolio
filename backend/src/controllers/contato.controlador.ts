import type { Request, Response, NextFunction } from "express";
import type { ContatoServico } from "../services/contato.servico.js";
import { esquemaCriarContato } from "../validators/contato.validator.js";
import type { RespostaSucessoCanonica, ContatoRegistrado } from "@portfolio/contracts";

export class ContatoControlador {
  constructor(private readonly contatoServico: ContatoServico) {}

  enviar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dadosValidados = esquemaCriarContato.parse(req.body);
      const ipOrigem = req.ip || req.socket.remoteAddress || "127.0.0.1";

      const resultado = await this.contatoServico.processarMensagem(dadosValidados, ipOrigem);

      const resposta: RespostaSucessoCanonica<ContatoRegistrado> = {
        sucesso: true,
        dados: resultado,
        mensagem: "Mensagem recebida com sucesso! Em breve entrarei em contato.",
      };

      res.status(201).json(resposta);
    } catch (erro) {
      next(erro);
    }
  };
}
