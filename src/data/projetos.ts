import type { Projeto } from "@/types";
import { links } from "@/data/links";

/**
 * Projetos reais. Descrições baseadas no escopo efetivamente trabalhado.
 * Sem métricas ou resultados numéricos não comprovados — os campos
 * `resultado` são qualitativos de propósito.
 */
export const projetos: Projeto[] = [
  {
    slug: "bankingprotheus",
    titulo: "BankingProtheus",
    categoria: "Integração bancária · Certificados Itaú",
    destaque: true,
    situacao: "construido",
    resumo:
      "Sistema que renova automaticamente os certificados do Itaú (API de extrato e API de boletos) de uma rede de 53 filiais, com job de renovação e painel de vencimento, sobre mTLS.",
    stack: ["APIs bancárias", "mTLS", "Certificados digitais", "SQL", "Protheus", "Jobs agendados", "Dashboard"],
    detalhe: {
      contexto:
        "Uma rede de 53 filiais, cada uma com certificados digitais para as APIs do Itaú de extrato e de boletos. Os certificados vencem, e vários vencem em épocas próximas.",
      problema:
        "Renovar os certificados das 53 filiais um por um, de forma manual, chamando a API do banco a cada vez. Um certificado vencido interrompe a integração com o banco daquela filial.",
      participacao:
        "Criei o sistema: o job de renovação automática e o painel de acompanhamento dos certificados.",
      solucao:
        "Um job agendado identifica os certificados próximos do vencimento e os renova automaticamente pela API do Itaú, tanto na API de extrato quanto na de boletos. Um painel mostra quantos dias faltam para cada certificado vencer. A comunicação com o banco usa mTLS.",
      arquitetura:
        "Job agendado que identifica certificados próximos do vencimento → renovação via API do Itaú sobre mTLS → painel de acompanhamento dos dias para vencer, por filial.",
      desafios: [
        "Renovar os certificados das 53 filiais sem intervenção manual.",
        "Comunicação segura com o banco usando mTLS.",
        "Visibilidade: saber quantos dias faltam para cada certificado vencer antes que ele expire.",
      ],
      resultado:
        "O sistema substitui a renovação manual, certificado por certificado, por um processo automático, com um painel para acompanhar os vencimentos.",
    },
  },
  {
    slug: "portal-rh",
    titulo: "Portal de RH",
    categoria: "ATS com IA · Recrutamento e admissão",
    destaque: true,
    situacao: "entregue",
    situacaoDetalhe: "Sistema entregue.",
    demo: "rh",
    resumo:
      "Sistema de recrutamento e admissão: vagas, pipeline de candidatos, análise assistida por IA, pré-admissão com checklist documental e integração com o TOTVS Protheus.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "IA / LLMs", "Protheus"],
    detalhe: {
      contexto:
        "O processo de recrutamento e admissão passava por várias etapas e ferramentas: triagem de currículos, entrevistas, decisão de contratação, coleta de documentos e cadastro no ERP.",
      problema:
        "Triagem manual e pouco consistente, histórico de etapas difícil de rastrear e retrabalho para levar os dados do candidato contratado até o Protheus.",
      participacao:
        "Desenvolvimento do sistema, com frontend, backend, banco de dados, testes automatizados e a integração com o ERP.",
      solucao:
        "Gestão de vagas e pipeline (entrada, triagem, entrevistas, final, oferta e contratado), análise de candidatos assistida por IA com justificativa por critério, portal do candidato, pré-admissão com checklist documental e regras de aprovação, e envio dos dados ao Protheus com validação do payload, controle de tentativas e chave de idempotência.",
      arquitetura:
        "FastAPI e PostgreSQL com migrations, processamento assíncrono das análises por IA em workers, frontend React + TypeScript. Contrato versionado de payload para o Protheus, com validador, adaptador e registro de cada tentativa de integração (idempotência e correlation ID).",
      desafios: [
        "Manter a etapa do pipeline separada do status da análise por IA, que é controlado só pelo worker.",
        "Evitar análise duplicada e custo repetido com os modelos de linguagem em processamento concorrente.",
        "Proteger dados pessoais de candidatos: portal do candidato sem expor campos internos.",
        "Integrar com o Protheus por contrato validado, com reenvio seguro e rastreável.",
      ],
      resultado:
        "O fluxo de recrutamento e admissão passou a ficar num único sistema, com histórico de etapas, análise assistida por IA e envio ao ERP com validação e rastreabilidade.",
    },
  },
  {
    slug: "portal-engenharia",
    titulo: "Portal de Engenharia",
    categoria: "Sistema corporativo · Engenharia & Obras",
    destaque: true,
    situacao: "producao",
    situacaoDetalhe: "Em produção na Rede Marajó.",
    resumo:
      "Aplicação corporativa em produção para gestão de obras, chamados, fornecedores, cotações, documentos e dashboards — com autenticação, RBAC e auditoria.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "APIs REST"],
    detalhe: {
      contexto:
        "A área de engenharia/obras acompanhava obras, chamados, fornecedores e cotações em planilhas e e-mail, sem visão consolidada, sem controle de acesso e sem histórico confiável.",
      problema:
        "Informação fragmentada e difícil de auditar, sem controle claro de quem pode ver ou fazer o quê e sem indicadores para acompanhar obras e cotações.",
      participacao:
        "Participei do desenvolvimento full stack: levantamento de regras de negócio, modelagem de dados com Prisma, APIs REST em Node.js, frontend em React + TypeScript, autenticação, RBAC e trilha de auditoria.",
      solucao:
        "Aplicação web para gerir obras, abrir e acompanhar chamados, cadastrar fornecedores, conduzir cotações, anexar documentos e acompanhar dashboards e relatórios. Autenticação com autorização baseada em papéis (RBAC), deny-by-default e auditoria das ações.",
      arquitetura:
        "Backend Node.js modular (obras, chamados, fornecedores, cotações) com Prisma sobre PostgreSQL → APIs REST → frontend React com dashboards. Autorização por papéis centralizada no backend; registro de auditoria das operações.",
      desafios: [
        "Modelar obras, cotações e fornecedores de forma flexível sem cair num formulário genérico.",
        "RBAC aplicado de forma consistente no backend, com deny-by-default.",
        "Dashboards e relatórios úteis à gestão sem sobrecarregar o banco.",
      ],
      resultado:
        "Obras, chamados, fornecedores e cotações passaram a viver num único sistema em produção, com acesso controlado por papéis, histórico auditável e dashboards de acompanhamento.",
    },
  },
  {
    slug: "importnfe",
    titulo: "ImportNFe",
    categoria: "Processamento fiscal · XML NF-e",
    situacao: "producao",
    situacaoDetalhe: "Roda em servidor local e foi vendido a uma distribuidora.",
    demo: "importnfe",
    resumo:
      "Importa XML de NF-e, normaliza as descrições dos produtos, permite revisão com aprendizado de aliases e gera planilhas Excel a partir de templates.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "React", "TypeScript", "PostgreSQL"],
    detalhe: {
      contexto:
        "A extração de dados de notas fiscais eletrônicas para planilhas era feita manualmente, abrindo XMLs e copiando informações campo a campo, com descrições de produto em formatos diferentes a cada fornecedor.",
      problema:
        "Trabalho repetitivo e propenso a erro, descrições inconsistentes entre notas e planilhas fora de um padrão único.",
      participacao:
        "Desenvolvimento full stack: API em FastAPI, modelagem com SQLAlchemy e migrations com Alembic, geração de planilhas e frontend em React + TypeScript.",
      solucao:
        "Parsing do XML da NF-e, normalização automática das descrições (remove marcas, expande abreviações, padroniza volumes), grade de revisão editável com aliases por empresa ou globais que passam a ter prioridade nas próximas importações, e geração de Excel por templates configuráveis, com logo por template.",
      arquitetura:
        "FastAPI + SQLAlchemy sobre PostgreSQL, com camadas de rotas, serviços, repositórios e modelos de domínio → parser de XML NF-e → serviço de normalização → exportação para Excel por template → frontend React. Empacotado para rodar em servidor Windows local, com bundle portátil de templates e usuários.",
      desafios: [
        "Tratar variações do layout do XML da NF-e e campos opcionais.",
        "Definir a ordem de prioridade entre alias da empresa, alias global e normalizador automático.",
        "Templates de Excel configuráveis sem exigir alteração de código a cada ajuste.",
        "Levar templates, usuários e logos para outro servidor com um bundle portátil.",
      ],
      resultado:
        "A importação de NF-e e a geração de planilhas passaram a ser feitas pela ferramenta, com descrições padronizadas e saída por template. O sistema está em produção, rodando localmente, e foi vendido a uma distribuidora.",
    },
  },
  {
    slug: "les",
    titulo: "Lecino Lucas Engineering Standard (LES)",
    categoria: "Padrão de engenharia · Open source",
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
    },
  },
];

export const projetosDestaque = projetos.filter((p) => p.destaque);

export function projetoPorSlug(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
