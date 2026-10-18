import type { Projeto } from "@/types";

/**
 * Fonte: código da branch `dev` do repositório PortalFiscal e informações do autor.
 * A situação (pronto, sem uso em produção) é informada pelo autor.
 */
export const portalFiscal: Projeto = {
  slug: "portal-fiscal",
  titulo: "Portal Fiscal",
  categoria: "Auditoria fiscal · SEFAZ e Protheus",
  destaque: true,
  situacao: "construido",
  situacaoDetalhe: "Pronto, ainda sem uso em produção.",
  demo: "fiscal",
  resumo:
    "Plataforma multiempresa de auditoria fiscal: recebe XMLs (upload e Distribuição DF-e da SEFAZ), confronta com os lançamentos do Protheus e conduz a conferência até a decisão do analista.",
  stack: [
    "TypeScript",
    "NestJS",
    "Fastify",
    "Prisma",
    "PostgreSQL",
    "RabbitMQ",
    "MinIO / S3",
    "Redis",
    "React",
    "TanStack Query",
    "Tailwind CSS",
    "Zod",
    "Nx",
    "pnpm",
    "Docker",
    "SEFAZ",
    "Protheus",
  ],
  detalhe: {
    contexto:
      "As notas fiscais de uma rede com várias filiais precisam ser obtidas da SEFAZ e conferidas contra o que foi lançado no ERP.",
    problema:
      "Conferência fiscal manual, filial por filial, sem uma fila de trabalho, sem trilha de decisão e com divergências difíceis de rastrear.",
    participacao: "Desenvolvimento do sistema, do backend ao frontend, incluindo a busca de notas na SEFAZ.",
    solucao:
      "Recebimento de XMLs por upload ou pela Distribuição DF-e da SEFAZ (com certificado digital por filial), importação das planilhas de lançamentos do Protheus (SFT), confronto determinístico entre XML e lançamento, fila de trabalho para o analista e decisão auditável. Inclui catálogo de produtos com análise de NCM, regularidade fiscal (certidões e alertas), obrigações acessórias, controle de combustíveis e atividades do time fiscal.",
    arquitetura:
      "Monorepo Nx com pnpm, organizado em backend (API NestJS com Fastify e onze workers e agendadores), frontend (React com Vite) e contratos compartilhados com Zod. O banco é PostgreSQL com Prisma, isolamento multiempresa por tenant, Grupo e Filial e RLS (Row Level Security). A publicação assíncrona usa Transactional Outbox e RabbitMQ, os arquivos ficam em MinIO/S3 e a auditoria é append-only. O backend segue módulos com camadas de domínio, aplicação, infraestrutura e apresentação, e as fronteiras são verificadas por regras do Nx.",
    decisoes: [
      "O XML autorizado é a evidência fiscal; planilhas e lançamentos são referência operacional.",
      "Regras fiscais determinísticas, parametrizáveis e auditáveis. A IA não é a fonte da verdade tributária.",
      "Isolamento por tenant, Grupo e Filial com RLS no banco, com o backend como autoridade de acesso.",
      "Transactional Outbox para publicar eventos sem perder consistência, com workers idempotentes.",
      "Treze decisões de arquitetura (ADRs) registradas, como monolito modular, auditoria transacional e unicidade da chave de acesso.",
    ],
    desafios: [
      "Consultar a SEFAZ pela Distribuição DF-e, respeitando o ultNSU e a janela de consumo, e não por busca livre de nota.",
      "Isolar dados entre empresas, grupos e filiais sem depender só da aplicação.",
      "Processar XMLs e planilhas em volume, de forma assíncrona e idempotente.",
      "Manter a trilha de auditoria e as decisões de conferência imutáveis.",
    ],
    resultado: "Sistema pronto, ainda sem uso em produção.",
  },
};
