import type { ExperienciaTrajetoria, CursoOuCertificacao } from "@/types/curriculo";

export const TRAJETORIA_PROFISSIONAL: ExperienciaTrajetoria[] = [
  {
    id: "atento",
    empresa: "Atento S.A.",
    cargo: "Atendimento e Suporte Técnico",
    resumoAtuacao:
      "Atendimento e suporte técnico a usuários em conectividade, configuração e acesso à rede.",
    atividades: [
      "Atendimento ao usuário com comunicação clara e resolução de problemas.",
      "Diagnóstico de conectividade de rede.",
      "Configuração e validação de modem, roteador e acesso à internet.",
      "Orientação passo a passo ao usuário na resolução de incidentes.",
    ],
    competenciasAplicadas: ["Suporte Técnico", "Diagnóstico de Redes", "Comunicação", "Orientação ao Usuário"],
  },
  {
    id: "i5",
    empresa: "I5 Sistemas",
    cargo: "Suporte N1 & Implantação de Sistemas",
    resumoAtuacao:
      "Implantação de sistemas desktop e web, configuração, testes, validação, suporte a incidentes e orientação de usuários.",
    atividades: [
      "Implantação de sistemas desktop e web, com configuração, testes e validação.",
      "Acompanhamento de usuários na operação e levantamento de necessidades.",
      "Suporte técnico e funcional N1, com registro e tratamento de incidentes cotidianos de sistemas.",
      "Orientação e treinamento operacional de usuários nos módulos do sistema.",
    ],
    competenciasAplicadas: [
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
    id: "pioneira",
    empresa: "Pioneira Colchões",
    cargo: "Auxiliar Administrativo → Gerente de Vendas",
    resumoAtuacao:
      "Evolução profissional de aproximadamente dois anos como auxiliar administrativo e cerca de um ano e meio como gerente de vendas.",
    atividades: [
      "Execução de rotinas administrativas e conferência de caixa.",
      "Atendimento ao cliente e negociação comercial.",
      "Comunicação, liderança de equipe de vendas e relacionamento com pessoas.",
      "Responsabilidade comercial, foco e resolução de problemas cotidianos.",
    ],
    competenciasAplicadas: [
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
    id: "marajo",
    empresa: "Rede Marajó",
    cargo: "Suporte N1 → Suporte N2 → Desenvolvimento, Integrações e Automações",
    resumoAtuacao:
      "Evolução de Suporte N1 para Suporte N2 e atuação conjunta com desenvolvimento, automações e integrações no ERP TOTVS Protheus P12.",
    atividades: [
      "Suporte N1 e N2 a usuários no ERP TOTVS Protheus P12 nos módulos Financeiro, Contábil, Fiscal, Compras, Contas a Pagar, Contas a Receber e TMS.",
      "Atendimento aos grupos e filiais atendidos: Grupo 1 (2 filiais), Grupo 2 (51 filiais), Grupo 4 (6 filiais), Grupo 6 (6 filiais) e Grupo 7 (6 filiais).",
      "Consultas SQL estruturadas para análise aprofundada e diagnóstico de inconsistências de dados.",
      "Compreensão da estrutura de LPs (Lançamentos Padrão) e personalização de alguns deles para atendimento de rotinas do sistema.",
      "Conferência de caixa, sangria, suprimento, rotinas de CNAB, DDA e apoio a integrações corporativas.",
    ],
    competenciasAplicadas: ["TOTVS Protheus P12", "Suporte N1 → N2", "SQL", "TMS", "Financeiro & Fiscal", "Grupos e Filiais Atendidos"],
  },
  {
    id: "desenvolvimento",
    empresa: "Evolução Profissional",
    cargo: "Desenvolvimento de Software & Integrações",
    resumoAtuacao:
      "A experiência com suporte, usuários e regras de negócio levou ao desenvolvimento de integrações e sistemas voltados a problemas reais da operação. Dedicação prática de aproximadamente seis meses ao desenvolvimento.",
    atividades: [
      "Desenvolvimento da Central de Integrações Bancárias com APIs do Itaú, canal mTLS, OAuth2, boletos e extratos.",
      "Desenvolvimento do Analista Fiscal Automatizado para consultas à SEFAZ e conferência com tabelas SF3 e SFT do Protheus.",
      "Desenvolvimento de aplicações com React, TypeScript, Node.js, Python, PostgreSQL e testes automatizados.",
      "Uso de IA como ferramenta de apoio ao desenvolvimento, mantendo levantamento de requisitos, arquitetura e validação humana sob minha responsabilidade.",
    ],
    competenciasAplicadas: ["React & TypeScript", "Node.js", "Python", "mTLS & APIs", "PostgreSQL", "Testes Automatizados", "Apoio de IA"],
  },
];

export const CURSOS_E_CERTIFICACOES: CursoOuCertificacao[] = [
  {
    id: "graduacao",
    nome: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Ensino Superior",
  },
];
