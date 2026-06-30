import { recordSend } from "@/lib/supabase";

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

// ─── Sekwencja "kurs" ────────────────────────────────────────────────────────

const COURSE_SEQUENCE: Record<number, SequenceEmail> = {
  1: {
    subject: "Witaj w kursie o wizytówce Google — zaczynamy!",
    html: buildCourseEmail(
      "Witaj w kursie o wizytówce Google!",
      `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Dziękujemy za zapis! W ciągu najbliższych dni dostaniesz kolejne lekcje na swoją skrzynkę.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Lekcja 1 — Dlaczego wizytówka Google to Twoja najważniejsza reklama?</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Zanim klient wejdzie na Twoją stronę, zobaczy wizytówkę Google. Zobaczy gwiazdki, zdjęcia, godziny otwarcia i opinie. To w ciągu 3 sekund decyduje, czy kliknie „Zadzwoń" czy przejdzie do konkurencji.</p>`,
      { label: "Przeczytaj artykuł →", url: "https://starlinkee.com/blog/jak-szybko-zdobyc-opinie-w-google" }
    ),
  },
  2: {
    subject: "Lekcja 2 — Jak uzupełnić wizytówkę Google w 15 minut",
    html: buildCourseEmail(
      "Lekcja 2 — Uzupełnij wizytówkę w 15 minut",
      `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Większość firm ma wizytówkę Google — ale 80% z nich jest niekompletna. Brakuje zdjęć, godzin otwarcia, opisu, kategorii.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Dziś zrobimy to razem — krok po kroku, w 15 minut.</strong></p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Wejdź na <a href="https://business.google.com" style="color:#2563eb;">business.google.com</a> i uzupełnij: nazwę, kategorię, opis (750 znaków!), godziny, zdjęcia profilu i okładki.</p>`
    ),
  },
  3: {
    subject: "Lekcja 3 — Zdjęcia, które przyciągają klientów",
    html: buildCourseEmail(
      "Lekcja 3 — Moc zdjęć w wizytówce",
      `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Wizytówki ze zdjęciami dostają <strong>42% więcej próśb o wskazówki dojazdu</strong> i <strong>35% więcej kliknięć</strong> na stronę.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Dodaj minimum: zdjęcie profilu (logo), zdjęcie okładki (lokal/produkt), 5 zdjęć wnętrza lub produktów. Unikaj stocków — Google ceni autentyczne fotografie.</p>`
    ),
  },
  4: {
    subject: "Lekcja 4 — Jak zdobywać opinie na autopilocie",
    html: buildCourseEmail(
      "Lekcja 4 — Opinie na autopilocie",
      `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Opinie to waluta Google. Im więcej masz (i im wyższe), tym wyżej jesteś w wynikach lokalnych.</p>
       <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Najskuteczniejszy sposób:</strong> tabliczka NFC przy kasie lub na stoliku — klient przykłada telefon i trafia prosto na formularz opinii.</p>
       <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Bez proszenia, bez QR kodów do skanowania, bez wpisywania linków. Jeden dotyk = opinia.</p>`,
      { label: "Zobacz tabliczki NFC →", url: "https://starlinkee.pl/order" }
    ),
  },
};

// ─── Sekwencja "discount" ────────────────────────────────────────────────────

const DISCOUNT_SEQUENCE: Record<number, SequenceEmail> = {
  1: {
    subject: "Twój kod rabatowy 5 € — Starlinkee",
    html: buildDiscountEmail(
      "Twój kod rabatowy jest gotowy!",
      `<p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.6;">Dziękujemy za zapis! Oto Twój kod na <strong>5 € zniżki</strong> na pierwsze zamówienie:</p>`
    ),
  },
  2: {
    subject: "Ostatnia szansa — Twój kod WELCOME5 czeka",
    html: buildDiscountEmail(
      "Twój kod rabatowy nadal czeka",
      `<p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Kilka dni temu wysłaliśmy Ci kod <strong>WELCOME5</strong> na 5 € zniżki. Jeszcze nie wykorzystałeś/-aś.</p>
       <p style="margin:0 0 20px;color:#6b7280;font-size:15px;line-height:1.7;">Tabliczka NFC to najprostszy sposób na więcej opinii Google — bez aplikacji, bez proszenia. Klient przykłada telefon i gotowe.</p>`
    ),
  },
};

// ─── Exports ─────────────────────────────────────────────────────────────────

export function getSequenceEmail(source: string, step: number): SequenceEmail | null {
  const seq = source === "discount" ? DISCOUNT_SEQUENCE : COURSE_SEQUENCE;
  return seq[step] ?? null;
}

export function getMaxStep(source: string): number {
  const seq = source === "discount" ? DISCOUNT_SEQUENCE : COURSE_SEQUENCE;
  return Math.max(...Object.keys(seq).map(Number));
}

// ─── HTML builders ───────────────────────────────────────────────────────────

function buildCourseEmail(
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
  return `<!DOCTYPE html><html lang="pl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
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
          <p style="margin:0;color:#9ca3af;font-size:13px;">Możesz wypisać się w dowolnej chwili — wystarczy odpowiedzieć na tę wiadomość.</p>
        </td></tr>
        <tr><td style="background:#f3f4f6;padding:20px 40px;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">© 2025 Starlinkee · starlinkee.pl</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildDiscountEmail(title: string, body: string): string {
  return `<!DOCTYPE html><html lang="pl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
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
              <a href="https://starlinkee.pl/order" style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;">Zamów tabliczkę NFC →</a>
            </td></tr>
          </table>
          <p style="margin:0;color:#9ca3af;font-size:13px;">Możesz wypisać się w dowolnej chwili — wystarczy odpowiedzieć na tę wiadomość.</p>
        </td></tr>
        <tr><td style="background:#f3f4f6;padding:20px 40px;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">© 2025 Starlinkee · starlinkee.pl</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
