import { Card } from "@/components/ui/card";
import type { GrupoTecnologia } from "@/types";

export function TechGroup({ grupo }: { grupo: GrupoTecnologia }) {
  return (
    <Card className="p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
        {grupo.dominio}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-muted-foreground">
        {grupo.itens.map((item, indice) => (
          <li key={item} className="flex items-center gap-2">
            {indice > 0 ? (
              <span aria-hidden="true" className="size-1 rounded-full bg-border" />
            ) : null}
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
