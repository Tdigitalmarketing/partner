#!/usr/bin/env bash
# TDigital — cria a estrutura isolada de uma nova Landing Page.
#
#   scripts/new-lp.sh "Clínica Vitalis" caminho/para/BUILD-SPEC.md
#   scripts/new-lp.sh "Clínica Vitalis"            # Modo B (NOVA LP)
#
# Nunca sobrescreve um projeto existente. Não gera código, não publica nada.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

die() { printf '\033[31merro:\033[0m %s\n' "$1" >&2; exit 1; }

[ $# -ge 1 ] || die "uso: scripts/new-lp.sh \"<Nome do Projeto>\" [caminho/BUILD-SPEC.md]"

PROJETO="$1"
SPEC_ORIGEM="${2:-}"

# Slug seguro: minúsculas, acentos transliterados, só [a-z0-9-].
# Transliteração por sed: iconv //TRANSLIT depende de locale e, sob C/ASCII,
# apaga os acentos em vez de convertê-los.
slugify() {
  printf '%s' "$1" | sed '
    s/á/a/g; s/à/a/g; s/â/a/g; s/ã/a/g; s/ä/a/g;
    s/Á/A/g; s/À/A/g; s/Â/A/g; s/Ã/A/g; s/Ä/A/g;
    s/é/e/g; s/è/e/g; s/ê/e/g; s/ë/e/g;
    s/É/E/g; s/È/E/g; s/Ê/E/g; s/Ë/E/g;
    s/í/i/g; s/ì/i/g; s/î/i/g; s/ï/i/g;
    s/Í/I/g; s/Ì/I/g; s/Î/I/g; s/Ï/I/g;
    s/ó/o/g; s/ò/o/g; s/ô/o/g; s/õ/o/g; s/ö/o/g;
    s/Ó/O/g; s/Ò/O/g; s/Ô/O/g; s/Õ/O/g; s/Ö/O/g;
    s/ú/u/g; s/ù/u/g; s/û/u/g; s/ü/u/g;
    s/Ú/U/g; s/Ù/U/g; s/Û/U/g; s/Ü/U/g;
    s/ç/c/g;
    s/Ç/C/g;
    s/ñ/n/g;
    s/Ñ/N/g;
    s/&/ e /g;
  ' | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//' \
    | cut -c1-60 \
    | sed -E 's/-+$//'
}

SLUG="$(slugify "$PROJETO")"
[ -n "$SLUG" ] || die "não foi possível derivar um slug de \"$PROJETO\""

DEST="$REPO_ROOT/lps/$SLUG"
[ -e "$DEST" ] && die "lps/$SLUG já existe. Escolha outro nome ou trabalhe no projeto existente."

if [ -n "$SPEC_ORIGEM" ]; then
  [ -f "$SPEC_ORIGEM" ] || die "BUILD-SPEC não encontrado: $SPEC_ORIGEM"
  ORIGEM="BUILD-SPEC"
  SPEC_RECEBIDO="x"
else
  ORIGEM="NOVA LP"
  SPEC_RECEBIDO=" "
fi

HOJE="$(date +%Y-%m-%d)"

mkdir -p "$DEST"/{public/images,src,assets/css,assets/js,docs}
[ -n "$SPEC_ORIGEM" ] && cp "$SPEC_ORIGEM" "$DEST/BUILD-SPEC.md"

# Preenchimento via awk com valores em -v: o nome do projeto é dado do usuário
# e pode conter &, \ e outros caracteres com significado especial em sed e em
# ${var//pat/repl} do bash 5.2.
awk -v proj="$PROJETO" -v slug="$SLUG" -v hoje="$HOJE" -v origem="$ORIGEM" -v rec="$SPEC_RECEBIDO" '
  /^Projeto:/            { print "Projeto: " proj; next }
  /^Slug:/               { print "Slug: " slug; next }
  /^Data de início:/     { print "Data de início: " hoje; next }
  /^Origem do briefing:/ { print "Origem do briefing: " origem; next }
  $0 == "[ ] BUILD-SPEC recebido" { print "[" rec "] BUILD-SPEC recebido"; next }
  { print }
' "$REPO_ROOT/docs/templates/PROJECT-STATE.md" > "$DEST/PROJECT-STATE.md"

awk -v proj="$PROJETO" '
  { while ((i = index($0, "{{PROJETO}}")) > 0)
      $0 = substr($0, 1, i - 1) proj substr($0, i + 11)
    print }
' "$REPO_ROOT/docs/templates/PROJECT-README.md" > "$DEST/README.md"

touch "$DEST/public/images/.gitkeep" "$DEST/src/.gitkeep" "$DEST/docs/.gitkeep"

printf '\033[32mprojeto criado:\033[0m lps/%s\n' "$SLUG"
printf '  origem do briefing: %s\n' "$ORIGEM"
[ -n "$SPEC_ORIGEM" ] && printf '  spec preservada em: lps/%s/BUILD-SPEC.md\n' "$SLUG"
printf '  próximo passo: validar (docs/BUILD-SPEC-VALIDATION.md)\n'
