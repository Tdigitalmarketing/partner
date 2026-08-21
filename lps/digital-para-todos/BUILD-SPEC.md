# BUILD SPEC — DIGITAL PARA TODOS
## Ecossistema de Inclusão, Autonomia e Segurança Digital

---

## 0. CONTROLE DO DOCUMENTO

| Campo | Definição |
|---|---|
| **Projeto** | Digital para Todos — Ecossistema de Inclusão Digital |
| **Empresa** | TDigital — Fábrica de Landing Pages / TDigital Social Media |
| **Segmento** | Educação digital, inclusão digital e capacitação para pessoas, famílias e instituições |
| **Versão** | 1.0.0 |
| **Data** | 21 de agosto de 2026 |
| **Status** | Especificação de produção pronta para implementação, com pendências explicitamente sinalizadas |
| **Objetivo** | Construir um ecossistema de quatro páginas com jornadas de conversão separadas |
| **Rotas** | `/`, `/curso`, `/tutor`, `/instituicoes` |
| **Executor** | Claude Code |

Este documento é autossuficiente. Claude Code não deve depender do histórico da conversa para compreender o negócio, a arquitetura, a copy ou as decisões do projeto.

---

## 1. RESUMO EXECUTIVO

O Digital para Todos é um projeto de educação e inclusão digital criado para aproximar pessoas da tecnologia de uma forma simples, prática, paciente e humana. O público prioritário inclui adultos e pessoas 50+ com pouca familiaridade com tecnologia, receio de errar, dependência de familiares para tarefas digitais, dificuldade com aplicativos e preocupação com golpes.

O projeto ensina temas que fazem parte da vida cotidiana: primeiros passos no celular, internet, Wi-Fi, navegação segura, WhatsApp, Facebook, Instagram, segurança digital, Inteligência Artificial, Uber, iFood, Play Store e aplicativos úteis. A metodologia segue a sequência **Explicação → Demonstração → Prática → Repetição → Autonomia**.

A presença digital será um ecossistema com quatro experiências:

| Rota | Público | Intenção | Conversão |
|---|---|---|---|
| `/` | Pessoas, famílias e instituições | Entender o projeto e escolher um caminho | Clique em uma jornada |
| `/curso` | Aluno que quer aprender para si | Comprar o curso online | Checkout Hotmart |
| `/tutor` | Familiar, cuidador ou responsável | Acompanhar alguém na inclusão digital | Checkout Hotmart, se configurado |
| `/instituicoes` | Organizações e comunidades | Implementar o projeto para um público | Lead comercial qualificado |

O posicionamento ampliado é:

> **Uma solução de inclusão, autonomia e segurança digital para pessoas, famílias e instituições.**

A Home pergunta: **Como você quer fazer parte do Digital para Todos?**. As respostas são **Quero aprender**, **Quero ajudar alguém** e **Quero levar o projeto para uma instituição**.

A página `/curso` terá venda direta com foco em autonomia, segurança, confiança, conteúdos práticos e 15 aulas gratuitas como mecanismo de experimentação. A página `/tutor` terá narrativa própria para quem deseja aprender junto e acompanhar alguém, sem transformar o Tutor em professor ou responsável por fazer tudo. A página `/instituicoes` terá modelo consultivo e não exibirá checkout como ação principal; captará informações para apresentação, diagnóstico e proposta.

O resultado esperado é um site claro, humano, legível, mobile first, acessível e preparado para medir cada jornada separadamente. Não devem ser inventados preços, garantias, depoimentos, certificações, números de aulas, parceiros, resultados, funcionalidades de suporte ou formas de implantação.

---

## 2. CONTEXTO DO NEGÓCIO

### 2.1 Empresa e projeto

A marca do projeto é **Digital para Todos**. Os arquivos oficiais também usam **Novo Digital para Todos** no logotipo. A nomenclatura final deve ser confirmada e permanecer como `[PENDENTE — USUÁRIO]` até a decisão.

O projeto está associado à TDigital Social Media e será desenvolvido no contexto da **TDigital — Fábrica de Landing Pages**.

Site atual analisado: <https://www.tdigitalsocialmedia.com.br/digitalparatodos>

### 2.2 Problema

A tecnologia passou a mediar comunicação, serviços, compras, informação, mobilidade, aprendizagem e participação social. Parte do público não teve oportunidade de desenvolver habilidades digitais com calma e, por isso, pode depender de familiares, evitar serviços online, sentir vergonha de perguntar ou ficar mais exposta a mensagens suspeitas.

A causa deve ser apresentada como a velocidade da mudança tecnológica e a falta de explicações acessíveis, não como incapacidade pessoal. O objetivo é criar condições para aprendizagem e autonomia progressiva.

### 2.3 Modelo de negócio

- **Aluno:** B2C, venda direta do curso online via checkout Hotmart.
- **Tutor:** B2C, venda direta ou oferta específica via checkout Hotmart, dependendo da configuração comercial final.
- **Instituições:** B2B/B2I, geração de lead comercial, diagnóstico, apresentação, proposta, contratação, implantação e treinamento.

### 2.4 Diferenciais

- linguagem simples;
- método progressivo;
- situações reais;
- vídeos e aulas práticas;
- 15 aulas gratuitas como experimentação;
- autonomia como benefício central;
- segurança digital e prevenção contra golpes;
- familiares podem acompanhar alguém;
- organizações podem levar a solução a seus públicos;
- identidade humana, colorida e inclusiva;
- respeito ao ritmo e à dignidade do aluno.

### 2.5 Limitações

O site atual contém promessas que precisam ser auditadas: mais de 65 videoaulas, aulas novas toda semana, suporte por um ano, comunidade, Kit de Emergência Digital, IA disponível 24 horas, garantia de 7 dias, preço à vista e escassez. Nada disso pode ser publicado como fato definitivo antes de validação.

As expressões últimas vagas, turma limitada e restam poucas vagas só poderão ser mantidas se refletirem limitação real e documentada. Caso contrário, devem ser removidas.

---

## 3. OBJETIVO DE CONVERSÃO

### Home `/`

- **Conversão principal:** escolha de uma das três jornadas.
- **Destino:** âncora `#escolha-seu-caminho` e rotas internas.
- **Estágio:** descoberta, identificação e roteamento.
- **Ação esperada:** clicar em `/curso`, `/tutor` ou `/instituicoes`.

A Home não deve fechar as três vendas ao mesmo tempo.

### Página `/curso`

- **Conversão principal:** início do checkout e compra do Curso Digital para Todos — Online.
- **Conversão secundária:** acesso às primeiras 15 aulas gratuitas.
- **Destino:** `studentCheckoutUrl = [PENDENTE — INTEGRAÇÃO]`.
- **Estágio:** consideração e decisão B2C.
- **Ação esperada:** entender a transformação, conferir oferta e clicar em `QUERO APRENDER`.

### Página `/tutor`

- **Conversão principal:** compra ou início do checkout da oferta Tutor, caso configurada.
- **Conversão secundária:** prévia e 15 aulas gratuitas.
- **Destino:** `tutorCheckoutUrl = [PENDENTE — INTEGRAÇÃO]`.
- **Estágio:** consideração e decisão B2C por intenção de acompanhar alguém.
- **Ação esperada:** entender o papel do Tutor e clicar em `QUERO SER UM TUTOR`.

O checkout do Tutor não deve ser publicado enquanto não estiverem definidas regras de acesso, número de acessos, compartilhamento, cadastro, preço, garantia, suporte e orientação pós-compra.

### Página `/instituicoes`

- **Conversão principal:** envio de formulário para apresentação ou diagnóstico.
- **Conversão secundária:** WhatsApp comercial.
- **Destino:** `institutionLeadEndpoint = [PENDENTE — INTEGRAÇÃO]` e WhatsApp `[PENDENTE — CREDENCIAL]`.
- **Estágio:** descoberta, avaliação e venda consultiva B2B/B2I.
- **Ação esperada:** informar instituição, público, objetivo e solicitar apresentação.

---

## 4. PÚBLICO-ALVO

### 4.1 Aluno

Adultos e pessoas 50+ que desejam desenvolver autonomia digital, além de pessoas mais jovens com pouca intimidade com tecnologia.

**Dores:** medo de clicar errado, dependência para tarefas simples, receio de golpes, confusão com aplicativos, vergonha de perguntar, dificuldade com atualizações e sensação de ter ficado para trás.

**Desejos:** usar o celular com confiança, conversar com a família, entender mensagens e links, usar aplicativos, reconhecer sinais de alerta, aprender no próprio ritmo e não ser infantilizado.

**Objeções:** não saber nada, não ter tempo, já ter tentado, medo de pagar, dúvida se o curso é adequado e dificuldade com palavras técnicas.

**Critérios de decisão:** clareza, demonstração da didática, possibilidade de experimentar, preço transparente, garantia confirmada, tempo de acesso, suporte real, facilidade e identificação.

### 4.2 Tutor

Filhos, filhas, netos, pais, familiares, cuidadores, responsáveis e pessoas que acompanham alguém com dificuldade digital.

**Situações de entrada:** um familiar sempre pede ajuda, medo de clicar, quase golpe, desejo de ajudar sem fazer tudo, distância física e falta de confiança para ensinar.

**Objeções:** não saber ensinar, falta de tempo, medo de a pessoa não conseguir, dúvida sobre acesso compartilhado e dúvida sobre precisar comprar dois cursos.

A linguagem deve falar de cuidado, acompanhamento, autonomia e aprendizagem conjunta. O Tutor não é professor, técnico nem substituto da autonomia do aluno.

### 4.3 Instituições

Empresas, igrejas, associações, ONGs, projetos sociais, escolas, centros de convivência, grupos comunitários, órgãos públicos e entidades que atendam pessoas com dificuldades digitais.

**Decisores:** gestores de responsabilidade social, coordenadores de projetos, líderes comunitários ou religiosos, diretores, RH, gestores de pessoas, coordenadores de centros, responsáveis por parcerias e patrocinadores.

**Necessidades:** metodologia, ação de responsabilidade social, programa para pessoas 50+, capacitação para colaboradores e familiares, suporte a projeto comunitário ou iniciativa de segurança e inclusão digital.

**Critérios de decisão:** escopo, público, metodologia, formatos, responsabilidades, suporte, treinamento, capacidade, implantação, evidências, proposta e facilidade de contato.

---

## 5. OFERTA

### 5.1 Aluno

O produto é o **Curso Digital para Todos — Online**, com conteúdo progressivo, simples e prático.

**Conteúdos:** primeiros passos no celular; internet e Wi-Fi; navegação segura; WhatsApp; Facebook e Instagram; segurança digital; golpes; Inteligência Artificial; Uber; iFood; Play Store e aplicativos úteis.

**Benefícios:** aprender no ritmo próprio; compreender melhor o celular; praticar situações reais; reconhecer alertas; usar aplicativos; comunicar-se; desenvolver autonomia progressiva.

**Preço de referência:** 12x de R$ 18,62, total de R$ 223,44. O site atual exibe R$ 179,99 à vista e esse parcelamento. As condições são conflitantes e precisam ser conferidas no Hotmart.

```text
studentPriceInstallments: "12x de R$ 18,62" // referência; confirmar
studentPriceTotal: "R$ 223,44" // referência; confirmar
studentPriceCash: "[PENDENTE — USUÁRIO]"
studentCheckoutUrl: "[PENDENTE — INTEGRAÇÃO]"
```

Não publicar duas condições diferentes. Não publicar preço final até conferir a oferta ativa.

**Aulas gratuitas:** primeiras 15 aulas, com URL, formulário, fluxo, consentimento e integração `[PENDENTE — INTEGRAÇÃO]`.

**Itens em validação:** videoaulas; aulas de 5–10 minutos; slides; e-books; materiais; atualizações; suporte técnico por um ano; comunidade; Kit de Emergência Digital; IA Digital para Todos; certificado; tempo de acesso.

**Garantia:** o site atual indica 7 dias, mas a configuração real deve ser conferida. Usar `[PENDENTE — VALIDAÇÃO]`.

### 5.2 Tutor

A oferta Tutor existe como jornada para quem acompanha alguém, mas ainda não foi definido se utilizará o mesmo produto Hotmart, um produto separado, um acesso, dois acessos ou compartilhamento permitido.

Pendências: produto/oferta; número de acessos; compartilhamento; cadastro da pessoa acompanhada; orientação pós-compra; preço; garantia; tempo de acesso; suporte e checkout.

### 5.3 Instituições

Não haverá checkout como ação principal. A organização solicitará apresentação, diagnóstico ou conversa comercial.

Formatos a validar: acessos para participantes; turmas presenciais apoiadas por conteúdo online; programa para colaboradores e familiares; projeto comunitário; formação de tutores/monitores; programa personalizado.

Não publicar preço, número mínimo, prazo de implantação, turmas, personalização, treinamento ou suporte sem definição.

---

## 6. PROPOSTA DE VALOR

**Proposta principal:** O Digital para Todos transforma tecnologia difícil e distante em aprendizagem simples, prática e humana para pessoas, famílias e instituições.

**Aluno:** `Aprender a usar a tecnologia com mais segurança, autonomia e confiança no dia a dia.`

**Tutor:** `Ajude quem você ama a conquistar mais autonomia e segurança no mundo digital.`

**Instituições:** `Leve o Digital para Todos para sua instituição e transforme inclusão digital em uma ação de impacto.`

