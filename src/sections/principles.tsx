import { Reveal } from "@/components/shared/reveal";
import { Rotulo } from "@/components/shared/rotulo";
import { PrincipleCard } from "@/components/portfolio/principle-card";
import { Container } from "@/components/layout/container";
import { principios } from "@/data/principios";

/** Princípios do LES, logo abaixo do padrão, na mesma aba. */
export function Principles() {
  return (
    <section id="principios" className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <Rotulo>princípios</Rotulo>
        </Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {principios.map((principio, indice) => (
            <Reveal key={principio.titulo} atraso={indice * 60} className="h-full">
              <PrincipleCard principio={principio} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
