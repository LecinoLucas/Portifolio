import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Abas } from "@/components/demos/abas";
import { ImportNfeDemo } from "@/components/demos/importnfe-demo";
import { SistemaDemo } from "@/components/demos/sistema-demo";
import { barbearia } from "@/data/demos/barbearia";
import { clinica } from "@/data/demos/clinica";
import { FiscalDemo } from "@/components/demos/fiscal-demo";
import { PortalDemo } from "@/components/demos/portal-demo";
import { RhDemo } from "@/components/demos/rh-demo";
import { SeloSituacao } from "@/components/portfolio/selo-situacao";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Projeto } from "@/types";

interface PropsBlocoTexto {
  titulo: string;
  children: ReactNode;
}

function Bloco({ titulo, children }: PropsBlocoTexto) {
  return (
    <div className="space-y-1.5">
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
        {titulo}
      </h4>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

/** Conteúdo do Drawer de detalhe. Renderizado dentro de <Sheet>. */
export function ProjectDetail({ projeto }: { projeto: Projeto }) {
  const [aba, setAba] = useState("visao");
  const conteudo = <VisaoGeral projeto={projeto} />;

  return (
    <SheetContent
      lado="right"
      className={projeto.demo === "portal" || projeto.demo === "fiscal" || projeto.demo === "barbearia" || projeto.demo === "clinica" ? "w-full gap-0 sm:max-w-5xl" : "w-full gap-0 sm:max-w-xl"}
      rotuloFechar="Fechar detalhes do projeto"
    >
      <SheetHeader>
        <span className="text-xs font-medium text-muted-foreground">
          {projeto.categoria}
        </span>
        <SheetTitle>{projeto.titulo}</SheetTitle>
        <SheetDescription>{projeto.resumo}</SheetDescription>
      </SheetHeader>

      <div className="flex-1 space-y-6 overflow-y-auto p-6">
        {projeto.situacao ? (
          <div className="flex flex-wrap items-center gap-2">
            <SeloSituacao projeto={projeto} />
            {projeto.situacaoDetalhe ? (
              <span className="text-xs text-muted-foreground">{projeto.situacaoDetalhe}</span>
            ) : null}
          </div>
        ) : null}
        {projeto.demo ? (
          <Abas
            rotulo="Seções do projeto"
            abas={[
              { id: "visao", rotulo: "Visão geral" },
              { id: "demo", rotulo: "Demonstração" },
            ]}
            ativa={aba}
            aoMudar={setAba}
          >
            {aba === "demo" ? (
              <Demo tipo={projeto.demo} />
            ) : (
              conteudo
            )}
          </Abas>
        ) : (
          conteudo
        )}
      </div>
    </SheetContent>
  );
}

function Demo({ tipo }: { tipo: NonNullable<Projeto["demo"]> }) {
  if (tipo === "importnfe") return <ImportNfeDemo />;
  if (tipo === "portal") return <PortalDemo />;
  if (tipo === "fiscal") return <FiscalDemo />;
  if (tipo === "barbearia") return <SistemaDemo definicao={barbearia} />;
  if (tipo === "clinica") return <SistemaDemo definicao={clinica} />;
  return <RhDemo />;
}

function VisaoGeral({ projeto }: { projeto: Projeto }) {
  const { detalhe } = projeto;
  return (
    <div className="space-y-6">
      <Bloco titulo="Contexto">{detalhe.contexto}</Bloco>
      <Bloco titulo="Problema">{detalhe.problema}</Bloco>
      <Bloco titulo="Minha participação">{detalhe.participacao}</Bloco>
      <Bloco titulo="Solução">{detalhe.solucao}</Bloco>
      {detalhe.arquitetura ? <Bloco titulo="Arquitetura">{detalhe.arquitetura}</Bloco> : null}

      {detalhe.decisoes && detalhe.decisoes.length > 0 ? (
        <Bloco titulo="Decisões de engenharia">
          <ul className="list-disc space-y-1.5 pl-4">
            {detalhe.decisoes.map((decisao) => (
              <li key={decisao}>{decisao}</li>
            ))}
          </ul>
        </Bloco>
      ) : null}

      {detalhe.desafios && detalhe.desafios.length > 0 ? (
        <Bloco titulo="Desafios técnicos">
          <ul className="list-disc space-y-1.5 pl-4">
            {detalhe.desafios.map((desafio) => (
              <li key={desafio}>{desafio}</li>
            ))}
          </ul>
        </Bloco>
      ) : null}

      <Bloco titulo="Resultado e estado atual">{detalhe.resultado}</Bloco>

      {projeto.testes ? (
        <Bloco titulo="Como garanto a qualidade">
          <ul className="grid gap-2 sm:grid-cols-2">
            {projeto.testes.map((t) => (
              <li key={t.nome} className="rounded-lg border border-border bg-card p-3">
                <p className="font-mono text-sm font-semibold text-primary">{t.nome}</p>
                <p className="mt-1 text-xs">{t.para}</p>
              </li>
            ))}
          </ul>
        </Bloco>
      ) : null}

      <Separator />

      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          Stack
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {projeto.stack.map((tec) => (
            <Badge key={tec} variante="contorno">
              {tec}
            </Badge>
          ))}
        </div>
      </div>

      {projeto.links && projeto.links.length > 0 ? (
        <div className="flex flex-wrap gap-3 pt-1">
          {projeto.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {link.rotulo}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
