import type { ReactNode } from "react";
import { Download, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { TextoRecolhivel } from "@/components/portfolio/texto-recolhivel";
import { CartoesEvidencias } from "@/components/portfolio/cartoes-evidencias";
import { PainelProvas } from "@/components/portfolio/painel-provas";
import { FaixaProvas } from "@/components/portfolio/faixa-provas";
import { CacaIncidentes } from "@/components/portfolio/caca-incidentes";
import { Sumario3D } from "@/components/portfolio/sumario-3d";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";
import { perfil } from "@/data/perfil";

function Botoes() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
      <a href={links.curriculo} download className={classesBotao({ tamanho: "lg", className: "col-span-2 sm:col-auto" })}>
        <Download className="size-4" /> Baixar currículo
      </a>
      <a href={links.github} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg" })}>
        <Github className="size-4" /> GitHub
      </a>
      {links.linkedin ? (
        <a href={links.linkedin} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg" })}>
          <Linkedin className="size-4" /> LinkedIn
        </a>
      ) : null}
    </div>
  );
}

/** `children` entra entre os cartões de evidências e o sumário (o Sobre mim). */
export function Hero({ aoIr, children }: { aoIr: (id: string) => void; children?: ReactNode }) {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-brilho" />
      <Container className="py-8 sm:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary sm:text-sm">
              <span className="size-1.5 rounded-full bg-success" />
              {perfil.disponibilidade} · {perfil.localizacao}
            </p>

            <h1 className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mt-6 sm:text-lg">{perfil.nome}</h1>
            <h2 className="texto-gradiente mt-2 max-w-3xl text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.035em] sm:mt-3 sm:text-5xl lg:text-[3.1rem]">
              {perfil.destaque}
            </h2>
            <p className="mt-3 text-base font-medium text-foreground/90 sm:mt-4 sm:text-lg">{perfil.titulo}</p>

            <p className="mt-4 text-lg font-semibold text-foreground sm:mt-5 lg:text-xl">{perfil.frase}</p>
            <div className="mt-2 lg:text-lg">
              <TextoRecolhivel linhas={perfil.apresentacao.slice(0, 1)} />
            </div>

            <div className="mt-5 sm:mt-7">
              <Botoes />
            </div>
          </div>

          <div className="hidden lg:block">
            <PainelProvas />
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <CartoesEvidencias />
        </div>

        <div className="mt-6 lg:hidden">
          <FaixaProvas />
        </div>

        {children}

        <div className="mt-12">
          <Sumario3D aoIr={aoIr} />
        </div>

        <div className="mt-10">
          <CacaIncidentes aoIr={aoIr} />
        </div>
      </Container>
    </section>
  );
}
