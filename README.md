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
| `image` | Cesta k obrázku z `public/`, například `/blog/nazev.svg`. |
| `imageAlt` | Popis obrázku. Povinný, jakmile je `image`. |
| `sources` | Odkazy na konci: `{ "title": "…", "url": "https://…" }`. |
| `sourceNote` | Krátká věta pod zdroji. Datum ověření a omezení zdroje. |

V odstavci i odrážce funguje `**tučný text**` a odkaz `[text](https://example.com)`.

### Obrázky

Soubor uložte do `public/blog/`. Hodí se SVG ve stylu webu: světlé pozadí, modrá `#2563EB`, text `#0F172A`, zaoblené karty. Bez vymyšlených čísel a bez cizích log. Na kartě článku se použije `image`. Náhled pro sdílení (OG) se složí sám z nadpisu, data a štítků.

### Datum a skrytí

Web porovnává `publishedAt` s dnešním dnem v časovém pásmu Europe/Prague. Článek s budoucím datem není ve výpisu, na své adrese ani v sitemapě. V den data se objeví sám, bez dalšího commitu.

Lokální náhled budoucího článku:

```bash
BLOG_AS_OF=2026-10-20 npm run dev
```

Na hostingu proměnnou `BLOG_AS_OF` nenastavujte. Jinak by se posunulo zveřejnění všech článků.
