import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PortalRhDemoPage } from "@/pages/portal-rh-demo-page";
import { links } from "@/data/links";

function renderDemo(rota = "/projetos/portal-rh/demo") {
  return render(
    <MemoryRouter initialEntries={[rota]}>
      <PortalRhDemoPage />
    </MemoryRouter>
  );
}

describe("Demonstração Interativa do Portal RH (/projetos/portal-rh/demo)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renderiza a rota da demonstração com título e aviso de dados fictícios", () => {
    renderDemo();

    // Título da Vaga
    expect(
      screen.getByRole("heading", { name: /Desenvolvedor\(a\) Full Stack Júnior/i })
    ).toBeInTheDocument();

    // Aviso obrigatório de dados fictícios
    expect(
      screen.getByText(/Demonstração interativa — todos os dados são fictícios/i)
    ).toBeInTheDocument();

    // Indicador MOD-03
    expect(screen.getByText(/MOD-03/i)).toBeInTheDocument();
  });

  it("apresenta link correto para o repositório público no GitHub", () => {
    renderDemo();

    const linkGithub = screen.getByRole("link", { name: /GitHub/i });
    expect(linkGithub).toHaveAttribute("href", links.portalRh.github);
  });

  it("permite alternar entre a Visão da Vaga e a Pipeline através do botão Visualizar pipeline", () => {
    renderDemo();

    // Na tela da vaga inicialmente
    expect(screen.getByText(/Competências Essenciais/i)).toBeInTheDocument();

    // Clica no botão "Visualizar pipeline"
    const botaoVisualizar = screen.getByRole("button", { name: /Visualizar pipeline/i });
    fireEvent.click(botaoVisualizar);

    // Agora deve estar na tela do Kanban
    expect(
      screen.getByLabelText(/Quadro Kanban de candidatos com rolagem horizontal/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Ordenar:/i)).toBeInTheDocument();
  });

  it("permite alternar entre as abas Vaga e Pipeline no topo", () => {
    renderDemo();

    // Clica na aba Pipeline
    const abaPipeline = screen.getByRole("button", { name: /Pipeline \(6\)/i });
    fireEvent.click(abaPipeline);

    expect(screen.getByText(/Ana Martins/i)).toBeInTheDocument();

    // Volta para a aba Visão da Vaga
    const abaVaga = screen.getByRole("button", { name: /Visão da Vaga/i });
    fireEvent.click(abaVaga);

    expect(screen.getByText(/Competências Essenciais/i)).toBeInTheDocument();
  });

  it("move candidato para outra etapa via seletor acessível e atualiza as contagens", () => {
    renderDemo();

    // Vai para a pipeline
    fireEvent.click(screen.getByRole("button", { name: /Pipeline \(6\)/i }));

    // Localiza o seletor de movimentação de Ana Martins (está em Triagem)
    const seletorAna = screen.getByLabelText(/Mover candidato Ana Martins para outra etapa/i);
    expect(seletorAna).toHaveValue("triagem");

    // Move para "Entrevista Técnica"
    fireEvent.change(seletorAna, { target: { value: "entrevista_tecnica" } });

    // Verifica que o seletor atualizou
    expect(seletorAna).toHaveValue("entrevista_tecnica");
  });

  it("permite redefinir os dados da demonstração pelo botão Reiniciar", () => {
    renderDemo();

    fireEvent.click(screen.getByRole("button", { name: /Pipeline \(6\)/i }));

    const seletorAna = screen.getByLabelText(/Mover candidato Ana Martins para outra etapa/i);
    fireEvent.change(seletorAna, { target: { value: "contratado" } });
    expect(seletorAna).toHaveValue("contratado");

    // Clica em reiniciar demonstração
    const botaoReiniciar = screen.getByRole("button", { name: /Reiniciar demonstração/i });
    fireEvent.click(botaoReiniciar);

    // Ana Martins volta para triagem
    const seletorAnaReset = screen.getByLabelText(/Mover candidato Ana Martins para outra etapa/i);
    expect(seletorAnaReset).toHaveValue("triagem");
  });

  it("permite alternar a visualização da porcentagem de aderência", () => {
    renderDemo();

    fireEvent.click(screen.getByRole("button", { name: /Pipeline \(6\)/i }));

    // Inicialmente mostra % de aderência de Ana (86%)
    expect(screen.getByText(/86%/i)).toBeInTheDocument();

    // Clica para ocultar %
    const botaoOcultar = screen.getByRole("button", { name: /Ocultar %/i });
    fireEvent.click(botaoOcultar);

    expect(screen.queryByText(/86%/i)).not.toBeInTheDocument();
  });

  it("garante que nenhuma requisição de rede externa é disparada pela demonstração", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    renderDemo();
    fireEvent.click(screen.getByRole("button", { name: /Pipeline \(6\)/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
