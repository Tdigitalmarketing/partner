/**
 * Digital para Todos — comportamento da interface.
 * §17 interações · §21 tracking · §23 acessibilidade.
 *
 * Sem dependências. Nada aqui bloqueia a leitura da página: se o script
 * falhar, o conteúdo continua visível e os links continuam funcionando.
 */

const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Tracking (§21) ────────────────────────────────────────────────────
   Nenhum ID é inventado. Enquanto GA4/GTM/Meta não estiverem configurados,
   os eventos apenas alimentam o dataLayer — nada é enviado a terceiros. */

const dataLayer = (window.dataLayer = window.dataLayer || []);

function rastrear(evento, dados = {}) {
  if (!evento) return;
  const payload = { event: evento, rota: location.pathname, ...utms(), ...dados };
  try {
    dataLayer.push(payload);
    if (typeof window.gtag === 'function') window.gtag('event', evento, payload);
    if (typeof window.fbq === 'function') window.fbq('trackCustom', evento, payload);
  } catch {
    /* rastreio nunca pode impedir a conversão */
  }
}

let utmsCache = null;
function utms() {
  if (utmsCache) return utmsCache;
  const chaves = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const params = new URLSearchParams(location.search);
  utmsCache = {};
  for (const chave of chaves) {
    const valor = params.get(chave) || sessionStorage.getItem(chave);
    if (valor) {
      utmsCache[chave] = valor;
      try { sessionStorage.setItem(chave, valor); } catch { /* modo privado */ }
    }
  }
  return utmsCache;
}

/** UTMs sobrevivem à navegação entre as quatro rotas (§21). */
function propagarUtms() {
  const atuais = utms();
  if (!Object.keys(atuais).length) return;
  document.querySelectorAll('a[href^="/"]').forEach((a) => {
    const url = new URL(a.getAttribute('href'), location.origin);
    for (const [k, v] of Object.entries(atuais)) url.searchParams.set(k, v);
    a.setAttribute('href', url.pathname + url.search + url.hash);
  });
}

function iniciarCliques() {
  document.addEventListener('click', (e) => {
    const alvo = e.target.closest('[data-evento]');
    if (!alvo) return;
    if (alvo.getAttribute('aria-disabled') === 'true') {
      e.preventDefault();
      return;
    }
    rastrear(alvo.dataset.evento, { texto: alvo.textContent.trim().slice(0, 60) });
  });
}

function iniciarProfundidade() {
  const marcos = [25, 50, 75, 100];
  const vistos = new Set();
  const prefixo = { '/': 'home', '/curso/': 'course', '/tutor/': 'tutor', '/instituicoes/': 'institution' }[location.pathname] || 'page';
  let agendado = false;
  const medir = () => {
    agendado = false;
    const doc = document.documentElement;
    const total = doc.scrollHeight - window.innerHeight;
    if (total <= 0) return;
    const pct = Math.round((window.scrollY / total) * 100);
    for (const marco of marcos) {
      if (pct >= marco && !vistos.has(marco)) {
        vistos.add(marco);
        rastrear(`${prefixo}_scroll_${marco}`, { profundidade: marco });
      }
    }
  };
  window.addEventListener('scroll', () => {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(medir);
  }, { passive: true });
}

/* ── Revelação ao entrar na viewport (§17) ─────────────────────────────── */

function iniciarReveal() {
  const itens = document.querySelectorAll('[data-reveal]');
  if (!itens.length) return;
  if (reduzirMovimento || !('IntersectionObserver' in window)) {
    itens.forEach((el) => el.classList.add('is-visivel'));
    return;
  }
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const el = entrada.target;
      const atraso = Number(el.dataset.revealDelay || 0);
      setTimeout(() => el.classList.add('is-visivel'), atraso);
      observador.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  itens.forEach((el) => observador.observe(el));
}

/* ── Header e menu mobile ──────────────────────────────────────────────── */

function iniciarHeader() {
  const header = document.querySelector('[data-header]');
  const botao = document.querySelector('[data-menu-botao]');
  const menu = document.getElementById('menu-principal');
  if (!header) return;

  let ultimo = 0, agendado = false;
  window.addEventListener('scroll', () => {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(() => {
      agendado = false;
      const y = window.scrollY;
      if ((y > 24) !== (ultimo > 24)) header.classList.toggle('is-compacto', y > 24);
      ultimo = y;
    });
  }, { passive: true });

  if (!botao || !menu) return;
  const fechar = () => {
    botao.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-aberto');
    document.body.classList.remove('menu-aberto');
  };
  botao.addEventListener('click', () => {
    const aberto = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', String(!aberto));
    menu.classList.toggle('is-aberto', !aberto);
    document.body.classList.toggle('menu-aberto', !aberto);
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) fechar(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fechar(); });
  window.addEventListener('resize', () => { if (window.innerWidth >= 900) fechar(); });
}

/* ── Accordion (§16, §23: aria-expanded + aria-controls) ───────────────── */

function iniciarAccordions() {
  document.querySelectorAll('[data-accordion]').forEach((grupo) => {
    const botoes = [...grupo.querySelectorAll('.accordion__botao')];
    botoes.forEach((botao) => {
      const painel = document.getElementById(botao.getAttribute('aria-controls'));
      botao.addEventListener('click', () => {
        const aberto = botao.getAttribute('aria-expanded') === 'true';
        // §18: no mobile, uma trilha por vez quando o conteúdo é longo
        if (!aberto && window.innerWidth < 900 && botoes.length > 4) {
          botoes.forEach((outro) => {
            if (outro === botao) return;
            outro.setAttribute('aria-expanded', 'false');
            document.getElementById(outro.getAttribute('aria-controls'))?.setAttribute('hidden', '');
          });
        }
        botao.setAttribute('aria-expanded', String(!aberto));
        if (painel) painel.toggleAttribute('hidden', aberto);
        if (!aberto) rastrear(grupo.dataset.evento, { item: botao.textContent.trim().slice(0, 60) });
      });
    });
  });
}

