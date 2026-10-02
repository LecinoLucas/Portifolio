import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Rotulo } from "@/components/shared/rotulo";
import { TrilhaCarreira } from "@/components/portfolio/trilha-carreira";
import { carreira } from "@/data/experiencias";
import { formacao } from "@/data/formacao";

/** Etapa aberta ao entrar: a experiência mais recente na área de sistemas. */
const ETAPA_INICIAL = carreira.findIndex((etapa) => etapa.id === "marajo");

export function Experience({ aoIr }: { aoIr: (id: string) => void }) {
  return (
    <Section id="experiencia">
      <SectionHeading
        rotulo="Experiência"
        titulo="Minha trajetória na tecnologia"
        descricao="Escolha uma etapa para ver o que eu fazia, com números, ferramentas e o que levei de cada uma."
      />

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
