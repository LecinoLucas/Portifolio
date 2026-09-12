import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projetos } from "@/data/projetos";
import type { FocoPerfil } from "@/types";

export function ProjectsPage() {
  const [filtro, setFiltro] = useState<FocoPerfil | "todos">("todos");

  const projetosFiltrados = useMemo(() => {
    if (filtro === "todos") return projetos;
    return projetos.filter((p) => p.focoPerfil === filtro || p.focoPerfil === "ambos");
  }, [filtro]);

  return (
    <PageContainer
      rotulo="Catálogo de Módulos em Produção"
      titulo="Módulos Tecnológicos &amp; Estudos de Caso"
      subtitulo="Aplicações corporativas reais comprovando atuação em regras de negócio, APIs bancárias com mTLS, ERP e arquiteturas escaláveis."
    >
      {/* Barra de Filtros e Status do Catálogo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFiltro("todos")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              filtro === "todos"
                ? "border border-primary/40 bg-primary text-primary-foreground shadow-sm"
                : "border border-border bg-card/70 text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            Todos os módulos ({projetos.length})
          </button>

          <button
            type="button"
            onClick={() => setFiltro("analista")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              filtro === "analista"
                ? "border border-tech-violet/40 bg-tech-violet text-white shadow-sm"
                : "border border-border bg-card/70 text-muted-foreground hover:text-foreground hover:border-tech-violet/40"
            }`}
          >
            Analista &amp; Protheus
          </button>

          <button
            type="button"
            onClick={() => setFiltro("fullstack")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              filtro === "fullstack"
                ? "border border-tech-cyan/40 bg-tech-cyan text-foreground shadow-sm"
                : "border border-border bg-card/70 text-muted-foreground hover:text-foreground hover:border-tech-cyan/40"
            }`}
          >
            Full Stack &amp; Web
          </button>
        </div>

        <div className="text-xs text-muted-foreground font-mono">
          Exibindo {projetosFiltrados.length} de {projetos.length} módulos
        </div>
      </div>

      {/* Grid do Catálogo de Módulos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projetosFiltrados.map((projeto) => (
          <ProjectCard key={projeto.slug} projeto={projeto} />
        ))}
      </div>
    </PageContainer>
  );
}
