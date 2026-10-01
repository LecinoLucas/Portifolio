interface PropsTechGroup {
  rotulo: string;
  itens: string[];
  numero?: string;
  descricao?: string;
}

/** Linha de tecnologia: rótulo (com etapa opcional) à esquerda, itens à direita. */
export function TechGroup({ rotulo, itens, numero, descricao }: PropsTechGroup) {
  return (
    <div className="grid gap-2 border-b border-border py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
      <div>
        <dt className="font-mono text-sm font-semibold text-primary">
          {numero ? <span className="mr-2 text-muted-foreground">{numero}</span> : null}
          {rotulo}
        </dt>
        {descricao ? <p className="mt-0.5 text-xs text-muted-foreground">{descricao}</p> : null}
      </div>
      <dd>
        <ul className="flex flex-wrap gap-1.5">
          {itens.map((item) => (
            <li key={item} className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs">
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}
