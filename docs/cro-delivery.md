# AIKONIC CRO redesign — předání

Zadání: `aikonic_cro_codex_prompt.md`, dodané uživatelem 27. 9. 2026. Tento dokument nahrazuje starší návrh úprav jako specifikace redesignu homepage.

## A. Změny

Homepage nyní prezentuje AIKONIC jako partnera pro zavedení AI do firemní práce. Používá původní Next.js/React/Tailwind projekt, Geist, reálné fotografie, existující reference a ceny. Detailní stránky zůstávají zachované.

## B. Struktura

Header → asymetrický hero → statická klientská loga → výběr problému → oddělení/use cases → jediný čtyřkrokový proces → místo pro schválenou case study → tři reference → kalkulačka rutinní práce → dotační diagnostika → tři cenové karty → nástroje → fotografie → tým → FAQ → finální CTA → dvoukrokový kontakt → footer.

Case study se bez schválených dat nezobrazuje. Není vyplněna fiktivním klientem ani výsledky.

## C. Konverzní prvky

- Společný kontakt s předvýběrem tématu z hero, problémů, use cases, kalkulačky a cen.
- Formulář: téma → firma, jméno, e-mail, nepovinný telefon a zpráva.
- Dotační flow: počet lidí → téma → stejný kontakt, údaje se přidají do Formspree payloadu.
- Zachované Formspree napojení a honeypot; blokování duplicitního odeslání, zachování údajů při chybě, děkovací stav po úspěchu.
- Konzervativní kalkulačka: lidé × vlastní odhad hodin × 48 týdnů; žádná garantovaná finanční úspora.
- CTA eventy dle zadání; GA4/gtag nebo dataLayer. Bez souhlasu se nic neodesílá. Analytika neobsahuje osobní údaje formuláře.
- Mobilní dialog menu, Escape, návrat fokusu, nativní focus trap; ovladatelné záložky se šipkami/Home/End.

## D. Odstraněno nebo přesunuto

- Z prodejního obsahu homepage finance, marketing a velký banner kroužku. Odkazy a detailní stránky zůstávají dostupné.
- Nástrojové karty nahrazeny krátkým přehledem níže.
- Typovací demo a nadbytečná sekce About nejsou v homepage.
- Cenové bloky 50/80 hodin zůstávají na dotačním detailu, nikoli v hlavním ceníku homepage.
- Opakující se loga a duplikovaný desktop/mobile proces odstraněny.
- FOMO závěrečného CTA nahrazeno konzultací situace firmy.

## E. Data a omezení

- Case study: chybí schválená situace, realizované kroky a výstupy. Datový typ a komponenta jsou připravené v `components/cro/CaseStudy.tsx`.
- Lektoři: repo obsahuje role, nikoli ověřená jména, portréty a osobní bio. Ponechány dvě existující AI specializace, odstraněna finance specializace z homepage.
- Hodnocení 5,0/40 a ceny 35 000/49 900 Kč jsou převzaté z existujícího projektu. Nejsou tvrzením o novém externím ověření počtu recenzí.
- Dotační text používá program z dodaného zadání a projektu, neslibuje nárok ani výši podpory. Způsobilost konkrétní firmy musí být posouzena samostatně.
- Rezervační kalendář v projektu nebyl nalezen; nebyl vymyšlen.
- Žádné reálné zkušební leady nebyly odeslány. Odpovědi Formspree byly v integračním testu simulované; doručení do firemní schránky tím není ověřeno.

## F. Kontroly

- `npm run lint`: prošel, opraven nefunkční původní `next lint`, doplněna ESLint flat konfigurace.
- `npm run typecheck`: prošel.
- `npm run test:cro`: prošel; předvolba, souhlas, required validace, payload, chybový stav, zachování vstupů, úspěch, dotační handoff a absence osobních údajů v eventech.
- Produkční build: prošel s přístupem k existujícímu Sanity CMS. Bez sítě nelze předrenderovat blog/newsletter.
- Prohlížeč 390/768/1440 px: jeden H1, bez vodorovného overflow; konzole bez chyb. Desktop i mobil vizuálně zkontrolovány.
- Všech 12 hlavních obsahových lead CTA předvybírá správnou hodnotu.
- Tabs: kliknutí i ArrowRight. Menu: otevření, Escape a návrat fokusu. Dotační flow: 16–30 lidí, AI pro oddělení, předání do kontaktu.
- Kalkulačka: 6 × 4 = 24 h týdně, 1 152 h ročně.
- 13 interních stránek vrací HTTP 200, fragmentové odkazy mají existující cíle, žádné rozbité načtené obrázky.
- Canonical, OG a Twitter metadata zkontrolovány v DOM. Proces má čtyři kroky, tři klientská loga bez duplikace.
- Původní runtime chyba homepage OG obrázku odhalena HTTP testem a opravena explicitním flex layoutem.
- Hero používá optimalizované next/image, pevný poměr stran, sizes a prioritu. Galerie zůstává lazy-loaded. Bez autoplay videa a bez nové produkční závislosti.
- LCP/CLS/INP: nejsou k dispozici reprezentativní field hodnoty pro nový web. Vizuální kontrola neprokázala přetékání ani zjevný posun layoutu, ale nenahrazuje Core Web Vitals měření. Po nasazení vyhodnotit skutečná data; nevydávat laboratorní klikání za INP návštěvníků.

## G. Další A/B testy

1. Hero CTA „Zjistit možnosti pro naši firmu“ vs. „Probrat naši situaci“; hlavní metrika kvalifikované leady, vedlejší dokončení formuláře.
2. Výběr problému před vs. po ukázkách práce oddělení; sledovat cestu k odeslání, nejen kliknutí.
3. Dotační diagnostika vs. přímý dvoukrokový kontakt s tématem dotací.
4. Po doplnění schválené case study otestovat její vliv na leady oproti samotným recenzím.

Nerozhodovat podle samotného CTR a malých vzorků. Sledovat spam, relevanci firmy a navazující konzultace.

## Aktualizace 6. 10. 2026

Před nasazením sloučeny novější změny GitHub main včetně případových studií Google profilů a schváleného ceníku (49 900 / 99 000 Kč; dotované 50/80 hodin 299 000 / 479 000 Kč). Případové studie marketingu nebyly vydávány za výsledky AI implementace.
