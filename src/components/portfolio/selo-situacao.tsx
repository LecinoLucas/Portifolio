import { Badge } from "@/components/ui/badge";
import type { Projeto } from "@/types";

const ROTULOS = { producao: "Em produção", entregue: "Entregue" } as const;

/** Selo com a situação real do projeto (em produção / entregue). */
export function SeloSituacao({ projeto }: { projeto: Projeto }) {
  if (!projeto.situacao) return null;
  return (
    <Badge variante="primario" title={projeto.situacaoDetalhe}>
      {ROTULOS[projeto.situacao]}
    </Badge>
  );
}
