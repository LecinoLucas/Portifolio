import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Briefcase, Code2, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { SystemsDiagram } from "@/components/shared/systems-diagram";
import { WhatsAppInline } from "@/components/shared/whatsapp-button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";
import { projetos } from "@/data/projetos";

export function HomePage() {
  const projetosDestaque = projetos.filter((p) => p.destaque).slice(0, 3);

  return (
    <div className="relative overflow-hidden pb-16">
      {/* Background sutil tecnológico */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />

      {/* 1. CENTRAL TECNOLÓGICA / HERO EM DUAS COLUNAS NA PRIMEIRA DOBRA */}
      <section className="relative py-10 sm:py-16 lg:py-20">
        {/* Luz ambiente de fundo no topo */}
        <div aria-hidden="true" className="hero-ambient pointer-events-none absolute inset-0 -z-10" />

        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Coluna Esquerda: Apresentação, Foco Dual & Ações */}
            <div className="space-y-6 lg:col-span-6 xl:col-span-6">
              {/* Status operacional e posicionamento */}
              <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-xl sm:rounded-full border border-primary/30 bg-primary/10 px-3.5 py-2 sm:py-1.5 text-xs font-medium text-primary shadow-xs">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="leading-snug break-words">{perfil.posicionamento}</span>
                <span className="hidden sm:inline text-border">|</span>
                <span className="text-muted-foreground text-[11px] sm:text-xs">{perfil.disponibilidade}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl break-words">
                  {perfil.nome}
                </h1>
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-tech-cyan to-tech-violet bg-clip-text text-transparent break-words">
                  {perfil.titulo}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {perfil.headline}
              </p>

              {/* Badges rápidos dos dois focos profissionais */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-tech-violet/30 bg-tech-violet/10 px-2.5 py-1 text-xs font-medium text-tech-violet">
                  <span className="size-1.5 rounded-full bg-tech-violet" />
                  ERP TOTVS Protheus &amp; SQL
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-tech-cyan/30 bg-tech-cyan/10 px-2.5 py-1 text-xs font-medium text-tech-cyan">
                  <span className="size-1.5 rounded-full bg-tech-cyan" />
                  Full Stack: React 19 + Node.js
                </span>
              </div>

              {/* Ações principais e WhatsApp */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Link to="/projetos" className={classesBotao({ tamanho: "lg", className: "w-full sm:w-auto" })}>
                  Ver estudos de caso
                  <ArrowRight className="size-4" />
                </Link>

                <WhatsAppInline
                  variante="destaque"
                  texto="Conversar no WhatsApp"
                  className="w-full sm:w-auto justify-center"
                />

                <a
                  href={links.curriculo}
                  download
                  title="Baixar currículo original em PDF"
                  className={classesBotao({ variante: "contorno", tamanho: "lg", className: "w-full sm:w-auto justify-center" })}
                >
                  <Download className="size-4" />
                  Currículo Geral (PDF)
                </a>
              </div>

              {/* Redes e canais */}
              <div className="flex items-center gap-3 pt-1 text-xs text-muted-foreground">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
                <span>·</span>
                {links.linkedin ? (
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </div>

            {/* Coluna Direita: O Mapa de Sistemas Conectados na primeira dobra */}
            <div className="lg:col-span-6 xl:col-span-6">
              <SystemsDiagram />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. OS DOIS CAMINHOS PROFISSIONAIS VISÍVEIS E CONECTADOS */}
      <section className="py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Caminhos de Atuação
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Dois caminhos, uma sólida base técnica
              </h2>
            </div>
            <Link
              to="/competencias"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Ver matriz completa de competências <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* CAMINHO 1: Analista de Sistemas / TOTVS Protheus */}
            <div className="tech-card flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tech-violet">
                    <Briefcase className="size-4" />
                    ERP &amp; Regras de Negócio
                  </span>
                  <span className="rounded-md border border-tech-violet/30 bg-tech-violet/10 px-2 py-0.5 text-[11px] font-semibold text-tech-violet">
                    TOTVS Protheus P12
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {perfil.perfis.analista.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {perfil.perfis.analista.headline}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {perfil.perfis.analista.destaques.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-tech-violet shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  to="/competencias"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-tech-violet hover:underline"
                >
                  Explorar módulo Analista de Sistemas →
                </Link>
              </div>
            </div>

            {/* CAMINHO 2: Desenvolvedor Full Stack Júnior */}
            <div className="tech-card flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tech-cyan">
                    <Code2 className="size-4" />
                    Software &amp; Aplicações
                  </span>
                  <span className="rounded-md border border-tech-cyan/30 bg-tech-cyan/10 px-2 py-0.5 text-[11px] font-semibold text-tech-cyan">
                    React 19 + Node.js MVC
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {perfil.perfis.fullstack.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {perfil.perfis.fullstack.headline}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {perfil.perfis.fullstack.destaques.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-tech-cyan shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  to="/competencias"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-tech-cyan hover:underline"
                >
                  Explorar stack Full Stack →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PROJETOS EM DESTAQUE NA CENTRAL */}
      <section className="py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Sistemas em Produção
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Projetos e Estudos de Caso
              </h2>
            </div>
            <Link
              to="/projetos"
              className={classesBotao({ variante: "contorno", tamanho: "sm" })}
            >
              Ver todos os {projetos.length} projetos
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projetosDestaque.map((projeto) => (
              <ProjectCard key={projeto.slug} projeto={projeto} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CHAMADA PARA CONTATO E ATENDIMENTO RÁPIDO */}
      <section className="py-16">
        <Container>
          <div className="tech-card relative overflow-hidden p-8 sm:p-12">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-500">
                <Sparkles className="size-3.5" />
                <span>Comunicação Direta &amp; Resposta Rápida</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Vamos conversar sobre sua vaga ou projeto?
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Disponível para contratação como Analista de Sistemas / TOTVS Protheus ou Desenvolvedor Full Stack Júnior.
                Envie uma mensagem pelo WhatsApp ou utilize o formulário completo.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <WhatsAppInline variante="destaque" texto="Chamar no WhatsApp" />
                <Link to="/contato" className={classesBotao({ variante: "contorno" })}>
                  Acessar formulário e canais
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
