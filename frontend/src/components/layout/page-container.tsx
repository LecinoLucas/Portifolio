import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface PropsPageContainer {
  titulo: string;
  subtitulo?: string;
  rotulo?: string;
  children: ReactNode;
  className?: string;
}

export function PageContainer({
  titulo,
  subtitulo,
  rotulo,
  children,
  className,
}: PropsPageContainer) {
  return (
    <div className={cn("relative min-h-[calc(100vh-4rem)] pt-8 pb-24 sm:pt-14 sm:pb-28", className)}>
      <Container>
        {/* Header da Página */}
        <header className="mb-10 max-w-3xl space-y-3">
          {rotulo ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {rotulo}
            </span>
          ) : null}
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {titulo}
          </h1>
          {subtitulo ? (
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitulo}
            </p>
          ) : null}
        </header>

        {/* Conteúdo dinâmico da página */}
        <div className="space-y-12">{children}</div>
      </Container>
    </div>
  );
}
