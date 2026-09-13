import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projetos } from "@/data/projetos";
import type { FocoPerfil } from "@/types";

export function ProjectsPage() {
  const [filtro, setFiltro] = useState<FocoPerfil | "todos">("todos");

  // Filtra projetos excluindo aliases redundantes (import-nfe e conciliacao-bancaria-itau)
  const casosUnicos = useMemo(() => {
    return projetos.filter(
      (p) => p.slug !== "import-nfe" && p.slug !== "conciliacao-bancaria-itau"
    );
  }, []);

  const projetosFiltrados = useMemo(() => {
    if (filtro === "todos") return casosUnicos;
    return casosUnicos.filter((p) => p.focoPerfil === filtro || p.focoPerfil === "ambos");
  }, [filtro, casosUnicos]);

  return (
    <PageContainer
      rotulo="Casos reais e evidências"
      titulo="Casos Reais &amp; Evidências de Software"
      subtitulo="Soluções desenvolvidas para solucionar problemas operacionais, integrações com mTLS, auditoria de notas SEFAZ e sistemas de gestão corporativa."
    >
      {/* Barra de Filtros Úteis para Recrutadores e Gestores */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFiltro("todos")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filtro === "todos"
                ? "border border-primary/40 bg-primary text-primary-foreground shadow-xs"
                : "border border-border bg-card/70 text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            Todos os casos ({casosUnicos.length})
          </button>

          <button
            type="button"
            onClick={() => setFiltro("analista")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filtro === "analista"
                ? "border border-primary/40 bg-primary text-primary-foreground shadow-xs"
                : "border border-border bg-card/70 text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            Protheus &amp; Processos
          </button>

          <button
            type="button"
            onClick={() => setFiltro("fullstack")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filtro === "fullstack"
                ? "border border-primary/40 bg-primary text-primary-foreground shadow-xs"
                : "border border-border bg-card/70 text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            Integrações &amp; Software
          </button>
        </div>

        <div className="text-xs text-muted-foreground font-mono">
          Exibindo {projetosFiltrados.length} de {casosUnicos.length} casos reais
        </div>
      </div>

      {/* Grid de Casos Reais */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {projetosFiltrados.map((projeto) => (
          <ProjectCard key={projeto.slug} projeto={projeto} />
        ))}
      </div>
    </PageContainer>
  );
}
