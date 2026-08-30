import { useEffect, useState } from "react";

/**
 * Observa seções por `id` e retorna o id da que está visível no topo.
 * Usado para marcar o link ativo do Header.
 */
export function useScrollSpy(ids: string[], offset = 96): string | null {
  const [ativo, setAtivo] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const elementos = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elementos.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visiveis = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visiveis[0]) setAtivo(visiveis[0].target.id);
      },
      {
        rootMargin: `-${offset}px 0px -65% 0px`,
        threshold: 0,
      },
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, [ids, offset]);

  return ativo;
}
