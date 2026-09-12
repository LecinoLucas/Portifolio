import { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import {
  ETAPAS_PIPELINE,
  type CandidatoDemo,
  type EtapaPipeline,
} from "@/data/portal-rh-demo-data";
import { cn } from "@/lib/utils";

interface PropsPipelineView {
  candidatosPorEtapa: Record<EtapaPipeline, CandidatoDemo[]>;
  mostrarAderencia: boolean;
  setMostrarAderencia: (v: boolean) => void;
  ordenacao: "padrao" | "maior" | "menor";
  setOrdenacao: (v: "padrao" | "maior" | "menor") => void;
  moverCandidato: (id: string, novaEtapa: EtapaPipeline) => void;
  reprovadosAberto: boolean;
  setReprovadosAberto: (v: boolean) => void;
}

export function PipelineView({
  candidatosPorEtapa,
  mostrarAderencia,
  setMostrarAderencia,
  ordenacao,
  setOrdenacao,
  moverCandidato,
  reprovadosAberto,
  setReprovadosAberto,
}: PropsPipelineView) {
  const [arrastandoId, setArrastandoId] = useState<string | null>(null);

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Barra de Controles da Pipeline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground">Ordenar:</span>
          <button
            type="button"
            onClick={() => setOrdenacao("padrao")}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
              ordenacao === "padrao"
                ? "border border-primary/40 bg-primary text-primary-foreground font-semibold"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            Padrão
          </button>
          <button
            type="button"
            onClick={() => setOrdenacao("maior")}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
              ordenacao === "maior"
                ? "border border-primary/40 bg-primary text-primary-foreground font-semibold"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            Maior aderência
          </button>
          <button
            type="button"
            onClick={() => setOrdenacao("menor")}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
              ordenacao === "menor"
                ? "border border-primary/40 bg-primary text-primary-foreground font-semibold"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            Menor aderência
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMostrarAderencia(!mostrarAderencia)}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {mostrarAderencia ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
            <span>{mostrarAderencia ? "Ocultar %" : "Mostrar %"}</span>
          </button>

          <button
            type="button"
            onClick={() => setReprovadosAberto(!reprovadosAberto)}
            className="inline-flex items-center gap-1.5 rounded-md border border-destructive/30 bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive hover:bg-destructive/20 transition-colors cursor-pointer"
          >
            <span>Reprovados ({candidatosPorEtapa.reprovado.length})</span>
            <ChevronDown
              className={cn("size-3.5 transition-transform", reprovadosAberto && "rotate-180")}
            />
          </button>
        </div>
      </div>

      {/* Container do Kanban com rolagem horizontal interna */}
      <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          tabIndex={0}
          aria-label="Quadro Kanban de candidatos com rolagem horizontal"
          className="flex gap-4 overflow-x-auto pb-4 pt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        >
          {ETAPAS_PIPELINE.map((etapa) => {
            const lista = candidatosPorEtapa[etapa.id];
            return (
              <div
                key={etapa.id}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (arrastandoId) {
                    moverCandidato(arrastandoId, etapa.id);
                    setArrastandoId(null);
                  }
                }}
                className="flex w-72 shrink-0 flex-col rounded-xl border border-border/80 bg-card/60 p-3.5 backdrop-blur-sm"
              >
                {/* Header da Coluna */}
                <div className="flex items-center justify-between border-b border-border/50 pb-2.5 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {etapa.rotulo}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-mono font-bold border",
                      etapa.corBadge
                    )}
                  >
                    {lista.length}
                  </span>
                </div>

                {/* Lista de Cards da Etapa */}
                <div className="flex-1 space-y-2.5 min-h-[140px]">
                  {lista.length === 0 ? (
                    <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border/60 text-xs text-muted-foreground/60">
                      Nenhum candidato
                    </div>
                  ) : (
                    lista.map((candidato) => (
                      <div
                        key={candidato.id}
                        draggable
                        onDragStart={() => setArrastandoId(candidato.id)}
                        onDragEnd={() => setArrastandoId(null)}
                        className="group relative rounded-lg border border-border/80 bg-background/90 p-3.5 shadow-xs transition-all hover:border-primary/50 hover:shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="text-xs font-bold text-foreground">
                              {candidato.nome}
                            </h4>
                            <span className="text-[10px] text-muted-foreground">
                              {candidato.senioridade}
                            </span>
                          </div>

                          {/* Aderência IA */}
                          {mostrarAderencia ? (
                            candidato.aderencia !== null ? (
                              <span
                                className={cn(
                                  "rounded px-1.5 py-0.5 text-[10px] font-bold font-mono border",
                                  candidato.aderencia >= 85
                                    ? "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
                                    : candidato.aderencia >= 75
                                    ? "text-primary border-primary/30 bg-primary/10"
                                    : "text-amber-500 border-amber-500/30 bg-amber-500/10"
                                )}
                              >
                                {candidato.aderencia}%
                              </span>
                            ) : (
                              <span className="rounded border border-border px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground bg-muted/40 animate-pulse">
                                IA Analisando
                              </span>
                            )
                          ) : null}
                        </div>

                        {/* Competências */}
                        <div className="mt-2 flex flex-wrap gap-1">
                          {candidato.competencias.map((comp) => (
                            <span
                              key={comp}
                              className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>

                        {/* Ação Acessível de Movimentação (Teclado, Leitor e Touch) */}
                        <div className="mt-3 border-t border-border/40 pt-2 flex items-center justify-between gap-2">
                          <label
                            htmlFor={`mover-${candidato.id}`}
                            className="text-[10px] text-muted-foreground font-medium shrink-0"
                          >
                            Mover:
                          </label>
                          <select
                            id={`mover-${candidato.id}`}
                            aria-label={`Mover candidato ${candidato.nome} para outra etapa`}
                            value={candidato.etapa}
                            onChange={(e) =>
                              moverCandidato(candidato.id, e.target.value as EtapaPipeline)
                            }
                            className="w-full rounded border border-border bg-card px-2 py-1 text-[11px] font-medium text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                          >
                            {ETAPAS_PIPELINE.map((e) => (
                              <option key={e.id} value={e.id}>
                                {e.rotulo}
                              </option>
                            ))}
                            <option value="reprovado">Reprovar</option>
                          </select>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Área Separada e Recolhível de Reprovados */}
      {reprovadosAberto ? (
        <div className="rounded-xl border border-destructive/30 bg-destructive/[0.03] p-4 space-y-3 animate-in fade-in-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-destructive" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-destructive">
                Candidatos Reprovados ({candidatosPorEtapa.reprovado.length})
              </h3>
            </div>
            <span className="text-[11px] text-muted-foreground">
              Candidatos que não avançaram para as fases seguintes
            </span>
          </div>

          {candidatosPorEtapa.reprovado.length === 0 ? (
            <p className="text-xs text-muted-foreground italic">
              Nenhum candidato reprovado nesta demonstração.
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {candidatosPorEtapa.reprovado.map((c) => (
                <div
                  key={c.id}
                  className="rounded-lg border border-destructive/20 bg-background/80 p-3 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-foreground">{c.nome}</strong>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {c.aderencia ? `${c.aderencia}%` : "--"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/40">
                    <span className="text-[10px] text-muted-foreground">Reativar:</span>
                    <select
                      aria-label={`Reativar candidato ${c.nome}`}
                      value={c.etapa}
                      onChange={(e) =>
                        moverCandidato(c.id, e.target.value as EtapaPipeline)
                      }
                      className="rounded border border-border bg-card px-2 py-0.5 text-[10px] text-foreground cursor-pointer"
                    >
                      <option value="reprovado">Reprovado</option>
                      {ETAPAS_PIPELINE.map((e) => (
                        <option key={e.id} value={e.id}>
                          Mover para {e.rotulo}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
