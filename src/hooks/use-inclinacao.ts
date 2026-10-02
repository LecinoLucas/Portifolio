import { useCallback, useRef, type PointerEvent } from "react";

const INCLINACAO_MAXIMA = 9;

/**
 * Inclina um elemento em 3D conforme o ponteiro, via variáveis CSS
 * (sem re-render). Só reage a mouse e caneta, e respeita prefers-reduced-motion.
 */
export function useInclinacao<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const aoMover = useCallback((e: PointerEvent<T>) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const caixa = el.getBoundingClientRect();
    const x = (e.clientX - caixa.left) / caixa.width;
    const y = (e.clientY - caixa.top) / caixa.height;
    el.style.setProperty("--ry", `${(x - 0.5) * 2 * INCLINACAO_MAXIMA}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 2 * INCLINACAO_MAXIMA}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  }, []);

  const aoSair = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    ["--rx", "--ry"].forEach((v) => el.style.setProperty(v, "0deg"));
  }, []);

  return { ref, aoMover, aoSair };
}
