#!/usr/bin/env python3
"""TDigital — baixa uma imagem do Worker do TDigital GPT e grava WebP responsivo.

    scripts/optimize-image.py <id-ou-arquivo> <destino.webp> [--widths 1600,1200,800]
    scripts/optimize-image.py <id> <destino.webp> --crop 4:3

Gera o arquivo principal e as variantes -<largura>w usadas no srcset.
"""
import argparse, io, pathlib, subprocess, sys
from PIL import Image

WORKER = "https://tdigital-gpt-mcp-v2.comercial-8e4.workers.dev/imagem/"


def carregar(origem: str) -> Image.Image:
    caminho = pathlib.Path(origem)
    if caminho.is_file():
        return Image.open(caminho).convert("RGB")
    resp = subprocess.run(["curl", "-sSfL", WORKER + origem], capture_output=True)
    if resp.returncode != 0:
        sys.exit(f"erro: download falhou para {origem}: {resp.stderr.decode()[:200]}")
    return Image.open(io.BytesIO(resp.stdout)).convert("RGB")


def cortar(img: Image.Image, proporcao: str) -> Image.Image:
    """Corta ao centro-superior: preserva rostos, que ficam no terço de cima."""
    pa, pb = (float(n) for n in proporcao.split(":"))
    alvo = pa / pb
    larg, alt = img.size
    if larg / alt > alvo:
        nova = int(alt * alvo)
        esq = (larg - nova) // 2
        return img.crop((esq, 0, esq + nova, alt))
    nova = int(larg / alvo)
    topo = int((alt - nova) * 0.35)
    return img.crop((0, topo, larg, topo + nova))


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("origem", help="ID retornado pelo gerar_imagem, ou arquivo local")
    p.add_argument("destino", help="caminho final .webp")
    p.add_argument("--widths", default="1600,1200,800,480")
    p.add_argument("--crop", default=None, help='proporção alvo, ex.: "4:3"')
    p.add_argument("--quality", type=int, default=82)
    args = p.parse_args()

    img = carregar(args.origem)
    if args.crop:
        img = cortar(img, args.crop)

    destino = pathlib.Path(args.destino)
    destino.parent.mkdir(parents=True, exist_ok=True)
    larguras = sorted({int(w) for w in args.widths.split(",")}, reverse=True)

    img.save(destino, "WEBP", quality=args.quality, method=6)
    saidas = [(destino, img.size)]

    for largura in larguras:
        if largura >= img.width:
            continue
        altura = round(img.height * largura / img.width)
        variante = destino.with_name(f"{destino.stem}-{largura}w{destino.suffix}")
        img.resize((largura, altura), Image.LANCZOS).save(
            variante, "WEBP", quality=args.quality, method=6
        )
        saidas.append((variante, (largura, altura)))

    for caminho, (w, h) in saidas:
        print(f"  {caminho}  {w}x{h}  {caminho.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
