import type { EtapaCarreira } from "@/types";

/** Formata meses como "2 anos e 4 meses". */
export function formatarMeses(meses: number): string {
  const anos = Math.floor(meses / 12);
  const resto = meses % 12;
  const a = anos ? `${anos} ${anos === 1 ? "ano" : "anos"}` : "";
  const m = resto ? `${resto} ${resto === 1 ? "mês" : "meses"}` : "";
  return [a, m].filter(Boolean).join(" e ");
}

/**
 * Carreira em ordem cronológica, terminando na Rede Marajó.
 * Só números e fatos informados pelo autor ou presentes no currículo.
 * Durações calculadas das datas (sem arredondar para cima).
 * Cada destaque pode começar com "Rótulo: " para facilitar a leitura.
 */
export const carreira: EtapaCarreira[] = [
  {
    id: "atento",
    trilha: "Atento",
    trilhaCurta: "Atento",
    quando: "2016–2018",
    meses: 28, // abr/2016 a ago/2018
    duracao: formatarMeses(28),
    ti: true,
    cargo: "Operador Técnico de Suporte",
    organizacao: "Atento · Operação Vivo (call center de suporte técnico) · abr/2016 a ago/2018",
    resumo:
      "O início da trajetória em tecnologia: atendimento técnico por telefone e chat a clientes da Vivo Internet, com diagnóstico remoto de falhas.",
    numeros: [],
    destaques: [
      "Diagnóstico: falhas de conectividade, dados, modem e roteador.",
      "Atendimento: orientação passo a passo a usuários leigos na configuração de acesso e na resolução de problemas, por telefone e chat.",
    ],
    ferramentas: ["Suporte técnico", "Diagnóstico remoto", "Telefone e chat", "Atendimento ao usuário"],
  },
  {
    id: "i5",
    trilha: "I5 Sistemas",
    trilhaCurta: "I5",
    quando: "2022",
    meses: 7, // abr/2022 a nov/2022
    duracao: formatarMeses(7),
    ti: true,
    cargo: "Analista de Suporte de TI / Implantação de Sistemas",
    organizacao: "I5 Sistemas · abr/2022 a nov/2022",
    resumo:
      "Implantação e suporte de sistemas desktop e web, acompanhando configuração, testes, validação, treinamento e entrada em operação junto aos usuários.",
    numeros: [],
    destaques: [
      "Implantação: configuração de sistemas desktop e web junto às áreas de negócio.",
      "Validação: testes, validação e treinamento de usuários até a entrada em operação (go-live).",
      "Pós-implantação: levantamento de regras de negócio e tratamento de incidentes.",
    ],
    ferramentas: ["Implantação", "Desktop e web", "Testes funcionais", "Treinamento", "Regras de negócio"],
  },
  {
    id: "pioneira",
    trilha: "Pioneira Colchões",
    trilhaCurta: "Pioneira",
    quando: "2022–2025",
    duracao: "cerca de 3 anos",
    cargo: "Supervisor de Vendas e Auxiliar Administrativo",
    organizacao: "Pioneira Colchões · 2022 a 2025",
    resumo:
      "Supervisão da equipe de vendas e rotinas administrativas e financeiras, o que trouxe visão de negócio e de atendimento ao cliente para a atuação em sistemas.",
    numeros: [],
    destaques: [
      "Liderança: supervisão da equipe de vendas, da qualidade do atendimento e treinamentos de qualidade.",
      "Clientes: uso de CRM no acompanhamento de clientes e do processo de vendas.",
      "Financeiro: contas a pagar, contas a receber e fluxo de caixa.",
      "Redes sociais: gestão do Instagram da empresa, com atendimento via direct e análise de desempenho.",
    ],
    ferramentas: ["Liderança de equipe", "CRM", "Contas a pagar e a receber", "Fluxo de caixa"],
  },
  {
    id: "marajo",
    trilha: "Rede Marajó",
    trilhaCurta: "Marajó",
    quando: "2025–2026",
    meses: 15, // mai/2025 a ago/2026
    duracao: formatarMeses(15),
    ti: true,
    cargo: "Analista de Sistemas / Sistemas Corporativos",
    organizacao: "Rede Marajó · mai/2025 a ago/2026",
    resumo:
      "Sustentação de sistemas corporativos e atendimento técnico e funcional (help desk N1/N2) a usuários e áreas de negócio. Investigação de incidentes com SQL, no ERP TOTVS Protheus e nas integrações bancárias.",
    numeros: [
      { valor: "4", rotulo: "bancos integrados: Itaú, Santander, Sicoob e Votorantim" },
      { valor: "4", rotulo: "módulos do Protheus: financeiro, contábil, fiscal e compras" },
      { valor: "2", rotulo: "sistemas entregues em paralelo à sustentação" },
    ],
    destaques: [
      "Protheus: suporte funcional nos processos financeiros (contas a pagar e a receber), contábeis, fiscais e de compras.",
      "SQL: consultas para investigar inconsistências, validar dados e identificar a causa raiz de incidentes.",
      "Parametrização bancária no Protheus, feita por mim: CNAB de pagamento e de recebimento, DDA e boletos dos bancos (Itaú, Santander, entre outros), do levantamento da regra ao teste e à homologação.",
      "Integrações: Santander, Votorantim e Sicoob via VAN bancária, e extrato do Itaú via API.",
      "Certificados digitais: gestão dos certificados de extrato e boletos, com consulta e integração dos extratos bancários.",
    ],
    ferramentas: ["TOTVS Protheus", "SQL", "CNAB", "VAN bancária", "API de extrato", "Certificados digitais", "mTLS"],
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
];

/** Soma dos períodos de TI (Atento + I5 + Rede Marajó), a partir das datas. */
export const totalMesesTI = carreira.reduce((soma, e) => soma + (e.ti ? (e.meses ?? 0) : 0), 0);

/** Resumo do topo: números verdadeiros, calculados ou informados pelo autor. */
export const resumoExperiencia = {
  anosTI: `${Math.floor(totalMesesTI / 12)}+`,
  anosTIDetalhe: `${formatarMeses(totalMesesTI)} somando Atento, I5 e Rede Marajó`,
  destaques: [
    { valor: "4", rotulo: "bancos integrados" },
    { valor: "4", rotulo: "módulos do Protheus atendidos" },
    { valor: "2", rotulo: "sistemas entregues em paralelo" },
  ],
};

/**
 * Etapa "Hoje · Desenvolvimento": DESATIVADA na trilha (não está em `carreira`).
 * Terminar a trilha em desenvolvimento podia sugerir que a pessoa não quer
 * suporte, e os projetos reais já têm a própria aba. Guardada para voltar.
 */
export const etapaDesenvolvimento: EtapaCarreira = {
    id: "desenvolvimento",
    trilha: "Desenvolvimento",
    trilhaCurta: "Dev",
    quando: "Hoje",
    duracao: "Em andamento",
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
};
