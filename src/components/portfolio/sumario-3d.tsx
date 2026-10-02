import { ArrowUpRight } from "lucide-react";
import { useInclinacao } from "@/hooks/use-inclinacao";
import { itensNav, type ItemNav } from "@/lib/nav";

function Cartao({ item, indice, aoIr }: { item: ItemNav; indice: number; aoIr: (id: string) => void }) {
  const { ref, aoMover, aoSair } = useInclinacao<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={`#${item.id}`}
      onClick={(e) => {
        e.preventDefault();
        aoIr(item.id);
      }}
      onPointerMove={aoMover}
      onPointerLeave={aoSair}
      style={{ animationDelay: `${indice * 0.35}s` }}
      className="cartao-3d group block rounded-lg border border-border bg-card p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="cartao-3d-brilho" aria-hidden="true" />
      <span className="cartao-3d-conteudo flex h-full flex-col">
        <span className="flex items-center justify-between font-mono text-sm text-primary">
          {String(indice + 1).padStart(2, "0")}
          <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <span className="mt-4 block text-xl font-bold tracking-tight">{item.rotulo}</span>
        <span className="mt-1 block text-sm text-muted-foreground">{item.descricao}</span>
      </span>
    </a>
  );
}

/** Sumário do portfólio em cartões 3D: um atalho rápido para cada aba. */
export function Sumario3D({ aoIr }: { aoIr: (id: string) => void }) {
  const itens = itensNav.filter((item) => item.id !== "inicio");

  return (
    <nav aria-label="Sumário do portfólio">
      <ul className="sumario-3d grid grid-cols-2 gap-4 sm:grid-cols-3">
        {itens.map((item, indice) => (
          <li key={item.id}>
            <Cartao item={item} indice={indice} aoIr={aoIr} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
