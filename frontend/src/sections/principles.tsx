import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { PrincipleCard } from "@/components/portfolio/principle-card";
import { principios } from "@/data/principios";

export function Principles() {
  return (
    <Section id="principios" alternado>
      <SectionHeading
        rotulo="Princípios"
        titulo="Como penso engenharia"
      />

      <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {principios.map((principio, indice) => (
          <Reveal key={principio.titulo} atraso={(indice % 2) * 60}>
            <PrincipleCard principio={principio} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
