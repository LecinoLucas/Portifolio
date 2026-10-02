import type { Principio } from "@/types";

export function PrincipleCard({ principio }: { principio: Principio }) {
  return (
    <div className="h-full rounded-lg border border-border bg-card p-5">
      <h3 className="text-lg font-semibold tracking-tight">{principio.titulo}</h3>
      <p className="mt-2 leading-relaxed text-foreground/80">{principio.descricao}</p>
    </div>
  );
}
