import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, MessageCircle, Download } from "lucide-react";
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
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [aberto, setAberto] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return new URLSearchParams(window.location.search).get("menu") === "aberto";
    } catch {
      return false;
    }
  });

  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetTrigger asChild>
        <Button
          variante="contorno"
          tamanho="icone"
          className="lg:hidden"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent
        lado="right"
        className="w-[85vw] max-w-xs flex flex-col justify-between overflow-y-auto"
        rotuloFechar="Fechar menu"
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle className="text-left text-sm font-bold uppercase tracking-wider text-primary">
            Navegação do Sistema
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-2 py-4" aria-label="Navegação mobile por rotas">
          {itensNav.map((item) => (
            <SheetClose asChild key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "border border-primary/30 bg-primary/15 text-primary shadow-xs"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                  )
                }
              >
                {item.rotulo}
              </NavLink>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto border-t border-border p-4 space-y-2.5">
          <a
            href={links.whatsapp.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-500"
          >
            <MessageCircle className="size-4" />
            <span>Falar no WhatsApp</span>
          </a>

          <a
            href={links.curriculo}
            download
            className={classesBotao({ variante: "contorno", className: "w-full justify-center text-xs" })}
          >
            <Download className="size-3.5" />
            <span>Baixar currículo (PDF)</span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
