import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "@/app/App";
import { projetoPorSlug, projetos } from "@/data/projetos";

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
    for (const id of ["inicio", "sobre", "experiencia", "projetos", "les", "tecnologias", "contato"]) {
      expect(container.querySelector(`#${id}`), id).not.toBeNull();
    }
  });

  it("a aba Investigações está desativada, mas links antigos levam à Experiência", () => {
    window.history.replaceState(null, "", "/#investigacao");
    const { container } = render(<App />);
    expect(container.querySelector('[data-visao="investigacao"]')).toBeNull();
    expect(container.querySelector<HTMLElement>('[data-visao="experiencia"]')?.hidden).toBe(false);
  });

  it("não cita P12 em lugar nenhum", () => {
    const { container } = render(<App />);
    expect(container.textContent).not.toMatch(/\bP12\b/);
  });

  it("tem barra de navegação fixa com um link para cada seção", () => {
    render(<App />);
    const barra = screen.getByRole("navigation", { name: "Seções" });
    expect(barra.querySelectorAll('a[href^="#"]').length).toBe(7);
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

  it("Sobre mim é curto, traz a regra de negócio e fecha com o trabalho em equipe", () => {
    const { container } = render(<App />);
    const sobre = container.querySelector("#sobre");
    const rotulos = Array.from(sobre?.querySelectorAll("h3") ?? []).map((h) => h.textContent);
    expect(rotulos).toEqual(["como eu penso", "meu caminho", "além do trabalho", "em equipe", "em resumo"]);
    expect(sobre?.textContent).toContain("Regra de negócio primeiro");
    expect(sobre?.textContent).toContain("Regra de negócio primeiro");
  });

  it("não fala em sintaxe no Sobre mim", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#sobre")?.textContent).not.toMatch(/sintaxe/i);
  });

  it("não usa mais as duas barras (//) como marcador de rótulo", () => {
    const { container } = render(<App />);
    expect(container.textContent).not.toMatch(/\/\/ [a-zà-ú]/i);
  });

  it("o Início apresenta formação, o caminho do suporte aos sistemas e o que busca", () => {
    const { container } = render(<App />);
    const inicio = container.querySelector("#inicio")?.textContent ?? "";
    expect(inicio).toContain("Entendo a regra de negócio. Integro sistemas.");
    expect(inicio).toContain("PUC Goiás");
    expect(inicio).toContain("Mais de 4 anos em TI");
    expect(inicio).toContain("comecei no suporte técnico");
    for (const palavra of ["Determinado", "Consistente", "Resiliente"]) expect(inicio).toContain(palavra);
    expect(inicio).toContain("1% melhor a cada dia.");
    expect(inicio).not.toMatch(/em transição/i);
    expect(inicio).toContain("Suporte Especializado que integra sistemas");
    expect(inicio).toContain("desenvolvo sistemas em produção");
    expect(inicio).toContain("Também desenvolvo, em produção");
  });

  it("o Início mostra a faixa de provas com números reais", () => {
    const { container } = render(<App />);
    const faixa = container.querySelector("#inicio ul[aria-label='Números do meu trabalho']")?.textContent ?? "";
    expect(faixa).toContain("anos de TI");
    expect(faixa).toContain("500+");
    expect(faixa).toContain("53");
    expect(faixa).toContain("camadas de teste");
  });

  it("o Sobre mim fala da pessoa (causa raiz, usuário, família) e não repete os cartões do Início", () => {
    const { container } = render(<App />);
    const sobre = container.querySelector("#sobre")?.textContent ?? "";
    expect(sobre).toContain("Causa raiz");
    expect(sobre).toContain("Escutar o usuário");
    expect(sobre).toContain("pai de família");
    expect(sobre).not.toContain("Resiliente");
    expect(sobre).not.toMatch(/1% por dia/i);
  });

  it("o Início não usa etiqueta de nível (júnior / 6 meses)", () => {
    const { container } = render(<App />);
    const inicio = container.querySelector("#inicio")?.textContent ?? "";
    expect(inicio).not.toMatch(/júnior/i);
    expect(inicio).not.toMatch(/6 meses/);
  });

  it("o sumário 3D do Início leva às abas", () => {
    const { container } = render(<App />);
    const sumario = screen.getByRole("navigation", { name: "Sumário do portfólio" });
    expect(sumario.querySelectorAll('a[href^="#"]').length).toBe(6);
    fireEvent.click(sumario.querySelector('a[href="#experiencia"]') as HTMLElement);
    expect(container.querySelector<HTMLElement>('[data-visao="experiencia"]')?.hidden).toBe(false);
  });

  it("a Experiência diz que a parametrização bancária (CNAB, DDA, boletos) foi feita por mim", () => {
    const { container } = render(<App />);
    const texto = container.querySelector("#experiencia")?.textContent ?? "";
    expect(texto).toContain("Parametrização bancária no Protheus, feita por mim");
    expect(texto).toContain("CNAB de pagamento e de recebimento");
    expect(texto).toMatch(/\bDDA\b/);
  });

  it("não usa N3 em lugar nenhum e fala em N1/N2", () => {
    const { container } = render(<App />);
    const texto = container.textContent ?? "";
    expect(texto).not.toMatch(/\bN3\b/);
    expect(texto).toContain("N1/N2");
  });

  it("BankingProtheus é a renovação automática de certificados do Itaú, não conciliação", () => {
    const { container } = render(<App />);
    const projetos = container.querySelector("#projetos")?.textContent ?? "";
    expect(projetos).toContain("renova automaticamente os certificados do Itaú");
    expect(projetos).not.toMatch(/concilia/i);
  });

  it("Portal de Engenharia está em produção na Rede Marajó", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#projetos")?.textContent).toContain("Em produção na Rede Marajó");
  });

  it("BankingProtheus consta em produção, sem citar a Rede Marajó no próprio projeto", () => {
    const banking = projetoPorSlug("bankingprotheus");
    expect(banking?.situacao).toBe("producao");
    const texto = JSON.stringify(banking).toLowerCase();
    expect(texto).not.toContain("marajó");
    expect(texto).toContain("53 filiais");
  });

  it("a Experiência diz que o BankingProtheus foi feito para a Rede Marajó", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#experiencia")?.textContent ?? "").toMatch(/feito para a Rede Marajó/i);
  });

  it("Experiência é uma trilha clicável que termina na Rede Marajó, sem etapa Hoje/Desenvolvimento", () => {
    const { container } = render(<App />);
    const experiencia = container.querySelector("#experiencia") as HTMLElement;
    const abas = Array.from(experiencia.querySelectorAll('[role="tab"]'));
    expect(abas.length).toBe(4);
    expect(abas[abas.length - 1].textContent).toMatch(/Marajó/);
    expect(experiencia.textContent).not.toContain("~20");
    expect(experiencia.textContent).not.toMatch(/chamados por dia/i);
    expect(experiencia.textContent).toContain("4+ anos");
    expect(experiencia.textContent).toContain("1 ano e 3 meses");
    expect(experiencia.textContent).not.toMatch(/o que levei dali|Em transição para o desenvolvimento|Hoje/);
    fireEvent.click(abas[0]);
    expect(experiencia.textContent).toContain("Operador Técnico de Suporte");
  });

  it("a etapa da Marajó destaca os dois sistemas entregues em paralelo, sem citar horas extras", () => {
    const { container } = render(<App />);
    const experiencia = container.querySelector("#experiencia")?.textContent ?? "";
    expect(experiencia).toContain("entregues em paralelo à sustentação");
    expect(experiencia).toContain("Portal de Engenharia");
    expect(experiencia).toContain("BankingProtheus");
    expect(experiencia).not.toMatch(/horas extras|fins? de semana|finais de semana/i);
  });

  it("Projetos abre com o Portal de Engenharia como principal, 500+ usuários e as camadas de teste", () => {
    const { container } = render(<App />);
    expect(projetos[0].slug).toBe("portal-engenharia");
    expect(projetos[0].principal).toBe(true);
    const aba = container.querySelector("#projetos")?.textContent ?? "";
    expect(aba).toContain("Projeto principal");
    expect(aba).toContain("500+");
    for (const nome of ["Vitest", "Playwright", "k6", "Stryker"]) {
      expect(aba, nome).toContain(nome);
    }
    expect(projetos.filter((p) => p.principal).length).toBe(1);
  });

  it("Tecnologias destaca Node, React, JavaScript, os testes e não cita arquitetura do Protheus", () => {
    const { container } = render(<App />);
    const aba = container.querySelector("#tecnologias")?.textContent ?? "";
    for (const nome of ["Node.js", "React", "JavaScript", "Vitest", "Playwright", "k6", "Stryker"]) {
      expect(aba, nome).toContain(nome);
    }
    expect(aba).toContain("Ainda estou evoluindo");
    expect(aba).toContain("reviso e entendo o que entrego");
    expect(aba).not.toMatch(/pleno|avançado|expert/i);
    expect(aba).not.toMatch(/arquitetura (do|de) protheus/i);
  });

  it("LES tem o padrão, três princípios e os links; Contato tem o e-mail como principal", () => {
    const { container } = render(<App />);
    const les = container.querySelector('[data-visao="les"]')?.textContent ?? "";
    expect(les).toContain("Meu padrão de engenharia");
    const cards = Array.from(container.querySelectorAll("#principios h3")).filter((h) => !/princípios/i.test(h.textContent ?? ""));
    expect(cards.length).toBe(3);
    expect(les).toContain("Ver no GitHub");
    const contato = container.querySelector("#contato");
    expect(contato?.querySelector('a[href^="mailto:"]')).not.toBeNull();
    expect(contato?.textContent).toContain("Suporte Especializado (N1/N2)");
  });

  it("tem link de pular para o conteúdo (acessibilidade)", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /pular para o conteúdo/i }),
    ).toBeInTheDocument();
  });

  it("mostra os títulos dos projetos em destaque", () => {
    render(<App />);
    expect(screen.getAllByText("BankingProtheus").length).toBeGreaterThan(0);
    // Aparece no card e no cabeçalho da seção LES — basta existir.
    expect(
      screen.getAllByText(/Lecino Lucas Engineering Standard \(LES\)/).length,
    ).toBeGreaterThan(0);
  });
});
