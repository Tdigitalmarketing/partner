# PROJECT STATE

Projeto: Digital para Todos — Ecossistema de Inclusão Digital
Slug: digital-para-todos
Status: PRONTA PARA REVISÃO (§30) — aguardando aprovação do usuário
Data de início: 2026-08-21
Origem do briefing: BUILD-SPEC v1.0.0

## Etapas

[x] BUILD-SPEC recebido
[x] BUILD-SPEC validado
[x] Estrutura criada
[x] Assets identificados
[x] Imagens geradas
[x] Hero implementado
[x] Seções implementadas
[x] Responsividade
[x] Conversões
[x] SEO
[x] Analytics
[x] Acessibilidade
[x] Performance
[x] QA
[x] Preview
[ ] Aprovado
[ ] Publicado

---

## Relatório de validação

```
VALIDAÇÃO DO BUILD-SPEC — Digital para Todos
Arquivo: lps/digital-para-todos/BUILD-SPEC.md (1704 linhas, 4 rotas)
Itens verificados: 16 · BLOCKER: 0 · WARNING: 9 · INFO: 5

DECISÃO: prosseguir com a construção completa das quatro rotas.
```

A §27 da própria spec já declara, item a item, que nenhuma pendência bloqueia o
desenvolvimento — todas bloqueiam apenas a publicação. A validação confirma
essa leitura: **zero BLOCKER**. Nenhuma pergunta foi feita ao usuário.

Três achados chegaram perto de BLOCKER e foram resolvidos pela própria spec:

| Achado | Por que não é BLOCKER |
| --- | --- |
| `studentCheckoutUrl` e `tutorCheckoutUrl` ausentes (destino da conversão principal de duas rotas) | §29 determina: *"todos os CTAs possuem destino real ou ficam explicitamente desabilitados até a integração"*. O comportamento seguro está especificado. |
| Preço em contradição: `12x de R$ 18,62` / total `R$ 223,44` (Documento Mestre) contra `R$ 179,99 à vista` (site atual) | §5.1 resolve: *"Não publicar duas condições diferentes. Não publicar preço final até conferir a oferta ativa"*. Decisão: nenhum preço é exibido. |
| Logos oficiais inacessíveis — §25 aponta `/home/ubuntu/projects/f-brica-de-land-pages-bb454103/`, caminho de outro ambiente | §16 já prevê `BrandLogo` com *"fallback textual e alt"*. Wordmark tipográfico assume até os arquivos chegarem. |

## Pendências bloqueantes

Nenhuma para o desenvolvimento.

Bloqueiam a **publicação** (§30 — Pronta para publicação), não a prévia:

- [item 1] Nome final da marca: `Digital para Todos` (usado em toda a copy) vs `Novo Digital para Todos` (assinatura do logotipo) · decisão provisória: `Digital para Todos`
- [item 14] `studentCheckoutUrl` — sem ele a rota `/curso` não vende
- [item 14] `tutorCheckoutUrl` + regras de acesso, compartilhamento e cadastro — §3 proíbe publicar o checkout Tutor antes disso
- [item 14] `institutionLeadEndpoint` — sem ele `/instituicoes` não capta lead
- [item 3] WhatsApp comercial — CTA secundário de `/instituicoes`
- [item 5] Preço, condição à vista, garantia e tempo de acesso do Aluno
- [item 11] Depoimentos, fotos de turmas, vídeos de aula e cases autorizados
- [item 13] Domínio e URL canônica
- [item 14] Política de Privacidade, termos e consentimento revisados juridicamente
- [item 14] IDs de GA4, GTM, Meta Pixel e Google Ads

## Pendências não bloqueantes

