import { useState } from "react";
import { Building2, ChevronDown, PanelLeft, Sparkles } from "lucide-react";
import { ConteudoFiscal } from "@/components/demos/fiscal-telas";
import { MolduraDemo } from "@/components/demos/moldura-demo";
import { menuFiscal, type TelaFiscal } from "@/data/demos/fiscal";
import "@/styles/fiscal-demo.css";

/** Réplica visual do Portal Fiscal, com dados fictícios e telas navegáveis. */
export function FiscalDemo() {
  const [tela, setTela] = useState<TelaFiscal>("geral");
  const atual = menuFiscal.find((m) => m.id === tela) ?? menuFiscal[0];

  return (
    <MolduraDemo titulo="Portal Fiscal · demonstração">
      <div className="fiscal" data-testid="fiscal-demo">
        <nav className="fiscal-lateral" aria-label="Módulos do portal fiscal">
          <div className="fiscal-marca"><span className="fiscal-logo">P</span><span><b>REDE EXEMPLO</b><br /><small>PORTAL FISCAL</small></span></div>
          <span className="fiscal-grupo">MÓDULOS</span>
          {menuFiscal.map((m) => (
            <button key={m.id} type="button" className="fiscal-item" aria-current={tela === m.id ? "page" : undefined} onClick={() => setTela(m.id)}>{m.rotulo}</button>
          ))}
          <div className="fiscal-usuario"><span className="fiscal-avatar">SA</span><span><b>Analista Fiscal</b><br /><small>analista@exemplo.test</small></span></div>
        </nav>
        <div className="fiscal-principal">
          <div className="fiscal-nav-topo" role="tablist" aria-label="Telas da demonstração">
            {menuFiscal.map((m) => (
              <button key={m.id} type="button" role="tab" aria-selected={tela === m.id} className="fiscal-item" aria-current={tela === m.id ? "page" : undefined} onClick={() => setTela(m.id)}>{m.rotulo}</button>
            ))}
          </div>
          <header className="fiscal-topo">
            <span className="fiscal-topo-esq"><PanelLeft aria-hidden="true" className="size-4" /> <b>{atual.titulo}</b></span>
            <span className="fiscal-topo-dir">
              <span className="fiscal-assistente"><Sparkles aria-hidden="true" className="size-4" /> Assistente</span>
              <span className="fiscal-seletor"><Building2 aria-hidden="true" className="size-4" /> Grupo 02 <ChevronDown aria-hidden="true" className="size-3" /></span>
            </span>
          </header>
          <div className="fiscal-conteudo">
            {tela === "geral" ? <span className="fiscal-eyebrow">CENTRAL OPERACIONAL FISCAL</span> : null}
            <h4 className="fiscal-titulo">{atual.titulo}</h4>
            <p className="fiscal-suave" style={{ margin: "0 0 1rem" }}>{atual.descricao}</p>
            <ConteudoFiscal tela={tela} />
          </div>
        </div>
      </div>
    </MolduraDemo>
  );
}
