import { useReveal } from "@/hooks/use-reveal";
import { useContador } from "@/hooks/use-contador";
import { provas, type Prova } from "@/data/provas";

function Numero({ prova, ativo }: { prova: Prova; ativo: boolean }) {
  const valor = useContador(prova.valor, ativo);
  return (
    <div className="rounded-lg border border-border bg-card/80 p-4">
      <p className="texto-gradiente font-mono text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span aria-hidden="true">{valor}{prova.sufixo}</span>
        <span className="sr-only">{prova.valor}{prova.sufixo}</span>
      </p>
      <p className="mt-1 text-sm leading-snug text-muted-foreground">{prova.rotulo}</p>
    </div>
  );
}

/** Faixa de números reais logo no Início. Os valores sobem contando ao aparecer. */
export function FaixaProvas() {
  const { ref, visivel } = useReveal<HTMLUListElement>();
  return (
    <ul ref={ref} aria-label="Números do meu trabalho" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {provas.map((prova) => (
        <li key={prova.rotulo}>
          <Numero prova={prova} ativo={visivel} />
        </li>
      ))}
    </ul>
  );
}
