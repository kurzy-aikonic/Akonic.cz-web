import React from "react";
import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Všeobecné obchodní podmínky | AIKONIC",
  description:
    "Všeobecné obchodní podmínky společnosti Aikonic pro poskytování služeb.",
};

export default function ObchodniPodminky() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 bg-white dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Všeobecné obchodní podmínky
          </h1>

          <div className="prose prose-slate prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              <strong>Společnosti Radek Aigel, obchodující jako Aikonic</strong>
              <br />
              IČO: 74258575
              <br />
              Platné a účinné od: 8. 7. 2025
            </p>

            <h2>1. Úvodní ustanovení a definice</h2>
            <p>
              1.1. Tyto všeobecné obchodní podmínky („VOP“) upravují práva a
              povinnosti mezi společností <strong>Radek Aigel</strong>, se sídlem
              v České republice, obchodující pod značkou <strong>Aikonic</strong>{" "}
              („Prodávající“), a osobami využívajícími její služby nebo produkty
              prostřednictvím webových stránek („Zákazník“).
            </p>
            <p>1.2. Pojmy použité v těchto VOP mají následující význam:</p>
            <ul>
              <li>
                <strong>Zákazník:</strong> fyzická nebo právnická osoba, která
                uzavírá se společností Aikonic smlouvu.
              </li>
              <li>
                <strong>Spotřebitel:</strong> Zákazník - fyzická osoba, která mimo
                rámec své podnikatelské činnosti uzavírá smlouvu s podnikatelem.
              </li>
              <li>
                <strong>Webové stránky:</strong> internetová prezentace a
                rozhraní na adrese provozované Aikonic.
              </li>
              <li>
                <strong>Osobní údaje:</strong> veškeré informace o identifikované
                nebo identifikovatelné fyzické osobě ve smyslu čl. 4 odst. 1 GDPR.
              </li>
              <li>
                <strong>AI systém:</strong> software využívající umělou inteligenci
                ve smyslu nařízení Evropského parlamentu a Rady o umělé
                inteligenci (EU AI Act).
              </li>
            </ul>

            <h2>2. Informace o provozovateli a kontakt</h2>
            <ul>
              <li>
                <strong>Obchodní firma:</strong> Radek Aigel
              </li>
              <li>
                <strong>Obchodní značka:</strong> Aikonic
              </li>
              <li>
                <strong>IČO:</strong> 74258575
              </li>
              <li>
                <strong>Sídlo:</strong> Heydukova 115, 572 01 Polička, Česká
                republika
              </li>
              <li>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:kurzy@aikonic.cz">kurzy@aikonic.cz</a>
              </li>
              <li>
                <strong>Telefon:</strong> +420 723 061 013
              </li>
              <li>
                <strong>Zápis v registru:</strong> fyzická osoba podnikající dle
                živnostenského zákona, nezapsaná v obchodním rejstříku.
              </li>
            </ul>

            <h2>3. Rozsah a účel podmínek</h2>
            <p>
              3.1. Tyto VOP se vztahují na nákup služeb nebo produktů prostřednictvím
              webových stránek, uzavírání smluv na dálku a používání těchto webových
              stránek.
              <br />
              3.2. Uzavřením smlouvy zákazník potvrzuje, že se s těmito VOP
              seznámil, souhlasí s jejich zněním a že jim rozumí.
              <br />
              3.3. Ustanovení těchto podmínek jsou nedílnou součástí každé smlouvy
              uzavřené mezi Aikonic a Zákazníkem.
            </p>

            <h2>4. Ochrana osobních údajů (GDPR)</h2>
            <p>
              4.1. Aikonic zpracovává osobní údaje Zákazníků v souladu s Nařízením
              (EU) 2016/679 (GDPR), zákonem č. 110/2019 Sb., o zpracování osobních
              údajů a dalšími souvisejícími právními předpisy.
            </p>
            <p>4.2. Účely zpracování osobních údajů zahrnují:</p>
            <ul>
              <li>plnění smlouvy,</li>
              <li>plnění právních povinností,</li>
              <li>
                oprávněné zájmy správce (např. ochrana právních nároků, zajištění
                bezpečnosti webu),
              </li>
              <li>marketingové účely (pouze na základě souhlasu).</li>
            </ul>
            <p>4.3. Zákazník má následující práva:</p>
            <ul>
              <li>právo na přístup k osobním údajům,</li>
              <li>právo na opravu,</li>
              <li>právo na výmaz („právo být zapomenut“),</li>
              <li>právo na omezení zpracování,</li>
              <li>právo na přenositelnost údajů,</li>
              <li>právo vznést námitku proti zpracování,</li>
              <li>právo podat stížnost u ÚOOÚ.</li>
            </ul>
            <p>
              4.4. Detailní informace o zpracování osobních údajů jsou uvedeny v
              samostatném dokumentu Zásady ochrany osobních údajů, který je dostupný
              na webových stránkách.
            </p>

            <h2>5. Používání systémů umělé inteligence (Soulad s AI Act)</h2>
            <p>
              5.1. Webové stránky mohou obsahovat funkcionality založené na
              systémech umělé inteligence, například automatizovanou podporu,
              doporučovací algoritmy nebo generativní obsah.
              <br />
              5.2. Tyto systémy jsou provozovány v souladu s Nařízením Evropského
              parlamentu a Rady (EU) 2024/1684 o umělé inteligenci (AI Act),
              zejména:
            </p>
            <ul>
              <li>
                zajištěním transparentnosti vůči uživatelům (označení, že
                komunikují se systémem AI),
              </li>
              <li>
                kontrolou výstupů, aby nedošlo k porušení základních práv,
              </li>
              <li>dohledem nad lidskou činností v souladu s čl. 14 AI Act.</li>
            </ul>
            <p>
              5.3. Zákazník je vždy informován, pokud interaguje se systémem umělé
              inteligence.
              <br />
              5.4. V případech, kdy AI systém generuje obsah (text, doporučení
              apod.), nenese Aikonic odpovědnost za jeho absolutní správnost, a
              doporučuje jej ověřit lidskou kontrolou, pokud je obsah použit k
              rozhodování.
            </p>

            <h2>6. Práva a povinnosti uživatele</h2>
            <p>6.1. Uživatel je povinen:</p>
            <ul>
              <li>uvádět pravdivé a úplné informace při objednávkách,</li>
              <li>zdržet se jakýchkoli zásahů do technického řešení webu,</li>
              <li>užívat služby v souladu s právními předpisy a dobrými mravy.</li>
            </ul>
            <p>
              6.2. Uživatel nese plnou odpovědnost za své jednání na webových
              stránkách a případné škody způsobené provozovateli nebo třetím
              stranám.
            </p>

            <h2>7. Duševní vlastnictví</h2>
            <p>
              7.1. Veškeré obsah webových stránek, včetně textů, grafik, log,
              ilustrací, fotografií, audiovizuálních děl, zdrojového kódu a
              databází, je chráněn autorským právem podle zákona č. 121/2000 Sb.,
              autorský zákon, a dalšími právními předpisy.
              <br />
              7.2. Bez výslovného písemného souhlasu Aikonic není dovoleno jakékoliv
              užití tohoto obsahu nad rámec zákonných výjimek.
            </p>

            <h2>8. Řešení sporů a právní příslušnost</h2>
            <p>
              8.1. Veškeré smluvní vztahy uzavírané mezi Aikonic a Zákazníkem se
              řídí právem České republiky.
              <br />
              8.2. K řešení případných sporů je příslušný věcně a místně příslušný
              soud v České republice.
              <br />
              8.3. Spotřebitel má právo obrátit se v případě sporu také na Českou
              obchodní inspekci (www.coi.cz) za účelem mimosoudního řešení
              spotřebitelského sporu.
            </p>

            <h2>9. Závěrečná ustanovení</h2>
            <p>
              9.1. Tyto VOP nabývají účinnosti dnem jejich zveřejnění na webových
              stránkách.
              <br />
              9.2. Aikonic si vyhrazuje právo kdykoliv změnit tyto VOP. Změny jsou
              účinné okamžikem jejich zveřejnění na webu.
              <br />
              9.3. Pokud se některé ustanovení těchto VOP stane neplatným nebo
              neúčinným, zůstávají ostatní ustanovení nedotčena.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
