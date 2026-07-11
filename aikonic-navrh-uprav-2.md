# aikonic.cz — Návrh úprav pro Cursor (v2, namapováno na repo)

Brief pro redesign a optimalizaci webu **AIKONIC**.
Repo: `kurzy-aikonic/Akonic.cz-web` — Next.js App Router · React · Tailwind (config v `tailwind.config.ts`) · Sanity CMS (newsletter) · framer-motion · lucide-react.
Referenční benchmark: **naucime.ai** — nekopírovat, ale převzít principy, díky kterým působí profesionálně a prodává.

Neměnit: `app/studio/**` (Sanity Studio), `middleware.ts` (CSP je nastavené dobře), `app/api/newsletter/route.ts`, pokud to úkol výslovně nevyžaduje.

---

## 0. Co dělá naucime.ai dobře (principy k převzetí)

Nekopíruj vzhled — replikuj mechaniku:

1. **Sociální důkaz hned v hero**: „4.9 z 768 hodnocení" + avatary reálných lidí vedle H1. Důvěra dřív, než návštěvník začne číst.
2. **Tři jasné produktové pilíře** (Kurzy / Konzultace / Klub): každý s fotkou, 4–6 benefity a JEDNÍM tlačítkem. Žádný seznam 9 karet.
3. **Pain-point sekce**: „Denně ztrácíte hodiny na rutinu" — mluví o problému zákazníka, ne o sobě.
4. **Lektoři se jmény, fotkami a bio** — 11 tváří. Lidé kupují od lidí.
5. **Recenze s fotkou a plným jménem**, ne jedna citace v carouselu.
6. **Profesionální fotografie** místo ikon — teplé, lidské, z reálných školení.
7. **Segmentace cílovek** ve footeru i navigaci: Pro OSVČ / Pro firmy / Pro školy.
8. **Garance** — snižuje riziko nákupu.
9. **Blog v navigaci** — obsahový SEO motor.
10. **Vzdušnost**: velké mezery, max. 2 barvy + neutrály, jednotná ikonografie.

Výhoda AIKONIC oproti referenci: **23 reálných fotek ze školení** (`public/gallery/`) a **konkrétní ceník s čísly** (`components/Pricing.tsx`). Na tom stavěj.

---

## 1. Grafika, UX a UI

### 1.1 Zaostřit positioning na homepage (P1 — nejdůležitější změna webu)

Homepage (`app/page.tsx`) míchá čtyři byznysy: AI školení + automatizace + finance + dětský kroužek. Title zní „AI Školení, Hackathony & Správa financí". Stránka skládá 13 sekcí za sebou (Hero → AiTypingDemo → Services → Process → Pricing → Gallery → About → Testimonials → SavingsCalculator → FAQ → CTA → Contact) — návštěvník se unaví dřív, než dojde ke kontaktu.

- [ ] **`components/Hero.tsx`**: hero má H1 + 4 odstavce textu + rotující slova (`words = ["Kurzy", "Hackathony", "Audit", "Finance"]`) + mini-hru. Zeštíhlit:
  - H1 nechat „Firemní AI vzdělávání na míru." + JEDEN podtitul s důkazem: „Stovky proškolených hodin po celé ČR — od úvodního workshopu po AI hackathon. Pomůžeme i s dotacemi Jsem v kurzu a Digi pro firmy."
  - Odstavce „Ráději rovnou konkrétní téma?…" a dlouhý blok o dotacích smazat (dotace = jedna věta v podtitulu + vlastní landing, viz 3.2).
  - Rotující slova odstranit — vizuální neklid bez informační hodnoty; „Finance" navíc posiluje rozostřený positioning.
  - Přidat **trust-řádek**: ★★★★★ „5.0 na Google" + 3 mini-loga klientů (viz 1.3).
