import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, ExternalLink, ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/container";
import { links } from "@/data/links";
import {
  CANDIDATOS_INICIAIS,
  type CandidatoDemo,
  type EtapaPipeline,
} from "@/data/portal-rh-demo-data";
import { VagaView } from "@/components/portfolio/portal-rh/vaga-view";
import { PipelineView } from "@/components/portfolio/portal-rh/pipeline-view";
import { cn } from "@/lib/utils";

export function PortalRhDemoPage() {
  const [telaAtiva, setTelaAtiva] = useState<"vaga" | "pipeline">(() => {
    if (typeof window !== "undefined") {
      try {
        const param = new URLSearchParams(window.location.search).get("aba");
        if (param === "pipeline") return "pipeline";
      } catch {
        // Fallback silencioso caso window.location não esteja acessível
      }
    }
    return "vaga";
  });
  const [candidatos, setCandidatos] = useState<CandidatoDemo[]>(CANDIDATOS_INICIAIS);
  const [mostrarAderencia, setMostrarAderencia] = useState(true);
  const [ordenacao, setOrdenacao] = useState<"padrao" | "maior" | "menor">("padrao");
  const [reprovadosAberto, setReprovadosAberto] = useState(false);

  const moverCandidato = (id: string, novaEtapa: EtapaPipeline) => {
    setCandidatos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, etapa: novaEtapa } : c))
    );
  };

  const reiniciarDemo = () => {
    setCandidatos(CANDIDATOS_INICIAIS);
    setOrdenacao("padrao");
    setMostrarAderencia(true);
    setReprovadosAberto(false);
    setTelaAtiva("vaga");
  };

  const candidatosPorEtapa = useMemo(() => {
    const mapa: Record<EtapaPipeline, CandidatoDemo[]> = {
      entrada: [],
      triagem: [],
      entrevista_rh: [],
      entrevista_tecnica: [],
      final: [],
      proposta: [],
      contratado: [],
      reprovado: [],
    };

    const lista = [...candidatos];
    if (ordenacao === "maior") {
      lista.sort((a, b) => (b.aderencia ?? 0) - (a.aderencia ?? 0));
    } else if (ordenacao === "menor") {
      lista.sort((a, b) => (a.aderencia ?? 0) - (b.aderencia ?? 0));
    }

    for (const c of lista) {
      if (mapa[c.etapa]) {
        mapa[c.etapa].push(c);
      }
    }
    return mapa;
  }, [candidatos, ordenacao]);

  return (
    <div className="relative min-h-[calc(100vh-8rem)] pb-20">
      {/* 1. TOPO DA DEMONSTRAÇÃO COM IDENTIFICAÇÃO E AVISO OBRIGATÓRIO */}
      <div className="border-b border-border/80 bg-card/60 backdrop-blur-md">
        <Container className="py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Navegação de retorno e identificador MOD-03 */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                to="/projetos/portal-rh"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="size-3.5" />
                <span>Voltar ao estudo de caso</span>
              </Link>
              <span className="text-border">|</span>
              <span className="rounded border border-tech-cyan/40 bg-tech-cyan/10 px-2 py-0.5 font-mono text-[11px] font-bold text-tech-cyan">
                MOD-03
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Portal RH
              </span>
            </div>

            {/* Alternador de Telas e Ações da Demonstração */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-lg border border-border bg-background p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setTelaAtiva("vaga")}
                  className={cn(
                    "rounded-md px-3 py-1.5 transition-all cursor-pointer",
                    telaAtiva === "vaga"
                      ? "bg-primary text-primary-foreground shadow-xs font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Visão da Vaga
                </button>
                <button
                  type="button"
                  onClick={() => setTelaAtiva("pipeline")}
                  className={cn(
                    "rounded-md px-3 py-1.5 transition-all cursor-pointer",
                    telaAtiva === "pipeline"
                      ? "bg-primary text-primary-foreground shadow-xs font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Pipeline ({candidatos.length})
                </button>
              </div>

              <button
                type="button"
                onClick={reiniciarDemo}
                title="Restaurar dados iniciais da demonstração"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all cursor-pointer"
              >
                <RotateCcw className="size-3" />
                <span className="hidden sm:inline">Reiniciar demonstração</span>
              </button>

              <a
                href={links.portalRh.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 rounded-lg border border-border/70 px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-all"
              >
                <span className="hidden md:inline">GitHub</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Aviso obrigatório de dados fictícios */}
          <div className="mt-3.5 flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-500 dark:text-amber-400">
            <ShieldAlert className="size-3.5 shrink-0" />
            <span>Demonstração interativa — todos os dados são fictícios</span>
          </div>
        </Container>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (TELA 1 OU TELA 2) */}
      <Container className="pt-8">
        {telaAtiva === "vaga" ? (
          <VagaView
            onVisualizarPipeline={() => setTelaAtiva("pipeline")}
            totalCandidatos={candidatos.length}
            emEntrevistas={
              candidatosPorEtapa.entrevista_rh.length +
              candidatosPorEtapa.entrevista_tecnica.length
            }
            finalistas={candidatosPorEtapa.final.length}
            contratados={candidatosPorEtapa.contratado.length}
          />
        ) : (
          <PipelineView
            candidatosPorEtapa={candidatosPorEtapa}
            mostrarAderencia={mostrarAderencia}
            setMostrarAderencia={setMostrarAderencia}
            ordenacao={ordenacao}
            setOrdenacao={setOrdenacao}
            moverCandidato={moverCandidato}
            reprovadosAberto={reprovadosAberto}
            setReprovadosAberto={setReprovadosAberto}
          />
        )}
      </Container>
    </div>
  );
}
