import { CheckCircle2, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Container } from "@/components/layout/container";
import { perfil } from "@/data/perfil";
import { experiencias } from "@/data/experiencias";
import { formacao } from "@/data/formacao";

export function CurriculoCompetenciasExperiencia() {
  return (
    <section className="py-12 sm:py-16 border-b border-border/80">
      <Container className="space-y-12">
        {/* 1. Competências Principais do Currículo */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Matriz de Conhecimento Técnico
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              Competências Principais
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Estruturadas conforme o currículo oficial, unindo processos corporativos, ERP e desenvolvimento moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {perfil.competenciasCategorizadas?.map((cat) => (
              <div
                key={cat.categoria}
                className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5 text-xs space-y-3 shadow-xs backdrop-blur-xs"
              >
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider border-b border-border/60 pb-2">
                  {cat.categoria}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.itens.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Experiência Profissional */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-tech-cyan">
              Trajetória &amp; Atuação Prática
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-foreground flex items-center gap-2">
              <Briefcase className="size-6 text-tech-cyan" />
              Experiência Profissional
            </h2>
          </div>

          <div className="space-y-4">
            {experiencias.map((exp) => (
              <div
                key={exp.cargo + exp.organizacao}
                className="rounded-xl border border-border/80 bg-card/60 p-5 text-xs space-y-3 shadow-xs backdrop-blur-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {exp.cargo}
                    </h3>
                    <span className="text-xs font-semibold text-primary">
                      {exp.organizacao}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="size-3" />
                    {exp.periodo}
                  </span>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed">
                  {exp.resumo}
                </p>

                <ul className="space-y-1.5 text-xs text-foreground/90">
                  {exp.destaques.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-tech-cyan shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] rounded bg-muted/60 text-muted-foreground px-2 py-0.5 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Formação Acadêmica */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <GraduationCap className="size-4 text-tech-violet" />
            Formação Acadêmica
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formacao.map((f) => (
              <div
                key={f.curso}
                className="rounded-xl border border-border/80 bg-card/60 p-4 text-xs space-y-1.5 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground text-sm">{f.curso}</span>
                  <span className="rounded bg-emerald-500/10 text-emerald-500 px-2 py-0.5 font-bold text-[10px]">
                    {f.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground font-mono text-xs">
                  <span>{f.instituicao}</span>
                  <span>{f.periodo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
