import { useEffect } from "react";
import { CheckCircle2, X, ShieldCheck, AlertCircle } from "lucide-react";
import type { EtapaEapDemo } from "@/data/portal-engenharia-demo-data";

interface PortalEngenhariaAprovarModalProps {
  etapa: EtapaEapDemo | null;
  aberto: boolean;
  onFechar: () => void;
  onConfirmar: (etapaId: string) => void;
}

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);
}

export function PortalEngenhariaAprovarModal({
  etapa,
  aberto,
  onFechar,
  onConfirmar,
}: PortalEngenhariaAprovarModalProps) {
  // Fecha no Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && aberto) {
        onFechar();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [aberto, onFechar]);

  if (!aberto || !etapa) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-aprovar-titulo"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm animate-in fade-in-50"
    >
      <div className="relative w-full max-w-lg rounded-xl border border-border/80 bg-card p-6 shadow-2xl space-y-4">
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={onFechar}
          aria-label="Fechar modal"
          className="absolute right-4 top-4 rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors"
        >
          <X className="size-4" />
        </button>

        {/* Cabeçalho */}
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-tech-cyan/10 text-tech-cyan">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <h2 id="modal-aprovar-titulo" className="text-lg font-bold text-foreground">
              Aprovar Macro-Etapa Orçamentária
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Etapa: <strong className="text-foreground">{etapa.codigo} — {etapa.descricao}</strong>
            </p>
          </div>
        </div>

        {/* Resumo da Etapa */}
        <div className="rounded-lg border border-border/70 bg-background/60 p-3.5 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Valor Total da Etapa:</span>
            <span className="font-mono font-bold text-foreground text-sm">
              {formatarMoeda(etapa.valorTotal)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Quantidade de Subitens:</span>
            <span className="font-semibold text-foreground">
              {etapa.subitens.length} serviços vinculados
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Alçada Necessária:</span>
            <span className="rounded bg-primary/10 px-2 py-0.5 font-semibold text-primary">
              Diretoria de Engenharia
            </span>
          </div>
        </div>

        {/* Aviso de Alçada Simulada */}
        <div className="flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-500 dark:text-amber-400">
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Demonstração:</strong> A aprovação e a alçada financeira são simuladas nesta demonstração interativa. Nenhum dado real é alterado.
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 pt-2">
          <button
            type="button"
            onClick={onFechar}
            className="w-full sm:w-auto rounded-lg border border-border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => onConfirmar(etapa.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-600 shadow-xs cursor-pointer transition-colors"
          >
            <CheckCircle2 className="size-4" />
            <span>Confirmar Aprovação</span>
          </button>
        </div>
      </div>
    </div>
  );
}
