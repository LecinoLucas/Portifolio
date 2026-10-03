import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { competencias, faixaDoConsumo, mapaCalor } from "@/data/demos/portal";

const LEGENDA = [
  ["vazio", "Sem dados"],
  ["normal", "Normal (< 80%)"],
  ["atencao", "Atenção (80–95%)"],
  ["critico", "Crítico (95–100%)"],
  ["estourado", "Estourado (> 100%)"],
] as const;

/** Mapa de calor: consumo do orçamento por macro e competência. */
export function PortalAnalise() {
  const [selecao, setSelecao] = useState<{ macro: string; mes: string; valor: number | null } | null>(null);

  return (
    <div className="portal-card">
      <h5 className="portal-titulo-card">Mapa de calor por macro e competência</h5>
      <p className="portal-suave">Consumo % acumulado até a competência. Toque numa célula para o detalhe.</p>
      <table className="portal-tabela" style={{ marginTop: "0.6rem" }}>
        <thead>
          <tr>
            <th scope="col">MACRO</th>
            {competencias.map((c) => <th key={c} scope="col">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {mapaCalor.map((linha) => (
            <tr key={linha.macro}>
              <th scope="row" style={{ fontWeight: 600, letterSpacing: 0, color: "inherit", fontSize: "0.8rem" }}>{linha.macro}</th>
              {linha.valores.map((valor, i) => {
                const faixa = faixaDoConsumo(valor);
                const mes = competencias[i];
                return (
                  <td key={mes}>
                    <button
                      type="button"
                      className="portal-celula"
                      data-faixa={faixa}
                      aria-pressed={selecao?.macro === linha.macro && selecao.mes === mes}
                      aria-label={`${linha.macro}, ${mes}: ${valor === null ? "sem dados" : `${valor}%`}`}
                      onClick={() => setSelecao({ macro: linha.macro, mes, valor })}
                      style={{ width: "100%" }}
                    >
                      {faixa === "estourado" ? <AlertTriangle aria-hidden="true" className="inline size-3" /> : null}
                      {valor === null ? "—" : `${valor}%`}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="portal-suave" aria-live="polite" style={{ marginTop: "0.6rem" }}>
        {selecao
          ? selecao.valor === null
            ? `${selecao.macro} · ${selecao.mes}: sem dados lançados.`
            : `${selecao.macro} · ${selecao.mes}: ${selecao.valor}% do orçamento consumido.`
          : "Nenhuma célula selecionada."}
      </p>
      <div className="portal-legenda">
        {LEGENDA.map(([faixa, rotulo]) => (
          <span key={faixa} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            <span className="portal-celula" data-faixa={faixa} style={{ minWidth: "0.9rem", padding: "0.3rem", display: "inline-block" }} />
            {rotulo}
          </span>
        ))}
      </div>
    </div>
  );
}
