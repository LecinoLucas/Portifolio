import { useState } from "react";
import { CheckCircle2, Briefcase, Code2, Download, Layers } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { classesBotao } from "@/components/ui/button-variants";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function Specializations() {
  const [perfilAtivo, setPerfilAtivo] = useState<"analista" | "fullstack" | "ambos">("ambos");

  const analista = perfil.perfis.analista;
  const fullstack = perfil.perfis.fullstack;

  return (
    <Section id="atuacao" className="scroll-mt-16">
      <SectionHeading
        rotulo="Competências &amp; Especialidades"
        titulo="Dois posicionamentos, uma sólida base técnica"
        descricao="Conhecimento profundo das regras de negócio de sistemas corporativos aliado à capacidade de projetar e construir software em produção."
      />

      {/* Controles de visualização / Filtro de perfil */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setPerfilAtivo("ambos")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            perfilAtivo === "ambos"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Layers className="size-4" />
          Visão Completa
        </button>

        <button
          type="button"
          onClick={() => setPerfilAtivo("analista")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            perfilAtivo === "analista"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Briefcase className="size-4" />
          Analista de Sistemas / Protheus
        </button>

        <button
          type="button"
          onClick={() => setPerfilAtivo("fullstack")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            perfilAtivo === "fullstack"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code2 className="size-4" />
          Desenvolvedor Full Stack Júnior
        </button>
      </div>

      {/* Grade com as duas áreas dedicadas */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* ÁREA 1: Analista de Sistemas & Protheus */}
        {(perfilAtivo === "ambos" || perfilAtivo === "analista") && (
          <div id="analista-protheus" className="scroll-mt-24">
            <Reveal className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    <Briefcase className="size-4" />
                    ERP &amp; Regras de Negócio
                  </span>
                  <Badge variante="contorno">TOTVS Protheus P12</Badge>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  {analista.titulo}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {analista.subtitulo}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {analista.headline}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                    Destaques de Atuação
                  </h4>
                  <ul className="space-y-2.5">
                    {analista.destaques.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                    Competências Chave
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {analista.competencias.map((comp) => (
                      <Badge key={comp} variante="neutro">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <a
                  href={links.curriculoAnalista}
                  download
                  className={classesBotao({ variante: "contorno", className: "w-full justify-center" })}
                >
                  <Download className="size-4" />
                  Baixar Currículo Analista de Sistemas (PDF)
                </a>
              </div>
            </Reveal>
          </div>
        )}

        {/* ÁREA 2: Desenvolvedor Full Stack Júnior */}
        {(perfilAtivo === "ambos" || perfilAtivo === "fullstack") && (
          <div id="fullstack" className="scroll-mt-24">
            <Reveal
              atraso={perfilAtivo === "ambos" ? 80 : 0}
              className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    <Code2 className="size-4" />
                    Aplicações &amp; APIs
                  </span>
                  <Badge variante="contorno">React 19 + Node.js MVC</Badge>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  {fullstack.titulo}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {fullstack.subtitulo}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {fullstack.headline}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                    Destaques de Atuação
                  </h4>
                  <ul className="space-y-2.5">
                    {fullstack.destaques.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                    Competências Chave
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {fullstack.competencias.map((comp) => (
                      <Badge key={comp} variante="neutro">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <a
                  href={links.curriculoFullstack}
                  download
                  className={classesBotao({ variante: "contorno", className: "w-full justify-center" })}
                >
                  <Download className="size-4" />
                  Baixar Currículo Full Stack (PDF)
                </a>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </Section>
  );
}
