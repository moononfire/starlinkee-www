import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, type Locale } from "@/i18n";
import { isValidLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";

type Copy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pageTitle: string;
  lastUpdated: string;

  s1Title: string;
  s1SellerIntro: string;
  s1Supervisor: string;

  s2Title: string;
  definitions: { term: string; desc: string }[];

  s3Title: string;
  s3Intro: string;
  techRequirements: string[];

  s4Title: string;
  orderSteps: string[];

  s5Title: string;
  s5Intro: string;
  s5TrialPoints: string[];
  s5WithdrawalNote: string;

  s6Title: string;
  s6MethodsIntro: string;
  s6Methods: string;
  s6Deadline: string;

  s7Title: string;
  s7Intro: string;
  s7Physical: string;
  s7PhysicalBody: string;
  s7Digital: string;
  s7DigitalBody: string;

  s8Title: string;
  s8NoticeTitle: string;
  s8NoticeBody: string;
  s8Points: string[];
  s8ExceptionsTitle: string;
  s8Exceptions: string[];

  s9Title: string;
  s9Points: string[];

  s10Title: string;
  s10Intro: string;
  s10Points: string[];

  s11Title: string;
  s11Body: string;
  s11LinkLabel: string;

  s12Title: string;
  s12Points: string[];

  annexTitle: string;
  annexIntro: string;
  annexAddressee: string;
  annexBody: string;
  annexContractDate: string;
  annexName: string;
  annexAddress: string;
  annexOrderNumber: string;
  annexSignature: string;
  annexDate: string;
  annexNote: string;
};

const contactEmail = "vikbobinski@gmail.com";

