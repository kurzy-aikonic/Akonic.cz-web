# AIKONIC

Zdroj webu [aikonic.cz](https://aikonic.cz).

## Jak přidat článek na blog

Články jsou samostatné soubory ve složce `content/blog/`. Nový úterní článek přidáte jedním commitem: nový JSON a případně obrázek. Jiný kód se nemění.

### Soubor

Název: `content/blog/vas-slug.json`

Povinná pole:

| Pole | Význam |
|---|---|
| `slug` | Adresa `/blog/vas-slug`. Bez diakritiky, malá písmena, pomlčky. |
| `title` | Nadpis článku. |
| `excerpt` | Perex. Krátký odstavec na kartě i v popisu stránky. |
| `publishedAt` | Datum `RRRR-MM-DD`. Úterní článek dejte na úterý. |
| `sections` | Text. Každá sekce má volitelný `heading`, `paragraphs` (odstavce) a `list` (odrážky). |

Volitelná pole:

| Pole | Význam |
|---|---|
| `tags` | Štítky, nejvýše dva se ukážou na kartě. Bez pole se použije „AI pro firmy“. |
| `image` | Cesta k obrázku z `public/`, například `/blog/nazev.png`. Velká a malá písmena musí sedět s názvem souboru. |
| `imageAlt` | Popis obrázku. Povinný, jakmile je `image`. |
| `sources` | Odkazy na konci: `{ "title": "…", "url": "https://…" }`. |
| `sourceNote` | Krátká věta pod zdroji. Datum ověření a omezení zdroje. |

V odstavci i odrážce funguje `**tučný text**` a odkaz `[text](https://example.com)`.

### Obrázky

Soubor uložte do `public/blog/` jako **PNG nebo WebP**. V článku uveďte cestu od kořene webu, například `"image": "/blog/nazev.png"`. Název v cestě musí být stejný jako soubor, včetně velkých a malých písmen. Server na Linuxu je rozlišuje.

SVG na kartu nepoužívejte. Prohlížeč ho bere jako XML v UTF-8. Když se diakritika uloží jako Windows-1250, adresa sice vrátí 200 a `image/svg+xml`, ale obrázek je neplatný a na stránce zůstane prázdný rámeček. Stejně dopadne SVG bez hlavičky `<?xml version="1.0" encoding="UTF-8"?>`, když soubor není opravdu UTF-8.

Před commitem soubor otevřete v prohlížeči. Má se zobrazit kresba, ne prázdné okno. Kontrola z příkazové řádky:

```bash
file public/blog/nazev.png
curl -sI https://aikonic.cz/blog/nazev.png | head
```

`file` má u PNG napsat `PNG image data`. Po nasazení má `curl` ukázat `HTTP/2 200` a `content-type: image/png` (u WebP `image/webp`).

Vzhled: světlé pozadí, modrá `#2563EB`, text `#0F172A`, zaoblené karty. Bez vymyšlených čísel a bez cizích log.

Náhled pro sdílení (OG) se složí sám z nadpisu, data a štítků. Je to PNG na adrese `/blog/vas-slug/opengraph-image`. Karta článku používá pole `image`.

### Datum a skrytí

Web porovnává `publishedAt` s dnešním dnem v časovém pásmu Europe/Prague. Článek s budoucím datem není ve výpisu, na své adrese ani v sitemapě. V den data se objeví sám, bez dalšího commitu.

Lokální náhled budoucího článku:

```bash
BLOG_AS_OF=2026-10-20 npm run dev
```

Na hostingu proměnnou `BLOG_AS_OF` nenastavujte. Jinak by se posunulo zveřejnění všech článků.
