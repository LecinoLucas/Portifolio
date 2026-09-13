import { Clock, Code2, Database, Network, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";

interface PontoResumo {
  icone: typeof Clock;
  titulo: string;
  descricao: string;
}

const PONTOS_RESUMO: PontoResumo[] = [
  {
    icone: Clock,
    titulo: "Sistemas & Suporte Operacional",
    descricao:
      "Trajetória sólida no atendimento, sustentação de sistemas, implantação de softwares comerciais e resolução de incidentes críticos.",
  },
  {
    icone: Code2,
    titulo: "~6 Meses de Desenvolvimento Prático",
    descricao:
      "Foco intenso na construção de soluções corporativas reais, integrações bancárias mTLS, automações fiscais e software web moderno.",
  },
  {
    icone: Database,
    titulo: "TOTVS Protheus P12 (Core & TMS)",
    descricao:
      "Domínio prático nos módulos Financeiro (SIGAFIN), Compras (SIGACOM), Fiscal (SIGAFIS), Contábil (SIGACTB) e Transporte (TMS).",
  },
  {
    icone: Network,
    titulo: "Filiais, Caixas & Regras Complexas",
    descricao:
      "Atendimento direto a filiais corporativas (Grupo 1: 2, Grupo 2: 51, Grupo 4: 6, Grupo 6: 6, Grupo 7: 6), conciliação, CNAB/DDA e rotinas de caixa.",
  },
  {
    icone: ShieldCheck,
    titulo: "Arquitetura & Engenharia com IA",
    descricao:
      "Segurança para especificar requisitos, desenhar arquiteturas limpas, garantir governança e utilizar IA como ferramenta produtiva de desenvolvimento.",
  },
];

export function ResumoProfissionalSection() {
  return (
    <section className="py-10 sm:py-14 border-b border-border/80 bg-card/30">
      <Container className="space-y-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <ShieldCheck className="size-3.5" />
            <span>Resumo Profissional Executivo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Competências e Vivência Corporativa em Síntese
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Visão consolidada da atuação entre a operação de backoffice e a engenharia de software aplicada.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PONTOS_RESUMO.map((ponto) => {
            const Icone = ponto.icone;
            return (
              <div
                key={ponto.titulo}
                className="rounded-xl border border-border/70 bg-card/60 p-4 sm:p-5 space-y-2 hover:border-border transition-colors backdrop-blur-xs"
              >
                <div className="flex items-center gap-2.5 text-primary">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <Icone className="size-4" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm tracking-tight">
                    {ponto.titulo}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ponto.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
