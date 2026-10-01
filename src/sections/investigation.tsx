import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { CasoRealBloco } from "@/components/portfolio/caso-real";
import { investigacao } from "@/data/investigacao";

export function Investigation() {
  const { etapas, riscos, consultaIlustrativa, casoReal } = investigacao;

  return (
    <Section id="investigacao">
      <SectionHeading
        rotulo="Investigação"
        titulo="Como investigo uma divergência financeira no Protheus"
        descricao="O método que sigo para chegar à causa raiz sem comprometer os dados de produção."
      />
      <Reveal className="mt-6">
        <Badge variante="primario">Modelo ilustrativo · dados fictícios</Badge>
      </Reveal>

      <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {etapas.map((etapa, indice) => (
          <Reveal key={etapa.titulo} atraso={(indice % 2) * 60}>
            <li className="border-l-2 border-primary/40 pl-4">
              <h3 className="text-sm font-semibold tracking-tight">
                <span className="mr-2 text-primary">{String(indice + 1).padStart(2, "0")}</span>
                {etapa.titulo}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{etapa.descricao}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {etapa.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Riscos considerados</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {riscos.map((risco) => (
            <li key={risco} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">
              {risco}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Exemplo de consulta</h3>
        <pre
          tabIndex={0}
          className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-4 text-xs leading-relaxed"
        >
          <code>{consultaIlustrativa.sql}</code>
        </pre>
        <p className="mt-3 text-xs text-muted-foreground">{consultaIlustrativa.legenda}</p>
      </Reveal>

      {casoReal ? <CasoRealBloco caso={casoReal} /> : null}
    </Section>
  );
}
