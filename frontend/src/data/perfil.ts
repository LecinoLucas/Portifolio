import type { Perfil } from "@/types";

export const perfil: Perfil = {
  nome: "Lecino Lucas",
  posicionamento: "Lecino Lucas — Sistemas, Integrações e Desenvolvimento",
  titulo: "Analista de Sistemas & Desenvolvedor Full Stack Júnior",

  headline:
    "Base sólida em análise de sistemas corporativos e ERP, ampliada pelo desenvolvimento de aplicações reais em produção. Conecto negócio, dados e tecnologia para resolver problemas concretos.",

  localizacao: "Goiás · Brasil",
  disponibilidade: "Disponível para novas oportunidades",

  bio: [
    "Sou Analista de Sistemas com base em sistemas corporativos, TOTVS Protheus, processos de negócio, SQL e integrações. Minha principal força está na combinação de negócio + sistemas empresariais + suporte/implantação + dados + desenvolvimento.",
    "Minha trajetória começou em suporte técnico, passou por implantação de sistemas e evoluiu para análise de sistemas corporativos. Mais recentemente, ampliei minha atuação para o desenvolvimento de software, participando da construção e entrega de aplicações corporativas utilizadas em produção.",
    "Tenho experiência prática em desenvolvimento de sistemas corporativos entregues com arquitetura em camadas: Portal de Engenharia (EAP, orçamentos e RBAC) e BankingProtheus (APIs Itaú mTLS). Entender a regra de negócio antes de escrever código é o que orienta o meu trabalho.",
  ],

  fatos: [
    { rotulo: "Posicionamento", valor: "Sistemas, Integrações e Desenvolvimento" },
    { rotulo: "ERP Corporativo", valor: "TOTVS Protheus P12 (Financeiro, Contábil, Fiscal, Compras, TMS)" },
    { rotulo: "Bancos e Dados", valor: "PostgreSQL · SQL Server · modelagem relacional · diagnóstico de inconsistências" },
    { rotulo: "Integrações", valor: "APIs REST · APIs bancárias Itaú · OAuth2 · mTLS · Webhooks" },
    { rotulo: "Desenvolvimento", valor: "React · TypeScript · Node.js · Express · Prisma · Tailwind CSS" },
    { rotulo: "Engenharia & IA", valor: "LES (Padrão de Engenharia) · IA aplicada a triagem de documentos" },
  ],

  perfis: {
    analista: {
      titulo: "Analista de Sistemas / TOTVS Protheus",
      subtitulo: "Processos corporativos, ERP, regras de negócio e integração de dados",
      headline:
        "Especialista em traduzir requisitos complexos de negócio em soluções de software e fluxos eficientes dentro do ecossistema corporativo.",
      destaques: [
        "Domínio de módulos-chave do TOTVS Protheus P12: Financeiro (SIGAFIN), Contábil (SIGACTB), Fiscal (SIGAFIS), Compras (SIGACOM) e TMS (SIGATMS).",
        "Diagnóstico analítico de divergências de dados via queries SQL complexas e modelagem relacional.",
        "Integração de processos bancários (BankingProtheus) automatizando conciliações de contas, extratos e recebimentos.",
        "Levantamento direto de requisitos com usuários-chave, mapeamento de fluxos e especificações funcionais claras.",
      ],
      competencias: [
        "TOTVS Protheus P12",
        "SQL & Modelagem de Dados",
        "Regras de Negócio Corporativas",
        "Conciliação Financeira",
        "Integrações de ERP via APIs",
        "Mapeamento de Processos (BPMN)",
      ],
      aplicacaoReal:
        "Condução técnica da integração bancária Itaú com Protheus e suporte/evolução de rotinas corporativas de alto impacto operacional.",
    },
    fullstack: {
      titulo: "Desenvolvedor Full Stack Júnior",
      subtitulo: "Aplicações web modernas, APIs REST resilientes, TypeScript e arquitetura em camadas",
      headline:
        "Foco em criar software limpo, seguro por padrão (deny-by-default) e com experiência fluida para o usuário final.",
      destaques: [
        "Desenvolvimento do Portal de Engenharia, com gestão de obras, EAP, aprovação de orçamentos e governança RBAC multifilial.",
        "Backend em Node.js com Express, TypeScript e Prisma, seguindo o padrão MVC e princípios de separação de responsabilidades.",
        "Frontend moderno em React 19 + TypeScript + Vite, estilizado com Tailwind CSS e componentes acessíveis.",
        "Criação e manutenção do padrão LES (Lucas Engineering Standard), com governança de código, testes automatizados e segurança.",
      ],
      competencias: [
        "React 19 & TypeScript",
        "Node.js & Express (MVC)",
        "PostgreSQL & Prisma ORM",
        "Tailwind CSS & shadcn/ui",
        "APIs REST, OAuth2 & mTLS",
        "Testes com Vitest & Supertest",
      ],
      aplicacaoReal:
        "Construção de ponta a ponta do Portal de Engenharia e da suíte de ferramentas do padrão de engenharia LES.",
    },
  },
};
