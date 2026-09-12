import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const esquemaAmbiente = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORTA: z.coerce.number().default(3001),
  DATABASE_URL: z
    .string()
    .optional()
    .default("postgresql://postgres:postgrespassword@localhost:5432/portfolio?schema=public"),
  CORS_ORIGEM: z.string().default("http://localhost:5173,http://127.0.0.1:5173"),
  TAXA_LIMITE_CONTATO_MAX: z.coerce.number().default(5),
  TAXA_LIMITE_CONTATO_JANELA_MINUTOS: z.coerce.number().default(15),

  // Notificações por e-mail (Mailpit local por padrão)
  SMTP_HOST: z.string().default("localhost"),
  SMTP_PORT: z.coerce.number().default(1025),
  SMTP_SECURE: z
    .preprocess((v) => v === "true" || v === "1" || v === true, z.boolean())
    .default(false),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  EMAIL_DESTINO: z.string().email().default("lecinolucas5@gmail.com"),
});

const resultado = esquemaAmbiente.safeParse(process.env);

if (!resultado.success) {
  console.error("❌ Variáveis de ambiente inválidas:", resultado.error.format());
  throw new Error("CONFIGURACAO_INVALIDA");
}

export const configAmbiente = resultado.data;
