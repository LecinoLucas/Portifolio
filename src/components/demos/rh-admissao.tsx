import { useState } from "react";
import { Send } from "lucide-react";
import { classesBotao } from "@/components/ui/button-variants";
import { camposObrigatorios, documentosAdmissao } from "@/data/demos/rh";

const CHAVE_IDEMPOTENCIA = "adm-0001-v1";
const CORRELATION_ID = "3f2b9c1e-0000-4000-a000-demo00000001";

/** Pré-admissão: checklist de documentos, validação do payload e envio simulado ao ERP. */
export function RhAdmissao() {
  const [aprovados, setAprovados] = useState<string[]>([]);
  const [tentativas, setTentativas] = useState(0);

  const erros = aprovados.length === 0 ? ["documentos: nenhum documento aprovado"] : [];
  const valido = erros.length === 0;

  function alternar(id: string) {
    setAprovados((atuais) => (atuais.includes(id) ? atuais.filter((d) => d !== id) : [...atuais, id]));
  }

  return (
    <div className="space-y-4">
      <fieldset className="space-y-1.5">
        <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Checklist documental
        </legend>
        {documentosAdmissao.map((doc) => (
          <label key={doc.id} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="size-4 accent-primary" checked={aprovados.includes(doc.id)} onChange={() => alternar(doc.id)} />
            {doc.rotulo}
          </label>
        ))}
      </fieldset>

      <div className="rounded-lg border border-border p-3 text-xs">
        <p className="mb-1 font-semibold uppercase tracking-wide text-muted-foreground">Validação do payload</p>
        <p className="text-muted-foreground">
          Campos obrigatórios: {camposObrigatorios.join(", ")}.
        </p>
        <p role="status" className={valido ? "mt-2 text-primary" : "mt-2 text-destructive"}>
          {valido ? "Payload válido: pronto para envio." : `Inválido: ${erros.join("; ")}.`}
        </p>
      </div>

      <pre tabIndex={0} className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-3 text-xs leading-relaxed">
        <code>{`{
  "schema_version": "v1",
  "candidato": { "nome": "Candidato 03", "email": "candidato03@exemplo.com" },
  "vaga": { "titulo": "Auxiliar Financeiro" },
  "admissao": { "data_inicio": "2026-11-03", "salario": 2500.00 },
  "documentos": [${aprovados.map((d) => `"${d}"`).join(", ")}],
  "decisao": { "id": "dec-0001" }
}`}</code>
      </pre>

      <div className="flex flex-wrap items-center gap-3">
        <button type="button" disabled={!valido} onClick={() => setTentativas((t) => t + 1)} className={classesBotao({ tamanho: "sm" })}>
          <Send /> Enviar ao Protheus (simulado)
        </button>
        {tentativas > 0 ? (
          <p role="status" className="text-xs text-muted-foreground">
            Tentativa {tentativas} · chave de idempotência <code>{CHAVE_IDEMPOTENCIA}</code> · correlation ID{" "}
            <code>{CORRELATION_ID}</code>
          </p>
        ) : null}
      </div>
      <p className="text-xs text-muted-foreground">
        Reenviar não duplica a admissão: a mesma chave de idempotência identifica a operação, e o correlation ID
        permite rastrear cada tentativa.
      </p>
    </div>
  );
}
