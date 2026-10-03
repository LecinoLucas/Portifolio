import { useState } from "react";
import { obraDemo } from "@/data/demos/portal";

const ABAS = ["Visão Geral", "Orçamento", "Cronograma", "Medições", "Diário", "Documentos"];

function Fluxo() {
  const maior = Math.max(...obraDemo.fluxo.map((f) => f.orcado));
  return (
    <div className="portal-card">
      <h5 className="portal-titulo-card">Fluxo financeiro acumulado</h5>
      <p className="portal-suave">Orçado vs. realizado (R$ mil) · {obraDemo.nome}</p>
      <div role="img" aria-label="Barras de orçado e realizado por mês" style={{ display: "flex", alignItems: "flex-end", gap: "0.6rem", height: "8rem", marginTop: "0.6rem" }}>
        {obraDemo.fluxo.map((f) => (
          <div key={f.mes} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "2px", height: "6.5rem" }}>
              <span style={{ width: "40%", height: `${(f.orcado / maior) * 100}%`, background: "#d4d4d8" }} />
              <span style={{ width: "40%", height: `${(f.realizado / maior) * 100}%`, background: "var(--p-vinho)" }} />
            </div>
            <span className="portal-suave">{f.mes}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Conteudo({ aba }: { aba: string }) {
  if (aba === "Orçamento")
    return (
      <table className="portal-tabela">
        <thead><tr><th>ITEM</th><th>ORÇADO</th><th>REALIZADO</th></tr></thead>
        <tbody>{obraDemo.orcamento.map((o) => <tr key={o.item}><td>{o.item}</td><td>{o.orcado}</td><td>{o.realizado}</td></tr>)}</tbody>
      </table>
    );
  if (aba === "Cronograma")
    return (
      <div>
        {obraDemo.cronograma.map((c) => (
          <div key={c.etapa} style={{ margin: "0.6rem 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><b>{c.etapa}</b><span className="portal-suave">{c.inicio} → {c.fim} · {c.andamento}%</span></div>
            <div className="portal-progresso"><span style={{ width: `${c.andamento}%` }} /></div>
          </div>
        ))}
      </div>
    );
  if (aba === "Medições")
    return (
      <table className="portal-tabela">
        <thead><tr><th>MEDIÇÃO</th><th>PERÍODO</th><th>VALOR</th><th>SITUAÇÃO</th></tr></thead>
        <tbody>{obraDemo.medicoes.map((m) => <tr key={m.numero}><td>{m.numero}</td><td>{m.periodo}</td><td>{m.valor}</td><td><span className="portal-pill">{m.situacao}</span></td></tr>)}</tbody>
      </table>
    );
  if (aba === "Diário")
    return <ul style={{ margin: 0, paddingLeft: "1rem" }}>{obraDemo.diario.map((d) => <li key={d.data}><b>{d.data}</b> — {d.texto}</li>)}</ul>;
  if (aba === "Documentos")
    return <ul style={{ margin: 0, paddingLeft: "1rem" }}>{obraDemo.documentos.map((d) => <li key={d}>{d}</li>)}</ul>;
  return (
    <div className="portal-grade">
      <div className="portal-grade portal-kpis">
        {obraDemo.indicadores.map((i) => (
          <div key={i.rotulo} className="portal-card">
            <div className="portal-kpi-valor">{i.valor}</div>
            <div style={{ fontWeight: 600 }}>{i.rotulo}</div>
            <div className="portal-suave">{i.apoio}</div>
          </div>
        ))}
      </div>
      <Fluxo />
    </div>
  );
}

/** Detalhe de uma obra fictícia, com as abas do sistema real. */
export function PortalObra() {
  const [aba, setAba] = useState(ABAS[0]);
  return (
    <div>
      <p className="portal-suave">Obras › Detalhe da obra</p>
      <h5 style={{ margin: "0.2rem 0", fontSize: "1.3rem", fontWeight: 700 }}>{obraDemo.nome}</h5>
      <p className="portal-suave"><span className="portal-pill">Em andamento</span> · {obraDemo.local} · {obraDemo.periodo}</p>
      <div role="tablist" aria-label="Seções da obra" className="portal-abas" style={{ marginTop: "0.8rem" }}>
        {ABAS.map((nome) => (
          <button key={nome} role="tab" type="button" className="portal-aba" aria-selected={aba === nome} onClick={() => setAba(nome)}>{nome}</button>
        ))}
      </div>
      <div role="tabpanel"><Conteudo aba={aba} /></div>
    </div>
  );
}
