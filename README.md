# TDigital — Fábrica de Landing Pages

Repositório de produção de Landing Pages da TDigital. A doutrina completa de
operação está em [`CLAUDE.md`](CLAUDE.md) e é carregada automaticamente pelo
Claude a cada sessão.

## Como iniciar uma LP

Envie uma mensagem começando com `NOVA LP` e o que já se sabe do projeto:

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
| `lps/<cliente>/` | uma pasta por Landing Page (HTML, CSS, JS, imagens, briefing) |
| `shared/` | infraestrutura técnica reutilizável, sem identidade visual |
| `docs/BRIEFING.md` | modelo de briefing e registro de decisões estratégicas |
| `docs/CHECKLIST-QA.md` | checklist obrigatório antes da entrega |
| `public/images/` | assets globais (logo TDigital, ícones compartilhados) |

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
