import { SeloEstado } from "@/components/portfolio/grupo-competencias";
import type { EntregaReal } from "@/types";

/** Destaque no topo de Tecnologias: o que já foi entregue em sistema real. */
export function BlocoEntregas({ entregas }: { entregas: EntregaReal[] }) {
  return (
    <section aria-label="Já entreguei em sistema real">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entregas.map((entrega) => (
          <li key={entrega.titulo} className="flex flex-col gap-3 rounded-lg border border-primary/40 bg-card p-5 shadow-lg shadow-black/10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs text-muted-foreground">{entrega.onde}</span>
              <SeloEstado estado={entrega.estado} />
            </div>
            <h4 className="text-lg font-semibold leading-snug tracking-tight">{entrega.titulo}</h4>
            <p className="text-sm leading-relaxed text-foreground/80">{entrega.texto}</p>
            <p className="mt-auto font-mono text-xs text-primary">{entrega.tags.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
