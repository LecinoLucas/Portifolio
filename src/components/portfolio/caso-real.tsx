import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import type { CasoReal } from "@/types";

function Bloco({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-border pl-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{rotulo}</h4>
      <div className="mt-2 space-y-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** Relato de incidente real. Só é renderizado quando há fatos confirmados. */
export function CasoRealBloco({ caso }: { caso: CasoReal }) {
  return (
    <Reveal className="mt-14">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Caso real</h3>
      <p className="mt-3 text-lg font-semibold">{caso.titulo}</p>

      <div className="mt-6 space-y-6">
        <Bloco rotulo="Contexto">
          {caso.contexto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Bloco>

        <Bloco rotulo="O problema">
          <p>{caso.problema.texto}</p>
          <Lista itens={caso.problema.perguntas} />
        </Bloco>

        <Bloco rotulo="Investigação">
          {caso.investigacao.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <dl className="grid gap-2 sm:grid-cols-3">
            {caso.investigacao.tabelas.map((t) => (
              <div key={t.nome} className="rounded-lg border border-border bg-card p-3">
                <dt className="font-mono text-xs font-semibold text-primary">{t.nome}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{t.descricao}</dd>
              </div>
            ))}
          </dl>
          <p>{caso.investigacao.objetivo}</p>
        </Bloco>

        <Bloco rotulo="Raciocínio">
          <p>{caso.raciocinio}</p>
        </Bloco>

        <Bloco rotulo="Cuidados e riscos">
          <p>{caso.riscos.texto}</p>
          <Lista itens={caso.riscos.itens} />
        </Bloco>

        <Bloco rotulo="Resultado e aprendizado">
          <p>{caso.resultado}</p>
          <Lista itens={caso.aprendizado} />
        </Bloco>

        <div className="flex flex-wrap gap-2">
          {caso.competencias.map((c) => (
            <Badge key={c} variante="contorno">
              {c}
            </Badge>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
