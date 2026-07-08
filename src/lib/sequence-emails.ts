import { recordSend } from "@/lib/db";
import type { Locale } from "@/i18n";

const FROM = "Starlinkee <noreply@starlinkee.com>";
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://starlinkee.com";

export interface SequenceEmail {
  subject: string;
  html: string;
}

// ─── Tracking helpers ────────────────────────────────────────────────────────

export function applyTracking(html: string, sendId: string): string {
  // Wrap all http(s) links
  const tracked = html.replace(
    /href="(https?:\/\/[^"]+)"/g,
    (_, url) =>
      `href="${BASE_URL}/api/track/click?sid=${sendId}&url=${encodeURIComponent(url)}"`
  );
  // Add invisible tracking pixel before </body>
  const pixel = `<img src="${BASE_URL}/api/track/open?sid=${sendId}" width="1" height="1" style="display:none" alt="">`;
  return tracked.replace("</body>", `${pixel}</body>`);
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<boolean> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to: [to], subject, html }),
  });
  return res.ok;
}

export async function sendTrackedEmail(
  to: string,
  source: string,
  step: number,
  subject: string,
  html: string
): Promise<boolean> {
  const sendId = await recordSend(to, source, step, subject);
  const trackedHtml = applyTracking(html, sendId);
  return sendEmail(to, subject, trackedHtml);
}

// ─── Wspólne teksty per język ─────────────────────────────────────────────────

const disclaimer: Record<Locale, string> = {
  pl: "Możesz wypisać się w dowolnej chwili — wystarczy odpowiedzieć na tę wiadomość.",
  en: "You can unsubscribe anytime — just reply to this email.",
  de: "Sie können sich jederzeit abmelden — antworten Sie einfach auf diese E-Mail.",
  it: "Puoi disiscriverti in qualsiasi momento — basta rispondere a questa email.",
};

// Zlokalizowany slug artykułu użytego jako CTA w lekcji 1 (kanoniczny slug PL:
// "jak-szybko-zdobyc-opinie-w-google", zob. src/lib/blog.ts).
const lesson1ArticleSlug: Record<Locale, string> = {
  pl: "jak-szybko-zdobyc-opinie-w-google",
  en: "how-to-get-google-reviews-fast",
  de: "schnell-google-bewertungen-bekommen",
  it: "come-ottenere-recensioni-google-velocemente",
};

// ─── Sekwencja "kurs" ────────────────────────────────────────────────────────

interface CourseStep {
  subject: string;
  title: string;
  body: string;
  cta?: { label: string; url: string };
}

