// Troca o domínio local/placeholder por um domínio real em todos os locais de SEO no momento do deploy.
// Uso:  node scripts/set-site-url.mjs https://dominio-confirmado.com
// Sem dependências externas — apenas Node.js nativo.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ALVOS = ["frontend/index.html", "frontend/public/robots.txt", "frontend/public/sitemap.xml"];

const bruto = process.argv[2];
if (!bruto) {
  console.error("Uso: node scripts/set-site-url.mjs https://dominio-confirmado.com");
  process.exit(1);
}

let url;
try {
  url = new URL(bruto);
} catch {
  console.error(`URL inválida: ${bruto}`);
  process.exit(1);
}
const base = `${url.protocol}//${url.host}`; // sem barra final

let total = 0;
for (const rel of ALVOS) {
  const caminho = resolve(process.cwd(), rel);
  const antes = readFileSync(caminho, "utf8");
  // Substitui http://localhost:5173 pela nova URL pública
  const depois = antes.split("http://localhost:5173").join(base);
  const n = (antes.match(/http:\/\/localhost:5173/g) || []).length;
  if (n > 0) {
    writeFileSync(caminho, depois);
    console.log(`  ${rel}: ${n} ocorrência(s) atualizada(s)`);
    total += n;
  } else {
    console.log(`  ${rel}: nada a trocar`);
  }
}

console.log(`\nPronto: ${total} ocorrência(s) → ${base}`);
