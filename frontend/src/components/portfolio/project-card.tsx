import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Briefcase,
  Code2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Database,
} from "lucide-react";
import { classesBotao } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import type { Projeto } from "@/types";

type NivelLeitura = "rapida" | "negocio" | "tecnica";

export function ProjectCard({ projeto }: { projeto: Projeto }) {
  const [nivelAtivo, setNivelAtivo] = useState<NivelLeitura>("rapida");
  const { detalhe } = projeto;

  const visaoRapida = detalhe.visaoRapida || {
    problema: detalhe.problema,
    participacao: detalhe.participacao,
    solucao: detalhe.solucao,
  };

  const regraDeNegocio = detalhe.regraDeNegocio || {
    comoFuncionava: detalhe.contexto,
    areasEnvolvidas: ["Operação", "Backoffice"],
    relevancia: detalhe.resultado,
  };

  const evidenciaTecnica = detalhe.evidenciaTecnica || {
    integracoes: projeto.stack,
    tabelas: [],
    arquitetura: detalhe.arquitetura,
    seguranca: detalhe.seguranca || "Padrões estritos de segurança e isolamento de dados.",
    testes: "Testes automatizados e validação técnica contínua.",
    demonstracao: projeto.links?.[0]
      ? {
          rotulo: projeto.links[0].rotulo,
          href: projeto.links[0].href,
          avisoFicticio: "Ambiente demonstrativo com dados e regras simulados.",
        }
      : undefined,
  };

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card/85 p-5 sm:p-6 backdrop-blur-xs transition-all hover:border-border hover:shadow-xs">
      <div className="space-y-4">
        {/* Cabeçalho do Card */}
        <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            {projeto.categoria}
          </span>
          {projeto.slug === "les" ? (
            <span className="text-[10px] font-mono text-muted-foreground uppercase">
              Base Metodológica
            </span>
          ) : (
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wide">
              Estudo de Caso
            </span>
          )}
        </div>

        {/* Título e Resumo */}
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            <Link
              to={`/projetos/${projeto.slug}`}
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {projeto.titulo}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {projeto.resumo}
          </p>
        </div>

        {/* Stack de Tecnologias */}
        <div className="flex flex-wrap gap-1.5">
          {projeto.stack.map((tec) => (
            <span
              key={tec}
              className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tec}
            </span>
          ))}
        </div>

        {/* Abas dos 3 Níveis de Leitura Acessíveis */}
        <div className="rounded-xl border border-border/70 bg-muted/25 p-3 sm:p-4 space-y-3">
          <div
            role="tablist"
            aria-label={`Níveis de leitura para ${projeto.titulo}`}
            className="flex items-center gap-1.5 border-b border-border/50 pb-2 text-xs"
          >
            <button
              type="button"
              role="tab"
              id={`tab-rapida-${projeto.slug}`}
              aria-selected={nivelAtivo === "rapida"}
              aria-controls={`panel-rapida-${projeto.slug}`}
              onClick={() => setNivelAtivo("rapida")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer",
                nivelAtivo === "rapida"
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Clock className="size-3" />
              <span>Visão Rápida (30s)</span>
            </button>

            <button
              type="button"
              role="tab"
              id={`tab-negocio-${projeto.slug}`}
              aria-selected={nivelAtivo === "negocio"}
              aria-controls={`panel-negocio-${projeto.slug}`}
              onClick={() => setNivelAtivo("negocio")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer",
                nivelAtivo === "negocio"
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Briefcase className="size-3" />
              <span>Regra de Negócio (1m)</span>
            </button>

            <button
              type="button"
              role="tab"
              id={`tab-tecnica-${projeto.slug}`}
              aria-selected={nivelAtivo === "tecnica"}
              aria-controls={`panel-tecnica-${projeto.slug}`}
              onClick={() => setNivelAtivo("tecnica")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer",
                nivelAtivo === "tecnica"
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Code2 className="size-3" />
              <span>Evidência Técnica</span>
            </button>
          </div>

          {/* Conteúdo Nível 1: Visão Rápida */}
          {nivelAtivo === "rapida" ? (
            <div
              id={`panel-rapida-${projeto.slug}`}
              role="tabpanel"
              aria-labelledby={`tab-rapida-${projeto.slug}`}
              className="space-y-2 text-xs leading-relaxed"
            >
              <div>
                <strong className="text-foreground">O problema real: </strong>
                <span className="text-muted-foreground">{visaoRapida.problema}</span>
              </div>
              <div>
                <strong className="text-foreground">Minha participação: </strong>
                <span className="text-muted-foreground">{visaoRapida.participacao}</span>
              </div>
              <div>
                <strong className="text-foreground">O que foi entregue: </strong>
                <span className="text-muted-foreground">{visaoRapida.solucao}</span>
              </div>
            </div>
          ) : null}

          {/* Conteúdo Nível 2: Regra de Negócio */}
          {nivelAtivo === "negocio" ? (
            <div
              id={`panel-negocio-${projeto.slug}`}
              role="tabpanel"
              aria-labelledby={`tab-negocio-${projeto.slug}`}
              className="space-y-2 text-xs leading-relaxed"
            >
              <div>
                <strong className="text-foreground">Como o processo funciona: </strong>
                <span className="text-muted-foreground">{regraDeNegocio.comoFuncionava}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="font-bold text-foreground inline-flex items-center gap-1">
                  <Building2 className="size-3 text-primary" />
                  Áreas beneficiadas:
                </span>
                {regraDeNegocio.areasEnvolvidas.map((area) => (
                  <span
                    key={area}
                    className="rounded bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground border border-border/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div>
                <strong className="text-foreground">Por que era necessária: </strong>
                <span className="text-muted-foreground">{regraDeNegocio.relevancia}</span>
              </div>
            </div>
          ) : null}

          {/* Conteúdo Nível 3: Evidência Técnica */}
          {nivelAtivo === "tecnica" ? (
            <div
              id={`panel-tecnica-${projeto.slug}`}
              role="tabpanel"
              aria-labelledby={`tab-tecnica-${projeto.slug}`}
              className="space-y-2 text-xs leading-relaxed"
            >
              <div>
                <strong className="text-foreground">Arquitetura: </strong>
                <span className="text-muted-foreground">{evidenciaTecnica.arquitetura}</span>
              </div>
              {evidenciaTecnica.tabelas && evidenciaTecnica.tabelas.length > 0 ? (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="font-bold text-foreground inline-flex items-center gap-1">
                    <Database className="size-3 text-primary" />
                    Tabelas / APIs:
                  </span>
                  {evidenciaTecnica.tabelas.map((tab) => (
                    <span
                      key={tab}
                      className="rounded bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/60"
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              ) : null}
              <div>
                <strong className="text-foreground inline-flex items-center gap-1">
                  <ShieldCheck className="size-3 text-emerald-500" />
                  Segurança:
                </strong>{" "}
                <span className="text-muted-foreground">{evidenciaTecnica.seguranca}</span>
              </div>
              <div>
                <strong className="text-foreground">Testes: </strong>
                <span className="text-muted-foreground">{evidenciaTecnica.testes}</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Ações do Rodapé */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-t border-border/50 pt-4 mt-5">
        <Link
          to={`/projetos/${projeto.slug}`}
          className={classesBotao({
            variante: "primario",
            tamanho: "sm",
            className: "w-full sm:w-auto justify-center gap-1.5 font-semibold text-xs",
          })}
        >
          <span>Ver estudo completo</span>
          <ArrowRight className="size-3.5" />
        </Link>

        {evidenciaTecnica.demonstracao ? (
          <Link
            to={evidenciaTecnica.demonstracao.href}
            className={classesBotao({
              variante: "contorno",
              tamanho: "sm",
              className: "w-full sm:w-auto justify-center gap-1.5 text-xs font-semibold text-foreground hover:bg-muted/70",
            })}
          >
            <ExternalLink className="size-3.5 text-primary" />
            <span>Demonstração interativa</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
