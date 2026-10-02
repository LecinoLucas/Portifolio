import type { EtapaCarreira } from "@/types";

/**
 * Carreira em ordem cronológica, terminando em desenvolvimento.
 * Só números e fatos informados pelo autor ou presentes no currículo.
 */
export const carreira: EtapaCarreira[] = [
  {
    id: "atento",
    trilha: "Atento",
    trilhaCurta: "Atento",
    quando: "2016–2018",
    cargo: "Operador Técnico de Suporte",
    organizacao: "Atento · Operação Vivo (call center de suporte técnico)",
    resumo:
      "O início da trajetória em tecnologia: atendimento técnico por telefone e chat a clientes da Vivo Internet, com diagnóstico remoto de falhas.",
    numeros: [
      { valor: "2016", rotulo: "início na tecnologia" },
      { valor: "Telefone + chat", rotulo: "canais de atendimento" },
    ],
    destaques: [
      "Diagnóstico de falhas de conectividade, dados, modem e roteador.",
      "Orientação passo a passo a usuários leigos na configuração de acesso e na resolução de problemas.",
    ],
    ferramentas: ["Suporte técnico", "Diagnóstico remoto", "Atendimento ao usuário"],
    levei: "Escutar o usuário com calma e diagnosticar o problema à distância, em linguagem simples.",
  },
  {
    id: "i5",
    trilha: "I5 Sistemas",
    trilhaCurta: "I5",
    quando: "2022",
    cargo: "Analista de Suporte de TI / Implantação de Sistemas",
    organizacao: "I5 Sistemas · abr/2022 a nov/2022",
    resumo:
      "Implantação e suporte de sistemas desktop e web, acompanhando configuração, testes, validação, treinamento e entrada em operação junto aos usuários.",
    numeros: [
      { valor: "Go-live", rotulo: "acompanhei a entrada em operação" },
      { valor: "Desktop + web", rotulo: "sistemas implantados" },
    ],
    destaques: [
      "Implantação e configuração de sistemas junto às áreas de negócio.",
      "Testes, validação e treinamento de usuários até a entrada em operação.",
      "Levantamento de regras de negócio e tratamento de incidentes pós-implantação.",
    ],
    ferramentas: ["Implantação", "Testes funcionais", "Treinamento", "Regras de negócio"],
    levei: "Ver um sistema entrar em operação e treinar quem vai usá-lo.",
  },
  {
    id: "pioneira",
    trilha: "Pioneira Colchões",
    trilhaCurta: "Pioneira",
    quando: "2022–2025",
    cargo: "Supervisor de Vendas e Auxiliar Administrativo",
    organizacao: "Pioneira Colchões",
    resumo:
      "Supervisão da equipe de vendas e rotinas administrativas e financeiras, o que trouxe visão de negócio e de atendimento ao cliente para a atuação em sistemas.",
    numeros: [
      { valor: "3 anos", rotulo: "liderando equipe e rotinas" },
      { valor: "CRM", rotulo: "clientes e processo de vendas" },
    ],
    destaques: [
      "Supervisão da equipe de vendas, da qualidade do atendimento e treinamentos de qualidade.",
      "Uso de CRM no acompanhamento de clientes e do processo de vendas.",
      "Rotinas financeiras: contas a pagar, contas a receber e fluxo de caixa.",
      "Gestão do Instagram da empresa: atendimento via direct e análise de desempenho.",
    ],
    ferramentas: ["Liderança de equipe", "CRM", "Contas a pagar e a receber", "Fluxo de caixa"],
    levei: "O negócio visto por dentro: vendas, financeiro e liderança de equipe.",
  },
  {
    id: "marajo",
    trilha: "Rede Marajó",
    trilhaCurta: "Marajó",
    quando: "2025–2026",
    cargo: "Analista de Sistemas / Sistemas Corporativos",
    organizacao: "Rede Marajó · mai/2025 a ago/2026",
    resumo:
      "Sustentação de sistemas corporativos e atendimento técnico e funcional (help desk N1/N2) a usuários e áreas de negócio. Investigação de incidentes com SQL, no ERP TOTVS Protheus e nas integrações bancárias.",
    numeros: [
      { valor: "~20", rotulo: "chamados por dia (help desk N1/N2)" },
      { valor: "4", rotulo: "bancos integrados: Itaú, Santander, Sicoob e Votorantim" },
      { valor: "4", rotulo: "módulos do Protheus: financeiro, contábil, fiscal e compras" },
      { valor: "2", rotulo: "sistemas entregues em paralelo à sustentação" },
    ],
    destaques: [
      "TOTVS Protheus: suporte funcional nos processos financeiros (contas a pagar e a receber), contábeis, fiscais e de compras.",
      "Consultas SQL para investigar inconsistências, validar dados e identificar a causa raiz de incidentes.",
      "Parametrização do sistema a partir do levantamento de regras de negócio, com testes, homologação e documentação.",
      "Integrações bancárias com CNAB de pagamento e de recebimento: Santander, Votorantim e Sicoob via VAN, e Itaú via API de extrato.",
      "Acompanhamento das rotinas via VAN bancária, gestão de certificados digitais (extrato e boletos) e consulta e integração de extratos bancários.",
    ],
    ferramentas: ["TOTVS Protheus", "SQL", "CNAB", "VAN bancária", "API de extrato", "Certificados digitais", "mTLS"],
    levei: "Protheus, SQL e integrações bancárias, investigando cada incidente até a causa raiz.",
    tituloSistemas: "entregues em paralelo à sustentação",
    sistemas: [
      {
        titulo: "Portal de Engenharia",
        situacao: "Em produção na Rede Marajó",
        texto:
          "Gestão de obras, chamados, fornecedores e cotações, com mais de 500 usuários. Construído ao mesmo tempo em que eu sustentava os sistemas e atendia os chamados.",
      },
      {
        titulo: "BankingProtheus",
        situacao: "Em produção",
        texto:
          "Feito para a Rede Marajó automatizar a renovação dos certificados do Itaú que sustentam a API de extrato e a de boletos nas 53 filiais, com job agendado e painel de vencimentos.",
      },
    ],
  },
  {
    id: "desenvolvimento",
    trilha: "Desenvolvimento",
    trilhaCurta: "Dev",
    quando: "Hoje",
    cargo: "Desenvolvimento de sistemas",
    organizacao: "Em transição para o desenvolvimento",
    resumo:
      "Em paralelo à sustentação, construo os sistemas que resolvem o que vejo na operação. Estou em transição para o desenvolvimento, e já com sistemas em produção.",
    numeros: [
      { valor: "5", rotulo: "sistemas construídos ou em construção" },
      { valor: "4", rotulo: "em produção ou entregues" },
      { valor: "500+", rotulo: "usuários no Portal de Engenharia" },
    ],
    destaques: [
      "Arquitetura e regra de negócio antes do código.",
      "Sistemas com autenticação, controle de acesso por papéis e auditoria.",
      "Padrão de engenharia próprio, o LES, que também governa este portfólio.",
    ],
    ferramentas: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    levei: "Construo sabendo como o usuário sofre: a regra de negócio vem primeiro.",
    sistemas: [
      { titulo: "BankingProtheus", situacao: "Em produção", texto: "Renova automaticamente os certificados do Itaú de uma rede de 53 filiais." },
      { titulo: "Portal de Engenharia", situacao: "Em produção · Rede Marajó", texto: "Gestão de obras, chamados, fornecedores e cotações, com mais de 500 usuários." },
      { titulo: "ImportNFe", situacao: "Em produção · vendido a uma distribuidora", texto: "Importa XML de NF-e, normaliza os itens e gera planilhas por template." },
      { titulo: "Portal de RH", situacao: "Entregue", texto: "Recrutamento e admissão, com análise por IA e integração com o Protheus." },
      { titulo: "Sistema de Gestão de Clínica", situacao: "Em construção", texto: "Agenda, financeiro e protocolos com IA, com bot de atendimento via WhatsApp." },
    ],
  },
];
