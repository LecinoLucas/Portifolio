import { useState } from "react";
import { Briefcase, Code2, CheckCircle2, TerminalSquare, Layers } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { classesBotao } from "@/components/ui/button-variants";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function SkillsPage() {
  const [perfilAtivo, setPerfilAtivo] = useState<"ambos" | "analista" | "fullstack">("ambos");
  const analista = perfil.perfis.analista;
  const fullstack = perfil.perfis.fullstack;

  return (
    <PageContainer
      rotulo="Matriz de Competências"
      titulo="Especialidades &amp; Stack Tecnológica"
      subtitulo="Proficiência comprovada em regras de negócio de ERP aliada a desenvolvimento de software com TypeScript, Node.js, React e PostgreSQL."
    >
      {/* Controles de visualização / Filtro de perfil */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setPerfilAtivo("ambos")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
            perfilAtivo === "ambos"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Layers className="size-3.5" />
          Visão Completa
        </button>

        <button
          type="button"
          onClick={() => setPerfilAtivo("analista")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
            perfilAtivo === "analista"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Briefcase className="size-3.5" />
          Analista de Sistemas / Protheus
        </button>

        <button
          type="button"
          onClick={() => setPerfilAtivo("fullstack")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
            perfilAtivo === "fullstack"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code2 className="size-3.5" />
          Desenvolvimento &amp; Integrações
        </button>
      </div>

      {/* Grid com os dois módulos detalhados */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* MÓDULO 1: Analista de Sistemas */}
        {(perfilAtivo === "ambos" || perfilAtivo === "analista") && (
          <div className="tech-card flex flex-col justify-between p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tech-violet">
                  <Briefcase className="size-4" />
                  ERP &amp; Regras de Negócio
                </span>
                <Badge variante="contorno">TOTVS Protheus P12</Badge>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {analista.titulo}
              </h2>
              <p className="text-sm font-medium text-tech-violet">
                {analista.subtitulo}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {analista.headline}
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Destaques de Atuação:
                </h3>
                <ul className="space-y-2">
                  {analista.destaques.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground sm:text-sm">
                      <CheckCircle2 className="size-4 text-tech-violet shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Competências Chave:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {analista.competencias.map((comp) => (
                    <span key={comp} className="tech-badge-violet rounded-md px-2 py-0.5 text-xs font-medium">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-center text-xs text-muted-foreground">
                O currículo em PDF será preparado após a publicação do endereço oficial.
              </p>
            </div>
          </div>
        )}

        {/* MÓDULO 2: Desenvolvimento & Integrações */}
        {(perfilAtivo === "ambos" || perfilAtivo === "fullstack") && (
          <div className="tech-card flex flex-col justify-between p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tech-cyan">
                  <Code2 className="size-4" />
                  Software &amp; Aplicações
                </span>
                <Badge variante="contorno">React 19 + Node.js MVC</Badge>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {fullstack.titulo}
              </h2>
              <p className="text-sm font-medium text-tech-cyan">
                {fullstack.subtitulo}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {fullstack.headline}
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Destaques de Atuação:
                </h3>
                <ul className="space-y-2">
                  {fullstack.destaques.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground sm:text-sm">
                      <CheckCircle2 className="size-4 text-tech-cyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Competências Chave:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {fullstack.competencias.map((comp) => (
                    <span key={comp} className="tech-badge-cyan rounded-md px-2 py-0.5 text-xs font-medium">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-center text-xs text-muted-foreground">
                O currículo em PDF será preparado após a publicação do endereço oficial.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Seção do Padrão LES */}
      <section className="tech-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <TerminalSquare className="size-5" />
          <h2 className="text-lg font-bold text-foreground sm:text-xl">
            Padrão de Engenharia de Software (LES v2.2.0)
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Padrão normativo executável criado para governança, consistência arquitetural e segurança deny-by-default.
          Disponível publicamente no npm sob o pacote <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@lecinolucas/les</code>.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={links.les.github}
            target="_blank"
            rel="noreferrer"
            className={classesBotao({ variante: "primario", tamanho: "sm" })}
          >
            Ver LES no GitHub
          </a>
          <a
            href={links.les.npm}
            target="_blank"
            rel="noreferrer"
            className={classesBotao({ variante: "contorno", tamanho: "sm" })}
          >
            Ver pacote npm
          </a>
        </div>
      </section>
    </PageContainer>
  );
}
