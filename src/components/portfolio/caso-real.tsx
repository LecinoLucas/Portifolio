import { Reveal } from "@/components/shared/reveal";
import type { CasoReal } from "@/types";

const CAMPOS: { chave: keyof Omit<CasoReal, "titulo">; rotulo: string }[] = [
  { chave: "sintoma", rotulo: "Sintoma" },
  { chave: "divergencia", rotulo: "Divergência" },
  { chave: "investigacao", rotulo: "Investigação" },
  { chave: "causaRaiz", rotulo: "Causa raiz" },
  { chave: "correcao", rotulo: "Correção" },
  { chave: "validacao", rotulo: "Validação" },
  { chave: "resultado", rotulo: "Resultado" },
];

/** Relato de incidente real. Só é renderizado quando há fatos confirmados. */
export function CasoRealBloco({ caso }: { caso: CasoReal }) {
  return (
    <Reveal className="mt-14">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Caso real</h3>
      <p className="mt-3 text-lg font-semibold">{caso.titulo}</p>
      <dl className="mt-4 space-y-4">
        {CAMPOS.map(({ chave, rotulo }) => (
          <div key={chave} className="border-l-2 border-border pl-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{rotulo}</dt>
            <dd className="mt-1 text-sm leading-relaxed">{caso[chave]}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
