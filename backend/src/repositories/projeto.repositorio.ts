import type { IProjetoRepositorio } from "./projeto.repositorio.interface.js";
import type { ProjetoEntidade } from "../models/entidades.js";
import type { FiltroProjetos } from "../validators/projeto.validator.js";

export const PROJETOS_INICIAIS: ProjetoEntidade[] = [
  {
    id: "proj-portal-engenharia",
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
        "A área de engenharia e obras acompanhava obras, chamados, fornecedores e cotações em planilhas e e-mail, sem visão consolidada, sem controle de acesso e sem histórico confiável para tomada de decisão.",
      problema:
        "Informação fragmentada e difícil de auditar, ausência de controle claro de permissões (quem pode ver, aprovar ou lançar cotações) e falta de indicadores em tempo real para o acompanhamento dos projetos.",
      participacao:
        "Participei do desenvolvimento full stack: levantamento de regras de negócio com usuários-chave, modelagem relacional no PostgreSQL com Prisma, criação de APIs REST em Node.js, desenvolvimento da interface em React + TypeScript, implementação de autenticação com RBAC e trilha de auditoria para todas as operações críticas.",
      solucao:
        "Aplicação web corporativa completa para gerir obras, abrir e acompanhar chamados, cadastrar fornecedores homologados, conduzir cotações concorrenciais, anexar relatórios técnicos e acompanhar dashboards analíticos com métricas consolidadas.",
      arquitetura:
        "Backend Node.js modular estruturado em camadas de serviço e repositório com Prisma sobre PostgreSQL → APIs REST documentadas → frontend React responsivo com dashboards. Autorização por papéis centralizada no backend com deny-by-default e registro cronológico de auditoria.",
      desafios: [
        "Modelar obras, cotações e fornecedores com flexibilidade sem comprometer a integridade referencial.",
        "Implementar controle de acesso RBAC estrito aplicado em cada endpoint do backend.",
        "Otimizar consultas e agregações para dashboards e relatórios para atender a cerca de 500 usuários sem sobrecarregar o banco.",
      ],
      resultado:
        "Centralização de todo o fluxo operacional de obras e suprimentos em uma plataforma unificada, trazendo rastreabilidade completa nas cotações e redução drástica no tempo de resposta a chamados da operação.",
      seguranca:
        "Controle de acesso granular (RBAC) com deny-by-default, autenticação segura, proteção contra injeção SQL via Prisma e registro de log de auditoria para todas as mutações financeiras e de fornecedores.",
      usuariosOuEscala: "Utilizado por cerca de 500 usuários corporativos em produção.",
    },
    links: [
      {
        rotulo: "Sobre a arquitetura",
        href: "#sobre",
      },
    ],
    criadoEm: new Date("2026-01-15T00:00:00.000Z"),
    atualizadoEm: new Date("2026-08-20T00:00:00.000Z"),
  },
  {
    id: "proj-banking-protheus",
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
        "A operação financeira necessitava conciliar um grande volume diário de movimentações bancárias do Itaú (contas correntes, extratos, recebimentos e pagamentos) com os registros do ERP e sistemas internos. A conferência manual em planilhas era suscetível a divergências e consumia horas diárias da equipe.",
      problema:
        "Processo manual, lento e sujeito a falhas humanas, sem trilha clara de divergências. As APIs corporativas do Itaú exigem autenticação rigorosa com OAuth2 client_credentials sobre canal criptografado mTLS (mutual TLS) com certificados digitais.",
      participacao:
        "Atuei da concepção à entrega: análise de processos de negócio financeiro, modelagem de dados no PostgreSQL, implementação da autenticação mTLS e OAuth2 com renovação de tokens, criação de adapters para os endpoints do Itaú, regras de conciliação de lançamentos e desenvolvimento do painel de controle em React + TypeScript.",
      solucao:
        "Serviço em Node.js que estabelece conexão segura mTLS, autentica no Itaú, consome extratos e lançamentos de forma idempotente, normaliza dados bancários e processa o batimento com as transações internas, gerando alertas visuais sobre inconsistências.",
      arquitetura:
        "Autenticação OAuth2 client_credentials sobre canal mTLS → adaptadores específicos por endpoint da API do Itaú → fila/processamento de normalização de dados e conciliação → PostgreSQL como base consolidada → APIs internas protegidas → interface React para acompanhamento das conciliações.",
      desafios: [
        "Gestão segura de certificados digitais e credenciais bancárias e renovação automática sem interrupção de serviço.",
        "Garantia de idempotência para suportar reprocessamento de extratos sem duplicidade de lançamentos.",
        "Tratamento de formatos distintos e inconsistências de status entre o extrato bancário e os lançamentos do sistema interno.",
      ],
      resultado:
        "Automação completa da rotina de conciliação, permitindo que a equipe financeira atue exclusivamente no tratamento de exceções e divergências pontuais, com total conformidade e trilha de auditoria dos acessos.",
      seguranca:
        "Canal criptografado de ponta a ponta com certificados mTLS, rotação segura de credenciais, logs de auditoria sem exposição de chaves privadas ou dados bancários sensíveis.",
      usuariosOuEscala: "Processamento automatizado de operações financeiras recorrentes.",
    },
    links: [
      {
        rotulo: "Ver perfil de Analista",
        href: "#analista-protheus",
      },
    ],
    criadoEm: new Date("2026-03-10T00:00:00.000Z"),
    atualizadoEm: new Date("2026-08-25T00:00:00.000Z"),
  },
  {
    id: "proj-portal-rh",
    slug: "portal-rh",
    titulo: "Portal de RH",
    categoria: "IA aplicada · Recrutamento",
    focoPerfil: "fullstack",
    destaque: true,
    resumo:
      "Plataforma de apoio ao recrutamento que usa IA para ler, classificar e triar currículos, reduzindo o trabalho manual da etapa inicial com integração aos fluxos corporativos.",
    stack: ["Python", "IA / LLMs", "React", "PostgreSQL", "APIs REST"],
    detalhe: {
      contexto:
        "A triagem inicial de currículos para posições corporativas consumia dezenas de horas semanais da equipe de Recursos Humanos, com análise manual de documentos em múltiplos formatos heterogêneos.",
      problema:
        "Volume expressivo de currículos, critérios de avaliação subjetivos entre avaliadores e falta de rastreabilidade do motivo pelo qual cada candidato foi aprovado ou reprovado na etapa de triagem.",
      participacao:
        "Desenvolvi o pipeline de ingestão e estruturação de dados de currículos e a camada de classificação assistida por IA, além de conectar a API ao fluxo do processo seletivo da empresa.",
      solucao:
        "Microsserviço que realiza a extração do texto dos arquivos de currículos (PDF/DOCX), normaliza os dados de formação e histórico profissional e emprega modelos de linguagem para pontuar a aderência às competências exigidas na vaga com justificativa explicável.",
      arquitetura:
        "Ingestão e parsing de documentos → pipeline de extração e estruturação → serviço de IA para classificação semântica e scoring → persistência em PostgreSQL → interface web de triagem em React.",
      desafios: [
        "Lidar com a variabilidade de layout e qualidade dos documentos enviados pelos candidatos.",
        "Garantir explicações auditáveis para cada pontuação gerada pelo modelo de IA.",
        "Manter latência baixa e controle rigoroso de custos no consumo das APIs dos modelos.",
      ],
      resultado:
        "Redução substancial do tempo necessário para a montagem de listas de candidatos qualificados (shortlist), conferindo padronização e objetividade aos critérios de triagem.",
      seguranca:
        "Tratamento de dados pessoais em conformidade com as diretrizes da LGPD, anonimização prévia antes de processamento por modelos e controle de acesso aos currículos.",
    },
    links: [
      {
        rotulo: "Ver perfil Full Stack",
        href: "#fullstack",
      },
    ],
    criadoEm: new Date("2026-04-05T00:00:00.000Z"),
    atualizadoEm: new Date("2026-08-15T00:00:00.000Z"),
  },
  {
    id: "proj-les-standard",
    slug: "les",
    titulo: "Lecino Lucas Engineering Standard (LES)",
    categoria: "Padrão de Engenharia & Ferramentas",
    focoPerfil: "ambos",
    destaque: true,
    resumo:
      "Padrão de engenharia e UX versionado e executável para governança, segurança deny-by-default, testes e arquitetura evolutiva em projetos assistidos por IA.",
    stack: ["TypeScript", "Node.js", "CLI", "Vitest", "Git Hooks", "GitHub Actions"],
    detalhe: {
      contexto:
        "Em projetos assistidos por IA e equipes ágeis, a ausência de um padrão contratual explícito gera retrabalho, inconsistência de arquitetura e código inflado com complexidade prematura.",
      problema:
        "Desenvolvedores e agentes de IA frequentemente inventam bibliotecas, extrapolam o tamanho de arquivos, quebram convenções de commits ou introduzem microsserviços e mensageria sem necessidade real.",
      participacao:
        "Concebi, formalizei e implementei o padrão completo: especificação normativa v2.2.0, CLI para auditoria e verificação automatizada, templates executáveis para frontend e backend e esteira de CI/CD.",
      solucao:
        "Uma suíte completa de contratos, regras e ferramentas CLI (les init, les check, les audit) que impõem limites saudáveis de código (< 300 linhas), segurança deny-by-default, os 9 estados de interface e padrões de governança.",
      arquitetura:
        "CLI em TypeScript compilado para distribuição via npm → módulos analisadores estáticos de código → geradores de contratos (AGENTS.md, CLAUDE.md, ADRs) → templates reutilizáveis validados.",
      desafios: [
        "Criar regras que funcionem tanto para desenvolvedores humanos quanto para modelos de inteligência artificial.",
        "Equilibrar rigor técnico com velocidade de entrega para evitar fricção desnecessária.",
      ],
      resultado:
        "Padronização efetiva e previsibilidade em todos os projetos, com auditorias instantâneas de conformidade que garantem qualidade antes de qualquer merge em produção.",
      seguranca:
        "Regra mandatória de segredos zero em repositórios, validação deny-by-default e checagem de vulnerabilidades automatizada.",
    },
    links: [
      {
        rotulo: "Padrão no GitHub",
        href: "https://github.com/LecinoLucas/LecinoLucas-engineering-standard",
      },
      {
        rotulo: "Pacote no npm",
        href: "https://www.npmjs.com/package/@lecinolucas/les",
      },
    ],
    criadoEm: new Date("2026-05-01T00:00:00.000Z"),
    atualizadoEm: new Date("2026-09-12T00:00:00.000Z"),
  },
];

export class ProjetoRepositorioMemoria implements IProjetoRepositorio {
  private projetos: ProjetoEntidade[] = [...PROJETOS_INICIAIS];

  async listar(filtros?: FiltroProjetos): Promise<ProjetoEntidade[]> {
    let resultado = [...this.projetos];

    if (filtros?.focoPerfil && filtros.focoPerfil !== "ambos") {
      resultado = resultado.filter(
        (p) => p.focoPerfil === filtros.focoPerfil || p.focoPerfil === "ambos",
      );
    }

    if (filtros?.busca) {
      const termo = filtros.busca.toLowerCase();
      resultado = resultado.filter(
        (p) =>
          p.titulo.toLowerCase().includes(termo) ||
          p.resumo.toLowerCase().includes(termo) ||
          p.stack.some((s: string) => s.toLowerCase().includes(termo)),
      );
    }

    return resultado;
  }

  async buscarPorSlug(slug: string): Promise<ProjetoEntidade | null> {
    const projeto = this.projetos.find((p) => p.slug === slug);
    return projeto || null;
  }

  async salvarEmLote(novos: ProjetoEntidade[]): Promise<void> {
    this.projetos = [...novos];
  }
}
