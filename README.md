# TDigital · Programa de Parceiros

Landing page cinematográfica do Programa de Parceiros da TDigital, voltada a
influenciadores e criadores de conteúdo. A rolagem controla quadro a quadro o
filme institucional da marca: o criador lança o próprio celular ao ar, o
aparelho atravessa o espaço e um foguete da TDigital decola da tela.

## Como abrir

O site é estático, mas precisa ser servido por HTTP — abrir o arquivo direto
pelo `file://` quebra o carregamento dos quadros.

```bash
python3 -m http.server 8080
# http://localhost:8080
```

Publicação: basta subir a pasta inteira em qualquer host estático
(GitHub Pages, Netlify, Vercel, S3). Não há build nem dependências.

## Estrutura

```
index.html              página inteira (HTML, CSS e JS embutidos)
frames/desktop/         120 quadros WebP 1280×720  (4,7 MB)
frames/mobile/          120 quadros WebP  768×432  (2,2 MB)
frames/manifest.json    metadados da extração
fonts/                  Archivo + IBM Plex Mono (WOFF2, self-hosted)
```

## Como a sequência funciona

O filme tem 9,17 s e virou 120 quadros desenhados num `<canvas>`. A posição da
rolagem escolhe o quadro; uma curva de *dwell* desacelera a passagem no centro
de cada capítulo, criando zonas de leitura sem travar a reprodução entre elas.

Pontos de ajuste no `<script>` do `index.html`:

| Constante | O que faz |
|---|---|
| `FRAME_COUNT` | número de quadros (precisa bater com os arquivos) |
| `DWELL_CENTERS` | onde cada capítulo desacelera (0 a 1) |
| `DWELL_WIDTH` / `DWELL_PEAK` | largura e intensidade da desaceleração |
| `LERP_FACTOR` | suavização do quadro atual |
| `IGNITION_AT` | ponto em que o relógio vira `T+` e a interface acende |
| `MOBILE_ZOOM` / `MOBILE_FOCAL` | recorte e altura da faixa no celular |

`MOBILE_ZOOM` e `MOBILE_FOCAL` precisam continuar espelhados em
`.mobile-aperture` no CSS, senão as réguas da faixa saem do lugar.

Os capítulos são posicionados por `data-center` e `data-window` em cada
`<article class="chapter">`. O texto foi colocado no espaço negativo real de
cada trecho do filme, então mudar um `data-center` normalmente exige rever
onde a cópia daquele capítulo aparece.

## Regerar os quadros

Se o filme for trocado, refaça a extração com o mesmo enquadramento:

```bash
python3 extract_frames.py --input hero.mp4 --output frames \
  --frames 120 --quality 82 --desktop-res 1280x720 --desktop-only
python3 extract_frames.py --input hero.mp4 --output frames \
  --frames 120 --quality 72 --mobile-res 768x432 --mobile-only
```

Os quadros nunca devem passar da resolução do vídeo original — ampliar só
aumenta o peso sem ganhar detalhe.

## Acessibilidade

- `prefers-reduced-motion` troca a sequência por um quadro fixo da decolagem.
- Um atalho de teclado ("Pular a animação e ir para o programa") leva direto ao
  conteúdo, porque o CTA da sequência só existe depois da rolagem.
- Contraste de texto acima de 4,5:1 em todas as áreas medidas.

## Cópia

Os textos descrevem o posicionamento do programa sem citar números, comissões
ou prazos, porque esses dados não foram fornecidos. Antes de publicar, revise a
seção "Estágio 01/02/03" e acrescente as condições reais da parceria.
