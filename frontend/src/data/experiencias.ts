import type { Experiencia } from "@/types";

/** Experiência profissional real, em ordem cronológica inversa (conforme currículo oficial). */
export const experiencias: Experiencia[] = [
  {
    tipo: "direcao",
    cargo: "Desenvolvimento Full Stack & IA com Arquitetura",
    organizacao: "~6 meses de experiência prática em projetos corporativos reais",
    periodo: "Nov/2025 — Atual",
    resumo:
      "Desenvolvimento de aplicações full stack em produção conectando ERP, banco de dados e APIs bancárias. Foco em arquitetura limpa, testes automatizados e orquestração madura de IA.",
    destaques: [
      "Desenvolvimento da solução BankingProtheus (React, TypeScript, Node.js, PostgreSQL, APIs Itaú mTLS, CNAB e DDA).",
      "Participação no desenvolvimento full stack do Portal de Engenharia corporativo (EAP, orçamentos, RBAC e PostgreSQL).",
      "Criação e manutenção do padrão LES (Lucas Engineering Standard) para governança e segurança em projetos assistidos por IA.",
    ],
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "APIs REST", "mTLS", "LES"],
  },
  {
    cargo: "Analista de Sistemas / Sistemas Corporativos",
    organizacao: "Rede Marajó",
    periodo: "mai/2025 — atual",
    atual: true,
    resumo:
      "Atuação em sistemas corporativos e TOTVS Protheus P12, conectando usuários, regras de negócio, ERP, dados e integrações críticas de negócio.",
    destaques: [
      "Suporte técnico e funcional N1/N2 a usuários e áreas de negócio, atuando em triagem, investigação de causa raiz e resolução estruturada de demandas.",
      "Atuação com TOTVS Protheus P12 em rotinas Financeiras, Contábeis, Fiscais, Compras, Contas a Pagar/Receber e TMS/SIGATMS.",
      "Investigação de inconsistências com SQL em CNAB, boletos, títulos, documentos fiscais, integrações e movimentações, validando dados para identificar causa e impacto.",
      "Configuração e parametrização do Protheus, além de análise de regras de negócio e apoio à evolução de processos e sistemas.",
      "Experiência com integrações bancárias via API e VAN, envolvendo Itaú, Santander, Sicoob e Votorantim; validação de requisições, retornos, credenciais, certificados e falhas de comunicação.",
    ],
    tags: [
      "TOTVS Protheus P12",
      "Financeiro & Contábil",
      "Fiscal & Compras",
      "Conferência de Caixa",
      "CNAB & DDA",
      "Integrações Bancárias",
      "SQL",
      "TMS/SIGATMS",
    ],
  },
  {
    cargo: "Analista de Suporte de TI / Implantação de Sistemas",
    organizacao: "I5 Sistemas",
    periodo: "abr/2022 — nov/2022",
    resumo:
      "Implantação e sustentação de sistemas desktop e web, acompanhando configuração, testes, validações e entrada em operação.",
    destaques: [
      "Implantação de sistemas desktop e web, com configuração, testes, validações e acompanhamento de usuários na entrada em operação.",
      "Suporte técnico e funcional N1, tratamento de dúvidas e incidentes, levantamento de regras de negócio e treinamento de usuários.",
    ],
    tags: ["Implantação", "Sistemas Desktop & Web", "Suporte N1", "Treinamento", "Regras de Negócio"],
  },
  {
    cargo: "Operador Técnico / Suporte",
    organizacao: "Atento SA",
    periodo: "abr/2016 — ago/2018",
    resumo:
      "Suporte técnico a clientes com problemas de conectividade, configuração e utilização de serviços de internet e dados.",
    destaques: [
      "Suporte técnico a clientes com problemas de conectividade e utilização de serviços de internet e dados.",
      "Diagnóstico de falhas e orientação para configuração de modem, roteador e acesso à internet, com foco em troubleshooting e resolução estruturada.",
    ],
    tags: ["Suporte Técnico", "Conectividade", "Troubleshooting", "Diagnóstico Estruturado"],
  },
];
