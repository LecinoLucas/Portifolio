import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { classesBotao } from "@/components/ui/button-variants";
import { ProjectDemoBanner } from "@/components/portfolio/project-demo-banner";
import { projetoPorSlug } from "@/data/projetos";

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

        {/* Bloco de Demonstração Interativa ou Laboratório */}
        <ProjectDemoBanner slug={projeto.slug} />

        {/* 3 Níveis de Leitura Estruturados */}
        {detalhe.visaoRapida ? (
          <div className="tech-card p-5 sm:p-6 space-y-4">
            <div className="border-b border-border/60 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Estrutura por Evidências Factuais (3 Níveis de Leitura)
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Nível 1: Visão Rápida */}
              <div className="rounded-xl border border-border/70 bg-muted/20 p-4 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  1. Visão Rápida (30s)
                </h3>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <p><strong className="text-foreground">Problema:</strong> {detalhe.visaoRapida.problema}</p>
                  <p><strong className="text-foreground">Participação:</strong> {detalhe.visaoRapida.participacao}</p>
                  <p><strong className="text-foreground">Entregue:</strong> {detalhe.visaoRapida.solucao}</p>
                </div>
              </div>

              {/* Nível 2: Regra de Negócio */}
              {detalhe.regraDeNegocio ? (
                <div className="rounded-xl border border-border/70 bg-muted/20 p-4 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    2. Regra de Negócio (1m)
                  </h3>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <p><strong className="text-foreground">Processo:</strong> {detalhe.regraDeNegocio.comoFuncionava}</p>
                    <p><strong className="text-foreground">Áreas:</strong> {detalhe.regraDeNegocio.areasEnvolvidas.join(", ")}</p>
                    <p><strong className="text-foreground">Relevância:</strong> {detalhe.regraDeNegocio.relevancia}</p>
                  </div>
                </div>
              ) : null}

              {/* Nível 3: Evidência Técnica */}
              {detalhe.evidenciaTecnica ? (
                <div className="rounded-xl border border-border/70 bg-muted/20 p-4 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    3. Evidência Técnica
                  </h3>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <p><strong className="text-foreground">Arquitetura:</strong> {detalhe.evidenciaTecnica.arquitetura}</p>
                    <p><strong className="text-foreground">Segurança:</strong> {detalhe.evidenciaTecnica.seguranca}</p>
                    <p><strong className="text-foreground">Testes:</strong> {detalhe.evidenciaTecnica.testes}</p>
                  </div>
                </div>
              ) : null}
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
              {projeto.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    {link.rotulo}
                    <ArrowUpRight className="size-4" />
                  </Link>
                ) : (
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
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </PageContainer>
  );
}
