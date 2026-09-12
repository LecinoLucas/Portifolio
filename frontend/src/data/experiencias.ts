import type { Experiencia } from "@/types";

/** Experiência profissional real, em ordem cronológica inversa. */
export const experiencias: Experiencia[] = [
  {
    tipo: "direcao",
    cargo: "Engenharia de software + IA aplicada",
    organizacao: "Direção de evolução profissional — não é um cargo",
    periodo: "Em andamento",
    resumo:
      "Direção atual da carreira: aprofundar engenharia de software (arquitetura, testes e segurança) e IA aplicada a problemas de negócio, partindo da base em análise de sistemas corporativos.",
    destaques: [
      "Projetos próprios de software e o Lecino Lucas Engineering Standard (LES) como prática de engenharia.",
      "IA aplicada a fluxos reais: triagem e classificação de documentos.",
    ],
    tags: ["Arquitetura", "Testes", "Segurança", "IA aplicada", "LES"],
  },
  {
    cargo: "Analista de Sistemas / Sistemas Corporativos",
    organizacao: "Rede Marajó",
    periodo: "mai/2025 — ago/2026",
    atual: true,
    resumo:
      "Atuação em sistemas corporativos e TOTVS Protheus, conectando usuários, processos de negócio e tecnologia. Análise de incidentes, suporte técnico e funcional N1/N2, investigação de dados com SQL e apoio à implantação e evolução de soluções internas.",
    destaques: [
      "TOTVS Protheus P12: análise funcional e suporte N1/N2 nos módulos financeiro, contábil, fiscal, compras, contas a pagar e contas a receber.",
      "TMS / SIGATMS, CNAB e boletos: análise de processos, parâmetros e inconsistências.",
      "Investigação de dados e regras de negócio com SQL para diagnóstico de incidentes.",
      "Apoio à implantação e evolução de soluções internas: testes, homologação, documentação e orientação a usuários.",
    ],
    tags: [
      "TOTVS Protheus P12",
      "SQL",
      "Financeiro",
      "Contábil",
      "Fiscal",
      "Compras",
      "TMS",
      "CNAB",
    ],
  },
  {
    cargo: "Analista de Suporte de TI / Implantação de Sistemas",
    organizacao: "I5 Sistemas",
    periodo: "abr/2022 — nov/2022",
    resumo:
      "Implantação e suporte de sistemas desktop e web, acompanhando configuração, testes, validação, treinamento e entrada em operação junto aos usuários.",
    destaques: [
      "Implantação e configuração de sistemas junto às áreas de negócio.",
      "Testes, validação e treinamento de usuários até a entrada em operação.",
      "Suporte N1, análise de regras de negócio e troubleshooting pós-implantação.",
    ],
    tags: ["Implantação", "Suporte N1", "Treinamento", "Troubleshooting"],
  },
  {
    cargo: "Operador Técnico / Suporte",
    organizacao: "Atento — Operação Vivo",
    periodo: "abr/2016 — ago/2018",
    resumo:
      "Início da trajetória em tecnologia, com suporte técnico, diagnóstico de falhas e resolução estruturada de problemas de conectividade.",
    destaques: [
      "Atendimento e diagnóstico de falhas de conectividade.",
      "Resolução estruturada de problemas e registro consistente dos atendimentos.",
    ],
    tags: ["Suporte técnico", "Diagnóstico", "Atendimento"],
  },
];
