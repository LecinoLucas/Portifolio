import nodemailer, { type Transporter } from "nodemailer";
import { configAmbiente } from "../config/ambiente.js";

export interface DadosEmailContato {
  id: string;
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
  criadoEm: string;
}

export interface IEmailServico {
  enviarNotificacaoContato(dados: DadosEmailContato): Promise<boolean>;
}

export class EmailServico implements IEmailServico {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: configAmbiente.SMTP_HOST,
      port: configAmbiente.SMTP_PORT,
      secure: configAmbiente.SMTP_SECURE,
      ignoreTLS: !configAmbiente.SMTP_SECURE,
      auth:
        configAmbiente.SMTP_USER && configAmbiente.SMTP_PASS
          ? {
              user: configAmbiente.SMTP_USER,
              pass: configAmbiente.SMTP_PASS,
            }
          : undefined,
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async enviarNotificacaoContato(dados: DadosEmailContato): Promise<boolean> {
    try {
      const info = await this.transporter.sendMail({
        from: `"Portfólio Notificações" <notificacoes@portfolio.local>`,
        to: configAmbiente.EMAIL_DESTINO,
        replyTo: dados.email,
        subject: `[Contato Portfólio] ${dados.assunto}`,
        text: `
Nova mensagem recebida no Portfólio!

Remetente: ${dados.nome}
E-mail: ${dados.email}
Assunto: ${dados.assunto}
Data: ${dados.criadoEm}
ID: ${dados.id}

Mensagem:
${dados.mensagem}
        `.trim(),
        html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0f172a; color: #f8fafc; padding: 16px 24px;">
    <h2 style="margin: 0; font-size: 18px;">Nova Mensagem Recebida — Portfólio</h2>
    <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.8;">Lecino Lucas — Sistemas, Integrações e Desenvolvimento</p>
  </div>
  <div style="padding: 24px; color: #334155; line-height: 1.6;">
    <p style="margin-top: 0;"><strong>Remetente:</strong> ${dados.nome}</p>
    <p><strong>E-mail de Contato:</strong> <a href="mailto:${dados.email}">${dados.email}</a></p>
    <p><strong>Assunto:</strong> ${dados.assunto}</p>
    <p><strong>Data/Hora:</strong> ${dados.criadoEm}</p>
    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
    <h3 style="font-size: 14px; margin-bottom: 8px;">Conteúdo da Mensagem:</h3>
    <div style="background-color: #f1f5f9; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">${dados.mensagem}</div>
  </div>
  <div style="background-color: #f8fafc; padding: 12px 24px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
    ID da Mensagem: ${dados.id} | Notificação entregue via Mailpit (SMTP ${configAmbiente.SMTP_HOST}:${configAmbiente.SMTP_PORT})
  </div>
</div>
        `.trim(),
      });

      console.log(`[Email] Notificação despachada para Mailpit. MessageID=${info.messageId}`);
      return true;
    } catch (erro) {
      // Requisito 7: Não abortar a requisição nem perder a mensagem salva se o envio de e-mail falhar
      console.warn("[Email] Aviso: Não foi possível conectar ao servidor SMTP do Mailpit:", (erro as Error)?.message || erro);
      return false;
    }
  }
}

/** Implementação simulada para testes herméticos */
export class EmailServicoMock implements IEmailServico {
  public emailsEnviados: DadosEmailContato[] = [];

  async enviarNotificacaoContato(dados: DadosEmailContato): Promise<boolean> {
    this.emailsEnviados.push(dados);
    return true;
  }
}
