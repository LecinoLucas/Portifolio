import type { Projeto } from "@/types";
import { links } from "@/data/links";

/**
 * Projetos reais. Descrições baseadas no escopo efetivamente trabalhado.
 * Sem métricas ou resultados numéricos não comprovados.
 */
export const projetos: Projeto[] = [
  {
    slug: "banking-protheus",
    titulo: "Central de Integrações Bancárias — Itaú e Protheus",
    categoria: "Integração Bancária, mTLS & APIs",
    focoPerfil: "analista",
    destaque: true,
    resumo:
      "Desenvolvimento de sistema para centralizar integrações com APIs do Itaú, autenticação mTLS e OAuth2, validação de certificados digitais X.509, consulta de extratos, emissão de boletos e apoio aos fluxos de conciliação do Protheus.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "SQL",
      "CNAB 240/400",
      "DDA",
      "APIs Itaú",
      "mTLS",
      "TOTVS Protheus",
    ],
    links: [
      { rotulo: "Abrir laboratório interativo", href: "/projetos/banking-protheus/demo" },
    ],
    detalhe: {
      contexto:
        "Necessidade de centralizar a comunicação segura com APIs do Itaú Unibanco, gerenciando credenciais e certificados digitais para apoio às rotinas financeiras do ERP.",
      problema:
        "Complexidade na validação e renovação de certificados digitais mTLS, testes de autenticação e homologação das APIs bancárias de extratos e boletos.",
      participacao:
        "Desenvolvimento da solução de integração: testes de conectividade e autenticação mTLS, gestão segura de certificados digitais X.509, consumo de APIs REST e conexão com processos do ERP.",
      solucao:
        "Central de integrações com canal mTLS, fluxo OAuth2 Client Credentials, testes de API de extratos e boletos e tratamento seguro de dados sem exposição de credenciais.",
      arquitetura:
        "Node.js / TypeScript em camadas → canal mTLS seguro com certificados digitais → consumo de endpoints Itaú → validação de respostas para conciliação e processos financeiros.",
      desafios: [
        "Implementar canal mTLS mútuo com certificados X.509 conforme padrão bancário.",
        "Validação e renovação segura de certificados sem interrupção de conectividade.",
        "Tratamento seguro de credenciais e tokens Bearer temporários.",
      ],
      resultado:
        "Integração centralizada e segura com APIs bancárias, validação confiável de certificados e apoio robusto aos processos de contas a pagar, receber e conciliação.",
      seguranca:
        "Canal criptografado de ponta a ponta com certificados mTLS, rotação segura de credenciais e auditoria estrita de todas as operações financeiras.",
      usuariosOuEscala: "Sistema voltado a operações financeiras e tesouraria multiempresa.",
    },
  },
  {
    slug: "portal-engenharia",
    titulo: "Portal de Engenharia",
    categoria: "Sistema corporativo · Engenharia & Obras",
    focoPerfil: "fullstack",
    destaque: true,
    resumo:
      "Sistema corporativo desenvolvido para centralizar a gestão de obras, orçamento, fornecedores, documentos e fluxos de aprovação, com arquitetura multiempresa, RBAC e auditoria.",
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
      { rotulo: "Abrir demonstração interativa", href: "/projetos/portal-engenharia/demo" },
    ],
    detalhe: {
      contexto:
        "A área de engenharia e obras acompanhava obras, chamados, fornecedores e cotações em planilhas e e-mail, sem visão consolidada, sem controle de acesso e sem histórico confiável.",
      problema:
        "Informação fragmentada e difícil de auditar, ausência de controle claro de permissões (quem pode ver, aprovar ou lançar cotações) e falta de indicadores para acompanhar obras e cotações.",
      participacao:
        "Participei do desenvolvimento full stack: levantamento de regras de negócio com usuários-chave, modelagem relacional no PostgreSQL com Prisma, criação de APIs REST em Node.js, desenvolvimento da interface em React + TypeScript, autenticação com RBAC e trilha de auditoria para operações críticas.",
      solucao:
        "Aplicação web corporativa completa para gerir obras, abrir e acompanhar chamados, cadastrar fornecedores homologados, conduzir cotações concorrenciais, anexar relatórios técnicos e acompanhar dashboards analíticos com métricas consolidadas.",
      arquitetura:
        "Backend Node.js modular estruturado em camadas com Prisma sobre PostgreSQL → APIs REST documentadas → frontend React responsivo com dashboards. Autorização por papéis centralizada no backend com deny-by-default e registro cronológico de auditoria.",
      desafios: [
        "Modelar obras, cotações e fornecedores de forma flexível sem comprometer a integridade referencial.",
        "Implementar controle de acesso RBAC estrito aplicado em cada endpoint do backend.",
        "Estruturar estrutura analítica de projeto (EAP) com controle físico-financeiro rigoroso.",
      ],
      resultado:
        "Obras, chamados, fornecedores e cotações passaram a ser geridos em uma plataforma unificada, com rastreabilidade de aprovações e integridade de dados.",
      seguranca:
        "Controle de acesso granular (RBAC) com deny-by-default, autenticação segura, proteção contra injeção SQL via Prisma e registro de log de auditoria.",
      usuariosOuEscala:
        "Arquitetura multiempresa e multifilial com controle estrito de permissões (RBAC) e alçadas de aprovação.",
    },
  },
  {
    slug: "import-nfe",
    titulo: "ImportNFe & Gestão Fiscal Protheus",
    categoria: "Fiscal, Compras & Reforma Tributária",
    focoPerfil: "analista",
    destaque: true,
    resumo:
      "Solução inteligente para importação de XMLs de NF-e, normalização de produtos com de-para/aliases, conferência contra pedidos de compras (SC7) e preparação sistêmica para a Reforma Tributária (IBS/CBS).",
    stack: [
      "TOTVS Protheus",
      "NF-e / CT-e",
      "XML Parser",
      "Compras (SIGACOM)",
      "Fiscal (SIGAFIS)",
      "Reforma Tributária",
      "SQL",
      "Python / Node.js",
    ],
    links: [
      { rotulo: "Explorar laboratório Protheus", href: "/processos-erp" },
    ],
    detalhe: {
      contexto:
        "O recebimento de mercadorias e a entrada fiscal exigiam conferência manual dos itens das notas fiscais dos fornecedores com os pedidos de compra cadastrados no ERP.",
      problema:
        "Descrições divergentes entre o XML do fornecedor e o cadastro interno no Protheus, retrabalho na classificação fiscal e a urgência de preparar os fluxos para o split payment da Reforma Tributária.",
      participacao:
        "Atuação na especificação de regras de negócio, desenvolvimento de rotinas de normalização e cruzamento de dados de compras/fiscal e modelagem de de-para inteligente de produtos.",
      solucao:
        "Plataforma de importação de NF-e com motor de normalização e aprendizado de aliases, conferência automática com pedidos de compras e painel de análise de alíquotas e impostos.",
      arquitetura:
        "Parser de XML estruturado → motor de normalização e de-para de produtos → validação contra pedidos Protheus (SC7) → conferência de impostos e manifesto do destinatário.",
      desafios: [
        "Normalizar automaticamente milhares de variações textuais de produtos de fornecedores distintos.",
        "Garantir consistência tributária na amarração fiscal de TES antes da escrituração.",
        "Estruturar os fluxos financeiros para o modelo de liquidação com split payment da Reforma Tributária.",
      ],
      resultado:
        "Agilidade na entrada física e fiscal de mercadorias, eliminação de divergências cadastrais e governança no cumprimento das obrigações fiscais.",
      seguranca:
        "Validação de chaves de acesso com certificado digital e consulta de autenticidade direta junto à SEFAZ.",
      usuariosOuEscala: "Operação fiscal e de suprimentos integrada ao ERP corporativo.",
    },
  },
  {
    slug: "les",
    titulo: "Lecino Lucas Engineering Standard (LES)",
    categoria: "Padrão de engenharia · Open source",
    focoPerfil: "ambos",
    destaque: true,
    resumo:
      "Padrão versionado de engenharia e UX para desenvolvimento assistido por IA, distribuído como CLI npm que faz bootstrap do contrato de governança, limites e segurança do projeto.",
    stack: ["TypeScript", "Node.js", "CLI npm", "Governança", "Vitest", "Git Hooks"],
    links: [
      { rotulo: "GitHub", href: links.les.github },
      { rotulo: "npm", href: links.les.npm },
    ],
    detalhe: {
      contexto:
        "A proliferação de ferramentas de IA e promessas de low-code gera código desordenado e dependência de ferramentas frágeis sem contratos claros de arquitetura e segurança.",
      problema:
        "Projetos desenvolvidos sem método acumulam dívida técnica rápida, arquivos gigantes e falta de testes determinísticos.",
      participacao:
        "Autor e mantenedor. Desenvolvi a especificação normativa v2.2.0, a CLI npm `@lecinolucas/les` e os templates de fundação de frontend e backend.",
      solucao:
        "Suíte de governança que impõe contratos estritos (AGENTS.md, CLAUDE.md), limite saudável de código (< 300 linhas), segurança deny-by-default e checagens automáticas de conformidade.",
      arquitetura:
        "CLI em Node.js/TypeScript sem dependências de runtime → analisadores de código estático → geradores de contratos e templates reutilizáveis.",
      desafios: [
        "Equilibrar disciplina de engenharia com velocidade de desenvolvimento.",
        "Garantir que tanto humanos quanto modelos de IA sigam as mesmas invariantes arquiteturais.",
      ],
      resultado:
        "Padronização e previsibilidade em todos os projetos, com auditorias instantâneas de conformidade.",
      seguranca:
        "Regra mandatória de segredos zero, validação deny-by-default e checagem automatizada de vulnerabilidades.",
    },
  },
  {
    slug: "portal-rh",
    titulo: "Portal de RH",
    categoria: "IA aplicada · Recrutamento",
    focoPerfil: "fullstack",
    destaque: false,
    resumo:
      "Sistema de recrutamento e seleção com gestão de vagas, pipeline Kanban, análise de aderência e apoio de IA aos fluxos de RH.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
    links: [
      { rotulo: "Ver código no GitHub", href: links.portalRh.github },
      { rotulo: "Abrir demonstração interativa", href: "/projetos/portal-rh/demo" },
    ],
    detalhe: {
      contexto:
        "Ambiente de atração e seleção que demandava organização estruturada de vagas e acompanhamento visual dos candidatos por estágios em Kanban.",
      problema:
        "Dificuldade em acompanhar o avanço dos candidatos entre múltiplas etapas seletivas e falta de critérios consistentes de avaliação.",
      participacao:
        "Projeto full stack conectando frontend React/TypeScript, backend FastAPI e pipeline Kanban com testes automatizados.",
      solucao:
        "Aplicação completa com pipeline visual Kanban, movimentação de candidatos e análise de aderência por competências.",
      arquitetura:
        "Frontend SPA React 18 com TypeScript e Tailwind CSS → APIs REST em Python com FastAPI → pipeline Kanban.",
      desafios: [
        "Implementar pipeline Kanban interativo com múltiplos estágios e transições consistentes.",
      ],
      resultado:
        "Gestão de vagas e candidatos unificada em uma interface moderna com pipeline visual em Kanban.",
      seguranca: "Validação estrita de esquemas em APIs REST e isolamento de informações sensíveis.",
    },
  },
];

export const projetosDestaque = projetos.filter((p) => p.destaque);

export function projetoPorSlug(slug: string): Projeto | undefined {
  return (
    projetos.find((p) => p.slug === slug) ||
    (slug === "conciliacao-bancaria-itau" ? projetos.find((p) => p.slug === "banking-protheus") : undefined)
  );
}
