import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "@/app/App";

describe("<App />", () => {
  it("renderiza o nome como título principal (h1)", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /lecino\s*lucas/i }),
    ).toBeInTheDocument();
  });

  it("expõe as seções-âncora esperadas", () => {
    const { container } = render(<App />);
    for (const id of ["sobre", "experiencia", "investigacao", "projetos", "les", "tecnologias", "contato"]) {
      expect(container.querySelector(`#${id}`), id).not.toBeNull();
    }
  });

  it("não exibe relato de incidente enquanto não houver caso real confirmado", () => {
    render(<App />);
    expect(screen.getByText(/modelo ilustrativo/i)).toBeInTheDocument();
    expect(screen.queryByText(/^caso real$/i)).toBeNull();
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
