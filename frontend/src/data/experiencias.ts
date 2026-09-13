import type { Experiencia } from "@/types";

/**
 * Experiência profissional real e factual, organizada em ordem cronológica de evolução.
 * Alinhada estritamente com os relatos e a base factual confirmada.
 */
export const experiencias: Experiencia[] = [
  {
    tipo: "direcao",
    cargo: "Desenvolvimento de Software & Integrações",
    organizacao: "Evolução Profissional & Soluções Corporativas",
    periodo: "Nov/2025 — Atual (~6 meses de dedicação prática)",
    resumo:
      "A experiência com suporte, usuários e regras de negócio levou ao desenvolvimento de integrações e sistemas voltados a problemas reais da operação corporativa. Foco em arquitetura limpa, segurança e uso responsável de IA guiado por requisitos.",
    destaques: [
      "Desenvolvimento da Central de Integrações Bancárias com APIs do Itaú, canal mTLS, OAuth2, boletos e extratos conectados ao Protheus.",
      "Desenvolvimento do Analista Fiscal Automatizado com consultas horárias à SEFAZ e conferência com tabelas SF3 e SFT do Protheus.",
      "Desenvolvimento de aplicações com React, TypeScript, Node.js, Python, PostgreSQL e testes automatizados.",
      "Uso de IA como ferramenta de apoio ao desenvolvimento, mantendo levantamento de requisitos, arquitetura e validação humana sob minha responsabilidade.",
    ],
    tags: ["React & TypeScript", "Node.js", "Python", "mTLS & APIs", "PostgreSQL", "Testes Automatizados", "Apoio de IA"],
  },
  {
    cargo: "Suporte N1 → Suporte N2 → Desenvolvimento, Integrações e Automações",
    organizacao: "Rede Marajó",
    periodo: "mai/2025 — atual",
    atual: true,
    resumo:
      "Evolução profissional de Suporte N1 para Suporte N2 e atuação conjunta com desenvolvimento, automações e integrações no ERP TOTVS Protheus P12.",
    destaques: [
      "Suporte N1 e N2 a usuários no TOTVS Protheus P12 nos módulos Financeiro, Contábil, Fiscal, Compras, Contas a Pagar, Contas a Receber e TMS.",
      "Atendimento aos grupos e filiais atendidos: Grupo 1 (2 filiais), Grupo 2 (51 filiais), Grupo 4 (6 filiais), Grupo 6 (6 filiais) e Grupo 7 (6 filiais).",
      "Consultas SQL estruturadas para análise aprofundada de inconsistências de dados e conferência de rotinas.",
      "Compreensão da estrutura de LPs (Lançamentos Padrão) e personalização de alguns deles para atendimento de rotinas do sistema.",
      "Conferência de caixa, sangria, suprimento, rotinas de remessa/retorno CNAB, DDA e apoio a integrações corporativas.",
    ],
    tags: [
      "TOTVS Protheus P12",
      "Suporte N1 → N2",
      "SQL Analítico",
      "TMS",
      "Financeiro & Fiscal",
      "Grupos e Filiais Atendidos",
      "CNAB & DDA",
    ],
  },
  {
    cargo: "Auxiliar Administrativo → Gerente de Vendas",
    organizacao: "Pioneira Colchões",
    periodo: "2018 — 2021 (~3 anos e meio no total)",
    resumo:
      "Evolução interna de aproximadamente dois anos como auxiliar administrativo e cerca de um ano e meio como gerente de vendas.",
    destaques: [
      "Início com rotinas administrativas, controle de documentos e conferência de caixa.",
      "Promoção a Gerente de Vendas, coordenando atendimento ao cliente, negociação e responsabilidade comercial.",
      "Comunicação, liderança de equipe de vendas, foco e resolução de problemas cotidianos da loja.",
      "Relacionamento com pessoas e clientes, conciliando organização administrativa e metas de atendimento.",
    ],
    tags: [
      "Rotinas Administrativas",
      "Conferência de Caixa",
      "Atendimento ao Cliente",
      "Negociação",
      "Comunicação",
      "Responsabilidade Comercial",
      "Liderança",
      "Relacionamento com Pessoas",
      "Resolução de Problemas",
    ],
  },
  {
    cargo: "Suporte N1 & Implantação de Sistemas",
    organizacao: "I5 Sistemas",
    periodo: "abr/2022 — nov/2022",
    resumo:
      "Implantação e sustentação de sistemas desktop e web, acompanhando configuração, testes, validações e orientação de usuários.",
    destaques: [
      "Implantação de sistemas desktop e web, com configuração de parâmetros, testes e validação.",
      "Acompanhamento de usuários na operação diária e levantamento de necessidades.",
      "Suporte técnico e funcional N1, registro e tratamento de incidentes cotidianos de sistemas.",
      "Orientação e treinamento operacional para capacitação de usuários nos módulos do sistema.",
    ],
    tags: [
      "Implantação",
      "Sistemas Desktop & Web",
      "Configuração e Testes",
      "Suporte N1",
      "Registro de Incidentes",
      "Levantamento de Necessidades",
      "Orientação e Treinamento",
    ],
  },
  {
    cargo: "Atendimento e Suporte Técnico",
    organizacao: "Atento S.A.",
    periodo: "abr/2016 — ago/2018",
    resumo:
      "Atendimento e suporte técnico a usuários em conectividade, configuração de roteadores e acesso à internet.",
    destaques: [
      "Atendimento técnico com foco em comunicação clara, escuta ativa e resolução estruturada de problemas.",
      "Diagnóstico de conectividade de rede e identificação de falhas de sinal.",
      "Orientação passo a passo a usuários para configuração e validação de modem, roteador e acesso à internet.",
    ],
    tags: ["Suporte Técnico", "Conectividade", "Diagnóstico de Redes", "Comunicação", "Orientação ao Usuário"],
  },
];
