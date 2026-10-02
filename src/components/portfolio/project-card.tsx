import { ArrowRight } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SeloSituacao } from "@/components/portfolio/selo-situacao";
import { ProjectDetail } from "@/components/portfolio/project-detail";
import type { Projeto } from "@/types";

interface PropsProjectCard {
  projeto: Projeto;
  indice: number;
}

export function ProjectCard({ projeto, indice }: PropsProjectCard) {
  return (
    <Sheet>
      <article className="card-planta flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs text-muted-foreground">P-{String(indice + 1).padStart(2, "0")}</span>
          <SeloSituacao projeto={projeto} />
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-primary">{projeto.categoria}</p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{projeto.titulo}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{projeto.resumo}</p>

        <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">{projeto.stack.join(" · ")}</p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
          <SheetTrigger className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Ver detalhes
            <ArrowRight className="size-4" />
          </SheetTrigger>
          {projeto.demo ? (
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-highlight">▶ demo interativa</span>
          ) : null}
        </div>
      </article>

      <ProjectDetail projeto={projeto} />
    </Sheet>
  );
}