const COURSE_STEPS: Record<Locale, Record<number, CourseStep>> = {
  pl: {
    1: {
      subject: "Witaj w kursie o wizytówce Google — zaczynamy!",
      title: "Witaj w kursie o wizytówce Google!",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Dziękujemy za zapis! W ciągu najbliższych dni dostaniesz kolejne lekcje na swoją skrzynkę.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Lekcja 1 — Dlaczego wizytówka Google to Twoja najważniejsza reklama?</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Zanim klient wejdzie na Twoją stronę, zobaczy wizytówkę Google. Zobaczy gwiazdki, zdjęcia, godziny otwarcia i opinie. To w ciągu 3 sekund decyduje, czy kliknie „Zadzwoń" czy przejdzie do konkurencji.</p>`,
      cta: { label: "Przeczytaj artykuł →", url: `${BASE_URL}/pl/blog/${lesson1ArticleSlug.pl}` },
    },
    2: {
      subject: "Lekcja 2 — Jak uzupełnić wizytówkę Google w 15 minut",
      title: "Lekcja 2 — Uzupełnij wizytówkę w 15 minut",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Większość firm ma wizytówkę Google — ale 80% z nich jest niekompletna. Brakuje zdjęć, godzin otwarcia, opisu, kategorii.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Dziś zrobimy to razem — krok po kroku, w 15 minut.</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Wejdź na <a href="https://business.google.com" style="color:#2563eb;">business.google.com</a> i uzupełnij: nazwę, kategorię, opis (750 znaków!), godziny, zdjęcia profilu i okładki.</p>`,
    },
    3: {
      subject: "Lekcja 3 — Zdjęcia, które przyciągają klientów",
      title: "Lekcja 3 — Moc zdjęć w wizytówce",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Wizytówki ze zdjęciami dostają <strong>42% więcej próśb o wskazówki dojazdu</strong> i <strong>35% więcej kliknięć</strong> na stronę.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Dodaj minimum: zdjęcie profilu (logo), zdjęcie okładki (lokal/produkt), 5 zdjęć wnętrza lub produktów. Unikaj stocków — Google ceni autentyczne fotografie.</p>`,
    },
    4: {
      subject: "Lekcja 4 — Jak zdobywać opinie na autopilocie",
      title: "Lekcja 4 — Opinie na autopilocie",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Opinie to waluta Google. Im więcej masz (i im wyższe), tym wyżej jesteś w wynikach lokalnych.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Najskuteczniejszy sposób:</strong> tabliczka NFC przy kasie lub na stoliku — klient przykłada telefon i trafia prosto na formularz opinii.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Bez proszenia, bez QR kodów do skanowania, bez wpisywania linków. Jeden dotyk = opinia.</p>`,
      cta: { label: "Zobacz tabliczki NFC →", url: `${BASE_URL}/pl/order` },
    },
  },
  en: {
    1: {
      subject: "Welcome to the Google Business Profile course — let's get started!",
      title: "Welcome to the Google Business Profile course!",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Thanks for signing up! Over the next few days you'll receive the next lessons straight to your inbox.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Lesson 1 — Why your Google Business Profile is your most important ad</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Before a customer visits your website, they'll see your Google Business Profile. They'll see the star rating, photos, opening hours, and reviews. Within 3 seconds, that decides whether they tap "Call" or move on to a competitor.</p>`,
      cta: { label: "Read the article →", url: `${BASE_URL}/en/blog/${lesson1ArticleSlug.en}` },
    },
    2: {
      subject: "Lesson 2 — How to complete your Google Business Profile in 15 minutes",
      title: "Lesson 2 — Complete your profile in 15 minutes",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Most businesses have a Google Business Profile — but 80% of them are incomplete. Missing photos, opening hours, a description, categories.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Today we'll fix that together — step by step, in 15 minutes.</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Go to <a href="https://business.google.com" style="color:#2563eb;">business.google.com</a> and fill in: your name, category, description (750 characters!), hours, and profile and cover photos.</p>`,
    },
    3: {
      subject: "Lesson 3 — Photos that attract customers",
      title: "Lesson 3 — The power of photos in your profile",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Profiles with photos get <strong>42% more requests for directions</strong> and <strong>35% more clicks</strong> through to the website.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Add at least: a profile photo (logo), a cover photo (your venue/product), and 5 photos of the interior or products. Avoid stock photos — Google favors authentic ones.</p>`,
    },
    4: {
      subject: "Lesson 4 — How to collect reviews on autopilot",
      title: "Lesson 4 — Reviews on autopilot",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Reviews are Google's currency. The more you have (and the higher they are), the higher you rank in local results.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>The most effective way:</strong> an NFC plate at the register or on the table — the customer taps their phone and lands straight on the review form.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">No asking, no QR codes to scan, no links to type. One tap = one review.</p>`,
      cta: { label: "See the NFC plates →", url: `${BASE_URL}/en/order` },
    },
  },
  de: {
    1: {
      subject: "Willkommen zum Google-Unternehmensprofil-Kurs — los geht's!",
      title: "Willkommen zum Google-Unternehmensprofil-Kurs!",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Vielen Dank für Ihre Anmeldung! In den nächsten Tagen erhalten Sie die weiteren Lektionen direkt in Ihr Postfach.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Lektion 1 — Warum Ihr Google-Unternehmensprofil Ihre wichtigste Werbung ist</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Bevor ein Kunde Ihre Website besucht, sieht er Ihr Google-Unternehmensprofil. Er sieht die Sternebewertung, Fotos, Öffnungszeiten und Bewertungen. Innerhalb von 3 Sekunden entscheidet das, ob er auf „Anrufen" tippt oder zur Konkurrenz weiterzieht.</p>`,
      cta: { label: "Artikel lesen →", url: `${BASE_URL}/de/blog/${lesson1ArticleSlug.de}` },
    },
    2: {
      subject: "Lektion 2 — So vervollständigen Sie Ihr Google-Unternehmensprofil in 15 Minuten",
      title: "Lektion 2 — Profil in 15 Minuten vervollständigen",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Die meisten Unternehmen haben ein Google-Unternehmensprofil — aber 80&nbsp;% davon sind unvollständig. Es fehlen Fotos, Öffnungszeiten, eine Beschreibung, Kategorien.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Heute erledigen wir das gemeinsam — Schritt für Schritt, in 15 Minuten.</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Gehen Sie auf <a href="https://business.google.com" style="color:#2563eb;">business.google.com</a> und füllen Sie aus: Name, Kategorie, Beschreibung (750 Zeichen!), Öffnungszeiten sowie Profil- und Titelbild.</p>`,
    },
    3: {
      subject: "Lektion 3 — Fotos, die Kunden anziehen",
      title: "Lektion 3 — Die Kraft von Fotos im Profil",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Profile mit Fotos erhalten <strong>42&nbsp;% mehr Anfragen für die Anfahrt</strong> und <strong>35&nbsp;% mehr Klicks</strong> auf die Website.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Fügen Sie mindestens hinzu: ein Profilbild (Logo), ein Titelbild (Ihr Lokal/Produkt) sowie 5 Fotos vom Innenbereich oder von Produkten. Vermeiden Sie Stockfotos — Google bevorzugt authentische Aufnahmen.</p>`,
    },
    4: {
      subject: "Lektion 4 — Bewertungen im Autopilot sammeln",
      title: "Lektion 4 — Bewertungen im Autopilot",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Bewertungen sind die Währung von Google. Je mehr Sie haben (und je höher sie sind), desto höher stehen Sie in den lokalen Ergebnissen.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Der effektivste Weg:</strong> ein NFC-Aufsteller an der Kasse oder auf dem Tisch — der Kunde hält sein Telefon daran und landet direkt auf dem Bewertungsformular.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Kein Nachfragen, kein QR-Code-Scannen, kein Link-Eintippen. Ein Tippen = eine Bewertung.</p>`,
      cta: { label: "NFC-Aufsteller ansehen →", url: `${BASE_URL}/de/order` },
    },
  },
  it: {
    1: {
      subject: "Benvenuto nel corso sulla scheda Google — si comincia!",
      title: "Benvenuto nel corso sulla scheda Google!",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Grazie per esserti iscritto! Nei prossimi giorni riceverai le prossime lezioni direttamente nella tua casella email.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Lezione 1 — Perché la tua scheda Google è la tua pubblicità più importante</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Prima ancora di visitare il tuo sito, il cliente vedrà la tua scheda Google. Vedrà le stelle, le foto, gli orari di apertura e le recensioni. In 3 secondi questo decide se toccherà "Chiama" oppure passerà alla concorrenza.</p>`,
      cta: { label: "Leggi l'articolo →", url: `${BASE_URL}/it/blog/${lesson1ArticleSlug.it}` },
    },
    2: {
      subject: "Lezione 2 — Come completare la tua scheda Google in 15 minuti",
      title: "Lezione 2 — Completa la scheda in 15 minuti",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">La maggior parte delle attività ha una scheda Google — ma l'80% è incompleta. Mancano foto, orari di apertura, descrizione, categorie.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Oggi lo facciamo insieme — passo dopo passo, in 15 minuti.</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Vai su <a href="https://business.google.com" style="color:#2563eb;">business.google.com</a> e compila: nome, categoria, descrizione (750 caratteri!), orari, foto profilo e copertina.</p>`,
    },
    3: {
      subject: "Lezione 3 — Foto che attirano clienti",
      title: "Lezione 3 — Il potere delle foto nella scheda",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Le schede con foto ricevono <strong>il 42% in più di richieste di indicazioni</strong> e <strong>il 35% in più di clic</strong> verso il sito.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Aggiungi almeno: una foto profilo (logo), una foto di copertina (locale/prodotto) e 5 foto degli interni o dei prodotti. Evita le foto stock — Google preferisce foto autentiche.</p>`,
    },
    4: {
      subject: "Lezione 4 — Come ottenere recensioni in automatico",
      title: "Lezione 4 — Recensioni in automatico",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Le recensioni sono la valuta di Google. Più ne hai (e più sono alte), più sali nei risultati locali.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Il modo più efficace:</strong> una targa NFC alla cassa o sul tavolo — il cliente avvicina il telefono e arriva direttamente al modulo per la recensione.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Senza chiedere, senza QR code da scansionare, senza link da digitare. Un tocco = una recensione.</p>`,
      cta: { label: "Scopri le targhe NFC →", url: `${BASE_URL}/it/order` },
    },
  },
};

