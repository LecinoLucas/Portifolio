import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { curriculoDigital } from "@/data/curriculo-digital";

export function CurriculoTrajetoriaSection() {
  const { perfil, trajetoria } = curriculoDigital;

  return (
    <section id="trajetoria" className="py-12 sm:py-16 border-b border-border/80">
      <Container className="space-y-10">
        {/* Cabeçalho da Trajetória */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Briefcase className="size-3.5" />
            <span>Evolução Profissional</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            {perfil.conceitoPrincipal}: Linha do Tempo Factual
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            {perfil.descricaoTrajetoria}
          </p>
        </div>

        {/* Linha do Tempo Editorial */}
        <div className="relative pl-6 sm:pl-8 border-l border-border/80 space-y-8">
          {trajetoria.map((etapa) => (
            <div key={etapa.id} className="relative group">
              {/* Marcador de Linha do Tempo */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 size-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

              <div className="rounded-xl border border-border/70 bg-card/50 p-4 sm:p-6 space-y-3 transition-all hover:border-border hover:bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-border/50 pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-primary shrink-0" />
                    <span className="font-black text-foreground text-base">
                      {etapa.empresa}
                    </span>
                    <span className="text-border">·</span>
                    <span className="text-xs font-bold text-primary">
                      {etapa.cargo}
                    </span>
                  </div>

                  {etapa.periodo ? (
                    <span className="font-mono text-xs text-muted-foreground">
                      {etapa.periodo}
                    </span>
                  ) : null}
                </div>

                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {etapa.resumoAtuacao}
                </p>

                {/* Atividades Factuais */}
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {etapa.atividades.map((atv) => (
                    <li key={atv} className="flex items-start gap-2">
                      <span className="size-1 rounded-full bg-muted-foreground/60 mt-2 shrink-0" />
                      <span>{atv}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags de Competências Aplicadas */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {etapa.competenciasAplicadas.map((comp) => (
                    <span
                      key={comp}
                      className="inline-flex items-center gap-1 rounded bg-background px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/60"
                    >
                      <CheckCircle2 className="size-2.5 text-primary" />
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
