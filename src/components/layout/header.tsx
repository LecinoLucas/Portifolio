import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { itensNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

const idsSecoes = itensNav.map((item) => item.id);

export function Header() {
  const ativo = useScrollSpy(idsSecoes);
  const [comScroll, setComScroll] = useState(false);

  useEffect(() => {
    const aoScrollar = () => setComScroll(window.scrollY > 8);
    aoScrollar();
    window.addEventListener("scroll", aoScrollar, { passive: true });
    return () => window.removeEventListener("scroll", aoScrollar);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        comScroll
          ? "border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#topo"
          className="rounded-md text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Lecino&nbsp;Lucas
          <span className="ml-2 hidden text-xs font-normal text-muted-foreground sm:inline">
            Analista de Sistemas · Sustentação N2/N3
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegação principal"
        >
          {itensNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={ativo === item.id ? "true" : undefined}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground aria-[current]:text-foreground"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav ativo={ativo} />
        </div>
      </Container>
    </header>
  );
}
