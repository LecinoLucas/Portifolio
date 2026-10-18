import { AlertTriangle, CheckCircle2, ChevronRight, FileUp, Fuel, UserCheck } from "lucide-react";
import {
  atalhos, cadastrosFiscal, certidoes, colunasKanban, kpisGeral, tabelas, tanques,
  type Celula, type TelaFiscal, type TomFiscal,
} from "@/data/demos/fiscal";

export function SeloFiscal({ tom, children }: { tom: TomFiscal; children: string }) {
  return <span className="fiscal-selo" data-tom={tom}>{children}</span>;
}

function celula(c: Celula) {
  return typeof c === "string" ? c : <SeloFiscal tom={c.tom}>{c.selo}</SeloFiscal>;
}

function Tabela({ tela }: { tela: TelaFiscal }) {
  const dados = tabelas[tela];
  if (!dados) return null;
  return (
    <div className="fiscal-card" style={{ overflowX: "auto", padding: 0 }}>
      <table className="fiscal-tabela">
        <thead><tr>{dados.colunas.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
        <tbody>
          {dados.linhas.map((linha, i) => (
            <tr key={i}>{linha.map((c, j) => <td key={j}>{j === 0 ? <b>{celula(c)}</b> : celula(c)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Geral() {
  return (
    <div className="fiscal-grade">
      <div className="fiscal-grade fiscal-kpis">
        {kpisGeral.map((k) => (
          <div key={k.rotulo} className="fiscal-card">
            <span className="fiscal-rotulo">{k.rotulo.toUpperCase()}</span>
            <div className="fiscal-numero">{k.valor}</div>
            <span className="fiscal-suave">{k.apoio}</span>
          </div>
        ))}
      </div>
      <div className="fiscal-grade fiscal-duas">
        <div>
          <span className="fiscal-eyebrow">MONITORAMENTO CONTÍNUO</span>
          <h5 className="fiscal-h5">Requer atenção</h5>
          <div className="fiscal-alerta" data-tom="verde"><CheckCircle2 aria-hidden="true" className="size-5" /><div><b>Operação fiscal sem divergências críticas</b><div>Nenhuma nota fiscal exige ação corretiva de alta severidade no contexto ativo.</div></div></div>
          <div className="fiscal-alerta" data-tom="laranja" style={{ marginTop: "0.6rem" }}><AlertTriangle aria-hidden="true" className="size-5" /><div><b>1 certificado vence em 38 dias</b><div>Renove o certificado da filial 0102 para manter a distribuição DF-e.</div></div></div>
        </div>
        <div className="fiscal-card">
          <h5 className="fiscal-h5" style={{ marginTop: 0 }}>Ações rápidas</h5>
          <div className="fiscal-atalhos">
            {atalhos.map((a, i) => (
              <span key={a} className="fiscal-atalho">{i === 0 ? <FileUp aria-hidden="true" className="size-4" /> : <UserCheck aria-hidden="true" className="size-4" />}{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Regularidade() {
  return (
    <div className="fiscal-grade fiscal-cartoes">
      {certidoes.map((c) => (
        <div key={c.nome} className="fiscal-card">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "0.4rem" }}><b>{c.nome}</b><SeloFiscal tom={c.tom}>{c.situacao}</SeloFiscal></div>
          <p className="fiscal-suave" style={{ margin: "0.4rem 0 0" }}>{c.validade}</p>
        </div>
      ))}
    </div>
  );
}

function Combustiveis() {
  return (
    <div className="fiscal-grade fiscal-cartoes">
      {tanques.map((t) => (
        <div key={t.nome} className="fiscal-card">
          <Fuel aria-hidden="true" className="size-5" style={{ color: "var(--f-azul)" }} />
          <b style={{ display: "block", margin: "0.3rem 0" }}>{t.nome}</b>
          <div className="fiscal-barra" role="img" aria-label={`${t.nivel}% do tanque`}><span style={{ width: `${t.nivel}%` }} /></div>
          <span className="fiscal-suave">{t.nivel}% · {t.litros}</span>
        </div>
      ))}
    </div>
  );
}

function Atividades() {
  return (
    <div className="fiscal-grade fiscal-kanban">
      {colunasKanban.map((col) => (
        <div key={col.titulo} className="fiscal-coluna">
          <b>{col.titulo} <span className="fiscal-suave">— {col.cartoes.length}</span></b>
          {col.cartoes.map((c) => (
            <div key={c.codigo} className="fiscal-card">
              <div style={{ display: "flex", justifyContent: "space-between", gap: "0.4rem" }}><span className="fiscal-codigo">{c.codigo}</span><SeloFiscal tom={c.tom}>{c.selo}</SeloFiscal></div>
              <b style={{ display: "block", margin: "0.3rem 0" }}>{c.titulo}</b>
              <span className="fiscal-suave">{c.filial} · {c.prazo}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Configuracoes() {
  return (
    <div className="fiscal-grade fiscal-cartoes">
      {cadastrosFiscal.map((c) => (
        <div key={c.titulo} className="fiscal-card" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <b>{c.titulo}</b><span className="fiscal-suave">{c.texto}</span>
          <ChevronRight aria-hidden="true" className="size-4" style={{ color: "var(--f-azul)" }} />
        </div>
      ))}
    </div>
  );
}

/** Conteúdo da tela escolhida (aproximação visual do portal real). */
export function ConteudoFiscal({ tela }: { tela: TelaFiscal }) {
  if (tela === "geral") return <Geral />;
  if (tela === "regularidade") return <Regularidade />;
  if (tela === "combustiveis") return <Combustiveis />;
  if (tela === "atividades") return <Atividades />;
  if (tela === "config") return <Configuracoes />;
  return <Tabela tela={tela} />;
}
