import { useCallback, useEffect, useState } from "react";
import { visaoDoHash } from "@/lib/nav";

const PADRAO = "inicio";

function lerVisaoInicial(): string {
  if (typeof window === "undefined") return PADRAO;
  return visaoDoHash(window.location.hash) ?? PADRAO;
}

/**
 * Controla qual seção está visível. A visão fica no hash da URL, então o
 * link é compartilhável e os botões voltar/avançar do navegador funcionam.
 */
export function useVisao() {
  const [ativa, setAtiva] = useState(lerVisaoInicial);

  useEffect(() => {
    const aoMudarHash = () => {
      const visao = visaoDoHash(window.location.hash);
      if (!visao) return;
      setAtiva(visao);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", aoMudarHash);
    return () => window.removeEventListener("hashchange", aoMudarHash);
  }, []);

  const ir = useCallback((id: string) => {
    setAtiva(id);
    if (window.location.hash !== `#${id}`) window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: 0 });
  }, []);

  return { ativa, ir };
}
