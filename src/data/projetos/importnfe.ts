import type { Projeto } from "@/types";

export const importnfe: Projeto = {
  slug: "importnfe",
  titulo: "ImportNFe",
  categoria: "Processamento fiscal · XML NF-e · Freelance",
  freelance: true,
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
    decisoes: [
      "Ordem de prioridade definida entre o alias da empresa, o alias global e o normalizador automático.",
      "Templates de Excel configuráveis, para ajustar a saída sem alterar código.",
      "Bundle portátil de templates, usuários e logos, para levar o sistema a outro servidor.",
    ],
    desafios: [
      "Tratar variações do layout do XML da NF-e e campos opcionais.",
      "Definir a ordem de prioridade entre alias da empresa, alias global e normalizador automático.",
      "Templates de Excel configuráveis sem exigir alteração de código a cada ajuste.",
      "Levar templates, usuários e logos para outro servidor com um bundle portátil.",
    ],
    resultado:
      "A importação de NF-e e a geração de planilhas passaram a ser feitas pela ferramenta, com descrições padronizadas e saída por template. O sistema está em produção, rodando localmente, e foi vendido a uma distribuidora.",
  },
};
