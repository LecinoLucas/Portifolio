import { useState } from "react";
import { CheckCircle2, AlertCircle, FileText, Check, ShieldCheck } from "lucide-react";
import { type BoletoDDA, BOLETOS_DDA_INICIAIS } from "@/data/banking-demo-data";
import { cn } from "@/lib/utils";

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export function BankingDdaView() {
  const [boletos, setBoletos] = useState<BoletoDDA[]>(BOLETOS_DDA_INICIAIS);
  const [feedback, setFeedback] = useState<string | null>(null);

  function autorizarBoleto(id: string) {
    setBoletos((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "autorizado" } : b))
    );
    setFeedback("Boleto autorizado para liquidação automática via remessa Itaú.");
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs space-y-1">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-tech-cyan" />
          <h2 className="text-base font-bold text-foreground">
            Painel DDA — Débito Direto Autorizado
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">
          Varredura eletrônica na CIP / Febraban de todos os boletos emitidos contra o CNPJ corporativo, confrontando com pedidos de compras e títulos do Protheus.
        </p>
      </div>

      {feedback && (
        <div className="flex items-center justify-between gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-500 dark:text-emerald-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4" />
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

      {/* Lista de Boletos DDA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {boletos.map((boleto) => (
          <div
            key={boleto.id}
            className={cn(
              "rounded-xl border p-4 text-xs space-y-3 bg-card/60 transition-all shadow-xs",
              boleto.status === "autorizado"
                ? "border-emerald-500/40 bg-emerald-500/5"
                : boleto.status === "sem_pedido"
                ? "border-amber-500/40 bg-amber-500/5"
                : "border-border/80"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono text-[11px] text-muted-foreground">
                Captura: {boleto.dataCaptura}
              </span>
              <span
                className={cn(
                  "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                  boleto.status === "autorizado"
                    ? "bg-emerald-500/15 text-emerald-500"
                    : boleto.status === "sem_pedido"
                    ? "bg-amber-500/15 text-amber-400"
                    : "bg-primary/15 text-primary"
                )}
              >
                {boleto.status === "autorizado"
                  ? "Autorizado"
                  : boleto.status === "sem_pedido"
                  ? "Sem Pedido no ERP"
                  : "Aguardando Alçada"}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-foreground text-sm leading-tight">
                {boleto.beneficiario}
              </h3>
              <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                CNPJ: {boleto.cnpjBeneficiario}
              </p>
            </div>

            <div className="rounded-lg bg-background/60 p-2.5 border border-border/40 font-mono space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground">Vencimento:</span>
                <span className="font-bold text-foreground">{boleto.vencimento}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground">Valor:</span>
                <span className="font-black text-sm text-foreground">
                  {formatarMoeda(boleto.valor)}
                </span>
              </div>
              <div className="text-[10px] text-muted-foreground truncate pt-1 border-t border-border/40">
                Código: {boleto.codigoBarras}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <FileText className="size-3 text-tech-cyan" />
                {boleto.tituloProtheusVinculado || "Não provisionado"}
              </span>

              {boleto.status === "pendente_aprovacao" ? (
                <button
                  type="button"
                  onClick={() => autorizarBoleto(boleto.id)}
                  className="inline-flex items-center gap-1 rounded bg-primary hover:bg-primary/90 text-primary-foreground px-2.5 py-1 text-[11px] font-bold cursor-pointer transition-colors"
                >
                  <Check className="size-3" />
                  Autorizar Débito
                </button>
              ) : boleto.status === "sem_pedido" ? (
                <span className="text-[10px] font-medium text-amber-400 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  Requer Pedido
                </span>
              ) : (
                <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                  <CheckCircle2 className="size-3" />
                  Pronto p/ Remessa
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
