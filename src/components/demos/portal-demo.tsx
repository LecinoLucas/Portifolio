import { useState } from "react";
import { Bot, Building2, FileText, FolderOpen, LayoutGrid, LineChart, Plus, Settings } from "lucide-react";
import { MolduraDemo } from "@/components/demos/moldura-demo";
import { PortalAnalise } from "@/components/demos/portal-analise";
import { PortalCotacoes } from "@/components/demos/portal-cotacoes";
import { PortalIA } from "@/components/demos/portal-ia";
import { PortalObra } from "@/components/demos/portal-obra";
import type { TelaPortal } from "@/data/demos/portal";
import "@/styles/portal-demo.css";

const TELAS: { id: TelaPortal; rotulo: string; subtitulo: string; Icone: typeof LineChart }[] = [
  { id: "analise", rotulo: "Análise de Obras", subtitulo: "Orçado x Medido e desvios, todos os blocos obedecem aos mesmos filtros.", Icone: LineChart },
  { id: "obra", rotulo: "Obras", subtitulo: "Detalhe da obra", Icone: Building2 },
  { id: "cotacoes", rotulo: "Cotações", subtitulo: "Visão consolidada das cotações", Icone: FileText },
];

const OUTROS = [
  { rotulo: "Dashboard", Icone: LayoutGrid },
  { rotulo: "Controle de Diárias", Icone: FileText },
  { rotulo: "Imóveis", Icone: Building2 },
  { rotulo: "Checklist", Icone: FileText },
  { rotulo: "Manutenção", Icone: Settings },
  { rotulo: "Documentos", Icone: FolderOpen },
];

/** Réplica visual do Portal de Engenharia, com dados fictícios e telas navegáveis. */
export function PortalDemo() {
  const [tela, setTela] = useState<TelaPortal>("analise");
  const [iaAberta, setIaAberta] = useState(false);
  const atual = TELAS.find((t) => t.id === tela) ?? TELAS[0];

  return (
    <MolduraDemo titulo="Portal de Engenharia · demonstração">
      <div className="portal" data-testid="portal-demo">
        <nav className="portal-lateral" aria-label="Menu do portal">
          <span className="portal-marca">PORTAL DE ENGENHARIA</span>
          <span className="portal-grupo">VISÃO GERAL</span>
          {TELAS.map(({ id, rotulo, Icone }) => (
            <button key={id} type="button" className="portal-item" aria-current={tela === id ? "page" : undefined} onClick={() => setTela(id)}>
              <Icone aria-hidden="true" className="size-4" /> {rotulo}
            </button>
          ))}
          <span className="portal-grupo">OUTROS MÓDULOS</span>
          {OUTROS.map(({ rotulo, Icone }) => (
            <button key={rotulo} type="button" className="portal-item" disabled title="Fora da demonstração">
              <Icone aria-hidden="true" className="size-4" /> {rotulo}
            </button>
          ))}
        </nav>

        <div className="portal-principal">
          <div className="portal-nav-topo" role="tablist" aria-label="Telas da demonstração">
            {TELAS.map(({ id, rotulo }) => (
              <button key={id} type="button" role="tab" aria-selected={tela === id} className="portal-item" aria-current={tela === id ? "page" : undefined} onClick={() => setTela(id)}>{rotulo}</button>
            ))}
          </div>
          <header className="portal-topo">
            <div>
              <h4>{atual.rotulo}</h4>
              <p>{atual.subtitulo}</p>
            </div>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {tela === "cotacoes" ? <span className="portal-botao"><Plus aria-hidden="true" className="size-4" /> Nova Cotação</span> : null}
              <button type="button" className="portal-botao portal-botao-ia" aria-pressed={iaAberta} aria-label="Abrir IA de Engenharia" onClick={() => setIaAberta((v) => !v)}>
                <Bot aria-hidden="true" className="size-5" />
              </button>
            </div>
          </header>
          <div className="portal-corpo" style={{ flexWrap: "wrap" }}>
            <div className="portal-conteudo">
              {tela === "analise" ? <PortalAnalise /> : null}
              {tela === "cotacoes" ? <PortalCotacoes /> : null}
              {tela === "obra" ? <PortalObra /> : null}
            </div>
            {iaAberta ? <PortalIA aoAbrir={setTela} /> : null}
          </div>
        </div>
      </div>
    </MolduraDemo>
  );
}
