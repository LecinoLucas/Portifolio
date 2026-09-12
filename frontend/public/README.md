# Pasta `public/`

Arquivos servidos como estáticos na raiz do site (sem processamento do Vite).

## Assets presentes

| Arquivo | Uso | Referenciado em |
| --- | --- | --- |
| `favicon.svg` | Ícone do site | `index.html` |
| `site.webmanifest` | Manifest PWA básico | `index.html` |
| `robots.txt` / `sitemap.xml` | SEO | — |
| `og-image.png` (1200×630) | Preview em LinkedIn / redes sociais | `index.html` (`og:image`, `twitter:image`) |
| `curriculo-lecino-lucas.pdf` | Botão **Baixar currículo** (Hero e Contato) | `src/data/links.ts` |

> `og-image.png` e `curriculo-lecino-lucas.pdf` foram gerados a partir dos dados
> já validados em `src/data/*` (Chrome headless, sem dependências npm). Para
> regenerar, veja os fontes em `scripts/`/scratchpad ou substitua os arquivos
> mantendo os mesmos nomes.

## Domínio (fazer antes do deploy)

Os metadados usam o placeholder `https://example.com`. Para definir o domínio real:

```bash
npm run set-domain -- https://seudominio.com
```

Isso atualiza `index.html` (canonical, `og:url`, JSON-LD), `public/robots.txt` e
`public/sitemap.xml`. Depois, revise o `<lastmod>` em `public/sitemap.xml` e rode
`npm run build`.
