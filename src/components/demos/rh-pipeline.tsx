import { ArrowRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { etapas, type Candidato, type EtapaId } from "@/data/demos/rh";

interface Props {
  candidatos: Candidato[];
  aoMover: (id: number, etapa: EtapaId) => void;
}

/** Quadro do pipeline: etapas do processo seletivo com candidatos fictícios. */
export function RhPipeline({ candidatos, aoMover }: Props) {
  const reprovados = candidatos.filter((c) => c.etapa === "rejected");

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Avance ou reprove candidatos. A etapa do pipeline é independente do status da análise por IA.
      </p>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {etapas.map((etapa, indice) => {
          const lista = candidatos.filter((c) => c.etapa === etapa.id);
          const proxima = etapas[indice + 1];
          return (
            <section key={etapa.id} aria-label={etapa.rotulo} className="w-44 shrink-0 rounded-lg border border-border bg-muted/30 p-2">
              <h4 className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {etapa.rotulo}
                <span>{lista.length}</span>
              </h4>
              <ul className="space-y-2">
                {lista.map((c) => (
                  <li key={c.id} className="rounded-md border border-border bg-card p-2 text-xs">
                    <p className="font-medium">{c.nome}</p>
                    <p className="text-muted-foreground">{c.vaga}</p>
                    <div className="mt-1.5 flex items-center justify-between">
                      <Badge variante="primario">Score {c.score}</Badge>
                      <span className="flex gap-1">
                        {proxima ? (
                          <button type="button" aria-label={`Avançar ${c.nome} para ${proxima.rotulo}`} onClick={() => aoMover(c.id, proxima.id)} className="rounded p-1 hover:bg-accent">
                            <ArrowRight className="size-3.5" />
                          </button>
                        ) : null}
                        {etapa.id !== "hired" ? (
                          <button type="button" aria-label={`Reprovar ${c.nome}`} onClick={() => aoMover(c.id, "rejected")} className="rounded p-1 hover:bg-accent">
                            <X className="size-3.5" />
                          </button>
                        ) : null}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      {reprovados.length > 0 ? (
        <p className="text-xs text-muted-foreground">
          Reprovados: {reprovados.map((c) => c.nome).join(", ")}
        </p>
      ) : null}
    </div>
  );
}
