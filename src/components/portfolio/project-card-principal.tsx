import { ArrowRight } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ProjectDetail } from "@/components/portfolio/project-detail";
import { SeloSituacao } from "@/components/portfolio/selo-situacao";
import type { Projeto } from "@/types";

/** Card grande do projeto principal: o maior e mais real, no topo da aba. */
export function ProjectCardPrincipal({ projeto }: { projeto: Projeto }) {
  return (
    <Sheet>
      <article className="card-planta relative grid gap-8 overflow-hidden rounded-lg border border-primary/50 bg-card p-6 shadow-xl shadow-black/10 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
        <div aria-hidden="true" className="hero-brilho opacity-60" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm uppercase tracking-[0.14em] text-primary">Projeto principal</span>
            <SeloSituacao projeto={projeto} />
          </div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{projeto.titulo}</h3>
          {projeto.situacaoDetalhe ? (
            <p className="mt-1 text-sm font-medium text-success">{projeto.situacaoDetalhe}</p>
          ) : null}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/85">{projeto.resumo}</p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">{projeto.stack.join(" · ")}</p>
          <SheetTrigger className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-[0.95rem] font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Ver o projeto <ArrowRight className="size-4" />
          </SheetTrigger>
        </div>

        <div className="space-y-5">
          {projeto.numeros?.map((n) => (
            <div key={n.rotulo}>
              <p className="texto-gradiente text-6xl font-extrabold tracking-tight">{n.valor}</p>
              <p className="text-sm text-muted-foreground">{n.rotulo}</p>
            </div>
          ))}
          {projeto.testes ? (
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-highlight">testado em camadas</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {projeto.testes.map((t) => (
                  <li key={t.nome}>
                    <Badge variante="contorno" className="font-mono">{t.nome}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </article>

      <ProjectDetail projeto={projeto} />
    </Sheet>
  );
}
