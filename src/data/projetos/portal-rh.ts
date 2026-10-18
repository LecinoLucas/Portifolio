import type { Projeto } from "@/types";

export const portalRh: Projeto = {
  slug: "portal-rh",
  titulo: "Portal de RH",
  categoria: "ATS com IA · Recrutamento e admissão",
  destaque: true,
  situacao: "entregue",
  situacaoDetalhe: "Sistema entregue; ponte com o Protheus em homologação.",
  demo: "rh",
  resumo:
    "Sistema de recrutamento e admissão: vagas, pipeline de candidatos, análise assistida por IA, pré-admissão com checklist documental e ponte de admissão com o TOTVS Protheus, em homologação.",
  stack: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "Alembic",
    "Celery",
    "Redis",
    "PostgreSQL",
    "pgvector",
    "LangGraph",
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Claude e Gemini",
    "Docker",
    "Protheus",
  ],
  detalhe: {
    contexto:
      "O processo de recrutamento e admissão passava por várias etapas e ferramentas: triagem de currículos, entrevistas, decisão de contratação, coleta de documentos e cadastro no ERP.",
    problema:
      "Triagem manual e pouco consistente, histórico de etapas difícil de rastrear e retrabalho para levar os dados do candidato contratado até o Protheus.",
    participacao:
      "Desenvolvimento do sistema, com frontend, backend, banco de dados, testes automatizados e a integração com o ERP.",
    solucao:
      "Gestão de vagas e pipeline (entrada, triagem, entrevistas, final, oferta e contratado), análise de candidatos assistida por IA com justificativa por critério, portal do candidato, pré-admissão com checklist documental e regras de aprovação, e uma ponte de admissão com o Protheus por contrato validado (dry-run, simulação em ADVPL e chave de idempotência), com a execução real em homologação ainda pendente. Integra também com o Google Calendar (criação, edição e cancelamento de eventos).",
    arquitetura:
      "Monorepo com três aplicações: a API em FastAPI (Clean Architecture: domínio, aplicação, infraestrutura e interface), o painel do RH e o portal público do candidato, ambos em React + TypeScript. O banco é PostgreSQL com migrations Alembic. As análises por IA rodam em workers Celery com Redis. A camada de IA usa agentes (supervisor, vagas, candidatos e pipeline) orquestrados com LangGraph e um RAG com pgvector, sobre Claude e Gemini. O contrato versionado de payload para o Protheus tem validador, adaptador e registro de cada tentativa (idempotência e correlation ID). Tudo sobe com Docker Compose.",
    decisoes: [
      "Status da análise por IA controlado só pelo worker, separado da etapa do pipeline.",
      "Chave de idempotência para evitar análise duplicada e custo repetido com os modelos em processamento concorrente.",
      "Integração com o Protheus por contrato versionado, com validador e dry-run, e envio real bloqueado por padrão.",
      "Clean Architecture no backend, para manter regras de negócio e IA separadas de banco, filas e HTTP.",
      "Assistente de IA com RAG que só recupera conteúdo seguro, sem expor dados internos do candidato.",
    ],
    desafios: [
      "Manter a etapa do pipeline separada do status da análise por IA, que é controlado só pelo worker.",
      "Evitar análise duplicada e custo repetido com os modelos de linguagem em processamento concorrente.",
      "Proteger dados pessoais de candidatos: portal do candidato sem expor campos internos.",
      "Integrar com o Protheus por contrato validado, com reenvio seguro e rastreável.",
    ],
    resultado:
      "O fluxo de recrutamento e admissão passou a ficar num único sistema, com histórico de etapas, análise assistida por IA e um contrato de integração com o ERP validado e rastreável. A execução real no Protheus ainda está em homologação.",
  },
};
