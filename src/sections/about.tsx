import { Check } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Rotulo } from "@/components/shared/rotulo";
import { sobre } from "@/data/sobre";

function Paragrafo({ rotulo, texto }: { rotulo: string; texto: string }) {
  return (
    <Reveal>
      <Rotulo>{rotulo}</Rotulo>
      <p className="mt-3 text-lg leading-relaxed text-foreground/85">{texto}</p>
    </Reveal>
  );
}

export function About() {
  return (
    <Section id="sobre">
      <SectionHeading rotulo="Sobre mim" titulo="Quem eu sou e como eu penso" />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-10">
          <Reveal>
            <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">{sobre.abertura}</p>
          </Reveal>

          <Reveal>
            <Rotulo>como eu penso</Rotulo>
            <ol className="mt-4 space-y-5">
              {sobre.principios.map((principio, indice) => (
                <li key={principio.titulo} className="flex gap-4 border-l-2 border-primary/50 pl-4">
                  <span aria-hidden="true" className="pt-0.5 font-mono text-sm text-primary">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold tracking-tight">{principio.titulo}</h4>
                    <p className="mt-1 leading-relaxed text-foreground/80">{principio.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <Rotulo>minha história</Rotulo>
            <ol className="mt-4 space-y-4">
              {sobre.historia.map((etapa) => (
                <li key={etapa.quando} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <span className="font-mono text-sm text-primary">{etapa.quando}</span>
                  <p className="leading-relaxed text-foreground/85">{etapa.texto}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Paragrafo rotulo="meu ritmo" texto={sobre.ritmo} />
          <Paragrafo rotulo="além do trabalho" texto={sobre.alemDoTrabalho} />
          <Paragrafo rotulo="para onde vou" texto={sobre.rumo} />
          <Paragrafo rotulo="em equipe" texto={sobre.equipe} />
        </div>

        <Reveal atraso={80}>
          <aside className="rounded-lg border border-primary/40 bg-card p-6 shadow-lg shadow-black/10 lg:sticky lg:top-24">
            <Rotulo>em resumo</Rotulo>
            <ul className="mt-5 space-y-4">
              {sobre.resumo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg font-semibold leading-snug">
                  <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
