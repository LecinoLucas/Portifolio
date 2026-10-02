import type { Sobre } from "@/types";

/** Conteúdo da aba "Sobre mim". Em primeira pessoa, sem repetir ideias entre blocos. */
export const sobre: Sobre = {
  abertura:
    "Analista de Sistemas em Goiânia. Calmo, muito esforçado e focado em entender o que o sistema precisa fazer antes de escrever qualquer linha.",

  quemSou:
    "Moro em Goiânia, sou casado e pai de um filho, e a família é o que me move. Sou comunicativo e paciente: foram anos atendendo usuários, e isso me ensinou a explicar um problema técnico em linguagem simples.",

  principios: [
    {
      titulo: "Regra de negócio primeiro",
      texto:
        "Todo comportamento de um sistema tem uma regra por trás. Entendo essa regra antes de mexer e valido antes de alterar qualquer dado.",
    },
    {
      titulo: "Arquitetura, não sintaxe",
      texto:
        "Escrever código está cada vez mais assistido por ferramentas. O que continua valendo é entender o que está sendo feito: como os dados se relacionam, onde mora a regra e o que quebra se algo mudar. Por isso o meu foco é a arquitetura de sistemas.",
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

  ritmo:
    "Sou muito focado e esforçado, às vezes demais: trabalho com intensidade e fico ansioso para entregar bem. Estou aprendendo a equilibrar isso com organização e prioridade, porque o esforço rende mais quando está bem direcionado.",

  rumo:
    "Analista de Sistemas ou de Suporte Especializado (N2/N3), crescendo em arquitetura, integração de sistemas e IA aplicada.",

  equipe:
    "Gosto de trabalhar em equipe. Já supervisionei uma equipe de vendas, treinei usuários e atendi áreas de negócio no dia a dia. Um sistema só funciona bem quando as pessoas que o usam e o mantêm conversam entre si.",

  resumo: [
    "Goiânia · casado · pai de um filho",
    "Calmo, esforçado, focado e paciente",
    "Regra de negócio e arquitetura de sistemas",
    "Trabalho em equipe e comunicação com usuários",
    "Disponível para novas oportunidades",
  ],
};
