import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ExperienceItem } from "@/components/portfolio/experience-item";
import { experiencias } from "@/data/experiencias";
import { formacao } from "@/data/formacao";

export function Experience() {
  return (
    <Section id="experiencia" alternado>
      <SectionHeading
        rotulo="Experiência"
        titulo="Trajetória profissional"
        descricao="De suporte técnico remoto à análise e sustentação de sistemas corporativos, com desenvolvimento de aplicações usadas em produção."
      />

      <ol className="mt-12 space-y-10">
        {experiencias.map((experiencia, indice) => (
          <ExperienceItem
            key={experiencia.cargo}
            experiencia={experiencia}
            atraso={indice * 60}
            ultimo={indice === experiencias.length - 1}
          />
        ))}
      </ol>

      <Reveal className="mt-14">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Formação
        </h3>
        <ul className="mt-4 space-y-3">
          {formacao.map((item) => (
            <li
              key={item.curso}
              className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-l-2 border-border pl-4"
            >
              <span>
                <span className="block text-sm font-semibold">{item.curso}</span>
                <span className="block text-sm text-muted-foreground">
                  {item.instituicao} · {item.status}
                </span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {item.periodo}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
