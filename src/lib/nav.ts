/** Itens do sumário/navegação. O `id` corresponde ao ancoramento da seção. */
export interface ItemNav {
  id: string;
  rotulo: string;
  descricao: string;
}

export const itensNav: ItemNav[] = [
  { id: "sobre", rotulo: "Sobre mim", descricao: "Quem sou e como trabalho" },
  { id: "investigacao", rotulo: "Investigações", descricao: "O que investigo no dia a dia" },
  { id: "experiencia", rotulo: "Experiência", descricao: "Trajetória profissional" },
  { id: "projetos", rotulo: "Projetos", descricao: "Sistemas e demonstrações" },
  { id: "tecnologias", rotulo: "Tecnologias", descricao: "Onde cada uma entra" },
  { id: "les", rotulo: "LES", descricao: "Meu padrão de engenharia" },
  { id: "contato", rotulo: "Contato", descricao: "Fale comigo" },
];
