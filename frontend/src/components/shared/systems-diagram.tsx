import {
  Database,
  Network,
  Server,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

export function SystemsDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/75 p-5 sm:p-7 backdrop-blur-md shadow-xl transition-all">
      {/* Luz ambiente temática interna */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-tech-violet/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-primary/15 blur-3xl"
      />

      {/* Header do Mapa de Sistemas */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="motion-safe:animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Mapa de Sistemas Conectados
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-tech-cyan/30 bg-tech-cyan/10 px-2.5 py-0.5 text-[11px] font-semibold text-tech-cyan">
            Arquitetura de Conexão Integrada
          </span>
        </div>
      </div>

      {/* Núcleo Central: Barramento & Integração */}
      <div className="relative my-5 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center shadow-inner">
        <div className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary">
          <Activity className="size-4 motion-safe:animate-pulse text-tech-cyan" />
          <span>Núcleo de Integração &amp; Dados</span>
        </div>
        <p className="mt-1 text-xs sm:text-sm font-medium text-foreground">
          Sinergia entre processos corporativos e arquiteturas modernas de software
        </p>
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-medium text-muted-foreground">
          <span className="rounded bg-background/80 px-2 py-0.5 border border-border">mTLS Itaú</span>
          <span className="rounded bg-background/80 px-2 py-0.5 border border-border">OAuth2</span>
          <span className="rounded bg-background/80 px-2 py-0.5 border border-border">RESTful</span>
          <span className="rounded bg-background/80 px-2 py-0.5 border border-border">PostgreSQL</span>
        </div>
      </div>

      {/* Grid com os 4 Nós Conectados em Órbita */}
      <div className="relative grid gap-3.5 sm:grid-cols-2">
        {/* NÓ 1: ERP & Negócio (Violeta) */}
        <div className="group rounded-xl border border-tech-violet/35 bg-background/60 p-4 transition-all hover:border-tech-violet/70 hover:shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-tech-violet/15 text-tech-violet">
                <Server className="size-3.5" />
              </div>
              <span className="text-xs font-bold text-tech-violet uppercase tracking-wider">
                ERP &amp; Negócio
              </span>
            </div>
            <span className="rounded bg-tech-violet/10 px-1.5 py-0.5 text-[10px] font-semibold text-tech-violet">
              P12
            </span>
          </div>

          <h4 className="mt-2 text-sm font-semibold text-foreground">
            TOTVS Protheus &amp; SQL
          </h4>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Financeiro, Fiscal, Contábil e TMS. Diagnóstico analítico de dados via queries estruturadas.
          </p>

          <div className="mt-2.5 flex flex-wrap gap-1">
            {["SIGAFIN", "SIGAFIS", "SIGACTB", "SQL"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-tech-violet/5 px-1.5 py-0.5 text-[10px] font-medium text-tech-violet border border-tech-violet/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* NÓ 2: APIs Bancárias & Conexões (Magenta / Ciano) */}
        <div className="group rounded-xl border border-tech-magenta/35 bg-background/60 p-4 transition-all hover:border-tech-magenta/70 hover:shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-tech-magenta/15 text-tech-magenta">
                <Network className="size-3.5" />
              </div>
              <span className="text-xs font-bold text-tech-magenta uppercase tracking-wider">
                APIs Bancárias
              </span>
            </div>
            <span className="rounded bg-tech-magenta/10 px-1.5 py-0.5 text-[10px] font-semibold text-tech-magenta">
              mTLS
            </span>
          </div>

          <h4 className="mt-2 text-sm font-semibold text-foreground">
            BankingProtheus Itaú
          </h4>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Automação de conciliação bancária, extratos e remessas com certificados digitais e OAuth2.
          </p>

          <div className="mt-2.5 flex flex-wrap gap-1">
            {["OAuth2", "mTLS", "Webhooks", "REST"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-tech-magenta/5 px-1.5 py-0.5 text-[10px] font-medium text-tech-magenta border border-tech-magenta/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* NÓ 3: Aplicações Web & Full Stack (Azul Elétrico) */}
        <div className="group rounded-xl border border-primary/35 bg-background/60 p-4 transition-all hover:border-primary/70 hover:shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Cpu className="size-3.5" />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Full Stack &amp; Web
              </span>
            </div>
            <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
              React 19
            </span>
          </div>

          <h4 className="mt-2 text-sm font-semibold text-foreground">
            Portal de Engenharia &amp; RH
          </h4>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Sistemas em produção para ~500 usuários corporativos com Node.js MVC e TypeScript.
          </p>

          <div className="mt-2.5 flex flex-wrap gap-1">
            {["Node.js", "Express", "PostgreSQL", "Prisma"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-primary/5 px-1.5 py-0.5 text-[10px] font-medium text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* NÓ 4: Segurança & Governança (Ciano / Laranja) */}
        <div className="group rounded-xl border border-tech-cyan/35 bg-background/60 p-4 transition-all hover:border-tech-cyan/70 hover:shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-tech-cyan/15 text-tech-cyan">
                <ShieldCheck className="size-3.5" />
              </div>
              <span className="text-xs font-bold text-tech-cyan uppercase tracking-wider">
                Governança &amp; LES
              </span>
            </div>
            <span className="rounded bg-tech-cyan/10 px-1.5 py-0.5 text-[10px] font-semibold text-tech-cyan">
              v2.2.0
            </span>
          </div>

          <h4 className="mt-2 text-sm font-semibold text-foreground">
            Engenharia &amp; Qualidade
          </h4>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Padrão versionado de engenharia de software com pirâmide de testes e segurança deny-by-default.
          </p>

          <div className="mt-2.5 flex flex-wrap gap-1">
            {["RBAC", "Auditoria", "Vitest", "Zero Secrets"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-tech-cyan/5 px-1.5 py-0.5 text-[10px] font-medium text-tech-cyan border border-tech-cyan/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé de Persistência & Navegação Rápida */}
      <div className="relative mt-4 flex flex-wrap items-center justify-between gap-2.5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Database className="size-3.5 text-tech-orange shrink-0" />
          <span className="text-[11px]">Bancos: PostgreSQL &amp; SQL Server</span>
        </div>

        <Link
          to="/competencias"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
        >
          Ver matriz detalhada <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}
