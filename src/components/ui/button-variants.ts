import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const variantesBotao = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variante: {
        primario: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secundario: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        contorno:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        fantasma: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      tamanho: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-6 text-[0.95rem]",
        icone: "size-10",
      },
    },
    defaultVariants: {
      variante: "primario",
      tamanho: "md",
    },
  },
);

export type VariantesBotao = VariantProps<typeof variantesBotao>;

/** Estilo de botão aplicável a `<a>` (CTAs que são links). */
export function classesBotao(opcoes?: VariantesBotao & { className?: string }) {
  const { className, ...variantes } = opcoes ?? {};
  return cn(variantesBotao(variantes), className);
}
