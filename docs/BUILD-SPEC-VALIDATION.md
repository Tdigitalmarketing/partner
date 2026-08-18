# Validação de BUILD-SPEC

Executada na **Etapa 2 do Modo A**, antes de escrever qualquer linha de código
do projeto. Objetivo: descobrir cedo o que impede uma implementação segura —
e **só isso**. Tudo o mais é decidido por Claude e registrado.

> Regra de ouro: a validação existe para **destravar** produção, não para
> criar burocracia. Se um item ausente pode ser resolvido com uma decisão
> profissional segura, ele **não** é BLOCKER.

---

## Classificação

| Nível | Significado | Efeito na produção |
| --- | --- | --- |
| **INFO** | Ausente ou implícito, mas irrelevante para a implementação, ou inferível sem risco. | Nenhum. Claude decide, registra em `PROJECT-STATE.md` › *Decisões técnicas tomadas* e segue. |
| **WARNING** | Ausente ou ambíguo. Afeta qualidade, conversão ou fidelidade à estratégia, mas existe um caminho profissional seguro. | Produção **continua**. Claude adota a melhor decisão, marca a seção como provisória e registra em *Pendências não bloqueantes*. Reportado na entrega. |
| **BLOCKER** | Torna a implementação impossível, insegura, ou faz a página entregar algo factualmente errado ao público. | Produção **para apenas na parte afetada**. Todo o restante avança. Claude pergunta ao usuário em uma única rodada, com todas as pendências bloqueantes juntas. |

**BLOCKER é exceção.** Um BUILD-SPEC bem produzido deve gerar zero. Só quatro
famílias de problema qualificam:

1. **Destino da conversão inexistente ou inválido** — a página não tem para
   onde enviar o lead (sem número de WhatsApp, sem endpoint de formulário, sem
   link de agendamento/checkout) e nenhum canal alternativo foi definido.
2. **Dado factual verificável em falta** — preço, prazo, garantia, endereço,
   registro profissional (CRM/CRO/OAB), condição de pagamento: informações que
   não podem ser inventadas sem risco jurídico ou de credibilidade e que a
   spec exige exibir.
3. **Contradição interna irreconciliável** — a spec afirma duas coisas
   incompatíveis sobre o mesmo ponto (ex.: conversão principal é WhatsApp em
   uma seção e checkout em outra) e o contexto não permite escolher.
4. **Ativo obrigatório inacessível** — a spec exige um arquivo específico
   fornecido pelo cliente (logo, vídeo, base de depoimentos reais, foto do
   imóvel/produto real) que não está no repositório e não pode ser
   legitimamente substituído por geração de IA.

Nunca são BLOCKER: paleta, tipografia, ordem das seções, tom de voz, animação,
breakpoints, framework, nomes de arquivo, microcopy, alt text, quantidade de
depoimentos, estilo das imagens, metadados de SEO.

---

## Itens verificados

Para cada item: o que se checa, e o que Claude faz quando falta.

### 1. Empresa
Nome, e como deve aparecer na página.
Ausente → **BLOCKER** apenas se não houver nenhum identificador do negócio no
arquivo inteiro. Nome presente mas sem forma de exibição → INFO (usar o nome
como escrito).

### 2. Objetivo da página
O que a página precisa fazer acontecer.
Ausente mas dedutível da oferta e da conversão → WARNING. Ausente e sem
conversão definida → **BLOCKER** (a página não teria propósito).

### 3. Conversão
Ação principal, canal e destino técnico (número, endpoint, URL).
- Ação definida e destino presente → OK.
- Ação definida, destino ausente → **BLOCKER** (família 1).
- Ação indefinida mas canal único óbvio no material → WARNING.
- Conversões secundárias ausentes → INFO.

### 4. Público
Quem é, dor/desejo, estágio de consciência, origem do tráfego.
Ausente → WARNING. Claude infere pelo segmento e oferta, e registra a hipótese.
Origem do tráfego ausente → INFO (assumir tráfego pago frio, o cenário mais
exigente em clareza).

### 5. Oferta
O que está sendo vendido, condições, preço, garantia, prazo.
- Oferta ausente por completo → **BLOCKER**.
- Oferta descrita sem preço, **e a spec pede preço na página** → **BLOCKER**
  (família 2).
- Oferta descrita sem preço, e a página não exibe preço → INFO.
- Condições/garantia ausentes → WARNING (não inventar garantia; omitir).

### 6. Proposta de valor
Diferencial central e por que este negócio e não outro.
Ausente → WARNING. Claude deriva da oferta + prova e destaca como hipótese na
entrega.

### 7. Arquitetura da página
Sequência de seções e função de cada uma.
Ausente → WARNING. Claude projeta a arquitetura a partir da estratégia
(Fase 3 da fábrica) e documenta a estrutura adotada.
Presente mas com seção sem conteúdo definido → WARNING **nessa seção apenas**.

