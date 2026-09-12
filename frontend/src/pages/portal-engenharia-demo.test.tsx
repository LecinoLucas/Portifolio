import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import { PortalEngenhariaDemoProvider } from "@/context/portal-engenharia-demo-context";
import { PortalEngenhariaDemoPage } from "@/pages/portal-engenharia-demo-page";
import { PortalEngenhariaObraPage } from "@/pages/portal-engenharia-obra-page";
import { projetos } from "@/data/projetos";
import { perfil } from "@/data/perfil";

function renderDemoApp(rotaInicial = "/projetos/portal-engenharia/demo") {
  return render(
    <MemoryRouter initialEntries={[rotaInicial]}>
      <PortalEngenhariaDemoProvider>
        <Routes>
          <Route path="/projetos/portal-engenharia/demo" element={<Outlet />}>
            <Route index element={<PortalEngenhariaDemoPage />} />
            <Route path="obra/:id" element={<PortalEngenhariaObraPage />} />
          </Route>
        </Routes>
      </PortalEngenhariaDemoProvider>
    </MemoryRouter>
  );
}

describe("Demonstração Mockada do Portal de Engenharia", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renderiza o Painel Executivo com aviso permanente de dados fictícios e título", () => {
    renderDemoApp("/projetos/portal-engenharia/demo");

    expect(
      screen.getByRole("heading", { name: /Painel Executivo de Obras/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Demonstração interativa — todos os dados são fictícios/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/MOD-01/i)).toBeInTheDocument();
  });

  it("calcula dinamicamente e exibe corretamente todos os KPIs a partir dos dados", () => {
    renderDemoApp("/projetos/portal-engenharia/demo");

    // Total de Obras: 4
    expect(screen.getByText("4")).toBeInTheDocument();
    // Obras em andamento: 2
    expect(screen.getByText("2")).toBeInTheDocument();
    // Total Orçado: R$ 16.550.000 (soma calculada das 4 obras)
    expect(screen.getByText(/16\.550\.000/i)).toBeInTheDocument();
    // Total Realizado: R$ 10.475.000 (soma calculada das 4 obras)
    expect(screen.getByText(/10\.475\.000/i)).toBeInTheDocument();
  });

  it("permite filtrar obras por status e buscar por texto", () => {
    renderDemoApp("/projetos/portal-engenharia/demo");

    // Inicialmente exibe as 4 obras
    expect(screen.getByText(/Edifício Horizonte Sul/i)).toBeInTheDocument();
    expect(screen.getByText(/Residencial Parque das Flores/i)).toBeInTheDocument();
    expect(screen.getByText(/Centro Comercial Buritis/i)).toBeInTheDocument();
    expect(screen.getByText(/Galpão Logístico Eixo Norte/i)).toBeInTheDocument();

    // Filtra por 'Planejamento'
    fireEvent.click(screen.getByRole("button", { name: /^Planejamento$/i }));
    expect(screen.getByText(/Residencial Parque das Flores/i)).toBeInTheDocument();
    expect(screen.queryByText(/Edifício Horizonte Sul/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Centro Comercial Buritis/i)).not.toBeInTheDocument();

    // Retorna para 'Todas' e busca por cidade 'Rio Verde'
    fireEvent.click(screen.getByRole("button", { name: /^Todas$/i }));
    const campoBusca = screen.getByPlaceholderText(/Buscar por nome, código ou cidade/i);
    fireEvent.change(campoBusca, { target: { value: "Rio Verde" } });

    expect(screen.getByText(/Galpão Logístico Eixo Norte/i)).toBeInTheDocument();
    expect(screen.queryByText(/Edifício Horizonte Sul/i)).not.toBeInTheDocument();
  });

  it("exibe estado vazio ao não encontrar obras e permite restaurar os filtros", () => {
    renderDemoApp("/projetos/portal-engenharia/demo");

    const campoBusca = screen.getByPlaceholderText(/Buscar por nome, código ou cidade/i);
    fireEvent.change(campoBusca, { target: { value: "TermoInexistenteXYZ" } });

    expect(screen.getByText(/Nenhuma obra encontrada/i)).toBeInTheDocument();

    // Clica em restaurar filtros
    const botoesRestaurar = screen.getAllByRole("button", { name: /Restaurar filtros/i });
    fireEvent.click(botoesRestaurar[0]);

    // Todas as 4 obras retornam
    expect(screen.getByText(/Edifício Horizonte Sul/i)).toBeInTheDocument();
    expect(screen.getByText(/Centro Comercial Buritis/i)).toBeInTheDocument();
  });

  it("navega do painel para o detalhamento da obra e permite retorno", () => {
    renderDemoApp("/projetos/portal-engenharia/demo");

    // Clica em acessar obra no Edifício Horizonte Sul
    const linkAcessar = screen.getByRole("link", {
      name: /Acessar obra Edifício Horizonte Sul/i,
    });
    fireEvent.click(linkAcessar);

    // Agora está na Tela 2 (Detalhamento)
    expect(
      screen.getByRole("heading", { name: /Edifício Horizonte Sul/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Estrutura Analítica de Projeto \(EAP\)/i)).toBeInTheDocument();

    // Retorna ao painel
    const linkVoltar = screen.getByRole("link", { name: /Voltar ao painel de obras/i });
    fireEvent.click(linkVoltar);

    // De volta à Tela 1
    expect(
      screen.getByRole("heading", { name: /Painel Executivo de Obras/i })
    ).toBeInTheDocument();
  });

  it("renderiza a tela de detalhamento com indicadores, responsável fictício e indicador único 3/4", () => {
    renderDemoApp("/projetos/portal-engenharia/demo/obra/edificio-horizonte-sul");

    expect(screen.getByText(/OBR-2026-01/i)).toBeInTheDocument();
    expect(screen.getByText(/Eng\. Carlos Eduardo \(Fictício\)/i)).toBeInTheDocument();
    expect(screen.getByText("Macro-etapas aprovadas:")).toBeInTheDocument();
    expect(screen.getByText("3/4")).toBeInTheDocument();
    expect(screen.queryByText(/3 de 4/i)).not.toBeInTheDocument();
    // Saldo calculado: R$ 1.940.000
    expect(screen.getByText(/1\.940\.000/i)).toBeInTheDocument();
  });

  it("permite expandir e recolher subitens da EAP", () => {
    renderDemoApp("/projetos/portal-engenharia/demo/obra/edificio-horizonte-sul");

    // Subitens da etapa 1 não estão visíveis inicialmente
    expect(screen.queryByText(/Instalações provisórias, tapumes e ligações/i)).not.toBeInTheDocument();

    // Clica para expandir a etapa 1
    const botaoExpansaoEtapa1 = screen.getByLabelText(/Expandir etapa 1\.0/i);
    fireEvent.click(botaoExpansaoEtapa1);

    // Agora estão visíveis
    expect(screen.getByText(/Instalações provisórias, tapumes e ligações/i)).toBeInTheDocument();
    expect(screen.getByText(/Locação da obra e terraplenagem mecanizada/i)).toBeInTheDocument();

    // Clica novamente para recolher
    const botaoRecolherEtapa1 = screen.getByLabelText(/Recolher etapa 1\.0/i);
    fireEvent.click(botaoRecolherEtapa1);

    expect(screen.queryByText(/Instalações provisórias, tapumes e ligações/i)).not.toBeInTheDocument();
  });

  it("permite cancelar a aprovação de macro-etapa sem alterar o estado (mantém indicador único 3/4)", () => {
    renderDemoApp("/projetos/portal-engenharia/demo/obra/edificio-horizonte-sul");

    // Valida o indicador único sem duplicação
    expect(screen.getByText("Macro-etapas aprovadas:")).toBeInTheDocument();
    expect(screen.getByText("3/4")).toBeInTheDocument();
    expect(screen.queryByText(/3 de 4/i)).not.toBeInTheDocument();

    // Clica no botão 'Aprovar etapa' da etapa pendente (Instalações)
    const botaoAprovar = screen.getByRole("button", { name: /Aprovar etapa/i });
    fireEvent.click(botaoAprovar);

    // Modal é exibido com explicação de simulação
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByText(/A aprovação e a alçada financeira são simuladas nesta demonstração interativa/i)
    ).toBeInTheDocument();

    // Clica em Cancelar
    const botaoCancelar = screen.getByRole("button", { name: /Cancelar/i });
    fireEvent.click(botaoCancelar);

    // Modal fecha e continua com indicador único 3/4
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByText("3/4")).toBeInTheDocument();
    expect(screen.queryByText(/3 de 4/i)).not.toBeInTheDocument();
  });

  it("confirma aprovação de macro-etapa, atualiza indicador único para 4/4 e permite reiniciar a demo", () => {
    renderDemoApp("/projetos/portal-engenharia/demo/obra/edificio-horizonte-sul");

    // Indicador único inicial
    expect(screen.getByText("Macro-etapas aprovadas:")).toBeInTheDocument();
    expect(screen.getByText("3/4")).toBeInTheDocument();
    expect(screen.queryByText(/3 de 4/i)).not.toBeInTheDocument();

    // Abre modal e confirma
    fireEvent.click(screen.getByRole("button", { name: /Aprovar etapa/i }));
    fireEvent.click(screen.getByRole("button", { name: /Confirmar Aprovação/i }));

    // Atualizado exclusivamente para 4/4 (sem duplicar texto)
    expect(screen.getByText("4/4")).toBeInTheDocument();
    expect(screen.queryByText("3/4")).not.toBeInTheDocument();
    expect(screen.queryByText(/4 de 4/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Macro-etapa aprovada com sucesso/i)).toBeInTheDocument();

    // Clica em reiniciar demonstração
    const botaoReiniciar = screen.getByRole("button", { name: /Reiniciar demonstração/i });
    fireEvent.click(botaoReiniciar);

    // Restaura para indicador único 3/4
    expect(screen.getByText("3/4")).toBeInTheDocument();
    expect(screen.queryByText("4/4")).not.toBeInTheDocument();
    expect(screen.queryByText(/3 de 4/i)).not.toBeInTheDocument();
  });

  it("garante ausência de requisições de rede externa e de persistência no storage", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const localSetSpy = vi.spyOn(Storage.prototype, "setItem");

    renderDemoApp("/projetos/portal-engenharia/demo");

    // Interações completas
    fireEvent.click(screen.getByRole("button", { name: /^Em andamento$/i }));
    fireEvent.change(screen.getByPlaceholderText(/Buscar por nome/i), { target: { value: "Buritis" } });
    fireEvent.click(screen.getByRole("button", { name: /Reiniciar demonstração/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(localSetSpy).not.toHaveBeenCalled();
  });

  it("garante que '500 usuários' não aparece no conteúdo público de projetos ou perfil", () => {
    const projetosTexto = JSON.stringify(projetos);
    const perfilTexto = JSON.stringify(perfil);

    expect(projetosTexto).not.toMatch(/500\s*usu[aá]rios/i);
    expect(perfilTexto).not.toMatch(/500\s*usu[aá]rios/i);
    expect(projetosTexto).not.toContain("~500");
    expect(perfilTexto).not.toContain("~500");
  });
});
