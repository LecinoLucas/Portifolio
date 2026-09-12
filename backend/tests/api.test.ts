import { describe, it, expect } from "vitest";
import request from "supertest";
import { criarApp } from "../src/app.js";
import { EmailServicoMock } from "../src/services/email.servico.js";
import { ContatoRepositorioMemoria } from "../src/repositories/contato.repositorio.js";
import { ProjetoRepositorioMemoria } from "../src/repositories/projeto.repositorio.js";

// Garantia de isolamento estrito: testes utilizam repositórios em memória e mock de e-mail sem poluir o banco
const app = criarApp({
  projetoRepo: new ProjetoRepositorioMemoria(),
  contatoRepo: new ContatoRepositorioMemoria(),
  emailServico: new EmailServicoMock(),
});

describe("Endpoints da API Backend (LES v2.2.0)", () => {
  describe("GET /health", () => {
    it("deve retornar 200 com status 'up' e dados de ambiente", async () => {
      const res = await request(app).get("/health");

      expect(res.status).toBe(200);
      expect(res.body.status).toBe("up");
      expect(res.body.servico).toBe("portfolio-backend-api");
      expect(res.body.versao).toBe("1.0.0");
      expect(typeof res.body.uptimeSegundos).toBe("number");
    });
  });

  describe("GET /api/v1/projects", () => {
    it("deve retornar lista de projetos no contrato canônico", async () => {
      const res = await request(app).get("/api/v1/projects");

      expect(res.status).toBe(200);
      expect(res.body.sucesso).toBe(true);
      expect(Array.isArray(res.body.dados)).toBe(true);
      expect(res.body.dados.length).toBeGreaterThan(0);

      const primeiro = res.body.dados[0];
      expect(primeiro.slug).toBeTruthy();
      expect(primeiro.titulo).toBeTruthy();
      expect(primeiro.detalhe).toBeDefined();
    });

    it("deve filtrar por focoPerfil 'analista'", async () => {
      const res = await request(app).get("/api/v1/projects?focoPerfil=analista");

      expect(res.status).toBe(200);
      expect(res.body.sucesso).toBe(true);
      for (const proj of res.body.dados) {
        expect(["analista", "ambos"]).toContain(proj.focoPerfil);
      }
    });

    it("deve filtrar por busca textual", async () => {
      const res = await request(app).get("/api/v1/projects?busca=Itaú");

      expect(res.status).toBe(200);
      expect(res.body.dados.length).toBeGreaterThan(0);
      expect(res.body.dados[0].slug).toBe("conciliacao-bancaria-itau");
    });
  });

  describe("GET /api/v1/projects/:slug", () => {
    it("deve retornar detalhes do estudo de caso para slug válido", async () => {
      const res = await request(app).get("/api/v1/projects/portal-engenharia");

      expect(res.status).toBe(200);
      expect(res.body.sucesso).toBe(true);
      expect(res.body.dados.slug).toBe("portal-engenharia");
      expect(res.body.dados.detalhe.contexto).toBeTruthy();
      expect(res.body.dados.detalhe.solucao).toBeTruthy();
      expect(res.body.dados.detalhe.desafios.length).toBeGreaterThan(0);
    });

    it("deve retornar 404 canônico para slug inexistente", async () => {
      const res = await request(app).get("/api/v1/projects/slug-que-nao-existe");

      expect(res.status).toBe(404);
      expect(res.body.sucesso).toBe(false);
      expect(res.body.codigo).toBe("PROJETO_NAO_ENCONTRADO");
      expect(res.body.correlationId).toBeTruthy();
    });
  });

  describe("POST /api/v1/contact", () => {
    it("deve aceitar mensagem válida, sanitizar entrada, enviar notificação e retornar 201", async () => {
      const emailMock = new EmailServicoMock();
      const customApp = criarApp({
        projetoRepo: new ProjetoRepositorioMemoria(),
        contatoRepo: new ContatoRepositorioMemoria(),
        emailServico: emailMock,
      });

      const payload = {
        nome: "Recrutador <b>Tech</b>",
        email: "recrutador@empresa.com",
        assunto: "Oportunidade Analista / Full Stack",
        mensagem: "Olá Lecino, vimos seu portfólio e seus projetos com Protheus e React. Gostaríamos de conversar!",
      };

      const res = await request(customApp).post("/api/v1/contact").send(payload);

      expect(res.status).toBe(201);
      expect(res.body.sucesso).toBe(true);
      expect(res.body.dados.id).toBeTruthy();
      expect(res.body.dados.nome).toBe("Recrutador Tech"); // tags HTML sanitizadas
      expect(res.body.dados.email).toBe("recrutador@empresa.com");

      // Verifica envio para o Mailpit / Mock
      expect(emailMock.emailsEnviados.length).toBe(1);
      expect(emailMock.emailsEnviados[0].assunto).toBe("Oportunidade Analista / Full Stack");
    });

    it("deve salvar a mensagem e retornar 201 mesmo se o envio de e-mail falhar", async () => {
      const emailComFalha = {
        async enviarNotificacaoContato() {
          throw new Error("SMTP_CONNECTION_REFUSED");
        },
      };

      const customApp = criarApp({
        projetoRepo: new ProjetoRepositorioMemoria(),
        contatoRepo: new ContatoRepositorioMemoria(),
        emailServico: emailComFalha,
      });

      const payload = {
        nome: "Gestor de TI",
        email: "gestor@corporativo.com",
        mensagem: "Gostaria de agendar uma reunião técnica sobre sistemas corporativos.",
      };

      const res = await request(customApp).post("/api/v1/contact").send(payload);

      expect(res.status).toBe(201);
      expect(res.body.sucesso).toBe(true);
      expect(res.body.dados.id).toBeTruthy();
    });

    it("deve rejeitar e classificar como spam caso o honeypot seja preenchido", async () => {
      const payload = {
        nome: "Spam Bot",
        email: "bot@spam.com",
        mensagem: "Compre produtos agora mesmo com desconto imperdível!",
        honeypot: "http://link-malicioso.com",
      };

      const res = await request(app).post("/api/v1/contact").send(payload);

      expect(res.status).toBe(400);
      expect(res.body.sucesso).toBe(false);
      expect(res.body.codigo).toBe("SPAM_DETECTADO");
    });

    it("deve retornar 400 DADOS_INVALIDOS para payload incompleto", async () => {
      const payload = {
        nome: "A", // muito curto
        email: "email-invalido",
      };

      const res = await request(app).post("/api/v1/contact").send(payload);

      expect(res.status).toBe(400);
      expect(res.body.sucesso).toBe(false);
      expect(res.body.codigo).toBe("DADOS_INVALIDOS");
      expect(Array.isArray(res.body.detalhes)).toBe(true);
    });

    it("deve incluir header X-Correlation-Id na resposta", async () => {
      const res = await request(app).get("/health");
      expect(res.headers["x-correlation-id"]).toBeTruthy();
    });
  });
});
