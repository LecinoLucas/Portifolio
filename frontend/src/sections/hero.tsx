import { ArrowRight, Download, Github, Linkedin, Briefcase, Code2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />

      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-xs">
            <span className="size-2 rounded-full bg-success animate-pulse" />
            <span>{perfil.posicionamento}</span>
            <span className="text-border">|</span>
            <span>{perfil.disponibilidade}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            {perfil.nome}
          </h1>

          <p className="mt-3 text-xl font-medium text-primary sm:text-2xl">
            {perfil.titulo}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {perfil.headline}
          </p>

          {/* Atalhos para os dois perfis especializados */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href="#analista-protheus"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
            >
              <Briefcase className="size-3.5 text-primary" />
              Ver perfil Analista de Sistemas &amp; Protheus
            </a>
            <a
              href="#fullstack"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
            >
              <Code2 className="size-3.5 text-primary" />
              Ver perfil Desenvolvedor Full Stack Júnior
            </a>
          </div>

          {/* Ações principais e currículos */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projetos" className={classesBotao({ tamanho: "lg" })}>
              Ver estudos de caso
              <ArrowRight className="size-4" />
            </a>

            {/* Espaço preparado para os dois currículos */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={links.curriculoAnalista}
                download
                title="Baixar currículo com foco em Análise de Sistemas e TOTVS Protheus"
                className={classesBotao({ variante: "contorno", tamanho: "lg" })}
              >
                <Download className="size-4" />
                Currículo Analista
              </a>

              <a
                href={links.curriculoFullstack}
                download
                title="Baixar currículo com foco em Desenvolvimento Full Stack"
                className={classesBotao({ variante: "contorno", tamanho: "lg" })}
              >
                <Download className="size-4" />
                Currículo Full Stack
              </a>
            </div>

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
