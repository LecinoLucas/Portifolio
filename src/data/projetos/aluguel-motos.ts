import type { Projeto } from "@/types";

/**
 * Fonte: repositório Projetos-LL/AluguelMotos (branch dev, público), lido em 2026-10.
 * Só entra o que o código comprova. Não há informação de uso em produção.
 */
export const aluguelMotos: Projeto = {
  slug: "aluguel-motos",
  titulo: "Aluguel de Motos",
  categoria: "Sistema de gestão · Locação de motos",
  situacao: "construcao",
  situacaoDetalhe: "Em desenvolvimento. Código aberto no GitHub.",
  demo: "aluguel",
  resumo:
    "Sistema de gestão de uma locadora de motos: cadastros, contratos com geração do documento, manutenções, pagamentos e multas, com painel da frota.",
  stack: ["TypeScript", "Node.js", "Express", "tRPC", "Drizzle ORM", "PostgreSQL", "React", "Tailwind CSS", "Radix UI", "AWS S3"],
  links: [{ rotulo: "Código no GitHub", href: "https://github.com/Projetos-LL/AluguelMotos" }],
  detalhe: {
    contexto:
      "Uma locadora de motos precisa controlar a frota, os contratos, os pagamentos, as manutenções e as multas, que costumam ficar espalhados em planilhas e papéis.",
    problema:
      "Saber, em um só lugar, quais motos estão alugadas, o que está pendente de pagamento, o que está em manutenção e quais multas precisam ser repassadas.",
    participacao: "Desenvolvimento do sistema, do backend ao frontend.",
    solucao:
      "Cadastros de motos, locatários e locadores, contratos de locação com geração do documento a partir de um retrato dos dados das partes, controle de manutenções com peças e tipos de serviço, pagamentos, multas e um painel com a situação da frota.",
    arquitetura:
      "Monorepo com backend e frontend. O backend é Node.js com Express e tRPC, com tipos compartilhados com o frontend, e Drizzle ORM sobre PostgreSQL, organizado em módulos (clientes, contratos, dashboard, documentos, locadores, manutenções, motos, multas, pagamentos e peças). Os documentos usam armazenamento S3. O frontend é uma SPA em React com Vite, Tailwind, Radix UI, TanStack Query e Wouter.",
    decisoes: [
      "tRPC para compartilhar os tipos entre backend e frontend, sem manter contratos de API à mão.",
      "O contrato guarda um retrato (snapshot) dos dados do locador e do locatário no momento da geração, para o documento não mudar se o cadastro mudar depois.",
      "Backend organizado em módulos por domínio, com validações centralizadas e testadas.",
    ],
    desafios: [
      "Gerar o contrato com os dados corretos das partes, mesmo que o cadastro seja alterado depois.",
      "Controlar a situação de cada moto (alugada, disponível ou em manutenção) de forma consistente com os contratos.",
    ],
    resultado:
      "Sistema em desenvolvimento, com os módulos principais implementados e o código aberto no GitHub.",
  },
};
