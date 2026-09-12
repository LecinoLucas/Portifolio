import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import type { RespostaErroCanonica } from "@portfolio/contracts";

export class AppErro extends Error {
  constructor(
    public readonly codigo: string,
    public readonly mensagem: string,
    public readonly statusHttp: number = 400,
    public readonly detalhes?: Array<{ campo: string; erro: string }>,
  ) {
    super(mensagem);
    this.name = "AppErro";
  }
}

export function middlewareErroGlobal(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const correlationId = req.correlationId || "sem-id";

  if (err instanceof ZodError) {
    const detalhes = err.errors.map((e) => ({
      campo: e.path.join("."),
      erro: e.message,
    }));

    const resposta: RespostaErroCanonica = {
      sucesso: false,
      codigo: "DADOS_INVALIDOS",
      mensagem: "Um ou mais campos enviados são inválidos. Verifique os detalhes.",
      detalhes,
      correlationId,
    };

    res.status(400).json(resposta);
    return;
  }

  if (err instanceof AppErro) {
    const resposta: RespostaErroCanonica = {
      sucesso: false,
      codigo: err.codigo,
      mensagem: err.mensagem,
      detalhes: err.detalhes || null,
      correlationId,
    };

    res.status(err.statusHttp).json(resposta);
    return;
  }

  // Erro interno não previsto (não vaza stack trace em produção)
  console.error(`[${correlationId}] Erro interno não tratado:`, err);

  const resposta: RespostaErroCanonica = {
    sucesso: false,
    codigo: "ERRO_INTERNO_SERVIDOR",
    mensagem: "Ocorreu um erro interno inesperado. Tente novamente mais tarde.",
    detalhes: null,
    correlationId,
  };

  res.status(500).json(resposta);
}
