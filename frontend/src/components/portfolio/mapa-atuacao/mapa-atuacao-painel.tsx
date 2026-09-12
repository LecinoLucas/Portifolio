import { CheckCircle2, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import type { DesafioAtuacao } from "@/types/curriculo";
import { ROTULOS_NIVEL } from "@/data/curriculo-digital";
import { cn } from "@/lib/utils";

interface PropsMapaAtuacaoPainel {
  desafio: DesafioAtuacao;
}

export function MapaAtuacaoPainel({ desafio }: PropsMapaAtuacaoPainel) {
  return (
    <div
      id={`painel-${desafio.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${desafio.id}`}
      tabIndex={0}
      className="space-y-8 rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-8 shadow-xs backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Cabeçalho do Desafio Selecionado */}
      <div className="space-y-2 border-b border-border/60 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          <Sparkles className="size-3.5" />
          <span>Abordagem Profissional</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
          {desafio.tituloDesafio}
        </h3>

        <p className="text-sm sm:text-base font-semibold text-primary/90">
          “{desafio.perguntaOrientadora}”
        </p>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl pt-1">
          {desafio.resumoAbordagem}
        </p>
      </div>

      {/* Grade de Competências e Evidências com Níveis Factuais */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Competências e Evidências de Atuação
          </h4>
          <span className="text-[11px] text-muted-foreground font-mono">
            {desafio.competencias.length} competências catalogadas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {desafio.competencias.map((comp) => {
            const nivelConfig = ROTULOS_NIVEL[comp.nivel];

            return (
              <div
                key={comp.nome}
                className="rounded-xl border border-border/70 bg-background/50 p-3.5 sm:p-4 text-xs space-y-2 flex flex-col justify-between hover:border-border transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-foreground text-sm leading-snug">
                      {comp.nome}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide shrink-0 border",
                        nivelConfig.classe
                      )}
                    >
                      {nivelConfig.rotulo}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    {comp.evidencia}
                  </p>
                </div>

                {comp.moduloOuArea && (
                  <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                    <span>Área: {comp.moduloOuArea}</span>
                    <span className="inline-flex items-center gap-1 text-primary">
                      <CheckCircle2 className="size-3" /> Factual
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Destaque Prático de Projeto / Experiência Real (se houver) */}
      {desafio.destaquePratico && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-6 space-y-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <ShieldCheck className="size-4" />
              <span>Destaque de Atuação · {desafio.destaquePratico.titulo}</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-foreground">
              {desafio.destaquePratico.subtitulo}
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {desafio.destaquePratico.descricao}
            </p>
          </div>

          <div className="space-y-2 pt-1 border-t border-primary/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-foreground block">
              Pontos-chave da solução implementada:
            </span>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {desafio.destaquePratico.pontosChave.map((ponto) => (
                <li key={ponto} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>{ponto}</span>
                </li>
              ))}
            </ul>
          </div>

          {desafio.destaquePratico.notaSegurancaOuAviso && (
            <p className="text-[11px] text-muted-foreground/90 bg-background/80 p-2.5 rounded-lg border border-border/60 flex items-start gap-1.5">
              <HelpCircle className="size-3.5 text-primary shrink-0 mt-0.5" />
              <span>{desafio.destaquePratico.notaSegurancaOuAviso}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
