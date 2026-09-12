/** Itens de navegação baseados em rotas reais SPA. */
export interface ItemNav {
  path: string;
  rotulo: string;
}

export const itensNav: ItemNav[] = [
  { path: "/", rotulo: "Central" },
  { path: "/sobre", rotulo: "Sobre" },
  { path: "/experiencia", rotulo: "Experiência" },
  { path: "/projetos", rotulo: "Projetos" },
  { path: "/competencias", rotulo: "Competências" },
  { path: "/contato", rotulo: "Contato" },
];
