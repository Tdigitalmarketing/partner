# Contrato do BUILD-SPEC

Referência para a ferramenta externa que produz o `BUILD-SPEC.md`, e para
Claude ao interpretá-lo.

O BUILD-SPEC é a **fonte principal de verdade** do projeto. O que estiver
nele não é perguntado de novo.

## Como Claude lê o arquivo

A leitura é **por significado, não por formato**. Títulos podem variar,
seções podem estar em outra ordem, o conteúdo pode estar em prosa ou tabela.
Claude localiza a informação onde ela estiver. As seções abaixo descrevem o
que precisa existir — não uma sintaxe obrigatória.

Quando um ponto for deliberadamente delegado, escrever no lugar dele:

```
DECISÃO TÉCNICA: CLAUDE
```

Isso é tratado como INFO pela validação: Claude decide, justifica e registra.

## Seções esperadas

| # | Seção | Conteúdo essencial |
| --- | --- | --- |
| 1 | Identificação | Nome do projeto e da empresa, segmento, praça de atuação |
| 2 | Objetivo | O que a página precisa fazer acontecer |
| 3 | Conversão | Ação principal, canal e **destino técnico**: número de WhatsApp com DDI, endpoint do formulário, URL de agendamento ou checkout. Conversões secundárias |
| 4 | Público | Quem é, dor/desejo, estágio de consciência, origem provável do tráfego |
| 5 | Oferta | O que é vendido, preço e condições (ou "não exibir preço"), garantia, prazo, urgência real |
| 6 | Proposta de valor | Diferencial central, diferenciais de apoio, prova disponível, objeções a quebrar |
| 7 | Arquitetura | Sequência de seções, com a função de cada uma na jornada |
| 8 | Copy | Headline, subheadline, corpo, CTAs e microcopy por seção. Marcar o que é texto final e o que é direção |
| 9 | Identidade visual | Cores (hex), tipografia, logo (caminho do arquivo), tom de voz |
| 10 | Direção de arte | Estilo, ritmo visual, tratamento de imagem, referências, o que evitar |
| 11 | Plano de imagens | Uma entrada por imagem: nome do arquivo, seção de destino, função, proporção, briefing visual, origem (gerar por IA / fornecida pelo cliente) |
| 12 | Responsividade | Breakpoints e comportamento mobile, se houver exigência específica |
| 13 | SEO | Title, meta description, palavras-alvo, URL canônica, tipo de schema, imagem de OG |
| 14 | Requisitos técnicos | Stack, hospedagem, domínio, analytics (IDs de pixel/GA4), integrações, LGPD |
| 15 | Pendências | O que ficou em aberto na produção da spec |
| 16 | Definição de pronto | Critérios de aceite. Omitir equivale a adotar `docs/CHECKLIST-QA.md` |

## Regras

- **Nunca incluir credenciais no BUILD-SPEC.** Sem chaves de API, senhas,
  tokens ou secrets. Número de WhatsApp, endpoint público de formulário e ID
  de pixel são dados de configuração e podem constar.
- **Fato verificável precisa de fonte.** Preço, número de clientes, tempo de
  mercado, prêmio, resultado e depoimento devem vir do cliente. O que não
  vier, não vai para a página.
- **Imagens de prova real não são geradas por IA** — foto do time, da
  clínica, do imóvel, do produto entregue. Marcar como fornecida pelo cliente.
- **Preferir especificidade a volume.** Um plano de imagens com três entradas
  bem descritas vale mais que doze genéricas.

## Fluxo depois da entrega do arquivo

```
BUILD-SPEC.md → validação → projeto isolado → planejamento técnico →
assets → construção → responsividade → conversão → SEO → QA → prévia →
aprovação do usuário → publicação (somente autorizada)
```
