import { Database, Network, Server, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export function SystemsDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-8 backdrop-blur-sm">
      {/* Linhas e nós decorativos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 tech-grid-bg"
      />

      {/* Header do Diagrama de Sistemas */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-5">
        <div className="flex items-center gap-2.5">
          <span className="flex size-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-tech-cyan">
            Arquitetura de Conexão Integrada
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-3.5 text-primary shrink-0" />
          <span className="text-[11px] sm:text-xs">mTLS · OAuth2 · REST · PostgreSQL</span>
        </div>
      </div>

      {/* Mensagem Central Unificadora */}
      <div className="relative mt-6 text-center">
        <p className="mx-auto max-w-xl text-xs font-semibold uppercase tracking-[0.1em] text-primary">
          Princípio Unificador
        </p>
        <blockquote className="mt-1 text-base font-medium tracking-tight text-foreground sm:text-lg">
          “Experiência em sistemas corporativos aplicada ao desenvolvimento de soluções completas.”
        </blockquote>
      </div>

      {/* Grid de 3 polos conectados */}
      <div className="relative mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        {/* POLO 1: Sistemas Corporativos & ERP */}
        <div className="rounded-xl border border-tech-violet/30 bg-card p-5 shadow-xs transition-all hover:border-tech-violet/60">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-tech-violet">
              <Server className="size-4" />
              ERP &amp; Negócio
            </span>
            <span className="rounded-full bg-tech-violet/10 px-2.5 py-0.5 text-[11px] font-medium text-tech-violet">
              TOTVS Protheus P12
            </span>
          </div>

          <h3 className="mt-3 text-sm font-semibold text-foreground">
            Analista de Sistemas / Protheus
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Módulos Financeiro, Fiscal, Contábil e TMS. Diagnóstico analítico de dados via SQL e alinhamento com processos operacionais.
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {["SIGAFIN", "SIGACTB", "SIGAFIS", "SQL Server"].map((item) => (
              <span
                key={item}
                className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            to="/competencias"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-tech-violet hover:underline"
          >
            Ver especialidades <ArrowRight className="size-3" />
          </Link>
        </div>

        {/* NÓ CENTRAL: Conector / Barramento de Integração */}
        <div className="flex flex-col items-center justify-center py-2 lg:px-2">
          <div className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary shadow-xs">
            <Network className="size-5 animate-pulse" />
          </div>
          <div className="mt-2 hidden text-center lg:block">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              APIs &amp; Dados
            </span>
          </div>
        </div>

        {/* POLO 2: Desenvolvimento Full Stack & APIs */}
        <div className="rounded-xl border border-tech-cyan/30 bg-card p-5 shadow-xs transition-all hover:border-tech-cyan/60">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-tech-cyan">
              <Cpu className="size-4" />
              Software &amp; Web
            </span>
            <span className="rounded-full bg-tech-cyan/10 px-2.5 py-0.5 text-[11px] font-medium text-tech-cyan">
              React 19 + Node.js
            </span>
          </div>

          <h3 className="mt-3 text-sm font-semibold text-foreground">
            Desenvolvedor Full Stack Júnior
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Aplicações em produção, APIs REST seguras (deny-by-default), integração bancária Itaú mTLS e padrão LES com testes.
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {["TypeScript", "Express MVC", "PostgreSQL", "Prisma"].map((item) => (
              <span
                key={item}
                className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            to="/projetos"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-tech-cyan hover:underline"
          >
            Ver estudos de caso <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>

      {/* Rodapé de Tecnologias Conectadas */}
      <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Database className="size-3.5 text-tech-orange" />
          <span>Banco Relacional: PostgreSQL &amp; SQL Server</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/experiencia"
            className="font-medium text-primary hover:underline"
          >
            Linha do tempo corporativa →
          </Link>
        </div>
      </div>
    </div>
  );
}
