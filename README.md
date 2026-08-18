# TDigital — Fábrica de Landing Pages

Repositório de produção de Landing Pages da TDigital. A doutrina completa de
operação está em [`CLAUDE.md`](CLAUDE.md) e é carregada automaticamente pelo
Claude a cada sessão.

## Como iniciar uma LP

### Modo A — BUILD-SPEC (preferencial)

Forneça um `BUILD-SPEC.md` produzido externamente. Ele é a **fonte principal de
verdade** do projeto: o que estiver nele não é perguntado de novo.

```
BUILD-SPEC.md → validação → projeto isolado → planejamento → assets →
construção → responsividade → conversão → SEO → QA → prévia →
aprovação → publicação (somente autorizada)
```

- Seções esperadas no arquivo: [`docs/BUILD-SPEC-CONTRATO.md`](docs/BUILD-SPEC-CONTRATO.md)
- Critérios de validação: [`docs/BUILD-SPEC-VALIDATION.md`](docs/BUILD-SPEC-VALIDATION.md)
- Claude só interrompe diante de **BLOCKER** — e consolida todas as pendências
  bloqueantes em uma única pergunta, seguindo com o resto da página.

Criação da estrutura isolada:

```bash
scripts/new-lp.sh "Clínica Vitalis" caminho/para/BUILD-SPEC.md
```

### Modo B — NOVA LP

Quando não existe BUILD-SPEC. Envie uma mensagem começando com `NOVA LP` e o
que já se sabe do projeto:

```
NOVA LP

Empresa: Clínica Vitalis
Segmento: Odontologia
Objetivo: gerar agendamentos
Conversão: WhatsApp
Público: 40+
Serviço: implantes dentários
Identidade: sofisticada e acolhedora
```

Claude interpreta o briefing, decide o que puder decidir com segurança,
pergunta apenas o que for indispensável e executa as 10 fases da fábrica.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `lps/<cliente>/` | uma pasta por Landing Page: spec, manifesto, código, imagens |
| `shared/` | infraestrutura técnica reutilizável, sem identidade visual |
| `scripts/new-lp.sh` | cria a estrutura isolada de um projeto novo |
| `docs/BUILD-SPEC-CONTRATO.md` | seções esperadas no BUILD-SPEC |
| `docs/BUILD-SPEC-VALIDATION.md` | classificação INFO / WARNING / BLOCKER |
| `docs/BRIEFING.md` | modelo de briefing do Modo B |
| `docs/CHECKLIST-QA.md` | checklist obrigatório antes da entrega |
| `docs/templates/` | modelos de `PROJECT-STATE.md` e do README do projeto |
| `public/images/` | assets globais (logo TDigital, ícones compartilhados) |

Cada projeto carrega um `PROJECT-STATE.md` — etapas concluídas, pendências
bloqueantes e não bloqueantes, assets gerados e decisões técnicas — atualizado
durante toda a execução.

`shared/` existe para ganhar eficiência em **processo e código** — reset,
revelação ao scroll, links de WhatsApp rastreados, formulário de leads e
esqueleto de `<head>` com SEO. Identidade visual, estrutura de seções, copy e
imagens são sempre criadas do zero para cada cliente.

## Ambiente

Secrets nunca são versionados. Copie `.env.example` para `.env` e preencha
localmente — `.env` está no `.gitignore`.

## Publicação

Publicar em produção e fazer merge na `main` exigem autorização explícita.
Desenvolvimento ocorre em `claude/tdigital-landing-factory-icthgl`.
