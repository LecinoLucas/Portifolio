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
      expect(detalhe.resultado, `resultado de ${slug}`).toBeTruthy();
    }
  });

  it("os estudos de caso principais trazem decisões de engenharia", () => {
    for (const slug of ["portal-engenharia", "portal-rh", "alphamen-barbearia", "importnfe", "bankingprotheus"]) {
      const decisoes = projetoPorSlug(slug)?.detalhe.decisoes ?? [];
      expect(decisoes.length, `decisões de ${slug}`).toBeGreaterThan(1);
    }
  });

  it("os seis estudos de caso pedidos existem, com o estado honesto de cada um", () => {
    expect(projetoPorSlug("portal-engenharia")?.situacao).toBe("producao");
    expect(projetoPorSlug("importnfe")?.situacao).toBe("producao");
    expect(projetoPorSlug("bankingprotheus")?.situacao).toBe("producao");
    expect(projetoPorSlug("portal-rh")?.situacao).toBe("entregue");
    // Barbearia e Clínica são freelances em uso real; o Portal Fiscal está pronto, mas ainda sem uso.
    expect(projetoPorSlug("alphamen-barbearia")?.situacao).toBe("producao");
    expect(projetoPorSlug("clinica")?.situacao).toBe("producao");
    expect(projetoPorSlug("portal-fiscal")?.situacao).toBe("construido");
  });

  it("a Barbearia só cita o que o código do backend comprova (WhatsApp e Google Agenda existem; NestJS e Instagram não)", () => {
    const texto = JSON.stringify(projetoPorSlug("alphamen-barbearia")).toLowerCase();
    for (const termo of ["nestjs", "instagram"]) expect(texto).not.toContain(termo);
    for (const termo of ["whatsapp", "google agenda", "utc"]) expect(texto).toContain(termo);
  });

  it("os freelances ficam marcados e a clínica não cita dado clínico real", () => {
    for (const slug of ["erp-loja-colchoes", "clinica", "alphamen-barbearia", "importnfe"]) expect(projetoPorSlug(slug)?.freelance).toBe(true);
    expect(projetoPorSlug("clinica")?.demo).toBe("clinica");
  });

  it("o Portal de RH não afirma envio real ao Protheus (execução em homologação)", () => {
    const texto = JSON.stringify(projetoPorSlug("portal-rh")).toLowerCase();
    expect(texto).toContain("homologação");
    expect(texto).not.toContain("envio dos dados ao protheus");
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

  it("tecnologias estão em categorias e cada competência tem um estado", () => {
    const titulos = tecnologias.grupos.map((g) => g.titulo);
    for (const esperado of [
      "Backend e APIs",
      "Banco de dados e arquitetura",
      "Cloud e DevOps",
      "Inteligência artificial e automação",
      "Integrações empresariais",
      "Qualidade e testes",
      "Frontend",
    ]) expect(titulos).toContain(esperado);
    const todas = [...tecnologias.grupos.flatMap((g) => g.itens), ...tecnologias.aplicados];
    for (const item of todas) expect(["profissional", "entregue", "desenvolvimento", "estudo"], item.nome).toContain(item.estado);
  });

  it("competência em estudo não tem projeto; o resto diz onde foi usada; sem nomes repetidos", () => {
    const todas = [...tecnologias.grupos.flatMap((g) => g.itens), ...tecnologias.aplicados];
    for (const item of todas) {
      if (item.estado === "estudo") expect(item.onde, item.nome).toBeUndefined();
      else expect(item.onde, item.nome).toBeTruthy();
    }
    const nomes = todas.map((t) => t.nome);
    expect(new Set(nomes).size).toBe(nomes.length);
  });

  it("o que o código não comprova não aparece como uso profissional por engano", () => {
    const todas = [...tecnologias.grupos.flatMap((g) => g.itens), ...tecnologias.aplicados];
    const estado = (nome: string) => todas.find((t) => t.nome === nome)?.estado;
    // sem projeto conhecido: estudo
    for (const nome of ["BullMQ", "Cloudflare", "Open Finance", "BrasilAPI", "Instagram", "Jest"]) expect(estado(nome), nome).toBe("estudo");
    // ExecAuto está em contrato, dry-run e homologação: nunca profissional nem entregue
    expect(estado("ExecAuto")).toBe("desenvolvimento");
    // base profissional de verdade
    for (const nome of ["TOTVS Protheus", "SQL", "Node.js", "React"]) expect(estado(nome), nome).toBe("profissional");
  });

  it("a página de tecnologias não repete 'com apoio de IA' nos itens", () => {
    const todas = [...tecnologias.grupos.flatMap((g) => g.itens), ...tecnologias.aplicados];
    for (const item of todas) expect(`${item.nome} ${item.onde ?? ""}`.toLowerCase(), item.nome).not.toContain("apoio de ia");
  });
});
