import type { Projeto } from "@/types";
import { links } from "@/data/links";

/**
 * Casos reais e evidências profissionais de engenharia e processos.
 * Estruturados em 3 níveis de leitura: Visão rápida, Regra de negócio e Evidência técnica.
 * Sem nomenclaturas genéricas de software house e sem métricas não comprovadas.
 */
export const projetos: Projeto[] = [
  {
    slug: "banking-protheus",
    titulo: "Central de Integrações Bancárias — Itaú e Protheus",
    categoria: "Integração Bancária, mTLS & APIs",
    destaque: true,
    resumo:
      "Aplicação integrada às APIs do Itaú para gerenciamento de credenciais, fluxo OAuth2, autenticação mTLS, validação e renovação de certificados, consulta de extratos e emissão de boletos conectados ao Protheus.",
    stack: [
      "Node.js",
      "TypeScript",
      "React",
      "APIs Itaú",
      "mTLS",
      "OAuth2",
      "TOTVS Protheus",
      "CNAB",
      "DDA",
      "PostgreSQL",
    ],
    links: [
      { rotulo: "Abrir reconstrução interativa", href: "/projetos/banking-protheus/demo" },
    ],
    detalhe: {
      contexto:
        "Centralização da comunicação segura entre sistemas corporativos e as APIs do Itaú, gerenciando credenciais e certificados digitais para apoio às rotinas financeiras do ERP.",
      problema:
        "Necessidade de validar e renovar certificados digitais mTLS, testar endpoints bancários de extratos e boletos e integrar com segurança aos fluxos de contas a pagar e receber do Protheus.",
      participacao:
        "Desenvolvimento da solução de integração: autenticação mTLS e OAuth2, validação de certificados, consumo das APIs bancárias e apoio aos processos financeiros.",
      solucao:
        "Central de integrações com canal mTLS mútuo, fluxo OAuth2 Client Credentials, testes de API de extratos e boletos e tratamento seguro de dados sem exposição de credenciais.",
      arquitetura:
        "Node.js e TypeScript em camadas → canal mTLS seguro com certificados digitais → consumo de endpoints Itaú → validação de respostas para conciliação e processos financeiros.",
      desafios: [
        "Implementar canal mTLS mútuo com certificados digitais conforme padrão bancário.",
        "Automatizar o acompanhamento da validação e renovação de certificados para evitar paradas operacionais.",
        "Tratamento seguro de credenciais e tokens temporários de autenticação.",
      ],
      resultado:
        "Integração centralizada e segura com APIs bancárias, validação confiável de certificados e apoio prático a contas a pagar, receber, DDA e conciliação.",
      seguranca:
        "Criptografia de ponta a ponta via mTLS, rotação segura de credenciais e tratamento estrito de dados financeiros.",
      usuariosOuEscala: "Operações financeiras e tesouraria multiempresa integradas ao ERP.",
      visaoRapida: {
        problema: "Necessidade de conectar processos financeiros do Protheus às APIs bancárias do Itaú com segurança e automação.",
        participacao: "Desenvolvimento da solução de integração: autenticação OAuth2, canal mTLS, validação e renovação de certificados, e testes de endpoints de extratos e boletos.",
        solucao: "Aplicação centralizadora que gerencia o canal mTLS e a comunicação com APIs do Itaú, apoiando rotinas de conciliação bancária, DDA e contas a pagar/receber.",
      },
      regraDeNegocio: {
        comoFuncionava: "A comunicação com o banco demandava canal seguro com certificados digitais para consulta de movimentações financeiras e emissão de cobranças bancárias via API.",
        areasEnvolvidas: ["Financeiro", "Tesouraria", "Contas a Pagar e Receber", "TI / Sistemas"],
        relevancia: "Garantir que a comunicação bancária ocorra de forma automatizada e protegida por criptografia mútua, sem interrupção por expiração de certificados.",
      },
      evidenciaTecnica: {
        integracoes: ["APIs Itaú (Extratos e Boletos)", "OAuth2 Client Credentials", "Canal mTLS com certificados digitais"],
        tabelas: ["SE2 (Contas a Pagar)", "SE1 (Contas a Receber)", "Estrutura de conciliação Protheus"],
        arquitetura: "Aplicação em camadas (Node.js/TypeScript) com cliente HTTP resiliente e módulo mTLS.",
        seguranca: "Autenticação mútua mTLS, validação de certificados digitais e proteção deny-by-default.",
        testes: "Testes automatizados de validação de endpoints bancários e verificação de expiração de certificados.",
        demonstracao: {
          rotulo: "Abrir demonstração interativa",
          href: "/projetos/banking-protheus/demo",
          avisoFicticio: "Demonstração com dados financeiros e certificados simulados para fins técnicos.",
        },
      },
    },
  },

  {
    slug: "analista-fiscal",
    titulo: "Analista Fiscal Automatizado — SEFAZ e Protheus",
    categoria: "Fiscal, Auditoria & SEFAZ",
    destaque: true,
    resumo:
      "Solução desenvolvida para apoiar a análise fiscal através de consultas periódicas à SEFAZ, confronto contra registros do Protheus P12 (tabelas SF3 e SFT) e identificação de divergências em 51 filiais do Grupo 2.",
    stack: [
      "TOTVS Protheus",
      "Webservice SEFAZ",
      "Tabelas SF3 / SFT",
      "SQL",
      "Python / Node.js",
      "IA para Priorização",
      "Fiscal (SIGAFIS)",
    ],
    links: [
      { rotulo: "Ver no Laboratório Protheus", href: "/processos-erp" },
    ],
    detalhe: {
      contexto:
        "Necessidade de auditar continuamente as notas fiscais emitidas contra as empresas do Grupo 2 (51 filiais), assegurando que nenhum documento fique desacompanhado de escrituração no ERP.",
      problema:
        "Risco de passivo fiscal decorrente de notas emitidas na SEFAZ e não lançadas no Protheus, cancelamentos não refletidos ou divergências entre XML e livros fiscais.",
      participacao:
        "Concepção e desenvolvimento da rotina automatizada: consultas horárias à SEFAZ, cruzamento com as tabelas SF3 e SFT do Protheus e suporte analítico com IA para priorização.",
      solucao:
        "Sistema automatizado que consulta periodicamente a SEFAZ, compara documentos contra os registros fiscais do Protheus e aponta divergências para validação do analista fiscal.",
      arquitetura:
        "Rotina periódica de consulta SEFAZ → módulo de cruzamento contra tabelas SF3 e SFT do Protheus → motor analítico com apoio de IA → relatório de apontamentos fiscais.",
      desafios: [
        "Confrontar grande volume de documentos fiscais entre 51 filiais de forma periódica sem onerar o banco de dados.",
        "Estruturar cruzamento relacional preciso entre cabeçalho e itens de livros fiscais (SF3 e SFT).",
        "Apoiar a investigação com IA mantendo a validação e decisão soberana com o profissional fiscal.",
      ],
      resultado:
        "Governança fiscal proativa, rastreabilidade de notas emitidas contra as filiais e identificação rápida de inconsistências antes do fechamento do período fiscal.",
      seguranca:
        "Consulta autenticada, validação estrita de chaves de acesso e preservação total do sigilo fiscal corporativo.",
      usuariosOuEscala: "Abrangência nas 51 filiais do Grupo 2 com monitoramento horário.",
      visaoRapida: {
        problema: "Risco de notas fiscais emitidas contra a empresa na SEFAZ permanecerem sem escrituração no Protheus nas 51 filiais do Grupo 2.",
        participacao: "Concepção e desenvolvimento da solução automatizada de consulta horária à SEFAZ, confronto contra o Protheus e priorização assistida por IA.",
        solucao: "Sistema que varre periodicamente a SEFAZ, compara com tabelas SF3 e SFT do Protheus e aponta divergências para análise do profissional fiscal.",
      },
      regraDeNegocio: {
        comoFuncionava: "A cada hora, o sistema consulta documentos fiscais emitidos contra a organização e confronta com o que foi escriturado no ERP corporativo.",
        areasEnvolvidas: ["Fiscal", "Compras", "Contabilidade", "51 Filiais (Grupo 2)"],
        relevancia: "Evitar passivos fiscais decorrentes de notas não lançadas, cancelamentos não refletidos no ERP ou divergências de valores entre físico e escriturado.",
      },
      evidenciaTecnica: {
        integracoes: ["Webservice SEFAZ (Consulta de Documentos Fiscais)", "TOTVS Protheus P12"],
        tabelas: ["SF3 (Livros Fiscais)", "SFT (Itens do Livro Fiscal)", "SF1 (Cabeçalho de Notas de Entrada)"],
        arquitetura: "Rotina periódica automatizada com parser de dados fiscais, cruzamento relacional e módulo de assistência por IA para estruturação de relatórios.",
        seguranca: "Validação rigorosa de chaves fiscais, sem exposição de CNPJs ou valores corporativos reais.",
        testes: "Testes automatizados de comparação de conjuntos e validação de regras de divergência.",
        demonstracao: {
          rotulo: "Explorar no Laboratório Protheus",
          href: "/processos-erp",
          avisoFicticio: "Laboratório prático com rotinas e documentos simulados para validação.",
        },
      },
    },
  },

  {
    slug: "portal-rh",
    titulo: "Portal RH com IA e integração ao TOTVS Protheus",
    categoria: "IA Aplicada, Seleção & ExecAuto Protheus",
    destaque: true,
    resumo:
      "Sistema de atração e seleção com OCR de vagas, estruturação com IA, ranking de aderência de currículos, conferência de documentação e integração automática ao TOTVS Protheus via rotina ExecAuto.",
    stack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "OCR",
      "Modelos de IA",
      "TOTVS Protheus",
      "ExecAuto",
      "PostgreSQL",
    ],
    links: [
      { rotulo: "Abrir reconstrução interativa", href: "/projetos/portal-rh/demo" },
    ],
    detalhe: {
      contexto:
        "Processo de recrutamento corporativo demandava agilidade na triagem de currículos contra os requisitos das vagas e integração direta com o cadastro de funcionários do Protheus.",
      problema:
        "Triagem manual demorada de currículos, falta de padronização na análise de requisitos e lentidão na digitação de dados admissionais no ERP corporativo.",
      participacao:
        "Desenvolvimento do sistema completo conectando frontend React/TypeScript, backend FastAPI com OCR e IA, e integração de admissão com o Protheus via rotina ExecAuto.",
      solucao:
        "Fluxo ponta a ponta de 14 etapas: cadastro de vagas, OCR, estruturação com IA, validação pelo recrutador, análise de currículos, ranking de aderência, decisão humana, conferência de documentos e integração ao Protheus por ExecAuto.",
      arquitetura:
        "Frontend SPA React com pipeline visual → backend FastAPI em Python com OCR e IA → módulo de integração ExecAuto com o TOTVS Protheus P12.",
      desafios: [
        "Extrair requisitos de vagas a partir de imagens e documentos diversos via OCR e estruturar com IA.",
        "Implementar cálculo de aderência de currículos com suporte à decisão sem retirar a autonomia do recrutador.",
        "Integrar a aprovação final de admissão diretamente no Protheus utilizando a rotina nativa ExecAuto.",
      ],
      resultado:
        "Agilidade substancial na triagem de candidatos e garantia de integridade cadastral no ERP, mantendo o recrutador e o RH no controle soberano de todas as aprovações.",
      seguranca:
        "Validação estrita de documentos, isolamento de dados sensíveis e aprovação humana mandatória antes do disparo do ExecAuto no Protheus.",
      usuariosOuEscala: "Operação de recrutamento, seleção e departamento pessoal integrada ao ERP.",
      visaoRapida: {
        problema: "Triagem manual lenta de vagas e currículos, dificuldade de avaliação consistente de requisitos e morosidade no cadastro admissional no Protheus.",
        participacao: "Desenvolvimento do sistema completo conectando extração de requisitos, análise com IA, pipeline de seleção e integração via ExecAuto.",
        solucao: "Plataforma de recrutamento ponta a ponta com OCR de vagas, estruturação com IA, ranking de aderência, conferência de documentos e integração ao Protheus.",
      },
      regraDeNegocio: {
        comoFuncionava: "Fluxo completo de 14 etapas: cadastro de vagas, recebimento de imagens ou documentos de vagas, OCR para extração, IA para estruturar as informações, validação da vaga pelo recrutador, recebimento de currículos, análise de currículos, comparação com os requisitos da vaga, cálculo de aderência, ranking de candidatos, decisão do recrutador, envio e conferência de documentos admissionais, validação pelo RH e integração com o TOTVS Protheus por meio de rotina ExecAuto.",
        areasEnvolvidas: ["Recrutamento & Seleção", "Departamento Pessoal / RH", "TI / ERP"],
        relevancia: "Reduzir o tempo do processo seletivo e eliminar a digitação manual de cadastros admissionais no ERP, mantendo o recrutador e o RH no controle de todas as decisões.",
      },
      evidenciaTecnica: {
        integracoes: ["Rotina ExecAuto do TOTVS Protheus P12", "OCR para extração de texto", "Modelos de IA para estruturação de dados", "FastAPI / Python", "React"],
        tabelas: ["SRA (Funcionários do Protheus)", "Tabelas relacionais de vagas e candidatos"],
        arquitetura: "Frontend React com pipeline Kanban → backend FastAPI/Python com endpoints REST → rotina ExecAuto para inserção consistente no Protheus.",
        seguranca: "Validação estrita de esquemas em APIs REST, isolamento de dados de candidatos e homologação pelo RH antes do disparo do ExecAuto.",
        testes: "Testes automatizados unitários e de integração com Vitest e Playwright.",
        demonstracao: {
          rotulo: "Abrir demonstração parcial",
          href: "/projetos/portal-rh/demo",
          avisoFicticio: "Reconstrução parcial simulada (2 telas) com dados fictícios para demonstração do fluxo de recrutamento.",
        },
      },
    },
  },

  {
    slug: "portal-engenharia",
    titulo: "Portal de Engenharia",
    categoria: "Sistema Corporativo · Engenharia & Obras",
    destaque: true,
    resumo:
      "Sistema corporativo desenvolvido para centralizar a gestão de obras, orçamento, fornecedores, cotações, EAP e fluxos de aprovação, com arquitetura multiempresa, RBAC e auditoria.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "APIs REST",
      "RBAC",
      "Auditoria",
    ],
    links: [
      { rotulo: "Abrir reconstrução interativa", href: "/projetos/portal-engenharia/demo" },
    ],
    detalhe: {
      contexto:
        "A área de engenharia e obras acompanhava obras, chamados, fornecedores e cotações em planilhas e e-mails, sem visão consolidada, sem controle de acesso e sem histórico confiável.",
      problema:
        "Informação fragmentada e difícil de auditar, ausência de controle claro de permissões e falta de indicadores para acompanhar obras e medições.",
      participacao:
        "Desenvolvimento full stack: levantamento de regras de negócio com usuários, modelagem relacional no PostgreSQL com Prisma, criação de APIs REST em Node.js, frontend React e controle de acesso RBAC com auditoria.",
      solucao:
        "Aplicação corporativa para gerir obras, abrir e acompanhar chamados, cadastrar fornecedores, conduzir cotações, gerenciar macro-etapas da EAP e acompanhar relatórios técnicos.",
      arquitetura:
        "Backend Node.js modular estruturado em camadas com Prisma sobre PostgreSQL → APIs REST documentadas → frontend React responsivo. Autorização RBAC centralizada com deny-by-default.",
      desafios: [
        "Modelar obras, cotações e fornecedores com integridade referencial rigorosa.",
        "Implementar controle de acesso RBAC estrito aplicado em cada endpoint do backend.",
        "Estruturar estrutura analítica de projeto (EAP) com controle físico-financeiro de medições.",
      ],
      resultado:
        "Obras, chamados, fornecedores e cotações unificados em uma plataforma com rastreabilidade de aprovações e integridade de dados.",
      seguranca:
        "Controle de acesso granular (RBAC) com deny-by-default, autenticação segura e log de auditoria.",
      usuariosOuEscala: "Arquitetura multiempresa e multifilial com controle estrito de permissões e alçadas.",
      visaoRapida: {
        problema: "Acompanhamento fragmentado de obras, orçamentos, cotações com fornecedores e medições em planilhas sem controle de acesso ou histórico confiável.",
        participacao: "Desenvolvimento full stack: levantamento de regras de negócio com usuários, modelagem no PostgreSQL com Prisma, APIs REST em Node.js, frontend React e controle RBAC.",
        solucao: "Sistema corporativo para centralizar obras, chamados técnicos, fornecedores, cotações concorrenciais, EAP com controle físico-financeiro e auditoria.",
      },
      regraDeNegocio: {
        comoFuncionava: "Gestão de obras civis com controle de macro-etapas da EAP, alçadas de aprovação de medições e relatórios técnicos consolidados.",
        areasEnvolvidas: ["Engenharia", "Suprimentos / Cotações", "Diretoria", "Financeiro"],
        relevancia: "Garantir rastreabilidade de aprovações físico-financeiras e controle estrito de permissões multiempresa.",
      },
      evidenciaTecnica: {
        integracoes: ["APIs REST corporativas", "Node.js em camadas MVC", "Prisma ORM", "PostgreSQL"],
        tabelas: ["Obras", "Macro-etapas EAP", "Fornecedores", "Cotações", "Trilhas de Auditoria"],
        arquitetura: "Backend modular com autorização RBAC centralizada e frontend React responsivo.",
        seguranca: "Controle de acesso por papéis (RBAC) com deny-by-default e log cronológico de auditoria para operações sensíveis.",
        testes: "Testes de rotas de API, integridade de permissões e componentes React.",
        demonstracao: {
          rotulo: "Abrir reconstrução interativa",
          href: "/projetos/portal-engenharia/demo",
          avisoFicticio: "Demonstração reconstruída com dados e obras 100% fictícios para preservar sigilo empresarial.",
        },
      },
    },
  },

  {
    slug: "les",
    titulo: "Lecino Lucas Engineering Standard (LES)",
    categoria: "Padrão de Engenharia · Open Source (Secundário)",
    destaque: false,
    resumo:
      "Padrão versionado de engenharia e UX para desenvolvimento assistido por IA, distribuído como CLI npm que faz bootstrap de contratos de governança, limites e segurança de projetos.",
    stack: ["TypeScript", "Node.js", "CLI npm", "Governança", "Vitest", "Git Hooks"],
    links: [
      { rotulo: "GitHub", href: links.les.github },
      { rotulo: "npm", href: links.les.npm },
    ],
    detalhe: {
      contexto:
        "A proliferação de código gerado sem método acumula dívida técnica, arquivos gigantes e ausência de contratos claros de arquitetura e segurança.",
      problema:
        "Projetos sem disciplina de engenharia enfrentam instabilidade, falta de testes automatizados e vulnerabilidades.",
      participacao:
        "Autor e mantenedor. Desenvolvi a especificação normativa v2.2.0, a CLI npm @lecinolucas/les e templates reutilizáveis.",
      solucao:
        "Suíte de governança que impõe contratos estritos (AGENTS.md), limite saudável de código (< 300 linhas), segurança deny-by-default e checagens automáticas.",
      arquitetura:
        "CLI em Node.js/TypeScript sem dependências de runtime → analisadores estáticos → geradores de templates.",
      desafios: [
        "Equilibrar disciplina de engenharia com velocidade de desenvolvimento.",
        "Garantir que tanto humanos quanto modelos de IA sigam as mesmas invariantes arquiteturais.",
      ],
      resultado:
        "Padronização e previsibilidade em projetos, com auditorias instantâneas de conformidade.",
      seguranca:
        "Regra mandatória de segredos zero, validação deny-by-default e checagem de vulnerabilidades.",
      visaoRapida: {
        problema: "Dívida técnica rápida e arquivos excessivamente longos em projetos desenvolvidos sem contratos rígidos de engenharia.",
        participacao: "Autor e mantenedor da especificação normativa v2.2.0 e da ferramenta CLI npm @lecinolucas/les.",
        solucao: "Padrão de governança técnica que estabelece contratos claros de projeto, modularidade e testes automatizados.",
      },
      regraDeNegocio: {
        comoFuncionava: "Definição de regras de arquitetura seguidas tanto por desenvolvedores quanto por agentes de IA.",
        areasEnvolvidas: ["Engenharia de Software", "Governança Técnica", "Qualidade de Código"],
        relevancia: "Assegurar que projetos de software permaneçam sustentáveis, auditáveis e modulares ao longo do tempo.",
      },
      evidenciaTecnica: {
        integracoes: ["CLI npm", "Git Hooks", "GitHub Actions"],
        tabelas: ["N/A (Ferramenta de Linha de Comando)"],
        arquitetura: "CLI autônoma em TypeScript/Node.js compilada sem dependências externas de execução.",
        seguranca: "Auditoria estrita de dependências e regras mandatória de deny-by-default.",
        testes: "Testes automatizados com Vitest cobrindo comandos e geradores de templates.",
      },
    },
  },
];

export const projetosDestaque = projetos.filter((p) => p.destaque);

export function projetoPorSlug(slug: string): Projeto | undefined {
  return (
    projetos.find((p) => p.slug === slug) ||
    (slug === "import-nfe" ? projetos.find((p) => p.slug === "analista-fiscal") : undefined) ||
    (slug === "conciliacao-bancaria-itau" ? projetos.find((p) => p.slug === "banking-protheus") : undefined)
  );
}
