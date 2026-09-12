import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { classesBotao } from "@/components/ui/button-variants";
import { projetoPorSlug } from "@/data/projetos";
import { links } from "@/data/links";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const projeto = slug ? projetoPorSlug(slug) : undefined;

  if (!projeto) {
    return (
      <PageContainer
        rotulo="Erro 404"
        titulo="Estudo de caso não encontrado"
        subtitulo="O projeto solicitado não foi localizado ou o endereço está incorreto."
      >
        <div className="tech-card p-8 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Verifique o endereço digitado ou retorne para a lista completa de projetos em produção.
          </p>
          <Link to="/projetos" className={classesBotao({ variante: "primario" })}>
            <ArrowLeft className="size-4" />
            Voltar para Projetos
          </Link>
        </div>
      </PageContainer>
    );
  }

  const { detalhe } = projeto;

  return (
    <PageContainer
      rotulo={projeto.categoria}
      titulo={projeto.titulo}
      subtitulo={projeto.resumo}
    >
      <div className="space-y-8">
        {/* Navegação de retorno */}
        <div>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-3.5" />
            Voltar para todos os projetos
          </Link>
        </div>

        {/* Bloco de Demonstração Interativa Destacada (Portal RH) */}
        {projeto.slug === "portal-rh" ? (
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
        ) : null}

        {/* Escala e Usuários */}
        {detalhe.usuariosOuEscala ? (
          <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm font-semibold text-primary">
            <Users className="size-5 shrink-0" />
            <span>Escala Operacional: {detalhe.usuariosOuEscala}</span>
          </div>
        ) : null}

        {/* Contexto e Problema */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="tech-card p-6 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
              Contexto do Negócio
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {detalhe.contexto}
            </p>
          </div>

          <div className="tech-card p-6 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-tech-orange">
              O Problema a Resolver
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {detalhe.problema}
            </p>
          </div>
        </div>

        {/* Minha Participação & Solução */}
        <div className="tech-card p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
              Minha Participação
            </h2>
            <p className="text-sm leading-relaxed text-foreground sm:text-base">
              {detalhe.participacao}
            </p>
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-tech-cyan">
              Solução Implementada
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {detalhe.solucao}
            </p>
          </div>
        </div>

        {/* Arquitetura & Segurança */}
        <div className="tech-card p-6 sm:p-8 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-tech-violet">
            Arquitetura Técnica
          </h2>
          <p className="text-sm leading-relaxed text-foreground font-mono bg-muted/40 p-4 rounded-lg">
            {detalhe.arquitetura}
          </p>

          {detalhe.seguranca ? (
            <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-xs text-muted-foreground mt-4">
              <ShieldCheck className="size-5 shrink-0 text-primary mt-0.5" />
              <div>
                <strong className="text-foreground block mb-1">Segurança &amp; Conformidade:</strong>
                {detalhe.seguranca}
              </div>
            </div>
          ) : null}
        </div>

        {/* Desafios e Resultados */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="tech-card p-6 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-tech-magenta">
              Desafios Técnicos Superados
            </h2>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {detalhe.desafios.map((desafio) => (
                <li key={desafio} className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-tech-magenta shrink-0 mt-0.5" />
                  <span>{desafio}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-card p-6 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Resultado em Produção
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {detalhe.resultado}
            </p>
          </div>
        </div>

        {/* Stack & Links */}
        <div className="tech-card p-6 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
            Tecnologias Utilizadas
          </h2>
          <div className="flex flex-wrap gap-2">
            {projeto.stack.map((tec) => (
              <Badge key={tec} variante="contorno">
                {tec}
              </Badge>
            ))}
          </div>

          {projeto.links && projeto.links.length > 0 ? (
            <div className="flex flex-wrap gap-3 pt-3 border-t border-border">
              {projeto.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {link.rotulo}
                  <ArrowUpRight className="size-4" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </PageContainer>
  );
}
