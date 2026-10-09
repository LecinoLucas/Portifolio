import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Rotulo } from "@/components/shared/rotulo";
import { PlantaIntegracao } from "@/components/portfolio/planta-integracao";
import { Badge } from "@/components/ui/badge";
import { tecnologias } from "@/data/tecnologias";
import { projetoPorSlug } from "@/data/projetos";

export function TechStack() {
  const { abertura, diaADia, emEvolucao } = tecnologias;
  const testes = projetoPorSlug("portal-engenharia")?.testes ?? [];

  return (
    <Section id="tecnologias">
      <SectionHeading rotulo="Tecnologias" titulo="O que eu uso, e onde estou evoluindo" descricao={abertura} />

      <Reveal className="mt-10">
        <Rotulo>uso na prática</Rotulo>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {diaADia.map((t) => (
            <li key={t.nome} className="rounded-lg border border-border bg-card p-4">
              <p className="text-xl font-bold tracking-tight">{t.nome}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.nota}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12">
        <Rotulo>qualidade e testes</Rotulo>
        <p className="mt-3 max-w-2xl text-lg text-foreground/85">
          Testo em camadas. No Portal de Engenharia, em produção com mais de 500 usuários, uso estas quatro:
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {testes.map((t, indice) => (
            <li key={t.nome} className="rounded-lg border border-primary/40 bg-card p-4">
              <span aria-hidden="true" className="font-mono text-xs text-primary">{String(indice + 1).padStart(2, "0")}</span>
              <p className="mt-1 font-mono text-lg font-semibold text-primary">{t.nome}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.para}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-12 max-w-2xl">
        <Rotulo>integração bancária</Rotulo>
        <div className="mt-4">
          <PlantaIntegracao />
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <Rotulo>já usei e continuo evoluindo</Rotulo>
        <ul className="mt-4 flex flex-wrap gap-2">
          {emEvolucao.map((nome) => (
            <li key={nome}>
              <Badge variante="contorno" className="px-3 py-1 font-mono text-sm">{nome}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
