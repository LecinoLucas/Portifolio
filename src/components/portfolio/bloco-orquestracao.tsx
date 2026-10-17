import { Check } from "lucide-react";
import type { OrquestracaoIA } from "@/types";

/** Como construo com IA: orquestração de LLMs, skills, MCP e CI. */
export function BlocoOrquestracao({ dados }: { dados: OrquestracaoIA }) {
  return (
    <section aria-label={dados.titulo} className="rounded-lg border border-highlight/40 bg-card p-6 shadow-lg shadow-black/10">
      <h3 className="text-2xl font-semibold leading-snug tracking-tight">{dados.titulo}</h3>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85">{dados.texto}</p>
      <ul className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {dados.itens.map((item) => (
          <li key={item.nome} className="flex items-start gap-3">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-highlight" />
            <div>
              <span className="font-semibold">{item.nome}</span>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
