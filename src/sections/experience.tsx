import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Rotulo } from "@/components/shared/rotulo";
import { TrilhaCarreira } from "@/components/portfolio/trilha-carreira";
import { carreira, resumoExperiencia } from "@/data/experiencias";
import { formacao } from "@/data/formacao";

/** Etapa aberta ao entrar: a experiência mais recente na área de sistemas. */
const ETAPA_INICIAL = carreira.findIndex((etapa) => etapa.id === "marajo");

export function Experience({ aoIr }: { aoIr: (id: string) => void }) {
  const { anosTI, anosTIDetalhe, destaques } = resumoExperiencia;

  return (
    <Section id="experiencia">
      <SectionHeading
        rotulo="Experiência"
        titulo="Minha trajetória na tecnologia"
        descricao="Escolha um cargo para ver o que eu fazia, quanto tempo foi e as ferramentas que usei."
      />

      <Reveal className="mt-8">
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-primary/50 bg-card p-5 shadow-lg shadow-black/10">
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">experiência em TI</dt>
            <dd className="texto-gradiente mt-1 text-5xl font-extrabold tracking-tight">{anosTI} anos</dd>
            <dd className="mt-1 text-sm text-muted-foreground">atendendo usuários e sustentando sistemas</dd>
            <dd className="mt-2 font-mono text-xs text-primary">{anosTIDetalhe}</dd>
          </div>
          {destaques.map((d) => (
            <div key={d.rotulo} className="rounded-lg border border-border bg-card p-5">
              <dd className="texto-gradiente text-5xl font-extrabold tracking-tight">{d.valor}</dd>
              <dt className="mt-1 text-sm text-muted-foreground">{d.rotulo}</dt>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-10">
        <TrilhaCarreira etapas={carreira} inicial={ETAPA_INICIAL} aoIr={aoIr} />
      </div>

      <Reveal className="mt-14">
        <Rotulo>formação</Rotulo>
        <ul className="mt-4 space-y-3">
          {formacao.map((item) => (
            <li key={item.curso} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-l-2 border-border pl-4">
              <span>
                <span className="block font-semibold">{item.curso}</span>
                <span className="block text-muted-foreground">
                  {item.instituicao} · {item.status}
                </span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">{item.periodo}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
