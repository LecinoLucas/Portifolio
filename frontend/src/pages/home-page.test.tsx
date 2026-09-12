import { describe, expect, it, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { HomePage } from "@/pages/home-page";
import { AppContent } from "@/app/App";
import { ProvedorTema } from "@/app/theme-provider";

function renderHomePage(initialRoute = "/") {
  return render(
    <ProvedorTema>
      <MemoryRouter initialEntries={[initialRoute]}>
        <HomePage />
      </MemoryRouter>
    </ProvedorTema>
  );
}

function renderAppWithRouter(initialRoute = "/") {
  return render(
    <ProvedorTema>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppContent />
      </MemoryRouter>
    </ProvedorTema>
  );
}

describe("Fase 1: Nova Página Principal & Mapa de Atuação", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("1. Renderiza a nova Home com títulos factuais, conceito e mensagem central", () => {
    renderHomePage();

    // Título profissional oficial
    expect(
      screen.getByText(/Analista de Sistemas \| TOTVS Protheus \| Processos, Integrações e Desenvolvimento/i)
    ).toBeInTheDocument();

    // Mensagem central
    expect(
      screen.getByText(/Eu transformo processos reais em sistemas bem estruturados\./i)
    ).toBeInTheDocument();

    // Conceito principal
    expect(
      screen.getByText(/Da operação à arquitetura: Linha do Tempo Factual/i)
    ).toBeInTheDocument();

    // Papel da IA como ferramenta técnica
    expect(
      screen.getByText(/Utilizo IA como ferramenta de desenvolvimento\. Minha responsabilidade é compreender o processo/i)
    ).toBeInTheDocument();

    // Botão de currículo desabilitado
    const btnCurriculo = screen.getByRole("button", {
      name: /currículo atualizado em preparação/i,
    });
    expect(btnCurriculo).toBeDisabled();

    // Pergunta principal do Mapa de Atuação
    expect(
      screen.getByRole("heading", {
        name: /qual desafio sua empresa precisa resolver\?/i,
      })
    ).toBeInTheDocument();
  });

  it("2 e 3. Altera o painel pelo Mapa de Atuação e sincroniza seleção com a URL", () => {
    // Usamos um componente que exibe a localização atual para verificar a query string
    function TestLocationDisplay() {
      const location = useLocation();
      return <div data-testid="location-display">{location.search}</div>;
    }

    render(
      <ProvedorTema>
        <MemoryRouter initialEntries={["/"]}>
          <HomePage />
          <TestLocationDisplay />
        </MemoryRouter>
      </ProvedorTema>
    );

    // Estado inicial: Protheus selecionado por padrão
    expect(
      screen.getByRole("heading", { name: /organizar processos no protheus/i })
    ).toBeInTheDocument();

    // Clica no Desafio 02: Fiscal & Divergências
    const tabFiscal = screen.getByRole("tab", {
      name: /investigar divergências fiscais e financeiras/i,
    });
    fireEvent.click(tabFiscal);

    // Painel atualiza para Fiscal
    expect(
      screen.getByRole("heading", { name: /investigar divergências fiscais e financeiras/i })
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("location-display")
    ).toHaveTextContent("?foco=fiscal");

    // Clica no Desafio 03: Integrações
    const tabIntegracoes = screen.getByRole("tab", {
      name: /integrar bancos, apis e certificados/i,
    });
    fireEvent.click(tabIntegracoes);

    expect(
      screen.getByRole("heading", { name: /integrar bancos, apis e certificados/i })
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("location-display")
    ).toHaveTextContent("?foco=integracoes");

    // Clica no Desafio 04: Desenvolvimento
    const tabDev = screen.getByRole("tab", {
      name: /transformar requisitos em software/i,
    });
    fireEvent.click(tabDev);

    expect(
      screen.getByRole("heading", { name: /transformar requisitos em software/i })
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("location-display")
    ).toHaveTextContent("?foco=desenvolvimento");
  });

  it("4. Suporta navegação voltar/avançar pela query string da URL", () => {
    // Renderiza direto com query string ?foco=fiscal
    renderHomePage("/?foco=fiscal");

    expect(
      screen.getByRole("heading", { name: /investigar divergências fiscais e financeiras/i })
    ).toBeInTheDocument();

    const tabFiscal = screen.getByRole("tab", {
      name: /investigar divergências fiscais e financeiras/i,
    });
    expect(tabFiscal).toHaveAttribute("aria-selected", "true");
  });

  it("5. Suporta navegação por teclado e semântica acessível (role=tablist/tab)", () => {
    renderHomePage();

    const tablist = screen.getByRole("tablist", {
      name: /opções de desafios e áreas de atuação/i,
    });
    expect(tablist).toBeInTheDocument();

    const tabIntegracoes = screen.getByRole("tab", {
      name: /integrar bancos, apis e certificados/i,
    });

    // Pressiona Enter para selecionar
    fireEvent.keyDown(tabIntegracoes, { key: "Enter", code: "Enter" });

    expect(
      screen.getByRole("heading", { name: /integrar bancos, apis e certificados/i })
    ).toBeInTheDocument();
  });

  it("6. Apresenta os três níveis de conhecimento factuais: Experiência prática, Participação e Conhecimento inicial", () => {
    // Renderiza no painel fiscal onde coexistem os três níveis
    renderHomePage("/?foco=fiscal");

    expect(screen.getAllByText(/experiência prática/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/participação/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/conhecimento inicial/i).length).toBeGreaterThan(0);

    // Valida que LMC está descrito como rotina operacional e fiscal de combustíveis, e não tributo
    expect(
      screen.getByText(/Rotina de controle fiscal e operacional de combustíveis/i)
    ).toBeInTheDocument();
  });

  it("7. Apresenta a métrica de 51 filiais somente no contexto factual do Analista Fiscal Automatizado e Rede Marajó", () => {
    renderHomePage("/?foco=fiscal");

    // No destaque prático do Analista Fiscal Automatizado
    expect(
      screen.getByText(/Abrangência informada de 51 filiais da rede corporativa\./i)
    ).toBeInTheDocument();

    // Valida menção às tabelas SF3 e SFT
    expect(
      screen.getByText(/SF3 \(Livros Fiscais\) e SFT \(Itens de Livros\)/i)
    ).toBeInTheDocument();
  });

  it("8. Garante ausência total de '500 usuários' na página principal", () => {
    const { container } = renderHomePage();
    expect(container.textContent).not.toMatch(/500\s*usuários/i);
    expect(container.textContent).not.toMatch(/500\s*usuarios/i);
  });

  it("9. Garante ausência total de textos ou manifestos contra low-code", () => {
    const { container } = renderHomePage();
    expect(container.textContent).not.toMatch(/ilusão do low-code/i);
    expect(container.textContent).not.toMatch(/superando o low-code/i);
    expect(container.textContent).not.toMatch(/contra low-code/i);
    expect(container.textContent).not.toMatch(/apaixonado por tecnologia/i);
  });

  it("10. Não exibe dados bancários ou fiscais reais na página principal", () => {
    const { container } = renderHomePage("/?foco=integracoes");
    // Garante ausência de chaves de 44 dígitos de NF-e
    expect(container.textContent).not.toMatch(/\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}/);
    // Garante que aviso de confidencialidade/dados estruturais está presente
    expect(
      screen.getByText(/Não há simulação de contas, CNPJs, certificados ou movimentações financeiras reais/i)
    ).toBeInTheDocument();
  });

  it("11. Executa 100% no cliente sem chamadas externas de rede", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    renderHomePage();

    fireEvent.click(screen.getByRole("tab", { name: /investigar divergências/i }));
    fireEvent.click(screen.getByRole("tab", { name: /integrar bancos/i }));
    fireEvent.click(screen.getByRole("tab", { name: /transformar requisitos/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("12. Preserva navegação das rotas existentes no App", () => {
    renderAppWithRouter("/sobre");
    expect(screen.getByRole("heading", { name: /sobre lecino lucas/i })).toBeInTheDocument();

    renderAppWithRouter("/experiencia");
    expect(screen.getByRole("heading", { name: /experiência & atuação corporativa/i })).toBeInTheDocument();

    renderAppWithRouter("/projetos");
    expect(screen.getByRole("heading", { name: /módulos tecnológicos/i })).toBeInTheDocument();

    renderAppWithRouter("/contato");
    expect(screen.getByRole("heading", { name: /contato & propostas/i })).toBeInTheDocument();
  });
});