// ─── Sekwencja "discount" ────────────────────────────────────────────────────

interface DiscountStep {
  subject: string;
  title: string;
  body: string;
}

const DISCOUNT_STEPS: Record<Locale, Record<number, DiscountStep>> = {
  pl: {
    1: {
      subject: "Twój kod rabatowy 5 € — Starlinkee",
      title: "Twój kod rabatowy jest gotowy!",
      body: `<p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.6;">Dziękujemy za zapis! Oto Twój kod na <strong>5 € zniżki</strong> na pierwsze zamówienie:</p>`,
    },
    2: {
      subject: "Ostatnia szansa — Twój kod WELCOME5 czeka",
      title: "Twój kod rabatowy nadal czeka",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Kilka dni temu wysłaliśmy Ci kod <strong>WELCOME5</strong> na 5 € zniżki. Jeszcze nie wykorzystałeś/-aś.</p>
       <p style="margin:0 0 20px;color:#6b7280;font-size:15px;line-height:1.7;">Tabliczka NFC to najprostszy sposób na więcej opinii Google — bez aplikacji, bez proszenia. Klient przykłada telefon i gotowe.</p>`,
    },
  },
  en: {
    1: {
      subject: "Your €5 discount code — Starlinkee",
      title: "Your discount code is ready!",
      body: `<p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.6;">Thanks for signing up! Here's your code for <strong>€5 off</strong> your first order:</p>`,
    },
    2: {
      subject: "Last chance — your code WELCOME5 is waiting",
      title: "Your discount code is still waiting",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">A few days ago we sent you the code <strong>WELCOME5</strong> for €5 off. You haven't used it yet.</p>
       <p style="margin:0 0 20px;color:#6b7280;font-size:15px;line-height:1.7;">An NFC plate is the simplest way to get more Google reviews — no app, no asking. The customer taps their phone and that's it.</p>`,
    },
  },
  de: {
    1: {
      subject: "Ihr 5-€-Rabattcode — Starlinkee",
      title: "Ihr Rabattcode ist bereit!",
      body: `<p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.6;">Vielen Dank für Ihre Anmeldung! Hier ist Ihr Code für <strong>5&nbsp;€ Rabatt</strong> auf Ihre erste Bestellung:</p>`,
    },
    2: {
      subject: "Letzte Chance — Ihr Code WELCOME5 wartet",
      title: "Ihr Rabattcode wartet noch",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Vor ein paar Tagen haben wir Ihnen den Code <strong>WELCOME5</strong> für 5&nbsp;€ Rabatt geschickt. Sie haben ihn noch nicht eingelöst.</p>
       <p style="margin:0 0 20px;color:#6b7280;font-size:15px;line-height:1.7;">Ein NFC-Aufsteller ist der einfachste Weg zu mehr Google-Bewertungen — ohne App, ohne Nachfragen. Der Kunde hält sein Telefon daran, fertig.</p>`,
    },
  },
  it: {
    1: {
      subject: "Il tuo codice sconto da 5 € — Starlinkee",
      title: "Il tuo codice sconto è pronto!",
      body: `<p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.6;">Grazie per esserti iscritto! Ecco il tuo codice per <strong>5 € di sconto</strong> sul primo ordine:</p>`,
    },
    2: {
      subject: "Ultima occasione — il tuo codice WELCOME5 ti aspetta",
      title: "Il tuo codice sconto ti sta ancora aspettando",
      body: `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Qualche giorno fa ti abbiamo inviato il codice <strong>WELCOME5</strong> per 5 € di sconto. Non l'hai ancora utilizzato.</p>
       <p style="margin:0 0 20px;color:#6b7280;font-size:15px;line-height:1.7;">La targa NFC è il modo più semplice per ottenere più recensioni Google — senza app, senza chiedere. Il cliente avvicina il telefono ed è fatto.</p>`,
    },
  },
};

