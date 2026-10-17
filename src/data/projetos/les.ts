import type { Projeto } from "@/types";
import { links } from "@/data/links";

export const les: Projeto = {
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
};
