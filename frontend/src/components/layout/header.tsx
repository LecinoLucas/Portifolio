import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { itensNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Header() {
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
          ? "border-border/80 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-xs"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex items-center gap-2 rounded-md text-sm font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-2 rounded-full bg-primary transition-transform group-hover:scale-125 shrink-0" />
          <span className="text-foreground">Lecino Lucas</span>
          <span className="ml-1.5 hidden rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary xl:inline">
            Sistemas &amp; Processos
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal por rotas"
        >
          {itensNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-150",
                  isActive
                    ? "border border-primary/30 bg-primary/15 text-primary shadow-xs"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )
              }
            >
              {item.rotulo}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
