import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { perfil } from "@/data/perfil";

export function About() {
  return (
    <Section id="sobre">
      <SectionHeading
        rotulo="Sobre"
        titulo="Da regra de negócio à solução em produção"
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4">
          {perfil.bio.map((paragrafo) => (
            <p key={paragrafo} className="text-base leading-relaxed text-muted-foreground">
              {paragrafo}
            </p>
          ))}
        </Reveal>

        <Reveal atraso={80}>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
            {perfil.fatos.map((fato) => (
              <div key={fato.rotulo} className="bg-card p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {fato.rotulo}
                </dt>
                <dd className="mt-1 text-sm font-medium">{fato.valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
