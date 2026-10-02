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
  // "Investigações" está desativada (repetia a Experiência). O código segue em
  // src/sections/investigation.tsx e src/data/investigacao.ts, pronto para voltar.
  { id: "experiencia", rotulo: "Experiência", descricao: "Minha trajetória" },
  { id: "projetos", rotulo: "Projetos", descricao: "Sistemas e demonstrações" },
  { id: "tecnologias", rotulo: "Tecnologias", descricao: "O que uso e o que estou aprendendo" },
  { id: "les", rotulo: "LES", descricao: "Meu padrão de engenharia" },
  { id: "contato", rotulo: "Contato", descricao: "Vamos conversar" },
];

/** Âncoras antigas ou internas que apontam para uma visão existente. */
const apelidos: Record<string, string> = { topo: "inicio", principios: "les", investigacao: "experiencia" };

/** Converte um hash (#id) em id de visão; retorna null se não for uma visão. */
export function visaoDoHash(hash: string): string | null {
  const id = hash.replace(/^#/, "");
  const resolvido = apelidos[id] ?? id;
  return itensNav.some((item) => item.id === resolvido) ? resolvido : null;
}
