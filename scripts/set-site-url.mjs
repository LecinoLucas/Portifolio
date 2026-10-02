// Troca o endereço do site (SEO e currículo) por um novo, de uma vez só.
// Detecta o endereço atual pelo <link rel="canonical"> do index.html e também
// substitui o placeholder https://example.com.
//
// Uso:  node scripts/set-site-url.mjs https://lecinolucas.web.app
// Sem dependências — apenas Node.js nativo.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const PLACEHOLDER = "https://example.com";
const ALVOS = ["index.html", "public/robots.txt", "public/sitemap.xml", "docs/curriculo/curriculo.html"];

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

const indice = readFileSync(resolve(process.cwd(), "index.html"), "utf8");
const atual = indice.match(/<link rel="canonical" href="(https?:\/\/[^/"]+)\//)?.[1];
const antigos = [...new Set([PLACEHOLDER, atual].filter((o) => o && o !== base))];
// O currículo mostra o endereço sem o protocolo (ex.: portifolio-....run.app).
const semProtocolo = (o) => o.replace(/^https?:\/\//, "");

let total = 0;
for (const rel of ALVOS) {
  const caminho = resolve(process.cwd(), rel);
  const antes = readFileSync(caminho, "utf8");
  let depois = antes;
  let n = 0;
  for (const antigo of antigos) {
    const trechos = rel.endsWith("curriculo.html") ? [antigo, semProtocolo(antigo)] : [antigo];
    for (const trecho of trechos) {
      const destino = trecho === antigo ? base : semProtocolo(base);
      n += depois.split(trecho).length - 1;
      depois = depois.split(trecho).join(destino);
    }
  }
  if (n > 0) {
    writeFileSync(caminho, depois);
    console.log(`  ${rel}: ${n} ocorrência(s) atualizada(s)`);
    total += n;
  } else {
    console.log(`  ${rel}: nada a trocar`);
  }
}

if (total === 0) {
  console.log(`\nNada a trocar. O endereço já é ${base}?`);
} else {
  console.log(`\nPronto: ${total} ocorrência(s) → ${base}`);
  console.log("Revise o <lastmod> em public/sitemap.xml, regenere o PDF do currículo e rode `npm run build`.");
}
