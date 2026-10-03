import type { Sobre } from "@/types";

/** Conteúdo da aba "Sobre mim": curto, em primeira pessoa. A trajetória fica em Experiência. */
export const sobre: Sobre = {
  abertura: "Determinado, consistente e resiliente. Busco ser 1% melhor a cada dia.",

  marca: [
    { palavra: "Determinado", exemplo: "Saí do suporte técnico por telefone e me formei em Análise e Desenvolvimento de Sistemas na PUC Goiás." },
    { palavra: "Consistente", exemplo: "Entre um chamado e outro, construí o Portal de Engenharia, hoje em produção com mais de 500 usuários." },
    { palavra: "Resiliente", exemplo: "Passei por suporte, vendas, implantação e sistemas corporativos, e a cada etapa aprendi o que faltava." },
  ],

  resumo: [
    "Regra de negócio antes do código",
    "O básico bem feito",
    "Muito focado e esforçado",
    "Trabalho em equipe",
    "Visão do sistema inteiro",
    "Busco: Analista de Sistemas ou Suporte N2/N3",
  ],

  principios: [
    { titulo: "Regra de negócio primeiro", texto: "Entendo a regra antes de mexer e valido antes de alterar qualquer dado." },
    { titulo: "O básico bem feito", texto: "Prefiro o simples bem resolvido a algo avançado feito às pressas." },
    { titulo: "1% por dia", texto: "Competir comigo mesmo: um pouco melhor a cada dia." },
  ],

  alemDoTrabalho:
    "Tudo o que faço começa em casa. Sou casado e sou pai, e é por eles que quero ser um pouco melhor a cada dia. Foram anos ouvindo usuários que me ensinaram que quase todo problema melhora quando alguém escuta com calma. No trabalho sou muito focado, às vezes demais, e estou aprendendo a equilibrar.",

  equipe:
    "Gosto de trabalhar em equipe: já supervisionei vendedores, treinei usuários e atendi áreas de negócio. Um sistema funciona bem quando quem o usa e quem o mantém conversam.",
};
