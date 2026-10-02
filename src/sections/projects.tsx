import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectCardPrincipal } from "@/components/portfolio/project-card-principal";
import { projetos } from "@/data/projetos";

export function Projects() {
  const principal = projetos.find((p) => p.principal);
  const demais = projetos.filter((p) => !p.principal);

  return (
    <Section id="projetos">
      <SectionHeading
        rotulo="Projetos"
        titulo="Projetos em destaque"
        descricao="Sistemas e integrações reais. Cada projeto abre um painel com contexto, problema, minha participação, solução, arquitetura e desafios técnicos."
      />

      {principal ? (
        <Reveal className="mt-10">
          <ProjectCardPrincipal projeto={principal} />
        </Reveal>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {demais.map((projeto, indice) => (
          <Reveal key={projeto.slug} atraso={(indice % 3) * 70} className="h-full">
            <ProjectCard projeto={projeto} indice={indice + 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
