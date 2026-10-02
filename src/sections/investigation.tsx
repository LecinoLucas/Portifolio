import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ExemploInvestigacao } from "@/components/portfolio/caso-real";
import { investigacao } from "@/data/investigacao";

export function Investigation() {
  const { intro, tabelas, frentes, exemplo } = investigacao;

  return (
    <Section id="investigacao">
      <SectionHeading rotulo="Investigações" titulo="O que eu investigo no dia a dia" descricao={intro} />

      <Reveal className="mt-10">
        <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">// tabelas que cruzo</h3>
        <dl className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {tabelas.map((tabela) => (
            <div key={tabela.nome} className="rounded-lg border border-border bg-card p-3">
              <dt className="font-mono text-sm font-semibold text-primary">{tabela.nome}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{tabela.descricao}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-10">
        <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">// frentes de investigação</h3>
        <ul className="mt-4 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {frentes.map((frente) => (
            <li key={frente.titulo} className="border-l-2 border-primary/40 pl-4">
              <h4 className="text-sm font-semibold tracking-tight">{frente.titulo}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{frente.descricao}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <ExemploInvestigacao caso={exemplo} />
    </Section>
  );
}
