# TDigital Partners — Landing page de captação

Landing page do Programa de Parceiros da TDigital, para influenciadores e
criadores de conteúdo que querem indicar empresas e receber comissões
recorrentes. Construída a partir do Prompt Mestre do projeto (seção 8,
"Arquitetura da landing page").

O filme institucional da marca é o hero: a rolagem controla quadro a quadro a
sequência em que o criador lança o próprio celular, o aparelho atravessa o
espaço e um foguete da TDigital decola da tela. Abaixo do filme vem a página de
vendas completa.

## Como abrir

Site estático, sem build e sem dependências. Precisa ser servido por HTTP —
abrir por `file://` quebra o carregamento dos quadros.

```bash
python3 -m http.server 8080
# http://localhost:8080
```

Publicação: suba a pasta inteira em qualquer host estático (GitHub Pages,
Netlify, Vercel, S3).

## Estrutura

```
index.html              página inteira (HTML, CSS e JS embutidos)
frames/desktop/         120 quadros WebP 1920×1080  (6,2 MB)
frames/mobile/          120 quadros WebP  900×506   (2,8 MB)
frames/manifest.json    metadados da extração
fonts/                  Archivo + IBM Plex Mono (WOFF2, self-hosted)
```

## Seções

| Âncora | Seção |
|---|---|
| — | Hero sobre o filme: título, subtítulo, CTA e microcopy aprovados |
| — | Identificação do problema |
| `#como-funciona` | As quatro etapas |
| — | O que a TDigital faz |
| `#comissoes` | Faixas 5% / 10% / 15%, recorrência e nível único |
| `#simulador` | Calculadora ilustrativa |
| `#beneficios` | Benefícios |
| `#transparencia` | O que gera e o que não gera comissão, status e dados |
| `#para-quem` | Perfis atendidos |
| — | Institucional (prova social pendente de aprovação) |
| `#duvidas` | FAQ com 12 perguntas |
| `#candidatura` | CTA final e formulário |

## Pontos de configuração

Tudo no `<script>` do fim do `index.html`.

### Formulário

```js
const FORM_ENDPOINT = "";   // vazio => entrega por e-mail
const CONTACT_EMAIL = "comercial@tdigitalsocialmedia.com";
```

Sem back-end, o formulário valida os campos e abre o e-mail do visitante já
preenchido, para que nenhuma candidatura se perca em silêncio. Assim que o
endpoint existir, preencha `FORM_ENDPOINT` e o envio passa a ser um `POST`
`multipart/form-data`. Nenhum dado do formulário é enviado para analytics.

### Simulador

```js
const TIERS = [{ max: 5, pct: 5 }, { max: 10, pct: 10 }, { max: 15, pct: 15 }];
```

Serve só para a projeção ilustrativa da página. O cálculo que vale é o do
back-end, com registro auditável por competência — nada financeiro deve ser
decidido no navegador.

### Sequência em canvas

| Constante | O que faz |
|---|---|
| `FRAME_COUNT` | número de quadros (precisa bater com os arquivos) |
| `DWELL_CENTERS` | onde cada capítulo desacelera (0 a 1) |
| `DWELL_WIDTH` / `DWELL_PEAK` | largura e intensidade da desaceleração |
| `LERP_FACTOR` | suavização do quadro atual |
| `IGNITION_AT` | ponto em que o relógio vira `T+` e o trilho acende |
| `MOBILE_ZOOM` / `MOBILE_FOCAL` | recorte e altura da faixa no celular |

`MOBILE_ZOOM` e `MOBILE_FOCAL` precisam continuar espelhados em
`.mobile-aperture` no CSS, senão as réguas da faixa saem do lugar.

### Analytics

A página só empurra eventos para `window.dataLayer`. Nenhuma ferramenta de
terceiros é carregada — GTM, GA4 e Meta Pixel entram quando forem aprovados.
Eventos already disparados: `page_view`, `hero_cta_click` (com
`cta_location`), `how_it_works_view`, `calculator_start`,
`calculator_complete`, `form_start`, `partner_application_submit`.
Nenhum dado pessoal vai para o dataLayer.

## Regerar os quadros

```bash
python3 extract_frames.py --input hero.mp4 --output frames \
  --frames 120 --quality 74 --desktop-res 1920x1080 --desktop-only
python3 extract_frames.py --input hero.mp4 --output frames \
  --frames 120 --quality 72 --mobile-res 900x506 --mobile-only
```

Os quadros nunca devem passar da resolução do vídeo original.

## Acessibilidade

- `prefers-reduced-motion` troca a sequência por um quadro fixo da decolagem,
  mantendo título, subtítulo e CTA.
- Atalho de teclado ("Pular a animação e ir para o conteúdo") como primeiro
  foco da página.
- Menu mobile com `aria-expanded`, fecha no Escape e ao escolher um link.
- Formulário valida no envio, marca cada campo com erro e move o foco para o
  primeiro problema.
- Contraste medido acima do mínimo WCAG AA em todos os textos da página.
- Alvos de toque de no mínimo 44px.

## Pendências antes de publicar

Itens que dependem de decisão ou material da TDigital:

1. **Logo oficial.** A marca no topo é um placeholder tipográfico. Substituir
   pelo arquivo oficial — a logo não deve ser redesenhada nem recriada.
2. **Prova institucional.** "Mais de R$ 100 milhões em negócios entregues",
   depoimentos, logos de clientes e cases estão fora da página até haver
   confirmação e material comprobatório. O ponto de inserção está marcado por
   comentário no HTML, na seção institucional.
3. **Imagens com homens e mulheres.** O filme enviado tem um único criador
   homem. A direção pede representação de ambos e, de preferência, uma dupla
   de influenciadores.
4. **Regras financeiras em aberto** (listadas na seção 5 do Prompt Mestre):
   comportamento acima de 15 clientes ativos, mudança de faixa retroativa ou
   não, datas de fechamento e pagamento, valor mínimo de saque, documentação
   fiscal, regras de desconto/upgrade/downgrade, estorno e renegociação,
   validade da indicação, critério de duplicidade, duração do bônus de
   parceiro indicado e a partir de quando contam os 12 meses.
5. **Textos jurídicos.** Política de privacidade, termos de uso e regulamento
   ainda não existem; os links do formulário precisam apontar para eles depois
   da revisão jurídica.
6. **Domínio.** As tags canonical e Open Graph usam
   `partners.tdigitalsocialmedia.com.br` como suposição — ajustar para o
   domínio real.
