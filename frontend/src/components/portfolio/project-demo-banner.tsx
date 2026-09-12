import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";

interface PropsProjectDemoBanner {
  slug: string;
}

export function ProjectDemoBanner({ slug }: PropsProjectDemoBanner) {
  if (slug === "banking-protheus" || slug === "conciliacao-bancaria-itau") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-5 sm:p-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-500">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Laboratório Prático Disponível
          </div>
          <h3 className="text-base font-bold text-foreground">
            Explore o Conciliador CNAB, DDA Eletrônico e mTLS Itaú
          </h3>
          <p className="text-xs text-muted-foreground">
            Demonstração funcional de matching contra títulos Protheus SE2 e arquitetura bancária.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
          <Link
            to="/projetos/banking-protheus/demo"
            className={classesBotao({
              variante: "primario",
              tamanho: "md",
              className: "gap-2 font-bold justify-center shadow-xs bg-emerald-600 hover:bg-emerald-500 text-white",
            })}
          >
            Abrir laboratório bancário
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    );
  }

  if (slug === "portal-engenharia") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-tech-cyan/40 bg-tech-cyan/10 p-5 sm:p-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tech-cyan">
            <span className="size-2 rounded-full bg-tech-cyan animate-pulse" />
            Demonstração Interativa Disponível
          </div>
          <h3 className="text-base font-bold text-foreground">
            Explore o painel de obras e a EAP com aprovação de etapas
          </h3>
          <p className="text-xs text-muted-foreground">
            Demonstração interativa local com dados mockados, sem necessidade de backend.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
          <Link
            to="/projetos/portal-engenharia/demo"
            className={classesBotao({
              variante: "primario",
              tamanho: "md",
              className: "gap-2 font-bold justify-center shadow-xs",
            })}
          >
            Abrir demonstração interativa
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    );
  }

  if (slug === "import-nfe") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-tech-cyan/40 bg-tech-cyan/10 p-5 sm:p-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tech-cyan">
            <span className="size-2 rounded-full bg-tech-cyan animate-pulse" />
            Laboratório Corporativo Disponível
          </div>
          <h3 className="text-base font-bold text-foreground">
            Conferência de Caixa, Compras &amp; Entrada de XML NF-e
          </h3>
          <p className="text-xs text-muted-foreground">
            Laboratório prático de rotinas de ERP Protheus e análise sistêmica da Reforma Tributária.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
          <Link
            to="/processos-erp"
            className={classesBotao({
              variante: "primario",
              tamanho: "md",
              className: "gap-2 font-bold justify-center shadow-xs",
            })}
          >
            Abrir laboratório Protheus
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    );
  }

  if (slug === "portal-rh") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-tech-cyan/40 bg-tech-cyan/10 p-5 sm:p-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tech-cyan">
            <span className="size-2 rounded-full bg-tech-cyan animate-pulse" />
            Demonstração Interativa Disponível
          </div>
          <h3 className="text-base font-bold text-foreground">
            Explore a visão da vaga e o quadro Kanban de candidatos
          </h3>
          <p className="text-xs text-muted-foreground">
            Demonstração interativa local com dados mockados, sem necessidade de backend.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
          <Link
            to="/projetos/portal-rh/demo"
            className={classesBotao({
              variante: "primario",
              tamanho: "md",
              className: "gap-2 font-bold justify-center shadow-xs",
            })}
          >
            Abrir demonstração interativa
            <ArrowRight className="size-4" />
          </Link>

          <a
            href={links.portalRh.github}
            target="_blank"
            rel="noreferrer noopener"
            className={classesBotao({
              variante: "contorno",
              tamanho: "md",
              className: "gap-1.5 justify-center text-xs",
            })}
          >
            <span>Ver código no GitHub</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return null;
}