const copy: Record<Locale, Copy> = {
  pl: {
    metaTitle: "Regulamin Sklepu | Starlinkee",
    metaDescription: "Regulamin sprzedaży produktów Starlinkee — warunki zakupu, prawo do odstąpienia od umowy, reklamacje.",
    breadcrumbHome: "Strona główna",
    breadcrumbCurrent: "Regulamin",
    pageTitle: "Regulamin Sklepu Internetowego",
    lastUpdated: "Ostatnia aktualizacja: 11 lipca 2026 r.",

    s1Title: "§ 1. Dane Sprzedawcy",
    s1SellerIntro: "Sprzedawcą jest:",
    s1Supervisor: "Organ nadzoru: Prezes Urzędu Ochrony Konkurencji i Konsumentów (UOKiK)",

    s2Title: "§ 2. Definicje",
    definitions: [
      { term: "Sklep", desc: `serwis internetowy dostępny pod adresem ${SITE_URL}` },
      { term: "Sprzedawca", desc: "podmiot wskazany w § 1" },
      { term: "Kupujący", desc: "osoba fizyczna, prawna lub jednostka organizacyjna składająca zamówienie" },
      { term: "Konsument", desc: "Kupujący będący osobą fizyczną dokonującą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową" },
      { term: "Produkt", desc: "usługa subskrypcyjna Starlinkee Pro oraz powiązane z nią tabliczki NFC dostępne w Sklepie" },
      { term: "Umowa", desc: "umowa sprzedaży lub o świadczenie usług zawarta na odległość za pośrednictwem Sklepu" },
    ],

    s3Title: "§ 3. Wymagania techniczne",
    s3Intro: "Do korzystania ze Sklepu wymagane jest:",
    techRequirements: [
      "Dostęp do Internetu",
      "Aktualna przeglądarka internetowa obsługująca JavaScript i pliki cookies",
      "Aktywny adres e-mail",
    ],

    s4Title: "§ 4. Składanie zamówień",
    orderSteps: [
      "Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu przez stronę internetową Sklepu.",
      "W celu złożenia zamówienia Kupujący wybiera liczbę tabliczek NFC, plan rozliczeniowy (miesięczny, roczny lub bezpłatny okres próbny) oraz zakłada konto, podając dane niezbędne do realizacji zamówienia.",
      "Złożenie zamówienia stanowi ofertę zakupu. Umowa zostaje zawarta z chwilą wysłania przez Sprzedawcę potwierdzenia przyjęcia zamówienia do realizacji (e-mail potwierdzający).",
      "Ceny podane w Sklepie są cenami brutto (zawierają VAT) i wyrażone są w walucie wskazanej dla danego kraju dostawy.",
      "Sprzedawca zastrzega sobie prawo do odmowy realizacji zamówienia w przypadku: podania nieprawidłowych danych, niedostępności produktu lub uzasadnionych podejrzeń działania niezgodnego z prawem.",
    ],

    s5Title: "§ 5. Bezpłatny okres próbny",
    s5Intro:
      "Sprzedawca może udostępnić Kupującemu 30-dniowy bezpłatny okres próbny subskrypcji Starlinkee Pro (\"Okres Próbny\"). Warunki Okresu Próbnego są następujące:",
    s5TrialPoints: [
      "Rozpoczęcie Okresu Próbnego wymaga podania danych karty płatniczej. Sprzedawca dokona tymczasowej autoryzacji (blokady) niewielkiej kwoty na karcie wyłącznie w celu weryfikacji jej ważności — nie jest to pobranie środków, a blokada jest zwalniana automatycznie po potwierdzeniu.",
      "Przez cały Okres Próbny Kupujący ma pełny dostęp do funkcji Starlinkee Pro bez żadnych opłat.",
      "Jeżeli Kupujący nie zrezygnuje z subskrypcji przed upływem 30 dni od jej rozpoczęcia, po zakończeniu Okresu Próbnego Sprzedawca automatycznie pobierze z podanej karty płatniczej opłatę za roczny plan subskrypcji w wysokości wskazanej Kupującemu przy zakładaniu konta i w podsumowaniu zamówienia, a subskrypcja przejdzie w płatny plan roczny z automatycznym odnawianiem co 12 miesięcy.",
      "Kupujący może w każdej chwili przed upływem Okresu Próbnego zmienić plan rozliczeniowy na miesięczny w ustawieniach konta w panelu administracyjnym — w takim przypadku po zakończeniu Okresu Próbnego naliczana będzie opłata miesięczna zamiast rocznej, a subskrypcja będzie odnawiać się co miesiąc.",
      "Kupujący może zrezygnować z subskrypcji w dowolnym momencie przed upływem Okresu Próbnego bez żadnych opłat, w ustawieniach konta w panelu administracyjnym lub kontaktując się ze Sprzedawcą pod adresem: ",
      "Sprzedawca poinformuje Kupującego drogą e-mailową o zbliżającym się końcu Okresu Próbnego z odpowiednim wyprzedzeniem przed pobraniem opłaty.",
    ],
    s5WithdrawalNote:
      "Rozpoczęcie korzystania z Okresu Próbnego nie pozbawia Konsumenta prawa do odstąpienia od umowy opisanego w § 8 — jeżeli Konsument odstąpi od umowy w terminie 14 dni, nie zostanie obciążony żadną opłatą, a ewentualna blokada na karcie zostanie zwolniona.",

    s6Title: "§ 6. Płatności",
    s6MethodsIntro: "Dostępne metody płatności:",
    s6Methods: "[WYMIEŃ METODY PŁATNOŚCI, np. karta płatnicza, przelew bankowy, BLIK, PayU, Przelewy24, Stripe]",
    s6Deadline:
      "Płatność za plan miesięczny lub roczny (poza Okresem Próbnym) powinna zostać dokonana w ciągu [LICZBA] dni roboczych od złożenia zamówienia, chyba że inaczej wskazano. Brak płatności w tym terminie skutkuje anulowaniem zamówienia.",

    s7Title: "§ 7. Realizacja zamówienia i dostawa",
    s7Intro: "[UZUPEŁNIJ stosownie do swojego produktu. Przykłady poniżej — usuń nieaktualne akapity:]",
    s7Physical: "Dla tabliczek NFC (produkt fizyczny):",
    s7PhysicalBody:
      "Zamówienie jest realizowane w ciągu [LICZBA] dni roboczych od zaksięgowania płatności lub od rozpoczęcia subskrypcji (dla planów z Okresem Próbnym). Dostawa odbywa się za pośrednictwem [KURIER/POCZTA POLSKA]. Koszty dostawy wskazane są w podsumowaniu zamówienia.",
    s7Digital: "Dla subskrypcji Starlinkee Pro (usługa cyfrowa):",
    s7DigitalBody:
      "Dostęp do panelu administracyjnego i funkcji subskrypcji zostaje aktywowany niezwłocznie po założeniu konta i przesłany na podany adres e-mail.",

    s8Title: "§ 8. Prawo do odstąpienia od umowy",
    s8NoticeTitle: "Informacja dla Konsumentów",
    s8NoticeBody:
      "Zgodnie z art. 27 ustawy z dnia 30 maja 2014 r. o prawach konsumenta (Dz.U. 2014 poz. 827 ze zm.) masz prawo odstąpić od umowy zawartej na odległość bez podania przyczyny.",
    s8Points: [
      "Termin na odstąpienie wynosi 14 dni od dnia, w którym wszedłeś/weszłaś w posiadanie towaru (lub ostatniego towaru przy kilku sztukach) albo od dnia zawarcia umowy (dla subskrypcji i Okresu Próbnego).",
      `Aby skorzystać z prawa do odstąpienia, poinformuj nas o swojej decyzji w drodze jednoznacznego oświadczenia (np. pismo wysłane pocztą lub e-mailem na adres: ${contactEmail}). Możesz skorzystać ze wzoru formularza odstąpienia stanowiącego Załącznik nr 1 do niniejszego Regulaminu.`,
      "Do zachowania terminu wystarczy wysłanie oświadczenia przed jego upływem.",
      "W przypadku odstąpienia Sprzedawca zwróci wszystkie otrzymane od Ciebie płatności, w tym koszty dostarczenia towaru (z wyjątkiem dodatkowych kosztów wynikających z wybranego przez Ciebie sposobu dostarczenia innego niż najtańszy), nie później niż 14 dni od dnia otrzymania oświadczenia o odstąpieniu. Zwrot nastąpi przy użyciu takich samych sposobów płatności, jakie zostały użyte przez Ciebie.",
      "Jeżeli Sprzedawca nie zaproponował, że sam odbierze towar, może wstrzymać się ze zwrotem płatności do chwili otrzymania towaru z powrotem lub dostarczenia dowodu jego odesłania.",
      "Towar należy odesłać lub przekazać na adres: [ADRES DO ZWROTÓW] nie później niż 14 dni od dnia, w którym poinformowałeś/poinformowałaś nas o odstąpieniu od umowy. Bezpośrednie koszty zwrotu ponosi Kupujący.",
      "Ponosisz odpowiedzialność za zmniejszenie wartości towaru wynikające z korzystania z niego w sposób inny niż było to konieczne do stwierdzenia charakteru, cech i funkcjonowania towaru.",
    ],
    s8ExceptionsTitle: "Wyjątki od prawa do odstąpienia (art. 38 ustawy o prawach konsumenta):",
    s8Exceptions: [
      "Produkty wykonane na indywidualne zamówienie Konsumenta",
      "Treści cyfrowe dostarczane w sposób inny niż na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą Konsumenta przed upływem terminu i po poinformowaniu go o utracie prawa do odstąpienia",
      "[UZUPEŁNIJ inne wyjątki jeśli dotyczą Twojego produktu]",
    ],

    s9Title: "§ 9. Reklamacje i rękojmia",
    s9Points: [
      "Sprzedawca ponosi odpowiedzialność za wady towaru na podstawie przepisów kodeksu cywilnego o rękojmi (art. 556 i nast. k.c.) oraz, w stosunku do Konsumentów, przepisów ustawy o prawach konsumenta.",
      `Reklamację można złożyć e-mailem na adres: ${contactEmail} lub pisemnie na adres: [ADRES DO REKLAMACJI].`,
      "Reklamacja powinna zawierać: imię i nazwisko, adres e-mail, numer zamówienia, opis wady oraz żądanie (naprawa, wymiana, obniżenie ceny, odstąpienie od umowy).",
      "Sprzedawca rozpatruje reklamację w terminie 14 dni od jej otrzymania i informuje Kupującego o sposobie rozpatrzenia.",
    ],

    s10Title: "§ 10. Pozasądowe sposoby rozstrzygania sporów",
    s10Intro: "Konsument ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń:",
    s10Points: [
      "Platforma ODR (Online Dispute Resolution) Komisji Europejskiej: ec.europa.eu/consumers/odr",
      "Stały Polubowny Sąd Konsumencki przy właściwym Inspektoracie Inspekcji Handlowej",
      "Powiatowy lub Miejski Rzecznik Praw Konsumentów",
    ],

    s11Title: "§ 11. Ochrona danych osobowych",
    s11Body: "Szczegółowe informacje o przetwarzaniu danych osobowych, w tym o zapisie do newslettera przy zakładaniu konta, znajdziesz w naszej",
    s11LinkLabel: "Polityce Prywatności",

    s12Title: "§ 12. Postanowienia końcowe",
    s12Points: [
      "W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności kodeksu cywilnego oraz ustawy o prawach konsumenta.",
      "Dla Konsumentów z innych państw UE (w tym Niemiec, Austrii i Włoch), w zakresie ochrony ich praw, zastosowanie mogą znaleźć bezwzględnie obowiązujące przepisy prawa państwa ich zwykłego pobytu.",
      "Sprzedawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie po upływie 14 dni od ich publikacji i nie dotyczą zamówień złożonych przed zmianą.",
      "Regulamin obowiązuje od dnia [DATA WEJŚCIA W ŻYCIE].",
    ],

    annexTitle: "Załącznik nr 1 — Wzór formularza odstąpienia od umowy",
    annexIntro: "(wypełnij i odeślij tylko w przypadku chęci odstąpienia od umowy)",
    annexAddressee: "Adresat: Viktor Bobiński, Lubostroń 15A/38, 30-383 Kraków, vikbobinski@gmail.com",
    annexBody:
      "Ja/My (*) niniejszym informuję/informujemy (*) o moim/naszym (*) odstąpieniu od umowy sprzedaży następujących towarów (*) / umowy o dostarczenie następujących treści cyfrowych (*) / umowy o świadczenie następującej usługi (*):",
    annexContractDate: "Data zawarcia umowy (*) / odbioru (*): .........................................................",
    annexName: "Imię i nazwisko konsumenta(-ów): ................................................................",
    annexAddress: "Adres konsumenta(-ów): .............................................................................",
    annexOrderNumber: "Numer zamówienia: .....................................................................................",
    annexSignature: "Podpis konsumenta(-ów) (tylko jeżeli formularz jest przesyłany w wersji papierowej):",
    annexDate: "Data: ................................................",
    annexNote: "(*) Niepotrzebne skreślić",
  },

  en: {
    metaTitle: "Terms & Conditions | Starlinkee",
    metaDescription: "Terms and conditions for Starlinkee purchases — order terms, right of withdrawal, complaints.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Terms & Conditions",
    pageTitle: "Online Store Terms & Conditions",
    lastUpdated: "Last updated: 11 July 2026",

    s1Title: "§ 1. Seller information",
    s1SellerIntro: "The Seller is:",
    s1Supervisor: "Supervisory authority: President of the Office of Competition and Consumer Protection (UOKiK, Poland)",

    s2Title: "§ 2. Definitions",
    definitions: [
      { term: "Store", desc: `the online service available at ${SITE_URL}` },
      { term: "Seller", desc: "the entity indicated in § 1" },
      { term: "Buyer", desc: "a natural person, legal person, or organizational unit placing an order" },
      { term: "Consumer", desc: "a Buyer who is a natural person entering into a transaction not directly related to their business or professional activity" },
      { term: "Product", desc: "the Starlinkee Pro subscription service and the associated NFC plates available in the Store" },
      { term: "Contract", desc: "a sales or service contract concluded at a distance via the Store" },
    ],

    s3Title: "§ 3. Technical requirements",
    s3Intro: "To use the Store you need:",
    techRequirements: [
      "Internet access",
      "An up-to-date web browser supporting JavaScript and cookies",
      "An active email address",
    ],

    s4Title: "§ 4. Placing orders",
    orderSteps: [
      "Orders can be placed 24 hours a day, 7 days a week via the Store's website.",
      "To place an order, the Buyer selects the number of NFC plates, a billing plan (monthly, annual, or the free trial), and creates an account by providing the data required to fulfil the order.",
      "Placing an order constitutes an offer to purchase. The Contract is concluded once the Seller sends confirmation that the order has been accepted for fulfilment (confirmation email).",
      "Prices shown in the Store are gross prices (VAT included) and are expressed in the currency indicated for the relevant delivery country.",
      "The Seller reserves the right to refuse to fulfil an order in the event of: incorrect data being provided, unavailability of the product, or reasonable suspicion of unlawful conduct.",
    ],

    s5Title: "§ 5. Free trial",
    s5Intro:
      "The Seller may offer the Buyer a 30-day free trial of the Starlinkee Pro subscription (the \"Trial\"). The Trial is subject to the following terms:",
    s5TrialPoints: [
      "Starting the Trial requires providing payment card details. The Seller will place a temporary authorization (hold) for a small amount on the card solely to verify it is valid — this is not a charge, and the hold is released automatically once verification is confirmed.",
      "Throughout the Trial, the Buyer has full access to Starlinkee Pro free of charge.",
      "If the Buyer does not cancel the subscription before the 30-day period ends, once the Trial ends the Seller will automatically charge the card on file the annual subscription fee shown to the Buyer during account creation and in the order summary, and the subscription will convert into a paid annual plan that automatically renews every 12 months.",
      "At any time before the Trial ends, the Buyer may switch the billing plan to monthly in the account settings of the admin dashboard — in that case, once the Trial ends the Seller will charge the monthly fee instead of the annual fee, and the subscription will renew every month.",
      `The Buyer may cancel the subscription at any time before the Trial ends at no charge, either in the account settings of the admin dashboard or by contacting the Seller at: ${contactEmail}.`,
      "The Seller will notify the Buyer by email that the Trial is about to end, with reasonable advance notice before any charge is made.",
    ],
    s5WithdrawalNote:
      "Starting the Trial does not deprive the Consumer of the right of withdrawal described in § 8 — if the Consumer withdraws from the Contract within 14 days, no charge will be made and any hold on the card will be released.",

    s6Title: "§ 6. Payments",
    s6MethodsIntro: "Available payment methods:",
    s6Methods: "[LIST PAYMENT METHODS, e.g. payment card, bank transfer, BLIK, PayU, Przelewy24, Stripe]",
    s6Deadline:
      "Payment for the monthly or annual plan (outside the Trial) should be made within [NUMBER] business days of placing the order, unless stated otherwise. Failure to pay within this period will result in the order being cancelled.",

    s7Title: "§ 7. Order fulfilment and delivery",
    s7Intro: "[FILL IN as relevant to your product. Examples below — remove whichever paragraph does not apply:]",
    s7Physical: "For NFC plates (physical product):",
    s7PhysicalBody:
      "The order is fulfilled within [NUMBER] business days of payment being received, or of the subscription starting (for plans with a Trial). Delivery is carried out via [COURIER/POSTAL SERVICE]. Delivery costs are shown in the order summary.",
    s7Digital: "For the Starlinkee Pro subscription (digital service):",
    s7DigitalBody:
      "Access to the admin dashboard and subscription features is activated immediately after the account is created and sent to the provided email address.",

    s8Title: "§ 8. Right of withdrawal",
    s8NoticeTitle: "Information for Consumers",
    s8NoticeBody:
      "Under the EU Consumer Rights Directive (2011/83/EU), as implemented in Poland by the Act of 30 May 2014 on Consumer Rights, you have the right to withdraw from a distance contract without giving any reason.",
    s8Points: [
      "The withdrawal period is 14 days from the day you took possession of the goods (or the last item, for multiple items), or from the day the Contract was concluded (for the subscription and the Trial).",
      `To exercise the right of withdrawal, inform us of your decision by an unambiguous statement (e.g. a letter sent by post or email to: ${contactEmail}). You may use the withdrawal form template in Annex 1 to these Terms.`,
      "To meet the deadline, it is sufficient to send the statement before the period expires.",
      "In the event of withdrawal, the Seller will refund all payments received from you, including delivery costs (except for additional costs resulting from your choice of a delivery method other than the cheapest standard delivery offered), no later than 14 days from the day the withdrawal statement is received. The refund will use the same payment method you used, unless otherwise agreed.",
      "If the Seller has not offered to collect the goods itself, it may withhold the refund until the goods have been received back or proof of their return has been provided.",
      "Goods must be returned to: [RETURN ADDRESS] no later than 14 days from the day you informed us of your withdrawal. You bear the direct cost of returning the goods.",
      "You are liable for any diminished value of the goods resulting from handling them beyond what is necessary to establish their nature, characteristics, and functioning.",
    ],
    s8ExceptionsTitle: "Exceptions to the right of withdrawal:",
    s8Exceptions: [
      "Products made to the Consumer's individual specifications",
      "Digital content not supplied on a tangible medium, if performance began with the Consumer's express prior consent and acknowledgement that they would thereby lose the right of withdrawal",
      "[FILL IN other exceptions relevant to your product]",
    ],

    s9Title: "§ 9. Complaints and statutory warranty",
    s9Points: [
      "The Seller is liable for defects in the goods under the statutory warranty (rękojmia) rules of the Polish Civil Code and, in relation to Consumers, the Act on Consumer Rights, as well as applicable EU consumer-protection law where mandatory in the Consumer's country of residence.",
      `A complaint can be submitted by email to: ${contactEmail} or in writing to: [COMPLAINTS ADDRESS].`,
      "A complaint should include: full name, email address, order number, a description of the defect, and the requested remedy (repair, replacement, price reduction, or withdrawal from the Contract).",
      "The Seller will process the complaint within 14 days of receiving it and will inform the Buyer of the outcome.",
    ],

    s10Title: "§ 10. Out-of-court dispute resolution",
    s10Intro: "A Consumer may use out-of-court methods of handling complaints and pursuing claims, including:",
    s10Points: [
      "The European Commission's Online Dispute Resolution (ODR) platform: ec.europa.eu/consumers/odr",
      "The Permanent Consumer Arbitration Court at the competent Trade Inspection Authority (Poland)",
      "The local district or municipal Consumer Ombudsman (Poland), or the equivalent consumer body in the Consumer's country of residence",
    ],

    s11Title: "§ 11. Personal data protection",
    s11Body: "Detailed information about the processing of personal data, including newsletter sign-up during account creation, is available in our",
    s11LinkLabel: "Privacy Policy",

    s12Title: "§ 12. Final provisions",
    s12Points: [
      "In matters not regulated by these Terms, Polish law applies, in particular the Civil Code and the Act on Consumer Rights.",
      "For Consumers from other EU countries (including Germany, Austria, Switzerland, and Italy), mandatory consumer-protection provisions of the law of their country of habitual residence may also apply.",
      "The Seller reserves the right to amend these Terms. Amendments take effect 14 days after publication and do not affect orders placed before the change.",
      "These Terms are effective as of [EFFECTIVE DATE].",
    ],

    annexTitle: "Annex 1 — Model withdrawal form",
    annexIntro: "(complete and return this form only if you wish to withdraw from the Contract)",
    annexAddressee: "Addressee: Viktor Bobiński, Lubostroń 15A/38, 30-383 Kraków, Poland, vikbobinski@gmail.com",
    annexBody:
      "I/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract of sale of the following goods (*) / contract for the supply of the following digital content (*) / contract for the provision of the following service (*):",
    annexContractDate: "Date of conclusion of the contract (*) / receipt (*): .........................................................",
    annexName: "Name of consumer(s): ................................................................",
    annexAddress: "Address of consumer(s): .............................................................................",
    annexOrderNumber: "Order number: .....................................................................................",
    annexSignature: "Signature of consumer(s) (only if this form is submitted on paper):",
    annexDate: "Date: ................................................",
    annexNote: "(*) Delete as appropriate",
  },

  de: {
    metaTitle: "AGB | Starlinkee",
    metaDescription: "Allgemeine Geschäftsbedingungen für den Kauf von Starlinkee-Produkten — Bestellbedingungen, Widerrufsrecht, Reklamationen.",
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "AGB",
    pageTitle: "Allgemeine Geschäftsbedingungen des Online-Shops",
    lastUpdated: "Zuletzt aktualisiert: 11. Juli 2026",

    s1Title: "§ 1. Angaben zum Verkäufer",
    s1SellerIntro: "Verkäufer ist:",
    s1Supervisor: "Aufsichtsbehörde: Präsident des Amtes für Wettbewerbs- und Verbraucherschutz (UOKiK, Polen)",

    s2Title: "§ 2. Begriffsbestimmungen",
    definitions: [
      { term: "Shop", desc: `der Online-Dienst, erreichbar unter ${SITE_URL}` },
      { term: "Verkäufer", desc: "die in § 1 genannte Person/das genannte Unternehmen" },
      { term: "Käufer", desc: "eine natürliche Person, juristische Person oder Organisationseinheit, die eine Bestellung aufgibt" },
      { term: "Verbraucher", desc: "ein Käufer, der als natürliche Person ein Rechtsgeschäft abschließt, das nicht unmittelbar seiner gewerblichen oder selbständigen beruflichen Tätigkeit zugerechnet werden kann" },
      { term: "Produkt", desc: "das Starlinkee-Pro-Abonnement sowie die damit verbundenen, im Shop erhältlichen NFC-Aufsteller" },
      { term: "Vertrag", desc: "ein im Fernabsatz über den Shop geschlossener Kauf- oder Dienstleistungsvertrag" },
    ],

    s3Title: "§ 3. Technische Voraussetzungen",
    s3Intro: "Für die Nutzung des Shops benötigen Sie:",
    techRequirements: [
      "Internetzugang",
      "Einen aktuellen Webbrowser mit aktiviertem JavaScript und Cookies",
      "Eine aktive E-Mail-Adresse",
    ],

    s4Title: "§ 4. Bestellvorgang",
    orderSteps: [
      "Bestellungen können rund um die Uhr, an 7 Tagen die Woche über die Website des Shops aufgegeben werden.",
      "Zur Bestellung wählt der Käufer die Anzahl der NFC-Aufsteller, einen Abrechnungsplan (monatlich, jährlich oder die kostenlose Testphase) und erstellt ein Konto, indem er die für die Ausführung erforderlichen Daten angibt.",
      "Die Bestellung stellt ein Kaufangebot dar. Der Vertrag kommt zustande, sobald der Verkäufer die Annahme der Bestellung zur Ausführung bestätigt (Bestätigungs-E-Mail).",
      "Die im Shop angegebenen Preise sind Bruttopreise (inkl. MwSt.) und werden in der für das jeweilige Lieferland angegebenen Währung ausgewiesen.",
      "Der Verkäufer behält sich das Recht vor, eine Bestellung abzulehnen, wenn: unrichtige Daten angegeben wurden, das Produkt nicht verfügbar ist oder ein begründeter Verdacht auf rechtswidriges Verhalten besteht.",
    ],

    s5Title: "§ 5. Kostenlose Testphase",
    s5Intro:
      "Der Verkäufer kann dem Käufer eine 30-tägige kostenlose Testphase des Starlinkee-Pro-Abonnements (\"Testphase\") anbieten. Für die Testphase gelten folgende Bedingungen:",
    s5TrialPoints: [
      "Der Start der Testphase erfordert die Angabe von Zahlungskartendaten. Der Verkäufer nimmt lediglich eine vorübergehende Autorisierung (Blockierung) eines geringen Betrags auf der Karte vor, um deren Gültigkeit zu überprüfen — dies ist keine Abbuchung; die Blockierung wird nach erfolgreicher Verifizierung automatisch aufgehoben.",
      "Während der gesamten Testphase hat der Käufer vollen, kostenlosen Zugriff auf Starlinkee Pro.",
      "Kündigt der Käufer das Abonnement nicht vor Ablauf der 30 Tage, berechnet der Verkäufer nach Ende der Testphase automatisch den bei der Kontoerstellung und in der Bestellübersicht angegebenen Jahrespreis auf die hinterlegte Karte, und das Abonnement wird in einen kostenpflichtigen Jahresplan mit automatischer Verlängerung alle 12 Monate umgewandelt.",
      "Der Käufer kann den Abrechnungsplan jederzeit vor Ablauf der Testphase in den Kontoeinstellungen des Admin-Dashboards auf monatlich umstellen — in diesem Fall wird nach Ende der Testphase statt des Jahrespreises der Monatspreis berechnet, und das Abonnement verlängert sich monatlich.",
      `Der Käufer kann das Abonnement jederzeit vor Ablauf der Testphase kostenlos kündigen, entweder in den Kontoeinstellungen des Admin-Dashboards oder durch Kontaktaufnahme mit dem Verkäufer unter: ${contactEmail}.`,
      "Der Verkäufer informiert den Käufer per E-Mail rechtzeitig vor Ablauf der Testphase, bevor eine Abbuchung erfolgt.",
    ],
    s5WithdrawalNote:
      "Der Beginn der Testphase schränkt das in § 8 beschriebene Widerrufsrecht des Verbrauchers nicht ein — widerruft der Verbraucher den Vertrag innerhalb von 14 Tagen, wird keine Zahlung eingezogen und eine etwaige Kartenblockierung wird aufgehoben.",

    s6Title: "§ 6. Zahlungen",
    s6MethodsIntro: "Verfügbare Zahlungsmethoden:",
    s6Methods: "[ZAHLUNGSMETHODEN AUFLISTEN, z. B. Zahlungskarte, Banküberweisung, BLIK, PayU, Przelewy24, Stripe]",
    s6Deadline:
      "Die Zahlung für den Monats- oder Jahresplan (außerhalb der Testphase) sollte innerhalb von [ANZAHL] Werktagen nach Bestellaufgabe erfolgen, sofern nicht anders angegeben. Erfolgt die Zahlung nicht fristgerecht, wird die Bestellung storniert.",

    s7Title: "§ 7. Ausführung und Lieferung",
    s7Intro: "[Passend zu Ihrem Produkt AUSFÜLLEN. Beispiele unten — nicht zutreffende Absätze entfernen:]",
    s7Physical: "Für NFC-Aufsteller (physisches Produkt):",
    s7PhysicalBody:
      "Die Bestellung wird innerhalb von [ANZAHL] Werktagen nach Zahlungseingang bzw. nach Beginn des Abonnements (bei Plänen mit Testphase) ausgeführt. Der Versand erfolgt über [KURIER/POSTDIENST]. Die Versandkosten sind in der Bestellübersicht ausgewiesen.",
    s7Digital: "Für das Starlinkee-Pro-Abonnement (digitale Dienstleistung):",
    s7DigitalBody:
      "Der Zugang zum Admin-Dashboard und zu den Abonnementfunktionen wird unmittelbar nach der Kontoerstellung freigeschaltet und an die angegebene E-Mail-Adresse gesendet.",

    s8Title: "§ 8. Widerrufsrecht",
    s8NoticeTitle: "Hinweis für Verbraucher",
    s8NoticeBody:
      "Gemäß der EU-Verbraucherrechte-Richtlinie (2011/83/EU), in Polen umgesetzt durch das Gesetz vom 30. Mai 2014 über Verbraucherrechte, haben Sie das Recht, einen im Fernabsatz geschlossenen Vertrag ohne Angabe von Gründen zu widerrufen.",
    s8Points: [
      "Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie die Ware in Besitz genommen haben (bzw. bei mehreren Waren die letzte Ware), oder ab dem Tag des Vertragsschlusses (bei Abonnement und Testphase).",
      `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z. B. per Post oder E-Mail an: ${contactEmail}) über Ihren Entschluss informieren. Sie können das Muster-Widerrufsformular in Anlage 1 dieser AGB verwenden.`,
      "Zur Wahrung der Frist genügt es, die Erklärung vor deren Ablauf abzusenden.",
      "Im Falle des Widerrufs erstattet der Verkäufer alle von Ihnen erhaltenen Zahlungen, einschließlich Lieferkosten (mit Ausnahme zusätzlicher Kosten, die sich aus einer von Ihnen gewählten, von der günstigsten Standardlieferung abweichenden Lieferart ergeben), spätestens 14 Tage ab Eingang der Widerrufserklärung. Die Rückzahlung erfolgt über dasselbe Zahlungsmittel, das Sie verwendet haben.",
      "Hat der Verkäufer nicht angeboten, die Ware selbst abzuholen, kann er die Rückzahlung verweigern, bis er die Ware zurückerhalten hat oder Sie den Nachweis über die Rücksendung erbracht haben.",
      "Die Ware ist an: [RÜCKSENDEADRESSE] zurückzusenden, spätestens 14 Tage ab dem Tag, an dem Sie uns über den Widerruf informiert haben. Die unmittelbaren Kosten der Rücksendung trägt der Käufer.",
      "Sie haften für einen etwaigen Wertverlust der Ware, der auf einen Umgang zurückzuführen ist, der über das zur Feststellung von Art, Eigenschaften und Funktionsweise der Ware erforderliche Maß hinausgeht.",
    ],
    s8ExceptionsTitle: "Ausnahmen vom Widerrufsrecht:",
    s8Exceptions: [
      "Nach Kundenspezifikation angefertigte Produkte",
      "Nicht auf einem körperlichen Datenträger gelieferte digitale Inhalte, wenn mit der Ausführung mit ausdrücklicher vorheriger Zustimmung des Verbrauchers begonnen wurde und dieser bestätigt hat, dass er dadurch sein Widerrufsrecht verliert",
      "[weitere Ausnahmen ERGÄNZEN, falls für Ihr Produkt zutreffend]",
    ],

    s9Title: "§ 9. Reklamationen und gesetzliche Gewährleistung",
    s9Points: [
      "Der Verkäufer haftet für Mängel der Ware nach den Vorschriften des polnischen Zivilgesetzbuchs über die Gewährleistung (Art. 556 ff. k.c.) sowie, gegenüber Verbrauchern, nach dem Gesetz über Verbraucherrechte und den zwingenden Vorschriften des anwendbaren EU-Verbraucherschutzrechts im gewöhnlichen Aufenthaltsstaat des Verbrauchers.",
      `Eine Reklamation kann per E-Mail an: ${contactEmail} oder schriftlich an: [REKLAMATIONSADRESSE] eingereicht werden.`,
      "Die Reklamation sollte enthalten: Vor- und Nachname, E-Mail-Adresse, Bestellnummer, Beschreibung des Mangels sowie das gewünschte Vorgehen (Reparatur, Austausch, Preisminderung, Vertragsrücktritt).",
      "Der Verkäufer bearbeitet die Reklamation innerhalb von 14 Tagen nach Eingang und informiert den Käufer über das Ergebnis.",
    ],

    s10Title: "§ 10. Außergerichtliche Streitbeilegung",
    s10Intro: "Der Verbraucher kann außergerichtliche Verfahren zur Beilegung von Streitigkeiten in Anspruch nehmen, u. a.:",
    s10Points: [
      "Die OS-Plattform (Online-Streitbeilegung) der Europäischen Kommission: ec.europa.eu/consumers/odr",
      "Das Ständige Verbraucherschiedsgericht bei der zuständigen Handelsaufsichtsbehörde (Polen)",
      "Die zuständige Verbraucherschutzstelle im gewöhnlichen Aufenthaltsstaat des Verbrauchers",
    ],

    s11Title: "§ 11. Schutz personenbezogener Daten",
    s11Body: "Ausführliche Informationen zur Verarbeitung personenbezogener Daten, einschließlich der Newsletter-Anmeldung bei der Kontoerstellung, finden Sie in unserer",
    s11LinkLabel: "Datenschutzerklärung",

    s12Title: "§ 12. Schlussbestimmungen",
    s12Points: [
      "In nicht durch diese AGB geregelten Angelegenheiten gilt polnisches Recht, insbesondere das Zivilgesetzbuch und das Gesetz über Verbraucherrechte.",
      "Für Verbraucher aus anderen EU-Ländern (u. a. Deutschland, Österreich, der Schweiz und Italien) können zusätzlich zwingende verbraucherschützende Vorschriften des Rechts ihres gewöhnlichen Aufenthaltsstaats gelten.",
      "Der Verkäufer behält sich das Recht vor, diese AGB zu ändern. Änderungen treten 14 Tage nach ihrer Veröffentlichung in Kraft und betreffen nicht vor der Änderung aufgegebene Bestellungen.",
      "Diese AGB gelten ab dem [DATUM DES INKRAFTTRETENS].",
    ],

    annexTitle: "Anlage 1 — Muster-Widerrufsformular",
    annexIntro: "(nur ausfüllen und zurücksenden, wenn Sie den Vertrag widerrufen möchten)",
    annexAddressee: "Empfänger: Viktor Bobiński, Lubostroń 15A/38, 30-383 Kraków, Polen, vikbobinski@gmail.com",
    annexBody:
      "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)/die Lieferung der folgenden digitalen Inhalte (*):",
    annexContractDate: "Bestellt am (*)/erhalten am (*): .........................................................",
    annexName: "Name des/der Verbraucher(s): ................................................................",
    annexAddress: "Anschrift des/der Verbraucher(s): .............................................................................",
    annexOrderNumber: "Bestellnummer: .....................................................................................",
    annexSignature: "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):",
    annexDate: "Datum: ................................................",
    annexNote: "(*) Unzutreffendes streichen",
  },

  it: {
    metaTitle: "Termini e Condizioni | Starlinkee",
    metaDescription: "Termini e condizioni di vendita dei prodotti Starlinkee — condizioni d'acquisto, diritto di recesso, reclami.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Termini e Condizioni",
    pageTitle: "Termini e Condizioni del Negozio Online",
    lastUpdated: "Ultimo aggiornamento: 11 luglio 2026",

    s1Title: "§ 1. Dati del Venditore",
    s1SellerIntro: "Il Venditore è:",
    s1Supervisor: "Autorità di vigilanza: Presidente dell'Ufficio per la Concorrenza e la Tutela dei Consumatori (UOKiK, Polonia)",

    s2Title: "§ 2. Definizioni",
    definitions: [
      { term: "Negozio", desc: `il servizio online disponibile all'indirizzo ${SITE_URL}` },
      { term: "Venditore", desc: "il soggetto indicato al § 1" },
      { term: "Acquirente", desc: "una persona fisica, giuridica o un'unità organizzativa che effettua un ordine" },
      { term: "Consumatore", desc: "l'Acquirente persona fisica che agisce per scopi estranei all'attività imprenditoriale o professionale svolta" },
      { term: "Prodotto", desc: "il servizio in abbonamento Starlinkee Pro e le relative targhe NFC disponibili nel Negozio" },
      { term: "Contratto", desc: "un contratto di vendita o di servizi concluso a distanza tramite il Negozio" },
    ],

    s3Title: "§ 3. Requisiti tecnici",
    s3Intro: "Per utilizzare il Negozio è necessario disporre di:",
    techRequirements: [
      "Accesso a Internet",
      "Un browser web aggiornato che supporti JavaScript e i cookie",
      "Un indirizzo e-mail attivo",
    ],

    s4Title: "§ 4. Effettuazione degli ordini",
    orderSteps: [
      "Gli ordini possono essere effettuati 24 ore su 24, 7 giorni su 7, tramite il sito web del Negozio.",
      "Per effettuare un ordine, l'Acquirente seleziona il numero di targhe NFC, un piano di fatturazione (mensile, annuale o la prova gratuita) e crea un account fornendo i dati necessari all'evasione dell'ordine.",
      "L'invio dell'ordine costituisce una proposta d'acquisto. Il Contratto si considera concluso nel momento in cui il Venditore invia la conferma di accettazione dell'ordine (e-mail di conferma).",
      "I prezzi indicati nel Negozio sono prezzi lordi (IVA inclusa) ed espressi nella valuta indicata per il relativo paese di consegna.",
      "Il Venditore si riserva il diritto di rifiutare l'evasione di un ordine in caso di: dati errati forniti, indisponibilità del prodotto o fondato sospetto di condotta illecita.",
    ],

    s5Title: "§ 5. Prova gratuita",
    s5Intro:
      "Il Venditore può offrire all'Acquirente una prova gratuita di 30 giorni dell'abbonamento Starlinkee Pro (la \"Prova\"). Alla Prova si applicano le seguenti condizioni:",
    s5TrialPoints: [
      "L'avvio della Prova richiede l'inserimento dei dati della carta di pagamento. Il Venditore effettuerà una pre-autorizzazione (blocco) temporanea di un importo minimo sulla carta al solo scopo di verificarne la validità — non si tratta di un addebito e il blocco viene rilasciato automaticamente dopo la verifica.",
      "Per l'intera durata della Prova, l'Acquirente ha accesso completo e gratuito a Starlinkee Pro.",
      "Se l'Acquirente non annulla l'abbonamento prima della scadenza dei 30 giorni, al termine della Prova il Venditore addebiterà automaticamente sulla carta registrata il canone annuale indicato all'Acquirente in fase di creazione dell'account e nel riepilogo dell'ordine, e l'abbonamento passerà a un piano annuale a pagamento con rinnovo automatico ogni 12 mesi.",
      "In qualsiasi momento prima della scadenza della Prova, l'Acquirente può passare alla fatturazione mensile nelle impostazioni dell'account del pannello di amministrazione — in tal caso, al termine della Prova verrà addebitato il canone mensile anziché quello annuale, e l'abbonamento si rinnoverà mensilmente.",
      `L'Acquirente può annullare l'abbonamento in qualsiasi momento prima della scadenza della Prova senza alcun costo, tramite le impostazioni dell'account del pannello di amministrazione oppure contattando il Venditore all'indirizzo: ${contactEmail}.`,
      "Il Venditore informerà l'Acquirente via e-mail dell'imminente scadenza della Prova con ragionevole anticipo prima di qualsiasi addebito.",
    ],
    s5WithdrawalNote:
      "L'avvio della Prova non priva il Consumatore del diritto di recesso descritto al § 8 — se il Consumatore recede dal Contratto entro 14 giorni, non gli verrà addebitato alcun importo ed eventuali blocchi sulla carta verranno rilasciati.",

    s6Title: "§ 6. Pagamenti",
    s6MethodsIntro: "Metodi di pagamento disponibili:",
    s6Methods: "[ELENCARE I METODI DI PAGAMENTO, es. carta di pagamento, bonifico bancario, BLIK, PayU, Przelewy24, Stripe]",
    s6Deadline:
      "Il pagamento del piano mensile o annuale (al di fuori della Prova) deve essere effettuato entro [NUMERO] giorni lavorativi dall'effettuazione dell'ordine, salvo diversa indicazione. Il mancato pagamento entro tale termine comporta l'annullamento dell'ordine.",

    s7Title: "§ 7. Evasione dell'ordine e consegna",
    s7Intro: "[COMPLETARE in base al proprio prodotto. Esempi di seguito — rimuovere i paragrafi non pertinenti:]",
    s7Physical: "Per le targhe NFC (prodotto fisico):",
    s7PhysicalBody:
      "L'ordine viene evaso entro [NUMERO] giorni lavorativi dalla registrazione del pagamento o dall'avvio dell'abbonamento (per i piani con Prova). La consegna avviene tramite [CORRIERE/POSTE]. I costi di consegna sono indicati nel riepilogo dell'ordine.",
    s7Digital: "Per l'abbonamento Starlinkee Pro (servizio digitale):",
    s7DigitalBody:
      "L'accesso al pannello di amministrazione e alle funzionalità dell'abbonamento viene attivato immediatamente dopo la creazione dell'account e inviato all'indirizzo e-mail fornito.",

    s8Title: "§ 8. Diritto di recesso",
    s8NoticeTitle: "Informativa per i Consumatori",
    s8NoticeBody:
      "Ai sensi della direttiva UE sui diritti dei consumatori (2011/83/UE), recepita in Polonia dalla legge del 30 maggio 2014 sui diritti dei consumatori, hai il diritto di recedere da un contratto concluso a distanza senza fornire alcuna motivazione.",
    s8Points: [
      "Il termine per il recesso è di 14 giorni dal giorno in cui sei entrato/a in possesso del bene (o dell'ultimo bene, in caso di consegne multiple), oppure dal giorno della conclusione del Contratto (per l'abbonamento e la Prova).",
      `Per esercitare il diritto di recesso, informaci della tua decisione tramite una dichiarazione esplicita (ad es. lettera inviata per posta o e-mail a: ${contactEmail}). Puoi utilizzare il modulo di recesso di cui all'Allegato 1 ai presenti Termini.`,
      "Per rispettare il termine, è sufficiente inviare la dichiarazione prima della sua scadenza.",
      "In caso di recesso, il Venditore rimborserà tutti i pagamenti ricevuti da te, compresi i costi di consegna (ad eccezione dei costi aggiuntivi derivanti dalla scelta di un metodo di consegna diverso da quello standard più economico offerto), entro e non oltre 14 giorni dal ricevimento della dichiarazione di recesso. Il rimborso avverrà con lo stesso mezzo di pagamento da te utilizzato.",
      "Se il Venditore non ha proposto di ritirare personalmente il bene, può trattenere il rimborso fino al ricevimento del bene restituito o alla prova del suo rinvio.",
      "Il bene deve essere restituito all'indirizzo: [INDIRIZZO PER I RESI] entro e non oltre 14 giorni dal giorno in cui ci hai informato del recesso. I costi diretti della restituzione sono a carico dell'Acquirente.",
      "Sei responsabile della diminuzione del valore del bene derivante da un utilizzo diverso da quello necessario per stabilirne la natura, le caratteristiche e il funzionamento.",
    ],
    s8ExceptionsTitle: "Eccezioni al diritto di recesso:",
    s8Exceptions: [
      "Prodotti realizzati su misura per il Consumatore",
      "Contenuti digitali non forniti su supporto materiale, se l'esecuzione è iniziata con il consenso espresso preventivo del Consumatore e con la sua presa d'atto della conseguente perdita del diritto di recesso",
      "[AGGIUNGERE altre eccezioni pertinenti al proprio prodotto]",
    ],

    s9Title: "§ 9. Reclami e garanzia legale",
    s9Points: [
      "Il Venditore è responsabile per i vizi del bene ai sensi delle norme sulla garanzia (rękojmia) del codice civile polacco, nonché, nei confronti dei Consumatori, della legge sui diritti dei consumatori e delle norme inderogabili di tutela del consumatore applicabili nel paese di residenza abituale del Consumatore.",
      `Un reclamo può essere inviato via e-mail a: ${contactEmail} oppure per iscritto a: [INDIRIZZO PER I RECLAMI].`,
      "Il reclamo dovrebbe contenere: nome e cognome, indirizzo e-mail, numero d'ordine, descrizione del vizio e la richiesta (riparazione, sostituzione, riduzione del prezzo, recesso dal Contratto).",
      "Il Venditore esamina il reclamo entro 14 giorni dal ricevimento e informa l'Acquirente dell'esito.",
    ],

    s10Title: "§ 10. Risoluzione extragiudiziale delle controversie",
    s10Intro: "Il Consumatore può ricorrere a metodi extragiudiziali di gestione dei reclami e di tutela dei propri diritti, tra cui:",
    s10Points: [
      "La piattaforma ODR (Online Dispute Resolution) della Commissione Europea: ec.europa.eu/consumers/odr",
      "Il Collegio Arbitrale Permanente dei Consumatori presso il competente Ispettorato dell'Ispezione Commerciale (Polonia)",
      "Il Difensore Civico dei Consumatori competente nel paese di residenza abituale del Consumatore",
    ],

    s11Title: "§ 11. Protezione dei dati personali",
    s11Body: "Informazioni dettagliate sul trattamento dei dati personali, inclusa l'iscrizione alla newsletter al momento della creazione dell'account, sono disponibili nella nostra",
    s11LinkLabel: "Informativa sulla Privacy",

    s12Title: "§ 12. Disposizioni finali",
    s12Points: [
      "Per le materie non disciplinate dai presenti Termini si applica il diritto polacco, in particolare il codice civile e la legge sui diritti dei consumatori.",
      "Per i Consumatori di altri paesi UE (tra cui Germania, Austria, Svizzera e Italia), possono applicarsi inoltre le norme inderogabili a tutela del consumatore del diritto del paese di residenza abituale.",
      "Il Venditore si riserva il diritto di modificare i presenti Termini. Le modifiche entrano in vigore trascorsi 14 giorni dalla pubblicazione e non riguardano gli ordini effettuati prima della modifica.",
      "I presenti Termini sono in vigore dal [DATA DI ENTRATA IN VIGORE].",
    ],

    annexTitle: "Allegato 1 — Modulo tipo di recesso",
    annexIntro: "(compilare e restituire solo in caso di volontà di recedere dal Contratto)",
    annexAddressee: "Destinatario: Viktor Bobiński, Lubostroń 15A/38, 30-383 Cracovia, Polonia, vikbobinski@gmail.com",
    annexBody:
      "Con la presente io/noi (*) notifichiamo il recesso dal mio/nostro (*) contratto di vendita dei seguenti beni (*) / contratto di fornitura dei seguenti contenuti digitali (*) / contratto di prestazione del seguente servizio (*):",
    annexContractDate: "Data di conclusione del contratto (*) / ricezione (*): .........................................................",
    annexName: "Nome e cognome del/dei consumatore/i: ................................................................",
    annexAddress: "Indirizzo del/dei consumatore/i: .............................................................................",
    annexOrderNumber: "Numero d'ordine: .....................................................................................",
    annexSignature: "Firma del/dei consumatore/i (solo se il modulo è trasmesso in formato cartaceo):",
    annexDate: "Data: ................................................",
    annexNote: "(*) Cancellare la voce che non interessa",
  },
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "pl";
  const c = copy[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `${SITE_URL}/${locale}/regulamin` },
    robots: { index: false, follow: false },
  };
}

