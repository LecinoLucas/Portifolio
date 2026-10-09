import type { Tecnologias } from "@/types";

/**
 * Tecnologias, com honestidade sobre o nível: o que uso na prática (trabalho e
 * projetos, com apoio de IA) entra em destaque; o resto fica em "evolução". Sem barras de porcentagem.
 * Os testes vêm do projeto em que foram de fato usados (Portal de Engenharia).
 */
export const tecnologias: Tecnologias = {
  abertura:
    "Nos meus projetos uso Node.js, React, JavaScript e Python, e no trabalho SQL e Protheus. Ainda estou evoluindo: uso IA para aprender e construir mais rápido, e reviso e entendo o que entrego.",

  diaADia: [
    { nome: "Node.js", nota: "Backend dos sistemas que construo, com apoio de IA" },
    { nome: "React", nota: "Frontend dos sistemas que construo, com apoio de IA" },
    { nome: "JavaScript", nota: "A base do que construo na web" },
    { nome: "Python", nota: "Usei no ImportNFe e no Portal de RH, com apoio de IA" },
    { nome: "SQL", nota: "SELECT com JOIN, INSERT e UPDATE para investigar e validar dados" },
    { nome: "TOTVS Protheus", nota: "Suporte funcional: financeiro, contábil, fiscal e compras" },
  ],

  emEvolucao: ["TypeScript", "FastAPI", "PostgreSQL", "Prisma", "Docker", "IA aplicada"],
};
