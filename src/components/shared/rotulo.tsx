import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PropsRotulo {
  children: ReactNode;
  como?: ElementType;
  className?: string;
}

/** Rótulo de seção com um ponto redondo à esquerda. */
export function Rotulo({ children, como: Tag = "h3", className }: PropsRotulo) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary",
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-primary" />
      {children}
    </Tag>
  );
}
