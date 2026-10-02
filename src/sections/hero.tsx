import { Download, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Sumario3D } from "@/components/portfolio/sumario-3d";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";
import { perfil } from "@/data/perfil";

export function Hero({ aoIr }: { aoIr: (id: string) => void }) {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-brilho" />
      <Container className="py-14 sm:py-20">
        <p className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-sm font-medium text-primary">
          <span className="size-1.5 rounded-full bg-success" />
          {perfil.disponibilidade} · {perfil.localizacao}
        </p>

        <h1 className="mt-6 font-mono text-lg font-semibold uppercase tracking-[0.2em] text-muted-foreground">{perfil.nome}</h1>
        <h2 className="texto-gradiente mt-3 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          {perfil.destaque}
        </h2>

        <div className="mt-6 max-w-3xl space-y-2 text-lg leading-relaxed text-foreground/85 sm:text-xl">
          {perfil.apresentacao.map((linha) => (
            <p key={linha}>{linha}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={links.curriculo} download className={classesBotao({ tamanho: "lg" })}><Download className="size-4" /> Baixar currículo</a>
          <a href={links.github} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg" })}><Github className="size-4" /> GitHub</a>
          {links.linkedin ? <a href={links.linkedin} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg" })}><Linkedin className="size-4" /> LinkedIn</a> : null}
        </div>

        <div className="mt-12">
          <Sumario3D aoIr={aoIr} />
        </div>
      </Container>
    </section>
  );
}
