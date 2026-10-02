import { useState } from "react";

interface No {
  id: string;
  numero: string;
  titulo: string;
  detalhe: string;
  x: number;
  y: number;
  descricao: string;
}

const L = 118;
const A = 52;

const nos: No[] = [
  { id: "protheus", numero: "01", titulo: "PROTHEUS", detalhe: "títulos · SE1 SE2", x: 18, y: 44, descricao: "Origem: títulos a pagar e a receber gerados no ERP, com as regras de negócio já parametrizadas." },
  { id: "remessa", numero: "02", titulo: "REMESSA", detalhe: "CNAB · VAN · API", x: 176, y: 44, descricao: "Canal: CNAB de pagamento e de recebimento via VAN (Santander, Votorantim e Sicoob) e API de extrato no Itaú, com certificado digital e mTLS." },
  { id: "banco", numero: "03", titulo: "BANCO", detalhe: "boletos · extrato", x: 334, y: 44, descricao: "O banco processa pagamentos e boletos e devolve o retorno e o extrato da operação." },
  { id: "retorno", numero: "04", titulo: "RETORNO", detalhe: "baixas · SE5 FK1 FK5", x: 334, y: 164, descricao: "Retorno: baixas e movimentos voltam ao ERP e precisam bater com o título original." },
  { id: "conciliacao", numero: "05", titulo: "CONCILIAÇÃO", detalhe: "SQL", x: 176, y: 164, descricao: "Consultas SQL cruzam título, baixa e extrato para confirmar que cada operação fechou." },
  { id: "divergencias", numero: "06", titulo: "DIVERGÊNCIAS", detalhe: "causa raiz", x: 18, y: 164, descricao: "O que não bate vira investigação: rastrear os registros até encontrar a causa raiz." },
];

const caminhos = [
  "M136 70 H176",
  "M294 70 H334",
  "M393 96 V164",
  "M334 190 H294",
  "M176 190 H136",
];

/** Planta ilustrativa do caminho de uma operação bancária e da investigação que a valida. */
export function PlantaIntegracao() {
  const [ativo, setAtivo] = useState("conciliacao");
  const atual = nos.find((no) => no.id === ativo) ?? nos[0];

  return (
    <figure className="relative min-w-0 rounded-lg border border-border bg-card/80 p-4 shadow-xl shadow-black/10 backdrop-blur sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <figcaption className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
          Planta · integração bancária
        </figcaption>
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
          fluxo ilustrativo
        </span>
      </div>

      <svg viewBox="0 0 470 250" className="mt-3 h-auto w-full" role="group" aria-label="Fluxo: Protheus, remessa, banco, retorno, conciliação e divergências. Selecione uma etapa para ver a descrição.">
        {caminhos.map((d) => (
          <path key={d} d={d} className="planta-fluxo" />
        ))}
        {caminhos.map((d) => (
          <path key={`p-${d}`} d={d} pathLength={44} className="planta-pacote" />
        ))}
        {nos.map((no) => (
          <g
            key={no.id}
            className="planta-no"
            data-ativo={no.id === ativo}
            tabIndex={0}
            role="button"
            aria-pressed={no.id === ativo}
            aria-label={`${no.numero} ${no.titulo}`}
            onMouseEnter={() => setAtivo(no.id)}
            onFocus={() => setAtivo(no.id)}
            onClick={() => setAtivo(no.id)}
          >
            <rect x={no.x} y={no.y} width={L} height={A} rx={3} />
            <text x={no.x + 8} y={no.y + 13} className="planta-cota">{no.numero}</text>
            <text x={no.x + 8} y={no.y + 30} className="planta-titulo">{no.titulo}</text>
            <text x={no.x + 8} y={no.y + 43} className="planta-detalhe">{no.detalhe}</text>
          </g>
        ))}
      </svg>

      <p role="status" aria-live="polite" className="min-h-[3.25rem] border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
        <span className="font-mono text-xs text-primary">{atual.numero} / {atual.titulo.toLowerCase()} — </span>
        {atual.descricao}
      </p>

      <pre aria-hidden="true" className="mt-3 overflow-x-auto rounded-md border border-border bg-background/70 p-3 font-mono text-xs leading-relaxed text-muted-foreground">
        <code>
{`$ conciliar --periodo exemplo
título 000123   baixa 000123   extrato   `}<span className="text-primary">OK</span>{`
título 000124   baixa 000124   extrato   `}<span className="text-primary">OK</span>{`
título 000125   baixa —        extrato   `}<span className="text-highlight">DIVERGENTE</span>
        </code>
      </pre>
      <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground">
        exemplo ilustrativo · dados fictícios
      </p>
    </figure>
  );
}
