import { Check, Crosshair, RotateCcw } from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";
import { incidentes } from "@/data/incidentes";
import "@/styles/caca-incidentes.css";

/** Minigame opcional: a mira "resolve" cada incidente e mostra a causa raiz. */
export function CacaIncidentes({ aoIr }: { aoIr: (id: string) => void }) {
  const arena = useRef<HTMLDivElement>(null);
  const mira = useRef<HTMLDivElement>(null);
  const [resolvidos, setResolvidos] = useState<string[]>([]);
  const [tiros, setTiros] = useState(0);
  const [mostrarMira, setMostrarMira] = useState(false);

  const terminou = resolvidos.length === incidentes.length;
  const ultimo = incidentes.find((i) => i.id === resolvidos[resolvidos.length - 1]);

  function moverMira(e: PointerEvent<HTMLDivElement>) {
    const caixa = arena.current?.getBoundingClientRect();
    if (!caixa || !mira.current) return;
    mira.current.style.transform = `translate(${e.clientX - caixa.left}px, ${e.clientY - caixa.top}px)`;
    setMostrarMira(true);
  }

  function resolver(id: string) {
    setResolvidos((atual) => (atual.includes(id) ? atual : [...atual, id]));
  }

  return (
    <section aria-labelledby="caca-titulo" className="rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <h3 id="caca-titulo" className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          <Crosshair aria-hidden="true" className="size-4" /> Experimente: caça ao incidente
        </h3>
        <p className="font-mono text-sm text-muted-foreground" aria-live="polite">
          {resolvidos.length}/{incidentes.length} resolvidos
        </p>
      </div>

      <div
        ref={arena}
        className="caca-arena"
        data-mira={mostrarMira}
        onPointerMove={moverMira}
        onPointerDown={(e) => {
          moverMira(e);
          setTiros((n) => n + 1);
        }}
        onPointerLeave={() => setMostrarMira(false)}
      >
        {incidentes.map((incidente) => {
          const resolvido = resolvidos.includes(incidente.id);
          return (
            <button
              key={incidente.id}
              type="button"
              className="caca-alvo"
              data-resolvido={resolvido}
              style={{ left: `${incidente.esquerda}%`, top: `${incidente.topo}%` }}
              onClick={() => resolver(incidente.id)}
              aria-label={resolvido ? `${incidente.rotulo} (resolvido)` : `Resolver: ${incidente.rotulo}`}
            >
              {resolvido ? <Check aria-hidden="true" className="size-4 text-success" /> : null}
              {incidente.rotulo}
            </button>
          );
        })}
        <div ref={mira} className="caca-mira" aria-hidden="true">
          <Crosshair key={tiros} className="caca-mira-tiro size-full" strokeWidth={1.5} />
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-base leading-relaxed">
        {terminou ? (
          <p className="font-semibold text-success">Todos resolvidos. É esse o trabalho do dia a dia: achar a causa raiz.</p>
        ) : ultimo ? (
          <p><span className="font-mono text-sm font-semibold text-success">Causa raiz · {ultimo.rotulo}:</span> {ultimo.causaRaiz}</p>
        ) : (
          <p className="text-muted-foreground">Mire e toque em um problema para resolvê-lo e ver a causa raiz.</p>
        )}
        <p className="mt-2 text-sm text-muted-foreground">Exemplos ilustrativos do tipo de incidente que investigo. Não são casos reais.</p>
        {resolvidos.length > 1 ? (
          <ul className="mt-3 space-y-1 text-sm text-foreground/85">
            {resolvidos.slice(0, -1).map((id) => {
              const item = incidentes.find((i) => i.id === id);
              return item ? <li key={id}><b>{item.rotulo}:</b> {item.causaRaiz}</li> : null;
            })}
          </ul>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {terminou ? (
            <button type="button" onClick={() => aoIr("experiencia")} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              Ver minha experiência
            </button>
          ) : null}
          {resolvidos.length > 0 ? (
            <button type="button" onClick={() => setResolvidos([])} className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium">
              <RotateCcw aria-hidden="true" className="size-4" /> Reiniciar
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
