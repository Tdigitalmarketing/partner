#!/usr/bin/env node
/**
 * Empacota o site de dist/ em uma única página navegável, autossuficiente.
 *
 * Usada para revisão e aprovação: as quatro rotas viram seções trocadas por
 * hash (#/curso), e todo recurso — imagens, fontes, CSS, JS — é embutido no
 * arquivo, porque a página hospedada não pode buscar nada de fora.
 *
 * Não substitui a publicação real: o site de dist/ tem rotas de verdade.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = dirname(fileURLToPath(import.meta.url));
const dist = join(raiz, 'dist');
const ROTAS = [
  ['home', 'index.html', 'Início'],
  ['curso', 'curso/index.html', 'Quero aprender'],
  ['tutor', 'tutor/index.html', 'Quero ajudar alguém'],
  ['instituicoes', 'instituicoes/index.html', 'Para instituições'],
];

const entre = (html, abre, fecha) => {
  const i = html.indexOf(abre);
  if (i < 0) return '';
  const f = html.lastIndexOf(fecha);
  return html.slice(i, f + fecha.length);
};

/** Rotas reais viram hash; âncoras internas seguem intactas. */
const adaptarLinks = (html) => html
  .replace(/href="\/curso\/"/g, 'href="#/curso"')
  .replace(/href="\/tutor\/"/g, 'href="#/tutor"')
  .replace(/href="\/instituicoes\/"/g, 'href="#/instituicoes"')
  .replace(/href="\/"/g, 'href="#/home"');

