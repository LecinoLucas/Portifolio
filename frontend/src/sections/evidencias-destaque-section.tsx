import { ArrowRight, BookOpen, ExternalLink, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { projetos } from "@/data/projetos";

export function EvidenciasDestaqueSection() {
  // 4 casos reais principais
  const casosPrincipais = projetos.filter(
    (p) => p.slug !== "les" && p.slug !== "conciliacao-bancaria-itau" && p.slug !== "import-nfe"
  );

  // LES secundário
  const casoLes = projetos.find((p) => p.slug === "les");

  return (
    <section className="py-12 sm:py-16 border-b border-border/80">
      <Container className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Layers className="size-3.5" />
              <span>Evidências Práticas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              Casos Reais em Destaque
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Quatro soluções desenvolvidas para resolver problemas concretos de operação corporativa, integrações e gestão.
            </p>
          </div>

          <Link
            to="/projetos"
            className={classesBotao({
              variante: "contorno",
              className: "shrink-0 gap-2 font-semibold",
            })}
          >
            <span>Ver todos os casos reais</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Grid dos 4 Casos Principais */}
        <div className="grid gap-6 sm:grid-cols-2">
          {casosPrincipais.map((caso) => (
            <article
              key={caso.slug}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/70 p-5 sm:p-6 backdrop-blur-xs transition-all hover:border-border hover:shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-3">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {caso.categoria}
                  </span>
                  {caso.destaque ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-500">
                      <Sparkles className="size-3" />
                      Evidência Real
                    </span>
                  ) : null}
                </div>

                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  <Link
                    to={`/projetos/${caso.slug}`}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {caso.titulo}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {caso.resumo}
                </p>

                {/* Stack de Tecnologias */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {caso.stack.slice(0, 5).map((tec) => (
                    <span
                      key={tec}
                      className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {tec}
                    </span>
                  ))}
                  {caso.stack.length > 5 ? (
                    <span className="text-[10px] text-muted-foreground pt-0.5">
                      +{caso.stack.length - 5}
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Ações do Card */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-border/50 pt-4 mt-5">
                <Link
                  to={`/projetos/${caso.slug}`}
                  className={classesBotao({
                    variante: "primario",
                    tamanho: "sm",
                    className: "gap-1.5 text-xs font-semibold",
                  })}
                >
                  <span>Ver estudo do caso</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                {caso.detalhe.evidenciaTecnica?.demonstracao ? (
                  <Link
                    to={caso.detalhe.evidenciaTecnica.demonstracao.href}
                    className={classesBotao({
                      variante: "contorno",
                      tamanho: "sm",
                      className: "gap-1.5 text-xs font-semibold text-foreground hover:bg-muted/70",
                    })}
                  >
                    <ExternalLink className="size-3.5" />
                    <span>Demonstração interativa</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {/* LES — Caso Secundário como Base Metodológica */}
        {casoLes ? (
          <div className="rounded-xl border border-border/70 bg-card/40 p-5 sm:p-6 backdrop-blur-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <BookOpen className="size-3.5 text-primary" />
                <span>Base Metodológica Secundária</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                {casoLes.titulo}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {casoLes.resumo}
              </p>
            </div>

            <Link
              to={`/projetos/${casoLes.slug}`}
              className={classesBotao({
                variante: "contorno",
                tamanho: "sm",
                className: "shrink-0 gap-1.5 text-xs font-semibold",
              })}
            >
              <span>Consultar documentação LES</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
