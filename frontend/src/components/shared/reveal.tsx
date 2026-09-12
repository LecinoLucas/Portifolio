import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface PropsReveal {
  children: ReactNode;
  className?: string;
  /** Atraso em ms para efeito escalonado. */
  atraso?: number;
  as?: ElementType;
}

/** Aparição suave ao entrar na viewport. Inerte sob prefers-reduced-motion. */
export function Reveal({ children, className, atraso = 0, as }: PropsReveal) {
  const Componente = as ?? "div";
  const { ref, visivel } = useReveal<HTMLDivElement>();

  return (
    <Componente
      ref={ref}
      className={cn("reveal", className)}
      data-visible={visivel}
      style={atraso ? { transitionDelay: `${atraso}ms` } : undefined}
    >
      {children}
    </Componente>
  );
}
