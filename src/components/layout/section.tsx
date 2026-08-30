import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface PropsSection extends HTMLAttributes<HTMLElement> {
  id: string;
  children: ReactNode;
  /** Fundo alternado para ritmo visual entre seções. */
  alternado?: boolean;
}

/** Wrapper de seção com âncora, espaçamento vertical e Container. */
export function Section({
  id,
  children,
  alternado = false,
  className,
  ...props
}: PropsSection) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-border/60 py-16 sm:py-24",
        alternado && "bg-muted/40",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
