import { useState, useMemo } from "react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projetos } from "@/data/projetos";
import type { FocoPerfil } from "@/types";

export function Projects() {
  const [filtro, setFiltro] = useState<FocoPerfil | "todos">("todos");

  const projetosFiltrados = useMemo(() => {
    if (filtro === "todos") return projetos;
    return projetos.filter((p) => p.focoPerfil === filtro || p.focoPerfil === "ambos");
  }, [filtro]);

  return (
    <Section id="projetos">
      <SectionHeading
        rotulo="Projetos &amp; Estudos de Caso"
        titulo="Sistemas e integrações reais em produção"
        descricao="Casos práticos demonstrando atuação completa em regras de negócio, APIs bancárias, ERP e desenvolvimento de software. Cada projeto abre um estudo de caso aprofundado."
      />

      {/* Filtro contextual */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFiltro("todos")}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
            filtro === "todos"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          Todos os projetos ({projetos.length})
        </button>

        <button
          type="button"
          onClick={() => setFiltro("analista")}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
            filtro === "analista"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          Analista &amp; Protheus
        </button>

        <button
          type="button"
          onClick={() => setFiltro("fullstack")}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
            filtro === "fullstack"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          Full Stack &amp; Web
        </button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projetosFiltrados.map((projeto, indice) => (
          <Reveal key={projeto.slug} atraso={(indice % 3) * 70} className="h-full">
            <ProjectCard projeto={projeto} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
