/** Visões do portfólio: cada item da barra mostra uma seção por vez. */
export interface ItemNav {
  id: string;
  rotulo: string;
  /** Uma linha para o sumário 3D do Início. */
  descricao?: string;
}

export const itensNav: ItemNav[] = [
  { id: "inicio", rotulo: "Início" },
  { id: "sobre", rotulo: "Sobre mim", descricao: "Quem eu sou e como penso" },
  { id: "investigacao", rotulo: "Investigações", descricao: "O que investigo no dia a dia" },
  { id: "experiencia", rotulo: "Experiência", descricao: "Minha trajetória" },
  { id: "projetos", rotulo: "Projetos", descricao: "Sistemas e demonstrações" },
  { id: "tecnologias", rotulo: "Tecnologias", descricao: "Onde cada uma entra" },
  { id: "les", rotulo: "LES", descricao: "Meu padrão de engenharia" },
  { id: "contato", rotulo: "Contato", descricao: "Vamos conversar" },
];

/** Âncoras antigas ou internas que apontam para uma visão existente. */
const apelidos: Record<string, string> = { topo: "inicio", principios: "les" };

/** Converte um hash (#id) em id de visão; retorna null se não for uma visão. */
export function visaoDoHash(hash: string): string | null {
  const id = hash.replace(/^#/, "");
  const resolvido = apelidos[id] ?? id;
  return itensNav.some((item) => item.id === resolvido) ? resolvido : null;
}
