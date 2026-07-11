"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { PRICING, annualSubPrice as computeAnnualSubPrice } from "@/lib/pricing";
import TrialCardVerification, {
  type TrialCardVerificationCopy,
} from "@/components/TrialCardVerification";

type Locale = "pl" | "en" | "de" | "it";
type Step = "plates" | "plan" | "account" | "checkout" | "trial-verify";
type BillingPlan = "monthly" | "annual" | "trial";

const t: Record<Locale, {
  productName: string;
  description: string;
  subtitle: string;
  subscription: string;
  subscriptionDesc: string;
  perMonth: string;
  plates: string;
  platesDesc: string;
  free: string;
  each: string;
  quantity: string;
  languageNames: Record<Locale, string>;
  addLanguageHint: string;
  removeLanguage: string;
  summary: string;
  monthlyFee: string;
  platesOnetime: string;
  firstFree: string;
  additional: string;
  total: string;
  subscriptionNote: string;
  checkout: string;
  back: string;
  loading: string;
  includes: string;
  features: string[];
  billingMonthly: string;
  billingAnnual: string;
  annualSavingsBadge: string;
  annualNote: string;
  subscriptionNoteAnnual: string;
  periodAnnual: string;
  planStepTitle: string;
  planStepSubtitle: string;
  planMonthlyTitle: string;
  planMonthlyDesc: string;
  planAnnualTitle: string;
  planAnnualDesc: string;
  planTrialTitle: string;
  planTrialDesc: string;
  planTrialBadge: string;
  planTrialToday: string;
  selectPlan: string;
  changePlan: string;
  next: string;
  backToPlatesLabel: string;
  emailLabel: string;
  emailPlaceholder: string;
  accountStepTitle: string;
  accountStepSubtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  passwordLabel: string;
  passwordConfirmLabel: string;
  passwordTooShort: string;
  passwordMismatch: string;
  addressLine1Label: string;
  addressLine1Placeholder: string;
  addressCityLabel: string;
  addressCityPlaceholder: string;
  addressPostalCodeLabel: string;
  addressCountryLabel: string;
  addressCountryPlaceholder: string;
  accountSubmitLabel: string;
  accountSubmittingLabel: string;
  accountGenericError: string;
  backToAccountLabel: string;
  stepPlatesLabel: string;
  stepPlanLabel: string;
  stepAccountLabel: string;
  stepCheckoutLabel: string;
  trialFinePrintBefore: string;
  trialFinePrintAfter: string;
  trialTodayLabel: string;
  trialAfterLabel: string;
  startTrialCta: string;
  trialVerifyTitle: string;
  trialVerifyFinePrintBefore: string;
  trialVerifyFinePrintAfter: string;
  trialLoadingLabel: string;
  trialSubmitLabel: string;
  trialSubmittingLabel: string;
  trialBackLabel: string;
  trialGenericError: string;
  trialInitError: string;
}> = {
  pl: {
    productName: "Starlinkee Pro + tabliczka NFC",
    description:
      "Starlinkee Pro to abonament, który automatycznie filtruje negatywne opinie Google, wysyła kupony SMS i prowadzi kartę lojalnościową Twoich klientów — wszystko z jednego panelu administracyjnego. W zestawie tabliczka NFC, dzięki której klienci zostawiają opinię jednym dotknięciem telefonu.",
    subtitle: "Wybierz ile tabliczek NFC potrzebujesz do swoich lokalizacji.",
    subscription: "Abonament Starlinkee Pro",
    subscriptionDesc: "Filtrowanie opinii, kupony SMS, karta lojalnościowa, panel administracyjny",
    perMonth: "/mies.",
    plates: "Tabliczki NFC",
    platesDesc: "Pierwsza tabliczka gratis — każda kolejna 29 zł",
    free: "Gratis",
    each: "/ szt.",
    quantity: "Ilość tabliczek",
    languageNames: { pl: "Polski", en: "Angielski", de: "Niemiecki", it: "Włoski" },
    addLanguageHint: "Potrzebujesz tabliczek w innych językach? Dodaj wersję językową:",
    removeLanguage: "Usuń język",
    summary: "Podsumowanie",
    monthlyFee: "Abonament miesięczny",
    platesOnetime: "Tabliczki NFC (jednorazowo)",
    firstFree: "1 × gratis",
    additional: "dodatkowe",
    total: "Do zapłaty teraz",
    subscriptionNote: "Abonament 199 zł/mies. — płatność cykliczna",
    checkout: "Przejdź do płatności",
    back: "Wróć do strony głównej",
    loading: "Przekierowanie do płatności...",
    includes: "W cenie:",
    features: [
      "1 tabliczka NFC w cenie",
      "Filtrowanie opinii Google",
      "System kuponów SMS",
      "Karta lojalnościowa",
      "Panel administracyjny",
      "200 SMS-ów/mies. w cenie",
      "Wsparcie techniczne",
    ],
    billingMonthly: "Płatność miesięczna",
    billingAnnual: "Płatność roczna",
    annualSavingsBadge: "2 miesiące gratis",
    annualNote: "Płać raz w roku i zapłać za 10 miesięcy zamiast 12.",
    subscriptionNoteAnnual: "Abonament 1990 zł/rok — płatność cykliczna",
    periodAnnual: "/rok",
    planStepTitle: "Dołącz do Starlinkee Pro",
    planStepSubtitle: "Wybierz sposób płatności, który Ci odpowiada.",
    planMonthlyTitle: "Miesięcznie",
    planMonthlyDesc: "Elastyczna płatność co miesiąc.",
    planAnnualTitle: "Rocznie",
    planAnnualDesc: "Zapłać raz w roku i oszczędzaj.",
    planTrialTitle: "Wypróbuj za darmo",
    planTrialDesc: "30 dni na sprawdzenie, bez zobowiązań.",
    planTrialBadge: "30 dni za darmo",
    planTrialToday: "0 zł dziś",
    selectPlan: "Wybierz",
    changePlan: "Zmień plan",
    next: "Dalej",
    backToPlatesLabel: "Wróć do wyboru tabliczek",
    emailLabel: "Adres e-mail",
    emailPlaceholder: "ty@twojafirma.pl",
    accountStepTitle: "Załóż konto",
    accountStepSubtitle: "Będziesz mieć dostęp do panelu administracyjnego Starlinkee.",
    nameLabel: "Imię i nazwisko / nazwa firmy",
    namePlaceholder: "Jan Kowalski",
    passwordLabel: "Hasło",
    passwordConfirmLabel: "Potwierdź hasło",
    passwordTooShort: "Hasło musi mieć co najmniej 8 znaków.",
    passwordMismatch: "Hasła nie są identyczne.",
    addressLine1Label: "Adres (ulica i numer)",
    addressLine1Placeholder: "ul. Przykładowa 1",
    addressCityLabel: "Miasto",
    addressCityPlaceholder: "Warszawa",
    addressPostalCodeLabel: "Kod pocztowy",
    addressCountryLabel: "Kraj",
    addressCountryPlaceholder: "Polska",
    accountSubmitLabel: "Dalej",
    accountSubmittingLabel: "Zakładanie konta...",
    accountGenericError: "Nie udało się założyć konta. Sprawdź dane i spróbuj ponownie.",
    backToAccountLabel: "Wróć do edycji konta",
    stepPlatesLabel: "Tabliczki",
    stepPlanLabel: "Plan",
    stepAccountLabel: "Konto",
    stepCheckoutLabel: "Płatność",
    trialFinePrintBefore: "Wymagana karta do weryfikacji. Po 30 dniach naliczymy ",
    trialFinePrintAfter: " — chyba że zrezygnujesz wcześniej. Obowiązuje Regulamin.",
    trialTodayLabel: "Dziś (trial)",
    trialAfterLabel: "Po 30 dniach",
    startTrialCta: "Kontynuuj",
    trialVerifyTitle: "Dane karty",
    trialVerifyFinePrintBefore: "Tymczasowo zablokujemy na karcie ",
    trialVerifyFinePrintAfter: " w celu weryfikacji — to nie jest pobranie środków, blokada zniknie natychmiast po potwierdzeniu.",
    trialLoadingLabel: "Przygotowywanie weryfikacji karty...",
    trialSubmitLabel: "Potwierdź",
    trialSubmittingLabel: "Weryfikacja karty...",
    trialBackLabel: "Wróć do podsumowania",
    trialGenericError: "Nie udało się zweryfikować karty. Spróbuj ponownie lub wybierz inny plan.",
    trialInitError: "Nie udało się przygotować weryfikacji karty. Spróbuj ponownie.",
  },
  en: {
    productName: "Starlinkee Pro + NFC plate",
    description:
      "Starlinkee Pro is a subscription that automatically filters negative Google reviews, sends SMS coupons, and runs your customers' loyalty card — all from a single admin dashboard. Includes an NFC plate so customers can leave a review with a single tap of their phone.",
    subtitle: "Choose how many NFC plates you need for your locations.",
    subscription: "Starlinkee Pro subscription",
    subscriptionDesc: "Review filtering, SMS coupons, loyalty card, admin dashboard",
    perMonth: "/mo",
    plates: "NFC Plates",
    platesDesc: "First plate free — each additional plate €9",
    free: "Free",
    each: "/ each",
    quantity: "Quantity",
    languageNames: { pl: "Polish", en: "English", de: "German", it: "Italian" },
    addLanguageHint: "Need plates in other languages? Add a language version:",
    removeLanguage: "Remove language",
    summary: "Summary",
    monthlyFee: "Monthly subscription",
    platesOnetime: "NFC plates (one-time)",
    firstFree: "1 × free",
    additional: "additional",
    total: "Total due now",
    subscriptionNote: "Subscription €49/mo — recurring billing",
    checkout: "Proceed to payment",
    back: "Back to homepage",
    loading: "Redirecting to payment...",
    includes: "Includes:",
    features: [
      "1 NFC plate included",
      "Google review filtering",
      "SMS coupon system",
      "Loyalty card",
      "Admin dashboard",
      "200 SMS/mo included",
      "Technical support",
    ],
    billingMonthly: "Monthly billing",
    billingAnnual: "Annual billing",
    annualSavingsBadge: "2 months free",
    annualNote: "Pay once a year and get 10 months for the price of 10 instead of 12.",
    subscriptionNoteAnnual: "Subscription €490/yr — recurring billing",
    periodAnnual: "/yr",
    planStepTitle: "Join Starlinkee Pro",
    planStepSubtitle: "Choose the billing option that works for you.",
    planMonthlyTitle: "Monthly",
    planMonthlyDesc: "Flexible billing every month.",
    planAnnualTitle: "Annual",
    planAnnualDesc: "Pay once a year and save.",
    planTrialTitle: "Try it for free",
    planTrialDesc: "30 days to try it out, no commitment.",
    planTrialBadge: "30 days free",
    planTrialToday: "$0 today",
    selectPlan: "Select",
    changePlan: "Change plan",
    next: "Next",
    backToPlatesLabel: "Back to plate selection",
    emailLabel: "Email address",
    emailPlaceholder: "you@yourcompany.com",
    accountStepTitle: "Create your account",
    accountStepSubtitle: "You'll get access to the Starlinkee admin dashboard.",
    nameLabel: "Full name / company name",
    namePlaceholder: "John Smith",
    passwordLabel: "Password",
    passwordConfirmLabel: "Confirm password",
    passwordTooShort: "Password must be at least 8 characters.",
    passwordMismatch: "Passwords do not match.",
    addressLine1Label: "Address (street and number)",
    addressLine1Placeholder: "123 Main St",
    addressCityLabel: "City",
    addressCityPlaceholder: "New York",
    addressPostalCodeLabel: "Postal code",
    addressCountryLabel: "Country",
    addressCountryPlaceholder: "United States",
    accountSubmitLabel: "Next",
    accountSubmittingLabel: "Creating account...",
    accountGenericError: "We couldn't create your account. Please check your details and try again.",
    backToAccountLabel: "Back to account details",
    stepPlatesLabel: "Plates",
    stepPlanLabel: "Plan",
    stepAccountLabel: "Account",
    stepCheckoutLabel: "Payment",
    trialFinePrintBefore: "Card required for verification. After 30 days we'll charge ",
    trialFinePrintAfter: " — unless you cancel first. Terms of Service apply.",
    trialTodayLabel: "Today (trial)",
    trialAfterLabel: "After 30 days",
    startTrialCta: "Continue",
    trialVerifyTitle: "Card details",
    trialVerifyFinePrintBefore: "We'll temporarily hold ",
    trialVerifyFinePrintAfter: " on your card for verification — this is not a charge, the hold is released immediately after confirmation.",
    trialLoadingLabel: "Preparing card verification...",
    trialSubmitLabel: "Confirm",
    trialSubmittingLabel: "Verifying card...",
    trialBackLabel: "Back to summary",
    trialGenericError: "We couldn't verify your card. Please try again or choose a different plan.",
    trialInitError: "We couldn't prepare card verification. Please try again.",
  },
  de: {
    productName: "Starlinkee Pro + NFC-Aufsteller",
    description:
      "Starlinkee Pro ist ein Abo, das negative Google-Bewertungen automatisch filtert, SMS-Gutscheine versendet und die Treuekarte Ihrer Kunden verwaltet — alles über ein einziges Admin-Dashboard. Inklusive NFC-Aufsteller, mit dem Kunden mit einem Antippen des Telefons eine Bewertung hinterlassen können.",
    subtitle: "Wählen Sie, wie viele NFC-Aufsteller Sie für Ihre Standorte benötigen.",
    subscription: "Starlinkee Pro Abo",
    subscriptionDesc: "Bewertungsfilter, SMS-Gutscheine, Treuekarte, Admin-Dashboard",
    perMonth: "/Monat",
    plates: "NFC-Aufsteller",
    platesDesc: "Erster Aufsteller gratis — jeder weitere 9 €",
    free: "Gratis",
    each: "/ Stk.",
    quantity: "Anzahl",
    languageNames: { pl: "Polnisch", en: "Englisch", de: "Deutsch", it: "Italienisch" },
    addLanguageHint: "Benötigen Sie Aufsteller in anderen Sprachen? Sprachversion hinzufügen:",
    removeLanguage: "Sprache entfernen",
    summary: "Zusammenfassung",
    monthlyFee: "Monatliches Abo",
    platesOnetime: "NFC-Aufsteller (einmalig)",
    firstFree: "1 × gratis",
    additional: "weitere",
    total: "Jetzt zu zahlen",
    subscriptionNote: "Abo 49 €/Monat — wiederkehrende Zahlung",
    checkout: "Zur Zahlung",
    back: "Zurück zur Startseite",
    loading: "Weiterleitung zur Zahlung...",
    includes: "Inklusive:",
    features: [
      "1 NFC-Aufsteller inklusive",
      "Google-Bewertungsfilter",
      "SMS-Gutscheinsystem",
      "Treuekarte",
      "Admin-Dashboard",
      "200 SMS/Monat inklusive",
      "Technischer Support",
    ],
    billingMonthly: "Monatliche Zahlung",
    billingAnnual: "Jährliche Zahlung",
    annualSavingsBadge: "2 Monate gratis",
    annualNote: "Einmal im Jahr zahlen und nur für 10 statt 12 Monate bezahlen.",
    subscriptionNoteAnnual: "Abo 490 €/Jahr — wiederkehrende Zahlung",
    periodAnnual: "/Jahr",
    planStepTitle: "Starlinkee Pro beitreten",
    planStepSubtitle: "Wählen Sie die für Sie passende Zahlungsoption.",
    planMonthlyTitle: "Monatlich",
    planMonthlyDesc: "Flexible Zahlung jeden Monat.",
    planAnnualTitle: "Jährlich",
    planAnnualDesc: "Einmal im Jahr zahlen und sparen.",
    planTrialTitle: "Kostenlos testen",
    planTrialDesc: "30 Tage testen, unverbindlich.",
    planTrialBadge: "30 Tage gratis",
    planTrialToday: "0 € heute",
    selectPlan: "Auswählen",
    changePlan: "Plan ändern",
    next: "Weiter",
    backToPlatesLabel: "Zurück zur Aufstellerauswahl",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "sie@ihrefirma.de",
    accountStepTitle: "Konto erstellen",
    accountStepSubtitle: "Sie erhalten Zugang zum Starlinkee Admin-Dashboard.",
    nameLabel: "Name / Firmenname",
    namePlaceholder: "Max Mustermann",
    passwordLabel: "Passwort",
    passwordConfirmLabel: "Passwort bestätigen",
    passwordTooShort: "Das Passwort muss mindestens 8 Zeichen lang sein.",
    passwordMismatch: "Die Passwörter stimmen nicht überein.",
    addressLine1Label: "Adresse (Straße und Hausnummer)",
    addressLine1Placeholder: "Musterstraße 1",
    addressCityLabel: "Stadt",
    addressCityPlaceholder: "Berlin",
    addressPostalCodeLabel: "Postleitzahl",
    addressCountryLabel: "Land",
    addressCountryPlaceholder: "Deutschland",
    accountSubmitLabel: "Weiter",
    accountSubmittingLabel: "Konto wird erstellt...",
    accountGenericError: "Ihr Konto konnte nicht erstellt werden. Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut.",
    backToAccountLabel: "Zurück zu den Kontodaten",
    stepPlatesLabel: "Aufsteller",
    stepPlanLabel: "Plan",
    stepAccountLabel: "Konto",
    stepCheckoutLabel: "Zahlung",
    trialFinePrintBefore: "Karte zur Verifizierung erforderlich. Nach 30 Tagen berechnen wir ",
    trialFinePrintAfter: " — außer Sie kündigen vorher. Es gelten die AGB.",
    trialTodayLabel: "Heute (Test)",
    trialAfterLabel: "Nach 30 Tagen",
    startTrialCta: "Weiter",
    trialVerifyTitle: "Kartendaten",
    trialVerifyFinePrintBefore: "Wir blockieren vorübergehend ",
    trialVerifyFinePrintAfter: " auf Ihrer Karte zur Verifizierung — das ist keine Abbuchung, die Blockierung wird nach der Bestätigung sofort aufgehoben.",
    trialLoadingLabel: "Kartenverifizierung wird vorbereitet...",
    trialSubmitLabel: "Bestätigen",
    trialSubmittingLabel: "Karte wird verifiziert...",
    trialBackLabel: "Zurück zur Zusammenfassung",
    trialGenericError: "Ihre Karte konnte nicht verifiziert werden. Bitte versuchen Sie es erneut oder wählen Sie einen anderen Plan.",
    trialInitError: "Die Kartenverifizierung konnte nicht vorbereitet werden. Bitte versuchen Sie es erneut.",
  },
  it: {
    productName: "Starlinkee Pro + targa NFC",
    description:
      "Starlinkee Pro è un abbonamento che filtra automaticamente le recensioni negative su Google, invia coupon via SMS e gestisce la carta fedeltà dei tuoi clienti — tutto da un unico pannello di controllo. Include una targa NFC che permette ai clienti di lasciare una recensione con un semplice tocco del telefono.",
    subtitle: "Scegli quante targhe NFC ti servono per le tue sedi.",
    subscription: "Abbonamento Starlinkee Pro",
    subscriptionDesc: "Filtro recensioni, coupon SMS, carta fedeltà, pannello di controllo",
    perMonth: "/mese",
    plates: "Targhe NFC",
    platesDesc: "Prima targa gratis — ogni altra 9 €",
    free: "Gratis",
    each: "/ cad.",
    quantity: "Quantità",
    languageNames: { pl: "Polacco", en: "Inglese", de: "Tedesco", it: "Italiano" },
    addLanguageHint: "Ti servono targhe in altre lingue? Aggiungi una versione linguistica:",
    removeLanguage: "Rimuovi lingua",
    summary: "Riepilogo",
    monthlyFee: "Abbonamento mensile",
    platesOnetime: "Targhe NFC (una tantum)",
    firstFree: "1 × gratis",
    additional: "aggiuntive",
    total: "Da pagare ora",
    subscriptionNote: "Abbonamento 49 €/mese — pagamento ricorrente",
    checkout: "Procedi al pagamento",
    back: "Torna alla homepage",
    loading: "Reindirizzamento al pagamento...",
    includes: "Include:",
    features: [
      "1 targa NFC inclusa",
      "Filtro recensioni Google",
      "Sistema coupon SMS",
      "Carta fedeltà",
      "Pannello di controllo",
      "200 SMS/mese inclusi",
      "Supporto tecnico",
    ],
    billingMonthly: "Pagamento mensile",
    billingAnnual: "Pagamento annuale",
    annualSavingsBadge: "2 mesi gratis",
    annualNote: "Paga una volta all'anno e paga per 10 mesi invece di 12.",
    subscriptionNoteAnnual: "Abbonamento 490 €/anno — pagamento ricorrente",
    periodAnnual: "/anno",
    planStepTitle: "Iscriviti a Starlinkee Pro",
    planStepSubtitle: "Scegli l'opzione di pagamento più adatta a te.",
    planMonthlyTitle: "Mensile",
    planMonthlyDesc: "Pagamento flessibile ogni mese.",
    planAnnualTitle: "Annuale",
    planAnnualDesc: "Paga una volta all'anno e risparmia.",
    planTrialTitle: "Prova gratis",
    planTrialDesc: "30 giorni di prova, senza impegno.",
    planTrialBadge: "30 giorni gratis",
    planTrialToday: "0 € oggi",
    selectPlan: "Seleziona",
    changePlan: "Cambia piano",
    next: "Avanti",
    backToPlatesLabel: "Torna alla selezione delle targhe",
    emailLabel: "Indirizzo e-mail",
    emailPlaceholder: "tu@tuaazienda.it",
    accountStepTitle: "Crea il tuo account",
    accountStepSubtitle: "Avrai accesso al pannello di controllo Starlinkee.",
    nameLabel: "Nome e cognome / ragione sociale",
    namePlaceholder: "Mario Rossi",
    passwordLabel: "Password",
    passwordConfirmLabel: "Conferma password",
    passwordTooShort: "La password deve avere almeno 8 caratteri.",
    passwordMismatch: "Le password non coincidono.",
    addressLine1Label: "Indirizzo (via e numero civico)",
    addressLine1Placeholder: "Via Roma 1",
    addressCityLabel: "Città",
    addressCityPlaceholder: "Milano",
    addressPostalCodeLabel: "CAP",
    addressCountryLabel: "Paese",
    addressCountryPlaceholder: "Italia",
    accountSubmitLabel: "Avanti",
    accountSubmittingLabel: "Creazione dell'account...",
    accountGenericError: "Non siamo riusciti a creare il tuo account. Controlla i dati e riprova.",
    backToAccountLabel: "Torna ai dati dell'account",
    stepPlatesLabel: "Targhe",
    stepPlanLabel: "Piano",
    stepAccountLabel: "Account",
    stepCheckoutLabel: "Pagamento",
    trialFinePrintBefore: "Carta richiesta per la verifica. Dopo 30 giorni addebiteremo ",
    trialFinePrintAfter: " — a meno che tu non cancelli prima. Si applicano i Termini di Servizio.",
    trialTodayLabel: "Oggi (prova)",
    trialAfterLabel: "Dopo 30 giorni",
    startTrialCta: "Continua",
    trialVerifyTitle: "Dati della carta",
    trialVerifyFinePrintBefore: "Bloccheremo temporaneamente ",
    trialVerifyFinePrintAfter: " sulla tua carta per la verifica — non è un addebito, il blocco viene rilasciato subito dopo la conferma.",
    trialLoadingLabel: "Preparazione della verifica della carta...",
    trialSubmitLabel: "Conferma",
    trialSubmittingLabel: "Verifica della carta...",
    trialBackLabel: "Torna al riepilogo",
    trialGenericError: "Non siamo riusciti a verificare la tua carta. Riprova o scegli un piano diverso.",
    trialInitError: "Non siamo riusciti a preparare la verifica della carta. Riprova.",
  },
};

