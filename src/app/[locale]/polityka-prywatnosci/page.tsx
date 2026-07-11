import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, type Locale } from "@/i18n";
import { isValidLocale } from "@/lib/locale";

const SITE_URL = "https://starlinkee.com";
const contactEmail = "[EMAIL KONTAKTOWY]";

type TableRow = { purpose: string; categories: string; basis: string; retention: string };

type Copy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pageTitle: string;
  lastUpdated: string;

  s1Title: string;
  s1Intro: string;

  s2Title: string;
  s2Body1: string;
  s2Body2: string;

  s3Title: string;
  tableHeaders: { purpose: string; categories: string; basis: string; retention: string };
  tableRows: TableRow[];
  s3NewsletterNote: string;

  s4Title: string;
  s4Intro: string;
  recipients: string[];
  s4NoSale: string;

  s5Title: string;
  s5Body: string;

  s6Title: string;
  s6Intro: string;
  rights: { title: string; desc: string }[];
  s6Contact: string;
  s6Complaint: string;

  s7Title: string;
  s7Body: string;

  s8Title: string;
  s8Body: string;
  s8LinkLabel: string;

  s9Title: string;
  s9Body: string;
  s9LinkLabel: string;

  s10Title: string;
  s10Body: string;
};

const copy: Record<Locale, Copy> = {
  pl: {
    metaTitle: "Polityka Prywatności | Starlinkee",
    metaDescription: "Polityka prywatności serwisu Starlinkee — informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
    breadcrumbHome: "Strona główna",
    breadcrumbCurrent: "Polityka Prywatności",
    pageTitle: "Polityka Prywatności",
    lastUpdated: "Ostatnia aktualizacja: 11 lipca 2026 r.",

    s1Title: "1. Administrator danych",
    s1Intro: "Administratorem Twoich danych osobowych jest:",

    s2Title: "2. Dane kontaktowe Inspektora Ochrony Danych",
    s2Body1: "Jeśli powołałeś/powołałaś Inspektora Ochrony Danych, podaj jego dane tutaj. W przeciwnym razie usuń tę sekcję lub zaznacz, że nie powołano IOD (dopuszczalne dla małych firm, które nie przetwarzają danych na dużą skalę).",
    s2Body2: "IOD: [IMIĘ I NAZWISKO IOD lub „Nie powołano Inspektora Ochrony Danych”]",

    s3Title: "3. Jakie dane zbieramy i w jakim celu",
    tableHeaders: { purpose: "Cel przetwarzania", categories: "Kategorie danych", basis: "Podstawa prawna (RODO)", retention: "Okres przechowywania" },
    tableRows: [
      { purpose: "Założenie konta i realizacja zamówienia (w tym subskrypcji i bezpłatnego okresu próbnego)", categories: "imię/nazwa firmy, adres, e-mail, hasło (zaszyfrowane), dane karty płatniczej (przetwarzane przez operatora płatności)", basis: "Art. 6 ust. 1 lit. b – wykonanie umowy", retention: "5 lat od końca roku podatkowego" },
      { purpose: "Obsługa formularza kontaktowego", categories: "imię, e-mail, treść wiadomości", basis: "Art. 6 ust. 1 lit. f – prawnie uzasadniony interes", retention: "12 miesięcy od ostatniego kontaktu" },
      { purpose: "Newsletter — w tym zapis następujący automatycznie przy zakładaniu konta w procesie zamówienia", categories: "adres e-mail", basis: "Art. 6 ust. 1 lit. a RODO oraz art. 10 ustawy o świadczeniu usług drogą elektroniczną – zgoda", retention: "Do wycofania zgody" },
      { purpose: "Analityka i cookies", categories: "dane o aktywności, adres IP", basis: "Art. 6 ust. 1 lit. a – zgoda", retention: "Zgodnie z Polityką Cookies" },
      { purpose: "Obowiązki księgowe i podatkowe", categories: "dane z faktury", basis: "Art. 6 ust. 1 lit. c – obowiązek prawny", retention: "5 lat od końca roku podatkowego" },
    ],
    s3NewsletterNote:
      "Zakładając konto w czwartym kroku procesu zamówienia (podając adres e-mail i hasło), zapisujesz się jednocześnie na nasz newsletter — o czym informujemy Cię w tym miejscu, a stosowna informacja pojawia się także w Regulaminie. Newsletter zawiera informacje o Twoim koncie, subskrypcji oraz nowościach w usłudze Starlinkee. Możesz zrezygnować w każdej chwili, klikając link „wypisz się” w stopce dowolnej wiadomości lub pisząc na adres:",

    s4Title: "4. Odbiorcy danych",
    s4Intro: "Twoje dane mogą być przekazywane następującym kategoriom odbiorców:",
    recipients: [
      "Dostawcy usług płatniczych obsługujący płatności kartą oraz weryfikację/autoryzację karty na potrzeby okresu próbnego (np. [NAZWA OPERATORA PŁATNOŚCI, np. Stripe, PayU, Przelewy24])",
      "Dostawcy usług hostingowych i infrastruktury IT",
      "Dostawcy usług e-mail i newslettera (np. Resend oraz inni [NAZWA DOSTAWCY])",
      "Biuro rachunkowe / księgowe",
      "Podmioty świadczące usługi kurierskie i pocztowe (przy wysyłce tabliczek NFC)",
    ],
    s4NoSale: "Nie sprzedajemy Twoich danych osobowych podmiotom trzecim w celach marketingowych.",

    s5Title: "5. Przekazywanie danych poza EOG",
    s5Body:
      "Jeśli korzystasz z usług dostawców spoza Europejskiego Obszaru Gospodarczego (np. Google, Meta), Twoje dane mogą być przekazywane do państw trzecich. Transfer odbywa się na podstawie standardowych klauzul umownych (SCC) zatwierdzonych przez Komisję Europejską lub innych mechanizmów przewidzianych przez RODO. Szczegółowe informacje znajdziesz w politykach prywatności poszczególnych dostawców.",

    s6Title: "6. Twoje prawa",
    s6Intro: "Na podstawie RODO przysługują Ci następujące prawa:",
    rights: [
      { title: "Prawo dostępu", desc: "możesz uzyskać kopię swoich danych (art. 15 RODO)" },
      { title: "Prawo do sprostowania", desc: "możesz poprawić nieprawidłowe dane (art. 16 RODO)" },
      { title: "Prawo do usunięcia", desc: "możesz zażądać usunięcia danych w określonych przypadkach (art. 17 RODO)" },
      { title: "Prawo do ograniczenia przetwarzania", desc: "możesz żądać zawieszenia przetwarzania (art. 18 RODO)" },
      { title: "Prawo do przenoszenia danych", desc: "możesz otrzymać dane w ustrukturyzowanym formacie (art. 20 RODO)" },
      { title: "Prawo do sprzeciwu", desc: "możesz sprzeciwić się przetwarzaniu opartemu na prawnie uzasadnionym interesie (art. 21 RODO)" },
      { title: "Prawo do cofnięcia zgody", desc: "w każdej chwili, bez wpływu na zgodność z prawem przetwarzania przed cofnięciem — dotyczy w szczególności zgody na newsletter opisanej w pkt 3" },
    ],
    s6Contact: "Wnioski kieruj na adres e-mail:",
    s6Complaint: "Masz również prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.",

    s7Title: "7. Zautomatyzowane podejmowanie decyzji i profilowanie",
    s7Body: "Nie stosujemy zautomatyzowanego podejmowania decyzji ani profilowania, które wywoływałoby skutki prawne lub w podobny sposób istotnie wpływało na Ciebie.",

    s8Title: "8. Pliki cookies",
    s8Body: "Szczegółowe informacje dotyczące plików cookies znajdziesz w naszej",
    s8LinkLabel: "Polityce Cookies",

    s9Title: "9. Regulamin i warunki bezpłatnego okresu próbnego",
    s9Body: "Warunki płatności, w tym zasady dotyczące bezpłatnego 30-dniowego okresu próbnego, weryfikacji karty i automatycznego przejścia na plan płatny, znajdziesz w naszym",
    s9LinkLabel: "Regulaminie",

    s10Title: "10. Zmiany Polityki Prywatności",
    s10Body: "Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności. O wszelkich istotnych zmianach poinformujemy Cię za pośrednictwem wiadomości e-mail lub komunikatu na stronie. Data ostatniej aktualizacji widnieje na górze dokumentu.",
  },

  en: {
    metaTitle: "Privacy Policy | Starlinkee",
    metaDescription: "Starlinkee's privacy policy — how we process personal data in line with GDPR.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Privacy Policy",
    pageTitle: "Privacy Policy",
    lastUpdated: "Last updated: 11 July 2026",

    s1Title: "1. Data Controller",
    s1Intro: "The controller of your personal data is:",

    s2Title: "2. Data Protection Officer contact details",
    s2Body1: "If you have appointed a Data Protection Officer, add their details here. Otherwise remove this section or state that no DPO has been appointed (permitted for small businesses that do not process data on a large scale).",
    s2Body2: "DPO: [DPO NAME or “No Data Protection Officer has been appointed”]",

    s3Title: "3. What data we collect and why",
    tableHeaders: { purpose: "Processing purpose", categories: "Categories of data", basis: "Legal basis (GDPR)", retention: "Retention period" },
    tableRows: [
      { purpose: "Account creation and order fulfilment (including the subscription and the free trial)", categories: "name/company name, address, email, password (encrypted), card details (processed by the payment provider)", basis: "Art. 6(1)(b) – performance of a contract", retention: "5 years from the end of the tax year" },
      { purpose: "Handling the contact form", categories: "name, email, message content", basis: "Art. 6(1)(f) – legitimate interest", retention: "12 months from last contact" },
      { purpose: "Newsletter — including sign-up that happens automatically when an account is created during checkout", categories: "email address", basis: "Art. 6(1)(a) GDPR and applicable national e-privacy/e-commerce rules – consent", retention: "Until consent is withdrawn" },
      { purpose: "Analytics and cookies", categories: "activity data, IP address", basis: "Art. 6(1)(a) – consent", retention: "As per the Cookie Policy" },
      { purpose: "Accounting and tax obligations", categories: "invoice data", basis: "Art. 6(1)(c) – legal obligation", retention: "5 years from the end of the tax year" },
    ],
    s3NewsletterNote:
      "When you create an account in step four of the order process (by entering your email address and password), you are simultaneously signed up to our newsletter — which we disclose here, with corresponding information also given in the Terms & Conditions. The newsletter includes information about your account, your subscription, and updates to the Starlinkee service. You can unsubscribe at any time via the “unsubscribe” link in any email, or by writing to:",

    s4Title: "4. Recipients of your data",
    s4Intro: "Your data may be shared with the following categories of recipients:",
    recipients: [
      "Payment service providers handling card payments and card verification/authorization for the free trial (e.g. [PAYMENT PROVIDER, e.g. Stripe, PayU, Przelewy24])",
      "Hosting and IT infrastructure providers",
      "Email and newsletter providers (e.g. Resend and others [PROVIDER NAME])",
      "Our accounting office",
      "Courier and postal service providers (for shipping NFC plates)",
    ],
    s4NoSale: "We do not sell your personal data to third parties for marketing purposes.",

    s5Title: "5. Transfers of data outside the EEA",
    s5Body:
      "If we use providers based outside the European Economic Area (e.g. Google, Meta), your data may be transferred to third countries. Such transfers rely on Standard Contractual Clauses (SCCs) approved by the European Commission or other mechanisms provided for under the GDPR. Details are available in each provider's own privacy policy.",

    s6Title: "6. Your rights",
    s6Intro: "Under the GDPR you have the following rights:",
    rights: [
      { title: "Right of access", desc: "you can obtain a copy of your data (Art. 15 GDPR)" },
      { title: "Right to rectification", desc: "you can correct inaccurate data (Art. 16 GDPR)" },
      { title: "Right to erasure", desc: "you can request deletion of your data in certain cases (Art. 17 GDPR)" },
      { title: "Right to restriction of processing", desc: "you can request that processing be suspended (Art. 18 GDPR)" },
      { title: "Right to data portability", desc: "you can receive your data in a structured format (Art. 20 GDPR)" },
      { title: "Right to object", desc: "you can object to processing based on legitimate interest (Art. 21 GDPR)" },
      { title: "Right to withdraw consent", desc: "at any time, without affecting the lawfulness of processing before withdrawal — this applies in particular to the newsletter consent described in section 3" },
    ],
    s6Contact: "Send requests to:",
    s6Complaint: "You also have the right to lodge a complaint with the Polish Data Protection Authority (UODO), ul. Stawki 2, 00-193 Warsaw, uodo.gov.pl, or with the supervisory authority in your own EU member state.",

    s7Title: "7. Automated decision-making and profiling",
    s7Body: "We do not use automated decision-making or profiling that produces legal effects concerning you or similarly significantly affects you.",

    s8Title: "8. Cookies",
    s8Body: "Detailed information about cookies is available in our",
    s8LinkLabel: "Cookie Policy",

    s9Title: "9. Terms & Conditions and free trial terms",
    s9Body: "Payment terms, including the rules governing the free 30-day trial, card verification, and the automatic switch to a paid plan, are available in our",
    s9LinkLabel: "Terms & Conditions",

    s10Title: "10. Changes to this Privacy Policy",
    s10Body: "We reserve the right to amend this Privacy Policy. We will notify you of any material changes by email or via a notice on the website. The date of the last update is shown at the top of this document.",
  },

  de: {
    metaTitle: "Datenschutzerklärung | Starlinkee",
    metaDescription: "Datenschutzerklärung von Starlinkee — Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "Datenschutzerklärung",
    pageTitle: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: 11. Juli 2026",

    s1Title: "1. Verantwortlicher",
    s1Intro: "Verantwortlicher für Ihre personenbezogenen Daten ist:",

    s2Title: "2. Kontaktdaten des Datenschutzbeauftragten",
    s2Body1: "Wenn Sie einen Datenschutzbeauftragten bestellt haben, geben Sie hier dessen Kontaktdaten an. Andernfalls entfernen Sie diesen Abschnitt oder vermerken Sie, dass kein Datenschutzbeauftragter bestellt wurde (zulässig für kleine Unternehmen, die keine umfangreiche Datenverarbeitung durchführen).",
    s2Body2: "Datenschutzbeauftragter: [NAME oder „Es wurde kein Datenschutzbeauftragter bestellt“]",

    s3Title: "3. Welche Daten wir erheben und wofür",
    tableHeaders: { purpose: "Verarbeitungszweck", categories: "Datenkategorien", basis: "Rechtsgrundlage (DSGVO)", retention: "Speicherdauer" },
    tableRows: [
      { purpose: "Kontoerstellung und Bestellabwicklung (einschließlich Abonnement und kostenloser Testphase)", categories: "Name/Firmenname, Adresse, E-Mail, Passwort (verschlüsselt), Kartendaten (verarbeitet vom Zahlungsdienstleister)", basis: "Art. 6 Abs. 1 lit. b – Vertragserfüllung", retention: "5 Jahre ab Ende des Steuerjahres" },
      { purpose: "Bearbeitung des Kontaktformulars", categories: "Name, E-Mail, Nachrichteninhalt", basis: "Art. 6 Abs. 1 lit. f – berechtigtes Interesse", retention: "12 Monate seit dem letzten Kontakt" },
      { purpose: "Newsletter — einschließlich der Anmeldung, die automatisch bei der Kontoerstellung im Bestellvorgang erfolgt", categories: "E-Mail-Adresse", basis: "Art. 6 Abs. 1 lit. a DSGVO sowie einschlägige nationale Vorschriften zu elektronischer Kommunikation – Einwilligung", retention: "Bis zum Widerruf der Einwilligung" },
      { purpose: "Analyse und Cookies", categories: "Nutzungsdaten, IP-Adresse", basis: "Art. 6 Abs. 1 lit. a – Einwilligung", retention: "Gemäß Cookie-Richtlinie" },
      { purpose: "Buchhaltungs- und steuerliche Pflichten", categories: "Rechnungsdaten", basis: "Art. 6 Abs. 1 lit. c – rechtliche Verpflichtung", retention: "5 Jahre ab Ende des Steuerjahres" },
    ],
    s3NewsletterNote:
      "Wenn Sie im vierten Schritt des Bestellvorgangs ein Konto erstellen (durch Eingabe Ihrer E-Mail-Adresse und Ihres Passworts), werden Sie gleichzeitig für unseren Newsletter angemeldet — worüber wir Sie hiermit informieren; ein entsprechender Hinweis findet sich auch in unseren AGB. Der Newsletter enthält Informationen zu Ihrem Konto, Ihrem Abonnement sowie Neuigkeiten zum Starlinkee-Dienst. Sie können sich jederzeit über den „Abmelden“-Link in jeder E-Mail oder durch eine Nachricht an folgende Adresse abmelden:",

    s4Title: "4. Empfänger der Daten",
    s4Intro: "Ihre Daten können an folgende Kategorien von Empfängern weitergegeben werden:",
    recipients: [
      "Zahlungsdienstleister, die Kartenzahlungen sowie die Kartenprüfung/-autorisierung für die Testphase abwickeln (z. B. [ZAHLUNGSANBIETER, z. B. Stripe, PayU, Przelewy24])",
      "Hosting- und IT-Infrastrukturanbieter",
      "Anbieter von E-Mail- und Newsletter-Diensten (z. B. Resend sowie weitere [ANBIETERNAME])",
      "Steuerberatungs-/Buchhaltungsbüro",
      "Kurier- und Postdienstleister (beim Versand der NFC-Aufsteller)",
    ],
    s4NoSale: "Wir verkaufen Ihre personenbezogenen Daten nicht zu Marketingzwecken an Dritte.",

    s5Title: "5. Datenübermittlung außerhalb des EWR",
    s5Body:
      "Wenn wir Dienstleister außerhalb des Europäischen Wirtschaftsraums nutzen (z. B. Google, Meta), können Ihre Daten in Drittländer übermittelt werden. Die Übermittlung erfolgt auf Grundlage von der Europäischen Kommission genehmigten Standardvertragsklauseln (SCC) oder anderer, in der DSGVO vorgesehener Mechanismen. Details finden Sie in den jeweiligen Datenschutzerklärungen der Anbieter.",

    s6Title: "6. Ihre Rechte",
    s6Intro: "Nach der DSGVO stehen Ihnen folgende Rechte zu:",
    rights: [
      { title: "Auskunftsrecht", desc: "Sie können eine Kopie Ihrer Daten erhalten (Art. 15 DSGVO)" },
      { title: "Recht auf Berichtigung", desc: "Sie können unrichtige Daten korrigieren lassen (Art. 16 DSGVO)" },
      { title: "Recht auf Löschung", desc: "Sie können in bestimmten Fällen die Löschung Ihrer Daten verlangen (Art. 17 DSGVO)" },
      { title: "Recht auf Einschränkung der Verarbeitung", desc: "Sie können die Aussetzung der Verarbeitung verlangen (Art. 18 DSGVO)" },
      { title: "Recht auf Datenübertragbarkeit", desc: "Sie können Ihre Daten in einem strukturierten Format erhalten (Art. 20 DSGVO)" },
      { title: "Widerspruchsrecht", desc: "Sie können einer auf berechtigtem Interesse beruhenden Verarbeitung widersprechen (Art. 21 DSGVO)" },
      { title: "Recht auf Widerruf der Einwilligung", desc: "jederzeit, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird — dies betrifft insbesondere die in Abschnitt 3 beschriebene Newsletter-Einwilligung" },
    ],
    s6Contact: "Anfragen richten Sie bitte an:",
    s6Complaint: "Sie haben zudem das Recht, sich bei der polnischen Datenschutzaufsichtsbehörde (UODO), ul. Stawki 2, 00-193 Warschau, uodo.gov.pl, oder bei der Aufsichtsbehörde Ihres eigenen EU-Mitgliedstaats zu beschweren.",

    s7Title: "7. Automatisierte Entscheidungsfindung und Profiling",
    s7Body: "Wir setzen keine automatisierte Entscheidungsfindung oder kein Profiling ein, die rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich beeinträchtigen würden.",

    s8Title: "8. Cookies",
    s8Body: "Ausführliche Informationen zu Cookies finden Sie in unserer",
    s8LinkLabel: "Cookie-Richtlinie",

    s9Title: "9. AGB und Bedingungen der kostenlosen Testphase",
    s9Body: "Zahlungsbedingungen, einschließlich der Regeln für die kostenlose 30-tägige Testphase, die Kartenverifizierung und den automatischen Wechsel in einen kostenpflichtigen Plan, finden Sie in unseren",
    s9LinkLabel: "AGB",

    s10Title: "10. Änderungen dieser Datenschutzerklärung",
    s10Body: "Wir behalten uns das Recht vor, diese Datenschutzerklärung zu ändern. Über wesentliche Änderungen informieren wir Sie per E-Mail oder durch einen Hinweis auf der Website. Das Datum der letzten Aktualisierung finden Sie oben im Dokument.",
  },

  it: {
    metaTitle: "Informativa sulla Privacy | Starlinkee",
    metaDescription: "Informativa sulla privacy di Starlinkee — trattamento dei dati personali in conformità al GDPR.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Informativa sulla Privacy",
    pageTitle: "Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: 11 luglio 2026",

    s1Title: "1. Titolare del trattamento",
    s1Intro: "Il Titolare del trattamento dei tuoi dati personali è:",

    s2Title: "2. Contatti del Responsabile della Protezione dei Dati",
    s2Body1: "Se hai nominato un Responsabile della Protezione dei Dati (DPO), inserisci qui i suoi dati. In caso contrario, rimuovi questa sezione o indica che non è stato nominato alcun DPO (ammesso per le piccole imprese che non trattano dati su larga scala).",
    s2Body2: "DPO: [NOME DEL DPO oppure “Non è stato nominato un Responsabile della Protezione dei Dati”]",

    s3Title: "3. Quali dati raccogliamo e per quale finalità",
    tableHeaders: { purpose: "Finalità del trattamento", categories: "Categorie di dati", basis: "Base giuridica (GDPR)", retention: "Periodo di conservazione" },
    tableRows: [
      { purpose: "Creazione dell'account ed evasione dell'ordine (incluso l'abbonamento e la prova gratuita)", categories: "nome/ragione sociale, indirizzo, e-mail, password (criptata), dati della carta (trattati dal fornitore di servizi di pagamento)", basis: "Art. 6(1)(b) – esecuzione del contratto", retention: "5 anni dalla fine dell'anno fiscale" },
      { purpose: "Gestione del modulo di contatto", categories: "nome, e-mail, contenuto del messaggio", basis: "Art. 6(1)(f) – legittimo interesse", retention: "12 mesi dall'ultimo contatto" },
      { purpose: "Newsletter — inclusa l'iscrizione automatica al momento della creazione dell'account durante il checkout", categories: "indirizzo e-mail", basis: "Art. 6(1)(a) GDPR e normativa nazionale applicabile in materia di comunicazioni elettroniche – consenso", retention: "Fino alla revoca del consenso" },
      { purpose: "Analisi e cookie", categories: "dati di attività, indirizzo IP", basis: "Art. 6(1)(a) – consenso", retention: "Come da Informativa sui Cookie" },
      { purpose: "Obblighi contabili e fiscali", categories: "dati di fatturazione", basis: "Art. 6(1)(c) – obbligo legale", retention: "5 anni dalla fine dell'anno fiscale" },
    ],
    s3NewsletterNote:
      "Creando un account nel quarto passaggio del processo d'ordine (inserendo indirizzo e-mail e password), vieni contestualmente iscritto/a alla nostra newsletter — cosa che ti comunichiamo qui, con una nota corrispondente presente anche nei Termini e Condizioni. La newsletter contiene informazioni sul tuo account, sul tuo abbonamento e sulle novità del servizio Starlinkee. Puoi annullare l'iscrizione in qualsiasi momento tramite il link “annulla iscrizione” presente in ogni e-mail, oppure scrivendo a:",

    s4Title: "4. Destinatari dei dati",
    s4Intro: "I tuoi dati possono essere comunicati alle seguenti categorie di destinatari:",
    recipients: [
      "Fornitori di servizi di pagamento che gestiscono i pagamenti con carta e la verifica/autorizzazione della carta per la prova gratuita (es. [FORNITORE DI PAGAMENTO, es. Stripe, PayU, Przelewy24])",
      "Fornitori di servizi di hosting e infrastruttura IT",
      "Fornitori di servizi e-mail e newsletter (es. Resend e altri [NOME FORNITORE])",
      "Studio di contabilità",
      "Corrieri e servizi postali (per la spedizione delle targhe NFC)",
    ],
    s4NoSale: "Non vendiamo i tuoi dati personali a terzi per finalità di marketing.",

    s5Title: "5. Trasferimento dei dati al di fuori dello SEE",
    s5Body:
      "Se ci avvaliamo di fornitori situati al di fuori dello Spazio Economico Europeo (es. Google, Meta), i tuoi dati potrebbero essere trasferiti verso paesi terzi. Il trasferimento avviene sulla base delle Clausole Contrattuali Standard (SCC) approvate dalla Commissione Europea o di altri meccanismi previsti dal GDPR. Informazioni dettagliate sono disponibili nelle informative sulla privacy dei singoli fornitori.",

    s6Title: "6. I tuoi diritti",
    s6Intro: "Ai sensi del GDPR hai i seguenti diritti:",
    rights: [
      { title: "Diritto di accesso", desc: "puoi ottenere una copia dei tuoi dati (art. 15 GDPR)" },
      { title: "Diritto di rettifica", desc: "puoi correggere dati inesatti (art. 16 GDPR)" },
      { title: "Diritto alla cancellazione", desc: "puoi richiedere la cancellazione dei dati in determinati casi (art. 17 GDPR)" },
      { title: "Diritto di limitazione del trattamento", desc: "puoi richiedere la sospensione del trattamento (art. 18 GDPR)" },
      { title: "Diritto alla portabilità dei dati", desc: "puoi ricevere i dati in un formato strutturato (art. 20 GDPR)" },
      { title: "Diritto di opposizione", desc: "puoi opporti al trattamento basato sul legittimo interesse (art. 21 GDPR)" },
      { title: "Diritto di revoca del consenso", desc: "in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca — questo riguarda in particolare il consenso alla newsletter descritto al punto 3" },
    ],
    s6Contact: "Invia le tue richieste all'indirizzo e-mail:",
    s6Complaint: "Hai inoltre il diritto di presentare reclamo all'Autorità polacca per la Protezione dei Dati Personali (UODO), ul. Stawki 2, 00-193 Varsavia, uodo.gov.pl, oppure all'autorità di controllo del tuo Stato membro UE.",

    s7Title: "7. Processo decisionale automatizzato e profilazione",
    s7Body: "Non utilizziamo processi decisionali automatizzati né attività di profilazione che producano effetti giuridici che ti riguardano o che ti incidano in modo analogamente significativo.",

    s8Title: "8. Cookie",
    s8Body: "Informazioni dettagliate sui cookie sono disponibili nella nostra",
    s8LinkLabel: "Informativa sui Cookie",

    s9Title: "9. Termini e Condizioni e condizioni della prova gratuita",
    s9Body: "Le condizioni di pagamento, incluse le regole relative alla prova gratuita di 30 giorni, alla verifica della carta e al passaggio automatico a un piano a pagamento, sono disponibili nei nostri",
    s9LinkLabel: "Termini e Condizioni",

    s10Title: "10. Modifiche alla presente Informativa sulla Privacy",
    s10Body: "Ci riserviamo il diritto di modificare la presente Informativa sulla Privacy. Ti informeremo di eventuali modifiche sostanziali via e-mail o tramite un avviso sul sito. La data dell'ultimo aggiornamento è indicata nella parte superiore del documento.",
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
    alternates: { canonical: `${SITE_URL}/${locale}/polityka-prywatnosci` },
    robots: { index: false, follow: false },
  };
}

