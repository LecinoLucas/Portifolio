import type { Projeto } from "@/types";
import { alphamenBarbearia } from "@/data/projetos/alphamen-barbearia";
import { clinica } from "@/data/projetos/clinica";
import { bankingprotheus } from "@/data/projetos/bankingprotheus";
import { importnfe } from "@/data/projetos/importnfe";
import { les } from "@/data/projetos/les";
import { portalEngenharia } from "@/data/projetos/portal-engenharia";
import { portalFiscal } from "@/data/projetos/portal-fiscal";
import { portalRh } from "@/data/projetos/portal-rh";

/**
 * Projetos reais. Descrições baseadas no escopo efetivamente trabalhado.
 * Sem métricas ou resultados numéricos não comprovados. Um arquivo por projeto.
 */
export const projetos: Projeto[] = [
  portalEngenharia,
  portalRh,
  bankingprotheus,
  portalFiscal,
  les,
  clinica,
  alphamenBarbearia,
  importnfe,
];

export const projetosDestaque = projetos.filter((p) => p.destaque);

export function projetoPorSlug(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