const galleryImages: Record<Locale, string[]> = {
  pl: ["/product/pl.webp"],
  en: ["/product/en.webp"],
  de: ["/product/de.webp"],
  it: ["/product/it.webp"],
};

const MAX_PLATES = 50;
const ALL_LOCALES = Object.keys(PRICING) as Locale[];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const MAIN_STEPS: Step[] = ["plates", "plan", "account", "checkout"];

function stepIndex(s: Step): number {
  return s === "trial-verify" ? 3 : MAIN_STEPS.indexOf(s);
}

export default function OrderPage() {
  const pathname = usePathname();
  const router = useRouter();
  const pathLocale = pathname.split("/")[1] as Locale | undefined;
  const locale: Locale = pathLocale && pathLocale in t ? pathLocale : "pl";
  const l = t[locale];
  const p = PRICING[locale];

  const [step, setStep] = useState<Step>("plates");
  const [maxStepIndex, setMaxStepIndex] = useState(0);
  const [billing, setBilling] = useState<BillingPlan>("monthly");
  const [planPreset, setPlanPreset] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressPostalCode, setAddressPostalCode] = useState("");
  const [addressCountry, setAddressCountry] = useState("");
  const [accountError, setAccountError] = useState<string | null>(null);
  const [accountSubmitting, setAccountSubmitting] = useState(false);

  const [langRows, setLangRows] = useState<{ lang: Locale; qty: number }[]>([
    { lang: locale, qty: 1 },
  ]);
  const [loading, setLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("billing") === "annual") {
      setBilling("annual");
      setPlanPreset(true);
    }
  }, []);

  useEffect(() => {
    setMaxStepIndex((prev) => Math.max(prev, stepIndex(step)));
  }, [step]);

  function prevStep(): Step | "home" {
    switch (step) {
      case "plates":
        return "home";
      case "plan":
        return "plates";
      case "account":
        return planPreset ? "plates" : "plan";
      case "checkout":
        return "account";
      case "trial-verify":
        return "checkout";
    }
  }

  function backLabel(): string {
    switch (step) {
      case "plates":
        return l.back;
      case "plan":
        return l.backToPlatesLabel;
      case "account":
        return planPreset ? l.backToPlatesLabel : l.changePlan;
      case "checkout":
        return l.backToAccountLabel;
      case "trial-verify":
        return l.trialBackLabel;
    }
  }

  function handleBackClick() {
    const target = prevStep();
    if (target !== "home") setStep(target);
  }

  function goToStepIndex(index: number) {
    if (index > maxStepIndex) return;
    setStep(MAIN_STEPS[index]);
  }

  const totalPlates = langRows.reduce((sum, o) => sum + o.qty, 0);
  const extraPlates = Math.max(0, totalPlates - 1);
  const platesCost = extraPlates * p.platePrice;
  const annualSubPrice = computeAnnualSubPrice(locale);
  const totalNow = (billing === "annual" ? annualSubPrice : p.subPrice) + platesCost;

  const availableLangs = ALL_LOCALES.filter(
    (lang) => !langRows.some((o) => o.lang === lang)
  );

  function addLanguage(lang: Locale) {
    if (totalPlates >= MAX_PLATES) return;
    setLangRows((prev) => [...prev, { lang, qty: 1 }]);
  }

  function setLangQty(lang: Locale, qty: number) {
    setLangRows((prev) => prev.map((o) => (o.lang === lang ? { ...o, qty } : o)));
  }

  function removeLanguage(lang: Locale) {
    setLangRows((prev) => (prev.length > 1 ? prev.filter((o) => o.lang !== lang) : prev));
  }

  function subscribeNewsletter() {
    if (newsletterSent || !isValidEmail(email)) return;
    setNewsletterSent(true);
    fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "order", locale }),
    }).catch(() => {});
  }

  function goToPlanOrCheckout() {
    setStep(planPreset ? "account" : "plan");
  }

  function selectPlan(plan: BillingPlan) {
    setBilling(plan);
    setStep("account");
  }

  const address = {
    name,
    line1: addressLine1,
    city: addressCity,
    postalCode: addressPostalCode,
    country: addressCountry,
  };

  function isAccountFormValid(): boolean {
    return (
      isValidEmail(email) &&
      name.trim().length > 0 &&
      password.length >= 8 &&
      addressLine1.trim().length > 0 &&
      addressCity.trim().length > 0 &&
      addressPostalCode.trim().length > 0 &&
      addressCountry.trim().length > 0
    );
  }

  async function handleCreateAccount() {
    setAccountError(null);
    if (password.length < 8) {
      setAccountError(l.passwordTooShort);
      return;
    }
    if (password !== passwordConfirm) {
      setAccountError(l.passwordMismatch);
      return;
    }
    if (!isAccountFormValid()) return;

    setAccountSubmitting(true);
    try {
      const res = await fetch("/api/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, address, locale }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAccountError(data.error ?? l.accountGenericError);
        setAccountSubmitting(false);
        return;
      }
      subscribeNewsletter();
      setAccountSubmitting(false);
      setStep("checkout");
    } catch {
      setAccountError(l.accountGenericError);
      setAccountSubmitting(false);
    }
  }

  async function handleCheckout() {
    setLoading(true);
    try {
      const plateLanguages: Record<string, number> = {};
      for (const o of langRows) plateLanguages[o.lang] = o.qty;

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plates: totalPlates,
          plateLanguages,
          billing,
          locale,
          email,
          address,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  function handleStartTrial() {
    setStep("trial-verify");
  }

  function handleTrialSuccess() {
    router.push(`/${locale}/order/success?mode=trial`);
  }

  const trialVerifyCopy: TrialCardVerificationCopy = {
    loading: l.trialLoadingLabel,
    submitLabel: l.trialSubmitLabel,
    submittingLabel: l.trialSubmittingLabel,
    backLabel: l.trialBackLabel,
    finePrint: `${l.trialVerifyFinePrintBefore}${annualSubPrice} ${p.currency}${l.trialVerifyFinePrintAfter}`,
    genericError: l.trialGenericError,
    initError: l.trialInitError,
  };

  const plateLanguagesForTrial: Record<string, number> = {};
  for (const o of langRows) plateLanguagesForTrial[o.lang] = o.qty;

  const stepLabels = [l.stepPlatesLabel, l.stepPlanLabel, l.stepAccountLabel, l.stepCheckoutLabel];
  const currentStepIndex = stepIndex(step);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {step === "plates" ? (
          <a
            href={`/${locale}`}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6 inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {l.back}
          </a>
        ) : (
          <button
            type="button"
            onClick={handleBackClick}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6 inline-flex items-center gap-1 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLabel()}
          </button>
        )}

        <div className="flex items-center justify-center max-w-md mx-auto mb-10">
          {MAIN_STEPS.map((s, idx) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => goToStepIndex(idx)}
                  disabled={idx > maxStepIndex}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors ${
                    idx === currentStepIndex
                      ? "bg-brand-600 text-white"
                      : idx <= maxStepIndex
                      ? "bg-white border-2 border-brand-600 text-brand-600 cursor-pointer"
                      : "bg-gray-100 border border-gray-300 text-gray-400"
                  }`}
                >
                  {idx + 1}
                </button>
                <span
                  className={`mt-1.5 text-[11px] whitespace-nowrap ${
                    idx === currentStepIndex ? "text-brand-600 font-medium" : "text-gray-400"
                  }`}
                >
                  {stepLabels[idx]}
                </span>
              </div>
              {idx < MAIN_STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-1 mb-5 ${
                    idx < maxStepIndex ? "bg-brand-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {step === "plan" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {l.planStepTitle}
              </h1>
              <p className="text-gray-500">{l.planStepSubtitle}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => selectPlan("monthly")}
                className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-brand-600 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{l.planMonthlyTitle}</h3>
                <p className="text-sm text-gray-500 mb-4">{l.planMonthlyDesc}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{p.subPrice}</span>
                  <span className="text-gray-400 text-sm">
                    {p.currency}
                    {l.perMonth}
                  </span>
                </div>
                <span className="inline-block w-full text-center bg-gray-100 text-gray-900 font-medium rounded-lg py-2.5 text-sm">
                  {l.selectPlan}
                </span>
              </button>

              <button
                type="button"
                onClick={() => selectPlan("annual")}
                className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-brand-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{l.planAnnualTitle}</h3>
                  <span className="inline-block rounded-full bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5">
                    {l.annualSavingsBadge}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{l.planAnnualDesc}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{annualSubPrice}</span>
                  <span className="text-gray-400 text-sm">
                    {p.currency}
                    {l.periodAnnual}
                  </span>
                </div>
                <span className="inline-block w-full text-center bg-gray-100 text-gray-900 font-medium rounded-lg py-2.5 text-sm">
                  {l.selectPlan}
                </span>
              </button>

              <button
                type="button"
                onClick={() => selectPlan("trial")}
                className="text-left bg-white rounded-2xl border-2 border-brand-600 p-6 relative shadow-lg shadow-brand-600/10 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{l.planTrialTitle}</h3>
                  <span className="inline-block rounded-full bg-brand-50 text-brand-600 text-xs font-semibold px-2 py-0.5">
                    {l.planTrialBadge}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{l.planTrialDesc}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{l.planTrialToday}</span>
                </div>
                <span className="inline-block w-full text-center bg-brand-600 text-white font-medium rounded-lg py-2.5 text-sm">
                  {l.selectPlan}
                </span>
              </button>
            </div>
          </div>
        )}

        {step === "plates" && (
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white border border-gray-100">
                <Image
                  src={galleryImages[locale][activeImage]}
                  alt={l.productName}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              {galleryImages[locale].length > 1 && (
                <div className="flex gap-3 mt-4">
                  {galleryImages[locale].map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`w-20 h-20 relative rounded-xl overflow-hidden bg-white border-2 transition-colors cursor-pointer ${
                        i === activeImage ? "border-brand-600" : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details + configuration */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{l.productName}</h1>
              <p className="text-gray-500 mb-6">{l.subtitle}</p>

              <p className="text-gray-600 leading-relaxed mb-6">{l.description}</p>

              {/* Includes */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                  {l.includes}
                </p>
                <ul className="space-y-2">
                  {l.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-brand-600 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 my-6" />

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {l.quantity}
                </label>
                <p className="text-xs text-gray-400 mb-3">{l.platesDesc}</p>

                <div className="space-y-2">
                  {langRows.map((o) => (
                    <div
                      key={o.lang}
                      className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5"
                    >
                      <span className="text-sm font-medium text-gray-900">
                        {l.languageNames[o.lang]}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-lg border border-gray-300 overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setLangQty(o.lang, Math.max(1, o.qty - 1))}
                            className="w-10 h-10 flex items-center justify-center text-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-11 text-center text-base font-semibold border-x border-gray-300 h-10 flex items-center justify-center">
                            {o.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => totalPlates < MAX_PLATES && setLangQty(o.lang, o.qty + 1)}
                            className="w-10 h-10 flex items-center justify-center text-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        {langRows.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeLanguage(o.lang)}
                            aria-label={l.removeLanguage}
                            title={l.removeLanguage}
                            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add language */}
                {availableLangs.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-400 mb-2">{l.addLanguageHint}</p>
                    <div className="flex flex-wrap gap-2">
                      {availableLangs.map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => addLanguage(lang)}
                          className="inline-flex items-center gap-1 rounded-full border border-dashed border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:border-brand-600 hover:text-brand-600 transition-colors cursor-pointer"
                        >
                          + {l.languageNames[lang]}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {totalPlates > 1 ? (
                  <div className="mt-3 text-sm text-gray-500">
                    <span className="text-brand-600 font-medium">{l.firstFree}</span>
                    {" + "}
                    {extraPlates} {l.additional} × {p.platePrice} {p.currency} ={" "}
                    <span className="font-semibold text-gray-900">
                      {platesCost} {p.currency}
                    </span>
                  </div>
                ) : (
                  <div className="mt-3 text-sm text-brand-600 font-medium">{l.free}</div>
                )}
              </div>

              <button
                type="button"
                onClick={goToPlanOrCheckout}
                className="block w-full text-center bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25 cursor-pointer"
              >
                {l.next}
              </button>
            </div>
          </div>
        )}

        {step === "account" && (
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 mb-1">{l.accountStepTitle}</h1>
            <p className="text-sm text-gray-500 mb-6">{l.accountStepSubtitle}</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateAccount();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1.5">
                  {l.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={l.emailPlaceholder}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1.5">
                  {l.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={l.namePlaceholder}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">
                    {l.passwordLabel}
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">
                    {l.passwordConfirmLabel}
                  </label>
                  <input
                    type="password"
                    required
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">
                    {l.addressLine1Label}
                  </label>
                  <input
                    type="text"
                    required
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    placeholder={l.addressLine1Placeholder}
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      {l.addressCityLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={addressCity}
                      onChange={(e) => setAddressCity(e.target.value)}
                      placeholder={l.addressCityPlaceholder}
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      {l.addressPostalCodeLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={addressPostalCode}
                      onChange={(e) => setAddressPostalCode(e.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">
                    {l.addressCountryLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={addressCountry}
                    onChange={(e) => setAddressCountry(e.target.value)}
                    placeholder={l.addressCountryPlaceholder}
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                  />
                </div>
              </div>

              {accountError && <p className="text-sm text-red-600">{accountError}</p>}

              <button
                type="submit"
                disabled={accountSubmitting}
                className="block w-full text-center bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                {accountSubmitting ? l.accountSubmittingLabel : l.accountSubmitLabel}
              </button>
            </form>
          </div>
        )}

        {step === "checkout" && (
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{l.productName}</h1>

            <div className="flex items-baseline gap-2 mb-1">
              {billing === "trial" ? (
                <span className="text-3xl font-bold text-gray-900">{l.planTrialToday}</span>
              ) : (
                <>
                  <span className="text-3xl font-bold text-gray-900">
                    {billing === "annual" ? annualSubPrice : p.subPrice} {p.currency}
                  </span>
                  <span className="text-gray-400">
                    {billing === "annual" ? l.periodAnnual : l.perMonth}
                  </span>
                </>
              )}
            </div>
            {billing === "annual" && (
              <p className="text-xs text-gray-400 mb-5">{l.annualNote}</p>
            )}
            {billing === "trial" && (
              <p className="text-xs text-gray-400 mb-5">
                {l.trialFinePrintBefore}
                <strong>
                  {annualSubPrice} {p.currency}
                  {l.periodAnnual}
                </strong>
                {l.trialFinePrintAfter}
              </p>
            )}
            {billing === "monthly" && <div className="mb-5" />}

            <div className="border-t border-gray-200 my-6" />

            {/* Order summary */}
            <div className="space-y-2 text-sm mb-6">
              {billing === "trial" ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{l.trialTodayLabel}</span>
                    <span className="font-medium text-gray-900">
                      {platesCost} {p.currency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{l.trialAfterLabel}</span>
                    <span className="font-medium text-gray-900">
                      {annualSubPrice} {p.currency}
                      {l.periodAnnual}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      {billing === "annual" ? l.billingAnnual : l.monthlyFee}
                    </span>
                    <span className="font-medium text-gray-900">
                      {billing === "annual" ? annualSubPrice : p.subPrice} {p.currency}
                    </span>
                  </div>
                  {platesCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {l.platesOnetime} ({extraPlates}×)
                      </span>
                      <span className="font-medium text-gray-900">
                        {platesCost} {p.currency}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-gray-100 pt-2 flex justify-between">
                    <span className="font-semibold text-gray-900">{l.total}</span>
                    <span className="text-xl font-bold text-gray-900">
                      {totalNow} {p.currency}
                    </span>
                  </div>
                </>
              )}
            </div>

            {billing === "trial" ? (
              <button
                onClick={handleStartTrial}
                disabled={!isValidEmail(email)}
                className="block w-full text-center bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                {l.startTrialCta}
              </button>
            ) : (
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="block w-full text-center bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? l.loading : l.checkout}
              </button>
            )}

            {billing !== "trial" && (
              <p className="text-xs text-gray-400 mt-3 text-center">
                {billing === "annual" ? l.subscriptionNoteAnnual : l.subscriptionNote}
              </p>
            )}
          </div>
        )}

        {step === "trial-verify" && (
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 mb-6">{l.trialVerifyTitle}</h1>
            <TrialCardVerification
              locale={locale}
              email={email}
              plates={totalPlates}
              plateLanguages={plateLanguagesForTrial}
              address={address}
              copy={trialVerifyCopy}
              onSuccess={handleTrialSuccess}
              onBack={() => setStep("checkout")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
