import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { classesBotao } from "@/components/ui/button-variants";
import { ProjectDetail } from "@/components/portfolio/project-detail";
import { cn } from "@/lib/utils";
import type { Projeto } from "@/types";

interface ConfigModulo {
  numero: string;
  classeCard: string;
  corNumero: string;
  corBadge: string;
}

const CONFIG_MODULOS: Record<string, ConfigModulo> = {
  "portal-engenharia": {
    numero: "MOD-01",
    classeCard: "tech-module-portal",
    corNumero: "text-primary border-primary/30 bg-primary/10",
    corBadge: "text-tech-cyan border-tech-cyan/30 bg-tech-cyan/10",
  },
  "conciliacao-bancaria-itau": {
    numero: "MOD-02",
    classeCard: "tech-module-banking",
    corNumero: "text-tech-violet border-tech-violet/30 bg-tech-violet/10",
    corBadge: "text-tech-magenta border-tech-magenta/30 bg-tech-magenta/10",
  },
  "banking-protheus": {
    numero: "MOD-02",
    classeCard: "tech-module-banking",
    corNumero: "text-tech-violet border-tech-violet/30 bg-tech-violet/10",
    corBadge: "text-tech-magenta border-tech-magenta/30 bg-tech-magenta/10",
  },
  "portal-rh": {
    numero: "MOD-03",
    classeCard: "tech-module-rh",
    corNumero: "text-tech-cyan border-tech-cyan/30 bg-tech-cyan/10",
    corBadge: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  },
  "les": {
    numero: "MOD-04",
    classeCard: "tech-module-les",
    corNumero: "text-tech-violet border-tech-violet/30 bg-tech-violet/10",
    corBadge: "text-tech-orange border-tech-orange/30 bg-tech-orange/10",
  },
};

export function ProjectCard({ projeto }: { projeto: Projeto }) {
  const config = CONFIG_MODULOS[projeto.slug] || {
    numero: "MOD-XX",
    classeCard: "border-border",
    corNumero: "text-primary border-primary/30 bg-primary/10",
    corBadge: "text-muted-foreground border-border bg-muted/20",
  };

  return (
    <Sheet>
      <article
        className={cn(
          "group relative flex h-full flex-col rounded-2xl border bg-card/85 p-5 sm:p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5",
          config.classeCard,
        )}
      >
        {/* Identificador numérico e categoria com cores exclusivas */}
        <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-3">
          <span
            className={cn(
              "rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold tracking-wider",
              config.corNumero,
            )}
          >
            {config.numero}
          </span>
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
              config.corBadge,
            )}
          >
            {projeto.categoria}
          </span>
        </div>

        {/* Título com transição de hover */}
        <h3 className="mt-3.5 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary break-words">
          <Link
            to={`/projetos/${projeto.slug}`}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {projeto.titulo}
          </Link>
        </h3>

        {/* Resumo do projeto */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {projeto.resumo}
        </p>

        {/* Stack técnica com tags diferenciadas */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {projeto.stack.map((tec) => (
            <span
              key={tec}
              className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {tec}
            </span>
          ))}
        </div>

        {/* Rodapé de Ações: Estudo Completo vs Prévia Rápida */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-t border-border/50 pt-4">
          <Link
            to={`/projetos/${projeto.slug}`}
            className={classesBotao({
              variante: "primario",
              tamanho: "sm",
              className: "w-full sm:w-auto justify-center min-h-[42px] sm:min-h-[36px] gap-1.5 font-semibold text-xs",
            })}
          >
            Explorar Estudo de Caso
            <ArrowRight className="size-3.5" />
          </Link>

          <SheetTrigger asChild>
            <button
              type="button"
              className={classesBotao({
                variante: "contorno",
                tamanho: "sm",
                className: "w-full sm:w-auto justify-center min-h-[42px] sm:min-h-[36px] gap-1.5 text-xs font-semibold text-foreground hover:bg-muted/70 cursor-pointer border-border/80 shadow-2xs",
              })}
              aria-label={`Abrir prévia rápida do projeto ${projeto.titulo}`}
            >
              <Eye className="size-3.5" />
              Prévia Rápida
            </button>
          </SheetTrigger>
        </div>
      </article>

      <ProjectDetail projeto={projeto} />
    </Sheet>
  );
}
