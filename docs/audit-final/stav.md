# Finální audit — stav všech bodů

Každý bod je evidován samostatně. Výchozí produkce: b2ccf03.

| Bod | Oblast | Stav | Důkaz / omezení |
|---|---|---|---|
| 1 | HLAVNÍ POSITIONING | Nasazeno a ověřeno | Tři hlavní služby; dotace jako financování, specializace v dalších formátech. |
| 2 | HLAVNÍ PROBLÉM SOUČASNÉHO WEBU | Nasazeno a ověřeno | Homepage: 14 → 9 hlavních sekcí, výška 8 809 → 4 992 px při šířce 1 280 px (−43 %). Viditelný text 1 235 → 603 slov (−51 %); větší redukce souvisí také s odloženou case study. Bez doplňování výplně. |
| 3 | HOMEPAGE – NOVÁ STRUKTURA | Nasazeno a ověřeno | Hero bez fotografie, přesný H1, hlavní CTA a přímý odkaz na novou stránku školení. Původní pohyblivá loga zachována. |
| 4 | HLAVNÍ SLUŽBY | Nasazeno a ověřeno | 3 karty: školení od 49 900 Kč, audit od 35 000 Kč, implementace. |
| 5 | ODSTRANIT VELKÝ USE-CASE BLOK | Nasazeno a ověřeno | Homepage má 5 krátkých příkladů; podrobné oddělové příklady a nástroje přesunuty na školení. |
| 6 | CASE STUDY | Odloženo uživatelem | Odloženo výslovným pokynem uživatele: Demaxie a SAREZA nyní neřešit. |
| 7 | DOTACE | Nasazeno a ověřeno | Blok podpory na homepage; kalkulačka se otevře pod CTA. Na /dotace-na-skoleni je rovnou pod hero. |
| 8 | ODSTRANIT ROI KALKULAČKU RUTINNÍ PRÁCE | Nasazeno a ověřeno | ROI kalkulačka není na homepage. Zdroj komponenty zachován. |
| 9 | JAK SPOLUPRÁCE FUNGUJE | Nasazeno a ověřeno | Tři stručné kroky: příležitosti, tým, řešení. |
| 10 | REFERENCE | Nasazeno a ověřeno | 3 zkrácené existující citace a /reference. Nepotvrzené aktuální souhrnné hodnocení 5/40 odstraněno; odkaz na Google zachován. |
| 11 | TÝM | Odloženo uživatelem | Odloženo výslovným pokynem uživatele: lektory zatím neřešit. Jména ani fotografie nevymyšleny. |
| 12 | FAQ | Nasazeno a ověřeno | 7 stručných FAQ ze společného zdroje pro text i schema. |
| 13 | FINAL CTA | Nasazeno a ověřeno | Jednokrokový formulář: jméno, firma, e-mail, nepovinný telefon a zpráva. Test zachování údajů při chybě a úspěchu prošel. |
| 14 | CTA SYSTÉM CELÉHO WEBU | Nasazeno a ověřeno | CTA podle typu služby; poptávkové odkazy předávají zájem. Informativní odkazy školení vedou na hlavní stránku. |
| 15 | SEO PRIORITA – AI ŠKOLENÍ PRO FIRMY | Nasazeno a ověřeno | Nová /ai-skoleni-pro-firmy. |
| 16 | AI ŠKOLENÍ PRO FIRMY – SEO METADATA | Nasazeno a ověřeno | Přesný SEO title, description a H1 dle zadání. |
| 17 | HERO LANDING PAGE AI ŠKOLENÍ | Nasazeno a ověřeno | Dvě CTA: Poptat AI školení a Zobrazit formáty a ceny. |
| 18 | TRUST – AI ŠKOLENÍ | Hotovo s uvedeným omezením | Původní loga a celá ČR. Bez neověřeného tvrzení o 1 000 hodinách. |
| 19 | PRO KOHO JE AI ŠKOLENÍ | Nasazeno a ověřeno | Krátká úvodní sekce pro oddělení; podrobné příklady přesunuty níže z homepage. |
| 20 | CO SE ÚČASTNÍCI NAUČÍ | Nasazeno a ověřeno | 6 praktických dovedností. |
| 21 | FORMÁTY AI ŠKOLENÍ | Nasazeno a ověřeno | 8 h / 49 900; 16 h / 99 000; 50 h / 299 000; 80 h / 479 000 Kč. |
| 22 | DPH | Nasazeno a ověřeno | Uživatel potvrdil neplátcovství. Odstraněno s DPH, vysvětleny konečné ceny. |
| 23 | INTERNÍ LINKING | Nasazeno a ověřeno | Navigace, footer, služby, specializace a všech 7 nových článků odkazují na hlavní školení. |
| 24 | JEDNODENNÍ A DVODENNÍ ŠKOLENÍ | Nasazeno a ověřeno | Původní jednodenní a dvoudenní URL zachovány a propojeny s hlavní kategorií. 301 se bez GSC/backlink dat neprovádí. |
| 25 | SLUŽBY – NOVÁ ARCHITEKTURA | Nasazeno a ověřeno | Přehled: školení, audit, implementace; financování a další formáty odděleny. |
| 26 | FINANČNÍ GRAMOTNOST A DIGITÁLNÍ MARKETING | Nasazeno a ověřeno | Finanční gramotnost a digitální marketing v Ostatních programech. |
| 27 | DOTACE – SEO A OBSAH | Nasazeno a ověřeno | Sazby ověřeny proti podmínkám ÚP účinným od 1. 7. 2026; transparentní 12% administrace a vysvětlení zůstatku. Zastaralá propagace Digi odstraněna. |
| 28 | KALKULAČKA – SKUPINY | Nasazeno a ověřeno | Počet skupin automaticky ceil(osoby/15); ruční složení a automatické rozdělení zachovány. Nula i smíšené skupiny ověřeny testem. |
| 29 | BLOG / CONTENT CLUSTER | Hotovo s uvedeným omezením | 7 nových praktických článků s interními odkazy; původní 2 články Sanity zachovány. 2 case studies odloženy dle uživatele. |
| 30 | CASE STUDIES | Hotovo s uvedeným omezením | Nepublikovaná šablona docs/audit-final/sablona-pripadove-studie.md; veřejné stránky čekají na podklady a pokyn uživatele. |
| 31 | TECHNICKÉ SEO | Ověřeno s uvedeným omezením | Lokální HTTP audit 29 canonical URL: sitemap bez parametrů, canonical, 404, vnitřní kotvy. Robots /studio; HTTPS a www redirect ověřeny: 308 přímo na canonical HTTPS adresu. |
| 32 | STRUCTURED DATA | Nasazeno a ověřeno | Organization, Service, BreadcrumbList, FAQPage na skutečných FAQ a Article. JSON-LD parsování všech 29 stránek prošlo. Žádná aggregateRating. |
| 33 | ON-PAGE SEO | Nasazeno a ověřeno | 29 stránek: unikátní title/description, 1 H1, canonical, OG a alt atributy ověřeny HTTP testem. |
| 34 | IMAGE SEO | Nasazeno a ověřeno | Galerie WebP, Next Image AVIF/WebP. Původní barevná loga zachována; nová hero fotografie se nepřidává. |
| 35 | CORE WEB VITALS | Ověřeno s uvedeným omezením | Homepage first-load JS 138 kB. Kalkulačka na homepage připojena až po otevření; pohyb log lze zastavit. Lighthouse produkce: mobil 97/100, desktop 99/100; přístupnost, best practices a SEO 100/100. Mobilní LCP 2,6 s, CLS 0, TBT 50 ms. Reálná CrUX/INP data zatím nejsou dostupná. |
| 36 | MOBILE | Ověřeno s uvedeným omezením | Mobil 390 px: bez horizontálního přetečení, iframe roste s obsahem; 16 HPP + 4 IČO, 80 h → 695 517 Kč. Ověřeny také šířky 768 a 1 280 px; mobilní menu a předání tématu formuláři fungují. |
| 37 | TEXTY – STYLE GUIDE | Nasazeno a ověřeno | Nové texty stručné a praktické, články obsahují konkrétní postupy. |
| 38 | NEPOUŽÍVAT AI SLOP | Nasazeno a ověřeno | Kontrola zakázaných frází v upravovaném obsahu; žádné přidány. |
| 39 | NADPISY | Nasazeno a ověřeno | Konkrétní nadpisy služby, úkolů a výstupů. |
| 40 | CENY | Nasazeno a ověřeno | Globální zdrojová i HTTP kontrola 29 stránek: žádné staré 60/115/350/550 tisíc ani ceny s DPH. |
| 41 | NAVIGACE | Nasazeno a ověřeno | 6 odkazů dle auditu a konzultace v hlavičce. |
| 42 | FOOTER | Nasazeno a ověřeno | Služby, specializace, firma, právní odkazy. Sesterský AI Kroužek úplně poslední v patičce. |
| 43 | PRIORITY IMPLEMENTACE | Hotovo s uvedeným omezením | P0/P1/P2 provedeny dle checklistu; explicitně odložené části a závislost na GSC evidovány. |
| 44 | CO NEDĚLAT | Nasazeno a ověřeno | Stávající branding a vizuální styl zachovány. Žádné fiktivní výsledky ani generické desítky článků. |
| 45 | FINÁLNÍ PRINCIP | Nasazeno a ověřeno | Homepage nabízí naučit tým / najít příležitosti / zavést řešení, dotace jako financování. |
| 46 | SEO CÍL | Nasazeno a ověřeno | Hlavní SEO URL podpořena interními odkazy. Žádné garance pozice; další stránky až podle dat. |
| 47 | PO NASAZENÍ | Ověřeno s uvedeným omezením | Nasazeno 7. 10. 2026, commit 8a297e4 (PR #2). Produkční HTTP kontrola 29 adres prošla, prohlížeč a Lighthouse ověřeny. GSC: přihlášený účet má pouze novostavbyonline.cz, AIKONIC není dostupný; žádost o indexování nelze odeslat. |

## Ověření
- ESLint, TypeScript, produkční build: prošly.
- tests/cro-flows.cjs a tests/subsidy-calculator.cjs: prošly; síť simulovaná, žádné testovací poptávky odeslány.
- tests/seo-audit.cjs: 29 URL, prošlo na lokálním produkčním sestavení i živé doméně https://aikonic.cz po dokončení nasazení.
- Základ pro porovnání: produkce b2ccf03, hlavní obsah bez patičky. Nová homepage měřena se zavřenou kalkulačkou.

## Další práce závislá na datech
- Přidat/přepnout ověřenou službu aikonic.cz v Search Console a odeslat hlavní URL k indexaci.
- Před slučováním starých URL vyhodnotit organické vstupy a externí odkazy.
- Backlinky: nejdříve inventura v GSC, potom schválené klientské reference a relevantní partnerské odkazy; žádné hromadné oslovování ani nákup odkazů.
- Po publikaci sledovat dotazy a konverze. Pole INP vyžaduje reálná návštěvnická data; laboratorní test ho nenahrazuje.

## Produkční release
- https://aikonic.cz — READY, aplikační commit `8a297e4783b9eef10749bc76a5e39920f3e6f01a`.
- PR: https://github.com/kurzy-aikonic/Akonic.cz-web/pull/2 (sloučeno).
- Vercel deployment: `dpl_5WPC9ka4evdjLYoPKhA5v11XiM7V`; sestavení úspěšné, žádná chyba sestavení.
- Kontrola veřejné domény: všech 29 stránek v sitemapě vrací 200, testovací neexistující URL vrací 404.
- Preview chráněn Vercel přihlášením; sitemap ověřena přes autorizované `vercel curl`. Ochrana nebyla vypnuta.
- Žádné skutečné testovací poptávky nebyly odeslány. Doručení do firemní schránky není touto kontrolou ověřené.

## Lighthouse / PageSpeed Insights
Měření z 7. 10. 2026 23:56 SELČ, Lighthouse 13.5.0:
https://pagespeed.web.dev/analysis/https-aikonic-cz/qm3fgetfs4?form_factor=mobile

| Metrika | Mobil | Desktop |
|---|---:|---:|
| Výkon | 97 | 99 |
| Přístupnost | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 0,9 s | 0,3 s |
| LCP | 2,6 s | 0,5 s |
| TBT | 50 ms | 30 ms |
| CLS | 0 | 0,001 |

Jde o laboratorní měření jedné stránky, ne hodnocení Core Web Vitals reálných návštěvníků ani záruku pozice ve vyhledávání. CrUX pro web uvádí „Žádná data“. Mobilní LCP je těsně nad hranicí 2,5 s; další optimalizace mají vycházet z opakovaných dat. API PageSpeed vrátilo kvótu 429, měření přes webové rozhraní proběhlo úspěšně.

## Zdroje
- Dotační program: https://up.gov.cz/vzdelavani-pro-firmy (podmínky verze 12 účinné od 1. 7. 2026, str. 4–5; sazby po spoluúčasti).
- AI gramotnost: https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy
- Pravidla firemních dat: https://openai.com/business-data/
- Microsoft: https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy
- Anthropic: https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training
- DPH: výslovné potvrzení uživatele v tomto chatu.
