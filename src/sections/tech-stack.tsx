import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Rotulo } from "@/components/shared/rotulo";
import { GrupoCompetencias, SeloEstado } from "@/components/portfolio/grupo-competencias";
import { BlocoEntregas } from "@/components/portfolio/bloco-entregas";
import { BlocoOrquestracao } from "@/components/portfolio/bloco-orquestracao";
import { PlantaIntegracao } from "@/components/portfolio/planta-integracao";
import { tecnologias } from "@/data/tecnologias";
import { ROTULO_ESTADO } from "@/lib/estados";
import type { EstadoCompetencia } from "@/types";

const DEFINICAO: Record<EstadoCompetencia, string> = {
  profissional: "usado em sistema que roda para usuários reais",
  entregue: "usado em projeto meu já entregue",
  desenvolvimento: "usado em projeto que ainda está sendo construído",
  estudo: "aprendendo, sem projeto ainda",
};

export function TechStack() {
  const { abertura, entregas, orquestracao, grupos, aplicados } = tecnologias;
  const estados = Object.keys(ROTULO_ESTADO) as EstadoCompetencia[];

  return (
    <Section id="tecnologias">
      <SectionHeading rotulo="Tecnologias" titulo="O que uso, onde usei e em que estado" descricao={abertura} />

      <Reveal className="mt-8">
        <Rotulo>já entreguei em sistema real</Rotulo>
        <div className="mt-4">
          <BlocoEntregas entregas={entregas} />
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <BlocoOrquestracao dados={orquestracao} />
      </Reveal>

      <Reveal className="mt-12">
        <ul aria-label="Legenda dos estados" className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {estados.map((estado) => (
            <li key={estado} className="flex flex-col items-start gap-1.5 rounded-lg border border-border bg-card p-3">
              <SeloEstado estado={estado} />
              <span className="text-xs text-muted-foreground">{DEFINICAO[estado]}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-12 space-y-12">
        {grupos.map((grupo) => (
          <Reveal key={grupo.titulo}>
            <GrupoCompetencias titulo={grupo.titulo} itens={grupo.itens} />
          </Reveal>
        ))}

        <Reveal>
          <GrupoCompetencias titulo="Conhecimentos aplicados" itens={aplicados} />
        </Reveal>
      </div>

      <Reveal className="mt-12 max-w-2xl">
        <Rotulo>integração bancária</Rotulo>
        <div className="mt-4">
          <PlantaIntegracao />
        </div>
      </Reveal>
    </Section>
  );
}
