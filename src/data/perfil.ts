import type { Perfil } from "@/types";

export const perfil: Perfil = {
  nome: "Lecino Lucas",
  titulo: "Analista de Sistemas & Desenvolvedor Full Stack",

  headline:
    "Base sólida em análise de sistemas corporativos e ERP, ampliada pelo desenvolvimento de aplicações reais em produção. Conecto negócio, dados e tecnologia para resolver problemas concretos.",

  localizacao: "Goiás · Brasil",
  disponibilidade: "Aberto a novas oportunidades",

  bio: [
    "Sou Analista de Sistemas com base em sistemas corporativos, TOTVS Protheus, processos de negócio, SQL e integrações. Minha principal força está na combinação de negócio + sistemas empresariais + suporte/implantação + dados + desenvolvimento.",
    "Minha trajetória começou em suporte técnico, passou por implantação de sistemas e evoluiu para análise de sistemas corporativos. Mais recentemente, ampliei minha atuação para o desenvolvimento de software, participando da construção e entrega de aplicações corporativas utilizadas em produção.",
    "Tenho cerca de 6 meses de experiência prática em desenvolvimento, com 2 sistemas corporativos entregues em produção. Entender a regra de negócio antes de escrever código é o que orienta o meu trabalho.",
  ],

  fatos: [
    { rotulo: "Perfil", valor: "Negócio + Sistemas corporativos + Desenvolvimento" },
    { rotulo: "ERP", valor: "TOTVS Protheus P12 — financeiro, contábil, fiscal, compras, TMS" },
    { rotulo: "Dados", valor: "SQL · diagnóstico de inconsistências · modelagem relacional" },
    { rotulo: "Integrações", valor: "APIs REST · APIs bancárias Itaú · OAuth2 · mTLS · CNAB" },
    { rotulo: "Desenvolvimento", valor: "React · TypeScript · Node.js · PostgreSQL · Prisma" },
    { rotulo: "Direção atual", valor: "Engenharia de software + IA aplicada (em evolução)" },
  ],
};
