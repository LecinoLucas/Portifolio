import { ArrowRight } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectDetail } from "@/components/portfolio/project-detail";
import type { Projeto } from "@/types";

export function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <Sheet>
      <Card className="flex h-full flex-col p-6 transition-colors hover:border-foreground/20">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-primary">
            {projeto.categoria}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold tracking-tight">{projeto.titulo}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {projeto.resumo}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {projeto.stack.map((tec) => (
            <Badge key={tec} variante="contorno">
              {tec}
            </Badge>
          ))}
        </div>

        <SheetTrigger className="mt-5 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Ver detalhes
          <ArrowRight className="size-4" />
        </SheetTrigger>
      </Card>

      <ProjectDetail projeto={projeto} />
    </Sheet>
  );
}
