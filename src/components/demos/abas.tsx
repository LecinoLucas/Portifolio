import { useId, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface DefinicaoAba {
  id: string;
  rotulo: string;
}

interface PropsAbas {
  rotulo: string;
  abas: DefinicaoAba[];
  ativa: string;
  aoMudar: (id: string) => void;
  children: ReactNode;
  className?: string;
}

/** Abas acessíveis (tablist) com navegação por setas. */
export function Abas({ rotulo, abas, ativa, aoMudar, children, className }: PropsAbas) {
  const base = useId();

  function aoTeclar(evento: KeyboardEvent<HTMLButtonElement>, indice: number) {
    const passo = evento.key === "ArrowRight" ? 1 : evento.key === "ArrowLeft" ? -1 : 0;
    if (!passo) return;
    evento.preventDefault();
    const proximo = abas[(indice + passo + abas.length) % abas.length];
    aoMudar(proximo.id);
    document.getElementById(`${base}-aba-${proximo.id}`)?.focus();
  }

  return (
    <div className={className}>
      <div role="tablist" aria-label={rotulo} className="flex gap-1 overflow-x-auto border-b border-border">
        {abas.map((aba, indice) => {
          const selecionada = aba.id === ativa;
          return (
            <button
              key={aba.id}
              id={`${base}-aba-${aba.id}`}
              role="tab"
              type="button"
              aria-selected={selecionada}
              aria-controls={`${base}-painel-${aba.id}`}
              tabIndex={selecionada ? 0 : -1}
              onClick={() => aoMudar(aba.id)}
              onKeyDown={(e) => aoTeclar(e, indice)}
              className={cn(
                "-mb-px whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selecionada
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {aba.rotulo}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${base}-painel-${ativa}`}
        aria-labelledby={`${base}-aba-${ativa}`}
        className="pt-4"
      >
        {children}
      </div>
    </div>
  );
}
