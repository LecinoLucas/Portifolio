import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import {
  STATUS_OBRA_CONFIG,
  type ObraDemo,
} from "@/data/portal-engenharia-demo-data";
import { cn } from "@/lib/utils";

interface PortalEngenhariaObraCardProps {
  obra: ObraDemo;
}

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);
}

export function PortalEngenhariaObraCard({ obra }: PortalEngenhariaObraCardProps) {
  const statusConfig = STATUS_OBRA_CONFIG[obra.status];

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card/70 p-5 shadow-xs transition-all hover:border-primary/50 hover:shadow-md backdrop-blur-xs">
      {/* Topo do Card: Código, Status e Cidade */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs font-bold text-primary">
            {obra.codigo}
          </span>
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
              statusConfig.corBadge
            )}
          >
            {statusConfig.label}
          </span>
        </div>

        {/* Título da Obra */}
        <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-primary transition-colors">
          {obra.nome}
        </h3>

        {/* Cidade e Cronograma */}
        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5 text-tech-cyan" />
            {obra.cidade}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="size-3.5 text-tech-violet" />
            {obra.prazo}
          </span>
        </div>

        {/* Barra de Progresso Físico-Financeiro */}
        <div className="mt-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">Execução financeira</span>
            <span className="font-mono font-bold text-foreground">{obra.progresso}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted/60">
            <div
              className={cn(
                "h-full transition-all duration-500 rounded-full",
                obra.progresso >= 80
                  ? "bg-emerald-500"
                  : obra.progresso > 0
                  ? "bg-tech-cyan"
                  : "bg-muted"
              )}
              style={{ width: `${obra.progresso}%` }}
            />
          </div>
        </div>

        {/* Valores Orçado e Realizado */}
        <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-border/50 bg-background/50 p-2.5 text-xs">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase font-semibold block">
              Orçado
            </span>
            <span className="font-semibold text-foreground truncate block">
              {formatarMoeda(obra.orcado)}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground uppercase font-semibold block">
              Realizado
            </span>
            <span className="font-semibold text-emerald-500 dark:text-emerald-400 truncate block">
              {formatarMoeda(obra.realizado)}
            </span>
          </div>
        </div>
      </div>

      {/* Rodapé do Card: Ação Acessar Obra */}
      <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-end">
        <Link
          to={`/projetos/portal-engenharia/demo/obra/${obra.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline group-hover:translate-x-0.5 transition-transform"
          aria-label={`Acessar obra ${obra.nome}`}
        >
          <span>Acessar obra</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
