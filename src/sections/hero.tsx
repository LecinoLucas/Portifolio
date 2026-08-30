import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />

      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-success" />
            {perfil.disponibilidade} · {perfil.localizacao}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {perfil.nome}
          </h1>

          <p className="mt-3 text-lg font-medium text-primary sm:text-xl">
            {perfil.titulo}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {perfil.headline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projetos" className={classesBotao({ tamanho: "lg" })}>
              Ver projetos
              <ArrowRight className="size-4" />
            </a>
            <a
              href={links.curriculo}
              download
              className={classesBotao({ variante: "contorno", tamanho: "lg" })}
            >
              <Download className="size-4" />
              Baixar currículo
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className={classesBotao({ variante: "fantasma", tamanho: "lg" })}
            >
              <Github className="size-4" />
              GitHub
            </a>
            {links.linkedin ? (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className={classesBotao({ variante: "fantasma", tamanho: "lg" })}
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
