/**
 * Digital para Todos — configuração única do projeto.
 *
 * Todo dado comercial, integração, credencial e URL vive AQUI. Nenhum
 * componente repete preço, link de checkout, número de WhatsApp ou ID de
 * tracking (BUILD-SPEC §24).
 *
 * Campos vazios são pendências reais: a interface reage a eles sozinha —
 * um CTA sem destino não aponta para lugar nenhum, ele se declara pendente
 * (§29). Preencher o valor é o único passo necessário para ativar.
 */

export const site = {
  nome: 'Digital para Todos',
  // §2.1: "Digital para Todos" x "Novo Digital para Todos" — [PENDENTE — USUÁRIO]
  nomeLegal: 'Digital para Todos',
  descricao:
    'Inclusão digital, autonomia e segurança para pessoas, famílias e instituições.',
  // §20: domínio final [PENDENTE — USUÁRIO]. Vazio = canonical e OG absolutos omitidos.
  url: '',
  locale: 'pt-BR',
};

export const conversao = {
  // §5.1 e §19 — [PENDENTE — INTEGRAÇÃO]
  studentCheckoutUrl: '',
  // §3 — não publicar antes de definir acessos, compartilhamento e cadastro
  tutorCheckoutUrl: '',
  // §5.1 — [PENDENTE — INTEGRAÇÃO]
  freeLessonsUrl: '',
  // §19 — [PENDENTE — INTEGRAÇÃO]
  institutionLeadEndpoint: '',
  // §19 — [PENDENTE — CREDENCIAL]. Só dígitos, com DDI.
  whatsappNumero: '',
  whatsappMensagem:
    'Olá. Quero conhecer a solução institucional do Digital para Todos para minha instituição. Gostaria de entender os formatos disponíveis.',
};

/**
 * §5.1: o Documento Mestre indica 12x de R$ 18,62 (total R$ 223,44) e o site
 * atual exibe R$ 179,99 à vista. São condições conflitantes. A spec determina:
 * não publicar duas condições diferentes e não publicar preço até conferir a
 * oferta ativa no Hotmart. Enquanto `exibir` for false, nenhum número aparece.
 */
export const oferta = {
  exibir: false,
  parcelado: '',
  total: '',
  aVista: '',
  garantia: '',      // §5.1 [PENDENTE — VALIDAÇÃO]
  tempoAcesso: '',   // [PENDENTE — USUÁRIO]
};

/**
 * §26 — nada aqui pode ser publicado sem validação. Enquanto false, o item
 * simplesmente não é citado como entrega em lugar nenhum da página.
 */
export const validado = {
  quantidadeAulas: false,
  atualizacoesSemanais: false,
  suporteUmAno: false,
  comunidade: false,
  kitEmergenciaDigital: false,
  iaExclusiva24h: false,
  certificado: false,
};

/** §11.2 — depoimentos reais, identificados e autorizados. Vazio até chegarem. */
export const depoimentos = {
  curso: [],
  tutor: [],
  instituicoes: [],
};

/** §14 — vídeo de prévia real. Sem URL, o player não é renderizado. */
export const midia = {
  previewVideoUrl: '',
  previewVideoPoster: '/images/course-preview-class.webp',
};

/** §21 — IDs [PENDENTE — CREDENCIAL]. Vazio = nenhum script de terceiro carrega. */
export const analytics = {
  ga4: '',
  gtm: '',
  metaPixel: '',
  googleAds: '',
};

/** §25 — assets oficiais ainda não disponíveis; BrandLogo usa fallback textual. */
export const marca = {
  logoHorizontal: '',   // public/images/brand/logo-horizontal.png
  logo3d: '',           // public/images/brand/logo-3d-profile.png
};

/** §27 — políticas [PENDENTE — CONTEÚDO / jurídico]. Sem URL, não vira link morto. */
export const politicas = {
  privacidade: '',
  termos: '',
  cookies: '',
};

export const rotas = [
  { href: '/', titulo: 'Início' },
  { href: '/curso/', titulo: 'Quero aprender' },
  { href: '/tutor/', titulo: 'Quero ajudar alguém' },
  { href: '/instituicoes/', titulo: 'Para instituições' },
];
