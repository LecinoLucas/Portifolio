import { useState } from "react";
import {
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowRightLeft,
  Building,
  HelpCircle,
} from "lucide-react";
import {
  type TituloProtheus,
  type LancamentoExtrato,
  TITULOS_PROTHEUS_INICIAIS,
  LANCAMENTOS_EXTRATO_INICIAIS,
} from "@/data/banking-demo-data";
import { cn } from "@/lib/utils";

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

const ESTILO_TITULO: Record<string, { card: string; badge: string; rotulo: string }> = {
  conciliado: {
    card: "border-emerald-500/30 bg-emerald-500/5",
    badge: "bg-emerald-500/15 text-emerald-500",
    rotulo: "Conciliado",
  },
  divergente: {
    card: "border-amber-500/40 bg-amber-500/5",
    badge: "bg-amber-500/15 text-amber-500",
    rotulo: "Com Divergência",
  },
  pendente: {
    card: "border-border/60 bg-background/50",
    badge: "bg-muted text-muted-foreground",
    rotulo: "Pendente",
  },
};

const ESTILO_EXTRATO: Record<string, { card: string; badge: string; rotulo: string }> = {
  conciliado_exato: {
    card: "border-emerald-500/30 bg-emerald-500/5",
    badge: "bg-emerald-500/15 text-emerald-500",
    rotulo: "Match Exato",
  },
  divergencia_valor: {
    card: "border-amber-500/40 bg-amber-500/5",
    badge: "bg-amber-500/15 text-amber-500",
    rotulo: "Divergência",
  },
  orfa_sem_titulo: {
    card: "border-purple-500/40 bg-purple-500/5",
    badge: "bg-purple-500/15 text-purple-400",
    rotulo: "Tarifa / Sem Título",
  },
  pendente: {
    card: "border-border/60 bg-background/50",
    badge: "bg-muted text-muted-foreground",
    rotulo: "Pendente",
  },
};

