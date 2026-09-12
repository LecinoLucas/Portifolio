import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { Experiencia } from "@/types";

interface PropsExperienceItem {
  experiencia: Experiencia;
  atraso?: number;
  /** Último item da timeline — não desenha o segmento de conector abaixo. */
  ultimo?: boolean;
}

export function ExperienceItem({
  experiencia,
  atraso = 0,
  ultimo = false,
}: PropsExperienceItem) {
  const ehDirecao = experiencia.tipo === "direcao";

  return (
    <li className="relative pl-8">
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-1.5 size-3 rounded-full border-2 bg-background",
          ehDirecao ? "border-dashed border-muted-foreground" : "border-primary",
        )}
      />
      {!ultimo ? (
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-6 h-[calc(100%-1rem)] w-px bg-border"
        />
      ) : null}

      <Reveal atraso={atraso}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold tracking-tight">{experiencia.cargo}</h3>
          {ehDirecao ? (
            <Badge variante="contorno">Direção de evolução</Badge>
          ) : null}
          <span className="ml-auto text-xs font-medium text-muted-foreground">
            {experiencia.periodo}
          </span>
        </div>

        <p className="mt-0.5 text-sm text-muted-foreground">
          {experiencia.organizacao}
          {!ehDirecao && experiencia.atual ? (
            <span className="ml-2 inline-flex items-center gap-1 text-success">
              <span className="size-1.5 rounded-full bg-success" /> Atual
            </span>
          ) : null}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {experiencia.resumo}
        </p>

        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
          {experiencia.destaques.map((destaque) => (
            <li key={destaque}>{destaque}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {experiencia.tags.map((tag) => (
            <Badge key={tag} variante="neutro">
              {tag}
            </Badge>
          ))}
        </div>
      </Reveal>
    </li>
  );
}
