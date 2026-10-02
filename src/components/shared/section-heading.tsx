import type { ReactNode } from "react";
import { Rotulo } from "@/components/shared/rotulo";
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
      <Rotulo como="span">{rotulo}</Rotulo>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{titulo}</h2>
      {descricao ? (
        <p
          className={cn(
            "max-w-2xl text-lg text-foreground/80",
            alinhamento === "centro" && "mx-auto",
          )}
        >
          {descricao}
        </p>
      ) : null}
    </div>
  );
}
