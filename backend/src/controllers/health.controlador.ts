import type { Request, Response } from "express";
import type { HealthCheckDTO } from "@portfolio/contracts";

const inicioExecucao = Date.now();

export class HealthControlador {
  async verificar(_req: Request, res: Response): Promise<void> {
    const uptimeSegundos = Math.floor((Date.now() - inicioExecucao) / 1000);

    const dados: HealthCheckDTO = {
      status: "up",
      servico: "portfolio-backend-api",
      versao: "1.0.0",
      timestamp: new Date().toISOString(),
      uptimeSegundos,
      ambiente: process.env.NODE_ENV || "development",
    };

    res.status(200).json(dados);
  }
}
