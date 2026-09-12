import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Wallet,
  FileText,
  Scale,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { CaixaConferenciaView } from "@/components/portfolio/protheus-lab/caixa-conferencia-view";
import { FiscalNfeView } from "@/components/portfolio/protheus-lab/fiscal-nfe-view";
import { ReformaTributariaCard } from "@/components/portfolio/protheus-lab/reforma-tributaria-card";
import { cn } from "@/lib/utils";

type AbaLab = "caixa" | "fiscal" | "reforma";

export default function ProtheusLabPage() {
  const [abaAtiva, setAbaAtiva] = useState<AbaLab>("caixa");

  return (
    <div className="relative min-h-[calc(100vh-8rem)] pb-20">
      {/* Barra Superior */}
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
              <span className="rounded border border-tech-cyan/40 bg-tech-cyan/10 px-2 py-0.5 font-mono text-[11px] font-bold text-tech-cyan">
                ERP LAB
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                TOTVS Protheus & Processos Corporativos
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="rounded bg-primary/10 text-primary px-2 py-0.5 font-bold">
                SIGAFIN · SIGACOM · SIGAFIS
              </span>
            </div>
          </div>

          {/* Banner de Dados Simulados */}
          <div className="mt-3.5 flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-500 dark:text-amber-400">
            <ShieldCheck className="size-3.5 shrink-0" />
            <span>
              Laboratório corporativo — rotinas reais de caixa, compras e documentos fiscais simuladas com dados fictícios para fins de demonstração técnica.
            </span>
          </div>
        </Container>
      </div>

      <Container className="pt-4 sm:pt-6 space-y-6">
        {/* Título */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Laboratório Protheus & Processos de Negócio
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Vivência prática comprovada em operações corporativas: fechamento de caixa, validação de pedidos de compras contra XML da NF-e e impacto sistêmico da Reforma Tributária.
          </p>
        </div>

        {/* Abas */}
        <div className="flex items-center gap-2 border-b border-border/80 pb-2">
          <button
            type="button"
            onClick={() => setAbaAtiva("caixa")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
              abaAtiva === "caixa"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
            )}
          >
            <Wallet className="size-3.5" />
            Conferência de Caixa (PDV)
          </button>

          <button
            type="button"
            onClick={() => setAbaAtiva("fiscal")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
              abaAtiva === "fiscal"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
            )}
          >
            <FileText className="size-3.5" />
            Compras & Entrada de NF-e (XML)
          </button>

          <button
            type="button"
            onClick={() => setAbaAtiva("reforma")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
              abaAtiva === "reforma"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
            )}
          >
            <Scale className="size-3.5" />
            Reforma Tributária (IBS/CBS)
          </button>
        </div>

        {/* Conteúdo Dinâmico */}
        {abaAtiva === "caixa" && <CaixaConferenciaView />}
        {abaAtiva === "fiscal" && <FiscalNfeView />}
        {abaAtiva === "reforma" && <ReformaTributariaCard />}
      </Container>
    </div>
  );
}
