import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectCardPrincipal } from "@/components/portfolio/project-card-principal";
import { projetos } from "@/data/projetos";

export function Projects() {
  const principal = projetos.find((p) => p.principal);
  const corporativos = projetos.filter((p) => !p.principal && !p.freelance);
  const freelances = projetos.filter((p) => p.freelance);

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
        {corporativos.map((projeto, indice) => (
          <Reveal key={projeto.slug} atraso={(indice % 3) * 70} className="h-full">
            <ProjectCard projeto={projeto} indice={indice + 1} />
          </Reveal>
        ))}
      </div>

      {freelances.length > 0 ? (
        <div id="freelances" className="mt-16" aria-labelledby="titulo-freelances">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">Freelances</p>
          <h3 id="titulo-freelances" className="mt-1.5 text-2xl font-semibold tracking-tight">
            Projetos freelance
          </h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Sistemas que construí para clientes e que estão em uso real por pessoas de verdade.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {freelances.map((projeto, indice) => (
              <Reveal key={projeto.slug} atraso={(indice % 3) * 70} className="h-full">
                <ProjectCard projeto={projeto} indice={corporativos.length + indice + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
