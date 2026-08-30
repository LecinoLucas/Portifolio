import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projetos } from "@/data/projetos";

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        rotulo="Projetos"
        titulo="Projetos em destaque"
        descricao="Sistemas e integrações reais. Cada projeto abre um painel com contexto, problema, minha participação, solução, arquitetura e desafios técnicos."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, indice) => (
          <Reveal key={projeto.slug} atraso={(indice % 3) * 70} className="h-full">
            <ProjectCard projeto={projeto} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
