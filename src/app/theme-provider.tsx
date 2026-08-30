import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  CHAVE_TEMA,
  TemaContext,
  type ContextoTema,
  type Tema,
} from "@/app/theme-context";

function lerTemaInicial(): Tema {
  if (typeof window === "undefined") return "light";
  try {
    const armazenado = window.localStorage.getItem(CHAVE_TEMA);
    if (armazenado === "light" || armazenado === "dark") return armazenado;
  } catch {
    /* localStorage indisponível — segue para preferência do SO */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ProvedorTema({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(lerTemaInicial);

  useEffect(() => {
    const raiz = document.documentElement;
    raiz.classList.toggle("dark", tema === "dark");
    raiz.style.colorScheme = tema;
    try {
      window.localStorage.setItem(CHAVE_TEMA, tema);
    } catch {
      /* ignora falha de persistência */
    }
  }, [tema]);

  const definir = useCallback((novo: Tema) => setTema(novo), []);
  const alternar = useCallback(
    () => setTema((atual) => (atual === "dark" ? "light" : "dark")),
    [],
  );

  const valor = useMemo<ContextoTema>(
    () => ({ tema, alternar, definir }),
    [tema, alternar, definir],
  );

  return <TemaContext.Provider value={valor}>{children}</TemaContext.Provider>;
}
