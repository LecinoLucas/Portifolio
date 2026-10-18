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
  stack: [
    "Node.js",
    "Express 5",
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Zod",
    "Docker",
    "GitHub Actions",
  ],
  testes: [
    { nome: "Vitest", para: "Testes unitários das regras de negócio." },
    { nome: "Playwright", para: "Testes de ponta a ponta dos fluxos, no navegador." },
    { nome: "Testing Library", para: "Testes dos componentes e telas do frontend." },
    { nome: "PostgreSQL real no CI", para: "Testes de integração contra um banco efêmero, com migrations e seeds." },
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
      "Monólito modular por domínio. O backend (Node.js, Express 5, Prisma e PostgreSQL) tem 24 módulos em `backend/src/modules`, como obras, EAP, medições, cotações, fornecedores, imóveis, chamados, checklist, diárias, RBAC, auditoria e IA. O frontend é uma SPA em React 19 com Vite, Tailwind, React Router e TanStack Query. Arquivos ficam em armazenamento S3, o cache usa Redis, a autenticação usa JWT (jose) e as entradas são validadas com Zod. O assistente de IA é somente leitura e usa provedores Gemini e Claude. O deploy é por Docker, e a CI no GitHub Actions roda com PostgreSQL efêmero.",
    decisoes: [
      "Um único sistema para obras, chamados, fornecedores, cotações e documentos, em vez de ferramentas separadas.",
      "Controle de acesso por papéis (RBAC) e histórico auditável das ações.",
      "Monólito modular por domínio, em vez de microsserviços: um único deploy e fronteiras claras entre os módulos.",
      "Qualidade em camadas: Vitest nas regras de negócio, Testing Library nas telas, Playwright nos fluxos e CI com PostgreSQL real.",
      "Assistente de IA somente leitura, para consultar o sistema sem alterar dados.",
    ],
    desafios: [
      "Atender mais de 500 usuários em produção.",
      "Controle de acesso por papéis e auditoria das ações.",
      "Banco com 148 migrations versionadas e mais de 80 modelos, evoluídos sem reset.",
      "Qualidade provada por mais de 470 arquivos de teste, de unidade, integração e ponta a ponta.",
    ],
    resultado: "Em produção real na Rede Marajó, usado por mais de 500 usuários.",
  },
};
