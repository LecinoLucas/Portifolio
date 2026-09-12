import { useState } from "react";
import { FileText, CheckCircle2, ShieldCheck, ArrowRight, PackageCheck, Layers } from "lucide-react";
import { type NotaFiscalEntrada, NOTA_FISCAL_DEMO } from "@/data/protheus-lab-demo-data";

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export function FiscalNfeView() {
  const [nfe] = useState<NotaFiscalEntrada>(NOTA_FISCAL_DEMO);
  const [classificada, setClassificada] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  function classificarDocumento() {
    setClassificada(true);
    setFeedback(
      "Documento fiscal escriturado com sucesso nos livros fiscais (SF1/SD1) e estoque alimentado no Protheus."
    );
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho da NF-e */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-tech-cyan" />
              <h2 className="text-base font-bold text-foreground">
                Entrada de NF-e & Integração com Compras (SIGACOM / SIGAFIS)
              </h2>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 font-mono">
              Chave: {nfe.chaveAcesso}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-2 py-1 text-[10px] font-bold uppercase flex items-center gap-1">
              <ShieldCheck className="size-3" />
              {nfe.statusManifesto}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-[10px] text-muted-foreground block">Fornecedor / Emitente</span>
            <span className="font-bold text-foreground block">{nfe.emitente}</span>
            <span className="text-[10px] text-muted-foreground font-mono">CNPJ: {nfe.cnpjEmitente}</span>
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground block">Número & Série</span>
            <span className="font-bold text-foreground block">NF-e {nfe.numero} · Série {nfe.serie}</span>
            <span className="text-[10px] text-muted-foreground">Emissão: {nfe.dataEmissao}</span>
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground block">Pedido de Compras Vinculado</span>
            <span className="font-bold text-tech-cyan block">{nfe.pedidoComprasVinculado}</span>
            <span className="text-[10px] text-muted-foreground">Módulo SIGACOM</span>
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground block">Valor Total</span>
            <span className="font-black text-sm text-foreground block">{formatarMoeda(nfe.valorTotal)}</span>
            <span className="text-[10px] text-emerald-500 font-medium">Boleto provisionado</span>
          </div>
        </div>
      </div>

      {feedback && (
        <div className="flex items-center justify-between gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-500 dark:text-emerald-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4" />
            <span>{feedback}</span>
          </div>
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-[11px] underline cursor-pointer"
          >
            Fechar
          </button>
        </div>
      )}

      {/* Tabela de Itens com Normalização De-Para */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <PackageCheck className="size-3.5 text-tech-violet" />
            Itens da Nota Fiscal vs Cadastro de Produtos Protheus (SB1 / SC7)
          </span>
          <span className="text-[11px] text-muted-foreground font-mono">
            {nfe.itens.length} itens amarrados
          </span>
        </div>

        <div className="space-y-2.5">
          {nfe.itens.map((item) => (
            <div
              key={item.numeroItem}
              className="rounded-lg border border-border/60 bg-background/50 p-3 text-xs space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-muted-foreground text-[11px]">
                    Item #{item.numeroItem}
                  </span>
                  <span className="font-mono text-xs font-bold text-foreground">
                    NCM: {item.ncm} · CFOP: {item.cfop}
                  </span>
                </div>

                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/15 text-emerald-500 self-start sm:self-auto">
                  De-Para Validado (OK)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="rounded bg-card/60 p-2 border border-border/40 space-y-0.5">
                  <span className="text-[10px] text-muted-foreground block font-mono">
                    XML FORNECEDOR: {item.codigoProdutoNFe}
                  </span>
                  <p className="font-semibold text-foreground">{item.descricaoNFe}</p>
                  <span className="text-[10px] text-muted-foreground block">
                    Qtd Faturada: {item.quantidadeNFe} un
                  </span>
                </div>

                <div className="rounded bg-card/60 p-2 border border-primary/20 space-y-0.5">
                  <span className="text-[10px] text-primary block font-mono flex items-center gap-1">
                    <ArrowRight className="size-2.5" /> PROTHEUS INTERNO: {item.codigoProdutoProtheus}
                  </span>
                  <p className="font-semibold text-foreground">{item.descricaoProtheus}</p>
                  <span className="text-[10px] text-muted-foreground block">
                    Qtd Pedido Compras: {item.quantidadePedido} un · Unit: {formatarMoeda(item.valorUnitario)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 font-mono text-[11px]">
                <span className="text-muted-foreground">Conferência física e fiscal:</span>
                <span className="font-black text-foreground">
                  Subtotal: {formatarMoeda(item.valorTotal)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Classificação */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            disabled={classificada}
            onClick={classificarDocumento}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
          >
            <Layers className="size-3.5" />
            {classificada ? "Documento Já Escriturado no Protheus" : "Classificar e Dar Entrada no Estoque"}
          </button>
        </div>
      </div>
    </div>
  );
}
