import { useState } from "react";
import { ChevronDown, CheckCircle, Clock, ShieldCheck } from "lucide-react";
import type { EtapaEapDemo } from "@/data/portal-engenharia-demo-data";
import { cn } from "@/lib/utils";

interface PortalEngenhariaEapViewProps {
  etapas: EtapaEapDemo[];
  onSolicitarAprovacao: (etapa: EtapaEapDemo) => void;
}

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);
}

function formatarMoedaDecimal(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
}

export function PortalEngenhariaEapView({
  etapas,
  onSolicitarAprovacao,
}: PortalEngenhariaEapViewProps) {
  // Inicialmente, a etapa pendente ou a primeira etapa vem expandida
  const [expandidos, setExpandidos] = useState<Record<string, boolean>>({
    "etapa-4": true,
  });

  const toggleExpansao = (id: string) => {
    setExpandidos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-foreground">
            Estrutura Analítica de Projeto (EAP)
          </h2>
          <p className="text-xs text-muted-foreground">
            Macro-etapas orçamentárias (N1) e serviços vinculados (N2)
          </p>
        </div>
        <span className="text-[11px] font-mono text-muted-foreground">
          4 macro-etapas · 8 serviços
        </span>
      </div>

      {/* Lista de Blocos de Macro-etapas (adaptável vertical no mobile sem scroll horizontal) */}
      <div className="space-y-3">
        {etapas.map((etapa) => {
          const isExpandido = Boolean(expandidos[etapa.id]);
          const isAprovada = etapa.statusAprovacao === "aprovada";

          return (
            <div
              key={etapa.id}
              className={cn(
                "rounded-xl border transition-all duration-200 overflow-hidden",
                isAprovada
                  ? "border-border/80 bg-card/60"
                  : "border-amber-500/40 bg-amber-500/[0.03]"
              )}
            >
              {/* Cabeçalho da Macro-etapa */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-card/80">
                <div className="flex items-start gap-3 min-w-0">
                  <button
                    type="button"
                    onClick={() => toggleExpansao(etapa.id)}
                    aria-label={`${isExpandido ? "Recolher" : "Expandir"} etapa ${etapa.codigo} ${etapa.descricao}`}
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-background hover:bg-muted cursor-pointer transition-colors"
                  >
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200 text-muted-foreground",
                        isExpandido && "rotate-180"
                      )}
                    />
                  </button>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-bold text-foreground">
                        {etapa.codigo}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-foreground truncate">
                        {etapa.descricao}
                      </h3>
                    </div>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      {etapa.subitens.length} serviços vinculados
                    </span>
                  </div>
                </div>

                {/* Valor, Status e Ação */}
                <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] text-muted-foreground uppercase font-semibold block">
                      Total da Etapa
                    </span>
                    <span className="font-mono text-sm sm:text-base font-black text-foreground">
                      {formatarMoeda(etapa.valorTotal)}
                    </span>
                  </div>

                  {/* Badge de Aprovação */}
                  {isAprovada ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-500">
                      <CheckCircle className="size-3.5" />
                      <span>Aprovada</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-500">
                      <Clock className="size-3.5" />
                      <span>Pendente</span>
                    </span>
                  )}

                  {/* Botão Aprovar Etapa (se pendente) */}
                  {!isAprovada ? (
                    <button
                      type="button"
                      onClick={() => onSolicitarAprovacao(etapa)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-600 shadow-xs cursor-pointer transition-all"
                    >
                      <ShieldCheck className="size-3.5" />
                      <span>Aprovar etapa</span>
                    </button>
                  ) : null}
                </div>
              </div>

              {/* Subitens da EAP (Expansível) */}
              {isExpandido ? (
                <div className="border-t border-border/50 bg-background/50 p-3 sm:p-4 space-y-2.5 animate-in fade-in-50">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Serviços e Composições Orçadas (N2)
                  </span>

                  <div className="space-y-2">
                    {etapa.subitens.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg border border-border/60 bg-card p-3 text-xs"
                      >
                        <div className="flex items-start gap-2 min-w-0">
                          <span className="rounded bg-muted/80 px-1.5 py-0.5 font-mono text-[11px] font-bold text-muted-foreground shrink-0">
                            {sub.codigo}
                          </span>
                          <span className="font-medium text-foreground leading-relaxed">
                            {sub.descricao}
                          </span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-border/30">
                          <span className="text-muted-foreground font-mono">
                            {sub.quantidade} {sub.unidade} × {formatarMoedaDecimal(sub.valorUnitario)}
                          </span>
                          <span className="font-mono font-bold text-foreground">
                            {formatarMoeda(sub.valorTotal)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
