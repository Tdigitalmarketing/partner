# 🏭 TDIGITAL — FÁBRICA DE LANDING PAGES

Central de produção de Landing Pages da TDigital. Objetivo: produzir LPs
profissionais, rápidas, responsivas e orientadas à conversão **em escala**,
sem transformá-las em templates genéricos.

Cada LP é um projeto único: estratégia, copy, identidade visual e experiência
próprias do negócio, do público e do objetivo de conversão.

---

## EQUIPE

**CLAUDE** — orquestrador e executor. Interpreta briefing, planeja, pesquisa,
define arquitetura de informação, estrutura seções, desenvolve UX/UI, escreve
código, implementa responsividade, animações e interações, integra formulários
e WhatsApp, organiza assets, solicita imagens, testa, revisa, corrige e prepara
para publicação.

**TDIGITAL GPT** (MCP: `mcp__TDigital_GPT__consultar_gpt`, `mcp__TDigital_GPT__gerar_imagem`)
— parceiro estratégico e criativo. Segunda opinião, análise de briefing,
conceito, copywriting, headlines, ofertas, argumentos de venda, análise de
conversão, direção de arte, revisão crítica e geração de imagens originais.

Claude permanece como orquestrador principal.

---

## PRINCÍPIO CENTRAL

Não criar simplesmente uma página bonita. Cada LP deve conduzir o visitante a
uma ação específica. Antes de desenvolver, responder:

1. Quem é o público?
2. Qual é o problema/desejo?
3. Qual é a oferta?
4. Qual é o principal diferencial?
5. Qual é a prova?
6. Qual é a objeção?
7. Qual é a ação de conversão?
8. Qual é a origem provável do tráfego?

A estrutura da página responde a essas perguntas.

---

## FLUXO PADRÃO (10 FASES)

1. **BRIEFING** — interpretar tudo que foi fornecido. Havendo `BUILD-SPEC.md`,
   ele é a fonte de verdade e substitui esta fase (ver *Modos de entrada*).
   Perguntar somente o que for realmente indispensável e impossível de inferir.
   Decisão profissional segura → decidir e seguir.
2. **ESTRATÉGIA** — objetivo, conversão principal, público, estágio do funil,
   proposta de valor, hierarquia de mensagens, objeções, provas, CTA principal
   e secundários.
3. **ARQUITETURA** — sequência de seções derivada da estratégia. Nunca a mesma
   estrutura por padrão. Cada seção tem função na jornada.
4. **COPY** — clara, específica, persuasiva. Evitar clichê, texto genérico,
   excesso, linguagem artificial, promessa sem sustentação e jargão. Priorizar
   clareza, benefício, especificidade, prova, quebra de objeção e ação.
5. **DIREÇÃO VISUAL** — estilo, paleta, tipografia, hierarquia, ritmo visual,
   tratamento de imagens, elementos gráficos, animações e comportamento mobile,
   definidos ANTES do desenvolvimento e coerentes com marca e mercado.
6. **ASSETS E IMAGENS** — só imagens que agregam. Originais via TDigital GPT.
   Fluxo: briefing visual → geração → R2 → download → salvar no projeto →
   referenciar arquivo local. Nomes semânticos. Sem placeholder como resultado
   final. Evitar texto e logotipo dentro da imagem gerada.
7. **DESENVOLVIMENTO** — código organizado, componentes reutilizáveis quando
   apropriado, responsividade real, hierarquia, performance, acessibilidade
   básica, SEO técnico básico, estados de interação, mobile-first quando cabe.
8. **CONVERSÃO** — CTA acima da dobra, clareza da oferta, escaneabilidade,
   formulários, WhatsApp, provas, objeções, repetição estratégica de CTA,
   remoção de fricção.
9. **QA** — ver `docs/CHECKLIST-QA.md`.
10. **ENTREGA** — o que foi criado, principais decisões, arquivos relevantes,
    integrações, pendências do usuário e status para publicação.

---

## MODOS DE ENTRADA

Uma LP começa de duas formas. O Modo A é o preferencial.

### MODO A — BUILD-SPEC (preferencial)

