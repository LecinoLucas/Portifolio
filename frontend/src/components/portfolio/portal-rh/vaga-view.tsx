import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { classesBotao } from "@/components/ui/button-variants";
import { VAGA_DEMO } from "@/data/portal-rh-demo-data";

interface PropsVagaView {
  onVisualizarPipeline: () => void;
  totalCandidatos: number;
  emEntrevistas: number;
  finalistas: number;
  contratados: number;
}

export function VagaView({
  onVisualizarPipeline,
  totalCandidatos,
  emEntrevistas,
  finalistas,
  contratados,
}: PropsVagaView) {
  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Header da Vaga */}
      <div className="tech-card p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-500">
              {VAGA_DEMO.status}
            </span>
            <span className="text-xs text-muted-foreground">
              Área: <strong className="text-foreground">{VAGA_DEMO.area}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{VAGA_DEMO.local}</span>
            <span>·</span>
            <span>{VAGA_DEMO.modelo}</span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground break-words">
            {VAGA_DEMO.titulo}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {VAGA_DEMO.resumo}
          </p>
        </div>

        {/* Indicadores Fictícios */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="rounded-xl border border-border/80 bg-background/60 p-3.5">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
              Candidatos
            </span>
            <span className="mt-1 text-2xl font-black text-primary block">
              {totalCandidatos}
            </span>
            <span className="text-[10px] text-muted-foreground">Inscritos totais</span>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/60 p-3.5">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
              Em Entrevistas
            </span>
            <span className="mt-1 text-2xl font-black text-tech-violet block">
              {emEntrevistas}
            </span>
            <span className="text-[10px] text-muted-foreground">RH e Técnica</span>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/60 p-3.5">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
              Finalistas
            </span>
            <span className="mt-1 text-2xl font-black text-tech-orange block">
              {finalistas}
            </span>
            <span className="text-[10px] text-muted-foreground">Fase decisória</span>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/60 p-3.5">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
              Contratados
            </span>
            <span className="mt-1 text-2xl font-black text-emerald-500 block">
              {contratados}
            </span>
            <span className="text-[10px] text-muted-foreground">Aprovados</span>
          </div>
        </div>

        {/* Ação de avançar para a pipeline */}
        <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border/60">
          <p className="text-xs text-muted-foreground">
            Alterne para o quadro interativo para gerenciar candidatos por estágios do processo seletivo.
          </p>
          <button
            type="button"
            onClick={onVisualizarPipeline}
            className={classesBotao({
              variante: "primario",
              tamanho: "lg",
              className: "w-full sm:w-auto justify-center gap-2 cursor-pointer font-bold",
            })}
          >
            <span>Visualizar pipeline</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Requisitos Essenciais & Diferenciais */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="tech-card p-6 space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-tech-cyan" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Competências Essenciais
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {VAGA_DEMO.competenciasEssenciais.map((comp) => (
              <span
                key={comp}
                className="rounded-lg border border-tech-cyan/30 bg-tech-cyan/10 px-3 py-1 text-xs font-semibold text-tech-cyan"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-card p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-tech-violet" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Diferenciais Valorizados
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {VAGA_DEMO.diferenciais.map((dif) => (
              <span
                key={dif}
                className="rounded-lg border border-tech-violet/30 bg-tech-violet/10 px-3 py-1 text-xs font-semibold text-tech-violet"
              >
                {dif}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
