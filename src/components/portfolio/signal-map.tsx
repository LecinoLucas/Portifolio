import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const etapas = [
  { id: "origem", x: 48, y: 64, titulo: "ORIGEM", detalhe: "Protheus · operação" },
  { id: "analise", x: 150, y: 118, titulo: "ANÁLISE", detalhe: "SQL · regras" },
  { id: "integracao", x: 252, y: 66, titulo: "INTEGRAÇÃO", detalhe: "APIs · automação" },
  { id: "construcao", x: 354, y: 118, titulo: "CONSTRUÇÃO", detalhe: "React · Node.js" },
  { id: "entrega", x: 452, y: 64, titulo: "ENTREGA", detalhe: "em produção" },
];

/** Representa o caminho real do problema operacional à entrega de software. */
export function SignalMap() {
  const referencia = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const elemento = referencia.current;
    if (
      !elemento ||
      import.meta.env.MODE === "test" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const linhas = animate(elemento.querySelectorAll(".signal-line"), {
      strokeDashoffset: [26, 0],
      opacity: [0.2, 0.9],
      delay: stagger(170),
      duration: 1000,
      ease: "outExpo",
    });
    return () => { linhas.cancel(); };
  }, []);

  return (
    <div className="signal-map relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-black/20 sm:p-7">
      <div className="mb-2 flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">Fluxo de atuação</p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight">Do problema à produção</h2>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground"><i className="size-1.5 rounded-full bg-primary" />em fluxo</span>
      </div>

      <svg ref={referencia} viewBox="0 0 500 190" className="mt-4 h-auto w-full" role="img" aria-label="Fluxo de atuação: Protheus e operação, análise com SQL e regras, integrações, construção full stack e entrega em produção.">
        <path className="signal-line" d="M76 78 C100 94 116 104 122 108" pathLength="26" />
        <path className="signal-line" d="M177 108 C198 93 215 80 224 76" pathLength="26" />
        <path className="signal-line" d="M279 76 C300 90 318 105 327 109" pathLength="26" />
        <path className="signal-line" d="M381 108 C401 94 418 80 424 76" pathLength="26" />
        {etapas.map((etapa) => (
          <g key={etapa.id} className="signal-node" transform={`translate(${etapa.x} ${etapa.y})`}>
            <circle r="29" className="signal-node-ring" />
            <circle r="20" className="signal-node-core" />
            <text y="-3" textAnchor="middle" className="signal-node-title">{etapa.titulo}</text>
            <text y="9" textAnchor="middle" className="signal-node-detail">{etapa.detalhe}</text>
          </g>
        ))}
      </svg>

      <p className="mt-3 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
        Começo entendendo a operação e a regra de negócio; então conecto dados e integrações para entregar uma aplicação útil no dia a dia.
      </p>
    </div>
  );
}