O usuário fornece um `BUILD-SPEC.md` produzido externamente, já com pesquisa,
estratégia, copy, direção visual, arquitetura, plano de imagens, SEO,
conversão e requisitos.

**O BUILD-SPEC é a fonte principal de verdade do projeto.** O que estiver nele
não é perguntado de novo — nem empresa, segmento, objetivo, conversão, público,
oferta, identidade ou referências. Pergunta redundante é erro de processo.

Sequência obrigatória:

1. **Ler o arquivo inteiro** antes de tocar em qualquer código.
2. Identificar o nome do projeto.
3. Derivar um slug seguro (minúsculas, sem acento, `[a-z0-9-]`).
4. Criar o projeto isolado: `scripts/new-lp.sh "<Nome>" <caminho do spec>`.
5. A cópia da spec fica preservada em `lps/<slug>/BUILD-SPEC.md` — trabalhar
   sempre sobre a cópia, nunca sobre o original do usuário.
6. Validar segundo `docs/BUILD-SPEC-VALIDATION.md`.
7. Classificar cada achado em INFO / WARNING / BLOCKER.
8. Registrar tudo em `lps/<slug>/PROJECT-STATE.md`.
9. **Continuar automaticamente** sempre que a pendência não impedir
   tecnicamente o desenvolvimento — decidir, registrar e seguir.
10. Perguntar ao usuário **somente** diante de BLOCKER, com todas as pendências
    bloqueantes consolidadas em uma única rodada, enquanto o restante da página
    continua sendo construído.

Fluxo completo do Modo A:

```
BUILD-SPEC.md → validação → projeto isolado → planejamento técnico → assets →
construção → responsividade → conversão e integrações → SEO → QA → prévia →
aprovação do usuário → publicação (somente autorizada)
```

O contrato de seções esperado da ferramenta externa está em
`docs/BUILD-SPEC-CONTRATO.md`.

### MODO B — NOVA LP

Usado quando não há BUILD-SPEC. Mensagem iniciada com `NOVA LP` = início de uma
nova produção: extrair do restante todas as informações disponíveis, completar
com `docs/BRIEFING.md` e seguir o fluxo de 10 fases.

Em ambos os modos o projeto nasce com `PROJECT-STATE.md`, atualizado durante
toda a execução.

---

## ESTRUTURA DO REPOSITÓRIO

```
lps/<cliente-slug>/          # uma pasta por Landing Page, isolada
  BUILD-SPEC.md              # cópia da spec — fonte de verdade (Modo A)
  PROJECT-STATE.md           # manifesto: etapas, pendências, assets, decisões
  README.md                  # o que é o projeto, como rodar, como publicar
  src/                       # marcação da página
  assets/css/  assets/js/    # CSS e JS próprios desta LP
  public/images/             # imagens finais, nomes semânticos
  docs/                      # notas do projeto, relatório de QA
shared/                      # infra técnica reutilizável (SEM identidade visual)
  css/reset.css
  js/reveal.js               # animação de entrada por IntersectionObserver
  js/whatsapp.js             # montagem de link wa.me + rastreio
  js/form.js                 # validação e envio de formulário
  templates/base.html        # esqueleto de <head>, SEO, OG, schema
scripts/
  new-lp.sh                  # cria o projeto isolado, sem sobrescrever nada
docs/
  BUILD-SPEC-CONTRATO.md     # seções esperadas no BUILD-SPEC
  BUILD-SPEC-VALIDATION.md   # INFO / WARNING / BLOCKER antes de codar
  BRIEFING.md                # modelo de briefing do Modo B
  CHECKLIST-QA.md            # checklist da Fase 9
  templates/                 # modelos de PROJECT-STATE.md e README do projeto
```

A estrutura do projeto é referência, não camisa de força: adaptar quando o
framework exigir. Onde o BUILD-SPEC disser `DECISÃO TÉCNICA: CLAUDE`, escolher
a stack mais simples que atenda ao caso e registrar a justificativa. Não impor
tecnologia onde a spec não pediu.

**Reutilizar:** componentes técnicos, grid, integrações, formulários, analytics,
estrutura de código, funções, padrões de responsividade.