/* ── CTA persistente (§18: só depois do Hero) ──────────────────────────── */

function iniciarCtaFixo() {
  const barra = document.querySelector('[data-cta-fixo]');
  const hero = document.querySelector('.hero');
  if (!barra || !hero || !('IntersectionObserver' in window)) return;
  const observador = new IntersectionObserver(([entrada]) => {
    barra.toggleAttribute('hidden', entrada.isIntersecting);
  }, { rootMargin: '-40px 0px 0px 0px' });
  observador.observe(hero);
}

/* ── Formulário institucional (§19, §23) ───────────────────────────────── */

const MENSAGENS = {
  obrigatorio: 'Este campo precisa ser preenchido para continuarmos.',
  email: 'Informe um e-mail válido, no formato nome@dominio.com.br.',
  telefone: 'Informe o WhatsApp com DDD, por exemplo (11) 90000-0000.',
  geral: 'Revise os campos destacados para continuarmos. Cada campo informa o que precisa ser corrigido.',
  enviando: 'Enviando sua solicitação...',
  erro: 'Não foi possível enviar agora. Tente novamente em instantes.',
};

const mascaraTelefone = (valor) => {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, '($1');
  if (d.length <= 6) return d.replace(/(\d{2})(\d{0,4})/, '($1) $2');
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
};

function validarCampo(campo) {
  const el = campo.querySelector('input, select, textarea');
  if (!el) return true;
  const valor = el.value.trim();
  let erro = '';
  if (el.required && !valor) erro = MENSAGENS.obrigatorio;
  else if (el.type === 'email' && valor && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) erro = MENSAGENS.email;
  else if (el.type === 'tel' && valor && valor.replace(/\D/g, '').length < 10) erro = MENSAGENS.telefone;

  const aviso = campo.querySelector('.campo__erro');
  campo.classList.toggle('is-invalido', Boolean(erro));
  el.setAttribute('aria-invalid', erro ? 'true' : 'false');
  if (aviso) {
    aviso.textContent = erro;
    aviso.toggleAttribute('hidden', !erro);
  }
  return !erro;
}

function iniciarFormulario() {
  const form = document.querySelector('[data-lead-form]');
  if (!form) return;
  const estado = form.querySelector('[data-form-status]');
  const botao = form.querySelector('[data-submit]');
  const rotuloBotao = botao?.textContent.trim();
  const sucesso = document.querySelector('[data-form-sucesso]');
  const campos = [...form.querySelectorAll('.campo')];

  const tel = form.querySelector('input[type="tel"]');
  tel?.addEventListener('input', () => { tel.value = mascaraTelefone(tel.value); });

  campos.forEach((campo) => {
    const el = campo.querySelector('input, select, textarea');
    el?.addEventListener('blur', () => { if (el.value.trim() || el.required) validarCampo(campo); });
    el?.addEventListener('input', () => {
      if (campo.classList.contains('is-invalido')) validarCampo(campo);
    });
  });

  let iniciado = false;
  form.addEventListener('input', () => {
    if (iniciado) return;
    iniciado = true;
    rastrear('institution_form_start');
  }, { once: false });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.elements.website?.value) return;   // honeypot

    const invalidos = campos.filter((campo) => !validarCampo(campo));
    if (invalidos.length) {
      form.classList.add('is-erro');
      if (estado) estado.textContent = MENSAGENS.geral;
      invalidos[0].querySelector('input, select, textarea')?.focus();
      rastrear('institution_form_error', { campos: invalidos.length });
      return;
    }

    form.classList.remove('is-erro');
    if (estado) estado.textContent = MENSAGENS.enviando;
    if (botao) { botao.disabled = true; botao.textContent = 'ENVIANDO...'; }

    const endpoint = form.getAttribute('action');
    try {
      if (endpoint) {
        const resposta = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
      }
      rastrear('institution_form_submit', { modo: endpoint ? 'envio' : 'previa' });
      form.hidden = true;
      if (sucesso) {
        sucesso.hidden = false;
        sucesso.focus();
        sucesso.scrollIntoView({ behavior: reduzirMovimento ? 'auto' : 'smooth', block: 'center' });
      }
    } catch (erro) {
      console.error('[form]', erro);
      form.classList.add('is-erro');
      if (estado) estado.textContent = MENSAGENS.erro;
      rastrear('institution_form_error', { motivo: 'envio' });
    } finally {
      if (botao) { botao.disabled = false; botao.textContent = rotuloBotao; }
    }
  });
}

/* ── Início ────────────────────────────────────────────────────────────── */

function iniciar() {
  propagarUtms();
  iniciarCliques();
  iniciarProfundidade();
  iniciarReveal();
  iniciarHeader();
  iniciarAccordions();
  iniciarCtaFixo();
  iniciarFormulario();
  const nome = { '/': 'home_view', '/curso/': 'course_page_view', '/tutor/': 'tutor_page_view', '/instituicoes/': 'institution_page_view' }[location.pathname];
  rastrear(nome || 'page_view');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}
