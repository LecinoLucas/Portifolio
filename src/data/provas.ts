import { totalMesesTI } from "@/data/experiencias";

/** Provas rápidas do Início. Só fatos já comprovados no currículo e nos projetos. */
export interface Prova {
  valor: number;
  sufixo: string;
  rotulo: string;
}

export const provas: Prova[] = [
  { valor: Math.floor(totalMesesTI / 12), sufixo: "+", rotulo: "anos de TI" },
  { valor: 500, sufixo: "+", rotulo: "usuários no Portal de Engenharia" },
  { valor: 53, sufixo: "", rotulo: "filiais com certificados renovados sozinhos" },
  { valor: 4, sufixo: "", rotulo: "camadas de teste: Vitest, Playwright, k6 e Stryker" },
];
