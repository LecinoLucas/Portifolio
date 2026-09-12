import { Scale, Split, CheckCircle2 } from "lucide-react";
import { PILARES_REFORMA_TRIBUTARIA } from "@/data/protheus-lab-demo-data";

export function ReformaTributariaCard() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs space-y-1">
        <div className="flex items-center gap-2">
          <Scale className="size-4 text-tech-violet" />
          <h2 className="text-base font-bold text-foreground">
            Impactos da Reforma Tributária (EC 132/2023) nos Sistemas Corporativos
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">
          Visão analítica de sistemas: como o Protheus, as integrações bancárias e as regras fiscais estão sendo preparados para a transição dos tributos e o Split Payment.
        </p>
      </div>

      {/* 3 Pilares da Reforma */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PILARES_REFORMA_TRIBUTARIA.map((pilar) => (
          <div
            key={pilar.id}
            className="rounded-xl border border-border/80 bg-card/60 p-4 text-xs space-y-3 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="rounded bg-tech-violet/10 text-tech-violet px-2 py-0.5 text-[10px] font-mono font-bold">
                  {pilar.esfera}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-rose-400 line-through block">
                  {pilar.tributoAntigo}
                </span>
                <span className="text-sm font-bold text-foreground block">
                  → {pilar.novoTributo}
                </span>
              </div>

              <p className="text-muted-foreground text-[11px] leading-relaxed">
                {pilar.impactoERP}
              </p>
            </div>

            <div className="rounded-lg bg-background/60 p-2.5 border border-border/40 space-y-1 mt-2">
              <span className="text-[10px] font-bold text-tech-cyan uppercase tracking-wider block">
                Desafio de Engenharia & ERP
              </span>
              <p className="text-[10px] text-muted-foreground leading-snug">
                {pilar.desafioTecnico}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Destaque do Split Payment Bancário */}
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs space-y-3">
        <div className="flex items-center gap-2">
          <Split className="size-4 text-emerald-500" />
          <h3 className="font-bold text-foreground text-sm">
            O Grande Desafio de Integração: Split Payment na Liquidação Bancária
          </h3>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed">
          Na liquidação de um boleto ou PIX no novo modelo, a instituição bancária reterá na fonte a parcela de IBS e CBS, repassando o valor líquido ao fornecedor e o imposto diretamente ao Comitê Gestor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-[11px] font-mono">
          <div className="rounded-lg bg-card/70 p-2.5 border border-border/60">
            <span className="text-muted-foreground block text-[10px]">1. Fatura Original (Protheus SE2)</span>
            <span className="font-bold text-foreground">R$ 10.000,00</span>
          </div>
          <div className="rounded-lg bg-card/70 p-2.5 border border-border/60">
            <span className="text-amber-400 block text-[10px]">2. Split Bancário IBS/CBS</span>
            <span className="font-bold text-amber-400">- R$ 2.650,00</span>
          </div>
          <div className="rounded-lg bg-card/70 p-2.5 border border-border/60">
            <span className="text-emerald-500 block text-[10px]">3. Crédito Líquido no Extrato</span>
            <span className="font-bold text-emerald-500">R$ 7.350,00</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-1">
          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
          <span>
            A solução <strong>BankingProtheus</strong> já está sendo desenhada para conciliar a baixa do título integral reconhecendo a retenção automática sem gerar falso saldo em aberto.
          </span>
        </div>
      </div>
    </div>
  );
}
