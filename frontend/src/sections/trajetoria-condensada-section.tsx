import { ArrowRight, Briefcase, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";

interface MarcoTrajetoria {
  ordem: string;
  empresa: string;
  foco: string;
  descricaoCurta: string;
}

const MARCOS: MarcoTrajetoria[] = [
  {
    ordem: "01",
    empresa: "Atento",
    foco: "Suporte Operacional",
    descricaoCurta: "Atendimento ao cliente, conectividade e compreensão de problemas reais na ponta.",
  },
  {
    ordem: "02",
    empresa: "I5 Sistemas",
    foco: "Sistemas Desktop & Web",
    descricaoCurta: "Implantação de sistemas desktop/web, configuração, testes, validação, suporte N1 e treinamento.",
  },
  {
    ordem: "03",
    empresa: "Pioneira Colchões",
    foco: "Gestão & Vendas",
    descricaoCurta: "Auxiliar administrativo a Gerente de vendas: rotinas administrativas, conferência de caixa, negociação e liderança.",
  },
  {
    ordem: "04",
    empresa: "Rede Marajó",
    foco: "TOTVS Protheus e TMS",
    descricaoCurta: "Suporte N1/N2 a desenvolvimento, integrações, grupos e filiais atendidos e personalização de LPs.",
  },
  {
    ordem: "05",
    empresa: "Transição para Dev",
    foco: "Software & Integrações",
    descricaoCurta: "~6 meses de dedicação prática: integrações bancárias mTLS, automação fiscal e testes automatizados.",
  },
];

export function TrajetoriaCondensadaSection() {
  return (
    <section className="py-12 sm:py-16 border-b border-border/80 bg-card/20">
      <Container className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Briefcase className="size-3.5" />
              <span>Visão Curta da Trajetória</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              Da Operação à Arquitetura de Software
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Evolução profissional construída sobre a compreensão profunda da rotina dos usuários, regras de negócio e sistemas corporativos.
            </p>
          </div>

          <Link
            to="/experiencia"
            className={classesBotao({
              variante: "primario",
              className: "shrink-0 gap-2 font-semibold shadow-xs",
            })}
          >
            <span>Ver trajetória completa</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Linha de Evolução Condensada */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {MARCOS.map((marco, idx) => (
            <div
              key={marco.empresa}
              className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-card/60 p-4 transition-all hover:border-primary/50 hover:bg-card"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">
                    {marco.ordem}
                  </span>
                  {idx < MARCOS.length - 1 ? (
                    <ChevronRight className="hidden lg:block size-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                  ) : null}
                </div>
                <h3 className="font-bold text-foreground text-sm">
                  {marco.empresa}
                </h3>
                <div className="text-[11px] font-semibold text-primary/90">
                  {marco.foco}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {marco.descricaoCurta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
