import { Download } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";
import { itensNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface PropsHeader {
  ativa: string;
  aoIr: (id: string) => void;
}

/** Barra fixa no topo: cada item mostra uma seção por vez. */
export function Header({ ativa, aoIr }: PropsHeader) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pt-2 lg:h-16 lg:flex-nowrap lg:py-0">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            aoIr("inicio");
          }}
          className="rounded-md font-mono text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Lecino&nbsp;Lucas
          <span className="ml-2 hidden whitespace-nowrap text-xs font-normal text-muted-foreground 2xl:inline">
            Analista de Sistemas · N1/N2
          </span>
        </a>

        <nav
          aria-label="Seções"
          className="order-last -mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 lg:order-none lg:mx-0 lg:w-auto lg:overflow-visible lg:px-0"
        >
          <ul className="flex min-w-max items-center gap-1">
            {itensNav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={ativa === item.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    aoIr(item.id);
                  }}
                  className={cn(
                    "block whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-medium transition-colors",
                    ativa === item.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={links.curriculo}
            download
            aria-label="Baixar currículo"
            className={classesBotao({ variante: "contorno", tamanho: "icone", className: "sm:w-auto sm:px-3" })}
          >
            <Download />
            <span className="hidden sm:inline">Currículo</span>
          </a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
