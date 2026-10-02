import { useId, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { classesBotao } from "@/components/ui/button-variants";
import { Rotulo } from "@/components/shared/rotulo";
import { cn } from "@/lib/utils";
import type { EtapaCarreira } from "@/types";

interface PropsTrilha {
  etapas: EtapaCarreira[];
  inicial?: number;
  aoIr: (id: string) => void;
}

/** Trilha clicável da carreira: cada parada abre um painel detalhado. */
export function TrilhaCarreira({ etapas, inicial = 0, aoIr }: PropsTrilha) {
  const base = useId();
  const [ativo, setAtivo] = useState(inicial);
  const etapa = etapas[ativo];
  const meio = 50 / etapas.length;

  function aoTeclar(e: KeyboardEvent<HTMLButtonElement>) {
    const alvo =
      e.key === "ArrowRight" ? Math.min(ativo + 1, etapas.length - 1)
      : e.key === "ArrowLeft" ? Math.max(ativo - 1, 0)
      : e.key === "Home" ? 0
      : e.key === "End" ? etapas.length - 1
      : null;
    if (alvo === null) return;
    e.preventDefault();
    setAtivo(alvo);
    document.getElementById(`${base}-aba-${alvo}`)?.focus();
  }

  return (
    <div>
      <div className="relative">
        <div aria-hidden="true" className="absolute top-[0.8rem] h-0.5 bg-border" style={{ left: `${meio}%`, right: `${meio}%` }}>
          <div className="trilha-progresso h-full bg-primary" style={{ width: `${(ativo / (etapas.length - 1)) * 100}%` }} />
        </div>
        <div role="tablist" aria-label="Etapas da carreira" className="relative grid" style={{ gridTemplateColumns: `repeat(${etapas.length}, minmax(0, 1fr))` }}>
          {etapas.map((item, i) => {
            const selecionada = i === ativo;
            return (
              <button
                key={item.id}
                id={`${base}-aba-${i}`}
                role="tab"
                type="button"
                aria-selected={selecionada}
                aria-controls={`${base}-painel`}
                tabIndex={selecionada ? 0 : -1}
                onClick={() => setAtivo(i)}
                onKeyDown={aoTeclar}
                className="group flex flex-col items-center gap-2 rounded-md px-1 pb-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  className={cn(
                    "grid size-7 place-items-center rounded-full border-2 bg-background transition-all",
                    i <= ativo ? "border-primary" : "border-border group-hover:border-primary/60",
                    selecionada && "scale-125 bg-primary shadow-[0_0_18px_var(--primary)]",
                  )}
                >
                  {i < ativo ? <Check aria-hidden="true" className="size-4 text-primary" /> : null}
                </span>
                <span className={cn("font-mono text-xs", selecionada ? "text-primary" : "text-muted-foreground")}>{item.quando}</span>
                <span className={cn("text-xs font-semibold leading-tight sm:text-base", selecionada ? "text-foreground" : "text-muted-foreground")}>
                  <span className="sm:hidden">{item.trilhaCurta}</span>
                  <span className="hidden sm:inline">{item.trilha}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div key={etapa.id} role="tabpanel" id={`${base}-painel`} aria-labelledby={`${base}-aba-${ativo}`} className="painel-entra mt-8 rounded-lg border border-primary/40 bg-card p-5 shadow-lg shadow-black/10 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{etapa.cargo}</h3>
            <p className="mt-1 font-mono text-sm text-primary">{etapa.organizacao}</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">{etapa.resumo}</p>

            <Rotulo className="mt-6">o que eu fazia</Rotulo>
            <ul className="mt-3 space-y-2.5">
              {etapa.destaques.map((destaque) => (
                <li key={destaque} className="flex gap-3 leading-relaxed text-foreground/85">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                  {destaque}
                </li>
              ))}
            </ul>

            <blockquote className="mt-6 border-l-2 border-highlight pl-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-highlight">o que levei dali</p>
              <p className="mt-1 text-lg font-medium">{etapa.levei}</p>
            </blockquote>
          </div>

          <div className="space-y-6">
            <dl className="grid gap-3">
              {etapa.numeros.map((n) => (
                <div key={n.rotulo} className="rounded-lg border border-border bg-background/60 p-4">
                  <dt className="texto-gradiente text-4xl font-extrabold tracking-tight">{n.valor}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{n.rotulo}</dd>
                </div>
              ))}
            </dl>
            <div>
              <Rotulo>ferramentas</Rotulo>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {etapa.ferramentas.map((f) => (
                  <li key={f}><Badge variante="contorno" className="font-mono">{f}</Badge></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {etapa.sistemas ? (
          <div className="mt-8 border-t border-border pt-6">
            <Rotulo>{etapa.tituloSistemas ?? "sistemas que construí"}</Rotulo>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {etapa.sistemas.map((sistema) => (
                <li key={sistema.titulo} className="rounded-lg border border-border bg-background/60 p-4">
                  <p className="font-semibold">{sistema.titulo}</p>
                  <p className="mt-0.5 text-xs font-medium text-success">{sistema.situacao}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{sistema.texto}</p>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => aoIr("projetos")} className={classesBotao({ className: "mt-5" })}>
              Ver os projetos em detalhe <ArrowRight />
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button type="button" disabled={ativo === 0} onClick={() => setAtivo(ativo - 1)} className={classesBotao({ variante: "contorno" })}>
          <ArrowLeft /> Etapa anterior
        </button>
        <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">{ativo + 1} / {etapas.length}</span>
        <button type="button" disabled={ativo === etapas.length - 1} onClick={() => setAtivo(ativo + 1)} className={classesBotao({ variante: "contorno" })}>
          Próxima etapa <ArrowRight />
        </button>
      </div>
    </div>
  );
}
