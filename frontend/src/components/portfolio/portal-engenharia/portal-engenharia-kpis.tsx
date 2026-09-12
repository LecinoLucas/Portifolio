import { Building2, Activity, DollarSign, Wallet } from "lucide-react";

interface PortalEngenhariaKpisProps {
  kpis: {
    totalObras: number;
    obrasEmAndamento: number;
    totalOrcado: number;
    totalRealizado: number;
  };
}

function formatarMoedaCompacta(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);
}

export function PortalEngenhariaKpis({ kpis }: PortalEngenhariaKpisProps) {
  const percentualGlobal =
    kpis.totalOrcado > 0 ? Math.round((kpis.totalRealizado / kpis.totalOrcado) * 100) : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
      {/* 1. Total de Obras */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-2.5 sm:p-4 shadow-xs backdrop-blur-xs">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Total de Obras
          </span>
          <div className="flex size-6 sm:size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Building2 className="size-3.5 sm:size-4" />
          </div>
        </div>
        <div className="mt-1 sm:mt-2 flex items-baseline gap-1.5 sm:gap-2">
          <span className="text-xl sm:text-3xl font-black text-foreground">
            {kpis.totalObras}
          </span>
          <span className="text-[10px] sm:text-[11px] text-muted-foreground">cadastradas</span>
        </div>
      </div>

      {/* 2. Obras em Andamento */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-2.5 sm:p-4 shadow-xs backdrop-blur-xs">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Em Andamento
          </span>
          <div className="flex size-6 sm:size-7 items-center justify-center rounded-lg bg-tech-cyan/10 text-tech-cyan">
            <Activity className="size-3.5 sm:size-4" />
          </div>
        </div>
        <div className="mt-1 sm:mt-2 flex items-baseline gap-1.5 sm:gap-2">
          <span className="text-xl sm:text-3xl font-black text-tech-cyan">
            {kpis.obrasEmAndamento}
          </span>
          <span className="text-[10px] sm:text-[11px] text-muted-foreground">ativas</span>
        </div>
      </div>

      {/* 3. Total Orçado */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-2.5 sm:p-4 shadow-xs backdrop-blur-xs">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Total Orçado
          </span>
          <div className="flex size-6 sm:size-7 items-center justify-center rounded-lg bg-tech-violet/10 text-tech-violet">
            <DollarSign className="size-3.5 sm:size-4" />
          </div>
        </div>
        <div className="mt-1 sm:mt-2">
          <span className="text-[13px] xs:text-sm sm:text-2xl font-black text-foreground tracking-tight whitespace-nowrap block">
            {formatarMoedaCompacta(kpis.totalOrcado)}
          </span>
          <span className="text-[10px] sm:text-[11px] text-muted-foreground block truncate">
            planejamento
          </span>
        </div>
      </div>

      {/* 4. Total Realizado */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-2.5 sm:p-4 shadow-xs backdrop-blur-xs">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Total Realizado
          </span>
          <div className="flex size-6 sm:size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
            <Wallet className="size-3.5 sm:size-4" />
          </div>
        </div>
        <div className="mt-1 sm:mt-2">
          <span className="text-[13px] xs:text-sm sm:text-2xl font-black text-emerald-500 dark:text-emerald-400 tracking-tight whitespace-nowrap block">
            {formatarMoedaCompacta(kpis.totalRealizado)}
          </span>
          <span className="text-[10px] sm:text-[11px] text-muted-foreground block truncate">
            {percentualGlobal}% executado
          </span>
        </div>
      </div>
    </div>
  );
}
