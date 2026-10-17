import type { Projeto } from "@/types";

export const portalEngenharia: Projeto = {
  slug: "portal-engenharia",
  titulo: "Portal de Engenharia",
  categoria: "Sistema corporativo · Engenharia & Obras",
  destaque: true,
  principal: true,
  situacao: "producao",
  situacaoDetalhe: "Em produção na Rede Marajó.",
  demo: "portal",
  resumo:
    "Tudo o que passa pela engenharia passa por ele: obras, chamados, fornecedores, cotações, documentos e dashboards, com controle de acesso e auditoria.",
  numeros: [{ valor: "500+", rotulo: "usuários em produção" }],
  stack: ["Node.js", "React", "TypeScript", "PostgreSQL", "Prisma", "APIs REST"],
  testes: [
    { nome: "Vitest", para: "Testes unitários das regras de negócio." },
    { nome: "Playwright", para: "Testes de ponta a ponta dos fluxos, no navegador." },
    { nome: "k6", para: "Testes de carga: o comportamento com muitos usuários." },
    { nome: "Stryker", para: "Testes de mutação: verificam se os testes realmente pegam erros." },
  ],
  detalhe: {
    contexto:
      "Na Rede Marajó, tudo o que passa pela engenharia precisa de um lugar só: obras, chamados, fornecedores, cotações e documentos.",
    problema:
      "Reunir num único sistema o que a engenharia usa no dia a dia, com acesso controlado por papéis e histórico auditável.",
    participacao:
      "Projeto meu, do levantamento de requisitos à entrega: modelagem de dados, backend, frontend, testes, sustentação e evolução.",
    solucao:
      "Módulos de EAP, medições, cotações, fornecedores, documentos, chamados, checklist, dashboards e relatórios, com autenticação, controle de acesso por papéis (RBAC), auditoria, armazenamento de arquivos, integrações e recursos de IA.",
    arquitetura:
      "Node.js no backend, React com TypeScript no frontend, PostgreSQL com Prisma, expostos por APIs REST.",
    decisoes: [
      "Um único sistema para obras, chamados, fornecedores, cotações e documentos, em vez de ferramentas separadas.",
      "Controle de acesso por papéis (RBAC) e histórico auditável das ações.",
      "Qualidade em camadas: Vitest nas regras de negócio, Playwright nos fluxos, k6 na carga e Stryker na mutação.",
    ],
    desafios: [
      "Atender mais de 500 usuários em produção.",
      "Controle de acesso por papéis e auditoria das ações.",
      "Qualidade provada por testes em várias camadas: unidade, ponta a ponta, carga e mutação.",
    ],
    resultado: "Em produção real na Rede Marajó, usado por mais de 500 usuários.",
  },
};
