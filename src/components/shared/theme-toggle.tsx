import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTema } from "@/hooks/use-tema";

export function ThemeToggle() {
  const { tema, alternar } = useTema();
  const proximo = tema === "dark" ? "claro" : "escuro";

  return (
    <Button
      variante="contorno"
      tamanho="icone"
      onClick={alternar}
      aria-label={`Ativar tema ${proximo}`}
      title={`Ativar tema ${proximo}`}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </Button>
  );
}
