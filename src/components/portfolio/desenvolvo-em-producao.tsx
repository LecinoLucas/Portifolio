import { Rocket } from "lucide-react";
import { projetos } from "@/data/projetos";

/** Faixa do Início: deixa claro que também desenvolvo, com sistemas reais em produção. */
export function DesenvolvoEmProducao({ aoIr }: { aoIr: (id: string) => void }) {
  const emProducao = projetos.filter((p) => p.situacao === "producao");

  return (
    <section aria-labelledby="dev-producao" className="rounded-lg border border-border bg-card/80 p-5">
      <h3 id="dev-producao" className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
        <Rocket aria-hidden="true" className="size-4" /> Também desenvolvo, em produção
      </h3>
      <p className="mt-2 text-lg leading-relaxed text-foreground/85">
        Sistemas reais, em uso, do requisito à entrega, com integrações ao ERP e a bancos.
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {emProducao.map((p) => (
          <li key={p.slug}>
            <a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault();
                aoIr("projetos");
              }}
              className="inline-flex items-center rounded-md border border-primary/40 px-3 py-1.5 font-mono text-sm font-medium text-foreground transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {p.titulo}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
