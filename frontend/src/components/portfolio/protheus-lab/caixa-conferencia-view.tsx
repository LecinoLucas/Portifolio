import { useState } from "react";
import {
  Wallet,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  FileCheck2,
} from "lucide-react";
import {
  FECHAMENTO_CAIXA_INICIAL,
} from "@/data/protheus-lab-demo-data";
import { cn } from "@/lib/utils";

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export function CaixaConferenciaView() {
  const fechamento = FECHAMENTO_CAIXA_INICIAL;
  const [dinheiroContado, setDinheiroContado] = useState<number>(FECHAMENTO_CAIXA_INICIAL.saldoGavetaContado);
  const [caixaFechado, setCaixaFechado] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const diferencaGaveta = dinheiroContado - fechamento.saldoGavetaEsperado;

  function handleSalvarFechamento() {
    setCaixaFechado(true);
    if (diferencaGaveta === 0) {
      setFeedback(
        "Fechamento de caixa homologado com conferência exata (R$ 0,00 de diferença). Lote contábil CT2-2026-0912-0042 gerado no Protheus."
      );
    } else if (diferencaGaveta > 0) {
      setFeedback(
        `Fechamento de caixa concluído com SOBRA de ${formatarMoeda(diferencaGaveta)}. Registrado lançamento de sobra de caixa.`
      );
    } else {
      setFeedback(
        `Fechamento de caixa concluído com FALTA de ${formatarMoeda(Math.abs(diferencaGaveta))}. Registrado lançamento de ressarcimento/termo de conferência.`
      );
    }
  }

  function reiniciar() {
    setDinheiroContado(FECHAMENTO_CAIXA_INICIAL.saldoGavetaContado);
    setCaixaFechado(false);
    setFeedback(null);
  }

  return (
    <div className="space-y-6">
      {/* Resumo do Turno */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs">
        <div>
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Wallet className="size-4 text-emerald-500" />
            Conferência & Fechamento de Caixa de Ponto de Venda
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {fechamento.caixaId} · {fechamento.turno} · Operador: {fechamento.operador}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!caixaFechado ? (
            <button
              type="button"
              onClick={handleSalvarFechamento}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <FileCheck2 className="size-3.5" />
              Homologar Fechamento (CT2)
            </button>
          ) : (
            <button
              type="button"
              onClick={reiniciar}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all cursor-pointer"
            >
              <RotateCcw className="size-3.5 text-tech-cyan" />
              Reiniciar Simulação
            </button>
          )}
        </div>
      </div>

      {feedback && (
        <div
          className={cn(
            "flex items-center justify-between gap-2 rounded-lg border p-3 text-xs",
            diferencaGaveta === 0
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
              : "border-amber-500/30 bg-amber-500/10 text-amber-500"
          )}
        >
          <div className="flex items-center gap-2">
            {diferencaGaveta === 0 ? (
              <CheckCircle2 className="size-4 shrink-0" />
            ) : (
              <AlertCircle className="size-4 shrink-0" />
            )}
            <span>{feedback}</span>
          </div>
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-[11px] underline cursor-pointer"
          >
            Fechar
          </button>
        </div>
      )}

      {/* Indicadores do Caixa */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        <div className="rounded-xl border border-border/80 bg-card/60 p-3 shadow-xs">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase">
            Total Vendas Sistema
          </span>
          <span className="text-base sm:text-xl font-black text-foreground block mt-1">
            {formatarMoeda(fechamento.totalVendasSistema)}
          </span>
          <span className="text-[10px] text-muted-foreground">soma de todas as formas</span>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/60 p-3 shadow-xs">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase">
            Sangrias p/ Cofre
          </span>
          <span className="text-base sm:text-xl font-black text-rose-500 block mt-1">
            - {formatarMoeda(fechamento.totalSangrias)}
          </span>
          <span className="text-[10px] text-muted-foreground">retiradas com comprovante</span>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/60 p-3 shadow-xs">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase">
            Saldo Esperado (Gaveta)
          </span>
          <span className="text-base sm:text-xl font-black text-tech-cyan block mt-1">
            {formatarMoeda(fechamento.saldoGavetaEsperado)}
          </span>
          <span className="text-[10px] text-muted-foreground">troco inicial + dinheiro - sangrias</span>
        </div>

        <div
          className={cn(
            "rounded-xl border p-3 shadow-xs",
            diferencaGaveta === 0
              ? "border-emerald-500/40 bg-emerald-500/5"
              : "border-amber-500/40 bg-amber-500/5"
          )}
        >
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase">
            Diferença Apurada
          </span>
          <span
            className={cn(
              "text-base sm:text-xl font-black block mt-1",
              diferencaGaveta === 0
                ? "text-emerald-500"
                : diferencaGaveta > 0
                ? "text-blue-400"
                : "text-rose-500"
            )}
          >
            {formatarMoeda(diferencaGaveta)}
          </span>
          <span className="text-[10px] text-muted-foreground">
            {diferencaGaveta === 0 ? "Caixa 100% exato" : diferencaGaveta > 0 ? "Sobra de caixa" : "Falta de caixa"}
          </span>
        </div>
      </div>

      {/* Tabela de Conferência por Forma de Pagamento */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Detalhamento por Modalidade de Pagamento
          </span>
          <span className="text-[11px] text-muted-foreground font-mono">
            Protheus SIGALOJA / SIGAFIN
          </span>
        </div>

        <div className="space-y-2">
          {fechamento.itens.map((item) => (
            <div
              key={item.formaPagamento}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg border border-border/60 bg-background/50 p-3 text-xs"
            >
              <div>
                <span className="font-bold text-foreground block">{item.formaPagamento}</span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  Registrado no ERP: {formatarMoeda(item.valorSistema)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {item.tipo === "dinheiro" ? (
                  <div className="flex items-center gap-2">
                    <label htmlFor="dinheiro-input" className="text-[11px] text-muted-foreground">
                      Contagem física:
                    </label>
                    <input
                      id="dinheiro-input"
                      type="number"
                      step="10"
                      value={dinheiroContado}
                      onChange={(e) => setDinheiroContado(Number(e.target.value) || 0)}
                      disabled={caixaFechado}
                      className="w-28 rounded border border-border bg-card px-2 py-1 font-mono text-xs font-bold text-foreground focus:outline-hidden focus:border-primary"
                    />
                  </div>
                ) : (
                  <span className="font-mono text-xs font-bold text-foreground">
                    {formatarMoeda(item.valorContado)}
                  </span>
                )}

                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/15 text-emerald-500">
                  Conciliado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
