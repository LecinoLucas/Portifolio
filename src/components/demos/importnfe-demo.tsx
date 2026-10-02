import { useMemo, useState } from "react";
import { FileSpreadsheet, Plus } from "lucide-react";
import { Abas } from "@/components/demos/abas";
import { MolduraDemo } from "@/components/demos/moldura-demo";
import { Badge } from "@/components/ui/badge";
import { classesBotao } from "@/components/ui/button-variants";
import {
  contadoresPainel,
  itensNota,
  modelosPlanilha,
  regrasIniciais,
  type RegraNormalizacao,
} from "@/data/demos/importnfe";

const ABAS = [
  { id: "revisao", rotulo: "Revisão dos itens" },
  { id: "normalizacao", rotulo: "Normalização" },
  { id: "planilha", rotulo: "Planilha" },
];

const moeda = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const classeCampo =
  "w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function Revisao({
  descricoes,
  aliases,
  aoEditar,
  aoMarcarAlias,
}: {
  descricoes: Record<number, string>;
  aliases: Record<number, boolean>;
  aoEditar: (id: number, texto: string) => void;
  aoMarcarAlias: (id: number, marcado: boolean) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Cada descrição da NF-e recebe uma sugestão. A prioridade é: alias da empresa, depois alias global, depois o
        normalizador automático. Edite uma sugestão e marque “Salvar alias” para que ela valha nas próximas importações.
      </p>
      <ul className="space-y-3">
        {itensNota.map((item) => (
          <li key={item.id} className="rounded-lg border border-border p-3">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Descrição na NF-e</p>
            <p className="font-mono text-xs">{item.original}</p>
            <label htmlFor={`sug-${item.id}`} className="mt-2 block text-xs uppercase tracking-wide text-muted-foreground">
              Descrição para a planilha
            </label>
            <input
              id={`sug-${item.id}`}
              className={classeCampo}
              value={descricoes[item.id]}
              onChange={(e) => aoEditar(item.id, e.target.value)}
            />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <Badge variante="contorno">{item.origem}</Badge>
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  className="size-4 accent-primary"
                  checked={aliases[item.id] ?? false}
                  onChange={(e) => aoMarcarAlias(item.id, e.target.checked)}
                />
                Salvar alias
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Normalizacao() {
  const [regras, setRegras] = useState<RegraNormalizacao[]>(regrasIniciais);
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");
  const [escopo, setEscopo] = useState<RegraNormalizacao["escopo"]>("Global");

  function adicionar() {
    if (!entrada.trim() || !saida.trim()) return;
    setRegras((atuais) => [{ entrada: entrada.trim(), saida: saida.trim().toUpperCase(), escopo }, ...atuais]);
    setEntrada("");
    setSaida("");
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Regras “entrada da NF-e → saída para a planilha”, globais ou por empresa.
      </p>
      <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto_auto]">
        <input aria-label="Entrada da NF-e" placeholder="Entrada da NF-e" className={classeCampo} value={entrada} onChange={(e) => setEntrada(e.target.value)} />
        <input aria-label="Saída para a planilha" placeholder="Saída para a planilha" className={classeCampo} value={saida} onChange={(e) => setSaida(e.target.value)} />
        <select aria-label="Escopo da regra" className={classeCampo} value={escopo} onChange={(e) => setEscopo(e.target.value as RegraNormalizacao["escopo"])}>
          <option>Global</option>
          <option>Empresa</option>
        </select>
        <button type="button" onClick={adicionar} className={classesBotao({ tamanho: "sm" })}>
          <Plus /> Adicionar
        </button>
      </div>
      <ul className="divide-y divide-border rounded-lg border border-border text-xs">
        {regras.map((regra) => (
          <li key={`${regra.entrada}-${regra.saida}`} className="flex flex-wrap items-center justify-between gap-2 p-2.5">
            <span className="font-mono">
              {regra.entrada} <span className="text-primary">→</span> {regra.saida}
            </span>
            <Badge variante={regra.escopo === "Empresa" ? "primario" : "contorno"}>{regra.escopo}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Planilha({ descricoes }: { descricoes: Record<number, string> }) {
  const [modeloId, setModeloId] = useState(modelosPlanilha[0].id);
  const [gerada, setGerada] = useState(false);
  const modelo = modelosPlanilha.find((m) => m.id === modeloId) ?? modelosPlanilha[0];
  const compacto = modelo.id === "compacto";

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-end gap-3">
        <div className="min-w-44 flex-1">
          <label htmlFor="modelo-planilha" className="text-xs uppercase tracking-wide text-muted-foreground">
            Modelo
          </label>
          <select id="modelo-planilha" className={classeCampo} value={modeloId} onChange={(e) => { setModeloId(e.target.value); setGerada(false); }}>
            {modelosPlanilha.map((m) => (
              <option key={m.id} value={m.id}>{m.nome}</option>
            ))}
          </select>
        </div>
        <button type="button" onClick={() => setGerada(true)} className={classesBotao({ tamanho: "sm" })}>
          <FileSpreadsheet /> Gerar planilha
        </button>
      </div>
      <p className="text-xs text-muted-foreground">{modelo.descricao}</p>

      <div className="overflow-x-auto rounded-lg border border-border">
        {modelo.logo ? (
          <div className="flex h-12 items-center border-b border-border bg-muted/50 px-3 text-xs font-semibold tracking-widest text-muted-foreground">
            [ LOGO DO MODELO · A1 ]
          </div>
        ) : null}
        <table className="w-full min-w-[420px] text-left text-xs">
          <thead className="bg-muted/50 text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-medium">Item</th>
              <th className="px-3 py-2 font-medium">Descrição</th>
              <th className="px-3 py-2 font-medium">Qtd.</th>
              {compacto ? null : <th className="px-3 py-2 font-medium">Un.</th>}
              {compacto ? null : <th className="px-3 py-2 text-right font-medium">Valor unit.</th>}
            </tr>
          </thead>
          <tbody>
            {itensNota.map((item, indice) => (
              <tr key={item.id} className="border-t border-border">
                <td className="px-3 py-2">{indice + 1}</td>
                <td className="px-3 py-2">{descricoes[item.id].toUpperCase()}</td>
                <td className="px-3 py-2">{item.quantidade}</td>
                {compacto ? null : <td className="px-3 py-2">{item.unidade}</td>}
                {compacto ? null : <td className="px-3 py-2 text-right">{moeda(item.valorUnitario)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p role="status" className="min-h-4 text-xs text-primary">
        {gerada ? "Demonstração: no sistema real, o arquivo .xlsx é gerado e baixado aqui." : ""}
      </p>
    </div>
  );
}

export function ImportNfeDemo() {
  const [aba, setAba] = useState("revisao");
  const [descricoes, setDescricoes] = useState<Record<number, string>>(() =>
    Object.fromEntries(itensNota.map((i) => [i.id, i.sugestao])),
  );
  const [aliases, setAliases] = useState<Record<number, boolean>>({});

  const salvos = useMemo(() => Object.values(aliases).filter(Boolean).length, [aliases]);

  return (
    <MolduraDemo titulo="ImportNFe · demonstração">
      <dl className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {contadoresPainel.map((c) => (
          <div key={c.rotulo} className="rounded-lg border border-border p-2.5">
            <dd className="text-lg font-semibold">{c.valor}</dd>
            <dt className="text-xs text-muted-foreground">{c.rotulo}</dt>
          </div>
        ))}
      </dl>
      <Abas rotulo="Telas do ImportNFe" abas={ABAS} ativa={aba} aoMudar={setAba}>
        {aba === "revisao" ? (
          <Revisao
            descricoes={descricoes}
            aliases={aliases}
            aoEditar={(id, texto) => setDescricoes((d) => ({ ...d, [id]: texto }))}
            aoMarcarAlias={(id, marcado) => setAliases((a) => ({ ...a, [id]: marcado }))}
          />
        ) : null}
        {aba === "normalizacao" ? <Normalizacao /> : null}
        {aba === "planilha" ? <Planilha descricoes={descricoes} /> : null}
      </Abas>
      {salvos > 0 ? (
        <p role="status" className="mt-3 text-xs text-muted-foreground">
          {salvos} alias {salvos === 1 ? "marcado" : "marcados"} para salvar nesta revisão.
        </p>
      ) : null}
    </MolduraDemo>
  );
}
