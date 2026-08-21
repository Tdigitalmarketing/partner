/**
 * Componentes compartilhados — Digital para Todos.
 * Cada função devolve HTML. Nenhuma conhece preço, URL de checkout ou ID de
 * tracking: tudo chega por parâmetro a partir de site.config.mjs (§24).
 */
import { conversao, marca, politicas, rotas, site } from '../site.config.mjs';

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const lista = (itens, fn) => itens.map(fn).join('\n');

/* ── Ícones (§12: lineares, consistentes; nunca emoji) ─────────────────── */

const ICONES = {
  autonomia: '<path d="M12 3v4M12 17v4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M3 12h4M17 12h4M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  escudo: '<path d="M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  conversa: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z"/>',
  celular: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  ia: '<path d="M12 4a4 4 0 0 1 4 4v1a3 3 0 0 1 0 6v1a4 4 0 0 1-8 0v-1a3 3 0 0 1 0-6V8a4 4 0 0 1 4-4Z"/><path d="M12 4v16"/>',
  crescer: '<path d="M4 19h16"/><path d="M7 19v-5M12 19V8M17 19v-9"/>',
  duvida: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2A2.6 2.6 0 0 1 14.6 10c0 1.7-2.6 2-2.6 3.6"/><path d="M12 17.4h.01"/>',
  maos: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 12V4.5a1.5 1.5 0 0 1 3 0V12"/><path d="M14 12V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6H9.6a4 4 0 0 1-3.2-1.6L4 15.2a1.6 1.6 0 0 1 2.4-2.1L8 14.5"/>',
  alerta: '<path d="M12 4.5 3.2 19.5h17.6L12 4.5Z"/><path d="M12 10v4M12 17h.01"/>',
  grupo: '<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.5a3 3 0 0 1 0 5.8M17.5 19a5.5 5.5 0 0 0-2-4.3"/>',
  predio: '<path d="M4 20V6l7-3 7 3v14"/><path d="M9 20v-4h4v4"/><path d="M9 9h.01M13 9h.01M9 12.5h.01M13 12.5h.01"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
  bussola: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  seta: '<path d="M5 12h13M12.5 6l6 6-6 6"/>',
};

export const icone = (nome, extra = '') => `
  <svg class="icone ${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${ICONES[nome] || ICONES.check}
  </svg>`;

/* ── CTA (§16 PrimaryCTA / §29 destino real ou pendente explícito) ──────── */

/**
 * Um CTA sem destino configurado nunca vira link falso: ele se declara
 * pendente, fica inerte para o teclado e explica o motivo em texto.
 */
export function cta({
  texto, href = '', variante = 'primario', evento = '',
  pendente = false, motivo = '', bloco = false, id = '',
}) {
  const classe = `cta cta--${variante}${bloco ? ' cta--bloco' : ''}`;
  const attrs = [
    id && `id="${esc(id)}"`,
    evento && `data-evento="${esc(evento)}"`,
  ].filter(Boolean).join(' ');

  if (pendente || !href) {
    return `
      <div class="cta-wrap">
        <span class="${classe} cta--pendente" role="link" aria-disabled="true" ${attrs}>
          ${esc(texto)}
        </span>
        ${motivo ? `<span class="cta-nota">${esc(motivo)}</span>` : ''}
      </div>`;
  }
  const externo = /^https?:/.test(href);
  return `<a class="${classe}" href="${esc(href)}" ${attrs}
    ${externo ? 'target="_blank" rel="noopener"' : ''}>${esc(texto)}${
      variante === 'primario' ? icone('seta', 'icone--cta') : ''}</a>`;
}

export const ctaCheckoutAluno = (texto = 'QUERO APRENDER', evento = 'course_hero_cta_click') =>
  cta({
    texto, href: conversao.studentCheckoutUrl, evento,
    pendente: !conversao.studentCheckoutUrl,
    motivo: conversao.studentCheckoutUrl ? '' : 'As condições atuais serão informadas assim que a oferta for confirmada.',
  });

export const ctaCheckoutTutor = (texto = 'QUERO SER UM TUTOR', evento = 'tutor_hero_cta_click') =>
  cta({
    texto, href: conversao.tutorCheckoutUrl, evento,
    pendente: !conversao.tutorCheckoutUrl,
    motivo: conversao.tutorCheckoutUrl ? '' : 'A oferta Tutor está sendo definida. As regras de acesso serão informadas antes da compra.',
  });

export const ctaAulasGratuitas = (texto = 'VER AS 15 AULAS GRATUITAS', evento = 'course_free_lessons_click') =>
  cta({
    texto, href: conversao.freeLessonsUrl, variante: 'secundario', evento,
    pendente: !conversao.freeLessonsUrl,
    motivo: conversao.freeLessonsUrl ? '' : 'O acesso às aulas gratuitas está sendo preparado.',
  });

