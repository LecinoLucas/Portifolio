import { describe, expect, it } from "vitest";
import { projetos, projetoPorSlug, projetosDestaque } from "@/data/projetos";
import { carreira, formatarMeses, resumoExperiencia, totalMesesTI } from "@/data/experiencias";
import { formacao } from "@/data/formacao";
import { tecnologias } from "@/data/tecnologias";

describe("dados de projetos", () => {
  it("todo projeto tem os campos essenciais preenchidos", () => {
    for (const projeto of projetos) {
      expect(projeto.slug, "slug").toBeTruthy();
      expect(projeto.titulo, `titulo de ${projeto.slug}`).toBeTruthy();
      expect(projeto.resumo.length, `resumo de ${projeto.slug}`).toBeGreaterThan(20);
      expect(projeto.stack.length, `stack de ${projeto.slug}`).toBeGreaterThan(0);
    }
  });

  it("todo projeto tem o detalhamento completo (contrato do drawer)", () => {
    for (const { slug, detalhe } of projetos) {
      expect(detalhe.contexto, `contexto de ${slug}`).toBeTruthy();
      expect(detalhe.problema, `problema de ${slug}`).toBeTruthy();
      expect(detalhe.participacao, `participacao de ${slug}`).toBeTruthy();
      expect(detalhe.solucao, `solucao de ${slug}`).toBeTruthy();
      expect(detalhe.arquitetura, `arquitetura de ${slug}`).toBeTruthy();
      expect(detalhe.resultado, `resultado de ${slug}`).toBeTruthy();
      expect(detalhe.desafios.length, `desafios de ${slug}`).toBeGreaterThan(0);
    }
  });

  it("não há slugs duplicados", () => {
    const slugs = projetos.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("projetoPorSlug resolve e projetosDestaque é subconjunto", () => {
    expect(projetoPorSlug("les")?.titulo).toContain("Engineering Standard");
    expect(projetoPorSlug("inexistente")).toBeUndefined();
    expect(projetosDestaque.every((p) => p.destaque)).toBe(true);
  });
});

describe("situação e demonstrações", () => {
  it("ImportNFe está em produção e o Portal RH está entregue, ambos com demonstração", () => {
    expect(projetoPorSlug("importnfe")).toMatchObject({ situacao: "producao", demo: "importnfe" });
    expect(projetoPorSlug("portal-rh")).toMatchObject({ situacao: "entregue", demo: "rh" });
  });

  it("não cita o nome de clientes nem regras de acréscimo de preço", () => {
    const texto = JSON.stringify(projetos).toLowerCase();
    expect(texto).not.toContain("bc distribuidora");
    expect(texto).not.toContain("acréscimo");
  });
});

describe("dados de apoio", () => {
  it("cada etapa tem destaques, ferramentas e duração", () => {
    expect(carreira.length).toBeGreaterThan(0);
    for (const etapa of carreira) {
      expect(etapa.destaques.length, etapa.id).toBeGreaterThan(0);
      expect(etapa.ferramentas.length, etapa.id).toBeGreaterThan(0);
      expect(etapa.duracao, etapa.id).toBeTruthy();
    }
  });

  it("a duração vem das datas e a soma de TI dá 4 anos e 2 meses (Pioneira não conta)", () => {
    expect(formatarMeses(28)).toBe("2 anos e 4 meses");
    expect(formatarMeses(7)).toBe("7 meses");
    expect(formatarMeses(15)).toBe("1 ano e 3 meses");
    expect(totalMesesTI).toBe(50);
    expect(formatarMeses(totalMesesTI)).toBe("4 anos e 2 meses");
    expect(resumoExperiencia.anosTI).toBe("4+");
    expect(carreira.find((e) => e.id === "pioneira")?.ti).toBeFalsy();
  });

  it("a síntese 'levei' não é exibida enquanto o autor não aprovar", () => {
    for (const etapa of carreira) expect(etapa.levei, etapa.id).toBeUndefined();
  });

  it("a carreira termina na Rede Marajó, com os sistemas entregues em paralelo (etapa de desenvolvimento desativada)", () => {
    const ultima = carreira[carreira.length - 1];
    expect(ultima.id).toBe("marajo");
    expect(ultima.organizacao).toContain("Rede Marajó");
    expect(ultima.sistemas?.length ?? 0).toBeGreaterThan(0);
    expect(carreira.some((e) => e.id === "desenvolvimento")).toBe(false);
  });

  it("etapas têm período com ano ou marcador de hoje (sem placeholders)", () => {
    for (const etapa of carreira) {
      expect(etapa.quando, etapa.id).toMatch(/\d{4}|Hoje/);
      expect(/(placeholder|todo|ambiente corporativo)/i.test(etapa.quando + etapa.organizacao)).toBe(false);
    }
  });

  it("formação está preenchida", () => {
    expect(formacao.length).toBeGreaterThan(0);
    for (const f of formacao) {
      expect(f.curso && f.instituicao && f.periodo && f.status).toBeTruthy();
    }
  });

  it("tecnologias têm domínio do dia a dia e evolução, sem nível exagerado", () => {
    expect(tecnologias.diaADia.length).toBeGreaterThan(0);
    expect(tecnologias.emEvolucao.length).toBeGreaterThan(0);
    const nomes = tecnologias.diaADia.map((t) => t.nome);
    for (const base of ["Node.js", "React", "JavaScript"]) expect(nomes).toContain(base);
    // não deve listar como domínio o que está em evolução
    for (const nome of tecnologias.emEvolucao) expect(nomes).not.toContain(nome);
  });
});
