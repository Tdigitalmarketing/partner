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
assets/css/images.css   camada de imagens das seções
assets/favicon/         ícones do navegador e do atalho no celular
assets/images/          as 11 imagens das seções (ver README de lá)
frames/desktop/         120 quadros WebP 1920×1080  (6,2 MB)
frames/mobile/          120 quadros WebP  900×506   (2,8 MB)
frames/manifest.json    metadados da extração
fonts/                  Archivo + IBM Plex Mono (WOFF2, self-hosted)
```

## Imagens das seções

As 11 imagens estão em `assets/images/`, em WebP (848 KB no total, convertidas
dos JPG originais de 2560×1440 e 1632×2176). A camada de estilo vive em
`assets/css/images.css`, carregado **depois** do `<style>` embutido — se vier
antes, o CSS inline vence a cascata e as imagens somem.

Se algum arquivo faltar, a página continua correta: o fundo fica escuro como
antes, os blocos `<figure class="media">` se escondem sozinhos e os cards de
perfil voltam ao estilo comum. Nada de ícone de imagem quebrada.

Quatro adaptações em relação ao guia original, todas deliberadas:

- **Overlays no preto-roxo do site** (`--void`, #0b0812) em vez de #0F172A. O
  tom do guia é azulado e criaria uma emenda visível entre as seções com e sem
  imagem. As opacidades seguem o guia.
- **`background-attachment: fixed`** só em telas ≥1024px com ponteiro fino e
  sem `prefers-reduced-motion`. Em toque ele causa repaint pesado e o iOS
  Safari ignora.
- **Fade-in condicionado à classe `.js`** no `<html>`. O guia deixava
  `img[loading="lazy"]` em `opacity: 0` no CSS, o que esconderia todas as
  imagens para sempre se o script falhasse.
- **Painéis sobre imagem ganham fundo próprio** (`rgba` do `--void` entre 74% e
  88%). A superfície padrão do site tem 4,5% de opacidade: sem isso a foto
  atravessava cards, listas e — no CTA final — os campos do formulário.

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
const FORM_ENDPOINT = "https://formsubmit.co/ajax/fd52f94cdd97a83ec9945d3967aa6dc5";
const CONTACT_EMAIL = "comercial@tdigitalsocialmedia.com";
const WHATSAPP_URL  = "https://wa.me/552126952086";
```

A candidatura vai por `POST` (`multipart/form-data`) para o FormSubmit, que
encaminha para o e-mail comercial. O endpoint `/ajax/` responde em JSON, então
o candidato recebe a confirmação sem sair da página.

**Ativação: já feita.** O formulário está ativo e entrega em
`comercial@tdigitalsocialmedia.com`. Não se repete.

O código na URL é o identificador que o FormSubmit devolve depois da ativação,
no lugar do e-mail — aponta para a mesma caixa e evita que o endereço fique no
`action` do formulário, que é o alvo preferido de coletores de spam.

Uma nova ativação só é pedida se o formulário passar a ser enviado de **outra
origem** (o domínio `github.io`, `localhost`, ou o domínio sem o `www`). Por
isso, teste sempre por `https://www.tdigitalpartners.com`.

Campos de controle no HTML: `_subject`, `_template=table`, `_captcha=false`
(a validação é nossa) e `_honey`, um campo escondido que funciona como
armadilha de spam — robôs preenchem, gente não.

Se o envio falhar, os dados digitados são preservados e a página oferece o
WhatsApp como saída. Nenhum dado do formulário vai para analytics.

**Trocar para endpoint próprio** é só substituir `FORM_ENDPOINT`; o resto do
fluxo continua igual. Com a string vazia, volta a abrir o e-mail do visitante.

**Opcional:** depois de ativar, o FormSubmit fornece um código aleatório que
pode substituir o e-mail na URL (`https://formsubmit.co/ajax/<código>`), para
o endereço não ficar exposto no HTML contra coletores de spam.

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

## Carregamento

Não há tela de abertura: a página aparece de imediato e a sequência preenche
o canvas conforme os quadros chegam. O `<link rel="preload">` do quadro 1
(uma versão para desktop, outra para retrato, escolhidas por `media`) faz o
primeiro desenho vir quase junto com o hero, e o canvas acende com um fade
quando pinta.

A rolagem responde desde o primeiro instante — `tick()` roda antes de qualquer
quadro existir e simplesmente não desenha até o primeiro chegar.

Tempo até a chamada principal ficar legível, medido em banda de 1,5 Mb/s:
**7,9 s com a tela de abertura, 0,9 s sem ela**.

## Favicon

Gerado a partir de `Favicon.png` (510×510, enviado pela TDigital) sem alterar
a arte. Regerar com outro arquivo é repetir estes comandos:

```bash
for s in 32 48 192 512; do
  ffmpeg -y -i Favicon.png -vf "scale=$s:$s:flags=lanczos" assets/favicon/icon-$s.png
done
# O iOS pinta de preto qualquer transparência: este precisa de fundo sólido.
ffmpeg -y -f lavfi -i "color=c=0x7c4bad:s=180x180" -i Favicon.png \
  -filter_complex "[1]scale=164:164:flags=lanczos[i];[0][i]overlay=8:8" \
  -frames:v 1 assets/favicon/apple-touch-icon.png
```

Na aba do navegador o ícone aparece com cerca de 16px, e nesse tamanho a
palavra "Partners" some — vira uma mancha escura na base do círculo. Se um dia
quiserem ganhar legibilidade, a saída é uma versão só com o foguete, sem os
textos.

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
3. **Imagens com homens e mulheres.** Resolvido nas fotos de seção: os seis
   cards de "Para quem é" e o banner do grupo trazem homens e mulheres. O filme
   do hero continua com um único criador homem.
4. **Regras financeiras em aberto** (listadas na seção 5 do Prompt Mestre):
   comportamento acima de 15 clientes ativos, mudança de faixa retroativa ou
   não, datas de fechamento e pagamento, valor mínimo de saque, documentação
   fiscal, regras de desconto/upgrade/downgrade, estorno e renegociação,
   validade da indicação, critério de duplicidade, duração do bônus de
   parceiro indicado e a partir de quando contam os 12 meses.
5. **Textos jurídicos.** Política de privacidade, termos de uso e regulamento
   ainda não existem; os links do formulário precisam apontar para eles depois
   da revisão jurídica. A política precisa citar o FormSubmit como processador
   dos dados enviados pelo formulário.
6. **Logo no favicon.** A arte enviada inclui "Partners" e o nome na vertical,
   que somem nos 16px da aba do navegador. Uma versão só com o foguete daria
   mais legibilidade — decisão de marca, não de código.
