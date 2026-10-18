import type { BlocoSistema, CelulaSistema, TomSistema } from "@/data/demos/sistema-tipos";

export function SeloSistema({ tom = "cinza", children }: { tom?: TomSistema; children: string }) {
  return <span className="sis-selo" data-tom={tom}>{children}</span>;
}

const celula = (c: CelulaSistema) => (typeof c === "string" ? c : <SeloSistema tom={c.tom}>{c.selo}</SeloSistema>);

/** Renderiza um bloco visual (indicadores, tabela, cartões, agenda, barras ou aviso). */
export function Bloco({ bloco }: { bloco: BlocoSistema }) {
  if (bloco.tipo === "kpis") {
    return (
      <div className="sis-grade sis-kpis">
        {bloco.itens.map((k) => (
          <div key={k.rotulo} className="sis-card">
            <span className="sis-rotulo">{k.rotulo}</span>
            <div className="sis-numero" data-tom={k.tom}>{k.valor}</div>
            {k.apoio ? <span className="sis-suave">{k.apoio}</span> : null}
          </div>
        ))}
      </div>
    );
  }
  if (bloco.tipo === "tabela") {
    return (
      <div className="sis-card sis-tabela-wrap">
        {bloco.titulo ? <h5 className="sis-h5">{bloco.titulo}</h5> : null}
        <table className="sis-tabela">
          <thead><tr>{bloco.colunas.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
          <tbody>
            {bloco.linhas.map((linha, i) => (
              <tr key={i}>{linha.map((c, j) => <td key={j}>{j === 0 ? <b>{celula(c)}</b> : celula(c)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (bloco.tipo === "cartoes") {
    return (
      <div className="sis-grade sis-cartoes">
        {bloco.itens.map((c) => (
          <div key={c.titulo} className="sis-card">
            <div className="sis-linha-topo"><b>{c.titulo}</b>{c.selo ? <SeloSistema tom={c.tom}>{c.selo}</SeloSistema> : null}</div>
            {c.texto ? <p className="sis-suave sis-p">{c.texto}</p> : null}
            {c.progresso !== undefined ? (
              <div className="sis-barra" role="img" aria-label={`${c.progresso}%`}><span style={{ width: `${c.progresso}%` }} /></div>
            ) : null}
            {c.meta ? <span className="sis-suave">{c.meta}</span> : null}
          </div>
        ))}
      </div>
    );
  }
  if (bloco.tipo === "agenda") {
    return (
      <div className="sis-grade sis-agenda">
        {bloco.colunas.map((col) => (
          <div key={col.nome} className="sis-coluna">
            <b className="sis-coluna-nome">{col.nome}</b>
            {col.itens.map((it) => (
              <div key={`${it.hora}-${it.titulo}`} className="sis-evento" data-tom={it.tom}>
                <span className="sis-hora">{it.hora}</span>
                <div><b>{it.titulo}</b><div className="sis-suave">{it.detalhe}</div></div>
                <SeloSistema tom={it.tom}>{it.selo}</SeloSistema>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (bloco.tipo === "barras") {
    const maior = Math.max(...bloco.itens.map((i) => i.valor));
    return (
      <div className="sis-card">
        <h5 className="sis-h5">{bloco.titulo}</h5>
        {bloco.itens.map((i) => (
          <div key={i.rotulo} className="sis-linha-barra">
            <span>{i.rotulo}</span>
            <span className="sis-trilho"><span style={{ width: `${(i.valor / maior) * 100}%` }} /></span>
            <span className="sis-suave">{i.texto}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="sis-aviso" data-tom={bloco.tom}>
      <b>{bloco.titulo}</b>
      <div>{bloco.texto}</div>
    </div>
  );
}
