import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PropsSectionHeading {
  rotulo: string;
  titulo: string;
  descricao?: ReactNode;
  className?: string;
  alinhamento?: "esquerda" | "centro";
}

/** Cabeçalho padrão de seção: rótulo curto + título + descrição opcional. */
export function SectionHeading({
  rotulo,
  titulo,
  descricao,
  className,
  alinhamento = "esquerda",
}: PropsSectionHeading) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        alinhamento === "centro" && "items-center text-center",
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        {rotulo}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{titulo}</h2>
      {descricao ? (
        <p
          className={cn(
            "max-w-2xl text-base text-muted-foreground",
            alinhamento === "centro" && "mx-auto",
          )}
        >
          {descricao}
        </p>
      ) : null}
    </div>
  );
}
