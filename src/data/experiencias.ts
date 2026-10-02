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
    resumo:
      "Sustentação de sistemas corporativos e atendimento técnico e funcional (help desk N1/N2) a usuários e áreas de negócio, com cerca de 20 chamados por dia. Investigação de incidentes com SQL, ERP TOTVS Protheus e integrações bancárias.",
    destaques: [
      "TOTVS Protheus: suporte funcional nos processos financeiros (contas a pagar e a receber), contábeis, fiscais e de compras.",
      "Consultas SQL para investigar inconsistências, validar dados e identificar a causa raiz de incidentes.",
      "Parametrização do sistema a partir do levantamento de regras de negócio, com testes, homologação e documentação.",
      "Integrações bancárias com CNAB de pagamento e de recebimento: Santander, Votorantim e Sicoob via VAN, e Itaú via API de extrato.",
      "Acompanhamento das rotinas via VAN bancária, gestão de certificados digitais (extrato e boletos) e consulta e integração de extratos bancários.",
      "Desenvolvimento, em paralelo à sustentação, de sistemas usados na própria Rede Marajó: o BankingProtheus (renovação automática dos certificados do Itaú das 53 filiais) e o Portal de Engenharia.",
    ],
    tags: [
      "TOTVS Protheus",
      "SQL",
      "Help desk N1/N2",
      "CNAB",
      "VAN bancária",
      "Certificados digitais",
    ],
  },
  {
    cargo: "Supervisor de Vendas e Auxiliar Administrativo",
    organizacao: "Pioneira Colchões",
    periodo: "2022 — 2025",
    resumo:
      "Supervisão da equipe de vendas e rotinas administrativas e financeiras, o que trouxe visão de negócio e de atendimento ao cliente para a atuação em sistemas.",
    destaques: [
      "Supervisão da equipe de vendas, da qualidade do atendimento e treinamentos de qualidade.",
      "Uso de CRM no acompanhamento de clientes e do processo de vendas.",
      "Rotinas financeiras: contas a pagar, contas a receber e fluxo de caixa.",
      "Gestão do Instagram da empresa: atendimento via direct e análise de desempenho.",
    ],
    tags: ["Liderança de equipe", "CRM", "Rotinas financeiras", "Fluxo de caixa"],
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
      "Levantamento de regras de negócio e tratamento de incidentes pós-implantação.",
    ],
    tags: ["Implantação", "Suporte N1", "Treinamento", "Troubleshooting"],
  },
  {
    cargo: "Operador Técnico de Suporte",
    organizacao: "Atento — Operação Vivo (call center de suporte técnico)",
    periodo: "abr/2016 — ago/2018",
    resumo:
      "Início da trajetória em tecnologia: atendimento técnico por telefone e chat a clientes da Vivo Internet, com diagnóstico remoto de falhas.",
    destaques: [
      "Diagnóstico de falhas de conectividade, dados, modem e roteador.",
      "Orientação passo a passo a usuários leigos na configuração de acesso e na resolução de problemas.",
    ],
    tags: ["Suporte técnico", "Diagnóstico remoto", "Telefone e chat"],
  },
];
