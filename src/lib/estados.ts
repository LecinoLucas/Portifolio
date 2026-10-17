import type { EstadoCompetencia } from "@/types";

/** Rótulos públicos dos estados de uma competência (usados na legenda e nos selos). */
export const ROTULO_ESTADO: Record<EstadoCompetencia, string> = {
  profissional: "Uso profissional",
  entregue: "Projeto próprio entregue",
  desenvolvimento: "Em desenvolvimento",
  estudo: "Estudo",
};