export default async function Regulamin({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "pl";
  const c = copy[locale];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href={`/${locale}`} className="hover:text-gray-700">{c.breadcrumbHome}</Link></li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">{c.breadcrumbCurrent}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{c.pageTitle}</h1>
        <p className="text-sm text-gray-500 mb-10">{c.lastUpdated}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s1Title}</h2>
            <p>
              {c.s1SellerIntro}<br />
              <strong>Viktor Bobiński</strong><br />
              Lubostroń 15A/38, 30-383 Kraków, Polska<br />
              (osoba fizyczna, działalność niezarejestrowana jako firma)<br />
              e-mail: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a><br />
              {c.s1Supervisor}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s2Title}</h2>
            <ul className="list-disc pl-6 space-y-1">
              {c.definitions.map((d) => (
                <li key={d.term}><strong>{d.term}</strong> – {d.desc}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s3Title}</h2>
            <p>{c.s3Intro}</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              {c.techRequirements.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s4Title}</h2>
            <ol className="list-decimal pl-6 space-y-2">
              {c.orderSteps.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s5Title}</h2>
            <p>{c.s5Intro}</p>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              {c.s5TrialPoints.map((item, i) => (
                <li key={i}>
                  {item}
                  {i === 4 && <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>}
                  {i === 4 && "."}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-gray-600">{c.s5WithdrawalNote}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s6Title}</h2>
            <p>{c.s6MethodsIntro}</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>{c.s6Methods}</li>
            </ul>
            <p className="mt-3">{c.s6Deadline}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s7Title}</h2>
            <p>{c.s7Intro}</p>
            <p className="mt-2 italic text-gray-500">{c.s7Physical}</p>
            <p>{c.s7PhysicalBody}</p>
            <p className="mt-2 italic text-gray-500">{c.s7Digital}</p>
            <p>{c.s7DigitalBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s8Title}</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <p className="text-sm font-semibold text-blue-800">{c.s8NoticeTitle}</p>
              <p className="text-sm text-blue-700 mt-1">{c.s8NoticeBody}</p>
            </div>
            <ol className="list-decimal pl-6 space-y-2">
              {c.s8Points.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <p className="mt-4 font-semibold">{c.s8ExceptionsTitle}</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              {c.s8Exceptions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s9Title}</h2>
            <ol className="list-decimal pl-6 space-y-2">
              {c.s9Points.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s10Title}</h2>
            <p>{c.s10Intro}</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              {c.s10Points.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s11Title}</h2>
            <p>
              {c.s11Body}{" "}
              <Link href={`/${locale}/polityka-prywatnosci`} className="text-blue-600 hover:underline">{c.s11LinkLabel}</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s12Title}</h2>
            <ol className="list-decimal pl-6 space-y-2">
              {c.s12Points.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.annexTitle}</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 font-mono text-sm">
              <p className="font-bold mb-4">{c.annexTitle.toUpperCase()}</p>
              <p>{c.annexIntro}</p>
              <br />
              <p>{c.annexAddressee}</p>
              <br />
              <p>{c.annexBody}</p>
              <br />
              <p>{c.annexContractDate}</p>
              <br />
              <p>{c.annexName}</p>
              <br />
              <p>{c.annexAddress}</p>
              <br />
              <p>{c.annexOrderNumber}</p>
              <br />
              <p>{c.annexSignature}</p>
              <br />
              <p>.....................................................</p>
              <br />
              <p>{c.annexDate}</p>
              <br />
              <p className="text-xs text-gray-500">{c.annexNote}</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
