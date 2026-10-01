import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { perfil } from "@/data/perfil";

export function About() {
  return (
    <Section id="sobre">
      <SectionHeading rotulo="Sobre" titulo="Da regra de negócio à solução em produção" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {perfil.bio.map((bloco, indice) => (
            <Reveal key={bloco.rotulo} atraso={indice * 60}>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">// {bloco.rotulo}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{bloco.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal atraso={80}>
          <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
            {perfil.fatos.map((fato) => (
              <div key={fato.rotulo} className="bg-card p-4">
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">{fato.rotulo}</dt>
                <dd className="mt-1 text-sm font-medium">{fato.valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
