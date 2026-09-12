import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

const etapas = [
  { rotulo: "Requisito", detalhe: "Necessidade de negócio" },
  { rotulo: "LES", detalhe: "Padrão versionado" },
  { rotulo: "Contrato do projeto", detalhe: "AGENTS.md + arquitetura" },
  { rotulo: "Agente de IA", detalhe: "Executa dentro do contrato" },
  { rotulo: "Implementação", detalhe: "Resultado consistente" },
];

/** Fluxo do LES: horizontal no desktop, vertical no mobile. */
export function LesFlow() {
  return (
    <ol className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
      {etapas.map((etapa, indice) => (
        <Fragment key={etapa.rotulo}>
          <li className="flex-1 rounded-lg border border-border bg-card p-4 text-center">
            <p className="text-sm font-semibold tracking-tight">{etapa.rotulo}</p>
            <p className="mt-1 text-xs text-muted-foreground">{etapa.detalhe}</p>
          </li>
          {indice < etapas.length - 1 ? (
            <li
              aria-hidden="true"
              className="flex items-center justify-center text-muted-foreground"
            >
              <ArrowRight className="size-4 rotate-90 md:rotate-0" />
            </li>
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
