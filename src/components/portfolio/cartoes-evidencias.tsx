import { useEffect, useRef, useState } from "react";
import { perfil } from "@/data/perfil";
import { cn } from "@/lib/utils";

const INTERVALO_MS = 4500;

/**
 * Evidências do Início. No celular viram um carrossel que avança sozinho (e para quando a
 * pessoa toca ou desliza); a partir de `sm` ficam em colunas.
 */
export function CartoesEvidencias() {
  const trilho = useRef<HTMLUListElement>(null);
  const [atual, setAtual] = useState(0);
  const [automatico, setAutomatico] = useState(true);
  const total = perfil.evidencias.length;

  function irPara(indice: number) {
    const el = trilho.current;
    if (!el) return;
    const cartao = el.children[indice] as HTMLElement | undefined;
    el.scrollTo({ left: cartao ? cartao.offsetLeft - el.offsetLeft : 0, behavior: "smooth" });
  }

  useEffect(() => {
    const celular = window.matchMedia("(max-width: 639px)").matches;
    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!automatico || !celular || semMovimento) return;
    const id = window.setInterval(() => {
      setAtual((i) => {
        const proximo = (i + 1) % total;
        irPara(proximo);
        return proximo;
      });
    }, INTERVALO_MS);
    return () => window.clearInterval(id);
  }, [automatico, total]);

  function aoRolar() {
    const el = trilho.current;
    if (!el || el.children.length === 0) return;
    const largura = (el.children[0] as HTMLElement).offsetWidth;
    setAtual(Math.min(total - 1, Math.max(0, Math.round(el.scrollLeft / Math.max(largura, 1)))));
  }

  return (
    <div>
      <ul
        ref={trilho}
        onScroll={aoRolar}
        onPointerDown={() => setAutomatico(false)}
        onTouchStart={() => setAutomatico(false)}
        onFocus={() => setAutomatico(false)}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
      >
        {perfil.evidencias.map((item, indice) => (
          <li
            key={item.titulo}
            className="marca-palavra flex min-w-[85%] snap-center flex-col rounded-lg border border-primary/40 bg-card/80 p-5 shadow-lg shadow-black/10 sm:min-w-0"
            style={{ animationDelay: `${indice * 0.15}s` }}
          >
            <h3 className="texto-gradiente text-lg font-extrabold tracking-tight">{item.titulo}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/85">{item.texto}</p>
            <p className="mt-3 font-mono text-xs text-primary">{item.tags.join(" · ")}</p>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex justify-center gap-2 sm:hidden" aria-hidden="true">
        {perfil.evidencias.map((item, indice) => (
          <span key={item.titulo} className={cn("h-1.5 rounded-full transition-all", indice === atual ? "w-6 bg-primary" : "w-1.5 bg-border")} />
        ))}
      </div>
    </div>
  );
}
