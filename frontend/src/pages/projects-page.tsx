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
      rotulo="Casos Reais em Produção"
      titulo="Projetos &amp; Estudos de Caso"
      subtitulo="Sistemas corporativos entregues em produção comprovando atuação em regras de negócio, APIs bancárias com mTLS, ERP e arquiteturas escaláveis."
    >
      {/* Barra de Filtros */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFiltro("todos")}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
            filtro === "todos"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          Todos os projetos ({projetos.length})
        </button>

        <button
          type="button"
          onClick={() => setFiltro("analista")}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
            filtro === "analista"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          Analista &amp; Protheus
        </button>

        <button
          type="button"
          onClick={() => setFiltro("fullstack")}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
            filtro === "fullstack"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          Full Stack &amp; Web
        </button>
      </div>

      {/* Grid de Projetos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projetosFiltrados.map((projeto) => (
          <ProjectCard key={projeto.slug} projeto={projeto} />
        ))}
      </div>
    </PageContainer>
  );
}
