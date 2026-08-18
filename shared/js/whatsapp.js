/**
 * TDigital — links de WhatsApp com mensagem pré-preenchida e rastreio.
 *
 * Uso declarativo no HTML:
 *   <a data-whatsapp
 *      data-phone="5511999999999"
 *      data-message="Olá! Vim pela página de implantes e quero avaliar meu caso."
 *      data-origem="hero">Falar no WhatsApp</a>
 *
 * initWhatsApp() monta o href final, acrescenta a origem do clique à mensagem
 * e dispara o evento de conversão configurado.
 */

/** Monta a URL wa.me a partir de telefone e mensagem. */
export function buildWhatsAppUrl(phone, message = '') {
  const digits = String(phone).replace(/\D/g, '');
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * @param {object} options
 * @param {string} [options.phone]    telefone padrão da LP (só dígitos, com DDI)
 * @param {string} [options.message]  mensagem padrão
 * @param {boolean} [options.appendSource] anexa "(origem: X)" à mensagem
 * @param {(el:HTMLElement)=>void} [options.onClick] callback de rastreio
 */
export function initWhatsApp({
  phone = '',
  message = '',
  appendSource = true,
  selector = '[data-whatsapp]',
  onClick,
} = {}) {
  const links = document.querySelectorAll(selector);

  links.forEach((el) => {
    const targetPhone = el.dataset.phone || phone;
    if (!targetPhone) return;

    let text = el.dataset.message || message;
    const origem = el.dataset.origem;
    if (appendSource && origem && text) text += ` (origem: ${origem})`;

    el.setAttribute('href', buildWhatsAppUrl(targetPhone, text));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');

    el.addEventListener('click', () => {
      trackConversion('whatsapp_click', { origem: origem || 'nao-informado' });
      onClick?.(el);
    });
  });

  return links;
}

/** Dispara conversão nas tags presentes na página, sem quebrar se não houver. */
export function trackConversion(event, params = {}) {
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', event, params);
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, params);
    }
    window.dataLayer?.push({ event, ...params });
  } catch {
    /* rastreio nunca pode impedir a conversão */
  }
}
