import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TechGroup } from "@/components/portfolio/tech-group";
import { tecnologias } from "@/data/tecnologias";

export function TechStack() {
  return (
    <Section id="tecnologias">
      <SectionHeading
        rotulo="Tecnologias"
        titulo="Ferramentas por domínio"
        descricao="Sem barras de porcentagem — apenas onde cada tecnologia entra no trabalho real."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tecnologias.map((grupo, indice) => (
          <Reveal key={grupo.dominio} atraso={(indice % 3) * 60} className="h-full">
            <TechGroup grupo={grupo} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