**Diferencial:** combinação de educação digital prática, linguagem acolhedora, segurança, autonomia, aprendizagem conjunta e implementação institucional.

**Razões para acreditar:** currículo definido; metodologia em cinco etapas; 15 aulas gratuitas; registros presenciais e depoimentos que podem ser utilizados se autorizados; proposta construída para reduzir medo, dependência e confusão.

A transformação é progressiva, não garantida. O projeto não promete eliminar riscos, formar profissionais de tecnologia ou gerar resultado financeiro.

---

## 7. PESQUISA E EVIDÊNCIAS

### Fatos verificados em fontes públicas

| Dado ou orientação | Fonte e URL | Uso |
|---|---|---|
| Landing pages devem ter ação principal e poucas distrações | [Hotmart](https://hotmart.com/pt-br/blog/o-que-e-landing-page), [Mailchimp](https://mailchimp.com/resources/landing-page-best-practices/), [GiveForms](https://www.giveforms.com/blog/nonprofit-landing-page-design-best-practices-and-tips-2022) | Home roteia; cada rota tem conversão própria |
| Páginas de curso usam headline, produto, prova, autoridade, oferta, garantia e CTA | [Hotmart](https://hotmart.com/pt-br/blog/pagina-de-vendas) | Estrutura `/curso` |
| B2B precisa de proposta clara, prova, foco e formulário essencial | [Heyflow](https://heyflow.com/blog/b2b-landing-page-best-practices/) | Formulário institucional |
| Inclusão digital envolve habilidades, suporte e conteúdos além de acesso | [NDIA](https://www.digitalinclusion.org/digital-inclusion-101/) | Proposta institucional |
| Programas de equidade digital podem envolver instituições e parceiros | [City of Minneapolis](https://www.minneapolismn.gov/government/programs-initiatives/digital-inclusion/) | Aplicações institucionais |
| Acessibilidade deve considerar usuários mais velhos | [W3C](https://www.w3.org/WAI/older-users/) | UX e conteúdo |
| WCAG 2.2 define critério de tamanho mínimo de alvo em certos contextos | [W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | Botões amplos e espaçados |
| Usuários mais velhos podem enfrentar texto pequeno, baixo contraste, alvos pequenos e erros pouco claros | [NN/g](https://www.nngroup.com/articles/usability-for-senior-citizens/) | Acessibilidade e confiança |
| Checkout mobile sofre com custos pouco claros, campos redundantes, labels e erros | [Baymard](https://baymard.com/blog/mobile-ecommerce-checkout-forms) | Revisão de checkout e formulário |

### Dados do negócio

- Curso online e inclusão digital: Documento Mestre.
- Primeiras 15 aulas gratuitas: Documento Mestre e site atual.
- Referência de 12x R$ 18,62 e total R$ 223,44: Documento Mestre.
- R$ 179,99 à vista no site atual: site atual.
- Currículo com celular, internet, WhatsApp, redes, segurança, IA, Uber, iFood e Play Store: Documento Mestre.
- Aulas 31–34 relacionadas à IA e 35–37 a Uber, iFood e Play Store: resumo do Documento Mestre; usar somente se a numeração estiver validada.
- Logo com globo, figuras humanas, azul, verde e laranja: assets oficiais.
- Depoimentos, vídeos e experiências presenciais: observação do site e materiais; usar somente com autorização.

### Hipóteses estratégicas

As 15 aulas gratuitas podem reduzir medo; páginas separadas podem aumentar relevância; a Home roteadora pode diminuir confusão; diagnóstico institucional pode gerar leads mais adequados; relatos por transformação podem ser mais claros; acessibilidade e linguagem simples podem favorecer confiança.

Essas são hipóteses, não resultados comprovados.

---

## 8. REFERÊNCIAS E CONCORRENTES

| Referência | URL | Inspiração | Não copiar |
|---|---|---|---|
| Site atual | https://www.tdigitalsocialmedia.com.br/digitalparatodos | Prévia gratuita, autonomia, linguagem cotidiana, depoimentos | Escassez sem prova, densidade, condições conflitantes |
| Mailchimp | https://mailchimp.com/resources/landing-page-best-practices/ | Clareza, foco, CTA | Tratar recomendação como garantia |
| Leadpages | https://leadpages.com/blog/course-landing-page-examples | Estrutura de curso | Claims de outros nichos |
| LearnWorlds | https://www.learnworlds.com/blog/market-sell/course-landing-page-with-examples/ | Benefícios e currículo | Promessas genéricas |
| Teachable | https://www.teachable.com/blog/best-practices-for-great-landing-page-design | Design e copy | Layout sem adaptação |
| MasterClass | https://www.masterclass.com/classes/rewriting-the-rules-of-business-and-life | Trailer e estrutura de curso | Visual premium incompatível |
| Le Wagon | https://www.lewagon.com/web-development-course | Fatos de curso | Claims de carreira |
| Harvard CS50 | https://pll.harvard.edu/course/cs50-introduction-computer-science | Conteúdo objetivo | Associar autoridade Harvard |
| Hotmart | https://hotmart.com/pt-br/blog/pagina-de-vendas | Oferta, CTA, prova e garantia | Material promocional como prova independente |
| W3C | https://www.w3.org/WAI/older-users/ | Acessibilidade | Diagnóstico de pessoas |
| NDIA | https://www.digitalinclusion.org/digital-inclusion-101/ | Inclusão além do acesso | Copiar autoridade institucional |
| Heyflow | https://heyflow.com/blog/b2b-landing-page-best-practices/ | Lead B2B e formulário | Claims de SaaS |
| GiveForms | https://www.giveforms.com/blog/nonprofit-landing-page-design-best-practices-and-tips-2022 | CTA, histórias, formulário e clareza | Linguagem de doação |

---

## 9. ESTRATÉGIA DA LANDING PAGE

A primeira impressão deve comunicar uma marca humana, confiável, clara e feita para aproximar. A Home deve comunicar projeto de inclusão e três formas de participação. Cada página de conversão deve comunicar sua intenção específica.

Sequência: identificação da marca; problema sem culpa; proposta e método; benefícios reais; demonstração; prova autorizada; conteúdo publicado versus expansão; objeções; oferta ou próximo passo; garantia/acesso/entrega somente se confirmados; CTA claro.

A confiança vem de prévia, copy transparente, currículo, identidade consistente, fotografias reais ou briefings autênticos, depoimentos autorizados, política de privacidade, checkout claro e FAQ.

Não usar pressão artificial, promessas financeiras, contadores falsos, depoimentos não comprovados, métricas de vaidade, excesso de pop-ups ou tentativa de tratar pessoas 50+ como incapazes.

CTAs por rota:

| Rota | CTA principal | CTA secundário |
|---|---|---|
| Home | `ESCOLHER COMO QUERO PARTICIPAR` | `ESCOLHER MEU CAMINHO` |
| `/curso` | `QUERO APRENDER` | `VER AS 15 AULAS GRATUITAS` |
| `/tutor` | `QUERO SER UM TUTOR` | `CONHECER O JEITO DE ENSINAR` |
| `/instituicoes` | `SOLICITAR UMA APRESENTAÇÃO` | `FALAR COM A EQUIPE PELO WHATSAPP` |

---

## 10. ARQUITETURA DA PÁGINA

### Home `/`

1. Header.
2. Hero institucional.
3. Problema.
4. O que é o Digital para Todos.
5. Pilares.
6. Como funciona.
7. Conteúdos.
8. Prova e experiência.
9. Seletor de jornadas `#escolha-seu-caminho`.
10. Manifesto final.
11. CTA final com os três caminhos.
12. Footer.

### `/curso`

1. Header.
2. Hero de venda.
3. Redução imediata do medo.
4. Identificação com dores.
5. Manifesto.
6. Antes e depois.
7. Método.
8. Conteúdo programático.
9. Demonstração.
10. 15 aulas gratuitas.
11. Segurança — Golpe Aqui Não.
12. Inteligência Artificial.
13. Para quem é.
14. Para quem não é.
15. Prova social.
16. Autoridade.
17. O que está incluído.
18. Oferta e preço.
19. Garantia.
20. FAQ.
21. CTA final.
22. Footer.

### `/tutor`

1. Header.
2. Hero.
3. Identificação familiar.
4. Reenquadramento: ajudar não é fazer tudo.
5. O que é ser Tutor.
6. Como funciona.
7. Benefícios.
8. Método.
9. Conteúdos compartilhados.
10. Prévia e 15 aulas gratuitas.
11. Segurança em família.
12. Histórias de familiares.
13. Oferta Tutor.
14. FAQ.
15. Garantia.
16. CTA final.
17. Footer.

### `/instituicoes`

1. Header.
2. Hero institucional.
3. Problema institucional.
4. O que é a solução.
5. Onde pode ser aplicado.
6. Público atendido.
7. Metodologia.
8. Formatos de implementação.
9. O que a instituição recebe.
10. Implantação.
11. Benefícios.
12. Indicadores e impacto.
13. Provas e experiência.
14. FAQ institucional.
15. Formulário.
16. CTA final.
17. Footer.

---

## 11. COPY FINAL

As cópias abaixo são as versões recomendadas para implementação. Observações de validação não devem aparecer para o visitante; devem ser tratadas como condições de publicação.

### 11.1 Home `/`

#### Hero

- **Eyebrow:** `INCLUSÃO DIGITAL PARA PESSOAS, FAMÍLIAS E INSTITUIÇÕES`
- **Headline:** `Tecnologia deveria unir pessoas, nunca afastá-las.`
- **Subheadline:** `O Digital para Todos ajuda pessoas a aprender, famílias a acompanhar e instituições a promover inclusão digital com mais segurança, autonomia e confiança.`
- **CTA:** `ESCOLHER COMO QUERO PARTICIPAR`
- **Microcopy:** `Conheça o projeto e encontre o caminho mais adequado para você.`

#### Problema

- **Eyebrow:** `QUANDO A TECNOLOGIA MUDA RÁPIDO DEMAIS`
- **Headline:** `Nem todo mundo teve a oportunidade de aprender no mesmo ritmo.`
- **Texto:** `O celular mudou. Os serviços foram para a internet. As conversas passaram para o WhatsApp. Bancos, aplicativos, redes sociais e agora a Inteligência Artificial fazem parte da rotina.`
- **Texto:** `Mas muitas pessoas precisaram aprender sozinhas — ou passaram a depender de alguém para realizar tarefas que gostariam de fazer com mais independência.`
- **Texto:** `O Digital para Todos existe para diminuir essa distância com explicação simples, prática e paciente.`
- **Cards:**
  - `Medo de clicar errado` — `Você fica inseguro quando aparece uma tela ou mensagem que não conhece?`
  - `Dependência para tarefas simples` — `Você precisa chamar alguém para resolver coisas no celular?`
  - `Receio de golpes` — `Você não sabe se um link, mensagem ou pedido é seguro?`
  - `Distância da família` — `Você gostaria de conversar, compartilhar e acompanhar melhor quem ama?`
- **CTA opcional:** `QUERO ENTENDER COMO FUNCIONA`

#### Solução

- **Eyebrow:** `CONHEÇA O PROJETO`
- **Headline:** `Inclusão digital é também autonomia, segurança e conexão.`
- **Texto:** `O Digital para Todos é um projeto de educação e inclusão digital criado para aproximar pessoas da tecnologia de um jeito humano.`
- **Texto:** `A proposta é ensinar o que realmente faz parte da vida: usar o celular, conversar pelo WhatsApp, navegar na internet, reconhecer riscos, utilizar aplicativos e compreender as novas ferramentas digitais.`
- **Texto:** `Tudo com uma metodologia que respeita o ritmo de cada pessoa.`
- **Destaque:** `Você não precisa chegar sabendo. Precisa encontrar uma explicação que faça sentido para você.`

#### Pilares

- **Headline:** `Um projeto para aprender, proteger e continuar participando.`
- **Autonomia:** `Realizar mais tarefas do dia a dia sem depender de outras pessoas para tudo.`
- **Segurança:** `Aprender cuidados para reconhecer sinais de golpes e situações suspeitas.`
- **Comunicação:** `Usar a tecnologia para conversar, compartilhar e estar mais perto da família.`
- **Vida prática:** `Entender aplicativos e recursos que podem facilitar a rotina.`
- **Inteligência Artificial:** `Conhecer a IA de maneira simples, prática e responsável.`
- **Aprendizado contínuo:** `Acompanhar as mudanças da tecnologia sem precisar recomeçar sozinho.`

#### Método

- **Eyebrow:** `UMA FORMA MAIS HUMANA DE APRENDER`
- **Headline:** `Explicar. Demonstrar. Praticar. Repetir. Ganhar confiança.`
- **Texto:** `Cada assunto é apresentado com linguagem simples e exemplos conhecidos. A pessoa vê como funciona, pratica o que aprendeu e pode rever a explicação quando precisar.`
- **Etapas:**
  - `Explicação` — `entender o assunto sem termos complicados.`
  - `Demonstração` — `ver o passo a passo na prática.`
  - `Prática` — `aplicar em uma situação real.`
  - `Repetição` — `rever e tentar novamente quando necessário.`
  - `Autonomia` — `ganhar mais segurança para fazer sozinho.`
- **CTA:** `CONHECER OS CAMINHOS DO DIGITAL PARA TODOS`

#### Conteúdos

- **Headline:** `Tecnologia explicada a partir da vida real.`
- **Lista:** `Primeiros passos no celular`; `Internet e Wi-Fi`; `Navegação segura`; `WhatsApp`; `Facebook e Instagram`; `Golpes e segurança digital`; `Inteligência Artificial`; `Uber`; `iFood`; `Play Store e aplicativos úteis`.
- **Selo:** `CONTEÚDOS JÁ DISPONÍVEIS E NOVOS TEMAS EM EXPANSÃO`

#### Segurança

- **Selo:** `GOLPE AQUI NÃO!`
- **Headline:** `Conhecimento também é uma forma de proteção.`
- **Texto:** `Quanto mais uma pessoa entende o que aparece na tela, mais preparada ela pode estar para observar mensagens, links, pedidos de dinheiro e situações suspeitas.`
- **Texto:** `O Digital para Todos ensina cuidados digitais de forma simples e prática, para que cada pessoa desenvolva mais atenção e confiança ao usar a tecnologia.`
- **Destaque:** `Aprender para se proteger. Conectar para transformar.`
- **CTA:** `QUERO APRENDER COM MAIS SEGURANÇA` → `/curso`

#### Seletor de jornadas

- **Eyebrow:** `ESCOLHA O CAMINHO QUE FAZ SENTIDO PARA VOCÊ`
- **Headline:** `Como você quer fazer parte do Digital para Todos?`
- **Subheadline:** `Você pode aprender para si, acompanhar alguém importante ou levar o projeto para uma instituição.`

**Aluno**

- **Identificador:** `PARA MIM`
- **Título:** `Quero aprender.`
- **Descrição:** `Tenha mais autonomia, segurança e confiança para usar a tecnologia no seu dia a dia.`
- **Complemento:** `Aprenda de maneira simples, prática e no seu próprio ritmo.`
- **Pontos:** `Para adultos e pessoas 50+`; `Para quem está começando ou tem pouca intimidade com tecnologia`; `Para quem quer usar celular, internet, aplicativos, redes sociais e IA com mais segurança`.
- **CTA:** `QUERO APRENDER` → `/curso`

**Tutor**

- **Identificador:** `PARA ALGUÉM`
- **Título:** `Quero ajudar alguém.`
- **Descrição:** `Acompanhe alguém importante para você nessa jornada digital.`
- **Complemento:** `Tenha acesso ao conteúdo e ajude seu pai, sua mãe, seu filho, um familiar ou alguém que precise de apoio a conquistar mais autonomia.`
- **Pontos:** `Para filhos, netos, familiares, cuidadores e responsáveis`; `Para quem quer aprender junto, não fazer tudo pela outra pessoa`; `Para quem deseja reforçar segurança e confiança no dia a dia`.
- **CTA:** `QUERO SER UM TUTOR` → `/tutor`

**Instituições**

- **Identificador:** `PARA MUITAS PESSOAS`
- **Título:** `Quero levar o projeto para uma instituição.`
- **Descrição:** `Transforme inclusão digital em uma ação de impacto para sua comunidade, equipe ou público atendido.`
- **Complemento:** `Conheça a solução do Digital para Todos para empresas, igrejas, associações, ONGs, projetos sociais e grupos comunitários.`
- **Pontos:** `Para organizações que desejam promover inclusão digital`; `Para projetos com pessoas 50+, idosos ou pessoas com dificuldades digitais`; `Para instituições que precisam de uma solução estruturada e orientada`.
- **CTA:** `CONHECER A SOLUÇÃO` → `/instituicoes`

#### Manifesto final

- **Headline:** `A tecnologia não tem idade.`
- **Texto:** `Talvez você queira aprender para si.`
- **Texto:** `Talvez queira acompanhar alguém que ama.`
- **Texto:** `Talvez queira transformar inclusão digital em uma ação para muitas pessoas.`
- **Texto:** `Em qualquer desses caminhos, o primeiro passo é reconhecer que aprender tecnologia pode ser mais simples, humano e possível.`
- **Destaques:** `Conhecimento protege.`; `Autonomia transforma.`; `Digital para Todos.`
- **CTA:** `ESCOLHER MEU CAMINHO` → `#escolha-seu-caminho`

#### Footer Home

`Digital para Todos — Inclusão digital, autonomia e segurança para pessoas, famílias e instituições.`

### 11.2 `/curso`

#### Hero

- **Eyebrow:** `INCLUSÃO DIGITAL PARA ADULTOS E PESSOAS 50+`
- **Headline:** `Aprenda a usar a tecnologia com mais segurança, confiança e autonomia.`
- **Subheadline:** `Um curso online, simples e prático, para entender melhor o celular, usar WhatsApp, internet, redes sociais, aplicativos e Inteligência Artificial sem medo e no seu próprio ritmo.`
- **CTA principal:** `QUERO APRENDER`
- **CTA secundário:** `VER AS 15 AULAS GRATUITAS`
- **Microcopy:** `Você pode conhecer o jeito Digital para Todos de ensinar antes de decidir.`
- **Selo:** `CONHECIMENTO PROTEGE`

#### Redução de medo

- **Headline:** `Você não precisa saber tecnologia para começar.`
- **Texto:** `Você não precisa chegar sabendo onde clicar, como configurar tudo ou como entender cada aplicativo.`
- **Texto:** `O Digital para Todos foi criado para explicar desde o começo, com calma, exemplos do cotidiano e passos que você pode acompanhar no seu ritmo.`
- **Cards:** `Sem vergonha de perguntar`; `Sem pressa`; `Sem complicação`; `Com possibilidade de revisão`.

#### Identificação

- **Eyebrow:** `TALVEZ VOCÊ JÁ TENHA PASSADO POR ISSO`
- **Headline:** `A tecnologia mudou rápido. Você não precisa aprender tudo sozinho.`
- **Texto:** `O celular ganhou novas funções. Os bancos foram para os aplicativos. As conversas passaram para o WhatsApp. Serviços, compras e informações estão cada vez mais online.`
- **Texto:** `Quando ninguém explica com calma, é natural sentir medo, vergonha ou dependência. O problema não é a sua idade. Muitas pessoas simplesmente não tiveram uma oportunidade de aprender no próprio ritmo.`
- **Cards:** `Medo de clicar errado`; `Dependência para tarefas do dia a dia`; `Receio de golpes`; `Dificuldade com aplicativos`; `Medo das mudanças`; `Vergonha de perguntar`.
- **CTA:** `QUERO APRENDER SEM MEDO`

#### Manifesto

- **Headline:** `Tecnologia deveria unir pessoas, nunca afastá-las.`
- **Texto:** `O Digital para Todos nasceu para ajudar pessoas a participarem de um mundo que se tornou digital.`
- **Texto:** `A tecnologia pode aproximar famílias, facilitar tarefas, ampliar escolhas e trazer mais independência. Mas isso só acontece quando as pessoas têm acesso a uma explicação que respeite seu tempo e sua realidade.`
- **Texto:** `Por isso, nosso trabalho é ensinar com simplicidade, paciência e prática.`
- **Destaques:** `Conhecimento protege.`; `Autonomia transforma.`; `Não existe idade para aprender.`

#### Antes e depois

- **Headline:** `O objetivo não é virar especialista. É conseguir fazer mais coisas com confiança.`
- **Tabela:**
  - `Tenho medo de mexer.` → `Consigo explorar com mais segurança.`
  - `Preciso pedir ajuda para tudo.` → `Consigo realizar algumas tarefas sozinho.`
  - `Não sei se essa mensagem é golpe.` → `Sei observar sinais de alerta.`
  - `Não entendo os aplicativos.` → `Consigo aprender o passo a passo.`
  - `Fiquei para trás.` → `Posso continuar aprendendo.`
  - `Não consigo acompanhar minha família.` → `Consigo conversar e compartilhar mais.`
- **Responsabilidade:** `Os resultados variam conforme o ritmo, a prática e a experiência de cada aluno. A página comunica possibilidades de aprendizagem, não resultados garantidos.`

#### Método

- **Eyebrow:** `COMO VOCÊ VAI APRENDER`
- **Headline:** `Aprender. Praticar. Repetir. Ganhar confiança.`
- **Texto:** `Cada conteúdo começa pelo essencial. Você entende a ideia, acompanha uma demonstração, pratica em uma situação real e pode voltar à explicação quando precisar.`
- **Etapas:** `Explicação`; `Demonstração`; `Prática`; `Repetição`; `Autonomia`.
- **Destaque:** `Tecnologia explicada para quem nunca teve alguém disposto a explicar com calma.`

#### Conteúdo

- **Headline:** `Você começa pelo básico e evolui passo a passo.`
- **Trilhas:** `Primeiros passos no celular`; `Internet e Wi-Fi`; `Navegação com segurança`; `WhatsApp sem medo`; `Facebook e Instagram`; `Golpes e segurança digital`; `Inteligência Artificial`; `Aplicativos úteis`; `Novos conteúdos em desenvolvimento`.
- **Estados:** `JÁ DISPONÍVEL` e `EM EXPANSÃO`.
- **Regra:** quantidade exata de aulas, módulos, páginas e materiais `[PENDENTE — VALIDAÇÃO]`.

#### Demonstração

- **Headline:** `Veja como é uma explicação do Digital para Todos.`
- **Texto:** `Você não precisa imaginar se a linguagem será simples. Veja um exemplo real e conheça o ritmo das explicações.`
- **CTA:** `ASSISTIR À PRÉVIA DO CURSO`

#### 15 aulas gratuitas

- **Selo:** `COMECE ANTES DE DECIDIR`
- **Headline:** `Assista às primeiras 15 aulas gratuitamente.`
- **Texto:** `Conheça o jeito Digital para Todos de ensinar, acompanhe as primeiras explicações e descubra como é possível aprender tecnologia com mais calma e clareza.`
- **Texto:** `Você pode começar pelo conteúdo gratuito e, depois, decidir se deseja continuar sua jornada com o curso completo.`
- **CTA:** `QUERO VER AS 15 AULAS GRATUITAS`
- **Microcopy:** `Fluxo, URL e eventual formulário: [PENDENTE — INTEGRAÇÃO].`

#### Segurança

- **Selo:** `GOLPE AQUI NÃO!`
- **Headline:** `Conhecimento também é uma forma de proteção.`
- **Texto:** `Mensagens, links, pedidos de dinheiro e telas desconhecidas podem gerar dúvida. Aprender a observar sinais de alerta é uma habilidade importante para quem usa a tecnologia todos os dias.`
- **Texto:** `No Digital para Todos, a segurança digital faz parte do aprendizado de forma simples, prática e responsável.`
- **Destaque:** `O curso ensina cuidados e sinais de alerta. Nenhum curso pode prometer eliminar todos os riscos digitais.`
- **CTA:** `QUERO APRENDER A USAR A TECNOLOGIA COM MAIS SEGURANÇA`

#### Inteligência Artificial

- **Eyebrow:** `TECNOLOGIA DE HOJE E DO FUTURO`
- **Headline:** `A Inteligência Artificial também pode ser explicada de forma simples.`
- **Texto:** `Você vai conhecer a Inteligência Artificial como uma ferramenta que pode ajudar em situações do cotidiano — sempre entendendo o que ela faz, como conversar com ela e quais cuidados ter.`
- **Tópicos:** `Conhecendo a Inteligência Artificial`; `Conversando com a IA`; `Criando imagens`; `Usando a IA para resolver problemas do dia a dia`; `Segurança e golpes envolvendo IA`.

#### Público

- **Headline:** `Este curso foi pensado para quem quer aprender sem ser tratado como incapaz.`
- **Lista:** `Quer entender melhor o celular`; `Tem pouca intimidade com tecnologia`; `Precisa pedir ajuda para tarefas digitais`; `Quer usar WhatsApp, redes sociais e aplicativos`; `Tem receio de golpes`; `Quer acompanhar melhor filhos e netos`; `Prefere explicações simples`; `Quer aprender no próprio ritmo`.

#### Não é para

- **Headline:** `Talvez este não seja o curso que você está procurando se...`
- **Lista:** `Busca programação avançada`; `Quer desenvolvimento de aplicativos ou suporte profissional`; `Procura certificação técnica ou acadêmica`; `Espera resultado financeiro`; `Não quer praticar ou acompanhar as explicações`.
- **Texto:** `O Digital para Todos é uma formação de inclusão digital para a vida cotidiana. Seu foco é ajudar pessoas a usar a tecnologia com mais compreensão, segurança e autonomia progressiva.`

#### Prova social

- **Headline:** `Pessoas reais estão aprendendo a participar mais do mundo digital.`
- **Categorias editoriais:** Comunicação; Segurança; Aplicativos; Autonomia.
- **Regra:** usar três a seis depoimentos reais, com nome, contexto, dificuldade, aprendizado, mudança percebida e autorização. Não publicar números sem validação.

#### Autoridade

- **Headline:** `Um projeto criado para ensinar com paciência, respeito e propósito.`
- **Conteúdo:** história, experiência presencial, missão, método e responsáveis.
- **Pendência:** nome, cargo, experiência, formação e certificações `[PENDENTE — USUÁRIO]`.

#### Oferta

- **Headline:** `Ao entrar, você terá acesso a uma jornada de aprendizagem em expansão.`
- **Itens:** curso online; conteúdos cotidianos; videoaulas; materiais complementares; 15 aulas gratuitas; atualizações, suporte, comunidade, Kit, IA e certificado somente conforme validação.
- **Eyebrow:** `COMECE SUA JORNADA DE AUTONOMIA DIGITAL`
- **Headline comercial:** `Um passo simples para aprender tecnologia com mais segurança.`
- **Preço de referência:** `12x de R$ 18,62`; total `R$ 223,44`; à vista `[PENDENTE — USUÁRIO]`.
- **Microcopy:** `Condições finais, formas de pagamento, acesso e reembolso devem corresponder exatamente à oferta ativa no checkout Hotmart.`
- **CTA:** `QUERO APRENDER`

#### Garantia

- **Headline:** `Conheça o curso com clareza antes de tomar sua decisão.`
- **Texto:** `As primeiras 15 aulas gratuitas permitem que você conheça a linguagem e o jeito Digital para Todos de ensinar. A garantia de compra deve ser apresentada conforme o prazo e as regras ativos na oferta Hotmart.`
- **Garantia:** `[PENDENTE — VALIDAÇÃO]`.
- **Acesso:** `[PENDENTE — USUÁRIO]`.

#### CTA final

- **Eyebrow:** `A TECNOLOGIA NÃO TEM IDADE`
- **Headline:** `Você pode continuar aprendendo.`
- **Texto:** `Com uma explicação simples, prática e paciente, a tecnologia pode ficar mais compreensível e fazer mais sentido no seu dia a dia.`
- **Texto:** `Comece pelo básico. Aprenda no seu ritmo. Desenvolva mais confiança para seguir em frente.`
- **CTA:** `QUERO APRENDER`
- **Microcopy:** `Você será direcionado ao checkout Hotmart para consultar as condições atuais.`

### 11.3 `/tutor`

#### Hero

- **Eyebrow:** `PARA QUEM QUER AJUDAR ALGUÉM IMPORTANTE`
- **Headline:** `Você não precisa ensinar tudo. Pode aprender junto e acompanhar.`
- **Subheadline:** `O Digital para Todos ajuda você a acompanhar seu pai, sua mãe, seus avós, seu filho ou alguém que ama na jornada de aprender tecnologia com mais segurança, confiança e autonomia.`
- **CTA:** `QUERO SER UM TUTOR`
- **CTA secundário:** `CONHECER O JEITO DE ENSINAR`
- **Microcopy:** `Uma forma mais organizada, paciente e humana de apoiar alguém no mundo digital.`

#### Identificação

- **Eyebrow:** `TALVEZ VOCÊ JÁ TENHA OUVIDO ISSO`
- **Headline:** `Você pode fazer isso para mim no celular?`
- **Texto:** `A ajuda da família é importante. Mas, muitas vezes, fazer tudo pela outra pessoa resolve o problema de hoje e mantém a dependência para amanhã.`
- **Texto:** `O Tutor ajuda a transformar parte dessa ajuda em acompanhamento: aprender junto, praticar com calma e incentivar pequenos avanços.`
- **Cards:** `Meu pai me chama para tudo`; `Minha mãe tem medo de clicar`; `Meu avô quase caiu em um golpe`; `Quero ajudar sem fazer por ele`; `Moro longe e não consigo estar sempre presente`; `Não sei ensinar`.
- **CTA:** `QUERO ENTENDER COMO SER UM TUTOR`

#### Reenquadramento

- **Headline:** `A melhor ajuda nem sempre é fazer no lugar. Às vezes, é acompanhar até a pessoa conseguir.`
- **Texto:** `O Tutor não precisa transformar cada dúvida em uma aula particular. O conteúdo do Digital para Todos oferece uma base para que o familiar possa acompanhar, conversar, incentivar e reforçar o aprendizado.`
- **Texto:** `A meta não é abandonar a pessoa nem exigir que ela faça tudo sozinha imediatamente. É criar espaço para que ela participe cada vez mais do próprio processo.`
- **Tabela:** `Pegar o celular e fazer tudo` → `Perguntar o que a pessoa já entendeu`; `Corrigir com pressa` → `Repetir a explicação com calma`; `Dizer é só clicar` → `Acompanhar o passo a passo`; `Evitar que tente` → `Criar situação segura de prática`; `Assustar` → `Reforçar cuidados e alertas`.

#### O papel do Tutor

- **Headline:** `O Tutor funciona como apoio durante a jornada de inclusão digital.`
- **Texto:** `O Tutor tem acesso ao conteúdo, entende o que está sendo trabalhado e acompanha a evolução da pessoa que deseja ajudar.`
- **Texto:** `Ele pode aprender junto, assistir a uma aula, conversar sobre o tema, acompanhar a prática e reforçar comportamentos de segurança.`
- **Destaque:** `Ser Tutor não significa substituir o professor, o suporte técnico ou a autonomia da pessoa acompanhada.`
- **Pode:** assistir; entender; organizar prática; incentivar perguntas; reforçar segurança; celebrar avanços; aprender junto.
- **Não precisa:** ser especialista; responder tudo; fazer tudo; prometer ausência de erros; substituir suporte profissional.

#### Jornada

- **Headline:** `Um caminho simples para acompanhar sem pressionar.`
- **Etapas:** `Escolha acompanhar`; `Conheça o conteúdo`; `Combine um ritmo`; `Aprendam juntos`; `Reforce a segurança`; `Incentive a autonomia`.
- **Observação de implementação:** acesso, compartilhamento, cadastro e orientação pós-compra `[PENDENTE — USUÁRIO]`.

#### Benefícios

- **Headline:** `O ganho não é apenas aprender tecnologia. É melhorar a forma de estar presente.`
- **Para a pessoa:** mais confiança, menos vergonha, prática, atenção a riscos, autonomia progressiva e conversa com a família.
- **Para o Tutor:** caminho estruturado, compreensão do conteúdo, menos improviso, incentivo sem pressão, aprendizagem conjunta e cuidado convertido em autonomia.
- **Destaque:** `Você oferece o apoio. O Digital para Todos oferece o caminho.`

#### Método e conteúdos

- **Headline:** `O conteúdo já vem organizado para começar pelo básico.`
- **Texto:** `O Digital para Todos utiliza explicações simples, demonstrações e prática. Isso ajuda o Tutor a entender onde a pessoa está na jornada e qual assunto pode ser trabalhado em seguida.`
- **Método:** `Explicação → Demonstração → Prática → Repetição → Autonomia`.
- **CTA:** `QUERO ACOMPANHAR ESSA JORNADA`.
- **Conteúdos:** celular; internet e Wi-Fi; WhatsApp; Facebook e Instagram; segurança; IA; Uber; iFood; Play Store; conteúdos em expansão.

#### Prévia

- **Eyebrow:** `ANTES DE COMPRAR, CONHEÇA O MÉTODO`
- **Headline:** `Assista às primeiras 15 aulas e veja como o conteúdo é explicado.`
- **Texto:** `Você pode conhecer a linguagem, o ritmo e a abordagem do Digital para Todos antes de apresentar o curso à pessoa que deseja acompanhar.`
- **CTA:** `VER AS 15 AULAS GRATUITAS`

#### Segurança

- **Headline:** `Cuidar também é ajudar a reconhecer situações de risco.`
- **Texto:** `Golpes digitais costumam gerar medo, vergonha e silêncio. Uma conversa simples sobre mensagens, links, pedidos de dinheiro e informações pessoais pode ajudar a criar mais atenção no dia a dia.`
- **Texto:** `O Digital para Todos apresenta cuidados de forma acessível para que o aluno e o Tutor possam conversar sobre segurança sem transformar a tecnologia em motivo de pânico.`
- **Selo:** `GOLPE AQUI NÃO!`
- **CTA:** `QUERO APRENDER A ACOMPANHAR COM MAIS SEGURANÇA`

#### Prova social

- **Headline:** `Quem acompanha também vive uma transformação.`
- **Categorias:** `Comprei para os meus pais`; `Aprendemos juntos`; `Passei a explicar com mais calma`; `Minha família ficou mais atenta aos golpes`.
- **Regra:** usar somente relatos reais, identificados e autorizados.

#### Oferta Tutor

- **Headline provisória:** `Transforme sua ajuda em uma jornada de aprendizagem.`
- **Deve explicar:** o que o Tutor recebe; quem acessa; como o aluno participa; se o Tutor aprende; orientação; suporte; preço; acesso; garantia e atendimento.
- **Pendências:** produto/oferta; acessos; compartilhamento; cadastro; orientação; preço; garantia; tempo; suporte; checkout.
- **CTA:** `QUERO SER UM TUTOR`.
- **Microcopy:** `Você será direcionado ao checkout Hotmart para consultar as condições da oferta.`

#### CTA final

- **Eyebrow:** `APRENDER JUNTO TAMBÉM É UMA FORMA DE CUIDAR`
- **Headline:** `Ajude alguém que você ama a conquistar mais autonomia digital.`
- **Texto:** `Você não precisa ter todas as respostas. Pode oferecer um caminho, acompanhar os primeiros passos e estar presente enquanto a pessoa aprende.`
- **CTA:** `QUERO SER UM TUTOR`
- **CTA secundário:** `VER AS 15 AULAS GRATUITAS`
- **Microcopy:** `Condições de acesso, oferta e suporte serão apresentadas de acordo com a configuração final do produto.`

### 11.4 `/instituicoes`

#### Hero

- **Eyebrow:** `INCLUSÃO DIGITAL PARA ORGANIZAÇÕES E COMUNIDADES`
- **Headline:** `Leve o Digital para Todos para sua instituição.`
- **Subheadline:** `Uma solução estruturada para ajudar pessoas a usar a tecnologia com mais segurança, autonomia e confiança — em empresas, igrejas, associações, ONGs, projetos sociais e grupos comunitários.`
- **CTA:** `SOLICITAR UMA APRESENTAÇÃO`
- **CTA secundário:** `CONHECER COMO FUNCIONA`
- **Microcopy:** `Conte-nos sobre sua instituição, seu público e o que deseja realizar. A equipe avaliará o melhor formato de conversa.`

#### Problema

- **Eyebrow:** `QUANDO A EXCLUSÃO DIGITAL LIMITA A PARTICIPAÇÃO`
- **Headline:** `Muitas pessoas precisam de mais do que acesso: precisam de explicação, prática e apoio.`
- **Texto:** `Para participar plenamente da vida atual, não basta ter um celular ou uma conexão. É preciso entender como usar os recursos, reconhecer riscos, praticar e ter alguém ou alguma organização que ofereça apoio quando surgirem dúvidas.`
- **Texto:** `Quando esse suporte não existe, pessoas podem depender de familiares para tarefas simples, evitar serviços digitais, deixar de participar de conversas e ficar mais expostas a golpes.`
- **Texto:** `Sua instituição pode ajudar a reduzir essa distância com uma ação de aprendizagem organizada, acolhedora e conectada à vida real.`
- **Cards:** `Público dependente`; `Equipe sobrecarregada`; `Ação sem continuidade`; `Risco e insegurança`.
- **CTA:** `CONVERSAR SOBRE A NECESSIDADE DA MINHA INSTITUIÇÃO`

#### Solução

- **Eyebrow:** `UMA SOLUÇÃO DE EDUCAÇÃO E INCLUSÃO DIGITAL`
- **Headline:** `Um caminho organizado para ensinar tecnologia a partir da vida real.`
- **Texto:** `O Digital para Todos combina conteúdos práticos, explicações simples e uma metodologia progressiva para apoiar pessoas que desejam usar melhor o celular, a internet, os aplicativos e as novas ferramentas digitais.`
- **Texto:** `A instituição pode levar essa proposta ao seu público em um formato a ser definido conforme o número de participantes, o contexto, os recursos disponíveis e o nível de acompanhamento necessário.`
- **Destaque:** `Inclusão digital acontece quando as pessoas conseguem participar, praticar e seguir aprendendo.`
- **Pilares:** Autonomia; Segurança; Participação; Aprendizado contínuo; Acolhimento.

#### Contextos

- **Headline:** `Uma mesma missão, diferentes contextos de aplicação.`
- **Empresas:** `Ações de responsabilidade social, inclusão digital para colaboradores, apoio a familiares de colaboradores ou programas para comunidades do entorno.`
- **Igrejas:** `Projetos de apoio a membros, famílias, pessoas 50+ e comunidades atendidas pela igreja.`
- **Associações:** `Capacitação de associados, atividades para a comunidade e fortalecimento da participação em serviços digitais.`
- **ONGs e projetos sociais:** `Uma trilha estruturada para apoiar públicos que enfrentam barreiras de acesso, confiança ou habilidades digitais.`
- **Grupos comunitários:** `Encontros de aprendizagem coletiva, convivência e troca de experiências.`
- **Escolas e centros de convivência:** `Atividades para adultos, pessoas mais velhas, familiares e comunidades escolares.`
- **Órgãos públicos:** `Possibilidades de parceria, programas ou ações de inclusão, condicionadas ao modelo de contratação e requisitos da instituição.`
- **CTA:** `VER COMO O PROJETO PODE SE APLICAR À MINHA ORGANIZAÇÃO`

#### Público atendido

- **Headline:** `Quem sua instituição deseja ajudar a participar mais do mundo digital?`
- **Lista:** pessoas 50+; pessoas idosas; adultos com pouca intimidade; famílias; pessoas dependentes de terceiros; comunidades com pouca capacitação; colaboradores e familiares; pessoas com deficiência após avaliação; públicos de projetos sociais.
- **Nota:** `O projeto deve adaptar linguagem, recursos e suporte ao público. Não prometer acessibilidade especializada ou atendimento individual sem diagnóstico.`

#### Metodologia

- **Eyebrow:** `UMA METODOLOGIA SIMPLES, PRÁTICA E PROGRESSIVA`
- **Headline:** `A pessoa aprende quando consegue entender, praticar e tentar novamente.`
- **Texto:** `A metodologia parte do essencial e utiliza situações que fazem sentido no cotidiano. O conteúdo pode ser apresentado, demonstrado e praticado de forma gradual, respeitando o ritmo do público.`
- **Etapas:** Explicação; Demonstração; Prática; Repetição; Autonomia.
- **Temas:** celular, internet, Wi-Fi, WhatsApp, redes, segurança, golpes, IA, Uber, iFood, Play Store e aplicativos.
- **CTA:** `SOLICITAR UMA CONVERSA SOBRE A METODOLOGIA`

#### Formatos

- **Headline:** `O formato pode ser definido de acordo com a realidade da sua instituição.`
- **Possibilidades:** licença/acessos; turmas presenciais apoiadas por conteúdo online; programa para colaboradores e familiares; projeto comunitário; formação de tutores/monitores; programa personalizado.
- **Texto:** `O Digital para Todos pode ser avaliado em diferentes formatos de implementação. Após compreender o público, o número de participantes, o espaço, os equipamentos e o objetivo da organização, a equipe poderá apresentar as opções compatíveis.`
- **Regra:** não publicar preço, número mínimo, prazo ou personalização sem validação.

#### Entregáveis

- **Texto:** `A entrega institucional será definida de acordo com o objetivo, o público e o formato escolhido. A proposta comercial deverá deixar claro o que está incluído, o que depende de contratação adicional e quais responsabilidades cabem à instituição.`
- **Itens possíveis:** acesso, materiais, orientação, treinamento, suporte, relatórios, comunidade e certificados; todos com status de validação.

#### Implantação

- **Headline:** `Da primeira conversa à implementação, cada etapa deve ser clara.`
- **Etapas:** solicitação; contato; diagnóstico; apresentação; proposta; contratação e implantação.
- **Microcopy:** `Você não está assumindo um compromisso ao solicitar a apresentação. Este primeiro contato serve para entender sua necessidade e verificar se o Digital para Todos é adequado ao seu contexto.`

#### Benefícios

- **Headline:** `Uma ação de inclusão pode gerar valor para quem participa e para quem implementa.`
- **Público:** mais oportunidades de aprender, praticar, comunicar, reconhecer riscos e participar.
- **Equipe:** referência organizada para apoiar dúvidas.
- **Organização:** iniciativa que pode fortalecer responsabilidade social, cuidado comunitário e participação.
- **Parceiros:** proposta com objetivos, público, metodologia e etapas mais claros.

Usar `pode`, `ajuda a`, `contribui para` e `possibilita` sem dados de impacto.

#### Impacto

- **Headline:** `O impacto começa com objetivos claros e acompanhamento responsável.`
- **Texto:** `Cada organização pode definir o que deseja acompanhar: participação, conclusão de atividades, presença nos encontros, uso de determinados recursos, evolução percebida, confiança para realizar tarefas ou relatos do público atendido.`
- **Indicadores possíveis:** alcance; participação; aprendizagem percebida; segurança; autonomia; continuidade.
- **Regra:** indicadores são sugestões, não resultados existentes.

#### Provas

- **Headline:** `Uma proposta institucional precisa ser apoiada por evidências reais.`
- **Materiais:** fotos, relatos, depoimentos, vídeo, materiais, linha do tempo, números validados e logos autorizados.
- **Case:** contexto, público, necessidade, formato, realização, percepção/resultados e identificação/autorização.
- **Copy provisória:** `O Digital para Todos reúne uma proposta de inclusão digital baseada em conteúdos práticos e experiências de aprendizagem. A equipe está organizando os registros e os formatos institucionais para apresentar cada possibilidade com transparência.`

#### Formulário

- **Título:** `Vamos entender o que sua instituição deseja realizar.`
- **Texto:** `Preencha os dados abaixo e conte brevemente sobre o público que deseja atender. A equipe entrará em contato para avaliar o melhor caminho.`
- **Campos:** nome; instituição; cargo; e-mail; WhatsApp; tipo de instituição; cidade/estado; público; número de participantes; objetivo; prazo; mensagem.
- **CTA:** `SOLICITAR APRESENTAÇÃO`
- **Consentimento:** `Ao enviar seus dados, você concorda que o Digital para Todos os utilize para responder à sua solicitação e conduzir o contato relacionado à solução institucional, conforme a Política de Privacidade.`
- **Sucesso:** `Solicitação recebida.` / `Obrigado por apresentar sua necessidade. Nossa equipe recebeu os dados e entrará em contato pelo canal informado para entender melhor o projeto e orientar os próximos passos.`

#### WhatsApp

- **CTA:** `FALAR COM A EQUIPE PELO WHATSAPP`
- **Número:** `[PENDENTE — CREDENCIAL]`
- **Mensagem:** `Olá. Quero conhecer a solução institucional do Digital para Todos para [nome da instituição]. Desejo atender aproximadamente [número] pessoas e gostaria de entender os formatos disponíveis.`

#### CTA final

- **Eyebrow:** `INCLUSÃO DIGITAL COMEÇA COM UMA CONVERSA CLARA`
- **Headline:** `Sua instituição pode ajudar mais pessoas a participar do mundo digital.`
- **Texto:** `Conte-nos quem você deseja atender, qual desafio está enfrentando e o que gostaria de construir. A equipe do Digital para Todos poderá apresentar os formatos compatíveis com a realidade da sua organização.`
- **CTA:** `SOLICITAR UMA APRESENTAÇÃO`
- **CTA secundário:** `FALAR PELO WHATSAPP`
- **Microcopy:** `O primeiro contato não representa compromisso de contratação.`

---

## 12. IDENTIDADE VISUAL

### Conceito visual

A identidade deve combinar inclusão, confiança, educação, acolhimento e modernidade. O visual deve ser contemporâneo e colorido com controle, sem parecer infantil ou excessivamente tecnológico.

O logotipo mostra um globo, três figuras humanas e a assinatura `Novo Digital para Todos`. A leitura visual deve sugerir conexão global, diversidade, participação e colaboração.

### Personalidade

Humana, paciente, clara, acolhedora, confiável, educativa, inclusiva, otimista sem exagero, prática e contemporânea.

### Paleta

Os valores abaixo são tokens provisórios aproximados a partir dos arquivos oficiais e devem ser validados antes da publicação.

| Nome | HEX provisório | Função |
|---|---|---|
| Azul-marinho Digital | `#0B2B5B` | Texto principal, header, confiança e fundos escuros |
| Azul de conexão | `#1467B3` | Links, estados informativos e detalhes |
| Verde autonomia | `#54B948` | Inclusão, segurança e estados positivos |
| Laranja ação | `#F58220` | CTA principal e pontos de ação |
| Roxo IA | `#8E24AA` | Complementar controlado para IA |
| Branco | `#FFFFFF` | Texto sobre fundos escuros e áreas limpas |
| Fundo claro | `#F6F9FC` | Blocos de leitura |
| Fundo creme | `#FFF7E8` | Acolhimento e respiro |
| Texto escuro | `#16233D` | Corpo e headings em fundo claro |
| Cinza de apoio | `#667085` | Texto secundário e microcopy |
| Borda | `#D9E2EC` | Cards, inputs e divisores |

Validar contraste. Não usar laranja ou verde como único indicador de estado.

### Tipografia

Nenhuma família foi definida.

- **Heading:** `[PENDENTE — VALIDAÇÃO]`; decisão provisória: sans-serif legível, peso 600–800.
- **Body:** `[PENDENTE — VALIDAÇÃO]`; sans-serif acessível, peso 400–500.
- **Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif`.

Claude deve escolher uma família adequada ao ambiente, priorizando leitura mobile. Não usar fonte cursiva do logo no texto do site.

### Hierarquia

Uma H1 por página. H2 inicia seções. H3 organiza cards, etapas e perguntas. Corpo de referência 17–19px. Parágrafos curtos.

### Bordas, radius e sombras

Cards com borda suave e radius de 20–28px. Inputs e botões com radius de 12–16px. Sombra suave:

```css
box-shadow: 0 12px 32px rgba(11, 43, 91, 0.10);
```

Não transformar todos os elementos em 3D.

### Gradientes e ícones

Gradiente azul opcional, discreto e com contraste validado. CTA laranja sólido por padrão. Usar ícones lineares grandes e consistentes; não usar emojis como ícones principais.

### Espaçamento e grid

Usar escala consistente de 8px ou equivalente. Container desktop aproximado de 1120–1240px, a validar. Hero em duas colunas; jornadas em três colunas desktop; tablet em duas; mobile em uma.

### Fundos

Alternar branco, claro, azul-marinho e creme com intenção. Não usar fundo escuro para todos os depoimentos. Garantir leitura em todas as combinações.

---

## 13. DIREÇÃO DE ARTE

A atmosfera deve ser acolhedora, segura, otimista e real. O visitante deve enxergar pessoas participando de uma aprendizagem possível.

Preferir fotografia documental natural de adultos, pessoas 50+, familiares, tutores e grupos comunitários usando celulares ou outros dispositivos. Diversidade de idade, cor, gênero, relações e ambientes é desejável.

Usar luz natural ou suave, sem contraste dramático. Evitar iluminação clínica, futurista ou publicitária excessiva. Profundidade deve vir de fotografia, espaço e sombra leve.

Todo Hero deve reservar espaço negativo real para headline, subheadline e CTA. Não gerar textos ou logotipos dentro de imagens. Usar crop responsivo, WebP/AVIF, alt text e `object-position` adequado.

Evitar pessoas mais velhas infantilizadas, familiares fazendo tudo, telas ilegíveis, logos sem autorização, fotografia genérica, neon, partículas, excesso de 3D, textos incorporados e promessas médicas, financeiras ou de segurança absoluta.

---

## 14. PLANO DE IMAGENS

Todas as imagens geradas devem ser salvas em `public/images/`. O logotipo deve ser copiado dos assets compartilhados. Não inserir textos, logos ou headlines nas imagens geradas.

| ID semântico | Arquivo final sugerido | Seção | Prioridade | Proporção |
|---|---|---|---|---|
| `home-hero-family-learning` | `public/images/home-hero-family-learning.webp` | Home Hero | Alta | 4:3 ou 16:10 |
| `home-community-learning` | `public/images/home-community-learning.webp` | Home prova | Média | 4:3 |
| `home-globe-people` | `public/images/home-globe-people.webp` | Home manifesto | Média | 1:1 |
| `course-hero-adult-confident` | `public/images/course-hero-adult-confident.webp` | `/curso` Hero | Alta | 4:3 ou 16:10 |
| `course-preview-class` | `public/images/course-preview-class.webp` | `/curso` demonstração | Alta | 16:9 |
| `course-security-learning` | `public/images/course-security-learning.webp` | Segurança | Média | 4:3 |
| `course-ai-learning` | `public/images/course-ai-learning.webp` | IA | Média | 4:3 |
| `tutor-hero-generations` | `public/images/tutor-hero-generations.webp` | `/tutor` Hero | Alta | 4:3 ou 16:10 |
| `tutor-shared-practice` | `public/images/tutor-shared-practice.webp` | `/tutor` método | Alta | 4:3 |
| `tutor-family-security` | `public/images/tutor-family-security.webp` | Segurança familiar | Média | 4:3 |
| `institution-hero-community-class` | `public/images/institution-hero-community-class.webp` | `/instituicoes` Hero | Alta | 4:3 ou 16:10 |
| `institution-workshop` | `public/images/institution-workshop.webp` | Aplicação/prova | Alta | 4:3 |
| `institution-team-meeting` | `public/images/institution-team-meeting.webp` | Implantação | Média | 4:3 |
| `brand-logo-horizontal` | `public/images/brand/logo-horizontal.png` | Header/footer | Obrigatória | Original |
| `brand-logo-3d` | `public/images/brand/logo-3d-profile.png` | Selo/apoio | Obrigatória | Original |

### Prompt Home Hero

> Fotografia documental natural, contemporânea e acolhedora de três gerações brasileiras em sala iluminada por luz natural, pessoa 50+ no centro usando smartphone com autonomia e expressão de confiança, familiar mais jovem como apoio, todos participando da aprendizagem, ambiente doméstico ou comunitário real, composição horizontal com espaço negativo limpo no lado esquerdo para texto, cores naturais com detalhes azul-marinho, verde e laranja, diversidade brasileira, clima de conexão e dignidade, sem aparência de banco de imagens. Não incluir texto, logotipo, marca, interface legível ou símbolo. Não representar a pessoa mais velha como incapaz, assustada, infantilizada ou passiva. Não usar estética futurista, neon ou excesso de tecnologia.

### Prompt `/curso` Hero

> Fotografia documental de pessoa adulta brasileira com mais de 50 anos aprendendo a usar smartphone em mesa clara, expressão de confiança, postura ativa e mão segurando o celular, ambiente simples e luminoso, composição horizontal com espaço negativo à esquerda para headline, iluminação natural suave, paleta azul-marinho, verde, branco e laranja, sensação de segurança e aprendizagem possível. Não incluir texto, logotipo, números, interface legível ou marcas. Não usar pessoa confusa, apavorada, infantilizada ou dependente. Não usar hologramas, neon ou anúncio genérico.

### Prompt `/tutor` Hero

> Fotografia documental natural de duas pessoas de gerações diferentes aprendendo juntas em casa ou centro comunitário brasileiro, pessoa 50+ segura o smartphone e toca na tela enquanto familiar mais jovem observa sem tomar o aparelho, expressão de cumplicidade e paciência, composição horizontal com espaço negativo para texto, luz natural, cores reais, sensação de cuidado, autonomia e aprendizagem compartilhada. Não incluir texto, logotipo, marca ou interface legível. Não representar familiar fazendo tudo. Não usar infantilização, medo ou estética médica.

### Prompt `/instituicoes` Hero

> Fotografia documental de atividade coletiva de inclusão digital em associação, igreja, biblioteca ou centro comunitário brasileiro, grupo diverso de adultos e pessoas 50+ usando smartphones em mesa, facilitador ao fundo apoiando sem dominar, ambiente acolhedor e organizado, sensação de participação e comunidade, composição horizontal com espaço negativo à esquerda para texto, iluminação natural, cores azul-marinho, verde, laranja e branco. Não incluir texto, logotipo, nomes de instituições ou interfaces legíveis. Não retratar público como objeto de caridade, incapaz ou passivo. Não usar imagem corporativa fria.

### Prompt de segurança digital

> Ilustração editorial limpa e acessível sobre segurança digital para adultos e pessoas 50+, smartphone sobre mesa com lupa, escudo abstrato e sinais visuais de atenção, composição simples, cores azul-marinho, verde e laranja, fundo claro, linguagem educativa e não alarmista, espaço negativo para composição. Não inserir textos, links, números, logotipos, telas legíveis ou exemplos de golpes reais. Não usar hacker encapuzado ou estética de medo.

### Assets que devem ser reais

Screenshots do curso, slides, materiais, vídeos de aulas, depoimentos, fotos de turmas, logos de parceiros, cases institucionais, certificado e prints de plataforma. Se não existirem, usar `[PENDENTE — CONTEÚDO]` e não fabricar.

---

## 15. HERO — ESPECIFICAÇÃO DETALHADA

### Home

- **Altura:** aproximadamente 620–760px desktop, ajustável ao conteúdo.
- **Grid:** texto 45–50%, imagem 50–55%.
- **Headline:** `Tecnologia deveria unir pessoas, nunca afastá-las.`
- **Subheadline:** mensagem institucional já definida.
- **CTA:** `ESCOLHER COMO QUERO PARTICIPAR`.
- **Imagem:** `home-hero-family-learning`.
- **Background:** branco ou muito claro.
- **Responsividade:** headline, subheadline e CTA devem continuar antes de texto longo; imagem pode seguir o texto no mobile.
- **Animação:** entrada suave opcional; respeitar redução de movimento.

### `/curso`

- **Headline:** `Aprenda a usar a tecnologia com mais segurança, confiança e autonomia.`
- **Subheadline:** curso online simples e prático.
- **CTA:** `QUERO APRENDER`.
- **CTA secundário:** `VER AS 15 AULAS GRATUITAS`.
- **Imagem:** `course-hero-adult-confident` ou vídeo com poster.
- **Regra:** o CTA de compra deve aparecer sem rolagem excessiva.

### `/tutor`

- **Headline:** `Você não precisa ensinar tudo. Pode aprender junto e acompanhar.`
- **Subheadline:** acompanhar pai, mãe, avós, filho ou alguém amado.
- **CTA:** `QUERO SER UM TUTOR`.
- **Imagem:** `tutor-hero-generations`.
- **Prova:** `Aprender junto também é uma forma de cuidar.`

### `/instituicoes`

- **Headline:** `Leve o Digital para Todos para sua instituição.`
- **Subheadline:** solução estruturada para organizações e comunidades.
- **CTA:** `SOLICITAR UMA APRESENTAÇÃO`.
- **Imagem:** `institution-hero-community-class`.
- **Regra:** não mostrar preço ou checkout no Hero institucional.

---

## 16. COMPONENTES

### Compartilhados

| Componente | Função | Conteúdo | Estados | Comportamento |
|---|---|---|---|---|
| `SiteHeader` | Identificar marca e navegação | Logo, âncoras e CTA | Normal, sticky, menu aberto | Menu mobile simples |
| `BrandLogo` | Renderizar logo | Logo horizontal e 3D | Claro/escuro, erro | Fallback textual e alt |
| `HeroSection` | Apresentar proposta | Eyebrow, H1, texto, CTA, imagem | Normal, loading | Grid desktop e coluna mobile |
| `PrimaryCTA` | Ação de conversão | Texto, URL, tracking | Default, hover, focus, disabled | Link ou botão claro |
| `PathSelector` | Roteamento da Home | Cards Aluno, Tutor, Instituições | Normal, hover, focus | Card e botão levam à rota |
| `BenefitCard` | Apresentar benefício | Ícone, título, texto | Normal, hover, focus | Sem interação obrigatória |
| `MethodSteps` | Explicar metodologia | Cinco etapas | Normal, active opcional | Pode revelar etapa ao foco |
| `CurriculumAccordion` | Mostrar currículo | Trilhas e estados | Fechado, aberto, focus | Uma trilha por vez no mobile |
| `VideoPreview` | Demonstrar aula | Poster, vídeo, legenda | Poster, playing, paused, erro | Play sob ação do usuário |
| `TestimonialCard` | Prova social | Foto/vídeo, nome, contexto, transcrição | Normal, modal opcional | Sem autoplay obrigatório |
| `FAQAccordion` | Responder objeções | Pergunta e resposta | Fechado, aberto, focus | Teclado e leitores de tela |
| `WhatsAppButton` | Contato rápido | CTA e mensagem | Normal, hover, focus | Link configurável |
| `PersistentMobileCTA` | Facilitar conversão | CTA por rota | Oculto, visível | Aparece após contexto do Hero |
| `Footer` | Confiança e informação legal | Logo, links, políticas, contato | Normal | Links reais |

### Específicos

| Componente | Rota | Função |
|---|---|---|
| `StudentOffer` | `/curso` | Mostrar oferta, preço e CTA configurável |
| `CoursePreview` | `/curso` | Mostrar aula, screenshot e material |
| `SecuritySection` | `/curso` e `/tutor` | Explicar segurança sem promessa absoluta |
| `AISection` | `/curso` | Mostrar IA de forma simples e responsável |
| `TutorJourney` | `/tutor` | Explicar acompanhamento e papel do Tutor |
| `FamilySituationCards` | `/tutor` | Identificação com dores familiares |
| `AccessRulesBlock` | `/tutor` | Exibir regras configuráveis de acesso |
| `InstitutionSolution` | `/instituicoes` | Apresentar proposta institucional |
| `ImplementationFormats` | `/instituicoes` | Mostrar formatos com status de validação |
| `InstitutionCaseStudy` | `/instituicoes` | Case real autorizado |
| `InstitutionLeadForm` | `/instituicoes` | Captar lead para diagnóstico |
| `SuccessMessage` | `/instituicoes` | Confirmar recebimento e próximo passo |

Não impor framework. Claude pode usar React, Vue, HTML/CSS/JS ou outra solução adequada ao ambiente. Componentes devem consumir dados configuráveis e não espalhar preço, URLs, IDs ou pendências.

---

## 17. INTERAÇÕES E ANIMAÇÕES

| Elemento | Trigger | Comportamento | Intensidade | Mobile | Fallback |
|---|---|---|---|---|---|
| Header sticky | Scroll | Header compacto mantendo logo e CTA | Baixa | Pode permanecer sticky | Header estático |
| CTA | Hover/focus | Mudança de contraste e sombra suave | Baixa | Estado de toque | Sem animação |
| Card de jornada | Hover/focus | Elevação mínima e borda de destaque | Baixa | Focus/tap sem salto | Estado estático |
| Método | Entrada na viewport | Fade/translate pequeno | Baixa | Reduzir | Exibir imediatamente |
| Accordion | Clique/teclado | Abrir conteúdo com altura natural | Média | Igual | Abrir sem animação |
| Vídeo | Clique no play | Reproduzir com controles | Nenhuma automática | Controles nativos | Poster e transcrição |
| Formulário | Submit | Loading, sucesso ou erro | Baixa | Não bloquear teclado | Mensagem textual |
| CTA persistente | Scroll após Hero | Exibir barra inferior | Baixa | Apenas mobile | CTA no fluxo |

Respeitar `prefers-reduced-motion`. Não usar autoplay com som, parallax pesado, contador animado, confetes ou carrossel automático de depoimentos.

---

## 18. RESPONSIVIDADE

### Desktop

Usar container amplo com limite definido pelo layout; Hero em duas colunas; cards de jornadas em três colunas; benefícios em duas ou três; currículo em accordion ou grid; formulário institucional em duas colunas somente quando não prejudicar leitura.

### Tablet

O Hero pode permanecer em duas colunas se houver espaço. Caso contrário, usar texto acima e imagem abaixo. Cards de jornada podem usar duas colunas ou uma, conforme largura. Formulários devem manter labels completos.

### Mobile

Mobile não é desktop comprimido. A ordem padrão é logo/header, headline, subheadline, CTA, imagem e contexto. Cards, benefícios e FAQ ficam em uma coluna. Jornadas aparecem na ordem Aluno, Tutor, Instituições. Botões têm área de toque ampla e espaçamento.

O CTA persistente inferior só aparece depois de o Hero e a proposta de valor serem apresentados. Tabelas viram cards ou listas sem overflow horizontal. Accordions abrem uma trilha por vez quando houver muito conteúdo. O formulário usa teclado adequado, labels visíveis e mensagens claras. Nenhuma seção pode causar rolagem horizontal.

---

## 19. FORMULÁRIOS E CONVERSÃO

### Checkout Aluno

- **CTA:** `QUERO APRENDER`.
- **Destino:** `studentCheckoutUrl = [PENDENTE — INTEGRAÇÃO]`.
- **Comportamento:** encaminhar para Hotmart conforme configuração final.
- **Configuração:** uma única URL centralizada.
- **Tracking:** `course_begin_checkout`, `course_purchase`, origem e UTMs.
- **Não fazer:** checkout próprio, dados pessoais no código ou preço duplicado em componentes.

### Checkout Tutor

- **CTA:** `QUERO SER UM TUTOR`.
- **Destino:** `tutorCheckoutUrl = [PENDENTE — INTEGRAÇÃO]`.
- **Bloqueios:** produto, preço, acessos, compartilhamento, cadastro, garantia e suporte.
- **Tracking:** `tutor_begin_checkout`, `tutor_purchase` e abandono por dúvida de acesso.

### Formulário institucional

**Campos:** Nome; Instituição; Cargo ou função; E-mail; WhatsApp; Tipo de instituição; Cidade/estado; Público; Número aproximado de participantes; Objetivo principal; Prazo desejado; Mensagem adicional.

**Campos obrigatórios:** Nome, instituição, cargo, e-mail, tipo de instituição, público e objetivo. WhatsApp é obrigatório se for o canal de retorno.

**Opções de tipo:** Empresa; Igreja; Associação; ONG ou projeto social; Escola ou centro de convivência; Grupo comunitário; Órgão público; Outra organização.

**Opções de objetivo:** Criar projeto para pessoas 50+; Apoiar comunidade; Ação de responsabilidade social; Capacitar colaboradores/familiares; Apoiar projeto social; Organizar encontros; Conhecer parceria; Outro.

**Validação:** e-mail válido; telefone compatível; obrigatórios preenchidos; mensagens explicativas; labels visíveis; proteção anti-spam conforme integração.

**Erro:** `Revise os campos destacados para continuarmos. Cada campo informa o que precisa ser corrigido.`

**Sucesso:**

- **Título:** `Solicitação recebida.`
- **Texto:** `Obrigado por apresentar sua necessidade. Nossa equipe recebeu os dados e entrará em contato pelo canal informado para entender melhor o projeto e orientar os próximos passos.`
- **WhatsApp:** `Se o contato for urgente, fale conosco pelo WhatsApp oficial: [PENDENTE — CREDENCIAL].`

**Destino:** `institutionLeadEndpoint = [PENDENTE — INTEGRAÇÃO]`.

**CRM/e-mail/planilha:** `[PENDENTE — INTEGRAÇÃO]`.

**Responsável pelo lead:** `[PENDENTE — USUÁRIO]`.

**Consentimento:** `Ao enviar seus dados, você concorda que o Digital para Todos os utilize para responder à sua solicitação e conduzir o contato relacionado à solução institucional, conforme a Política de Privacidade.` A redação final deve ser revisada juridicamente.

### WhatsApp

- **CTA institucional:** `FALAR COM A EQUIPE PELO WHATSAPP`.
- **Número:** `[PENDENTE — CREDENCIAL]`.
- **Mensagem:** `Olá. Quero conhecer a solução institucional do Digital para Todos para [nome da instituição]. Desejo atender aproximadamente [número] pessoas e gostaria de entender os formatos disponíveis.`
- **Posicionamento:** próximo ao formulário e no CTA final.
- **Comportamento:** abrir link oficial e registrar clique quando possível.

---

## 20. SEO

### Home `/`

- **SEO Title:** `Digital para Todos | Inclusão Digital para Pessoas, Famílias e Instituições`
- **Meta Description:** `Aprenda, acompanhe alguém ou leve uma solução de inclusão digital para sua instituição com o Digital para Todos.`
- **H1:** `Tecnologia deveria unir pessoas, nunca afastá-las.`
- **H2:** usar problema, solução, método, seletor e manifesto.
- **Slug:** `/`.
- **Canonical:** domínio final `[PENDENTE — USUÁRIO]`.
- **Open Graph title:** `Digital para Todos — Inclusão digital para pessoas, famílias e instituições`.
- **Open Graph description:** `Escolha como participar: aprender, ajudar alguém ou levar o projeto para uma instituição.`
- **Open Graph image:** `home-hero-family-learning.webp`.
- **Schema:** Organization, WebSite e WebPage, somente com dados verdadeiros.

### `/curso`

- **SEO Title:** `Curso Digital para Todos | Aprenda Tecnologia com Segurança`
- **Meta Description:** `Curso online de inclusão digital para aprender celular, internet, WhatsApp, aplicativos, segurança e Inteligência Artificial no seu ritmo.`
- **H1:** `Aprenda a usar a tecnologia com mais segurança, confiança e autonomia.`
- **Slug:** `/curso`.
- **Canonical:** `[PENDENTE — USUÁRIO]`.
- **Open Graph image:** `course-hero-adult-confident.webp`.
- **Schema:** Course e FAQPage somente quando instrutor, duração, preço e respostas forem verdadeiros e completos.

### `/tutor`

- **SEO Title:** `Tutor Digital para Todos | Aprenda Junto e Acompanhe Alguém`
- **Meta Description:** `Conheça a jornada Tutor do Digital para Todos e ajude alguém que você ama a conquistar mais autonomia e segurança digital.`
- **H1:** `Você não precisa ensinar tudo. Pode aprender junto e acompanhar.`
- **Slug:** `/tutor`.
- **Canonical:** `[PENDENTE — USUÁRIO]`.
- **Open Graph image:** `tutor-hero-generations.webp`.
- **Schema:** Course/Product apenas após oferta confirmada; FAQPage quando as respostas estiverem finais.

### `/instituicoes`

- **SEO Title:** `Inclusão Digital para Instituições | Digital para Todos`
- **Meta Description:** `Leve uma solução estruturada de inclusão digital para sua empresa, igreja, associação, ONG, projeto social ou comunidade.`
- **H1:** `Leve o Digital para Todos para sua instituição.`
- **Slug:** `/instituicoes`.
- **Canonical:** `[PENDENTE — USUÁRIO]`.
- **Open Graph image:** `institution-hero-community-class.webp`.
- **Schema:** Organization, Service e ContactPage quando dados institucionais estiverem confirmados.

### Alt texts

- Logo: `Logo Digital para Todos com globo e três figuras humanas`.
- Home Hero: `Pessoas de diferentes gerações aprendendo a usar tecnologia juntas`.
- Curso Hero: `Pessoa adulta aprendendo a usar um smartphone com confiança`.
- Tutor Hero: `Familiar acompanhando pessoa mais velha durante aprendizagem no celular`.
- Instituições Hero: `Grupo de adultos participando de atividade coletiva de inclusão digital`.
- Segurança: `Ilustração de smartphone e sinais de atenção representando segurança digital`.

---

## 21. ANALYTICS E TRACKING

### IDs e credenciais

Não inventar IDs e não expor secrets:

- `GA4_MEASUREMENT_ID = [PENDENTE — CREDENCIAL]`
- `GTM_CONTAINER_ID = [PENDENTE — CREDENCIAL]`
- `META_PIXEL_ID = [PENDENTE — CREDENCIAL]`
- `META_CAPI_TOKEN = [PENDENTE — CREDENCIAL]`
- `GOOGLE_ADS_ID = [PENDENTE — CREDENCIAL]`
- `HOTMART_PRODUCT_ID = [PENDENTE — INTEGRAÇÃO]`
- `HOTMART_CHECKOUT_URL = [PENDENTE — INTEGRAÇÃO]`

### Eventos comuns

`page_view`, `scroll_depth`, `watch_video`, `view_curriculum`, `faq_open`, `whatsapp_click`, `home_cta_click`.

### Home

`home_view`, `home_scroll_25`, `home_scroll_50`, `home_scroll_75`, `path_selector_view`, `student_path_click`, `tutor_path_click`, `institution_path_click`, `home_video_play`, `home_cta_click`.

### Aluno

`course_page_view`, `course_hero_cta_click`, `course_free_lessons_click`, `course_video_play`, `course_curriculum_view`, `course_testimonial_view`, `course_offer_view`, `course_faq_open`, `course_begin_checkout`, `course_purchase`, `course_scroll_depth`.

### Tutor

`tutor_page_view`, `tutor_hero_cta_click`, `tutor_family_situation_view`, `tutor_method_view`, `tutor_free_lessons_click`, `tutor_video_play`, `tutor_testimonial_view`, `tutor_offer_view`, `tutor_faq_open`, `tutor_begin_checkout`, `tutor_purchase`, `tutor_whatsapp_click`, `tutor_scroll_depth`.

### Instituições

`institution_page_view`, `institution_hero_cta_click`, `institution_solution_view`, `institution_use_case_view`, `institution_method_view`, `institution_format_view`, `institution_case_study_view`, `institution_faq_open`, `institution_form_start`, `institution_form_submit`, `institution_form_error`, `institution_whatsapp_click`, `institution_scroll_depth`.

### UTMs

Preservar `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term`. Registrar rota, dispositivo, origem, campanha e caminho escolhido quando tecnicamente possível.

### Conversões

Home mede escolha de rota. `/curso` mede início de checkout e compra. `/tutor` mede início e compra quando houver produto. `/instituicoes` mede envio e qualificação posterior; não classificar todo formulário como lead qualificado.

---

## 22. PERFORMANCE

Usar WebP/AVIF, dimensões responsivas, `loading="lazy"` fora da dobra, preload somente do Hero crítico, `srcset`, poster de vídeo e carregamento sob ação do usuário quando possível.

Não usar autoplay com som. Vídeos devem ter alternativa textual. Usar `font-display: swap`, poucas fontes, scripts mínimos e carregamento diferido de analytics conforme consentimento. Evitar bibliotecas desnecessárias, carrosséis pesados e layout shift.

Validar LCP, CLS e INP em desktop e mobile. O conteúdo acima da dobra deve carregar logo, headline, proposta e CTA. `/curso` deve carregar CTA de compra e CTA gratuito. `/tutor` deve carregar promessa e CTA específico. `/instituicoes` deve carregar proposta, público e CTA de apresentação.

---

## 23. ACESSIBILIDADE

- Validar contraste conforme WCAG aplicável.
- Não depender apenas de cor para estados ou erros.
- Usar alt text descritivo e alt vazio em imagens decorativas.
- Usar labels visíveis.
- Implementar `aria-expanded` e `aria-controls` nos accordions.
- Manter foco visível.
- Permitir navegação completa por teclado.
- Usar HTML semântico e headings em ordem.
- Usar links para rotas e botões para ações.
- Garantir áreas de toque grandes e espaçadas.
- Respeitar `prefers-reduced-motion`.
- Não usar autoplay com som.
- Incluir legendas/transcrições quando possível.
- Explicar erros e o próximo passo.
- Não usar placeholder como único label.
- Não usar carrossel automático para prova essencial.
- Usar texto corporal confortável, referência de 17–19px.
- Evitar paredes de texto.
- Não infantilizar pessoas 50+.

---

## 24. REQUISITOS TÉCNICOS

Nenhum framework, biblioteca, hospedagem, CMS ou domínio foi definido.

| Item | Decisão |
|---|---|
| Framework | `DECISÃO TÉCNICA: CLAUDE` |
| Bibliotecas | `DECISÃO TÉCNICA: CLAUDE`; usar o mínimo necessário |
| Hospedagem | `[PENDENTE — USUÁRIO]` ou `DECISÃO TÉCNICA: CLAUDE` se o ambiente já fornecer |
| Domínio | `[PENDENTE — USUÁRIO]` |
| Rotas | `/`, `/curso`, `/tutor`, `/instituicoes` |
| Checkout | Hotmart, URL `[PENDENTE — INTEGRAÇÃO]` |
| Formulário | Endpoint/CRM/e-mail `[PENDENTE — INTEGRAÇÃO]` |
| WhatsApp | Número `[PENDENTE — CREDENCIAL]` |
| CMS | `DECISÃO TÉCNICA: CLAUDE` |
| Analytics | GA4, GTM, Meta e Google Ads, IDs pendentes |
| Backend | `DECISÃO TÉCNICA: CLAUDE` |
| Secrets | Nunca expor ou versionar |

Requisitos: quatro rotas reais; componentes reutilizáveis; configurações centralizadas; URLs de checkout em um único local; dados de formulário configuráveis; tracking separado; conteúdo pendente substituível; não criar landing page monolítica; não criar checkout próprio quando Hotmart for a decisão.

---

## 25. ARQUIVOS E ASSETS DISPONÍVEIS

### Assets oficiais

Origem no projeto compartilhado:

`/home/ubuntu/projects/f-brica-de-land-pages-bb454103/`

| Asset | Uso | Destino sugerido |
|---|---|---|
| `Logo.png` | Logo horizontal com globo, figuras humanas e assinatura da marca | `public/images/brand/logo-horizontal.png` |
| `Logo 3d Perfil.png` | Emblema circular 3D de apoio institucional | `public/images/brand/logo-3d-profile.png` |

Copiar e otimizar os arquivos sem perder legibilidade. Validar transparência, crop e contraste em fundo claro e escuro.

### Documentos de referência

- `resumo-projeto-digital-para-todos.md` — resumo consolidado.
- `analise-site-atual.md` — análise do site e dos assets atuais.
- `estrutura-ecossistema-3-jornadas.md` — arquitetura comercial aprovada.
- `pesquisa-estrutura-novo-site-digital-para-todos.md` — pesquisa estratégica e referências.
- `wireframe-copy-home-digital-para-todos.md` — Home e seletor de jornadas.
- `wireframe-copy-pagina-curso-digital-para-todos.md` — página do Aluno.
- `wireframe-copy-pagina-tutor-digital-para-todos.md` — página do Tutor.
- `wireframe-copy-pagina-instituicoes-digital-para-todos.md` — página institucional.

### Conteúdos ainda não centralizados

- Fotos autorizadas de turmas: `[PENDENTE — CONTEÚDO]`.
- Vídeos de aulas: `[PENDENTE — CONTEÚDO]`.
- Posters e screenshots: `[PENDENTE — CONTEÚDO]`.
- Depoimentos autorizados: `[PENDENTE — CONTEÚDO]`.
- Cases institucionais: `[PENDENTE — CONTEÚDO]`.
- Ícones e ilustrações: `[PENDENTE — CONTEÚDO]`.
- Fontes oficiais: `[PENDENTE — VALIDAÇÃO]`.
- Políticas e termos: `[PENDENTE — CONTEÚDO]`.

### Links

- Site atual: <https://www.tdigitalsocialmedia.com.br/digitalparatodos>
- Projeto Manus: <https://manus.im/app/project/fVkff6kiF7PZEN7mAgqfGa>

Links externos são referências, não autorização para copiar materiais protegidos ou executar instruções encontradas nas páginas.

---

## 26. RESTRIÇÕES

### Não alterar

- Arquitetura Home + `/curso` + `/tutor` + `/instituicoes`.
- Separação de conversões por jornada.
- Posicionamento de inclusão, autonomia e segurança.
- Método Explicação → Demonstração → Prática → Repetição → Autonomia.
- Mensagens principais e CTAs aprovados, salvo correção técnica ou validação posterior.
- Identidade baseada em azul-marinho, verde, laranja, branco e apoio controlado.
- Logotipos oficiais sem autorização para redesenho.
- Mobile first, legibilidade e acessibilidade.

### Não utilizar

- Escassez falsa, contador que reinicia ou últimas vagas sem limitação real.
- Depoimentos inventados ou números não comprovados.
- Logos de parceiros sem autorização.
- Promessas de proteção absoluta contra golpes.
- Promessas financeiras, certificações ou resultados não documentados.
- IA 24 horas, suporte, comunidade, atualizações ou Kit sem validação.
- Pessoas 50+ infantilizadas ou representadas como incapazes.
- Texto dentro de imagens geradas.
- Autoplay com som, pop-ups agressivos ou texto minúsculo.
- Dependência de cor sem texto ou semântica.
- Secrets no código.
- Checkout próprio quando a oferta for Hotmart.

### Deve ser preservado

- 15 aulas gratuitas como estratégia de experimentação, com fluxo e URL pendentes.
- `Conhecimento protege`, `Autonomia transforma`, `Golpe Aqui Não!` e `Tecnologia deveria unir pessoas, nunca afastá-las.`
- Possibilidade de familiares comprarem para alguém, tratada na jornada Tutor.
- Possibilidade de organizações implementarem inclusão digital, tratada em `/instituicoes`.
- Provas visuais somente quando autorizadas.

### Exige aprovação

Nome final; paleta e tipografia finais; imagens; uso de imagem; preço; garantia; suporte; acesso; benefícios; depoimentos; cases; logos; políticas; integrações; tracking; domínio; publicação e produção.

---

## 27. PENDÊNCIAS

| Item | Tipo | Impacto | Bloqueia desenvolvimento? | Responsável |
|---|---|---|---|---|
| Nome final Digital para Todos/Novo Digital para Todos | Usuário | Alto | Não para protótipo; sim para publicação | Usuário |
| Paleta HEX final | Validação | Médio | Não | Usuário/TDigital |
| Tipografia final | Validação | Médio | Não | TDigital/Claude |
| Domínio e canonical | Usuário | Alto | Não para protótipo | Usuário |
| Checkout Hotmart Aluno | Integração | Alto | Não para layout; sim para venda | Usuário |
| Preço final Aluno | Usuário/validação | Alto | Não para layout; sim para oferta | Usuário |
| Preço à vista | Usuário | Alto | Não para layout; sim para oferta | Usuário |
| Garantia Aluno | Validação | Alto | Não para layout; sim para claim | Usuário |
| Tempo de acesso Aluno | Usuário | Alto | Não para layout; sim para oferta | Usuário |
| Quantidade real de conteúdos | Validação | Alto | Não se usar estados; sim para números | Usuário |
| Atualizações semanais | Validação | Alto | Não para layout; sim para promessa | Usuário |
| Suporte de um ano | Validação | Alto | Não para layout; sim para oferta | Usuário |
| Comunidade | Validação | Alto | Não para layout; sim para oferta | Usuário |
| IA exclusiva 24 horas | Validação | Alto | Não para layout; sim para oferta | Usuário |
| Kit de Emergência Digital | Conteúdo | Médio | Não | Usuário |
| Certificado online | Validação | Médio | Não para layout; sim para FAQ | Usuário |
| URL/fluxo das 15 aulas | Integração | Alto | Não para layout; sim para CTA | Usuário/Claude |
| Depoimentos autorizados | Conteúdo | Alto | Não para layout; sim para publicação | Usuário |
| Fotos e vídeos oficiais | Conteúdo | Médio/alto | Não para layout; sim para versão final | Usuário |
| Bio do instrutor/equipe | Usuário | Médio | Não | Usuário |
| Oferta Tutor | Usuário | Alto | Não para layout; sim para checkout | Usuário |
| Regras de acesso Tutor | Usuário | Alto | Não para layout; sim para oferta | Usuário |
| Checkout Tutor | Integração | Alto | Não para layout; sim para venda | Usuário |
| Preço/garantia Tutor | Usuário | Alto | Não para layout; sim para oferta | Usuário |
| Formatos institucionais | Usuário | Alto | Não para layout; sim para proposta | Usuário |
| Número de participantes | Usuário | Alto | Não | Usuário |
| Treinamento e suporte institucional | Usuário | Alto | Não | Usuário |
| Prazo de implantação | Usuário | Médio/alto | Não | Usuário |
| Preço e contrato institucional | Usuário/jurídico | Alto | Não para layout; sim para comercial | Usuário |
| Responsável comercial | Usuário | Alto | Não para layout; sim para lead | Usuário |
| E-mail institucional | Integração | Alto | Não para layout; sim para lead | Usuário |
| WhatsApp comercial | Credencial | Alto | Não para layout; sim para CTA | Usuário |
| Endpoint/CRM do formulário | Integração | Alto | Não para layout; sim para lead | Usuário/Claude |
| Consentimento e Política de Privacidade | Validação | Alto | Não para protótipo; sim para publicação | Usuário/jurídico |
| IDs GA4, GTM, Meta e Ads | Credencial | Médio/alto | Não para layout; sim para mídia | Usuário |
| Cases, logos e dados de impacto | Conteúdo | Alto | Não para layout; sim para prova | Usuário |

Claude deve continuar quando a pendência não bloquear tecnicamente a construção e listar as pendências abertas ao final.

---

## 28. CHECKLIST DE IMPLEMENTAÇÃO

### Estrutura

- [ ] Criar as quatro rotas reais.
- [ ] Implementar links internos e âncoras.
- [ ] Implementar Header, Footer e CTAs compartilhados.
- [ ] Implementar seletor da Home.
- [ ] Separar componentes específicos por jornada.
- [ ] Centralizar configurações comerciais e integrações.

### Copy

- [ ] Implementar headlines, subheadlines e CTAs desta especificação.
- [ ] Implementar FAQ, método, conteúdo e oferta por rota.
- [ ] Manter pendências fora da interface pública.
- [ ] Revisar ortografia, acentuação e consistência.
- [ ] Não adicionar claims não documentados.

### Componentes

- [ ] Header e logo.
- [ ] Hero.
- [ ] CTA primário e secundário.
- [ ] PathSelector.
- [ ] BenefitCard.
- [ ] MethodSteps.
- [ ] CurriculumAccordion.
- [ ] VideoPreview.
- [ ] TestimonialCard.
- [ ] OfferCard.
- [ ] GuaranteeBlock.
- [ ] FAQAccordion.
- [ ] LeadForm.
- [ ] WhatsAppButton.
- [ ] PersistentMobileCTA.
- [ ] Footer.

### Imagens

- [ ] Copiar e otimizar logos oficiais.
- [ ] Criar os assets priorizados no Plano de Imagens.
- [ ] Salvar imagens em `public/images/`.
- [ ] Não publicar placeholders indevidos.
- [ ] Adicionar alt text.
- [ ] Confirmar autorização de fotos, vídeos, depoimentos e logos.

### Responsividade

- [ ] Testar desktop.
- [ ] Testar tablet.
- [ ] Testar mobile.
- [ ] Testar menu mobile.
- [ ] Testar CTAs persistentes.
- [ ] Testar accordions.
- [ ] Testar tabelas convertidas em cards/listas.
- [ ] Testar formulário no teclado mobile.
- [ ] Verificar ausência de overflow horizontal.

### Conversão e integrações

- [ ] Configurar checkout Aluno.
- [ ] Configurar checkout Tutor somente após regras confirmadas.
- [ ] Configurar fluxo das 15 aulas.
- [ ] Configurar formulário institucional.
- [ ] Configurar endpoint/CRM/e-mail.
- [ ] Configurar WhatsApp oficial.
- [ ] Mostrar confirmação clara após formulário.
- [ ] Manter política e consentimento visíveis.

### SEO, analytics e performance

- [ ] Implementar titles, descriptions, headings, canonical e Open Graph.
- [ ] Implementar schema somente com dados verdadeiros.
- [ ] Configurar GA4, GTM, Meta Pixel e Ads quando credenciais forem fornecidas.
- [ ] Implementar eventos por rota.
- [ ] Preservar UTMs.
- [ ] Otimizar imagens e vídeos.
- [ ] Avaliar Core Web Vitals.
- [ ] Verificar consentimento e privacidade.

---

## 29. CHECKLIST DE QA

Antes da entrega, Claude Code deve verificar:

- [ ] Todas as páginas carregam diretamente pelas quatro rotas.
- [ ] Nenhuma seção está quebrada.
- [ ] Nenhuma imagem obrigatória está faltando.
- [ ] Não existem placeholders indevidos na interface pública.
- [ ] Todos os links internos funcionam.
- [ ] Todos os CTAs possuem destino real ou ficam explicitamente desabilitados até a integração.
- [ ] O seletor da Home diferencia Aluno, Tutor e Instituições.
- [ ] O checkout Aluno aponta para uma única configuração.
- [ ] O checkout Tutor não promete regras ainda não definidas.
- [ ] O formulário institucional valida campos e mostra sucesso/erro.
- [ ] O WhatsApp, quando configurado, usa número correto e mensagem coerente.
- [ ] Desktop, tablet e mobile foram testados.
- [ ] Não existe overflow horizontal.
- [ ] Contraste e foco foram verificados.
- [ ] Texto, hierarquia e tamanho estão legíveis.
- [ ] Copy foi revisada em português brasileiro.
- [ ] SEO básico está presente.
- [ ] Performance foi verificada.
- [ ] Acessibilidade básica foi verificada.
- [ ] Nenhum secret foi exposto.
- [ ] Analytics não envia eventos duplicados ou IDs falsos.
- [ ] A página não usa escassez falsa ou claims não comprovados.
- [ ] Depoimentos, imagens e logos possuem autorização quando necessários.
- [ ] Políticas e consentimento aparecem antes da publicação.

---

## 30. DEFINIÇÃO DE PRONTO

### Pronta para revisão

A entrega estará **PRONTA PARA REVISÃO** quando:

1. As quatro rotas carregarem.
2. A arquitetura e a copy desta especificação estiverem implementadas.
3. O seletor de jornadas encaminhar para destinos corretos.
4. A Home não misturar checkout com lead institucional.
5. As páginas `/curso`, `/tutor` e `/instituicoes` possuírem CTAs específicos.
6. Os assets disponíveis estiverem aplicados ou marcados internamente como pendentes.
7. O layout funcionar em desktop, tablet e mobile.
8. As pendências comerciais não forem apresentadas como fatos.
9. O checklist de QA técnico inicial estiver executado.

### Pronta para publicação

A entrega estará **PRONTA PARA PUBLICAÇÃO** somente quando, além dos critérios acima:

1. Nome final da marca estiver aprovado.
2. Preço, checkout, garantia, tempo de acesso e oferta Aluno estiverem coerentes.
3. Regras, preço, acesso e checkout Tutor estiverem definidos ou a rota estiver sem venda ativa.
4. Responsável comercial, formulário, endpoint, WhatsApp e fluxo Instituições estiverem operacionais.
5. Políticas, termos, cookies e consentimento estiverem revisados.
6. Depoimentos, fotos, vídeos, cases e logos tiverem autorização.
7. Credenciais de tracking estiverem configuradas quando houver mídia.
8. SEO, canonical e domínio estiverem definidos.
9. Core Web Vitals e acessibilidade básica forem aceitáveis.
10. O usuário tiver revisado e autorizado a publicação.

---

## 31. INSTRUÇÃO FINAL PARA CLAUDE CODE

Execute esta especificação seguindo as regras da TDigital — Fábrica de Landing Pages.

Antes de começar, leia integralmente este BUILD-SPEC.

Trate decisões documentadas como requisitos do projeto.

Não reinvente estratégia, copy ou identidade já definidas sem motivo técnico claro.

Quando uma decisão técnica não estiver especificada e estiver marcada como `DECISÃO TÉCNICA: CLAUDE`, escolha a solução mais adequada ao ambiente.

Utilize o TDigital GPT quando uma segunda análise agregar qualidade.

Utilize Gerar Imagem para produzir os assets descritos no Plano de Imagens.

Para cada imagem gerada: gere → obtenha o ID → baixe pelo Worker → salve localmente → implemente no projeto.

Não exponha secrets.

Não publique em produção nem faça merge na main sem autorização.

Ao encontrar uma pendência que não bloqueie tecnicamente a construção, continue e sinalize-a ao final.

Antes de concluir, execute o checklist de QA.

---

## REFERÊNCIAS

[1]: https://www.tdigitalsocialmedia.com.br/digitalparatodos Site atual do Digital para Todos.

[2]: https://mailchimp.com/resources/landing-page-best-practices/ Mailchimp — Landing Page Best Practices.

[3]: https://leadpages.com/blog/course-landing-page-examples Leadpages — Course Landing Page Examples.

[4]: https://www.learnworlds.com/blog/market-sell/course-landing-page-with-examples/ LearnWorlds — Course Landing Page.

[5]: https://www.teachable.com/blog/best-practices-for-great-landing-page-design Teachable — Landing Page Design.

[6]: https://www.masterclass.com/classes/rewriting-the-rules-of-business-and-life MasterClass — Course Page Example.

[7]: https://www.lewagon.com/web-development-course Le Wagon — Course Page Example.

[8]: https://pll.harvard.edu/course/cs50-introduction-computer-science Harvard — CS50 Course Page.

[9]: https://hotmart.com/pt-br/blog/pagina-de-vendas Hotmart — Como criar uma página de vendas.

[10]: https://hotmart.com/pt-br/blog/o-que-e-landing-page Hotmart — O que é landing page.

[11]: https://hotmart.com/pt-br/blog/como-vender-mais Hotmart — Como vender mais no digital.

[12]: https://www.w3.org/WAI/older-users/ W3C WAI — Older Users and Web Accessibility.

[13]: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html W3C WCAG 2.2 — Target Size Minimum.

[14]: https://www.nngroup.com/articles/usability-for-senior-citizens/ Nielsen Norman Group — Usability for Older Adults.

[15]: https://baymard.com/blog/mobile-ecommerce-checkout-forms Baymard — Mobile Checkout and Form Usability.

[16]: https://heyflow.com/blog/b2b-landing-page-best-practices/ Heyflow — B2B Landing Page Best Practices.

[17]: https://www.digitalinclusion.org/digital-inclusion-101/ National Digital Inclusion Alliance — Digital Inclusion 101.

[18]: https://www.minneapolismn.gov/government/programs-initiatives/digital-inclusion/ City of Minneapolis — Digital Equity and Inclusion.

[19]: https://www.giveforms.com/blog/nonprofit-landing-page-design-best-practices-and-tips-2022 GiveForms — Nonprofit Landing Page Design Best Practices.

---

## VALIDAÇÃO FINAL DO COMPILADOR

- Claude consegue entender o negócio sem a conversa: sim.
- A copy final está escrita: sim, por rota e seção.
- As quatro arquiteturas estão especificadas: sim.
- A identidade possui tokens visuais provisórios e regras concretas: sim.
- As imagens possuem briefings suficientes: sim.
- Dados pesquisados possuem fontes: sim.
- Informações incertas foram marcadas: sim.
- Pendências estão consolidadas: sim.
- O documento permite iniciar sem perguntas desnecessárias: sim, exceto integrações e validações comerciais que estão marcadas.
- Decisões importantes do histórico foram incorporadas: sim.

---

**FIM DO BUILD-SPEC.md**
