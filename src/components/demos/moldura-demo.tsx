import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface PropsMoldura {
  titulo: string;
  children: ReactNode;
}

/** Moldura de "janela de aplicativo" que sinaliza dados fictícios. */
export function MolduraDemo({ titulo, children }: PropsMoldura) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/60 px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <span className="truncate text-xs font-medium text-muted-foreground">{titulo}</span>
        <Badge variante="primario" className="shrink-0">
          Dados fictícios
        </Badge>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
