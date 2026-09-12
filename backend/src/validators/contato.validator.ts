import { z } from "zod";

export const esquemaCriarContato = z.object({
  nome: z
    .string({ required_error: "O campo nome é obrigatório." })
    .trim()
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(100, "O nome não pode exceder 100 caracteres."),
  email: z
    .string({ required_error: "O campo e-mail é obrigatório." })
    .trim()
    .email("Informe um endereço de e-mail válido.")
    .max(255, "O e-mail não pode exceder 255 caracteres."),
  assunto: z
    .string()
    .trim()
    .max(150, "O assunto não pode exceder 150 caracteres.")
    .optional()
    .default("Contato através do Portfólio"),
  mensagem: z
    .string({ required_error: "O campo mensagem é obrigatório." })
    .trim()
    .min(10, "A mensagem deve conter pelo menos 10 caracteres.")
    .max(2000, "A mensagem não pode exceder 2000 caracteres."),
  honeypot: z.string().optional(),
});

export type EntradaCriarContato = z.infer<typeof esquemaCriarContato>;
