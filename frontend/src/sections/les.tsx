import { ArrowUpRight, GitBranch, Github, Package, ShieldCheck, TerminalSquare } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { LesFlow } from "@/components/portfolio/les-flow";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";

const capacidades = [
  { icone: TerminalSquare, texto: "CLI npm — init, check, audit" },
  { icone: GitBranch, texto: "AGENTS.md + CLAUDE.md como contrato" },
  { icone: ShieldCheck, texto: "Segurança deny-by-default e testes" },
  { icone: Package, texto: "Governança, ADRs e suporte multi-stack" },
];

export function Les() {
  return (
    <Section id="les">
      <SectionHeading
        rotulo="Engineering Standard"
        titulo="Lecino Lucas Engineering Standard (LES)"
        descricao="Em vez de repetir as mesmas decisões de arquitetura, segurança, frontend e governança em cada novo projeto, criei um padrão versionado e executável."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal className="space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            O LES é um padrão de engenharia e UX para desenvolvimento assistido por
            IA. Ele transforma princípios em um contrato que pessoas e agentes seguem
            da mesma forma — reduzindo retrabalho e inconsistência entre projetos.
          </p>

          <ul className="space-y-2.5">
            {capacidades.map(({ icone: Icone, texto }) => (
              <li key={texto} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Icone className="mt-0.5 size-4 shrink-0 text-primary" />
                {texto}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={links.les.github}
              target="_blank"
              rel="noreferrer"
              className={classesBotao({ variante: "primario" })}
            >
              <Github className="size-4" />
              Ver no GitHub
            </a>
            <a
              href={links.les.npm}
              target="_blank"
              rel="noreferrer"
              className={classesBotao({ variante: "contorno" })}
            >
              Ver no npm
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal atraso={80} className="rounded-xl border border-border bg-muted/40 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Do requisito à implementação
          </p>
          <div className="mt-4">
            <LesFlow />
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Este portfólio também usa o LES como contrato de engenharia e UX —
            inicializado e governado por{" "}
            <code className="rounded bg-background px-1.5 py-0.5">les init</code>,{" "}
            <code className="rounded bg-background px-1.5 py-0.5">les check</code> e{" "}
            <code className="rounded bg-background px-1.5 py-0.5">les audit</code>.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
