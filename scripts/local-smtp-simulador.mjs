// scripts/local-smtp-simulador.mjs
// Simulador SMTP local (porta 1025) e interface Web (porta 8025) em Node.js puro para desenvolvimento e testes locais sem dependência de Docker.
// Caso possua Docker instalado, a alternativa com o Mailpit oficial está documentada e disponível via docker-compose.yml.
// Permite visualizar todas as notificações de e-mail disparadas pelo formulário de contato.

import net from "node:net";
import http from "node:http";

const SMTP_PORT = 1025;
const WEB_PORT = 8025;

const mensagens = [];

// 1. Servidor SMTP local simulado (porta 1025)
const smtpServer = net.createServer((socket) => {
  socket.setEncoding("utf8");
  socket.on("error", () => {
    // Ignora conexões fechadas abruptamente pelo cliente
  });
  socket.write("220 localhost Simulador-SMTP-Node ready\r\n");

  let estado = "INIT";
  let bufferData = "";
  let remetente = "";
  let destinatario = "";

  socket.on("data", (chunk) => {
    if (estado === "DATA") {
      bufferData += chunk;
      if (bufferData.includes("\r\n.\r\n")) {
        const corpoCompleto = bufferData.substring(0, bufferData.indexOf("\r\n.\r\n"));

        // Extrai assunto simplificado
        const matchAssunto = corpoCompleto.match(/^Subject:\s*(.*)$/im);
        const assunto = matchAssunto ? matchAssunto[1].trim() : "Sem Assunto";

        const matchDe = corpoCompleto.match(/^From:\s*(.*)$/im);
        const de = matchDe ? matchDe[1].trim() : remetente;

        const matchPara = corpoCompleto.match(/^To:\s*(.*)$/im);
        const para = matchPara ? matchPara[1].trim() : destinatario;

        const novaMensagem = {
          id: Buffer.from(Date.now().toString()).toString("base64"),
          criadoEm: new Date().toLocaleTimeString("pt-BR"),
          de,
          para,
          assunto,
          corpo: corpoCompleto,
        };

        mensagens.unshift(novaMensagem);
        console.log(`[Simulador SMTP Local] 📩 Novo e-mail recebido: "${assunto}"`);

        socket.write("250 2.0.0 OK: message queued\r\n");
        estado = "INIT";
        bufferData = "";
      }
      return;
    }

    const linha = chunk.trim();
    const cmd = linha.split(" ")[0].toUpperCase();

    if (cmd === "EHLO" || cmd === "HELO") {
      socket.write("250-localhost\r\n250-SIZE 10485760\r\n250 OK\r\n");
    } else if (cmd === "MAIL") {
      remetente = linha.replace(/^MAIL FROM:\s*/i, "").replace(/[<>]/g, "");
      socket.write("250 2.1.0 Sender OK\r\n");
    } else if (cmd === "RCPT") {
      destinatario = linha.replace(/^RCPT TO:\s*/i, "").replace(/[<>]/g, "");
      socket.write("250 2.1.5 Recipient OK\r\n");
    } else if (cmd === "DATA") {
      estado = "DATA";
      bufferData = "";
      socket.write("354 Start mail input; end with <CRLF>.<CRLF>\r\n");
    } else if (cmd === "QUIT") {
      socket.write("221 2.0.0 Bye\r\n");
      socket.end();
    } else if (cmd === "RSET") {
      estado = "INIT";
      bufferData = "";
      socket.write("250 OK\r\n");
    } else {
      socket.write("250 OK\r\n");
    }
  });
});

smtpServer.listen(SMTP_PORT, () => {
  console.log(`📫 Servidor do simulador SMTP local ouvindo em localhost:${SMTP_PORT}`);
});

// 2. Servidor Web de visualização dos e-mails (porta 8025)
const webServer = http.createServer((req, res) => {
  if (req.url === "/api/v1/messages") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(mensagens));
    return;
  }

  // Interface Web elegante para desenvolvimento local
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Simulador SMTP Local — Notificações de E-mail</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 20px; }
    .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #334155; padding-bottom: 15px; margin-bottom: 20px; }
    h1 { margin: 0; font-size: 20px; color: #38bdf8; }
    .status { font-size: 13px; color: #94a3b8; background: #1e293b; padding: 4px 12px; border-radius: 9999px; }
    .container { display: grid; grid-template-columns: 380px 1fr; gap: 20px; height: calc(100vh - 100px); }
    .list { background: #1e293b; border-radius: 8px; overflow-y: auto; border: 1px solid #334155; }
    .item { padding: 14px; border-bottom: 1px solid #334155; cursor: pointer; transition: background 0.15s; }
    .item:hover { background: #334155; }
    .item.active { background: #0284c7; }
    .item .subject { font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #fff; }
    .item .meta { font-size: 12px; color: #94a3b8; }
    .preview { background: #1e293b; border-radius: 8px; border: 1px solid #334155; padding: 20px; overflow-y: auto; }
    .empty { display: flex; align-items: center; justify-content: center; height: 100%; color: #64748b; font-size: 14px; }
    pre { white-space: pre-wrap; font-family: inherit; font-size: 13px; line-height: 1.6; background: #0f172a; padding: 16px; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>📬 Simulador SMTP Local — Caixa de Entrada de Desenvolvimento</h1>
    <div class="status">SMTP: localhost:1025 | Web: localhost:8025 (${mensagens.length} mensagens)</div>
  </div>
  <div class="container">
    <div class="list" id="lista">
      ${
        mensagens.length === 0
          ? '<div style="padding: 20px; text-align: center; color: #64748b;">Nenhum e-mail recebido ainda.<br><br>Envie uma mensagem pelo formulário de contato para testar!</div>'
          : mensagens
              .map(
                (m, idx) => `
        <div class="item" onclick="mostrar(${idx})">
          <div class="subject">${m.assunto}</div>
          <div class="meta">${m.de} • ${m.criadoEm}</div>
        </div>
      `,
              )
              .join("")
      }
    </div>
    <div class="preview" id="detalhe">
      <div class="empty">Selecione uma mensagem à esquerda para ler o conteúdo.</div>
    </div>
  </div>

  <script>
    const msgs = ${JSON.stringify(mensagens)};
    function mostrar(idx) {
      const m = msgs[idx];
      if (!m) return;
      document.getElementById('detalhe').innerHTML = \`
        <div style="border-bottom: 1px solid #334155; padding-bottom: 12px; margin-bottom: 16px;">
          <h2 style="margin: 0 0 8px 0; font-size: 18px; color: #38bdf8;">\${m.assunto}</h2>
          <div style="font-size: 13px; color: #94a3b8;">
            <strong>De:</strong> \${m.de}<br>
            <strong>Para:</strong> \${m.para}<br>
            <strong>Recebido às:</strong> \${m.criadoEm}
          </div>
        </div>
        <pre>\${m.corpo}</pre>
      \`;
    }
    // Auto-refresh a cada 3s para carregar novos e-mails sem recarregar a página
    setTimeout(() => { location.reload(); }, 3000);
  </script>
</body>
</html>`;

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

webServer.listen(WEB_PORT, () => {
  console.log(`🌐 Interface Web do simulador SMTP local rodando em http://localhost:${WEB_PORT}`);
});
