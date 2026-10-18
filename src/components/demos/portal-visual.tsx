import type { ReactNode } from "react";
import type { Tom } from "@/data/demos/portal-telas";

/** Selo de situação (texto + cor), como nas telas reais. */
export function Selo({ tom, children }: { tom: Tom; children: ReactNode }) {
  return <span className="portal-selo" data-tom={tom}>{children}</span>;
}

/** Cartão de indicador com valor grande. */
export function Kpi({ rotulo, valor, apoio, tom }: { rotulo: string; valor: string; apoio?: string; tom?: Tom }) {
  return (
    <div className="portal-card">
      <div className="portal-suave" style={{ fontWeight: 600 }}>{rotulo}</div>
      <div className="portal-kpi-valor" data-tom={tom}>{valor}</div>
      {apoio ? <div className="portal-suave">{apoio}</div> : null}
    </div>
  );
}

/** Barra de andamento. */
export function Andamento({ valor }: { valor: number }) {
  return (
    <div className="portal-progresso" role="img" aria-label={`${valor}% concluído`}>
      <span style={{ width: `${valor}%` }} />
    </div>
  );
}

/** Abas de seção, no estilo dos botões do portal real. */
export function AbasBotao({ itens, ativa, aoMudar, rotulo }: { itens: string[]; ativa: string; aoMudar: (n: string) => void; rotulo: string }) {
  return (
    <div role="tablist" aria-label={rotulo} className="portal-abas-botao">
      {itens.map((nome) => (
        <button key={nome} type="button" role="tab" aria-selected={ativa === nome} onClick={() => aoMudar(nome)}>{nome}</button>
      ))}
    </div>
  );
}
