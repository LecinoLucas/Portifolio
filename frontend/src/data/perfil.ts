import type { Perfil } from "@/types";

export const perfil: Perfil = {
  nome: "Lecino Lucas",
  posicionamento: "Lecino Lucas — Sistemas, Processos e Automação",
  titulo: "Analista de T.I. | Sistemas, Processos e Automação",

  headline:
    "Mais de 4 anos conectando usuários, regras de negócio, ERP e integrações corporativas. Experiência prática no desenvolvimento de aplicações reais em produção com React, TypeScript, Node.js e orquestração de IA com rigor de engenharia.",

  localizacao: "Goiânia - GO · Brasil",
  disponibilidade: "Disponível para novas oportunidades",
  telefone: "(62) 99656-4756",
  email: "lecinolucas5@gmail.com",

  resumoProfissional:
    "Analista de Sistemas com mais de 4 anos de experiência acumulada em TI, principalmente em suporte técnico, implantação e sustentação de sistemas corporativos. Atuação conectando usuários, regras de negócio, ERP, dados e integrações. Em programação e desenvolvimento de software, possui aproximadamente 6 meses de experiência prática, com participação em aplicações reais em produção utilizando React, TypeScript, Node.js, PostgreSQL e APIs REST. Experiência com TOTVS Protheus, SQL, integrações bancárias, levantamento de requisitos, testes, homologação e análise de causa raiz.",

  cartoesImpacto: [
    {
      rotulo: "+4 ANOS EM TI",
      subtitulo: "Sistemas Corporativos",
      descricao: "Suporte técnico, implantação e sustentação de ERP e processos empresariais.",
    },
    {
      rotulo: "~6 MESES EM PROGRAMAÇÃO",
      subtitulo: "Desenvolvimento Real",
      descricao: "Experiência prática em aplicações full stack reais em produção.",
    },
    {
      rotulo: "ERP + SQL + APIs",
      subtitulo: "Integração & Dados",
      descricao: "TOTVS Protheus P12, PostgreSQL, mTLS bancário e automação de regras de negócio.",
    },
    {
      rotulo: "IA APLICADA",
      subtitulo: "Engenharia & Aceleração",
      descricao: "Apoio ao desenvolvimento, análise e documentação com governança arquitetural.",
    },
  ],

  competenciasCategorizadas: [
    {
      categoria: "Processos e Requisitos",
      itens: [
        "Levantamento de requisitos",
        "Regras de negócio",
        "Testes e homologação",
        "Documentação técnica",
        "Treinamento de usuários",
        "Análise de causa raiz",
      ],
    },
    {
      categoria: "Sistemas Corporativos",
      itens: [
        "TOTVS Protheus P12",
        "Financeiro (SIGAFIN)",
        "Contábil (SIGACTB)",
        "Fiscal (SIGAFIS)",
        "Compras (SIGACOM)",
        "Contas a Pagar e Receber",
        "CNAB 240 / 400 & DDA",
        "Conferência de Caixa",
        "Documentos Fiscais (NF-e/CT-e)",
        "Reforma Tributária (IBS/CBS)",
        "TMS / SIGATMS",
      ],
    },
    {
      categoria: "Dados e Integrações",
      itens: [
        "SQL & PostgreSQL",
        "APIs REST",
        "Integrações bancárias (Itaú, Santander, Sicoob, Votorantim)",
        "OAuth2 Client Credentials",
        "mTLS (Mutual TLS)",
        "Certificados digitais X.509",
      ],
    },
    {
      categoria: "Desenvolvimento",
      itens: [
        "React & TypeScript",
        "JavaScript & Node.js",
        "Python & FastAPI",
        "Git & GitHub",
        "Docker",
        "IA generativa aplicada com governança",
      ],
    },
  ],

  bio: [
    "Sou Analista de T.I. com sólida vivência em suporte, implantação e sustentação de sistemas corporativos e ERP TOTVS Protheus P12. Minha principal competência está em conectar regras de negócio, usuários, banco de dados e integrações críticas.",
    "No desenvolvimento de software, acumulo aproximadamente 6 meses de experiência prática participando de aplicações reais em produção (React, TypeScript, Node.js, PostgreSQL). Desenvolvi soluções como o BankingProtheus (conciliação bancária, CNAB, DDA e APIs Itaú com mTLS) e participei do Portal de Engenharia corporativo.",
    "Tenho um posicionamento claro sobre Inteligência Artificial: ferramentas low-code e IA amadora prometem atalhos, mas falham gravemente em sistemas corporativos de missão crítica (bancário, fiscal e contábil). Meu diferencial é dominar o processo e a regra de negócio antes de codificar, sabendo exatamente o que pedir à IA, como arquitetar e como auditar cada linha de código.",
  ],

  fatos: [
    { rotulo: "Posicionamento", valor: "Sistemas, Processos e Automação" },
    { rotulo: "ERP Corporativo", valor: "TOTVS Protheus P12 (Financeiro, Fiscal, Compras, Caixa, TMS)" },
    { rotulo: "Bancário & CNAB", valor: "Conciliação bancária, DDA, CNAB 240/400, APIs Itaú mTLS" },
    { rotulo: "Fiscal & Reforma", valor: "NF-e, CT-e, importação XML e preparação para IBS/CBS" },
    { rotulo: "Desenvolvimento", valor: "React, TypeScript, Node.js, PostgreSQL, APIs REST (~6 meses)" },
    { rotulo: "Engenharia & IA", valor: "Governança por construção (LES) — domínio de regras e arquitetura" },
  ],

  perfis: {
    analista: {
      titulo: "Analista de Sistemas / TOTVS Protheus",
      subtitulo: "Processos corporativos, ERP, regras de negócio e integração de dados",
      headline:
        "Especialista em traduzir requisitos complexos de negócio em soluções de software e fluxos eficientes dentro do ecossistema corporativo.",
      destaques: [
        "Domínio de rotinas no TOTVS Protheus P12: Financeiro, Contábil, Fiscal, Compras, Caixa e TMS.",
        "Diagnóstico de inconsistências em CNAB, boletos, títulos e documentos fiscais com queries SQL.",
        "Experiência com integrações bancárias via API e VAN (Itaú, Santander, Sicoob, Votorantim).",
        "Conferência de caixa, compras com entrada de NF-e e visão prática da transição da Reforma Tributária.",
      ],
      competencias: [
        "TOTVS Protheus P12",
        "CNAB 240 / 400 & DDA",
        "Conferência de Caixa",
        "Notas Fiscais (NF-e / CT-e)",
        "Reforma Tributária (IBS/CBS)",
        "SQL & Diagnóstico de Causa Raiz",
      ],
      aplicacaoReal:
        "Suporte funcional e técnico de alto impacto na Rede Marajó e desenvolvimento do aplicativo de conciliação BankingProtheus.",
    },
    fullstack: {
      titulo: "Desenvolvedor Full Stack (~6 Meses)",
      subtitulo: "Aplicações web modernas, APIs REST resilientes, TypeScript e arquitetura limpa",
      headline:
        "Foco em criar software limpo, seguro por padrão (deny-by-default) e com governança estrita no uso de IA.",
      destaques: [
        "Solução BankingProtheus para conciliação bancária, leitura de extratos/DDA e integração com APIs Itaú mTLS.",
        "Desenvolvimento full stack no Portal de Engenharia corporativo com controle de obras, EAP e RBAC.",
        "Arquitetura em camadas MVC com Node.js, Express, TypeScript, Prisma ORM e PostgreSQL.",
        "Criação e aplicação do padrão LES (Lucas Engineering Standard) para manter código modular (< 300 linhas) e auditável.",
      ],
      competencias: [
        "React & TypeScript",
        "Node.js & Express (MVC)",
        "PostgreSQL & Prisma ORM",
        "APIs REST, OAuth2 & mTLS",
        "IA Generativa com Arquitetura",
        "Testes com Vitest & Supertest",
      ],
      aplicacaoReal:
        "Construção de ponta a ponta do BankingProtheus e participação ativa no Portal de Engenharia corporativo.",
    },
  },
};
