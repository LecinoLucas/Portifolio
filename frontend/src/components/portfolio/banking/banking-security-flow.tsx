import { Lock, Shield, Key, RefreshCw, FileCode, CheckCircle2 } from "lucide-react";

export function BankingSecurityFlow() {
  const etapas = [
    {
      numero: "01",
      titulo: "Canal Criptografado mTLS (Mutual TLS)",
      icone: Lock,
      descricao:
        "O handshake TLS estabelece autenticação mútua: o servidor Itaú valida o certificado digital X.509 e-CNPJ da empresa, e o cliente valida a autoridade certificadora do banco.",
      detalhes: ["Certificado cliente X.509 (RSA 2048-bit)", "Cifra TLS 1.2/1.3 mandatória", "Porta bancária segura dedicada"],
    },
    {
      numero: "02",
      titulo: "Autenticação OAuth 2.0 (Client Credentials)",
      icone: Key,
      descricao:
        "Com o canal mTLS estabelecido, a aplicação envia clientId e clientSecret criptografados para o endpoint de autorização bancária, recebendo um JWT Bearer Token de curta duração.",
      detalhes: ["Fluxo grant_type=client_credentials", "Token com expiração em 15 minutos", "Rotação de segredos sem downtime"],
    },
    {
      numero: "03",
      titulo: "Consumo de APIs & Normalização Protheus",
      icone: RefreshCw,
      descricao:
        "Consultas a contas, extratos e liquidações são realizadas via chamadas REST com headers x-itau-apikey e x-itau-correlation-id, alimentando a conciliação contra a tabela SE2.",
      detalhes: ["Idempotência em cada requisição", "Tratamento de status HTTP e retries com backoff", "Logs estruturados sem dados bancários sensíveis"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs space-y-1">
        <div className="flex items-center gap-2">
          <Shield className="size-4 text-primary" />
          <h2 className="text-base font-bold text-foreground">
            Arquitetura de Segurança Bancária: Itaú mTLS + OAuth 2.0
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">
          Padrão corporativo exigido pelo Banco Central e pelas instituições financeiras para comunicação direta de alta segurança.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {etapas.map((etapa) => {
          const Icon = etapa.icone;
          return (
            <div
              key={etapa.numero}
              className="rounded-xl border border-border/80 bg-card/60 p-4 text-xs space-y-3 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <span className="font-mono text-xs font-black text-muted-foreground">
                    FASE {etapa.numero}
                  </span>
                </div>

                <h3 className="font-bold text-foreground text-sm leading-snug">
                  {etapa.titulo}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  {etapa.descricao}
                </p>
              </div>

              <div className="rounded-lg bg-background/60 p-2.5 border border-border/40 space-y-1.5 mt-2">
                <span className="text-[10px] font-bold text-tech-cyan uppercase tracking-wider flex items-center gap-1">
                  <FileCode className="size-3" />
                  Requisitos Técnicos
                </span>
                <ul className="space-y-1 text-[10px] text-muted-foreground">
                  {etapa.detalhes.map((item) => (
                    <li key={item} className="flex items-center gap-1">
                      <CheckCircle2 className="size-2.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparativo API vs VAN */}
      <div className="rounded-xl border border-border/80 bg-card/40 p-4 text-xs space-y-3">
        <h4 className="font-bold text-foreground text-xs uppercase tracking-wider flex items-center gap-2">
          <RefreshCw className="size-3.5 text-tech-cyan" />
          Comparativo de Engenharia: APIs Bancárias mTLS vs VAN CNAB Tradicional
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
          <div className="rounded-lg border border-border/60 bg-background/50 p-3 space-y-1">
            <span className="font-bold text-tech-cyan block">API Direta Itaú (mTLS)</span>
            <p className="text-muted-foreground">
              Comunicação síncrona em tempo real. Saldo e extrato atualizados sob demanda, liquidação imediata de pagamentos e tratamento instantâneo de erros no payload.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/50 p-3 space-y-1">
            <span className="font-bold text-muted-foreground block">VAN Bancária CNAB (240 / 400)</span>
            <p className="text-muted-foreground">
              Processamento assíncrono em lotes (D+1). Envio de arquivo de remessa e recepção de arquivo de retorno em horários fixos de processamento noturno do banco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
