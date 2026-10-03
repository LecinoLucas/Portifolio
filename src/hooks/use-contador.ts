import { useEffect, useState } from "react";

/** Conta de 0 até `alvo` quando `ativo`. Sem animação se o sistema pede menos movimento. */
export function useContador(alvo: number, ativo: boolean, duracaoMs = 1100) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!ativo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValor(alvo);
      return;
    }
    let quadro = 0;
    const inicio = performance.now();
    const passo = (agora: number) => {
      const progresso = Math.min((agora - inicio) / duracaoMs, 1);
      setValor(Math.round(alvo * (1 - Math.pow(1 - progresso, 3))));
      if (progresso < 1) quadro = requestAnimationFrame(passo);
    };
    quadro = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(quadro);
  }, [alvo, ativo, duracaoMs]);

  return valor;
}
