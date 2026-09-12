import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITULOS_ROTAS: Record<string, string> = {
  "/": "Lecino Lucas — Sistemas, Integrações e Desenvolvimento",
  "/sobre": "Sobre & Trajetória — Lecino Lucas",
  "/experiencia": "Experiência Profissional — Lecino Lucas",
  "/projetos": "Projetos & Estudos de Caso — Lecino Lucas",
  "/competencias": "Competências & Stack Tecnológica — Lecino Lucas",
  "/contato": "Contato & Oportunidades — Lecino Lucas",
};

/**
 * Gerencia a experiência de transição entre rotas SPA:
 * 1. Restaura o scroll para o topo da tela instantaneamente.
 * 2. Atualiza o document.title de forma descritiva e semântica.
 * 3. Transfere o foco do teclado/leitor de tela para o container principal.
 */
export function ScrollToTopAndFocus() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Restaura scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // 2. Atualiza título da aba
    const tituloBase = TITULOS_ROTAS[pathname];
    if (tituloBase) {
      document.title = tituloBase;
    } else if (pathname.startsWith("/projetos/")) {
      document.title = "Estudo de Caso — Lecino Lucas";
    } else {
      document.title = "Página Não Encontrada (404) — Lecino Lucas";
    }

    // 3. Foco acessível no container principal
    const mainEl = document.getElementById("conteudo");
    if (mainEl) {
      mainEl.setAttribute("tabindex", "-1");
      mainEl.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
