import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { classesBotao } from "@/components/ui/button-variants";
import { itensNav } from "@/lib/nav";
import { links } from "@/data/links";

interface PropsMobileNav {
  ativo: string | null;
}

export function MobileNav({ ativo }: PropsMobileNav) {
  const [aberto, setAberto] = useState(false);

  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetTrigger asChild>
        <Button
          variante="contorno"
          tamanho="icone"
          className="md:hidden"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent
        lado="right"
        className="w-72"
        rotuloFechar="Fechar menu"
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle>Navegação</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-3 py-2" aria-label="Navegação principal (mobile)">
          {itensNav.map((item) => (
            <SheetClose asChild key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={ativo === item.id ? "true" : undefined}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground aria-[current]:bg-accent aria-[current]:text-accent-foreground"
              >
                {item.rotulo}
              </a>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto border-t border-border p-4">
          <a
            href={links.curriculo}
            download
            className={classesBotao({ variante: "primario", className: "w-full" })}
          >
            Baixar currículo
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
