import { useState } from "react";
import { Building2, ChevronRight, FileText, FolderOpen, Settings } from "lucide-react";
import { AbasBotao, Andamento, Kpi, Selo } from "@/components/demos/portal-visual";
import {
  atividades, cadastros, chamados, chamadosKpis, checklists, dashboardKpis, diariasPlanilhas,
  documentos, imoveis, obrasLista,
} from "@/data/demos/portal-telas";

export function PortalDashboard() {
  return (
    <div className="portal-grade">
      <div className="portal-grade portal-kpis">{dashboardKpis.map((k) => <Kpi key={k.rotulo} {...k} />)}</div>
      <div className="portal-grade portal-duas">
        <div className="portal-card">
          <h5 className="portal-titulo-card">Obras em andamento</h5>
          {obrasLista.slice(0, 4).map((o) => (
            <div key={o.codigo} style={{ margin: "0.6rem 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><b>{o.nome}</b><span className="portal-suave">{o.andamento}%</span></div>
              <Andamento valor={o.andamento} />
            </div>
          ))}
        </div>
        <div className="portal-card">
          <h5 className="portal-titulo-card">Atividade recente</h5>
          <ul style={{ margin: 0, paddingLeft: "1rem" }}>{atividades.map((a) => <li key={a} style={{ margin: "0.4rem 0" }}>{a}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export function PortalObras({ aoAbrir }: { aoAbrir: () => void }) {
  return (
    <div className="portal-grade portal-cartoes">
      {obrasLista.map((o) => (
        <button key={o.codigo} type="button" className="portal-card portal-card-botao" onClick={aoAbrir} aria-label={`Abrir ${o.nome}`}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "0.4rem" }}>
            <b>{o.nome}</b><Selo tom={o.tom}>{o.status}</Selo>
          </div>
          <span className="portal-suave"><Building2 aria-hidden="true" className="size-3 inline" /> {o.local} · {o.codigo}</span>
          <Andamento valor={o.andamento} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="portal-suave">Orçamento</span><b>{o.orcamento}</b>
          </div>
        </button>
      ))}
    </div>
  );
}

export function PortalDiarias() {
  return (
    <div className="portal-card" style={{ overflowX: "auto" }}>
      <table className="portal-tabela">
        <thead><tr><th>PERÍODO</th><th>OBRA</th><th>PESSOAS</th><th>TOTAL</th><th>STATUS</th></tr></thead>
        <tbody>
          {diariasPlanilhas.map((d) => (
            <tr key={`${d.periodo}-${d.obra}`}><td>{d.periodo}</td><td><b>{d.obra}</b></td><td>{d.pessoas}</td><td>{d.total}</td><td><Selo tom={d.tom}>{d.status}</Selo></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PortalImoveis() {
  return (
    <div className="portal-grade portal-cartoes">
      {imoveis.map((i) => (
        <div key={i.nome} className="portal-card">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "0.4rem" }}><b>{i.nome}</b><Selo tom={i.tom}>{i.situacao}</Selo></div>
          <p className="portal-suave" style={{ margin: "0.3rem 0" }}>{i.local}</p>
          <span className="portal-pill">{i.contrato}</span>
        </div>
      ))}
    </div>
  );
}

export function PortalChecklist() {
  return (
    <div className="portal-grade">
      {checklists.map((c) => (
        <div key={c.nome} className="portal-card">
          <div style={{ display: "flex", justifyContent: "space-between" }}><b>{c.nome}</b><span className="portal-suave">{c.feitos}/{c.total}</span></div>
          <p className="portal-suave" style={{ margin: "0.2rem 0 0.5rem" }}>{c.obra}</p>
          <Andamento valor={Math.round((c.feitos / c.total) * 100)} />
        </div>
      ))}
    </div>
  );
}

const ABAS_CHAMADOS = ["Chamados", "Dashboard", "Calendário", "Relatórios"];

export function PortalChamados() {
  const [aba, setAba] = useState("Dashboard");
  return (
    <div className="portal-grade">
      <AbasBotao itens={ABAS_CHAMADOS} ativa={aba} aoMudar={setAba} rotulo="Seções de manutenção" />
      {aba === "Dashboard" ? (
        <div className="portal-grade portal-kpis">{chamadosKpis.map((k) => <Kpi key={k.rotulo} {...k} />)}</div>
      ) : null}
      <div className="portal-card" style={{ overflowX: "auto" }}>
        <table className="portal-tabela">
          <thead><tr><th>CÓDIGO</th><th>CHAMADO</th><th>PRIORIDADE</th><th>STATUS</th></tr></thead>
          <tbody>
            {chamados.map((c) => <tr key={c.codigo}><td>{c.codigo}</td><td><b>{c.titulo}</b></td><td>{c.prioridade}</td><td><Selo tom={c.tom}>{c.status}</Selo></td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PortalDocumentos() {
  return (
    <div className="portal-card">
      {documentos.map((d) => (
        <div key={d.nome} className="portal-linha-doc">
          <FileText aria-hidden="true" className="size-5" style={{ color: "var(--p-vinho)" }} />
          <div style={{ flex: 1 }}><b>{d.nome}</b><div className="portal-suave">{d.obra} · {d.tipo}</div></div>
          <span className="portal-suave">{d.data}</span>
        </div>
      ))}
      <p className="portal-suave" style={{ margin: "0.6rem 0 0" }}><FolderOpen aria-hidden="true" className="size-3 inline" /> Arquivos de exemplo, sem conteúdo real.</p>
    </div>
  );
}

export function PortalConfiguracoes() {
  return (
    <div className="portal-grade portal-cartoes">
      {cadastros.map((c) => (
        <div key={c.titulo} className="portal-card portal-cadastro">
          <span className="portal-icone"><Settings aria-hidden="true" className="size-5" /></span>
          <b>{c.titulo}</b>
          <span className="portal-suave">{c.texto}</span>
          <ChevronRight aria-hidden="true" className="size-4" style={{ color: "var(--p-vinho)" }} />
        </div>
      ))}
    </div>
  );
}
