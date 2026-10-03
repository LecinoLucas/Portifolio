import { economiaPorFornecedor, economiaPorObra, evolucaoMensal, indicadoresCotacoes } from "@/data/demos/portal";

function formatar(valor: number) {
  return `R$ ${valor.toLocaleString("pt-BR")}`;
}

function Barras({ titulo, itens }: { titulo: string; itens: { nome: string; valor: number }[] }) {
  const maior = Math.max(...itens.map((i) => i.valor));
  return (
    <div className="portal-card">
      <h5 className="portal-titulo-card">{titulo}</h5>
      {itens.map((item) => (
        <div key={item.nome} className="portal-barra-linha">
          <span>{item.nome}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span className="portal-barra" style={{ width: `${(item.valor / maior) * 100}%` }} />
            <span className="portal-suave" style={{ whiteSpace: "nowrap" }}>{formatar(item.valor)}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function Evolucao() {
  const { referencia, escolhido } = evolucaoMensal;
  const maior = Math.max(...referencia);
  const ponto = (v: number, i: number) => `${(i / (referencia.length - 1)) * 300},${100 - (v / maior) * 90}`;
  return (
    <div className="portal-card">
      <h5 className="portal-titulo-card">Evolução mensal — referência x escolhido</h5>
      <p className="portal-suave">Últimos 12 meses</p>
      <svg viewBox="0 0 300 100" role="img" aria-label="Evolução mensal: o valor escolhido fica abaixo da referência" style={{ width: "100%", height: "8rem" }}>
        <polyline points={referencia.map(ponto).join(" ")} fill="none" stroke="#6b6b73" strokeWidth="1.5" strokeDasharray="4 3" />
        <polyline points={escolhido.map(ponto).join(" ")} fill="none" stroke="#7a0f12" strokeWidth="2" />
      </svg>
    </div>
  );
}

/** Dashboard de cotações: economia por obra, fornecedor e evolução. */
export function PortalCotacoes() {
  return (
    <div className="portal-grade">
      <div className="portal-grade portal-kpis">
        {indicadoresCotacoes.map((i) => (
          <div key={i.rotulo} className="portal-card">
            <div className={`portal-kpi-valor ${i.destaque ? "portal-verde" : ""}`}>{i.valor}</div>
            <div className="portal-suave">{i.rotulo}</div>
          </div>
        ))}
      </div>
      <div className="portal-grade portal-duas">
        <Barras titulo="Economia líquida por obra" itens={economiaPorObra} />
        <Barras titulo="Economia por fornecedor" itens={economiaPorFornecedor} />
      </div>
      <Evolucao />
    </div>
  );
}
