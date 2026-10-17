import type { Competencia, EstadoCompetencia } from "@/types";
import { ROTULO_ESTADO } from "@/lib/estados";
import { cn } from "@/lib/utils";

const COR_ESTADO: Record<EstadoCompetencia, string> = {
  profissional: "border-primary/50 text-primary",
  entregue: "border-success/50 text-success",
  desenvolvimento: "border-highlight/50 text-highlight",
  estudo: "border-border text-muted-foreground",
};

export function SeloEstado({ estado, className }: { estado: EstadoCompetencia; className?: string }) {
  return (
    <span className={cn("inline-block whitespace-nowrap rounded border px-1.5 py-0.5 font-mono text-[0.68rem] leading-none", COR_ESTADO[estado], className)}>
      {ROTULO_ESTADO[estado]}
    </span>
  );
}

/** Lista de competências em linhas simples (sem um cartão por item), com estado e onde foi usada. */
export function GrupoCompetencias({ titulo, itens }: { titulo: string; itens: Competencia[] }) {
  return (
    <section aria-label={titulo}>
      <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-primary">{titulo}</h3>
      <ul className="mt-3 grid gap-x-10 sm:grid-cols-2">
        {itens.map((item) => (
          <li key={item.nome} className="flex flex-col gap-1 border-b border-border/70 py-2.5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">{item.nome}</span>
              <SeloEstado estado={item.estado} />
            </div>
            {item.onde ? <span className="text-xs text-muted-foreground">{item.onde}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
