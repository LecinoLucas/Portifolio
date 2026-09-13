import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { classesBotao } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { experiencias } from "@/data/experiencias";

export function ExperiencePage() {
  return (
    <PageContainer
      rotulo="Trajetória Profissional"
      titulo="Da Operação à Arquitetura de Software"
      subtitulo="Evolução factual: do atendimento ao cliente e suporte operacional às regras de negócio, TOTVS Protheus e TMS, automações fiscais e desenvolvimento de software."
    >
      <div className="relative border-l-2 border-primary/25 pl-6 sm:pl-8 space-y-10">
        {experiencias.map((exp) => (
          <div key={`${exp.cargo}-${exp.organizacao}`} className="relative group">
            {/* Marcador na linha do tempo */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex size-5 items-center justify-center rounded-full border-2 border-primary bg-background shadow-xs">
              <span className="size-2 rounded-full bg-primary" />
            </div>

            <article className="tech-card p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <Building2 className="size-3.5" />
                  <span>{exp.organizacao}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="size-3.5" />
                  <span>{exp.periodo}</span>
                  {exp.atual ? (
                    <Badge variante="sucesso" className="ml-1 text-[10px]">
                      Atual
                    </Badge>
                  ) : null}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {exp.cargo}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.resumo}
                </p>
              </div>

              {exp.destaques && exp.destaques.length > 0 ? (
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Atividades e Entregas:
                  </h3>
                  <ul className="space-y-2">
                    {exp.destaques.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground sm:text-sm">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {exp.tags && exp.tags.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variante="contorno" className="text-[11px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </article>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        <Link to="/projetos" className={classesBotao({ variante: "primario" })}>
          Ver Estudos de Caso dos Projetos
          <ArrowRight className="size-4" />
        </Link>
        <Link to="/contato" className={classesBotao({ variante: "contorno" })}>
          Entrar em Contato
        </Link>
      </div>
    </PageContainer>
  );
}
