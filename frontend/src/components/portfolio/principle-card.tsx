import type { Principio } from "@/types";

export function PrincipleCard({ principio }: { principio: Principio }) {
  return (
    <div className="border-l-2 border-primary/40 pl-4">
      <h3 className="text-sm font-semibold tracking-tight">{principio.titulo}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {principio.descricao}
      </p>
    </div>
  );
}
