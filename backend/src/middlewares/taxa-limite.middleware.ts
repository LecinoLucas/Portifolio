import type { Request, Response, NextFunction } from "express";
import { configAmbiente } from "../config/ambiente.js";
import { AppErro } from "./erro-global.middleware.js";

interface RegistroTaxa {
  contagem: number;
  primeiroAcesso: number;
}

const mapaTaxa = new Map<string, RegistroTaxa>();

export function middlewareTaxaLimiteContato(req: Request, _res: Response, next: NextFunction): void {
  const ip = req.ip || req.socket.remoteAddress || "127.0.0.1";
  const agora = Date.now();
  const janelaMs = configAmbiente.TAXA_LIMITE_CONTATO_JANELA_MINUTOS * 60 * 1000;
  const limiteMax = configAmbiente.TAXA_LIMITE_CONTATO_MAX;

  const registro = mapaTaxa.get(ip);

  if (!registro) {
    mapaTaxa.set(ip, { contagem: 1, primeiroAcesso: agora });
    return next();
  }

  if (agora - registro.primeiroAcesso > janelaMs) {
    mapaTaxa.set(ip, { contagem: 1, primeiroAcesso: agora });
    return next();
  }

  if (registro.contagem >= limiteMax) {
    throw new AppErro(
      "TAXA_LIMITE_EXCEDIDA",
      "Muitas mensagens enviadas a partir deste endereço. Por favor, aguarde alguns minutos antes de tentar novamente.",
      429,
    );
  }

  registro.contagem += 1;
  next();
}