- [ ] **`components/HeroGameWidget.tsx` / `HeroGame.tsx`**: mini-hru vyjmout z hero (B2B zákazník nepřišel hrát). Buď smazat, nebo přesunout dolů k `KonamiEaster.tsx` jako easter egg.
- [ ] **`components/AiTypingDemo.tsx`**: demo „VY/AI" hned pod hero odsouvá služby pod fold. Přesunout níž (za Services) nebo na stránku /ai-do-firmy.
- [ ] **Pořadí sekcí v `app/page.tsx`** změnit na prodejní logiku: Hero (s trust-řádkem) → Pain-points (nová, 2.2) → Services (3 pilíře, 1.2) → Process → Testimonials + Trust → Pricing → Gallery → FAQ → CTA → Contact. About sloučit s lektory (1.3), SavingsCalculator přesunout na /ai-do-firmy nebo těsně před Pricing.
- [ ] **Finance ze značky**: v `app/layout.tsx` title/description a v Hero odstranit „Správa financí" z hlavního claimu. Finanční gramotnost zůstává jako služba v přehledu.

### 1.2 Přestavět Services na 3 pilíře (P1)

`components/Services.tsx`: 9 karet v gridu, href se počítá vnořeným ternárem (řádky 143–158), „Automatizace na míru" a „Vibe coding" padají na `/#contact`.

- [ ] Refaktor dat: do pole `services` přidat pole `href` a `pillar`, smazat ternár.
- [ ] Homepage zobrazí **3 pilíře** (velké karty s fotkou z `public/gallery/`, 4 benefity, 1 CTA):
  1. **Školení a hackathony** → /sluzby (nalejvárna 1 den, 2 dny, hackathon, obchodníci, vibe coding)
  2. **AI audit a implementace** → /audit (audit, AI do firmy, automatizace)
  3. **Finanční vzdělávání** → /financni-gramotnost
  Kompletní grid 9 služeb přesunout na `app/sluzby/page.tsx` (tam patří).
- [ ] `card-shimmer` efekt a `glow-*` stíny (definované v `tailwind.config.ts`) z karet odebrat nebo nechat jen na hover primárního CTA — 9 blikajících karet s glow je vizuální šum.
- [ ] **Sekce „AI Kroužek pro děti"** (`Services.tsx:181–215`): předělat na kompaktní banner s odkazem na `https://krouzekumeleinteligence.cz` místo `/#contact` — dětský web má vlastní registrační funnel. (Texty viz 2.1.)

### 1.3 Sociální důkaz posílit a posunout výš (P1)

- [ ] **`components/Testimonials.tsx`**: existují 4 recenze se jmény a firmami, ale carousel zobrazuje jen jednu. Předělat na **grid 2×2** (všechny viditelné, i pro SEO) — carousel skrývá 75 % důkazů. Doplnit hvězdičky ke každé, odkaz na Google Maps nechat.
- [ ] **`components/Trust.tsx`**: 3 loga se zacyklují 3× v marquee (`looped = [...companies, ...companies, ...companies]`) — opakování je vidět a působí jako maskování malého počtu. Do ~6 log zobrazit **staticky** v řadě, marquee až od 6+. Titulek „Školili jsme mimo jiné".
- [ ] **Trust-řádek do Hero**: hvězdy + „5.0 na Google" + odkaz na recenze (data máte v Testimonials).
- [ ] **Nová sekce Lektoři** (nová komponenta `components/Team.tsx`, zapojit místo/vedle `About.tsx`): min. 2–3 profily — jméno, fotka, 2 věty (specializace + kde školil). Na webu není jediná tvář; pro službu postavenou na lektorech je to největší mezera v důvěryhodnosti. Meta keywords zmiňují „Radek Aigel" — pokud je to zakladatel, dát mu tvář a 3 věty „proč Aikonic vznikl" v `About.tsx`.

### 1.4 Opravit skutečné bugy (P1)