export function ctaWhatsApp(texto = 'FALAR COM A EQUIPE PELO WHATSAPP', evento = 'institution_whatsapp_click') {
  if (!conversao.whatsappNumero) {
    return cta({ texto, variante: 'secundario', evento, pendente: true,
      motivo: 'O WhatsApp oficial será divulgado em breve. Use o formulário acima.' });
  }
  const url = `https://wa.me/${conversao.whatsappNumero}?text=${encodeURIComponent(conversao.whatsappMensagem)}`;
  return cta({ texto, href: url, variante: 'secundario', evento });
}

/* ── Blocos de seção ───────────────────────────────────────────────────── */

export function secao({ id = '', fundo = 'branco', classe = '', conteudo, largura = '' }) {
  return `
  <section ${id ? `id="${esc(id)}"` : ''} class="secao secao--${fundo} ${classe}">
    <div class="container ${largura}">${conteudo}</div>
  </section>`;
}

export const eyebrow = (t) => (t ? `<p class="eyebrow">${esc(t)}</p>` : '');

export function cabecalho({ olho = '', titulo, nivel = 2, texto = [], destaque = '', centro = false }) {
  const paras = Array.isArray(texto) ? texto : [texto];
  return `
  <div class="cabecalho ${centro ? 'cabecalho--centro' : ''}" data-reveal>
    ${eyebrow(olho)}
    <h${nivel} class="titulo">${titulo}</h${nivel}>
    ${lista(paras.filter(Boolean), (p) => `<p class="texto">${p}</p>`)}
    ${destaque ? `<p class="destaque">${destaque}</p>` : ''}
  </div>`;
}

export const cards = (itens, { colunas = 3, tipo = 'card' } = {}) => `
  <ul class="grade grade--${colunas}" role="list">
    ${lista(itens, (it, i) => `
      <li class="${tipo}" data-reveal data-reveal-delay="${i * 60}">
        ${it.icone ? `<span class="card__icone">${icone(it.icone)}</span>` : ''}
        ${it.titulo ? `<h3 class="card__titulo">${it.titulo}</h3>` : ''}
        ${it.texto ? `<p class="card__texto">${it.texto}</p>` : ''}
      </li>`)}
  </ul>`;

export const etapas = (itens) => `
  <ol class="etapas" role="list">
    ${lista(itens, (e, i) => `
      <li class="etapa" data-reveal data-reveal-delay="${i * 70}">
        <span class="etapa__num" aria-hidden="true">${i + 1}</span>
        <div>
          <h3 class="etapa__titulo">${esc(e.titulo)}</h3>
          ${e.texto ? `<p class="etapa__texto">${esc(e.texto)}</p>` : ''}
        </div>
      </li>`)}
  </ol>`;

/** §18: tabelas viram pares empilhados no mobile — nunca rolagem horizontal. */
export const transformacao = (linhas, { de = 'Hoje', para = 'Com o Digital para Todos' } = {}) => `
  <ul class="transf" role="list">
    <li class="transf__cabecalho" aria-hidden="true">
      <span>${esc(de)}</span><span>${esc(para)}</span>
    </li>
    ${lista(linhas, ([a, b], i) => `
      <li class="transf__linha" data-reveal data-reveal-delay="${i * 50}">
        <span class="transf__de"><span class="transf__rotulo">${esc(de)}</span>${esc(a)}</span>
        <span class="transf__seta" aria-hidden="true">${icone('seta')}</span>
        <span class="transf__para"><span class="transf__rotulo">${esc(para)}</span>${esc(b)}</span>
      </li>`)}
  </ul>`;

export const selo = (texto, tom = 'verde') =>
  `<p class="selo selo--${tom}"><span>${esc(texto)}</span></p>`;

/** §16 CurriculumAccordion / FAQAccordion — teclado e leitores de tela (§23). */
export function accordion(itens, { nome = 'ac', evento = '' } = {}) {
  return `
  <div class="accordion" data-accordion ${evento ? `data-evento="${esc(evento)}"` : ''}>
    ${lista(itens, (it, i) => {
      const id = `${nome}-${i}`;
      return `
      <div class="accordion__item">
        <h3>
          <button type="button" class="accordion__botao" id="${id}-b"
                  aria-expanded="false" aria-controls="${id}-p">
            <span>${esc(it.titulo)}</span>
            ${it.estado ? `<span class="etiqueta etiqueta--${it.estado === 'JÁ DISPONÍVEL' ? 'ok' : 'expansao'}">${esc(it.estado)}</span>` : ''}
            <span class="accordion__mais" aria-hidden="true"></span>
          </button>
        </h3>
        <div class="accordion__painel" id="${id}-p" role="region" aria-labelledby="${id}-b" hidden>
          <div class="accordion__conteudo">${it.conteudo}</div>
        </div>
      </div>`;
    })}
  </div>`;
}

/* ── Imagem responsiva (§22) ───────────────────────────────────────────── */

export function figura({ arquivo, alt, larguras = [1200, 800, 480], sizes = '(max-width: 900px) 100vw, 50vw', prioridade = false, classe = '' }) {
  const base = arquivo.replace(/\.webp$/, '');
  const srcset = larguras.map((w) => `/images/${base}-${w}w.webp ${w}w`).join(', ');
  return `
    <img class="figura ${classe}" src="/images/${esc(arquivo)}"
         srcset="${srcset}, /images/${esc(arquivo)} 1536w" sizes="${sizes}"
         alt="${esc(alt)}" ${prioridade ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>`;
}

