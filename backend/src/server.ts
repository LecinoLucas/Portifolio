import { criarApp } from "./app.js";
import { configAmbiente } from "./config/ambiente.js";

const app = criarApp();

app.listen(configAmbiente.PORTA, () => {
  console.log(`
🚀 API do Portfólio (LES v2.2.0) operacional!
📡 Ambiente: ${configAmbiente.NODE_ENV}
🌐 Porta: ${configAmbiente.PORTA}
🔗 Health check: http://localhost:${configAmbiente.PORTA}/health
📋 Projetos: http://localhost:${configAmbiente.PORTA}/api/v1/projects
📬 Contato: POST http://localhost:${configAmbiente.PORTA}/api/v1/contact
  `);
});
