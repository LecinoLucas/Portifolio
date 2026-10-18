import type { Projeto } from "@/types";

/**
 * Fonte: repositório Projetos-LL/ERP_LojaColchao (branch dev, privado), lido em 2026-10.
 * Só entra o que o código comprova. A situação (freelance em desenvolvimento) é informada pelo autor;
 * o repositório não indica uso em produção.
 */
export const erpColchoes: Projeto = {
  slug: "erp-loja-colchoes",
  titulo: "ERP da Loja de Colchões",
  categoria: "ERP e CRM com IA · Freelance",
  freelance: true,
  destaque: true,
  situacao: "construcao",
  situacaoDetalhe: "Freelance em desenvolvimento para uma loja de colchões.",
  demo: "erp",
  resumo:
    "ERP e CRM para uma loja de colchões, com atendimento por IA no WhatsApp e no Instagram: caixa de entrada unificada, pipeline comercial, fila de vendedores, estoque e catálogo e painéis de gestão.",
  stack: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "Alembic",
    "PostgreSQL",
    "LangGraph",
    "Gemini",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "WhatsApp",
    "Docker",
  ],
  detalhe: {
    contexto:
      "Freelance para uma loja de colchões que atende clientes pelo WhatsApp e pelo Instagram e precisa organizar o atendimento, o funil de vendas, o catálogo e o estoque num só sistema.",
    problema:
      "Conversas espalhadas em vários números e redes, sem funil de vendas, sem fila de vendedores e sem saber quanto cada atendimento vira venda.",
    participacao:
      "Desenvolvimento do sistema, do backend ao frontend, incluindo a camada de IA, os testes e as auditorias de arquitetura.",
    solucao:
      "Caixa de entrada unificada do WhatsApp (vários números, cada um ligado a um vendedor) e do Instagram, com um assistente de IA que responde dentro de um escopo configurável e passa a conversa a um vendedor quando o cliente está pronto para comprar. Pipeline comercial com negócios em etapas e quadro Kanban, fila e painel de vendedores, tarefas, estoque e catálogo com imagens, e painéis de gestão com custos da IA, motivos de perda e governança do bot.",
    arquitetura:
      "Backend em Python com FastAPI, SQLAlchemy e Alembic sobre PostgreSQL, organizado em serviços, repositórios e rotas, com migrations versionadas. A IA usa agentes (vendas, CRM, conhecimento e supervisor) orquestrados com LangGraph, com Gemini, RAG com busca por embeddings, guardrails e observabilidade. O WhatsApp usa a Evolution API, com tentativas de reenvio e rastreio das mensagens enviadas. O frontend é uma SPA em React com TypeScript, Vite e Tailwind, e o estoque e o Instagram são módulos próprios.",
    decisoes: [
      "Núcleo comercial separado do fluxo antigo de leads: pipeline, etapas e negócios com modelo, API e migration próprios, mantendo o legado como alternativa.",
      "Vários números de WhatsApp, cada um ligado a um vendedor, para distribuir os atendimentos.",
      "IA com agentes especializados e guardrails, com respostas fundamentadas na base de conhecimento e passagem a um humano.",
      "Auditorias por sprint (arquitetura, CRM, runtime do bot), documentadas, antes de avançar para a próxima etapa.",
    ],
    desafios: [
      "Manter a IA dentro do escopo da loja e saber a hora de passar a conversa para um vendedor.",
      "Atender vários números de WhatsApp e o Instagram pelo mesmo fluxo, sem mensagens duplicadas.",
      "Migrar de armazenamento em arquivos JSON para PostgreSQL, com checklist de cutover.",
      "Controlar o custo e a qualidade das respostas da IA, com avaliação e experimentos de prompt.",
    ],
    resultado:
      "Em desenvolvimento, com os módulos de atendimento, pipeline, vendedores e estoque implementados. O backend tem cerca de 315 arquivos de teste e o frontend, 57, além de auditorias documentadas.",
  },
};