- [WARNING][item 9] Tipografia não definida na spec, que delega a escolha → decisão registrada abaixo
- [WARNING][item 9] Paleta marcada como *tokens provisórios aproximados* → contraste auditado e ajuste mínimo documentado abaixo
- [WARNING][item 5] Quantidade de aulas, módulos e materiais em validação → conteúdo apresentado por trilha com selos `JÁ DISPONÍVEL` / `EM EXPANSÃO`, sem número algum
- [WARNING][item 5] Suporte, comunidade, atualizações semanais, Kit de Emergência Digital, IA 24h e certificado em validação → nenhum é citado como entrega
- [WARNING][item 8] Bio do instrutor e equipe pendente → seção Autoridade fala do projeto, do método e do propósito, sem nome, cargo ou formação inventados
- [WARNING][item 11] Prova social sem depoimentos autorizados → seção alimentada por lista vazia no config; enquanto vazia, exibe bloco editorial honesto em vez de cards fictícios
- [WARNING][item 11] Vídeo de prévia e screenshots pendentes → `VideoPreview` só renderiza player quando houver URL configurada
- [INFO][item 12] Breakpoints não fixados → mobile-first, 360/390/768/1024/1280/1440
- [INFO][item 13] Canonical sem domínio → `siteUrl` centralizado, vazio na prévia
- [INFO][item 14] `DECISÃO TÉCNICA: CLAUDE` em framework, bibliotecas, CMS e backend → decisão registrada abaixo
- [INFO][item 16] Definição de pronto fornecida pela spec (§30), que substitui o padrão da fábrica
- [INFO][item 6] Aulas 31–37 com numeração não validada → numeração nunca citada

## Assets gerados

Todos gerados em 2026-08-21 pelo TDigital GPT (`gerar_imagem`, qualidade `medium`),
baixados pelo Worker e convertidos em WebP com variantes responsivas.

| Arquivo | Seção | ID de origem | Proporção |
| --- | --- | --- | --- |
| `home-hero-family-learning.webp` | Home Hero | 464817e0d8504c73b01ccb85aeec26d3 | 16:10 |
| `home-community-learning.webp` | Home · Segurança | c1dfed587f6a4b608fd41cb8acf471da | 4:3 |
| `home-globe-people.webp` | Home · Manifesto | 5079cd799dcb4027914c171fd0f07310 | 1:1 |
| `course-hero-adult-confident.webp` | `/curso` Hero | 2f6d1f5661e043b7a88073d51c939aee | 16:10 |
| `course-preview-class.webp` | `/curso` · Demonstração | 231a88bee386484b9bc4c8bc2419ba2c | 16:9 |
| `course-security-learning.webp` | `/curso` · Segurança | d95cd094671441d3a03dbcf94a814578 | 4:3 |
| `course-ai-learning.webp` | `/curso` · IA | 5d7463327974491786235a3707d264b9 | 4:3 |
| `tutor-hero-generations.webp` | `/tutor` Hero | 1234e920a38a467da360518d7f779df9 | 16:10 |
| `tutor-shared-practice.webp` | `/tutor` · Método | e0ad16d339c741da8380fac29149ea6c | 4:3 |
| `tutor-family-security.webp` | `/tutor` · Segurança | 87a590ab51b94a8b84cf2afd5502b690 | 4:3 |
| `institution-hero-community-class.webp` | `/instituicoes` Hero | 4b3a223c9c664ec4935ab90ce0c9f740 | 16:10 |
| `institution-workshop.webp` | `/instituicoes` · Formatos | 2a528af58a994eb0aa5425dac2b78ec6 | 4:3 |
| `institution-team-meeting.webp` | `/instituicoes` · Implantação | 2796d69f78394b8cabf1156df6dc6318 | 4:3 |

Derivados: 4 imagens Open Graph 1200×630 (`og-home`, `og-curso`, `og-tutor`,
`og-instituicoes`) e variantes de 1200/800/480 px de cada foto para `srcset`.

**Não gerados por IA, por decisão da spec (§14):** `brand-logo-horizontal` e
`brand-logo-3d` são ativos oficiais do cliente. O caminho indicado na §25
(`/home/ubuntu/projects/f-brica-de-land-pages-bb454103/`) não existe neste
ambiente. `BrandLogo` usa o fallback textual previsto na §16 — um wordmark
tipográfico com símbolo de globo — e troca para o arquivo real assim que
`marca.logoHorizontal` for preenchido no config.

## Decisões técnicas tomadas

- **Stack — gerador estático próprio em Node, sem dependências.** A spec exige
  quatro rotas reais, componentes reutilizáveis, configuração centralizada e
  proíbe página monolítica, mas não fixa framework. Componentes são funções que
  retornam HTML; `npm run build` emite `/`, `/curso/`, `/tutor/` e
  `/instituicoes/` como HTML estático. Sem `node_modules`, sem runtime de
  framework no cliente, hospedável em qualquer servidor estático — o caminho
  mais simples que atende a todos os requisitos da §24.
- **Qualidade de imagem `medium`.** `high` estourou o limite de 60s do MCP.
  Regra da fábrica: usar a melhor qualidade que conclua a operação.
