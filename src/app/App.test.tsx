import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "@/app/App";
import { projetoPorSlug } from "@/data/projetos";

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

  it("Sobre mim é curto, traz a regra de negócio e fecha com o trabalho em equipe", () => {
    const { container } = render(<App />);
    const sobre = container.querySelector("#sobre");
    const rotulos = Array.from(sobre?.querySelectorAll("h3") ?? []).map((h) => h.textContent);
    expect(rotulos).toEqual(["como eu penso", "além do trabalho", "em equipe", "em resumo"]);
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

  it("o Início apresenta formação, transição para o desenvolvimento e o que busca", () => {
    const { container } = render(<App />);
    const inicio = container.querySelector("#inicio")?.textContent ?? "";
    expect(inicio).toContain("Entendo a regra de negócio. Integro sistemas.");
    expect(inicio).toContain("PUC Goiás");
    expect(inicio).toContain("em transição para o desenvolvimento");
    expect(inicio).toContain("suporte especializado e integração de sistemas e APIs");
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
    expect(sumario.querySelectorAll('a[href^="#"]').length).toBe(7);
    fireEvent.click(sumario.querySelector('a[href="#experiencia"]') as HTMLElement);
    expect(container.querySelector<HTMLElement>('[data-visao="experiencia"]')?.hidden).toBe(false);
  });

  it("não cita DDA e descreve o CNAB de pagamento e de recebimento", () => {
    const { container } = render(<App />);
    const texto = container.textContent ?? "";
    expect(texto).not.toMatch(/\bDDA\b/);
    expect(texto).toContain("CNAB de pagamento");
    expect(texto).toContain("CNAB de recebimento");
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

  it("a Experiência diz que o BankingProtheus foi feito para a Rede Marajó e que a Clínica está em construção", () => {
    const { container } = render(<App />);
    const experiencia = container.querySelector("#experiencia")?.textContent ?? "";
    expect(experiencia).toContain("feito para a Rede Marajó");
    const abas = Array.from(container.querySelectorAll('#experiencia [role="tab"]'));
    fireEvent.click(abas[abas.length - 1]);
    const dev = container.querySelector("#experiencia")?.textContent ?? "";
    expect(dev).toMatch(/Clínica[\s\S]*Em construção/);
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
