/** Visões do portfólio: cada item da barra mostra uma seção por vez. */
export interface ItemNav {
  id: string;
  rotulo: string;
}

export const itensNav: ItemNav[] = [
  { id: "inicio", rotulo: "Início" },
  { id: "sobre", rotulo: "Sobre mim" },
  { id: "investigacao", rotulo: "Investigações" },
  { id: "experiencia", rotulo: "Experiência" },
  { id: "projetos", rotulo: "Projetos" },
  { id: "tecnologias", rotulo: "Tecnologias" },
  { id: "les", rotulo: "LES" },
  { id: "contato", rotulo: "Contato" },
];

/** Âncoras antigas ou internas que apontam para uma visão existente. */
const apelidos: Record<string, string> = { topo: "inicio", principios: "les" };

/** Converte um hash (#id) em id de visão; retorna null se não for uma visão. */
export function visaoDoHash(hash: string): string | null {
  const id = hash.replace(/^#/, "");
  const resolvido = apelidos[id] ?? id;
  return itensNav.some((item) => item.id === resolvido) ? resolvido : null;
}
