import { useEffect, useState } from "react";
import { CheckCircle2, CircleAlert, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { classesBotao } from "@/components/ui/button-variants";
import { criteriosAnalise, rotuloStatusAnalise, type Candidato, type StatusAnalise } from "@/data/demos/rh";

/** Análise por IA: critérios da vaga com justificativa e status do processamento. */
export function RhAnalise({ candidato }: { candidato: Candidato }) {
  const [status, setStatus] = useState<StatusAnalise>("completed");

  useEffect(() => {
    if (status !== "processing") return;
    const espera = setTimeout(() => setStatus("completed"), 1200);
    return () => clearTimeout(espera);
  }, [status]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm font-medium">{candidato.nome}</p>
          <p className="text-xs text-muted-foreground">
            {candidato.vaga} · etapa do pipeline separada do status da análise
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variante={status === "completed" ? "primario" : "contorno"} role="status">
            Análise: {rotuloStatusAnalise[status]}
          </Badge>
          <button type="button" disabled={status === "processing"} onClick={() => setStatus("processing")} className={classesBotao({ variante: "contorno", tamanho: "sm" })}>
            <RefreshCw /> Reanalisar
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {criteriosAnalise.map((c) => (
          <li key={c.criterio} className="flex gap-2 rounded-lg border border-border p-2.5 text-xs">
            {c.situacao === "atende" ? (
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-label="Atende" />
            ) : (
              <CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive" aria-label="Lacuna" />
            )}
            <span>
              <span className="font-medium">{c.criterio}</span>
              <span className="block text-muted-foreground">{c.nota}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">
        Cada classificação traz o motivo registrado. A decisão final continua sendo do time de RH.
      </p>
    </div>
  );
}