export default async function PolitykaPrywatnosci({
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
              {c.s1Intro}<br />
              <strong>[NAZWA FIRMY / IMIĘ I NAZWISKO]</strong><br />
              [ADRES REJESTROWY]<br />
              NIP: [NIP]<br />
              REGON: [REGON] (jeśli dotyczy)<br />
              e-mail: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s2Title}</h2>
            <p>{c.s2Body1}</p>
            <p>{c.s2Body2}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s3Title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.purpose}</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.categories}</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.basis}</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">{c.tableHeaders.retention}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.tableRows.map((row, i) => (
                    <tr key={row.purpose} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                      <td className="p-3 border border-gray-200">{row.purpose}</td>
                      <td className="p-3 border border-gray-200">{row.categories}</td>
                      <td className="p-3 border border-gray-200">{row.basis}</td>
                      <td className="p-3 border border-gray-200">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              {c.s3NewsletterNote}{" "}
              <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s4Title}</h2>
            <p>{c.s4Intro}</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              {c.recipients.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-3">{c.s4NoSale}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s5Title}</h2>
            <p>{c.s5Body}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s6Title}</h2>
            <p>{c.s6Intro}</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              {c.rights.map((r) => (
                <li key={r.title}><strong>{r.title}</strong> – {r.desc}</li>
              ))}
            </ul>
            <p className="mt-3">
              {c.s6Contact} <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>.<br />
              {c.s6Complaint}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s7Title}</h2>
            <p>{c.s7Body}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s8Title}</h2>
            <p>
              {c.s8Body}{" "}
              <Link href={`/${locale}/polityka-cookies`} className="text-blue-600 hover:underline">{c.s8LinkLabel}</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s9Title}</h2>
            <p>
              {c.s9Body}{" "}
              <Link href={`/${locale}/regulamin`} className="text-blue-600 hover:underline">{c.s9LinkLabel}</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.s10Title}</h2>
            <p>{c.s10Body}</p>
          </section>

        </div>
      </div>
    </main>
  );
}
