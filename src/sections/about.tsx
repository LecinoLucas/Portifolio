import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { sobre } from "@/data/sobre";

function Rotulo({ children }: { children: string }) {
  return <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-primary">{`// ${children}`}</h3>;
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
            <Rotulo>quem sou</Rotulo>
            <p className="mt-3 text-lg leading-relaxed text-foreground/85">{sobre.quemSou}</p>
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
            <Rotulo>meu ritmo</Rotulo>
            <p className="mt-3 text-lg leading-relaxed text-foreground/85">{sobre.ritmo}</p>
          </Reveal>

          <Reveal>
            <Rotulo>para onde vou</Rotulo>
            <p className="mt-3 text-lg leading-relaxed text-foreground/85">{sobre.rumo}</p>
          </Reveal>

          <Reveal>
            <Rotulo>em equipe</Rotulo>
            <p className="mt-3 text-lg leading-relaxed text-foreground/85">{sobre.equipe}</p>
          </Reveal>
        </div>

        <Reveal atraso={80}>
          <aside className="rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24">
            <Rotulo>em resumo</Rotulo>
            <ul className="mt-4 space-y-3">
              {sobre.resumo.map((item) => (
                <li key={item} className="flex gap-3 text-base">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
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