async function embutirImagens(html, cache) {
  // srcset some: a página embute uma única resolução por imagem
  html = html.replace(/\s+srcset="[^"]*"/g, '').replace(/\s+sizes="[^"]*"/g, '');
  const usadas = [...new Set([...html.matchAll(/src="\/images\/([^"]+)"/g)].map((m) => m[1]))];
  for (const arquivo of usadas) {
    if (!cache.has(arquivo)) {
      // prefere a variante de 1200px: nitidez suficiente em desktop, peso menor
      const base = arquivo.replace(/\.webp$/, '');
      let alvo = `${base}-1200w.webp`;
      try { await readFile(join(dist, 'images', alvo)); } catch { alvo = arquivo; }
      const bin = await readFile(join(dist, 'images', alvo));
      cache.set(arquivo, `data:image/webp;base64,${bin.toString('base64')}`);
    }
    html = html.replaceAll(`src="/images/${arquivo}"`, `src="${cache.get(arquivo)}"`);
  }
  return html;
}

async function montar() {
  const cache = new Map();
  let css = await readFile(join(dist, 'css/style.css'), 'utf8');
  for (const fonte of ['inter-var.woff2', 'figtree-var.woff2']) {
    const bin = await readFile(join(dist, 'fonts', fonte));
    css = css.replace(`url(/fonts/${fonte})`, `url(data:font/woff2;base64,${bin.toString('base64')})`);
  }

  const primeira = await readFile(join(dist, 'index.html'), 'utf8');
  let header = adaptarLinks(entre(primeira, '<header class="cabecalho-site"', '</header>'));
  const footer = adaptarLinks(entre(primeira, '<footer class="rodape"', '</footer>'));

  const secoes = [];
  for (const [nome, arquivo] of ROTAS) {
    const html = await readFile(join(dist, arquivo), 'utf8');
    let main = adaptarLinks(entre(html, '<main id="conteudo">', '</main>'));
    let fixo = entre(html, '<div class="cta-fixo"', '</div>');
    // o CTA persistente pertence à rota: fora dela, não deve existir na tela
    main = await embutirImagens(main, cache);
    fixo = adaptarLinks(fixo);
    // um id por documento: só a rota ativa mantém id="conteudo"
    main = main.replace('<main id="conteudo">', `<main class="conteudo-rota">`);
    secoes.push(`<section class="rota" data-rota="${nome}" hidden>\n${main}\n${fixo}\n</section>`);
  }

  let js = await readFile(join(dist, 'js/app.js'), 'utf8');
  js = js
    // sem rotas reais, a rota ativa vem do roteador
    .replace(/location\.pathname/g, 'window.__rota')
    // UTMs em href absoluto não fazem sentido numa página só
    .replace('  propagarUtms();\n', '')
    // o CTA persistente é observado por rota, não no primeiro .hero do documento
    .replace("  const hero = document.querySelector('.hero');",
             "  const hero = (window.__escopo || document).querySelector('.hero');")
    .replace("  const barra = document.querySelector('[data-cta-fixo]');",
             "  const barra = (window.__escopo || document).querySelector('[data-cta-fixo]');");

  const roteador = `
/* ── Roteador da prévia ────────────────────────────────────────────────
   As quatro rotas convivem no documento; só a ativa fica visível.
   Hash com barra (#/curso) é rota; hash simples (#metodo) é âncora — assim
   os links internos das seções continuam funcionando sem trocar de página. */
const ROTAS = ['home', 'curso', 'tutor', 'instituicoes'];
const MAPA = { home: '#/home', curso: '#/curso', tutor: '#/tutor', instituicoes: '#/instituicoes' };
window.__rota = 'home';

function ativar(nome, comScroll) {
  if (!ROTAS.includes(nome)) nome = 'home';
  window.__rota = nome;
  document.querySelectorAll('.rota').forEach((s) => {
    const ativa = s.dataset.rota === nome;
    s.toggleAttribute('hidden', !ativa);
    if (ativa) { window.__escopo = s; s.querySelector('main')?.setAttribute('id', 'conteudo'); }
    else s.querySelector('main')?.removeAttribute('id');
  });
  document.querySelectorAll('.menu__link').forEach((a) => {
    const alvo = a.getAttribute('href') === MAPA[nome];
    a.classList.toggle('is-atual', alvo);
    if (alvo) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  // a rota entra no DOM visível só agora: revelações e CTA fixo precisam reavaliar
  iniciarReveal();
  iniciarCtaFixo();
  if (comScroll) window.scrollTo({ top: 0, behavior: 'auto' });
  document.title = document.title;
}

function daHash() {
  const h = location.hash;
  return h.startsWith('#/') ? h.slice(2) : null;
}

window.addEventListener('hashchange', () => {
  const nova = daHash();
  if (nova) ativar(nova, true);
});

ativar(daHash() || 'home', false);
`;

  const pagina = `<title>Digital para Todos</title>
<style>
${css}

/* ── Camada da prévia ──────────────────────────────────────────────────
   Não altera a identidade: apenas troca as rotas e sinaliza que esta é a
   versão de aprovação, não o site publicado. */
.rota[hidden] { display: none; }
.rota:not([hidden]) { display: block; }
.faixa-previa {
  position: sticky; top: 0; z-index: 60;
  display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
  gap: .5rem 1rem; padding: .6rem 1rem;
  background: var(--marinho); color: var(--branco);
  font-family: var(--fonte-texto); font-size: .8125rem; line-height: 1.4; text-align: center;
}
.faixa-previa strong { font-family: var(--fonte-titulo); font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
.faixa-previa span { color: #C6D4E6; }
.cabecalho-site { top: 0; }
@media (min-width: 900px) { .cta-fixo { display: none; } }
</style>

<div class="faixa-previa">
  <strong>Prévia para aprovação</strong>
  <span>Quatro rotas navegáveis · CTAs de compra e envio de formulário ainda não conectados</span>
</div>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
${header}
<div id="app">
${secoes.join('\n')}
</div>
${footer}
<script>
${js}
${roteador}
</script>
`;

  const destino = join(raiz, 'previa.html');
  await writeFile(destino, pagina);
  console.log(`  previa.html · ${(pagina.length / 1024 / 1024).toFixed(2)} MB · ${cache.size} imagens embutidas`);
}

montar().catch((e) => { console.error(e); process.exit(1); });
