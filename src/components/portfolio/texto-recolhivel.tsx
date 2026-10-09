import { useState } from "react";

/** Apresentação do Início: no celular fica resumida, com "Ler mais". */
export function TextoRecolhivel({ linhas }: { linhas: string[] }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-xl">
      {linhas.map((linha, indice) => (
        <p
          key={linha}
          className={
            indice === 0
              ? `mt-0 ${aberto ? "" : "line-clamp-3 sm:line-clamp-none"}`
              : `mt-2 ${aberto ? "" : "hidden sm:block"}`
          }
        >
          {linha}
        </p>
      ))}
      <button
        type="button"
        aria-expanded={aberto}
        onClick={() => setAberto((v) => !v)}
        className="mt-2 font-mono text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
      >
        {aberto ? "Ler menos" : "Ler mais"}
      </button>
    </div>
  );
}
