import { useContext } from "react";
import { TemaContext, type ContextoTema } from "@/app/theme-context";

export function useTema(): ContextoTema {
  const contexto = useContext(TemaContext);
  if (!contexto) {
    throw new Error("useTema deve ser usado dentro de <ProvedorTema>.");
  }
  return contexto;
}