/* ── Hero (§15) ────────────────────────────────────────────────────────── */

export function hero({ olho, titulo, subtitulo, ctas = '', microcopy = '', selo: s = '', imagem, alt, prova = '' }) {
  return `
  <section class="hero">
    <div class="container hero__grade">
      <div class="hero__texto">
        ${eyebrow(olho)}
        <h1 class="hero__titulo">${titulo}</h1>
        <p class="hero__sub">${subtitulo}</p>
        ${ctas ? `<div class="hero__ctas">${ctas}</div>` : ''}
        ${microcopy ? `<p class="microcopy">${esc(microcopy)}</p>` : ''}
        ${s ? selo(s) : ''}
        ${prova ? `<p class="hero__prova">${esc(prova)}</p>` : ''}
      </div>
      <div class="hero__media">
        <div class="hero__moldura">
          ${figura({ arquivo: imagem, alt, prioridade: true, larguras: [1200, 800, 480], sizes: '(max-width: 900px) 100vw, 52vw' })}
        </div>
      </div>
    </div>
  </section>`;
}

/* ── Marca, header e footer ────────────────────────────────────────────── */

export function brandLogo(escuro = false) {
  // §16: fallback textual enquanto os arquivos oficiais não chegam (§25).
  if (marca.logoHorizontal) {
    return `<img class="marca__img" src="${esc(marca.logoHorizontal)}"
      alt="Logo ${esc(site.nome)} com globo e três figuras humanas" width="180" height="48">`;
  }
  return `
    <span class="marca__wordmark ${escuro ? 'marca__wordmark--escuro' : ''}">
      <span class="marca__simbolo" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="17" stroke="currentColor" stroke-width="2.4"/>
          <path d="M20 3c4.5 5 4.5 29 0 34M20 3c-4.5 5-4.5 29 0 34M4 14h32M4 26h32"
                stroke="currentColor" stroke-width="1.5" opacity=".55"/>
        </svg>
      </span>
      <span class="marca__texto">Digital <em>para</em> Todos</span>
    </span>`;
}

export function header(rotaAtual) {
  return `
  <header class="cabecalho-site" data-header>
    <div class="container cabecalho-site__interno">
      <a class="marca" href="/" aria-label="${esc(site.nome)} — página inicial">${brandLogo()}</a>
      <button class="menu-botao" type="button" data-menu-botao
              aria-expanded="false" aria-controls="menu-principal">
        <span class="menu-botao__barras" aria-hidden="true"></span>
        <span class="sr-only">Abrir menu</span>
      </button>
      <nav class="menu" id="menu-principal" aria-label="Navegação principal">
        <ul class="menu__lista" role="list">
          ${lista(rotas, (r) => `
            <li><a class="menu__link ${r.href === rotaAtual ? 'is-atual' : ''}"
                   href="${r.href}" ${r.href === rotaAtual ? 'aria-current="page"' : ''}>${esc(r.titulo)}</a></li>`)}
        </ul>
      </nav>
    </div>
  </header>`;
}

export function footer() {
  const politica = (rotulo, url) =>
    url ? `<li><a href="${esc(url)}">${esc(rotulo)}</a></li>`
        : `<li><span class="footer__pendente">${esc(rotulo)}<span class="footer__nota"> — em revisão</span></span></li>`;
  return `
  <footer class="rodape">
    <div class="container rodape__grade">
      <div class="rodape__marca">
        ${brandLogo(true)}
        <p class="rodape__frase">Inclusão digital, autonomia e segurança para pessoas, famílias e instituições.</p>
      </div>
      <nav class="rodape__nav" aria-label="Rodapé">
        <h2 class="rodape__titulo">Caminhos</h2>
        <ul role="list">${lista(rotas.slice(1), (r) => `<li><a href="${r.href}">${esc(r.titulo)}</a></li>`)}</ul>
      </nav>
      <div class="rodape__nav">
        <h2 class="rodape__titulo">Informações</h2>
        <ul role="list">
          ${politica('Política de Privacidade', politicas.privacidade)}
          ${politica('Termos de uso', politicas.termos)}
          ${politica('Política de cookies', politicas.cookies)}
        </ul>
      </div>
    </div>
    <div class="container rodape__base">
      <p>© ${new Date().getFullYear()} ${esc(site.nomeLegal)}. Todos os direitos reservados.</p>
      <p class="rodape__aviso">Os resultados de aprendizagem variam conforme o ritmo e a prática de cada pessoa.</p>
    </div>
  </footer>`;
}

/** §16 PersistentMobileCTA — só aparece depois do Hero (§18). */
export const ctaPersistente = (conteudo) =>
  conteudo ? `<div class="cta-fixo" data-cta-fixo hidden>${conteudo}</div>` : '';

export { lista };