- [ ] **Chybí `/og-image.png`** — `app/layout.tsx` (twitter) a **všech 7 podstránek** (`app/audit/page.tsx:23`, `app/sluzby/page.tsx:23`, `app/ai-hackathon/page.tsx:44,50`, `app/skoleni-pro-obchodniky/page.tsx:23,29`, `app/financni-gramotnost/page.tsx:23,29`, `app/jednodenni-skoleni-ai/page.tsx:29`, `app/dvoudenni-skoleni-ai`) odkazuje na `/og-image.png`, který v `public/` **neexistuje** → sdílené odkazy na LinkedIn/FB mají rozbitý náhled. Řešení: buď vygenerovat statický `public/og-image.png` (1200×630), nebo lépe — každé podstránce dát vlastní `opengraph-image.tsx` (homepage už ho má v `app/opengraph-image.tsx`, použít jako šablonu s parametrem názvu služby).
- [ ] **`components/SavingsCalculator.tsx`**: `AnimatedNumber` startuje z `useState(0)` — v SSR HTML (a pro crawlery / pomalé připojení) stránka ukazuje „Ušetřené hodiny **0 h** týdně" hned vedle spočítané úspory „268 800 Kč ročně". Fix: inicializovat `useState(target)` a animovat jen následné změny (`prevTarget` už na to je připravený — jen změnit počáteční stav).
- [ ] **`components/FAQ.tsx`**: odpovědi jsou v conditional renderu přes `AnimatePresence` → zavřené odpovědi **nejsou v DOM** a crawler vidí jen otázky. Fix: renderovat všechny odpovědi vždy a skrývat přes CSS (`grid-template-rows` trik nebo `max-height`), NEBO nechat framer-motion a přidat FAQPage JSON-LD (3.3) — ideálně obojí.
- [ ] **`components/Gallery.tsx`**: `getGalleryImages()` v `app/page.tsx` čte celý adresář → 23 fotek naráz. Zobrazit 6–8 kurátorovaných + „Zobrazit více"; lazy-load; `sizes` atribut (viz 3.4). Smazat `public/.DS_Store` a `public/gallery/.DS_Store` z repa (+ přidat do `.gitignore`).

### 1.5 Vizuální jazyk — „lahodné oku" (P2)

Základ je dobrý (Geist Sans, `primary #2563EB`, světlé pozadí `#FAFBFC`) — problém je nadužívání efektů.

