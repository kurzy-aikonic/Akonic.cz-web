# Finální audit — stav všech bodů

Každý bod je evidován samostatně. Výchozí produkce: b2ccf03.

| Bod | Oblast | Stav | Důkaz / omezení |
|---|---|---|---|
| 1 | HLAVNÍ POSITIONING | Ověřeno lokálně | Tři hlavní služby; dotace jako financování, specializace v dalších formátech. |
| 2 | HLAVNÍ PROBLÉM SOUČASNÉHO WEBU | Ověřeno lokálně | Homepage: 14 → 9 hlavních sekcí, výška 8 809 → 4 992 px při šířce 1 280 px (−43 %). Viditelný text 1 235 → 603 slov (−51 %); větší redukce souvisí také s odloženou case study. Bez doplňování výplně. |
| 3 | HOMEPAGE – NOVÁ STRUKTURA | Ověřeno lokálně | Hero bez fotografie, přesný H1, hlavní CTA a přímý odkaz na novou stránku školení. Původní pohyblivá loga zachována. |
| 4 | HLAVNÍ SLUŽBY | Ověřeno lokálně | 3 karty: školení od 49 900 Kč, audit od 35 000 Kč, implementace. |
| 5 | ODSTRANIT VELKÝ USE-CASE BLOK | Ověřeno lokálně | Homepage má 5 krátkých příkladů; podrobné oddělové příklady a nástroje přesunuty na školení. |
| 6 | CASE STUDY | Odloženo uživatelem | Odloženo výslovným pokynem uživatele: Demaxie a SAREZA nyní neřešit. |
| 7 | DOTACE | Ověřeno lokálně | Blok podpory na homepage; kalkulačka se otevře pod CTA. Na /dotace-na-skoleni je rovnou pod hero. |
| 8 | ODSTRANIT ROI KALKULAČKU RUTINNÍ PRÁCE | Ověřeno lokálně | ROI kalkulačka není na homepage. Zdroj komponenty zachován. |
| 9 | JAK SPOLUPRÁCE FUNGUJE | Ověřeno lokálně | Tři stručné kroky: příležitosti, tým, řešení. |
| 10 | REFERENCE | Ověřeno lokálně | 3 zkrácené existující citace a /reference. Nepotvrzené aktuální souhrnné hodnocení 5/40 odstraněno; odkaz na Google zachován. |
| 11 | TÝM | Odloženo uživatelem | Odloženo výslovným pokynem uživatele: lektory zatím neřešit. Jména ani fotografie nevymyšleny. |
| 12 | FAQ | Ověřeno lokálně | 7 stručných FAQ ze společného zdroje pro text i schema. |
| 13 | FINAL CTA | Ověřeno lokálně | Jednokrokový formulář: jméno, firma, e-mail, nepovinný telefon a zpráva. Test zachování údajů při chybě a úspěchu prošel. |
| 14 | CTA SYSTÉM CELÉHO WEBU | Ověřeno lokálně | CTA podle typu služby; poptávkové odkazy předávají zájem. Informativní odkazy školení vedou na hlavní stránku. |
| 15 | SEO PRIORITA – AI ŠKOLENÍ PRO FIRMY | Ověřeno lokálně | Nová /ai-skoleni-pro-firmy. |
| 16 | AI ŠKOLENÍ PRO FIRMY – SEO METADATA | Ověřeno lokálně | Přesný SEO title, description a H1 dle zadání. |
| 17 | HERO LANDING PAGE AI ŠKOLENÍ | Ověřeno lokálně | Dvě CTA: Poptat AI školení a Zobrazit formáty a ceny. |
| 18 | TRUST – AI ŠKOLENÍ | Hotovo s uvedeným omezením | Původní loga a celá ČR. Bez neověřeného tvrzení o 1 000 hodinách. |
| 19 | PRO KOHO JE AI ŠKOLENÍ | Ověřeno lokálně | Krátká úvodní sekce pro oddělení; podrobné příklady přesunuty níže z homepage. |
| 20 | CO SE ÚČASTNÍCI NAUČÍ | Ověřeno lokálně | 6 praktických dovedností. |
| 21 | FORMÁTY AI ŠKOLENÍ | Ověřeno lokálně | 8 h / 49 900; 16 h / 99 000; 50 h / 299 000; 80 h / 479 000 Kč. |
| 22 | DPH | Ověřeno lokálně | Uživatel potvrdil neplátcovství. Odstraněno s DPH, vysvětleny konečné ceny. |
| 23 | INTERNÍ LINKING | Ověřeno lokálně | Navigace, footer, služby, specializace a všech 7 nových článků odkazují na hlavní školení. |
| 24 | JEDNODENNÍ A DVODENNÍ ŠKOLENÍ | Ověřeno lokálně | Původní jednodenní a dvoudenní URL zachovány a propojeny s hlavní kategorií. 301 se bez GSC/backlink dat neprovádí. |
| 25 | SLUŽBY – NOVÁ ARCHITEKTURA | Ověřeno lokálně | Přehled: školení, audit, implementace; financování a další formáty odděleny. |
| 26 | FINANČNÍ GRAMOTNOST A DIGITÁLNÍ MARKETING | Ověřeno lokálně | Finanční gramotnost a digitální marketing v Ostatních programech. |
| 27 | DOTACE – SEO A OBSAH | Ověřeno lokálně | Sazby ověřeny proti podmínkám ÚP účinným od 1. 7. 2026; transparentní 12% administrace a vysvětlení zůstatku. Zastaralá propagace Digi odstraněna. |
| 28 | KALKULAČKA – SKUPINY | Ověřeno lokálně | Počet skupin automaticky ceil(osoby/15); ruční složení a automatické rozdělení zachovány. Nula i smíšené skupiny ověřeny testem. |
| 29 | BLOG / CONTENT CLUSTER | Hotovo s uvedeným omezením | 7 nových praktických článků s interními odkazy; původní 2 články Sanity zachovány. 2 case studies odloženy dle uživatele. |
| 30 | CASE STUDIES | Hotovo s uvedeným omezením | Nepublikovaná šablona docs/audit-final/sablona-pripadove-studie.md; veřejné stránky čekají na podklady a pokyn uživatele. |
| 31 | TECHNICKÉ SEO | Čeká závěrečné ověření | Lokální HTTP audit 29 canonical URL: sitemap bez parametrů, canonical, 404, vnitřní kotvy. Robots /studio; HTTPS a www redirect ověřit po nasazení. |
| 32 | STRUCTURED DATA | Ověřeno lokálně | Organization, Service, BreadcrumbList, FAQPage na skutečných FAQ a Article. JSON-LD parsování všech 29 stránek prošlo. Žádná aggregateRating. |
| 33 | ON-PAGE SEO | Ověřeno lokálně | 29 stránek: unikátní title/description, 1 H1, canonical, OG a alt atributy ověřeny HTTP testem. |
| 34 | IMAGE SEO | Ověřeno lokálně | Galerie WebP, Next Image AVIF/WebP. Původní barevná loga zachována; nová hero fotografie se nepřidává. |
| 35 | CORE WEB VITALS | Čeká závěrečné ověření | Homepage first-load JS 138 kB. Kalkulačka na homepage připojena až po otevření; pohyb log lze zastavit. Lighthouse zbývá. |
| 36 | MOBILE | Čeká závěrečné ověření | Mobil 390 px: bez horizontálního přetečení, iframe roste s obsahem; 16 HPP + 4 IČO, 80 h → 695 517 Kč. Další šířky zbývají. |
| 37 | TEXTY – STYLE GUIDE | Ověřeno lokálně | Nové texty stručné a praktické, články obsahují konkrétní postupy. |
| 38 | NEPOUŽÍVAT AI SLOP | Ověřeno lokálně | Kontrola zakázaných frází v upravovaném obsahu; žádné přidány. |
| 39 | NADPISY | Ověřeno lokálně | Konkrétní nadpisy služby, úkolů a výstupů. |
| 40 | CENY | Ověřeno lokálně | Globální zdrojová i HTTP kontrola 29 stránek: žádné staré 60/115/350/550 tisíc ani ceny s DPH. |
| 41 | NAVIGACE | Ověřeno lokálně | 6 odkazů dle auditu a konzultace v hlavičce. |
| 42 | FOOTER | Ověřeno lokálně | Služby, specializace, firma, právní odkazy. Sesterský AI Kroužek úplně poslední v patičce. |
| 43 | PRIORITY IMPLEMENTACE | Hotovo s uvedeným omezením | P0/P1/P2 provedeny dle checklistu; explicitně odložené části a závislost na GSC evidovány. |
| 44 | CO NEDĚLAT | Ověřeno lokálně | Stávající branding a vizuální styl zachovány. Žádné fiktivní výsledky ani generické desítky článků. |
| 45 | FINÁLNÍ PRINCIP | Ověřeno lokálně | Homepage nabízí naučit tým / najít příležitosti / zavést řešení, dotace jako financování. |
| 46 | SEO CÍL | Ověřeno lokálně | Hlavní SEO URL podpořena interními odkazy. Žádné garance pozice; další stránky až podle dat. |
| 47 | PO NASAZENÍ | Čeká závěrečné ověření | Produkční nasazení a následná kontrola zbývají. GSC: přihlášený účet má pouze novostavbyonline.cz, AIKONIC není dostupný; žádost o indexování nelze odeslat. |

## Ověření
- ESLint, TypeScript, produkční build: prošly.
- tests/cro-flows.cjs a tests/subsidy-calculator.cjs: prošly; síť simulovaná, žádné testovací poptávky odeslány.
- tests/seo-audit.cjs: 29 URL, prošlo na lokálním produkčním sestavení.
- Základ pro porovnání: produkce b2ccf03, hlavní obsah bez patičky. Nová homepage měřena se zavřenou kalkulačkou.

## Další práce závislá na datech
- Přidat/přepnout ověřenou službu aikonic.cz v Search Console a odeslat hlavní URL k indexaci.
- Před slučováním starých URL vyhodnotit organické vstupy a externí odkazy.
- Backlinky: nejdříve inventura v GSC, potom schválené klientské reference a relevantní partnerské odkazy; žádné hromadné oslovování ani nákup odkazů.
- Po publikaci sledovat dotazy a konverze. Pole INP vyžaduje reálná návštěvnická data; laboratorní test ho nenahrazuje.
