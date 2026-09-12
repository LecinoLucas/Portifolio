import { createContext } from "react";

export type Tema = "light" | "dark";

export interface ContextoTema {
  tema: Tema;
  alternar: () => void;
  definir: (tema: Tema) => void;
}

export const TemaContext = createContext<ContextoTema | null>(null);
export const CHAVE_TEMA = "tema";