- [ ] **`tailwind.config.ts` + `app/globals.css`**: zredukovat akcenty. Teď: 4 accent barvy (amber/emerald/violet/coral) + 5 glow stínů + shimmer + 4 blur bloby v Hero + gradientové pozadí sekcí. Cíl: `primary` modrá pro CTA a odkazy, `emerald` jen pro čísla úspor, neutrály pro vše ostatní. Glow stíny smazat z configu.
- [ ] Blur-bloby v `Hero.tsx` (4 ks) zredukovat na max. 1–2 jemné, nebo nahradit fotkou ze školení jako pozadím s overlay (reference má v hero velkou fotku — funguje).
- [ ] **Sekční rytmus**: každá sekce dostane eyebrow-label + H2 + perex (Testimonials a FAQ to už mají — sjednotit i Services, Pricing, Gallery). Střídat bílé / `bg-slate-50` pozadí sekcí.
- [ ] **`components/CTA.tsx`**: závěrečný blok podložit fotkou z galerie s tmavým overlay (jako reference „Připraveni využít AI naplno?").
- [ ] **`components/Pricing.tsx`**: karty sjednotit — pořadí prvků: štítek → název → cena → co obsahuje → CTA; zvýraznit doporučenou variantu (audit) rámečkem, ne barvou navíc.

### 1.6 Navigace a footer (P2)

- [ ] **`components/Navbar.tsx`** (řádky 13–18): tlačítko „Konzultace" už existuje — přejmenovat na **„Konzultace zdarma"** (slovo zdarma prokazatelně zvedá klikanost) a dát mu plnou `primary` výplň. Do nav přidat „Blog" po spuštění (3.5). Zvážit vyhození „Newsletter" z hlavní navigace do footeru — newsletter není nákupní krok.
- [ ] **`components/Footer.tsx`**: doplnit sloupec **„Pro koho"** (Pro firmy / Pro obchodní týmy / Pro vývojáře → vibe coding / Pro děti → krouzekumeleinteligence.cz). Sociální sítě jako ikony (lucide `Linkedin`, `Facebook`, `Instagram`), ne vypsané URL. Doplnit právní údaje: „Aikonic training s.r.o., IČO 24472590" (reference IČO uvádí a v B2B je to standard).

---

## 2. Texty

### 2.1 Opravy chyb (P1, konkrétní řádky)

- [ ] `components/Process.tsx:12` — „Řešení šité na míru **vaším** procesům" → „**vašim** procesům".
- [ ] `components/Services.tsx:215` — „Chci **nahlásit** dítě" → „Chci **přihlásit** dítě" (nahlásit = udat).
- [ ] `components/Services.tsx:197` — „online třídu — pravidelně **jednou týdně**": rozpor s dětským webem (60 min **jednou za 14 dní**). Sjednotit na skutečnou frekvenci na obou webech. Celý text zkrátit: „Online AI kroužek pro děti 10–17 let — tvoří vlastní hry a appky s AI. Vede ho náš lektorský tým." + CTA „Přejít na web kroužku →" (externí odkaz).
- [ ] `components/Services.tsx:136` — „Řešení, která **platí** od prvního dne." → dvojsmysl (platit = fungovat i platit peníze). → „Řešení, která **přinášejí výsledky** od prvního dne."
- [ ] Sjednotit zápis cen napříč `Pricing.tsx` a `FAQ.tsx`: „60 000 Kč s DPH" (mezera jako oddělovač tisíců, „s DPH" vždy za částkou).

### 2.2 Homepage copy na zákazníka (P2)

Web mluví o sobě („Nabízíme", „Školíme"); reference mluví o čtenáři.

- [ ] Nová komponenta `components/PainPoints.tsx` (zapojit pod Hero) — 4 karty problém → řešení:
  - „Tým používá ChatGPT, ale každý jinak a bez pravidel" → „Nastavíme jednotné postupy a bezpečnostní rámec."
  - „Slyšíte o AI všude, ale nevíte, kde začít u vás" → „Audit najde 3–5 míst s největší návratností."
  - „Školení už jste měli — a nic se nezměnilo" → „Náš formát končí funkčním prototypem, ne prezentací."
  - „Řešíte bezpečnost dat a compliance" → „Pracujeme podle vašich standardů, klidně s NDA."
- [ ] `components/About.tsx`: claim „Nehrajeme si na vizionáře. Doručujeme výsledky." nechat, podložit konkrétními čísly (X hodin, Y účastníků, Z firem — dodá klient; nepoužívat „stovky", pokud jde říct přesně). Benefitové odrážky přepsat výsledkově: ne „Hackathony: od 4 hodin po libovolný počet dní" (parametr), ale „Za jeden den odejdete s funkčním prototypem" (výsledek).
- [ ] Ke každému kontaktnímu CTA (`CTA.tsx`, `Contact.tsx`, `StickyCTA.tsx`) doplnit jednotnou risk-reversal větu: „Úvodní konzultace zdarma a nezávazně."
- [ ] `components/FAQ.tsx`: rozšířit ze 4 na 7–8 otázek: dotace Jsem v kurzu / Digi pro firmy (jak fungují, kdo má nárok), velikost skupiny, prezenčně vs. online, NDA a bezpečnost dat, jak vypadá výstup hackathonu, platební podmínky.

---

## 3. SEO a klíčová slova

### 3.1 Metadata (P1)