- **Nenhum preço exibido** enquanto as duas condições conflitantes não forem
  reconciliadas no Hotmart (§5.1).
- **CTAs sem destino ficam em estado pendente explícito** — `aria-disabled`,
  contraste reduzido e microcopy dizendo que a condição será informada —, nunca
  apontando para destino falso (§29).
- **Tipografia: Figtree (títulos, 600–800) + Inter (corpo, 400–600)**, ambas
  self-hospedadas. Inter tem altura-x grande e desenho aberto, o que sustenta a
  leitura em corpo 18 px no celular — a exigência central de um público 50+.
  Figtree dá aos títulos um traço humanista, caloroso sem ser infantil (§12).
- **Corpo em 18 px** e linha de 1.65, dentro da faixa de 17–19 px da §12.
- **CTA laranja com texto azul-marinho.** O laranja `#F58220` com texto branco
  dá 2,59:1 e reprova em AA; com texto marinho dá 5,36:1 e aprova. A cor exata
  da marca é preservada, como manda a §26 — o que muda é a cor do texto.
- **Verde e laranja nunca como texto sobre fundo claro:** para texto usam-se
  `#2E7D26` e `#9A4A00`; as cores originais ficam em fundos e selos.
- **Prova social com lista vazia no config.** Sem depoimento autorizado, a seção
  não exibe card fictício nem placeholder: mostra um bloco editorial que explica
  que os relatos estão sendo reunidos com autorização. Ao preencher
  `depoimentos.curso`, a seção troca sozinha para os cards reais.
- **Formulário em modo prévia.** Sem `institutionLeadEndpoint`, a validação e a
  tela de sucesso funcionam integralmente, e um aviso visível informa que o
  envio ainda não está conectado — nada é transmitido e ninguém é enganado.

## Relatório de QA (§29)

Executado no navegador (Chromium) sobre as quatro rotas construídas.

| Verificação | Resultado |
| --- | --- |
| Rotas carregam direto pela URL | 4/4 · `/`, `/curso/`, `/tutor/`, `/instituicoes/` |
| Overflow horizontal | nenhum em 360, 390, 768, 1024, 1280 e 1440 px |
| Erros de console | nenhum em nenhuma rota |
| Contraste WCAG AA | 652 amostras medidas com composição de alpha · nenhuma abaixo do mínimo |
| Hierarquia de headings | 1 H1 por página, sem salto de nível |
| Alt text | 13/13 imagens |
| Âncoras internas | nenhuma apontando para seção inexistente |
| Alvos de toque | nenhum abaixo de 44 px |
| Placeholder na interface pública | nenhum |
| Preço exibido | nenhum (§5.1) |
| CTAs sem destino | todos com `aria-disabled` e motivo em texto |
| Formulário | 7 obrigatórios validados, foco no primeiro erro, máscara de telefone, honeypot, tela de sucesso |
| Analytics | nenhum evento duplicado, nenhum ID falso, UTMs propagadas entre rotas |
| Teclado | menu abre/fecha com Esc, accordions operáveis, foco visível |
| Peso | ~31–54 KB de HTML por rota; imagens 3,2 MB no total, servidas por `srcset` |

Defeitos encontrados e corrigidos durante o QA:

1. `display:flex` vencia o atributo `hidden` — o ícone de erro aparecia em todos
   os 12 campos do formulário mesmo sem erro.
2. `institution_form_submit` disparava três vezes: o botão tinha `data-evento` e
   o handler de submit também emitia. A §29 proíbe evento duplicado.
3. `.card--pilar` pintava texto branco por classe, não por contexto: em
   `/instituicoes` os cinco pilares ficavam brancos sobre fundo branco.
4. Menu mobile fechado com `opacity:0` continuava focável pelo teclado e visível
   para leitores de tela — trocado por `visibility: hidden`.
5. CTA pendente e microcopy desalinhados nos blocos de texto centrado.
6. Alvo de toque do logo com 34 px de altura.

## Alterações relevantes

- 2026-08-21 · Projeto criado a partir do BUILD-SPEC v1.0.0 · validação sem BLOCKER
- 2026-08-21 · 12 imagens geradas e implementadas · 4 rotas construídas · QA executado
- 2026-08-21 · Fontes migradas do Google Fonts para self-host: o carregamento
  externo é um ponto de falha e um vazamento de dado do visitante para terceiro.
  Figtree e Inter em arquivo variável, subset latin, 76 KB no total.
