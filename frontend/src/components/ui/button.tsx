import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { variantesBotao, type VariantesBotao } from "@/components/ui/button-variants";

export interface PropsBotao
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantesBotao {}

export const Button = forwardRef<HTMLButtonElement, PropsBotao>(
  ({ className, variante, tamanho, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(variantesBotao({ variante, tamanho }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
