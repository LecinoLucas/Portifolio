import { useState } from "react";
import { Bot } from "lucide-react";
import { perguntasIA, type PerguntaIA, type TelaPortal } from "@/data/demos/portal";

/** Painel do assistente: respostas roteirizadas (simuladas) que levam à tela certa. */
export function PortalIA({ aoAbrir }: { aoAbrir: (tela: TelaPortal) => void }) {
  const [feitas, setFeitas] = useState<PerguntaIA[]>([]);

  return (
    <aside className="portal-ia" aria-label="IA de Engenharia">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Bot aria-hidden="true" className="size-6" style={{ color: "var(--p-vinho)" }} />
        <div>
          <b>IA de Engenharia</b>
          <div className="portal-suave">Assistente do portal · respostas simuladas</div>
        </div>
      </div>
      {feitas.map((p) => (
        <div key={p.pergunta} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <span className="portal-ia-bolha">{p.pergunta}</span>
          <div className="portal-ia-resposta">
            <p style={{ margin: "0 0 0.5rem" }}>{p.resposta}</p>
            <button type="button" className="portal-chip" onClick={() => aoAbrir(p.destino)}>{p.rotuloDestino}</button>
            <details className="portal-suave" style={{ marginTop: "0.5rem" }}>
              <summary>Fontes consultadas ({p.fontes.length})</summary>
              <ul style={{ margin: "0.3rem 0 0", paddingLeft: "1rem" }}>{p.fontes.map((f) => <li key={f}>{f}</li>)}</ul>
            </details>
          </div>
        </div>
      ))}
      <p className="portal-suave" style={{ margin: 0 }}>Pergunte onde encontrar uma tela:</p>
      {perguntasIA.filter((p) => !feitas.includes(p)).map((p) => (
        <button key={p.pergunta} type="button" className="portal-chip" onClick={() => setFeitas((atual) => [...atual, p])}>{p.pergunta}</button>
      ))}
    </aside>
  );
}