### 8. Copy
Headlines, subheadlines, corpo, CTAs, microcopy.
- Copy completa → OK.
- Copy parcial → WARNING. Claude escreve o que falta no tom definido e
  **marca cada trecho autoral** na entrega, para revisão.
- Copy ausente → WARNING (não BLOCKER: escrever copy é competência da fábrica).
- Copy contendo afirmação factual não sustentada (número, prêmio, resultado)
  → **BLOCKER** naquele trecho até confirmação, ou remoção do trecho se o
  usuário preferir. Padrão: sinalizar e **não publicar o número inventado**.

### 9. Identidade visual
Cores, tipografia, logo, tom.
Ausente → WARNING. Claude define uma direção coerente com marca e mercado e
apresenta as escolhas na entrega.
Logo ausente → WARNING se houver nome (usar wordmark tipográfico);
**BLOCKER** só se a spec exigir explicitamente o arquivo original do cliente.

### 10. Direção de arte
Estilo visual, ritmo, tratamento de imagem, referências.
Ausente → INFO/WARNING conforme o peso visual do projeto. Claude decide.

### 11. Plano de imagens
Lista de imagens, função, proporção, briefing visual, nome do arquivo.
- Plano presente → seguir literalmente.
- Plano ausente → WARNING. Claude identifica só as imagens que agregam e gera
  o mínimo necessário.
- Imagem prevista sem briefing visual → WARNING (Claude escreve o briefing).
- Spec exige foto real de pessoa, local ou produto específico → **BLOCKER**
  (família 4). IA não substitui prova real.

### 12. Responsividade
Breakpoints e comportamento mobile.
Ausente → INFO. Padrão da fábrica: mobile-first, validado em 360/390/768/1280/1440.

### 13. SEO
Title, meta description, OG, canonical, schema, palavras-alvo.
Ausente → WARNING. Claude escreve os metadados a partir da copy e da oferta.
URL canônica ausente → INFO (deixar placeholder documentado até a publicação).

### 14. Requisitos técnicos
Stack, hospedagem, domínio, analytics, integrações, LGPD.
- `DECISÃO TÉCNICA: CLAUDE` → INFO. Claude escolhe e justifica.
- Stack exigida e incompatível com o ambiente → **BLOCKER**.
- IDs de pixel/GA4 ausentes → WARNING (deixar o hook pronto e desativado).
- Endpoint de formulário ausente **sendo formulário a conversão principal**
  → **BLOCKER** (família 1).

### 15. Pendências declaradas
A própria spec pode listar o que ficou em aberto.
Reclassificar cada uma segundo esta tabela — a spec **sugere** a gravidade,
esta validação **decide**.

### 16. Definição de pronto
Critérios de aceite do projeto.
Ausente → INFO. Vale `docs/CHECKLIST-QA.md` como definição padrão de pronto.

---

## Relatório de validação

Sempre gerado, mesmo sem nenhum problema. Vai para o console e para
`PROJECT-STATE.md`.

```
VALIDAÇÃO DO BUILD-SPEC — <projeto>
Arquivo: lps/<slug>/BUILD-SPEC.md
Itens verificados: 16 · BLOCKER: 0 · WARNING: 3 · INFO: 2

BLOCKER
  (nenhum)

WARNING
  [8]  Copy da seção "Objeções" ausente → escrita por Claude no tom definido
  [11] Imagem "detalhe-ambiente" sem briefing visual → briefing derivado da direção de arte
  [13] Meta description ausente → escrita a partir da headline principal

INFO
  [12] Breakpoints não especificados → padrão mobile-first da fábrica
  [14] DECISÃO TÉCNICA: CLAUDE → HTML/CSS/JS estático, sem build

DECISÃO: prosseguir para a Etapa 3 (criação da estrutura).
```

Com pelo menos um BLOCKER, a última linha vira:

```
DECISÃO: prosseguir com o restante da página. <n> pendência(s) bloqueante(s)
consolidada(s) para o usuário em uma única pergunta. Seções afetadas: <lista>.
```

---

## Regras de conduta na validação

1. **Ler o arquivo inteiro antes de classificar.** Um item que parece ausente
   na seção esperada costuma estar em outra.
2. **Uma única rodada de perguntas.** Todos os BLOCKERs são consolidados e
   perguntados juntos — nunca um de cada vez, nunca no meio da construção.
3. **BLOCKER não paralisa o projeto.** Tudo que não depende da informação em
   falta continua sendo construído enquanto se aguarda a resposta.
4. **Nada de pergunta redundante.** Se está no BUILD-SPEC, está decidido; não
   se pede confirmação de informação já fornecida.
5. **Decisão tomada é decisão registrada.** Toda escolha feita no lugar da
   spec entra em `PROJECT-STATE.md` › *Decisões técnicas tomadas*.
6. **Nunca inventar fato verificável.** Preço, número, prêmio, prazo, registro
   profissional e depoimento não são criativos — são dados.
7. **A validação não é automatizada por script.** Depende de julgamento sobre
   sentido, não de presença de palavras-chave; um verificador por `grep`
   aprovaria uma seção preenchida com texto vazio.
