import { useContador } from "@/hooks/use-contador";
import { useReveal } from "@/hooks/use-reveal";
import { provas, type Prova } from "@/data/provas";

function Linha({ prova, ativo, indice }: { prova: Prova; ativo: boolean; indice: number }) {
  const valor = useContador(prova.valor, ativo);
  return (
    <li className="painel-linha flex items-baseline gap-4 border-t border-border/70 py-3 first:border-t-0" style={{ animationDelay: `${0.25 + indice * 0.15}s` }}>
      <span aria-hidden="true" className="font-mono text-sm text-success">✓</span>
      <span className="texto-gradiente min-w-[5.5rem] font-mono text-4xl font-extrabold tracking-tight">
        <span aria-hidden="true">{valor}{prova.sufixo}</span>
        <span className="sr-only">{prova.valor}{prova.sufixo}</span>
      </span>
      <span className="text-base leading-snug text-foreground/85">{prova.rotulo}</span>
    </li>
  );
}

/** Painel do Início (só no computador): a prova do trabalho ao lado do título. */
export function PainelProvas() {
  const { ref, visivel } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="rounded-xl border border-primary/40 bg-card/80 shadow-xl shadow-black/20 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border/70 px-4 py-2.5">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-destructive/70" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-highlight/70" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-success/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">o que já entreguei</span>
      </div>
      <ul aria-label="Números do meu trabalho" className="px-5 py-2">
        {provas.map((prova, indice) => (
          <Linha key={prova.rotulo} prova={prova} ativo={visivel} indice={indice} />
        ))}
      </ul>
    </div>
  );
}
