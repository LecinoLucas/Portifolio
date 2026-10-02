import { ArrowUpRight, GitBranch, Github, Package, ShieldCheck, TerminalSquare } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Rotulo } from "@/components/shared/rotulo";
import { LesFlow } from "@/components/portfolio/les-flow";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";

const capacidades = [
  { icone: TerminalSquare, texto: "CLI npm: init, check e audit" },
  { icone: GitBranch, texto: "AGENTS.md e CLAUDE.md como contrato" },
  { icone: ShieldCheck, texto: "Segurança deny-by-default e testes" },
  { icone: Package, texto: "Governança, ADRs e várias stacks" },
];

export function Les() {
  return (
    <Section id="les" className="pb-8 sm:pb-10">
      <SectionHeading
        rotulo="LES"
        titulo="Meu padrão de engenharia"
        descricao="Em vez de repetir as mesmas decisões em cada projeto, criei um padrão versionado e executável: o Lecino Lucas Engineering Standard."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal className="space-y-6">
          <p className="text-lg leading-relaxed text-foreground/85">
            O LES transforma princípios em um contrato que pessoas e agentes de IA seguem da mesma forma, reduzindo
            retrabalho e inconsistência entre projetos.
          </p>

          <ul className="grid gap-3">
            {capacidades.map(({ icone: Icone, texto }) => (
              <li key={texto} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 font-medium">
                <Icone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                {texto}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a href={links.les.github} target="_blank" rel="noreferrer" className={classesBotao({ tamanho: "lg" })}>
              <Github /> Ver no GitHub
            </a>
            <a href={links.les.npm} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg" })}>
              Ver no npm <ArrowUpRight />
            </a>
          </div>
        </Reveal>

        <Reveal atraso={80} className="rounded-lg border border-primary/40 bg-card p-6">
          <Rotulo>do requisito à implementação</Rotulo>
          <div className="mt-4">
            <LesFlow />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Este portfólio também é governado pelo LES, com{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono">les init</code>,{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono">les check</code> e{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono">les audit</code>.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
