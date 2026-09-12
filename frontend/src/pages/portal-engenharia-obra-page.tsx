import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  RotateCcw,
  ShieldAlert,
  MapPin,
  Calendar,
  User,
  CheckCircle2,
  DollarSign,
  Wallet,
  Layers,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { usePortalEngenhariaDemo } from "@/context/portal-engenharia-demo-context";
import { PortalEngenhariaEapView } from "@/components/portfolio/portal-engenharia/portal-engenharia-eap-view";
import { PortalEngenhariaAprovarModal } from "@/components/portfolio/portal-engenharia/portal-engenharia-aprovar-modal";
import {
  STATUS_OBRA_CONFIG,
  type EtapaEapDemo,
} from "@/data/portal-engenharia-demo-data";
import { cn } from "@/lib/utils";

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);
}

export function PortalEngenhariaObraPage() {
  const { id } = useParams<{ id: string }>();
  const { getObra, getEap, aprovarEtapa, reiniciarDemo } = usePortalEngenhariaDemo();

  // Obra atual (fallback para Edifício Horizonte Sul se não encontrada)
  const obra = getObra(id ?? "edificio-horizonte-sul") ?? getObra("edificio-horizonte-sul")!;
  const etapas = getEap(obra.id);

  // Estados de modal e feedback
  const [etapaSelecionada, setEtapaSelecionada] = useState<EtapaEapDemo | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [feedbackSucesso, setFeedbackSucesso] = useState<string | null>(null);

  // Cálculos dinâmicos
  const saldoCalculado = obra.orcado - obra.realizado;
  const etapasAprovadas = etapas.filter((e) => e.statusAprovacao === "aprovada").length;
  const totalEtapas = etapas.length;
  const statusConfig = STATUS_OBRA_CONFIG[obra.status];

  const handleAbrirAprovacao = (etapa: EtapaEapDemo) => {
    setEtapaSelecionada(etapa);
    setModalAberto(true);
  };

  const handleConfirmarAprovacao = (etapaId: string) => {
    aprovarEtapa(obra.id, etapaId);
    setModalAberto(false);
    setFeedbackSucesso(`Macro-etapa aprovada com sucesso! Alçada de governança simulada validada.`);
  };

  return (
    <div className="relative min-h-[calc(100vh-8rem)] pb-20">
      {/* 1. Topo com Identificação e Aviso Obrigatório */}
      <div className="border-b border-border/80 bg-card/60 backdrop-blur-md">
        <Container className="py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Retorno ao Painel de Obras */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                to="/projetos/portal-engenharia/demo"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="size-3.5" />
                <span>Voltar ao painel de obras</span>
              </Link>
              <span className="text-border">|</span>
              <span className="rounded border border-tech-cyan/40 bg-tech-cyan/10 px-2 py-0.5 font-mono text-[11px] font-bold text-tech-cyan">
                MOD-01
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Portal de Engenharia
              </span>
            </div>

            {/* Ação de Reiniciar */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  reiniciarDemo();
                  setFeedbackSucesso(null);
                }}
                title="Restaurar estado inicial da demonstração"
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

      {/* 2. Conteúdo Principal da Tela 2 (Detalhamento da Obra) */}
      <Container className="pt-6 space-y-6">
        {/* Banner de Feedback de Sucesso */}
        {feedbackSucesso ? (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-500 dark:text-emerald-400 animate-in fade-in-50">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 shrink-0" />
              <span>{feedbackSucesso}</span>
            </div>
            <button
              type="button"
              onClick={() => setFeedbackSucesso(null)}
              className="text-muted-foreground hover:text-foreground cursor-pointer underline text-[11px]"
            >
              Fechar
            </button>
          </div>
        ) : null}

        {/* Cabeçalho da Obra */}
        <div className="rounded-xl border border-border/80 bg-card/70 p-5 sm:p-6 shadow-xs backdrop-blur-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="rounded border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs font-bold text-primary">
                {obra.codigo}
              </span>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                  statusConfig.corBadge
                )}
              >
                {statusConfig.label}
              </span>
            </div>

            {/* Indicador de Aprovação de Macro-Etapas */}
            <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs">
              <Layers className="size-4 text-tech-cyan" />
              <span className="text-muted-foreground">Macro-etapas aprovadas:</span>
              <span className="font-mono font-bold text-foreground">
                {etapasAprovadas} de {totalEtapas}
              </span>
              <span
                className={cn(
                  "ml-1 rounded px-1.5 py-0.2 text-[10px] font-bold",
                  etapasAprovadas === totalEtapas
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-amber-500/10 text-amber-500"
                )}
              >
                {etapasAprovadas}/{totalEtapas}
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              {obra.nome}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {obra.descricao}
            </p>
          </div>

          {/* Metadados: Local, Cronograma e Responsável Fictício */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/60 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-tech-cyan" />
              {obra.cidade}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5 text-tech-violet" />
              {obra.prazo}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
              <User className="size-3.5 text-primary" />
              Responsável técnico: <strong className="text-primary">{obra.responsavel}</strong>
            </span>
          </div>
        </div>

        {/* Grade de Indicadores Financeiros da Obra */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Orçamento Total */}
          <div className="rounded-xl border border-border/80 bg-card/60 p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Orçamento Total
              </span>
              <DollarSign className="size-4 text-tech-violet" />
            </div>
            <div className="mt-2">
              <span className="text-xl sm:text-2xl font-black text-foreground block">
                {formatarMoeda(obra.orcado)}
              </span>
              <span className="text-[11px] text-muted-foreground">planejamento da obra</span>
            </div>
          </div>

          {/* Realizado Acumulado */}
          <div className="rounded-xl border border-border/80 bg-card/60 p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Realizado Acumulado
              </span>
              <Wallet className="size-4 text-emerald-500" />
            </div>
            <div className="mt-2">
              <span className="text-xl sm:text-2xl font-black text-emerald-500 dark:text-emerald-400 block">
                {formatarMoeda(obra.realizado)}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {obra.progresso}% executado financeiramente
              </span>
            </div>
          </div>

          {/* Saldo Calculado */}
          <div className="rounded-xl border border-border/80 bg-card/60 p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Saldo Disponível
              </span>
              <CheckCircle2 className="size-4 text-tech-cyan" />
            </div>
            <div className="mt-2">
              <span className="text-xl sm:text-2xl font-black text-tech-cyan block">
                {formatarMoeda(saldoCalculado)}
              </span>
              <span className="text-[11px] text-muted-foreground">saldo a realizar</span>
            </div>
          </div>
        </div>

        {/* 3. Estrutura Analítica de Projeto (EAP) */}
        <PortalEngenhariaEapView
          etapas={etapas}
          onSolicitarAprovacao={handleAbrirAprovacao}
        />
      </Container>

      {/* Modal Acessível de Aprovação com Alçada Simulada */}
      <PortalEngenhariaAprovarModal
        etapa={etapaSelecionada}
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        onConfirmar={handleConfirmarAprovacao}
      />
    </div>
  );
}
