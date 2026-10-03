import { perfil } from "@/data/perfil";

/** Os três cartões do Início: cada palavra da marca com um exemplo real. */
export function CartoesMarca() {
  return (
    <div>
      <p className="marca-lema font-mono text-xl font-semibold text-primary sm:text-2xl">{perfil.lema}</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {perfil.marca.map((item, indice) => (
          <li
            key={item.palavra}
            className="marca-palavra rounded-lg border border-primary/40 bg-card/80 p-5 shadow-lg shadow-black/10"
            style={{ animationDelay: `${indice * 0.18}s` }}
          >
            <h3 className="texto-gradiente text-3xl font-extrabold tracking-tight sm:text-4xl">{item.palavra}</h3>
            <p className="mt-3 leading-relaxed text-foreground/85">{item.exemplo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
