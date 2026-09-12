/** Itens de navegação do Header. O `id` corresponde ao ancoramento da seção. */
export interface ItemNav {
  id: string;
  rotulo: string;
}

export const itensNav: ItemNav[] = [
  { id: "atuacao", rotulo: "Especialidades" },
  { id: "sobre", rotulo: "Sobre" },
  { id: "experiencia", rotulo: "Experiência" },
  { id: "projetos", rotulo: "Projetos" },
  { id: "les", rotulo: "LES" },
  { id: "tecnologias", rotulo: "Tecnologias" },
  { id: "contato", rotulo: "Contato" },
];
