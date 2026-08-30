// Troca o domínio placeholder por um domínio real em todos os locais de SEO.
// Uso:  node scripts/set-site-url.mjs https://seudominio.com
// Sem dependências — apenas Node.js nativo.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const PLACEHOLDER = "https://example.com";
const ALVOS = ["index.html", "public/robots.txt", "public/sitemap.xml"];

const bruto = process.argv[2];
if (!bruto) {
  console.error("Uso: node scripts/set-site-url.mjs https://seudominio.com");
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
  const depois = antes.split(PLACEHOLDER).join(base);
  const n = (antes.match(new RegExp(PLACEHOLDER.replace(/[.]/g, "\\."), "g")) || []).length;
  if (n > 0) {
    writeFileSync(caminho, depois);
    console.log(`  ${rel}: ${n} ocorrência(s) atualizada(s)`);
    total += n;
  } else {
    console.log(`  ${rel}: nada a trocar`);
  }
}

if (total === 0) {
  console.log(`\nNenhum "${PLACEHOLDER}" encontrado. O domínio já foi definido?`);
} else {
  console.log(`\nPronto: ${total} ocorrência(s) → ${base}`);
  console.log("Revise o <lastmod> em public/sitemap.xml e rode `npm run build`.");
}
