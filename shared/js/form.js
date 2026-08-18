/**
 * TDigital — formulário de captação de leads.
 * Validação nativa + máscara de telefone BR + envio assíncrono + estados.
 *
 * HTML esperado:
 *   <form data-lead-form action="ENDPOINT" method="post">
 *     <input name="nome" required>
 *     <input name="telefone" data-mask="phone" required>
 *     <button type="submit" data-submit>Enviar</button>
 *     <p data-form-status role="status" aria-live="polite"></p>
 *   </form>
 *
 * O estilo dos estados (.is-loading, .is-success, .is-error) é definido
 * pelo CSS de cada LP.
 */
import { trackConversion } from './whatsapp.js';

const MSG = {
  loading: 'Enviando...',
  success: 'Recebemos seu contato. Retornaremos em breve.',
  error: 'Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.',
  invalid: 'Confira os campos destacados.',
};

/** Máscara progressiva de telefone brasileiro: (00) 00000-0000 */
export function maskPhoneBR(value) {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, '($1');
  if (d.length <= 6) return d.replace(/(\d{2})(\d{0,4})/, '($1) $2');
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}

export function initMasks(root = document) {
  root.querySelectorAll('[data-mask="phone"]').forEach((input) => {
    input.setAttribute('inputmode', 'tel');
    input.addEventListener('input', () => {
      input.value = maskPhoneBR(input.value);
    });
  });
}

/**
 * @param {object} options
 * @param {string} [options.endpoint]  sobrescreve o action do form
 * @param {string} [options.redirect]  URL de obrigado após sucesso
 * @param {object} [options.messages]  textos de estado
 * @param {(data:FormData, form:HTMLFormElement)=>Promise<void>} [options.onSubmit]
 *        envio customizado; se ausente, faz POST JSON para o endpoint
 */
export function initLeadForm({
  selector = '[data-lead-form]',
  endpoint,
  redirect,
  messages = {},
  onSubmit,
} = {}) {
  const texts = { ...MSG, ...messages };

  document.querySelectorAll(selector).forEach((form) => {
    initMasks(form);
    const status = form.querySelector('[data-form-status]');
    const button = form.querySelector('[data-submit]');
    const buttonLabel = button?.textContent;

    const setState = (state, message) => {
      form.classList.remove('is-loading', 'is-success', 'is-error');
      if (state) form.classList.add(`is-${state}`);
      if (status) status.textContent = message || '';
      if (button) {
        button.disabled = state === 'loading';
        button.textContent = state === 'loading' ? texts.loading : buttonLabel;
      }
    };

    form.setAttribute('novalidate', '');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        setState('error', texts.invalid);
        return;
      }

      // Honeypot opcional: <input name="website" hidden tabindex="-1">
      if (form.elements.website?.value) return;

      setState('loading');
      const data = new FormData(form);

      try {
        if (onSubmit) {
          await onSubmit(data, form);
        } else {
          const url = endpoint || form.getAttribute('action');
          if (!url) throw new Error('Endpoint do formulário não configurado.');
          const res = await fetch(url, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: data,
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
        }

        trackConversion('lead_form_submit', { form: form.name || 'lead' });
        setState('success', texts.success);
        form.reset();
        if (redirect) window.location.assign(redirect);
      } catch (err) {
        console.error('[lead-form]', err);
        setState('error', texts.error);
      }
    });
  });
}
