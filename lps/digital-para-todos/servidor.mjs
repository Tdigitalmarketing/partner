/** Servidor estático de prévia — resolve as rotas limpas de dist/. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const dist = new URL('./dist/', import.meta.url).pathname;
const porta = Number(process.env.PORT || 4173);
const TIPOS = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp',
  '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml',
};

createServer(async (req, res) => {
  const caminho = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  let alvo = join(dist, caminho);
  try {
    if ((await stat(alvo)).isDirectory()) alvo = join(alvo, 'index.html');
  } catch {
    alvo = join(dist, '404.html');
  }
  try {
    const corpo = await readFile(alvo);
    res.writeHead(200, { 'Content-Type': TIPOS[extname(alvo)] || 'application/octet-stream' });
    res.end(corpo);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404</h1><p><a href="/">Voltar ao início</a></p>');
  }
}).listen(porta, () => console.log(`prévia em http://localhost:${porta}`));
