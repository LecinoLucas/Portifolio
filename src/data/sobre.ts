import type { Sobre } from "@/types";

/** Conteúdo da aba "Sobre mim". Em primeira pessoa, sem repetir ideias entre blocos. */
export const sobre: Sobre = {
  abertura:
    "Analista de Sistemas que entende a regra de negócio antes de escrever qualquer linha. Muito focado, esforçado e de equipe.",

  resumo: [
    "Regra de negócio antes do código",
    "O básico bem feito",
    "Muito focado e esforçado",
    "Trabalho em equipe e comunicação",
    "Arquitetura e visão do sistema inteiro",
    "Atendimento a usuários desde 2016",
  ],

  principios: [
    {
      titulo: "Regra de negócio primeiro",
      texto:
        "Todo comportamento de um sistema tem uma regra por trás. Entendo essa regra antes de mexer e valido antes de alterar qualquer dado.",
    },
    {
      titulo: "Entender o projeto por inteiro",
      texto:
        "Gosto de saber como o sistema funciona por dentro: onde mora a regra, como os dados se relacionam e o que quebra se algo mudar.",
    },
    {
      titulo: "O básico bem feito",
      texto: "Prefiro o simples bem resolvido a algo avançado feito às pressas.",
    },
    {
      titulo: "1% por dia",
      texto: "Gosto de competir comigo mesmo: ser um pouco melhor a cada dia, sem atalho.",
    },
  ],

  historia: [
    { quando: "2016", texto: "Atento: comecei no suporte técnico remoto da Vivo Internet, por telefone e chat, diagnosticando falhas com usuários leigos." },
    { quando: "2022", texto: "I5 Sistemas: implantação e suporte de sistemas corporativos, com testes, go-live e treinamento de usuários." },
    { quando: "2022–2025", texto: "Pioneira Colchões: supervisionei uma equipe de vendas e cuidei de rotinas financeiras, o que me deu o negócio visto por dentro." },
    { quando: "2025–2026", texto: "Rede Marajó: sustentação do TOTVS Protheus e integrações bancárias, investigando incidentes até a causa raiz." },
    { quando: "Em paralelo", texto: "Construo sistemas próprios. Um deles roda em produção e foi vendido a uma distribuidora." },
  ],

  ritmo:
    "Sou muito focado e esforçado, às vezes demais: trabalho com intensidade e fico ansioso para entregar bem. Estou aprendendo a equilibrar isso com organização e prioridade, porque o esforço rende mais quando está bem direcionado.",

  alemDoTrabalho:
    "Tudo o que faço começa em casa. Sou casado e sou pai, e é por eles que quero ser um pouco melhor a cada dia. Foram anos ouvindo usuários, um a um, que me ensinaram que quase todo problema melhora quando alguém escuta com calma. Levo isso para o trabalho: escuto, entendo e só então resolvo.",

  rumo:
    "Analista de Sistemas ou de Suporte Especializado (N2/N3), crescendo em arquitetura, integração de sistemas e IA aplicada.",

  equipe:
    "Gosto de trabalhar em equipe e acredito nisso na prática: já supervisionei uma equipe de vendas, treinei usuários e atendi áreas de negócio todos os dias. Um sistema só funciona bem quando quem o usa e quem o mantém conversam entre si.",
};
