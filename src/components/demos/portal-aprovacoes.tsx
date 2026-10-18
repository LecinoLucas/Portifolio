import { useState } from "react";
import { Ban, CheckCircle2, Clock, ShieldAlert } from "lucide-react";
import {
  alcadas,
  decidirAlcada,
  formatarReais,
  medicoesParaAprovar,
  pessoas,
  type MotivoDecisao,
} from "@/data/demos/aprovacoes";

const ROTULO_MOTIVO: Record<MotivoDecisao, { texto: string; Icone: typeof Ban }> = {
  PERMITIDA: { texto: "Aprovação permitida", Icone: CheckCircle2 },
  LIMITE_EXCEDIDO: { texto: "Acima da alçada · pendente", Icone: Clock },
  ALCADA_NAO_ENCONTRADA: { texto: "Sem alçada · bloqueada", Icone: ShieldAlert },
  SEGREGACAO_DE_FUNCOES: { texto: "Segregação de funções · bloqueada", Icone: Ban },
};

interface Registro {
  linha: string;
  motivo: MotivoDecisao;
}

/** Alçadas de aprovação e simulador de decisão: a mesma regra que o backend aplica a Medições. */
export function PortalAprovacoes() {
  const [medicaoId, setMedicaoId] = useState(medicoesParaAprovar[0].id);
  const [pessoaId, setPessoaId] = useState(pessoas[0].id);
  const [aprovadas, setAprovadas] = useState<string[]>([]);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const medicao = medicoesParaAprovar.find((m) => m.id === medicaoId) ?? medicoesParaAprovar[0];
  const pessoa = pessoas.find((p) => p.id === pessoaId) ?? pessoas[0];
  const decisao = decidirAlcada(medicao, pessoa);
  const { texto: rotulo, Icone } = ROTULO_MOTIVO[decisao.motivo];
  const jaAprovada = aprovadas.includes(medicao.id);
  const ativas = alcadas.filter((a) => a.ativa).length;

  function tentar() {
    if (decisao.permitida) setAprovadas((a) => [...a, medicao.id]);
    setRegistros((r) => [
      { linha: `${pessoa.nome} · ${medicao.rotulo} (${formatarReais(medicao.valor)}) · ${decisao.permitida ? "concedida" : "negada"}`, motivo: decisao.motivo },
      ...r,
    ]);
  }

  return (
    <div className="portal-grade">
      <div>
        <span className="portal-eyebrow">GOVERNANÇA FINANCEIRA</span>
        <p className="portal-suave" style={{ margin: "0.2rem 0 0" }}>
          Medições de obras. Exceções por usuário prevalecem sobre o perfil; Filial, Grupo e Global definem a especificidade do escopo.
        </p>
      </div>

      <div className="portal-grade portal-kpis">
        <div className="portal-card"><div className="portal-suave">Regras cadastradas</div><div className="portal-kpi-valor">{alcadas.length}</div></div>
        <div className="portal-card"><div className="portal-suave">Ativas agora</div><div className="portal-kpi-valor portal-verde">{ativas}</div></div>
        <div className="portal-card" style={{ gridColumn: "span 2" }}>
          <span className="portal-suave">O backend confirma permissão, vigência, escopo e limite no momento da aprovação.</span>
        </div>
      </div>

      <div className="portal-card" style={{ overflowX: "auto" }}>
        <table className="portal-tabela">
          <thead><tr><th>RESPONSÁVEL</th><th>ESCOPO</th><th>LIMITE</th><th>VIGÊNCIA</th><th>STATUS</th></tr></thead>
          <tbody>
            {alcadas.map((a) => (
              <tr key={a.id}>
                <td><b>{a.sujeitoRotulo}</b><div className="portal-suave">{a.sujeitoTipo === "USUARIO" ? "Exceção por usuário" : "Perfil"}</div></td>
                <td>{a.escopoTipo === "GLOBAL" ? "Global" : a.escopoTipo === "GRUPO" ? "Grupo" : "Filial"}<div className="portal-suave">{a.escopoRotulo}</div></td>
                <td><b>{a.limite === null ? "Ilimitada" : formatarReais(a.limite)}</b></td>
                <td className="portal-suave">{a.vigencia}</td>
                <td><span className="portal-pill" data-ativa={a.ativa}>{a.ativa ? "Ativa" : "Inativa"}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="portal-card">
        <h5 className="portal-titulo-card">Simulador de aprovação de medição</h5>
        <div className="portal-campos">
          <label>Medição
            <select value={medicaoId} onChange={(e) => setMedicaoId(e.target.value)}>
              {medicoesParaAprovar.map((m) => <option key={m.id} value={m.id}>{m.rotulo} · {m.obra} · {formatarReais(m.valor)}</option>)}
            </select>
          </label>
          <label>Aprovador
            <select value={pessoaId} onChange={(e) => setPessoaId(e.target.value)}>
              {pessoas.map((p) => <option key={p.id} value={p.id}>{p.nome} · {p.perfil}</option>)}
            </select>
          </label>
        </div>
        <p className="portal-suave">Criada por {pessoas.find((p) => p.id === medicao.criadaPor)?.nome}.</p>
        <div className="portal-decisao" data-motivo={decisao.motivo} role="status">
          <Icone aria-hidden="true" className="size-5" />
          <div>
            <b>{rotulo}</b>
            <div>{decisao.texto}</div>
            {decisao.alcada ? <div className="portal-suave">Regra aplicada: {decisao.alcada.sujeitoRotulo} · {decisao.alcada.escopoRotulo}</div> : null}
          </div>
        </div>
        <button type="button" className="portal-botao" disabled={jaAprovada} onClick={tentar} style={{ marginTop: "0.6rem" }}>
          {jaAprovada ? "Medição já aprovada" : "Tentar aprovar"}
        </button>
        {registros.length > 0 ? (
          <div style={{ marginTop: "0.8rem" }}>
            <h5 className="portal-titulo-card">Auditoria (decisões concedidas e negadas)</h5>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              {registros.map((r, i) => <li key={`${r.linha}-${i}`}>{r.linha}</li>)}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
