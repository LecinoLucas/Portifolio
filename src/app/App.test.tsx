import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "@/app/App";

describe("<App />", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it("renderiza o nome como título principal (h1)", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /lecino\s*lucas/i }),
    ).toBeInTheDocument();
  });

  it("expõe as seções-âncora esperadas", () => {
    const { container } = render(<App />);
    for (const id of ["inicio", "sobre", "investigacao", "experiencia", "projetos", "les", "tecnologias", "contato"]) {
      expect(container.querySelector(`#${id}`), id).not.toBeNull();
    }
  });

  it("apresenta as investigações como rotina, com FK5 entre as tabelas", () => {
    render(<App />);
    expect(screen.getByText(/exemplo de investigação/i)).toBeInTheDocument();
    expect(screen.getAllByText("FK5").length).toBeGreaterThan(0);
    expect(screen.queryByText(/causa identificada/i)).toBeNull();
  });

  it("não cita P12 em lugar nenhum", () => {
    const { container } = render(<App />);
    expect(container.textContent).not.toMatch(/\bP12\b/);
  });

  it("tem barra de navegação fixa com um link para cada seção", () => {
    render(<App />);
    const barra = screen.getByRole("navigation", { name: "Seções" });
    expect(barra.querySelectorAll('a[href^="#"]').length).toBe(8);
  });

  it("mostra uma seção por vez ao clicar na barra", () => {
    const { container } = render(<App />);
    const visao = (id: string) => container.querySelector<HTMLElement>(`[data-visao="${id}"]`);
    expect(visao("inicio")?.hidden).toBe(false);
    expect(visao("projetos")?.hidden).toBe(true);

    fireEvent.click(screen.getByRole("link", { name: "Projetos" }));

    expect(visao("projetos")?.hidden).toBe(false);
    expect(visao("inicio")?.hidden).toBe(true);
    expect(window.location.hash).toBe("#projetos");
    expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute("aria-current", "page");
  });

  it("Sobre mim traz a regra de negócio, a história e fecha com o trabalho em equipe", () => {
    const { container } = render(<App />);
    const sobre = container.querySelector("#sobre");
    const rotulos = Array.from(sobre?.querySelectorAll("h3") ?? []).map((h) => h.textContent);
    expect(rotulos).toEqual(["como eu penso", "minha história", "meu ritmo", "além do trabalho", "para onde vou", "em equipe", "em resumo"]);
    expect(sobre?.textContent).toContain("Regra de negócio primeiro");
    expect(sobre?.textContent).toContain("Entender o projeto por inteiro");
  });

  it("não fala em sintaxe no Sobre mim", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#sobre")?.textContent).not.toMatch(/sintaxe/i);
  });

  it("não usa mais as duas barras (//) como marcador de rótulo", () => {
    const { container } = render(<App />);
    expect(container.textContent).not.toMatch(/\/\/ [a-zà-ú]/i);
  });

  it("tem link de pular para o conteúdo (acessibilidade)", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /pular para o conteúdo/i }),
    ).toBeInTheDocument();
  });

  it("mostra os títulos dos projetos em destaque", () => {
    render(<App />);
    expect(screen.getByText("Conciliação Bancária Itaú")).toBeInTheDocument();
    // Aparece no card e no cabeçalho da seção LES — basta existir.
    expect(
      screen.getAllByText(/Lecino Lucas Engineering Standard \(LES\)/).length,
    ).toBeGreaterThan(0);
  });
});
