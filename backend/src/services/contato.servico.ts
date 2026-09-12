import crypto from "node:crypto";
import type { IContatoRepositorio } from "../repositories/contato.repositorio.interface.js";
import type { CriarContatoDTO, ContatoRegistrado } from "@portfolio/contracts";
import type { IEmailServico } from "./email.servico.js";
import { AppErro } from "../middlewares/erro-global.middleware.js";

export class ContatoServico {
  constructor(
    private readonly contatoRepositorio: IContatoRepositorio,
    private readonly emailServico?: IEmailServico,
  ) {}

  /**
   * Remove tags HTML e caracteres maliciosos para evitar injeções ou ataques XSS
   */
  private sanitizarTexto(texto: string): string {
    return texto
      .replace(/<[^>]*>?/gm, "") // remove tags HTML
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .trim();
  }

  /**
   * Gera hash unidirecional do IP para fins de auditoria sem armazenar dados pessoais diretos (LGPD)
   */
  private anonimizarIp(ip: string): string {
    return crypto.createHash("sha256").update(ip).digest("hex").substring(0, 16);
  }

  async processarMensagem(
    dados: CriarContatoDTO,
    ipOrigem: string,
  ): Promise<ContatoRegistrado> {
    // 1. Proteção Anti-Spam (Honeypot)
    if (dados.honeypot && dados.honeypot.trim().length > 0) {
      throw new AppErro(
        "SPAM_DETECTADO",
        "A requisição foi identificada como spam automatizado.",
        400,
      );
    }

    // 2. Sanitização de entradas
    const nomeSanitizado = this.sanitizarTexto(dados.nome);
    const assuntoSanitizado = this.sanitizarTexto(dados.assunto || "Contato via Portfólio");
    const mensagemSanitizada = this.sanitizarTexto(dados.mensagem);

    if (mensagemSanitizada.length < 10) {
      throw new AppErro(
        "MENSAGEM_MUITO_CURTA",
        "O conteúdo da mensagem é muito curto ou continha apenas caracteres não permitidos.",
        400,
      );
    }

    const ipHash = this.anonimizarIp(ipOrigem);

    // 3. Persistência isolada
    const salvo = await this.contatoRepositorio.salvar({
      nome: nomeSanitizado,
      email: dados.email.trim().toLowerCase(),
      assunto: assuntoSanitizado,
      mensagem: mensagemSanitizada,
      ipHash,
    });

    // 4. Log seguro sem dados sensíveis (PII)
    console.log(
      `[Contato] Mensagem registrada com sucesso. ID=${salvo.id}, Assunto="${salvo.assunto}", Tamanho=${salvo.mensagem.length} chars.`,
    );

    const resultado: ContatoRegistrado = {
      id: salvo.id,
      nome: salvo.nome,
      email: salvo.email,
      assunto: salvo.assunto,
      mensagem: salvo.mensagem,
      criadoEm: salvo.criadoEm.toISOString(),
    };

    // 5. Envio de notificação para o Mailpit (resiliente: falha no e-mail não perde o registro)
    if (this.emailServico) {
      try {
        await this.emailServico.enviarNotificacaoContato(resultado);
      } catch (err) {
        console.warn("[Contato] Falha no disparo de notificação por e-mail, mas a mensagem foi salva com sucesso.");
      }
    }

    return resultado;
  }
}
