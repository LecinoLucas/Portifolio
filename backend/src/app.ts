import express from "express";
import cors from "cors";
import helmet from "helmet";
import { configAmbiente } from "./config/ambiente.js";
import { middlewareCorrelationId } from "./middlewares/correlation-id.middleware.js";
import { middlewareErroGlobal, AppErro } from "./middlewares/erro-global.middleware.js";
import { criarRoteador } from "./routes/index.js";

export function criarApp(): express.Application {
  const app = express();

  // Segurança e parsing
  app.use(helmet());
  app.use(
    cors({
      origin: configAmbiente.CORS_ORIGEM === "*" ? true : configAmbiente.CORS_ORIGEM.split(","),
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Correlation-Id"],
    }),
  );
  app.use(express.json({ limit: "100kb" }));

  // Correlation ID para rastreabilidade de requisições
  app.use(middlewareCorrelationId);

  // Rotas da aplicação
  app.use(criarRoteador());

  // Rota não encontrada (404)
  app.use((req, _res, next) => {
    next(
      new AppErro(
        "RECURSO_NAO_ENCONTRADO",
        `A rota solicitada '${req.method} ${req.originalUrl}' não foi encontrada neste servidor.`,
        404,
      ),
    );
  });

  // Tratamento de erro global canônico LES
  app.use(middlewareErroGlobal);

  return app;
}