export function BankingConciliadorView() {
  const [titulos, setTitulos] = useState<TituloProtheus[]>(TITULOS_PROTHEUS_INICIAIS);
  const [extratos, setExtratos] = useState<LancamentoExtrato[]>(LANCAMENTOS_EXTRATO_INICIAIS);
  const [filtro, setFiltro] = useState<"todos" | "conciliados" | "divergentes" | "pendentes">("todos");
  const [conciliadoAutomatico, setConciliadoAutomatico] = useState(false);
  const [mensagemAcao, setMensagemAcao] = useState<string | null>(null);

  function executarConciliacaoAutomatica() {
    setTitulos((prev) =>
      prev.map((t) => {
        if (t.id === "tit-1" || t.id === "tit-2") {
          return { ...t, status: "conciliado" };
        }
        if (t.id === "tit-3") {
          return {
            ...t,
            status: "divergente",
            motivoDivergencia: "Débito bancário com R$ 28,50 de acréscimo (juros não cadastrados no Protheus).",
          };
        }
        return t;
      })
    );

    setExtratos((prev) =>
      prev.map((e) => {
        if (e.id === "ext-1" || e.id === "ext-2") {
          return { ...e, statusConciliacao: "conciliado_exato" };
        }
        if (e.id === "ext-3") {
          return { ...e, statusConciliacao: "divergencia_valor" };
        }
        return e;
      })
    );

    setConciliadoAutomatico(true);
    setMensagemAcao(
      "Conciliação automática processada: 2 títulos liquidados com match exato, 1 divergência de juros apontada e 1 tarifa avulsa identificada."
    );
  }

  function reiniciarConciliador() {
    setTitulos(TITULOS_PROTHEUS_INICIAIS);
    setExtratos(LANCAMENTOS_EXTRATO_INICIAIS);
    setConciliadoAutomatico(false);
    setMensagemAcao(null);
  }

  function aprovarDivergenciaJuros() {
    setTitulos((prev) =>
      prev.map((t) => (t.id === "tit-3" ? { ...t, status: "conciliado", motivoDivergencia: undefined } : t))
    );
    setExtratos((prev) =>
      prev.map((e) => (e.id === "ext-3" ? { ...e, statusConciliacao: "conciliado_exato" } : e))
    );
    setMensagemAcao("Divergência de juros do título TIT-08914 acatada com sucesso.");
  }

  const titulosFiltrados = titulos.filter((t) => {
    if (filtro === "conciliados") return t.status === "conciliado";
    if (filtro === "divergentes") return t.status === "divergente";
    if (filtro === "pendentes") return t.status === "pendente";
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Barra de Ações do Conciliador */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs">
        <div>
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <ArrowRightLeft className="size-4 text-emerald-500" />
            Motor de Conciliação Bancária &amp; CNAB 240
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Cruzamento do Contas a Pagar Protheus (Tabela SE2) com Extrato / Retorno Itaú.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!conciliadoAutomatico ? (
            <button
              type="button"
              onClick={executarConciliacaoAutomatica}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="size-3.5" />
              Executar Conciliação Automática
            </button>
          ) : (
            <button
              type="button"
              onClick={reiniciarConciliador}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all cursor-pointer"
            >
              <RotateCcw className="size-3.5 text-tech-cyan" />
              Restaurar Dados
            </button>
          )}
        </div>
      </div>

      {mensagemAcao && (
        <div className="flex items-center justify-between gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-500 dark:text-emerald-400">
          <span>{mensagemAcao}</span>
          <button
            type="button"
            onClick={() => setMensagemAcao(null)}
            className="text-[11px] underline cursor-pointer"
          >
            Fechar
          </button>
        </div>
      )}

      {/* Pílulas de Filtro */}
      <div className="flex flex-wrap items-center gap-2">
        {(["todos", "conciliados", "divergentes", "pendentes"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFiltro(item)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer border",
              filtro === item
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card/60 text-muted-foreground border-border/80 hover:text-foreground"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Grade de Confronto: Títulos SE2 vs Extrato Bancário */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Coluna 1: Títulos a Pagar no ERP Protheus (SE2) */}
        <div className="rounded-xl border border-border/80 bg-card/60 p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Building className="size-3.5 text-tech-cyan" />
              ERP Protheus — Contas a Pagar (SE2)
            </span>
            <span className="text-[11px] text-muted-foreground font-mono">
              {titulosFiltrados.length} títulos
            </span>
          </div>

          <div className="space-y-2.5">
            {titulosFiltrados.map((titulo) => {
              const estilo = ESTILO_TITULO[titulo.status] || ESTILO_TITULO.pendente;
              return (
                <div
                  key={titulo.id}
                  className={cn("rounded-lg border p-3 text-xs space-y-1.5 transition-all", estilo.card)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-foreground">
                      {titulo.codigoTitulo} · Parcela {titulo.parcela}
                    </span>
                    <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide", estilo.badge)}>
                      {estilo.rotulo}
                    </span>
                  </div>

                  <div className="text-muted-foreground text-[11px] truncate">{titulo.fornecedor}</div>

                  <div className="flex items-baseline justify-between pt-1 border-t border-border/40 font-mono">
                    <span className="text-muted-foreground text-[11px]">Venc: {titulo.vencimento}</span>
                    <span className="text-sm font-black text-foreground">{formatarMoeda(titulo.valorOriginal)}</span>
                  </div>

                  {titulo.motivoDivergencia && (
                    <div className="mt-1 rounded bg-amber-500/10 border border-amber-500/20 p-2 text-[11px] text-amber-400 space-y-1">
                      <p className="flex items-center gap-1 font-semibold">
                        <AlertTriangle className="size-3 shrink-0" />
                        {titulo.motivoDivergencia}
                      </p>
                      <button
                        type="button"
                        onClick={aprovarDivergenciaJuros}
                        className="mt-1 text-[10px] font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-2 py-1 rounded cursor-pointer transition-colors"
                      >
                        Acatar juros e conciliar título
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Coluna 2: Lançamentos de Extrato / Retorno CNAB 240 */}
        <div className="rounded-xl border border-border/80 bg-card/60 p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <ArrowRightLeft className="size-3.5 text-emerald-500" />
              Itaú Unibanco — Extrato &amp; Retorno Bancário
            </span>
            <span className="text-[11px] text-muted-foreground font-mono">Conta: 78912-3</span>
          </div>

          <div className="space-y-2.5">
            {extratos.map((lanc) => {
              const estilo = ESTILO_EXTRATO[lanc.statusConciliacao] || ESTILO_EXTRATO.pendente;
              return (
                <div
                  key={lanc.id}
                  className={cn("rounded-lg border p-3 text-xs space-y-1.5 transition-all", estilo.card)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground text-[11px]">
                      Doc: {lanc.documento} · {lanc.data}
                    </span>
                    <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase", estilo.badge)}>
                      {estilo.rotulo}
                    </span>
                  </div>

                  <div className="font-medium text-foreground text-[11px] truncate">{lanc.descricao}</div>

                  <div className="flex items-baseline justify-between pt-1 border-t border-border/40 font-mono">
                    <span className="text-[10px] text-muted-foreground">
                      {lanc.tituloVinculadoId ? "Título SE2 vinculado" : "Sem provisão no ERP"}
                    </span>
                    <span className="text-sm font-black text-rose-500 dark:text-rose-400">
                      {formatarMoeda(lanc.valor)}
                    </span>
                  </div>

                  {lanc.justificativa && (
                    <p className="mt-1 text-[10px] text-muted-foreground bg-card/60 p-1.5 rounded border border-border/60 flex items-start gap-1">
                      <HelpCircle className="size-3 text-tech-cyan shrink-0 mt-0.5" />
                      {lanc.justificativa}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
