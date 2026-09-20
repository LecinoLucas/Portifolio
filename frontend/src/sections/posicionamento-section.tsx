import { Compass } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { curriculoDigital } from "@/data/curriculo-digital";

const BADGES_IMPACTO = ["+4 Anos em TI Corporativa", "51 Filiais — Grupo 2", "60 Testes Automatizados"];

export function PosicionamentoSection() {
  const { perfil } = curriculoDigital;

  return (
    <Reveal as="section" className="dossie-card p-5 sm:p-7 space-y-4">
      <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <Compass className="size-3.5 text-tech-cyan" />
        <span>Declaração de Posicionamento</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
        {perfil.conceitoPrincipal}
      </h2>

      <p className="text-base sm:text-lg font-medium text-foreground/90 tracking-tight leading-snug">
        {perfil.mensagemCentral}
      </p>

      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
        Sustentação de processos críticos, ERP TOTVS Protheus e engenharia de integrações
        seguras em ambientes corporativos multiempresa e multifilial.
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {BADGES_IMPACTO.map((badge) => (
          <span
            key={badge}
            className="rounded border border-border bg-muted/40 px-2.5 py-1 font-mono text-[11px] font-medium text-muted-foreground"
          >
            {badge}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
