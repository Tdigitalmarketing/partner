# assets/images

As 11 imagens da landing page entram aqui, em **WebP**, com estes nomes exatos:

| Arquivo | Seção | Proporção |
|---|---|---|
| `01_problema_networking.webp` | "O que acontece hoje" (`#problema`) | 16:9 |
| `02_como_funciona_banner.webp` | Fundo de "Como funciona" (`#como-funciona`) | 16:9 |
| `03_tdigital_team.webp` | "Do nosso lado" (`#o-que-fazemos`) | 16:9 |
| `04_comissoes_infografico.webp` | Fundo de "Comissões" (`#comissoes`) | 16:9 |
| `05_beneficios_banner.webp` | "Benefícios" (`#beneficios`) | 16:9 |
| `06_transparencia_banner.webp` | Fundo de "Transparência" (`#transparencia`) | 16:9 |
| `07_perfil_influenciador.webp` | Card "Influenciadores e criadores" | 3:4 |
| `08_perfil_especialista.webp` | Card "Especialistas de nicho" | 3:4 |
| `09_parceiros_grupo.webp` | Fundo de "Para quem é" (`#para-quem`) | 16:9 |
| `10_simulador_banner.webp` | Faixa do simulador (`#simulador`) | 16:9 |
| `11_cta_final_banner.webp` | Fundo do formulário (`#candidatura`) | 16:9 |

## Converter os JPG originais

Os arquivos entregues são JPG em 2560×1440 (16:9) e 1632×2176 (3:4). Converta
para WebP antes de commitar — a página inteira já usa WebP e o ganho de peso é
grande:

```bash
cd assets/images
for f in *.jpg; do cwebp -q 82 "$f" -o "${f%.jpg}.webp"; done
rm -f *.jpg
```

Se preferir usar os JPG direto, troque as extensões em `assets/css/images.css`
e nos `<img>` do `index.html`.

## Enquanto os arquivos não chegam

A página não quebra. As seções com imagem de fundo ficam apenas escuras, e os
blocos `<figure class="media">` se escondem sozinhos quando o arquivo não
carrega (ver o último `<script>` do `index.html`). Os cards de perfil voltam ao
estilo de card comum.

## Cuidado com o caminho dos cards de perfil

As imagens 07 e 08 são aplicadas por `style="background-image:url(...)"` no
próprio HTML, e **não** por `images.css`. Dentro do CSS, um `url()` relativo
resolveria a partir de `assets/css/` e apontaria para `assets/css/assets/images/`.
