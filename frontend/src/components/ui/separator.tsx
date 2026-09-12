import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PropsSeparador extends HTMLAttributes<HTMLDivElement> {
  orientacao?: "horizontal" | "vertical";
}

export function Separator({
  className,
  orientacao = "horizontal",
  ...props
}: PropsSeparador) {
  return (
    <div
      role="separator"
      aria-orientation={orientacao}
      className={cn(
        "shrink-0 bg-border",
        orientacao === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      {...props}
    />
  );
}
