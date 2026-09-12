import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, ShieldAlert, Search, XCircle, RotateCw } from "lucide-react";
import { Container } from "@/components/layout/container";
import { usePortalEngenhariaDemo } from "@/context/portal-engenharia-demo-context";
import { PortalEngenhariaKpis } from "@/components/portfolio/portal-engenharia/portal-engenharia-kpis";
import { PortalEngenhariaObraCard } from "@/components/portfolio/portal-engenharia/portal-engenharia-obra-card";
import type { StatusObra } from "@/data/portal-engenharia-demo-data";
import { cn } from "@/lib/utils";

const STATUS_FILTROS: { id: "todos" | StatusObra; rotulo: string }[] = [
  { id: "todos", rotulo: "Todas" },
  { id: "em_andamento", rotulo: "Em andamento" },
  { id: "planejamento", rotulo: "Planejamento" },
  { id: "concluida", rotulo: "Concluídas" },
];

export function PortalEngenhariaDemoPage() {
  const {
    busca,
    setBusca,
    statusFiltro,
    setStatusFiltro,
    obrasFiltradas,
    kpis,
    reiniciarDemo,
    resetFiltros,
  } = usePortalEngenhariaDemo();

  return (
    <div className="relative min-h-[calc(100vh-8rem)] pb-20">
      {/* 1. Topo com Identificação e Aviso Obrigatório */}
      <div className="border-b border-border/80 bg-card/60 backdrop-blur-md">
        <Container className="py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Navegação de retorno e identificador MOD-01 */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                to="/projetos/portal-engenharia"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="size-3.5" />
                <span>Voltar ao estudo de caso</span>
              </Link>
              <span className="text-border">|</span>
              <span className="rounded border border-tech-cyan/40 bg-tech-cyan/10 px-2 py-0.5 font-mono text-[11px] font-bold text-tech-cyan">
                MOD-01
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Portal de Engenharia
              </span>
            </div>

            {/* Ação de Reiniciar Demonstração */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={reiniciarDemo}
                title="Restaurar dados iniciais da demonstração"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all cursor-pointer"
              >
                <RotateCcw className="size-3 text-tech-cyan" />
                <span>Reiniciar demonstração</span>
              </button>
            </div>
          </div>

          {/* Banner Obrigatório Permanente */}
          <div className="mt-3.5 flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-500 dark:text-amber-400">
            <ShieldAlert className="size-3.5 shrink-0" />
            <span>Demonstração interativa — todos os dados são fictícios.</span>
          </div>
        </Container>
      </div>

      {/* 2. Conteúdo Principal da Tela 1 (Painel Executivo de Obras) */}
      <Container className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
        {/* Título da Seção */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Painel Executivo de Obras
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Acompanhamento corporativo de obras, indicadores de investimento e avanço físico-financeiro.
          </p>
        </div>

        {/* KPIs Consolidados */}
        <PortalEngenhariaKpis kpis={kpis} />

        {/* Barra de Filtros e Busca */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
          {/* Abas de Status */}
          <div className="flex flex-wrap items-center gap-1.5">
            {STATUS_FILTROS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setStatusFiltro(f.id)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-all cursor-pointer",
                  statusFiltro === f.id
                    ? "bg-primary text-primary-foreground font-bold shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {f.rotulo}
              </button>
            ))}
          </div>

          {/* Campo de Busca e Botão Restaurar Filtros */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar por nome, código ou cidade..."
                className="w-full rounded-lg border border-border bg-card pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              />
              {busca ? (
                <button
                  type="button"
                  onClick={() => setBusca("")}
                  aria-label="Limpar campo de busca"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <XCircle className="size-3.5" />
                </button>
              ) : null}
            </div>

            {(busca || statusFiltro !== "todos") && (
              <button
                type="button"
                onClick={resetFiltros}
                title="Restaurar filtros e busca"
                className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <RotateCw className="size-3" />
                <span className="hidden sm:inline">Restaurar filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Grid de Cards ou Estado Vazio */}
        {obrasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {obrasFiltradas.map((obra) => (
              <PortalEngenhariaObraCard key={obra.id} obra={obra} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/80 p-10 text-center space-y-3 bg-card/30">
            <div className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Search className="size-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">
                Nenhuma obra encontrada
              </h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                Nenhum projeto corresponde aos critérios de busca ou filtros selecionados.
              </p>
            </div>
            <button
              type="button"
              onClick={resetFiltros}
              className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 cursor-pointer transition-colors"
            >
              Restaurar filtros
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
