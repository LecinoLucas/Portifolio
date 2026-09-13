import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  Lock,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { BankingConciliadorView } from "@/components/portfolio/banking/banking-conciliador-view";
import { BankingDdaView } from "@/components/portfolio/banking/banking-dda-view";
import { BankingSecurityFlow } from "@/components/portfolio/banking/banking-security-flow";
import { CONTAS_BANCARIAS } from "@/data/banking-demo-data";
import { cn } from "@/lib/utils";

type AbaBanking = "conciliador" | "dda" | "seguranca";

export default function BankingDemoPage() {
  const [abaAtiva, setAbaAtiva] = useState<AbaBanking>("conciliador");

  return (
    <div className="relative min-h-[calc(100vh-8rem)] pb-20">
      {/* Barra Superior de Navegação */}
      <div className="border-b border-border/80 bg-card/60 backdrop-blur-md">
        <Container className="py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="size-3.5" />
                <span>Voltar aos projetos</span>
              </Link>
              <span className="text-border">|</span>
              <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                Demonstração Interativa
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Central Bancária Itaú
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-emerald-500">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                mTLS Conectado
              </span>
            </div>
          </div>

          {/* Banner de Dados Simulados */}
          <div className="mt-3.5 flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-500 dark:text-amber-400">
            <ShieldCheck className="size-3.5 shrink-0" />
            <span>
              Laboratório prático — dados financeiros, contas e certificados são simulados para demonstração de regras de negócio.
            </span>
          </div>
        </Container>
      </div>

      <Container className="pt-4 sm:pt-6 space-y-6">
        {/* Título e Posicionamento */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            BankingProtheus — Conciliação Bancária & DDA
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Solução de integração bancária conectando o ERP TOTVS Protheus (tabela SE2) com APIs Itaú mTLS, extratos CNAB 240/400 e boletos eletrônicos.
          </p>
        </div>

        {/* Resumo das Contas Conectadas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {CONTAS_BANCARIAS.map((conta) => (
            <div
              key={conta.id}
              className="rounded-xl border border-border/80 bg-card/60 p-3 text-xs space-y-1.5 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground flex items-center gap-1.5">
                  <Building2 className="size-3.5 text-tech-cyan" />
                  {conta.banco}
                </span>
                <span className="rounded bg-primary/10 text-primary px-1.5 py-0.2 text-[10px] font-mono font-bold">
                  {conta.tipoConexao}
                </span>
              </div>
              <div className="flex items-baseline justify-between font-mono text-[11px] text-muted-foreground">
                <span>Ag: {conta.agencia} · C/C: {conta.conta}</span>
                <span className="font-bold text-foreground">
                  {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(conta.saldoAtual)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Abas de Navegação do Laboratório */}
        <div className="flex items-center gap-2 border-b border-border/80 pb-2">
          <button
            type="button"
            onClick={() => setAbaAtiva("conciliador")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
              abaAtiva === "conciliador"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
            )}
          >
            <FileSpreadsheet className="size-3.5" />
            Conciliação de Extrato (CNAB)
          </button>

          <button
            type="button"
            onClick={() => setAbaAtiva("dda")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
              abaAtiva === "dda"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
            )}
          >
            <ShieldCheck className="size-3.5" />
            Painel DDA (Boletos)
          </button>

          <button
            type="button"
            onClick={() => setAbaAtiva("seguranca")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
              abaAtiva === "seguranca"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
            )}
          >
            <Lock className="size-3.5" />
            Arquitetura mTLS Itaú
          </button>
        </div>

        {/* Conteúdo Dinâmico por Aba */}
        {abaAtiva === "conciliador" && <BankingConciliadorView />}
        {abaAtiva === "dda" && <BankingDdaView />}
        {abaAtiva === "seguranca" && <BankingSecurityFlow />}
      </Container>
    </div>
  );
}
