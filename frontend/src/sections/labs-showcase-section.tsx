import { Link } from "react-router-dom";
import { ArrowRight, ArrowRightLeft, Building, HardHat, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";

export function LabsShowcaseSection() {
  return (
    <section className="py-12 sm:py-16 border-b border-border/80">
      <Container className="space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
            <Sparkles className="size-3.5" />
            <span>Laboratórios Interativos &amp; Provas Técnicas</span>
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Demonstrações Práticas de Domínio de Negócio
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Ambientes funcionais executados localmente no navegador, demonstrando regras reais de conciliação bancária, rotinas de ERP Protheus e engenharia de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* LAB 1: BankingProtheus */}
          <div className="rounded-xl border border-emerald-500/40 bg-card/60 p-5 shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-4 hover:border-emerald-500/60 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-2 py-0.5 text-[10px] font-mono font-bold">
                  LAB 01 · BANCÁRIO
                </span>
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <ArrowRightLeft className="size-4" />
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground">
                BankingProtheus: Conciliação CNAB &amp; DDA
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Cruzamento inteligente entre o Contas a Pagar Protheus (tabela SE2) e extratos/CNAB 240, detecção automática de juros/multas, autorização de boletos DDA e arquitetura mTLS Itaú.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["CNAB 240/400", "DDA Eletrônico", "SE2 Protheus", "Itaú mTLS"].map((tag) => (
                  <span key={tag} className="text-[10px] bg-background/80 border border-border/60 text-muted-foreground px-2 py-0.5 rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/projetos/banking-protheus/demo"
              className="inline-flex items-center justify-between gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 text-xs font-bold transition-all shadow-xs"
            >
              <span>Abrir Conciliador Bancário</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* LAB 2: Laboratório Protheus & Processos */}
          <div className="rounded-xl border border-tech-cyan/40 bg-card/60 p-5 shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-4 hover:border-tech-cyan/60 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan px-2 py-0.5 text-[10px] font-mono font-bold">
                  LAB 02 · ERP PROTHEUS
                </span>
                <div className="flex size-7 items-center justify-center rounded-lg bg-tech-cyan/10 text-tech-cyan">
                  <Building className="size-4" />
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground">
                Processos ERP: Caixa, Compras &amp; Reforma
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Conferência e fechamento de caixa de loja/posto (sobra/falta e CT2), validação de compras e entrada de NF-e via XML com de-para, e impactos sistêmicos da Reforma Tributária (IBS/CBS e split payment).
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Fechamento Caixa", "NF-e / XML", "Compras SC7", "Reforma IBS/CBS"].map((tag) => (
                  <span key={tag} className="text-[10px] bg-background/80 border border-border/60 text-muted-foreground px-2 py-0.5 rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/processos-erp"
              className="inline-flex items-center justify-between gap-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground px-3.5 py-2 text-xs font-bold transition-all shadow-xs"
            >
              <span>Abrir Laboratório Protheus</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* LAB 3: Portal de Engenharia */}
          <div className="rounded-xl border border-primary/40 bg-card/60 p-5 shadow-xs backdrop-blur-xs flex flex-col justify-between space-y-4 hover:border-primary/60 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded bg-primary/10 border border-primary/30 text-primary px-2 py-0.5 text-[10px] font-mono font-bold">
                  LAB 03 · SISTEMA WEB
                </span>
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HardHat className="size-4" />
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground">
                Portal de Engenharia: Obras, EAP &amp; RBAC
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Painel Executivo de Obras corporativas, controle físico-financeiro com árvore de EAP detalhada em múltiplos níveis e fluxo formal de aprovação de macro-etapas com governança.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React 19 + Node", "Estrutura EAP", "RBAC", "PostgreSQL"].map((tag) => (
                  <span key={tag} className="text-[10px] bg-background/80 border border-border/60 text-muted-foreground px-2 py-0.5 rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/projetos/portal-engenharia/demo"
              className="inline-flex items-center justify-between gap-2 rounded-lg border border-border bg-card hover:border-primary px-3.5 py-2 text-xs font-bold text-foreground transition-all shadow-xs"
            >
              <span>Abrir Painel de Obras &amp; EAP</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
