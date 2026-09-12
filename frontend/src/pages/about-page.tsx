import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Workflow } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { classesBotao } from "@/components/ui/button-variants";
import { perfil } from "@/data/perfil";
import { principios } from "@/data/principios";

export function AboutPage() {
  return (
    <PageContainer
      rotulo="Trajetória &amp; Perfil"
      titulo="Sobre Lecino Lucas"
      subtitulo="Conectando processos de negócio, ERP corporativo e engenharia de software moderna para entregar sistemas seguros e escaláveis."
    >
      {/* 1. História e Evolução Profissional */}
      <section className="tech-card space-y-6 p-6 sm:p-8">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          A Trajetória: Do Suporte ao Desenvolvimento de Software
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {perfil.bio.map((paragrafo, idx) => (
            <p key={idx}>{paragrafo}</p>
          ))}
        </div>
      </section>

      {/* 2. Fatos Rápidos e Fundamentos */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Fundamentos Técnicos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perfil.fatos.map((fato) => (
            <div key={fato.rotulo} className="tech-card p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {fato.rotulo}
              </span>
              <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                {fato.valor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Princípios de Trabalho e LES */}
      <section className="tech-card space-y-6 p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Workflow className="size-5 text-tech-violet" />
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Como Eu Trabalho: Princípios de Engenharia
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Em vez de reinventar regras a cada tarefa, aplico padrões de qualidade comprovados para manter código previsível, testável e seguro:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {principios.map((p) => (
            <div key={p.titulo} className="rounded-lg border border-border bg-background/50 p-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <h3 className="text-sm font-semibold text-foreground">{p.titulo}</h3>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {p.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Próximos Passos */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <Link to="/experiencia" className={classesBotao({ variante: "primario" })}>
            Ver Experiência Profissional
            <ArrowRight className="size-4" />
          </Link>
          <Link to="/projetos" className={classesBotao({ variante: "contorno" })}>
            Ver Estudos de Caso
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