const discountOrderCta: Record<Locale, string> = {
  pl: "Zamów tabliczkę NFC →",
  en: "Order the NFC plate →",
  de: "NFC-Aufsteller bestellen →",
  it: "Ordina la targa NFC →",
};

// ─── Exports ─────────────────────────────────────────────────────────────────

export function getSequenceEmail(source: string, step: number, locale: Locale): SequenceEmail | null {
  if (source === "discount") {
    const s = DISCOUNT_STEPS[locale]?.[step] ?? DISCOUNT_STEPS.pl[step];
    if (!s) return null;
    return { subject: s.subject, html: buildDiscountEmail(locale, s.title, s.body) };
  }
  const s = COURSE_STEPS[locale]?.[step] ?? COURSE_STEPS.pl[step];
  if (!s) return null;
  return { subject: s.subject, html: buildCourseEmail(locale, s.title, s.body, s.cta) };
}

export function getMaxStep(source: string): number {
  const seq = source === "discount" ? DISCOUNT_STEPS.pl : COURSE_STEPS.pl;
  return Math.max(...Object.keys(seq).map(Number));
}

// ─── HTML builders ───────────────────────────────────────────────────────────

function buildCourseEmail(
  locale: Locale,
  title: string,
  body: string,
  cta?: { label: string; url: string }
): string {
  const ctaHtml = cta
    ? `<table cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
        <tr><td style="background:#2563eb;border-radius:8px;">
          <a href="${cta.url}" style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;">${cta.label}</a>
        </td></tr>
      </table>`
    : "";
  return `<!DOCTYPE html><html lang="${locale}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
        <tr><td style="background:#2563eb;padding:32px 40px;text-align:center;">
          <p style="margin:0;color:#bfdbfe;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Starlinkee</p>
          <h1 style="margin:12px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">${title}</h1>
        </td></tr>
        <tr><td style="padding:36px 40px;">
          ${body}${ctaHtml}
          <p style="margin:0;color:#9ca3af;font-size:13px;">${disclaimer[locale]}</p>
        </td></tr>
        <tr><td style="background:#f3f4f6;padding:20px 40px;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">© 2025 Starlinkee · starlinkee.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildDiscountEmail(locale: Locale, title: string, body: string): string {
  return `<!DOCTYPE html><html lang="${locale}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
        <tr><td style="background:#2563eb;padding:32px 40px;text-align:center;">
          <p style="margin:0;color:#bfdbfe;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Starlinkee</p>
          <h1 style="margin:12px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">${title}</h1>
        </td></tr>
        <tr><td style="padding:36px 40px;text-align:center;">
          ${body}
          <div style="background:#eff6ff;border:2px dashed #2563eb;border-radius:10px;padding:20px 32px;display:inline-block;margin:0 0 24px;">
            <p style="margin:0;font-size:28px;font-weight:bold;letter-spacing:4px;color:#1d4ed8;">WELCOME5</p>
          </div><br>
          <table cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
            <tr><td style="background:#2563eb;border-radius:8px;">
              <a href="${BASE_URL}/${locale}/order" style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;">${discountOrderCta[locale]}</a>
            </td></tr>
          </table>
          <p style="margin:0;color:#9ca3af;font-size:13px;">${disclaimer[locale]}</p>
        </td></tr>
        <tr><td style="background:#f3f4f6;padding:20px 40px;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">© 2025 Starlinkee · starlinkee.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