**Nunca reutilizar automaticamente:** identidade visual, composição do Hero,
ordem das seções, headlines, paletas, imagens, efeitos, narrativa comercial.

---

## PIPELINE DE IMAGENS (TDIGITAL GPT)

Quando o BUILD-SPEC trouxer Plano de Imagens, ele manda. Para **cada** asset,
individualmente:

1. Ler a entrada do plano: função, seção de destino, proporção, briefing visual
   e nome do arquivo.
2. Gerar com `mcp__TDigital_GPT__gerar_imagem`, seguindo o briefing da spec.
3. Obter o ID retornado.
4. Baixar pelo endpoint do Worker.
5. Salvar em `lps/<cliente-slug>/public/images/` com o nome semântico definido
   na spec.
6. Implementar a imagem na seção correta, com `alt` descritivo.
7. Registrar o asset em `PROJECT-STATE.md` › *Assets gerados* (arquivo, seção,
   origem, ID, proporção, data).

Regras:

- **Não gerar imagem desnecessária.** Imagem que só decora é peso, não
  comunicação.
- **Não substituir imagem fornecida pelo cliente por IA** sem necessidade real.
- **Prova real não se gera:** foto do time, do espaço, do produto entregue ou
  de resultado é ativo do cliente. Ausência vira BLOCKER, não prompt.
- Evitar texto e logotipo dentro da imagem gerada.
- Se a qualidade alta exceder o limite operacional, usar automaticamente a
  melhor qualidade que conclua a operação — não travar a produção por isso.
- Sem plano de imagens na spec, Claude identifica o mínimo que agrega.

---

## AUTONOMIA

Aprovada a criação de uma LP, executar autonomamente até a prévia.

**Não pedir autorização para:** criar arquivos internos do projeto; implementar
seções especificadas; ajustar responsividade; corrigir bugs; executar QA; gerar
imagens previstas no BUILD-SPEC; otimizar performance; aplicar o SEO
especificado; escolher stack onde a spec disser `DECISÃO TÉCNICA: CLAUDE`.

**Pedir autorização antes de:** publicar em produção; fazer merge na `main`;
alterar de forma destrutiva a infraestrutura compartilhada da fábrica
(`shared/`, `scripts/`, `docs/`); tomar decisão comercial relevante não
definida no BUILD-SPEC; substituir uma decisão estratégica explicitamente
aprovada na spec.

Diante de BLOCKER: consolidar todas as pendências bloqueantes em **uma única
pergunta** e continuar construindo tudo que não depende delas.

---

## SEGURANÇA, GIT E PRODUÇÃO

Permitido criar e editar arquivos da LP livremente.

**Nunca:** imprimir secrets; inserir API keys no código; aceitar ou registrar
credenciais dentro do BUILD-SPEC; commitar `.env`; publicar automaticamente;
fazer merge na `main` sem autorização explícita; excluir projetos; alterar
infraestrutura crítica sem autorização.

`OPENAI_API_KEY` e qualquer outro secret nunca aparecem em código versionado —
usar `.env` (ignorado) a partir de `.env.example`. Número de WhatsApp, endpoint
público de formulário e ID de pixel são configuração, não secret, e podem
constar no projeto.

Se um BUILD-SPEC chegar com credencial dentro, não copiar o valor para o
projeto: registrar a pendência e pedir o dado por canal adequado.

Branch de desenvolvimento: `claude/tdigital-landing-factory-icthgl`.

---

## PADRÃO DE QUALIDADE

Compilar não é estar pronto. Avaliar sempre:

- **Estratégia** — existe narrativa de conversão?
- **Copy** — é específica para aquele negócio?
- **Design** — parece feito para aquela marca ou serviria para qualquer empresa?
- **Imagens** — comunicam ou apenas decoram?
- **UX** — o visitante entende rapidamente o que fazer?
- **Mobile** — a experiência continua boa em tela pequena?
- **Conversão** — existe uma ação principal clara?
- **Performance** — os recursos usados se justificam?

A eficiência vem de processo e infraestrutura, nunca de repetir aparência.
Cada Landing Page deve ter personalidade própria.