- [ ] **`app/layout.tsx`**: title „AIKONIC | AI Školení, Hackathony & Správa financí" → **„Firemní AI školení a hackathony | AIKONIC"**. Description: „Firemní AI školení na míru — od workshopu po hackathon. Audit, automatizace, dotace Jsem v kurzu. Stovky proškolených hodin po celé ČR." Z `keywords` vyhodit „Správa financí" a „Radek Aigel" (jméno patří do obsahu a schema, ne keywords); přidat „firemní AI školení", „AI kurzy pro firmy", „AI hackathon".
- [ ] **Twitter meta na podstránkách**: podstránky definují `openGraph`, ale ne `twitter` → dědí homepage title/description (potvrzeno na živém /audit). Do každé stránkové metadata přidat `twitter` blok, nebo vytvořit helper `lib/seo.ts` s funkcí `pageMetadata({title, description, path})`, která generuje title + description + canonical + OG + twitter jednotně (vzor: stejnojmenný helper v repu krouzekai — lze převzít).
- [ ] **OG obrázky**: viz 1.4 — chybějící `/og-image.png` je zároveň SEO/sdílecí bug č. 1.
- [ ] **Canonical vs. www**: canonical je `https://aikonic.cz`, web běží i na `www.` — ověřit 301 redirect www → non-www (Vercel doména settings nebo `middleware.ts`/`next.config.js` redirect). Nejednotnost ředí ranking.

### 3.2 Chybějící landing pages (P1)

Dvě služby z gridu padají na `/#contact` a nejlukrativnější téma nemá stránku:

- [ ] **`app/skoleni-vibe-coding/page.tsx`** — „Školení Claude Code a Cursor pro vývojáře". KW: „školení Claude Code", „kurz Cursor", „vibe coding školení" — nízká konkurence, rostoucí objem, přesně vaše expertiza. Šablonu převzít z `app/jednodenni-skoleni-ai/page.tsx`.
- [ ] **`app/automatizace/page.tsx`** — automatizace na míru (KW: „AI automatizace pro firmy", „automatizace procesů n8n").
- [ ] **`app/dotace-na-skoleni/page.tsx`** — „Dotace na AI školení: Jsem v kurzu a Digi pro firmy". Dotazy s nejvyšší nákupní intencí; obsah: kdo má nárok, kolik pokryje, „vyřídíme za vás", CTA. V Hero na to odkázat jednou větou.
- [ ] Nové stránky napojit: `components/Services.tsx` (href), `app/sitemap.ts` (přidat záznamy), footer.

Mapa klíčových slov:

| Stránka | Primární KW | Sekundární |
|---|---|---|
| `/` | firemní AI školení | AI kurzy pro firmy, AI vzdělávání zaměstnanců |
| `/sluzby` | AI služby pro firmy | AI školení na míru |
| `/audit` | firemní AI audit | AI audit procesů |
| `/ai-hackathon` | AI hackathon pro firmy | firemní hackathon |
| `/jednodenni-skoleni-ai` | jednodenní školení AI | AI kurz pro zaměstnance |
| `/skoleni-pro-obchodniky` | AI pro obchodníky | AI v obchodu |
| `/skoleni-vibe-coding` (nová) | školení Claude Code / Cursor | vibe coding kurz |
| `/dotace-na-skoleni` (nová) | dotace na AI školení | Jsem v kurzu, Digi pro firmy |

### 3.3 Strukturovaná data (P1)

`app/layout.tsx` už má Organization JSON-LD (dobrý základ) — rozšířit a doplnit:

- [ ] Do Organization přidat: `legalName: "Aikonic training s.r.o."`, `identifier` (IČO 24472590), `subOrganization` nebo `memberOf` vazbu na Kroužek umělé inteligence (URL dětského webu).
- [ ] **Service JSON-LD** na každou služební stránku: `@type: Service`, `provider` (odkaz na Organization), `areaServed: "CZ"`, `offers` s cenou tam, kde je veřejná (audit od 35 000, kurzy 60 000 / 115 000 Kč).
- [ ] **FAQPage JSON-LD** na homepage — generovat ze stejného pole `faqs` v `components/FAQ.tsx` (exportovat data, aby byla jedním zdrojem pravdy pro UI i schema).
- [ ] **BreadcrumbList** na podstránkách.
- [ ] Validace: Google Rich Results Test po nasazení.

