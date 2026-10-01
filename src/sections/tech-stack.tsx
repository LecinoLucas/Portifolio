import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TechGroup } from "@/components/portfolio/tech-group";
import { fluxoTecnologias, tecnologias } from "@/data/tecnologias";

export function TechStack() {
  return (
    <Section id="tecnologias">
      <SectionHeading
        rotulo="Tecnologias"
        titulo="Onde cada tecnologia entra"
        descricao="Organizadas pelas etapas do fluxo de integração bancária, e não por nível de domínio."
      />

      <Reveal className="mt-10">
        <dl className="border-t border-border">
          {fluxoTecnologias.map((etapa) => (
            <TechGroup key={etapa.numero} numero={etapa.numero} rotulo={etapa.etapa} descricao={etapa.descricao} itens={etapa.itens} />
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">// desenvolvimento de aplicações</h3>
        <dl className="mt-2 border-t border-border">
          {tecnologias.map((grupo) => (
            <TechGroup key={grupo.dominio} rotulo={grupo.dominio} itens={grupo.itens} />
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
