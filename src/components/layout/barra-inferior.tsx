import { useState } from "react";
import { Briefcase, FolderKanban, Home, MoreHorizontal, User } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { itensNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

const PRINCIPAIS = [
  { id: "inicio", Icone: Home },
  { id: "sobre", Icone: User },
  { id: "experiencia", Icone: Briefcase },
  { id: "projetos", Icone: FolderKanban },
] as const;

interface PropsBarra {
  ativa: string;
  aoIr: (id: string) => void;
}

/** Barra de navegação de baixo, só no celular: as abas ao alcance do polegar. */
export function BarraInferior({ ativa, aoIr }: PropsBarra) {
  const [maisAberto, setMaisAberto] = useState(false);
  const idsPrincipais: string[] = PRINCIPAIS.map((p) => p.id);
  const outros = itensNav.filter((item) => !idsPrincipais.includes(item.id));
  const outroAtivo = outros.some((item) => item.id === ativa);
  const classeItem = (ativo: boolean) =>
    cn(
      "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 px-1 text-[0.7rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      ativo ? "text-primary" : "text-muted-foreground",
    );

  return (
    <nav
      aria-label="Navegação do celular"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur sm:hidden"
    >
      <ul className="flex">
        {PRINCIPAIS.map(({ id, Icone }) => {
          const item = itensNav.find((i) => i.id === id);
          return (
            <li key={id} className="flex flex-1">
              <button
                type="button"
                aria-current={ativa === id ? "page" : undefined}
                onClick={() => aoIr(id)}
                className={classeItem(ativa === id)}
              >
                <Icone aria-hidden="true" className="size-5" />
                {item?.rotulo}
              </button>
            </li>
          );
        })}
        <li className="flex flex-1">
          <Sheet open={maisAberto} onOpenChange={setMaisAberto}>
            <SheetTrigger className={classeItem(outroAtivo)} aria-label="Mais seções">
              <MoreHorizontal aria-hidden="true" className="size-5" />
              Mais
            </SheetTrigger>
            <SheetContent lado="bottom" rotuloFechar="Fechar menu">
              <div className="p-6">
                <SheetTitle>Mais seções</SheetTitle>
                <SheetDescription className="sr-only">Outras seções do portfólio</SheetDescription>
                <ul className="mt-4 space-y-2">
                  {outros.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          aoIr(item.id);
                          setMaisAberto(false);
                        }}
                        className="w-full rounded-lg border border-border bg-card p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="block text-lg font-bold">{item.rotulo}</span>
                        <span className="block text-sm text-muted-foreground">{item.descricao}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </li>
      </ul>
    </nav>
  );
}
