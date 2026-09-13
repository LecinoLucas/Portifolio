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

    // Indicador de Demonstração Interativa
    expect(screen.getByText(/^Demonstração Interativa$/i)).toBeInTheDocument();
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

  it("move candidato para outra etapa via seletor acessível e atualiza as contagens de origem e destino", () => {
    renderDemo();

    // Vai para a pipeline
    fireEvent.click(screen.getByRole("button", { name: /Pipeline \(6\)/i }));

    // Valida contadores iniciais de Triagem e Entrevista Técnica
    const contadorTriagem = screen.getByTestId("contador-triagem");
    const contadorTecnica = screen.getByTestId("contador-entrevista_tecnica");
    expect(contadorTriagem).toHaveTextContent("1");
    expect(contadorTecnica).toHaveTextContent("1");

    // Localiza o seletor de movimentação de Ana Martins (está em Triagem)
    const seletorAna = screen.getByLabelText(/Mover candidato Ana Martins para outra etapa/i);
    expect(seletorAna).toHaveValue("triagem");

    // Move para "Entrevista Técnica"
    fireEvent.change(seletorAna, { target: { value: "entrevista_tecnica" } });

    // Confirma que o seletor atualizou
    expect(seletorAna).toHaveValue("entrevista_tecnica");

    // Confirma a redução do contador da etapa de origem (Triagem: 1 -> 0)
    expect(contadorTriagem).toHaveTextContent("0");

    // Confirma o aumento do contador da etapa de destino (Entrevista Técnica: 1 -> 2)
    expect(contadorTecnica).toHaveTextContent("2");
  });

  it("restaura completamente o estado inicial ao clicar em Reiniciar demonstração", () => {
    renderDemo();

    // 1. Vai para a pipeline
    fireEvent.click(screen.getByRole("button", { name: /Pipeline \(6\)/i }));

    // 2. Altera candidatos e contadores: move Ana Martins para Contratado
    const seletorAna = screen.getByLabelText(/Mover candidato Ana Martins para outra etapa/i);
    fireEvent.change(seletorAna, { target: { value: "contratado" } });
    expect(screen.getByTestId("contador-triagem")).toHaveTextContent("0");
    expect(screen.getByTestId("contador-contratado")).toHaveTextContent("1");

    // 3. Altera ordenação para 'Maior aderência'
    const botaoMaior = screen.getByRole("button", { name: /Maior aderência/i });
    fireEvent.click(botaoMaior);
    expect(botaoMaior).toHaveClass("bg-primary");

    // 4. Oculta os percentuais de aderência
    const botaoOcultar = screen.getByRole("button", { name: /Ocultar %/i });
    fireEvent.click(botaoOcultar);
    expect(screen.queryByText(/86%/i)).not.toBeInTheDocument();

    // 5. Abre a área de reprovados
    const botaoReprovados = screen.getByRole("button", { name: /Reprovados \(0\)/i });
    fireEvent.click(botaoReprovados);
    expect(screen.getByText(/Nenhum candidato reprovado nesta demonstração/i)).toBeInTheDocument();

    // 6. Executa ação: Clica no botão "Reiniciar demonstração"
    const botaoReiniciar = screen.getByRole("button", { name: /Reiniciar demonstração/i });
    fireEvent.click(botaoReiniciar);

    // Confirmação 1: Tela inicial 'Visão da Vaga' restaurada
    expect(
      screen.getByRole("heading", { name: /Desenvolvedor\(a\) Full Stack Júnior/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Competências Essenciais/i)).toBeInTheDocument();

    // Retorna para a visualização do pipeline para conferir os demais estados restaurados
    fireEvent.click(screen.getByRole("button", { name: /Pipeline \(6\)/i }));

    // Confirmação 2: Candidatos originais restaurados
    const seletorAnaReset = screen.getByLabelText(/Mover candidato Ana Martins para outra etapa/i);
    expect(seletorAnaReset).toHaveValue("triagem");

    // Confirmação 3: Contadores por etapa restaurados (origem e destino voltam aos valores iniciais)
    expect(screen.getByTestId("contador-triagem")).toHaveTextContent("1");
    expect(screen.getByTestId("contador-contratado")).toHaveTextContent("0");

    // Confirmação 4: Ordenação padrão restaurada
    const botaoPadrao = screen.getByRole("button", { name: /Padrão/i });
    expect(botaoPadrao).toHaveClass("bg-primary");
    expect(screen.getByRole("button", { name: /Maior aderência/i })).not.toHaveClass("bg-primary");

    // Confirmação 5: Percentuais de aderência visíveis restaurados
    expect(screen.getByText(/86%/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Ocultar %/i })).toBeInTheDocument();

    // Confirmação 6: Área de reprovados fechada restaurada
    expect(screen.queryByText(/Nenhum candidato reprovado nesta demonstração/i)).not.toBeInTheDocument();
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

    // Clica para mostrar % novamente
    const botaoMostrar = screen.getByRole("button", { name: /Mostrar %/i });
    fireEvent.click(botaoMostrar);

    expect(screen.getByText(/86%/i)).toBeInTheDocument();
  });

  it("garante que nenhuma requisição de rede externa é disparada pela demonstração em qualquer interação", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    renderDemo();

    // Interações completas no frontend
    fireEvent.click(screen.getByRole("button", { name: /Visualizar pipeline/i }));
    const seletorAna = screen.getByLabelText(/Mover candidato Ana Martins para outra etapa/i);
    fireEvent.change(seletorAna, { target: { value: "entrevista_rh" } });
    fireEvent.click(screen.getByRole("button", { name: /Maior aderência/i }));
    fireEvent.click(screen.getByRole("button", { name: /Ocultar %/i }));
    fireEvent.click(screen.getByRole("button", { name: /Reiniciar demonstração/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
