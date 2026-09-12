import type { Projeto } from "@/types";
import { links } from "@/data/links";

/**
 * Projetos reais. Descrições baseadas no escopo efetivamente trabalhado.
 * Sem métricas ou resultados numéricos não comprovados.
 */
export const projetos: Projeto[] = [
  {
    slug: "portal-engenharia",
    titulo: "Portal de Engenharia",
    categoria: "Sistema corporativo · Engenharia & Obras",
    focoPerfil: "fullstack",
    destaque: true,
    resumo:
      "Aplicação corporativa em produção para gestão de obras, chamados, fornecedores, cotações, documentos e dashboards — com autenticação, RBAC e auditoria utilizada por cerca de 500 usuários.",
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
        "Otimizar consultas e agregações para dashboards e relatórios para atender a cerca de 500 usuários sem sobrecarregar o banco.",
      ],
      resultado:
        "Obras, chamados, fornecedores e cotações passaram a viver num único sistema em produção, com acesso controlado por papéis, histórico auditável e dashboards de acompanhamento.",
      seguranca:
        "Controle de acesso granular (RBAC) com deny-by-default, autenticação segura, proteção contra injeção SQL via Prisma e registro de log de auditoria para todas as mutações financeiras e de fornecedores.",
      usuariosOuEscala: "Utilizado por cerca de 500 usuários corporativos em produção.",
    },
  },
  {
    slug: "conciliacao-bancaria-itau",
    titulo: "BankingProtheus — Conciliação Bancária Itaú",
    categoria: "Integração bancária · BankingProtheus",
    focoPerfil: "analista",
    destaque: true,
    resumo:
      "Integração bancária com as APIs do Itaú (OAuth2 Client Credentials + mTLS) que automatiza a conciliação de contas, extratos, recebimentos e pagamentos contra os registros internos e ERP, com controle de acesso e rastreabilidade.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "SQL",
      "APIs Itaú",
      "OAuth2",
      "mTLS",
      "TOTVS Protheus",
    ],
    detalhe: {
      contexto:
        "A operação financeira precisava conciliar as movimentações bancárias do Itaú (contas, extratos, recebimentos e pagamentos) com os registros internos e ERP, num volume que tornava a conferência manual inviável e pouco rastreável.",
      problema:
        "Processo manual, lento e sujeito a erro, sem trilha clara de divergências. O acesso às APIs do Itaú exige autenticação OAuth2 (client_credentials) sobre canal mTLS, com certificados e credenciais que precisam ser guardados com segurança e renovados sem interromper a operação.",
      participacao:
        "Atuei do levantamento à entrega: modelei os dados no PostgreSQL, implementei a autenticação OAuth2 client_credentials com mTLS, os adapters das APIs do Itaú, as regras de conciliação, o painel em React + TypeScript e o controle de permissões de acesso.",
      solucao:
        "Serviço em Node.js que autentica via OAuth2 client_credentials sobre mTLS, coleta contas, extratos, recebimentos e pagamentos, normaliza os lançamentos e concilia contra os registros internos. Gestão de certificados e credenciais com rastreabilidade dos acessos. Painel em React + TypeScript para status, divergências e histórico, com acesso controlado por permissões.",
      arquitetura:
        "Autenticação OAuth2 client_credentials + mTLS → adapters por endpoint do Itaú → serviço de normalização e regras de conciliação → PostgreSQL como fonte de verdade dos lançamentos → API interna com permissões → frontend React. Trilha de auditoria dos acessos e das renovações de credenciais.",
      desafios: [
        "Autenticação bancária com OAuth2 client_credentials sobre mTLS: gestão segura de certificados e credenciais e sua renovação.",
        "Conciliar formatos e estados distintos de extratos, recebimentos e pagamentos.",
        "Idempotência no processamento para reprocessar períodos sem duplicar lançamentos.",
        "Rastreabilidade: registrar quem acessou o quê e o que a integração executou.",
      ],
      resultado:
        "A conciliação passou de tarefa manual recorrente para um fluxo automatizado, com divergências visíveis em painel, acesso controlado por permissões e trilha de auditoria dos acessos e das credenciais.",
      seguranca:
        "Canal criptografado de ponta a ponta com certificados mTLS, rotação segura de credenciais, logs de auditoria sem exposição de chaves privadas ou dados bancários sensíveis.",
      usuariosOuEscala: "Processamento automatizado de conciliação financeira recorrente.",
    },
  },
  {
    slug: "portal-rh",
    titulo: "Portal de RH",
    categoria: "IA aplicada · Recrutamento",
    focoPerfil: "fullstack",
    destaque: true,
    resumo:
      "Sistema de recrutamento e seleção com gestão de vagas, pipeline Kanban, análise de aderência e apoio de IA aos fluxos de RH.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Vitest",
      "Playwright",
      "APIs REST",
    ],
    links: [
      { rotulo: "Ver código no GitHub", href: links.portalRh.github },
      { rotulo: "Abrir demonstração interativa", href: "/projetos/portal-rh/demo" },
    ],
    detalhe: {
      contexto:
        "Ambiente de atração e seleção que demandava organização estruturada de vagas, acompanhamento visual dos candidatos por estágios em Kanban e critérios consistentes de avaliação.",
      problema:
        "Dificuldade em acompanhar o avanço dos candidatos entre múltiplas etapas seletivas, falta de visibilidade centralizada por vaga e triagem heterogênea sem rastreabilidade de critérios.",
      participacao:
        "Projeto desenvolvido para demonstrar arquitetura de sistemas, automação de processos de RH e integração entre frontend, backend e análise de dados.",
      solucao:
        "Aplicação completa com frontend React e TypeScript, estilização em Tailwind CSS, backend FastAPI em Python com APIs REST documentadas, gestão de vagas estruturadas, pipeline Kanban com movimentação de candidatos e análise de aderência por competências.",
      arquitetura:
        "Frontend SPA React 18 com TypeScript, React Router e Tailwind CSS → APIs REST em Python com FastAPI → pipeline Kanban com estados de transição de candidatos e testes automatizados com Vitest e Playwright.",
      desafios: [
        "Implementar pipeline Kanban interativo com múltiplos estágios e transições consistentes de candidatos.",
        "Estruturar modelagem de vagas com critérios essenciais, diferenciais e eliminatórios.",
        "Garantir cobertura com testes automatizados unitários e de ponta a ponta (Vitest e Playwright).",
      ],
      resultado:
        "Gestão de vagas e candidatos unificada em uma interface moderna com pipeline visual em Kanban, triagem por competências e validação por testes automatizados.",
      seguranca:
        "Proteção de dados dos candidatos com controle de acesso por perfis, validação estrita de esquemas em APIs REST e isolamento de informações sensíveis.",
      usuariosOuEscala:
        "Demonstração arquitetural full stack com pipeline Kanban e testes automatizados.",
    },
  },
  {
    slug: "les",
    titulo: "Lecino Lucas Engineering Standard (LES)",
    categoria: "Padrão de engenharia · Open source",
    focoPerfil: "ambos",
    destaque: true,
    resumo:
      "Padrão versionado de engenharia e UX para desenvolvimento assistido por IA, distribuído como CLI npm que faz bootstrap do contrato do projeto.",
    stack: ["TypeScript", "Node.js", "CLI npm", "Governança"],
    links: [
      { rotulo: "GitHub", href: links.les.github },
      { rotulo: "npm", href: links.les.npm },
    ],
    detalhe: {
      contexto:
        "Cada novo projeto recomeçava as mesmas discussões: arquitetura, segurança, padrões de frontend, governança e Definition of Done. Com desenvolvimento assistido por IA, essa falta de contrato explícito gera resultados inconsistentes.",
      problema:
        "Decisões de engenharia repetidas do zero a cada projeto, sem uma fonte de verdade que agentes de IA e pessoas pudessem seguir da mesma forma.",
      participacao:
        "Autor e mantenedor. Defini o padrão, escrevi a documentação normativa e desenvolvi a CLI que o aplica.",
      solucao:
        "Um padrão versionado (AGENTS.md como contrato normativo, CLAUDE.md como ponto de entrada para agentes, docs de arquitetura e manifesto de metadados) somado a uma CLI npm — `@lecinolucas/les` — com `init` para bootstrap, `check` como quality gate determinístico e `audit` para conformidade arquitetural. Cobre arquitetura (Modular Monolith first), frontend foundation, segurança deny-by-default, testes, observabilidade e governança por ADRs, com suporte a diferentes stacks.",
      arquitetura:
        "CLI em Node.js/TypeScript sem dependências de runtime → detecção de cenário e stack → geração dos arquivos de governança → checks determinísticos e auditoria. O projeto passa a seguir suas próprias regras locais versionadas.",
      desafios: [
        "Ser prescritivo o suficiente para orientar um agente de IA, sem virar burocracia que trava o desenvolvimento.",
        "Checks determinísticos que agreguem valor sem emitir notas especulativas.",
        "Suportar stacks diferentes mantendo um núcleo de princípios estável e versionado.",
      ],
      resultado:
        "Este portfólio também utiliza o LES como contrato de engenharia e UX: foi inicializado e é governado pelo padrão (`les init`, `les check`, `les audit`), servindo como aplicação real dele.",
      seguranca:
        "Regra mandatória de segredos zero em repositórios, validação deny-by-default e checagem de vulnerabilidades automatizada.",
    },
  },
];

export const projetosDestaque = projetos.filter((p) => p.destaque);

export function projetoPorSlug(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
