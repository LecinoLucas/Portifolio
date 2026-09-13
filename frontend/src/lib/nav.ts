/** Itens de navegação baseados em rotas reais SPA. */
export interface ItemNav {
  path: string;
  rotulo: string;
}

export const itensNav: ItemNav[] = [
  { path: "/", rotulo: "Currículo" },
  { path: "/experiencia", rotulo: "Trajetória" },
  { path: "/projetos", rotulo: "Casos reais" },
  { path: "/contato", rotulo: "Contato" },
];
