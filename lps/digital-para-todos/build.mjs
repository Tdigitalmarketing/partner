#!/usr/bin/env node
/**
 * Gerador estático — Digital para Todos.
 *
 * Emite as quatro rotas reais da §24 como HTML puro:
 *   dist/index.html  dist/curso/  dist/tutor/  dist/instituicoes/
 *
 * Sem dependências e sem runtime de framework no cliente: é o caminho mais
 * simples que atende aos requisitos de rotas reais, componentes reutilizáveis
 * e configuração centralizada (`DECISÃO TÉCNICA: CLAUDE`).
 */
import { cp, mkdir, rm, writeFile, readdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pagina } from './src/layout.mjs';

const raiz = dirname(fileURLToPath(import.meta.url));
const dist = join(raiz, 'dist');

const ROTAS = [
  { rota: '/', modulo: './src/pages/home.mjs', saida: 'index.html' },
  { rota: '/curso/', modulo: './src/pages/curso.mjs', saida: 'curso/index.html' },
  { rota: '/tutor/', modulo: './src/pages/tutor.mjs', saida: 'tutor/index.html' },
  { rota: '/instituicoes/', modulo: './src/pages/instituicoes.mjs', saida: 'instituicoes/index.html' },
];

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <rect width="40" height="40" rx="9" fill="#0B2B5B"/>
  <circle cx="20" cy="20" r="11.5" fill="none" stroke="#54B948" stroke-width="2.4"/>
  <path d="M20 8.5c3 3.4 3 19.6 0 23M20 8.5c-3 3.4-3 19.6 0 23M9 16h22M9 24h22"
        fill="none" stroke="#F58220" stroke-width="1.6" opacity=".9"/>
</svg>`;

async function tamanhoDe(caminho) {
  let total = 0;
  for (const item of await readdir(caminho, { withFileTypes: true })) {
    const alvo = join(caminho, item.name);
    total += item.isDirectory() ? await tamanhoDe(alvo) : (await stat(alvo)).size;
  }
  return total;
}

async function construir() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });

  await cp(join(raiz, 'public/images'), join(dist, 'images'), { recursive: true });
  await cp(join(raiz, 'assets/css'), join(dist, 'css'), { recursive: true });
  await cp(join(raiz, 'assets/js'), join(dist, 'js'), { recursive: true });
  await cp(join(raiz, 'assets/fonts'), join(dist, 'fonts'), { recursive: true });
  await writeFile(join(dist, 'favicon.svg'), FAVICON);

  for (const { rota, modulo, saida } of ROTAS) {
    const { seo, conteudo, ctaFixo = '' } = await import(modulo);
    const html = pagina({ rota, seo, conteudo, ctaFixo });
    const destino = join(dist, saida);
    await mkdir(dirname(destino), { recursive: true });
    await writeFile(destino, html);
    console.log(`  ${rota.padEnd(16)} → dist/${saida.padEnd(24)} ${(html.length / 1024).toFixed(1)} KB`);
  }

  console.log(`\n  total em dist/: ${((await tamanhoDe(dist)) / 1024 / 1024).toFixed(2)} MB`);
}

construir().catch((erro) => {
  console.error('falha no build:', erro);
  process.exit(1);
});