### 3.4 Výkon (P2)

- [ ] Fotky v `public/gallery/` mají názvy z foťáku (`_MG_4093.webp`) — přejmenovat popisně (`ai-skoleni-workshop-01.webp`) a přepsat generické alt texty „Fotografie ze školení 1" v `components/Gallery.tsx` na popisné („Účastníci firemního AI školení pracují na promptech").
- [ ] `next/image` v Gallery a Trust: doplnit `sizes`, aby se neservírovaly varianty w=3840 pro thumbnaily (loga 160 px, galerie max ~800 px).
- [ ] `app/sitemap.ts`: `lastModified: new Date()` u všech statických stránek při každém buildu = šum pro Google. Fixní data poslední skutečné změny u statických stránek; u newsletteru brát `_updatedAt` ze Sanity (query rozšířit v `sanity/lib/queries.ts`).

### 3.5 Obsahová strategie (P2)

Velká výhoda: **Sanity CMS už běží** (newsletter) — blog je jen nové schema + routa, žádná nová infrastruktura.

- [ ] Přidat `sanity/schemaTypes/documents/blog-post.ts` (title, slug, excerpt, mainImage, portable-text body, publishedAt, seo pole) + routy `app/blog/page.tsx` a `app/blog/[slug]/page.tsx` (vzor: existující `app/newsletter/[slug]/page.tsx`). Article JSON-LD, breadcrumb, zápis do sitemap.
- [ ] Startovní články (B2B intent):
  1. „Kolik stojí AI školení pro firmu v roce 2026 — a co ovlivňuje cenu"
  2. „Dotace Jsem v kurzu: AI školení se státní podporou krok za krokem"
  3. „AI hackathon ve firmě: co čekat a co si odnesete"
  4. „ChatGPT vs. Claude vs. Copilot pro firmy — co nasadit a proč"
  5. Case study z auditu/školení (po souhlasu klienta)
- [ ] **Cross-linking s krouzekumeleinteligence.cz** (zadarmo a hned): banner kroužku (1.2) + footer odkaz; dětský web už odkazuje zpět. Tematicky příbuzné weby stejného vlastníka si legitimně předávají autoritu.
- [ ] Google Business Profile: recenze na Maps už jsou — profil propojit s webem a **sbírat recenzi po každém školení** (e-mail s přímým odkazem den po kurzu). Nejlevnější konverzní páka.
- [ ] Search Console je ověřená (`public/googlef81630b92c9d6f6a.html`) — doplnit Seznam Webmaster (B2B v ČR: Seznam stále ~10 % vyhledávání).

---

## Pořadí prací (doporučený sprint)

1. **Bugy a texty (P1, ~½ dne):** og-image.png (1.4), AnimatedNumber SSR (1.4), FAQ v DOM (1.4), „vaším→vašim", „nahlásit→přihlásit", frekvence kroužku, twitter meta helper, www redirect, .DS_Store z repa.
2. **Positioning (P1):** layout.tsx title/description, Hero zeštíhlit + trust-řádek, mini-hra pryč z hero, finance z claimu.
3. **Struktura (P1):** Services → 3 pilíře, Testimonials → grid, kroužek → banner na dětský web, JSON-LD (Service, FAQ, breadcrumbs).
4. **Nové landingy (P1/P2):** vibe coding, automatizace, dotace + sitemap.
5. **Vizuál (P2):** redukce efektů (glow/shimmer/bloby), fotky do sekcí, Lektoři, footer, CTA s fotkou.
6. **Obsah (P2/P3):** blog přes Sanity, recenzní workflow, case studies.

Po každém kroku: `npm run build` + kontrola 375/768/1280 px + Rich Results Test + LinkedIn Post Inspector na OG náhledy.
