import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
  const { detalhe } = projeto;

  return (
    <SheetContent
      lado="right"
      className="w-full gap-0 sm:max-w-xl"
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
        <Bloco titulo="Contexto">{detalhe.contexto}</Bloco>
        <Bloco titulo="Problema">{detalhe.problema}</Bloco>
        <Bloco titulo="Minha participação">{detalhe.participacao}</Bloco>
        <Bloco titulo="Solução">{detalhe.solucao}</Bloco>
        <Bloco titulo="Arquitetura">{detalhe.arquitetura}</Bloco>

        <Bloco titulo="Desafios técnicos">
          <ul className="list-disc space-y-1.5 pl-4">
            {detalhe.desafios.map((desafio) => (
              <li key={desafio}>{desafio}</li>
            ))}
          </ul>
        </Bloco>

        <Bloco titulo="Resultado">{detalhe.resultado}</Bloco>

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
    </SheetContent>
  );
}
