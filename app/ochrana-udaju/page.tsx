import React from "react";
import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | AIKONIC",
  description:
    "Informace o zpracování a ochraně osobních údajů v souladu s GDPR.",
};

export default function OchranaUdaju() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 bg-white dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Ochrana osobních údajů
          </h1>

          <div className="prose prose-slate prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              <strong>Pravidla a Zásady Zpracování společnosti Aikonic training s.r.o.</strong>
            </p>

            <h2>Informace o zpracování a ochraně osobních údajů</h2>
            <p>
              Ochrana osobních údajů objednatele i účastníka je prováděna
              společností Aikonic training s.r.o. ve smyslu ustanovení zákona č.
              110/2019 Sb., o zpracování osobních údajů, v aktuálním znění, a
              rovněž dle Nařízení Evropského parlamentu a Rady (EU) 2016/679 ze dne
              27. dubna 2016 o ochraně fyzických osob v souvislosti se zpracováním
              osobních údajů a o volném pohybu těchto údajů (obecné nařízení o
              ochraně osobních údajů, dále jen „GDPR").
            </p>
            <p>
              V rámci poskytování služeb společností Aikonic training s.r.o. budou
              zpracovány osobní údaje, které jsou nezbytné pro registraci,
              respektive údaje, které jsou nutné pro řádné poskytnutí služby a
              případné vydání potvrzení o absolvování či certifikátu. Jedná se
              zejména o údaje, které identifikují absolventa (objednatele),
              například: jméno a příjmení, adresa bydliště, datum narození,
              identifikační číslo, daňové identifikační číslo, adresa elektronické
              pošty, údaje poskytnuté účastníkem při prezenci včetně podpisu,
              telefonní číslo a informace o vyžádaných poptávkách a realizovaných
              objednávkách (dále společně vše jen jako „osobní údaje").
            </p>
            <p>
              Kontaktní údaje klienta budou dále využity pro zasílání informací
              souvisejících s poskytovanými službami a případnými změnami
              akreditačního nebo legislativního charakteru. Veškeré pokyny se
              řídí procedurou pro zpracování osobních údajů.
            </p>
            <p>
              Objednatel bere na vědomí, že je povinen své osobní údaje uvádět
              správně a pravdivě a že je povinen po dobu poskytování služby bez
              zbytečného odkladu informovat společnost Aikonic training s.r.o. o
              změně ve svých osobních údajích. Společnost Aikonic training s.r.o.
              neručí za případná chybná uvedení osobních údajů objednatele na
              vydaných dokumentech či certifikátech, která vycházela z objednatelem
              předaných osobních údajů.
            </p>
            <p>
              Zpracováním osobních údajů objednatele může společnost Aikonic
              training s.r.o. pověřit třetí osobu, jakožto zpracovatele. Osobní
              údaje uchovává společnost Aikonic training s.r.o. v elektronické
              podobě v rámci informačního systému a v listinné podobě v rámci
              objednatelem předaných dokumentů, a to minimálně po dobu, po kterou
              je povinna uchovávat účetní doklady ve smyslu zákona č. 563/1991 Sb.,
              o účetnictví. Objednatel potvrzuje, že poskytnuté osobní údaje jsou
              přesné a pravdivé.
            </p>

            <h2>Zásady ochrany osobních údajů</h2>

            <h3>1. Správce osobních údajů</h3>
            <p>Správcem osobních údajů je:</p>
            <ul>
              <li>
                <strong>Obchodní firma:</strong> Aikonic training s.r.o.
              </li>
              <li>
                <strong>Obchodní značka:</strong> Aikonic
              </li>
              <li>
                <strong>IČO:</strong> 24472590
              </li>
              <li>
                <strong>Sídlo:</strong> Heydukova 115, 572 01 Polička (fakturační
                adresa)
              </li>
              <li>
                <strong>Kontaktní e-mail:</strong>{" "}
                <a href="mailto:kurzy@aikonic.cz">kurzy@aikonic.cz</a>
              </li>
              <li>
                <strong>Telefon:</strong> +420 723 061 013
              </li>
            </ul>

            <h3>2. Rozsah zpracovávaných osobních údajů</h3>
            <p>Shromažďujeme následující osobní údaje:</p>
            <ul>
              <li>Jméno a příjmení</li>
              <li>E-mailová adresa</li>
              <li>Telefonní číslo</li>
              <li>IP adresa</li>
              <li>
                Pro účely registrace a řádného poskytování služeb (včetně školení
                a vydávání potvrzení/certifikátů) též: adresa bydliště, datum
                narození, identifikační číslo, daňové identifikační číslo, údaje
                poskytnuté účastníkem při prezenci včetně podpisu, informace o
                vyžádaných poptávkách a realizovaných objednávkách.
              </li>
            </ul>

            <h3>3. Účel zpracování osobních údajů</h3>
            <p>Vaše osobní údaje zpracováváme za účelem:</p>
            <ul>
              <li>
                Vyřízení objednávek a poskytování služeb (firemní audit AI
                příležitostí, firemní školení, správa financí)
              </li>
              <li>Zasílání informačních e-mailů a newsletterů</li>
              <li>Analýzy návštěvnosti webu a zlepšování našich služeb</li>
            </ul>

            <h3>4. Právní základ zpracování</h3>
            <p>Zpracování vašich osobních údajů je založeno na:</p>
            <ul>
              <li>Plnění smlouvy mezi vámi a naší společností</li>
              <li>Oprávněném zájmu na zlepšování našich služeb</li>
              <li>Vašem souhlasu se zasíláním marketingových sdělení</li>
            </ul>

            <h3>5. Doba uchování údajů</h3>
            <p>
              Vaše osobní údaje uchováváme po dobu nezbytně nutnou k naplnění
              výše uvedených účelů nebo po dobu stanovenou zákonem (například pro
              účetní účely).
            </p>

            <h3>6. Předání údajů třetím stranám</h3>
            <p>Vaše osobní údaje mohou být předány následujícím třetím stranám:</p>
            <ul>
              <li>Poskytovatelům IT služeb a hostingu</li>
              <li>Marketingovým agenturám</li>
              <li>Dalším zpracovatelům pověřeným společností Aikonic training s.r.o.</li>
            </ul>

            <h3>7. Zabezpečení údajů</h3>
            <p>
              Společnost Aikonic training s.r.o. se zavázala k zabezpečení osobních
              údajů. Přijímáme vhodná bezpečnostní opatření, abychom omezili
              zneužití a neoprávněný přístup k osobním údajům. Tím je zajištěno, že
              k vašim údajům mají přístup pouze nezbytné osoby, přístup k datům je
              chráněn a naše bezpečnostní opatření jsou pravidelně kontrolována.
            </p>

            <h3>8. Změny tohoto prohlášení o ochraně osobních údajů</h3>
            <p>
              Vyhrazujeme si právo na změnu tohoto prohlášení o ochraně osobních
              údajů. Doporučujeme vám pravidelně se s tímto prohlášením o ochraně
              osobních údajů seznámit, abyste si byli vědomi jakýchkoliv změn.
              Kromě toho vás budeme informovat, kdykoliv to bude možné.
            </p>

            <h3>9. Práva subjektů údajů</h3>
            <p>Máte právo:</p>
            <ul>
              <li>Na přístup k vašim osobním údajům</li>
              <li>Na opravu nepřesných nebo neúplných údajů</li>
              <li>Na výmaz osobních údajů (právo být zapomenut)</li>
              <li>Na omezení zpracování</li>
              <li>Na přenositelnost údajů</li>
              <li>Vznést námitku proti zpracování</li>
              <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
