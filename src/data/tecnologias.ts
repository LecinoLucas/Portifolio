import type { Tecnologias } from "@/types";

/**
 * Tecnologias, com honestidade sobre o nível: só o que é usado no dia a dia
 * entra como domínio; o resto fica em "evolução". Sem barras de porcentagem.
 * Os testes vêm do projeto em que foram de fato usados (Portal de Engenharia).
 */
export const tecnologias: Tecnologias = {
  abertura:
    "O que mais uso: Node.js, React e JavaScript. Estou evoluindo para pleno, e a IA acelerou muito o meu aprendizado, sempre entendendo o que está sendo feito.",

  diaADia: [
    { nome: "Node.js", nota: "Backend dos sistemas que construo" },
    { nome: "React", nota: "Frontend dos sistemas que construo" },
    { nome: "JavaScript", nota: "A base de tudo o que construo" },
    { nome: "SQL", nota: "Investigar e validar dados" },
    { nome: "TOTVS Protheus", nota: "Suporte funcional: financeiro, contábil, fiscal e compras" },
  ],

  emEvolucao: ["TypeScript", "Python", "FastAPI", "PostgreSQL", "Prisma", "Docker", "IA aplicada"],
};
