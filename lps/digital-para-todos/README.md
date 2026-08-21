# Digital para Todos

Ecossistema de quatro rotas produzido pela fábrica TDigital a partir do
`BUILD-SPEC.md` v1.0.0, preservado neste diretório como fonte de verdade.

- **Cliente:** TDigital Social Media
- **Rotas:** `/` · `/curso/` · `/tutor/` · `/instituicoes/`
- **Conversões:** escolha de jornada (Home) · checkout Hotmart (`/curso`, `/tutor`) · lead consultivo (`/instituicoes`)
- **Status:** PRONTA PARA REVISÃO — ver `PROJECT-STATE.md`

## Rodar

```bash
node build.mjs      # gera dist/
node servidor.mjs   # prévia em http://localhost:4173
```

Sem dependências: só Node 18+. Não há `node_modules`, não há etapa de
instalação e a saída em `dist/` é HTML estático, hospedável em qualquer lugar.

## Stack

`DECISÃO TÉCNICA: CLAUDE` na §24. Escolhido um gerador estático próprio, em
Node puro: componentes são funções que retornam HTML (`src/components.mjs`),
cada rota é um módulo (`src/pages/`), e `build.mjs` emite as quatro páginas.

Atende aos requisitos da §24 — rotas reais, componentes reutilizáveis,
configuração centralizada, nada de página monolítica — sem trazer runtime de
framework para o navegador nem árvore de dependências para manter.

## Onde mexer

| Preciso... | Arquivo |
| --- | --- |
| Ativar checkout, WhatsApp, endpoint, preço, analytics | `site.config.mjs` |
| Publicar depoimentos reais | `site.config.mjs` › `depoimentos` |
| Trocar o wordmark pelo logo oficial | `site.config.mjs` › `marca` |
| Mudar copy de uma rota | `src/pages/<rota>.mjs` |
| Mudar um componente compartilhado | `src/components.mjs` |
| Mudar `<head>`, SEO ou schema | `src/layout.mjs` |
| Mudar identidade visual | `assets/css/style.css` |
| Mudar comportamento | `assets/js/app.js` |

### site.config.mjs manda na página

Campo vazio ali é pendência real, e a interface reage sozinha: um CTA sem
destino não vira link falso — declara-se pendente, fica inerte para o teclado e
explica o motivo ao visitante. Preencher o valor é o único passo para ativar.

```js
conversao.studentCheckoutUrl = 'https://pay.hotmart.com/...'  // ativa a venda
conversao.whatsappNumero     = '5511999999999'                // ativa o CTA de WhatsApp
oferta.exibir                = true                           // passa a mostrar preço
```

## Imagens

13 assets em `public/images/`, com variantes de 1200/800/480 px para `srcset`
e quatro imagens Open Graph. Para regenerar ou substituir uma:

```bash
../../scripts/optimize-image.py <id-ou-arquivo> public/images/<nome>.webp --crop 4:3
```

## O que falta para publicar

Ver `PROJECT-STATE.md` › *Pendências bloqueantes*. Em resumo: nome final da
marca, checkouts, preço e garantia, endpoint do formulário, WhatsApp comercial,
depoimentos autorizados, políticas revisadas, domínio e IDs de tracking.

Publicação exige autorização explícita do usuário.
