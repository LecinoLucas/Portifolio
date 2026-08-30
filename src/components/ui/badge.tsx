import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variantesBadge = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variante: {
        neutro: "border-transparent bg-secondary text-secondary-foreground",
        contorno: "border-border text-muted-foreground",
        primario: "border-transparent bg-primary/10 text-primary",
      },
    },
    defaultVariants: { variante: "neutro" },
  },
);

export interface PropsBadge
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof variantesBadge> {}

export function Badge({ className, variante, ...props }: PropsBadge) {
  return (
    <span className={cn(variantesBadge({ variante }), className)} {...props} />
  );
}
