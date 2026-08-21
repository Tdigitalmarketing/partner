/**
 * Esqueleto de página — <head>, SEO, Open Graph, schema e wiring de scripts.
 * §20: schema apenas com dados verdadeiros. §21: nenhum script de terceiro é
 * injetado enquanto não houver ID configurado.
 */
import { analytics, conversao, site } from '../site.config.mjs';
import { ctaPersistente, esc, footer, header } from './components.mjs';

/** Sem domínio definido (§20 [PENDENTE — USUÁRIO]) não se inventa URL absoluta. */
const absoluta = (caminho) => (site.url ? new URL(caminho, site.url).href : '');

function schema(rota, seo) {
  const org = {
    '@type': 'Organization',
    name: site.nomeLegal,
    description: site.descricao,
    ...(site.url && { url: site.url }),
  };
  const grafo = [org, {
    '@type': 'WebPage',
    name: seo.titulo,
    description: seo.descricao,
    inLanguage: 'pt-BR',
    ...(absoluta(rota) && { url: absoluta(rota) }),
    isPartOf: { '@type': 'WebSite', name: site.nome, ...(site.url && { url: site.url }) },
  }];
  // Course/Product exigem instrutor, duração e preço verdadeiros (§20): ausentes.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo });
}

function tags(analiticos) {
  if (!analiticos.gtm && !analiticos.ga4 && !analiticos.metaPixel) return '';
  return `<!-- §21: containers ativados por configuração -->`;
}

export function pagina({ rota, seo, conteudo, ctaFixo = '', classe = '' }) {
  const canonical = absoluta(rota);
  const ogImagem = absoluta(`/images/${seo.og}`);
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0B2B5B">
<title>${esc(seo.titulo)}</title>
<meta name="description" content="${esc(seo.descricao)}">
<meta name="robots" content="${site.url ? 'index, follow' : 'noindex, nofollow'}">
${canonical ? `<link rel="canonical" href="${canonical}">` : '<!-- canonical: domínio [PENDENTE — USUÁRIO] -->'}

<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="${esc(site.nome)}">
<meta property="og:title" content="${esc(seo.ogTitulo || seo.titulo)}">
<meta property="og:description" content="${esc(seo.ogDescricao || seo.descricao)}">
${canonical ? `<meta property="og:url" content="${canonical}">` : ''}
${ogImagem ? `<meta property="og:image" content="${ogImagem}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">` : ''}
<meta name="twitter:card" content="summary_large_image">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" as="font" type="font/woff2" href="/fonts/inter-var.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/figtree-var.woff2" crossorigin>
<link rel="preload" as="image" href="/images/${esc(seo.heroImagem)}" fetchpriority="high">
<link rel="stylesheet" href="/css/style.css">
<script type="application/ld+json">${schema(rota, seo)}</script>
${tags(analytics)}
</head>
<body class="${classe}">
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
${header(rota)}
<main id="conteudo">
${conteudo}
</main>
${footer()}
${ctaPersistente(ctaFixo)}
<script type="module" src="/js/app.js"></script>
</body>
</html>`;
}
