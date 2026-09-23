import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { SignalMap } from "@/components/portfolio/signal-map";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-success" />
              {perfil.disponibilidade} · {perfil.localizacao}
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Portfólio / 2026</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">{perfil.nome}</h1>
            <p className="mt-5 max-w-xl text-xl font-medium leading-snug text-primary sm:text-2xl">{perfil.titulo}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{perfil.headline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projetos" className={classesBotao({ tamanho: "lg" })}>Ver projetos <ArrowRight className="size-4" /></a>
              <a href={links.curriculo} download className={classesBotao({ variante: "contorno", tamanho: "lg" })}><Download className="size-4" /> Baixar currículo</a>
              <a href={links.github} target="_blank" rel="noreferrer" className={classesBotao({ variante: "fantasma", tamanho: "lg" })}><Github className="size-4" /> GitHub</a>
              {links.linkedin ? <a href={links.linkedin} target="_blank" rel="noreferrer" className={classesBotao({ variante: "fantasma", tamanho: "lg" })}><Linkedin className="size-4" /> LinkedIn</a> : null}
            </div>
          </div>
          <SignalMap />
        </div>
      </Container>
    </section>
  );
}
