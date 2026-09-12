import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const esquemaAmbiente = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORTA: z.coerce.number().default(3001),
  DATABASE_URL: z.string().optional().default("postgresql://postgres:postgres@localhost:5432/portfolio?schema=public"),
  CORS_ORIGEM: z.string().default("*"),
  TAXA_LIMITE_CONTATO_MAX: z.coerce.number().default(5),
  TAXA_LIMITE_CONTATO_JANELA_MINUTOS: z.coerce.number().default(15),
});

const resultado = esquemaAmbiente.safeParse(process.env);

if (!resultado.success) {
  console.error("❌ Variáveis de ambiente inválidas:", resultado.error.format());
  throw new Error("CONFIGURACAO_INVALIDA");
}

export const configAmbiente = resultado.data;
