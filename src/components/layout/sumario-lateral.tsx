import { Download, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { itensNav } from "@/lib/nav";

const idsSecoes = itensNav.map((item) => item.id);

/** Sumário fixo na lateral (telas largas): leva direto à seção escolhida. */
export function SumarioLateral() {
  const ativo = useScrollSpy(idsSecoes);

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-border bg-background/90 px-5 py-6 backdrop-blur lg:flex">
      <a href="#topo" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <span className="block font-mono text-base font-semibold tracking-tight">Lecino Lucas</span>
        <span className="mt-1 block text-xs text-muted-foreground">Analista de Sistemas · Sustentação N2/N3</span>
      </a>

      <nav aria-label="Sumário" className="mt-8 flex-1 overflow-y-auto">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">// sumário</p>
        <ol className="mt-3 space-y-1">
          {itensNav.map((item, indice) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={ativo === item.id ? "true" : undefined}
                className="group flex gap-3 rounded-md border-l-2 border-transparent px-3 py-2 transition-colors hover:bg-accent/60 aria-[current]:border-primary aria-[current]:bg-accent"
              >
                <span className="pt-0.5 font-mono text-xs text-muted-foreground group-aria-[current]:text-primary">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-sm font-medium">{item.rotulo}</span>
                  <span className="block text-xs text-muted-foreground">{item.descricao}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-3 border-t border-border pt-4">
        <a href={links.curriculo} download className={classesBotao({ className: "w-full" })}>
          <Download /> Baixar currículo
        </a>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={classesBotao({ variante: "fantasma", tamanho: "icone" })}>
              <Github />
            </a>
            {links.linkedin ? (
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={classesBotao({ variante: "fantasma", tamanho: "icone" })}>
                <Linkedin />
              </a>
            ) : null}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
