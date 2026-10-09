import { Download, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { DesenvolvoEmProducao } from "@/components/portfolio/desenvolvo-em-producao";
import { TextoRecolhivel } from "@/components/portfolio/texto-recolhivel";
import { CartoesMarca } from "@/components/portfolio/cartoes-marca";
import { FaixaProvas } from "@/components/portfolio/faixa-provas";
import { CacaIncidentes } from "@/components/portfolio/caca-incidentes";
import { Sumario3D } from "@/components/portfolio/sumario-3d";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";
import { perfil } from "@/data/perfil";

export function Hero({ aoIr }: { aoIr: (id: string) => void }) {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-brilho" />
      <Container className="py-8 sm:py-20">
        <p className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary sm:text-sm">
          <span className="size-1.5 rounded-full bg-success" />
          {perfil.disponibilidade} · {perfil.localizacao}
        </p>

        <h1 className="mt-4 font-mono text-sm font-semibold sm:mt-6 sm:text-lg uppercase tracking-[0.2em] text-muted-foreground">{perfil.nome}</h1>
        <h2 className="texto-gradiente mt-2 max-w-4xl text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.04em] sm:mt-3 sm:text-6xl lg:text-7xl">
          {perfil.destaque}
        </h2>
        <p className="mt-3 text-base font-medium text-foreground/90 sm:mt-4 sm:text-lg">{perfil.titulo}</p>

        <div className="mt-4 sm:mt-5">
          <TextoRecolhivel linhas={perfil.apresentacao} />
        </div>

        <div className="mt-5 flex flex-col sm:mt-8">
        <div className="order-2 mt-6 sm:order-1 sm:mt-0">
          <CartoesMarca />
        </div>

        <div className="order-1 grid grid-cols-2 gap-3 sm:order-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center">
          <a href={links.curriculo} download className={classesBotao({ tamanho: "lg", className: "col-span-2 sm:col-auto" })}><Download className="size-4" /> Baixar currículo</a>
          <a href={links.github} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg" })}><Github className="size-4" /> GitHub</a>
          {links.linkedin ? <a href={links.linkedin} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg" })}><Linkedin className="size-4" /> LinkedIn</a> : null}
        </div>
        </div>

        <div className="mt-10">
          <DesenvolvoEmProducao aoIr={aoIr} />
        </div>

        <div className="mt-6">
          <FaixaProvas />
        </div>

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
