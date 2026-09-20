import { useEffect, useRef, useState } from "react";

/**
 * Anima um valor numérico de 0 até `valorFinal` quando o elemento entra na
 * viewport. Respeita `prefers-reduced-motion`: nesse caso já inicia no valor final.
 */
export function useCountUp<T extends HTMLElement = HTMLSpanElement>(
  valorFinal: number,
  duracaoMs = 900,
) {
  const ref = useRef<T>(null);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const semMovimento =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)")?.matches === true;
    if (semMovimento || typeof IntersectionObserver === "undefined") {
      setValor(valorFinal);
      return;
    }

    let frameId: number;
    function animar() {
      const inicio = performance.now();
      function passo(agora: number) {
        const progresso = Math.min((agora - inicio) / duracaoMs, 1);
        const suavizado = 1 - Math.pow(1 - progresso, 3);
        setValor(Math.round(valorFinal * suavizado));
        if (progresso < 1) {
          frameId = requestAnimationFrame(passo);
        }
      }
      frameId = requestAnimationFrame(passo);
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          animar();
          observador.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observador.observe(elemento);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [valorFinal, duracaoMs]);

  return { ref, valor };
}
