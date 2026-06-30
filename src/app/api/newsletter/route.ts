import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, source } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Nieprawidłowy adres e-mail" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? "vikbobinski@gmail.com";
  const audienceCourse = process.env.RESEND_AUDIENCE_COURSE;
  const audienceDiscount = process.env.RESEND_AUDIENCE_DISCOUNT;

  if (!resendKey) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const FROM = "Starlinkee <noreply@starlinkee.com>";

  // Wybór listy na podstawie źródła zapisu
  const audienceId = source === "discount" ? audienceDiscount : audienceCourse;

  // 1. Dodaj do Resend Audience (jeśli ID jest skonfigurowane)
  if (audienceId) {
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
  }

  // 2. Powiadomienie dla właściciela
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [notifyEmail],
      subject: source === "discount"
        ? `📬 Nowy zapis na zniżkę: ${email}`
        : `📬 Nowy zapis na kurs: ${email}`,
      html: `<p>Nowy adres e-mail:<br><strong>${escapeHtml(email)}</strong></p>
             <p>Lista: <em>${source === "discount" ? "Newsletter — Zniżka Powitalna" : "Newsletter — Kurs Wizytówka Google"}</em></p>`,
    }),
  });

  // 3. Wiadomość powitalna do subskrybenta
  const welcomeHtml = source === "discount"
    ? discountWelcomeHtml()
    : courseWelcomeHtml();

  const welcomeRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [email],
      subject: source === "discount"
        ? "Twój kod rabatowy 5 € — Starlinkee"
        : "Twój bezpłatny kurs o wizytówce Google — zaczynamy!",
      html: welcomeHtml,
    }),
  });

  if (!welcomeRes.ok) {
    const body = await welcomeRes.text();
    console.error("Resend newsletter error:", body);
    return NextResponse.json({ error: "Błąd wysyłki" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function courseWelcomeHtml(): string {
  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
        <tr><td style="background:#2563eb;padding:32px 40px;text-align:center;">
          <p style="margin:0;color:#bfdbfe;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Starlinkee</p>
          <h1 style="margin:12px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">Witaj w kursie o wizytówce Google!</h1>
        </td></tr>
        <tr><td style="padding:36px 40px;">
          <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;">Dziękujemy za zapis! W ciągu najbliższych dni dostaniesz kolejne lekcje na swoją skrzynkę.</p>
          <p style="margin:0 0 16px;color:#374151;font-size:16px;line-height:1.6;"><strong>Lekcja 1 — Dlaczego wizytówka Google to Twoja najważniejsza reklama?</strong></p>
          <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7;">Zanim klient wejdzie na Twoją stronę, zobaczy wizytówkę Google. Zobaczy gwiazdki, zdjęcia, godziny otwarcia i opinie. To w ciągu 3 sekund decyduje, czy kliknie „Zadzwoń" czy przejdzie do konkurencji.</p>
          <table cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
            <tr><td style="background:#2563eb;border-radius:8px;">
              <a href="https://starlinkee.pl/blog/jak-szybko-zdobyc-opinie-w-google" style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;">Przeczytaj artykuł →</a>
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
</body>
</html>`;
}

function discountWelcomeHtml(): string {
  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
        <tr><td style="background:#2563eb;padding:32px 40px;text-align:center;">
          <p style="margin:0;color:#bfdbfe;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Starlinkee</p>
          <h1 style="margin:12px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">Twój kod rabatowy jest gotowy!</h1>
        </td></tr>
        <tr><td style="padding:36px 40px;text-align:center;">
          <p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.6;">Dziękujemy za zapis! Oto Twój kod na <strong>5 € zniżki</strong> na pierwsze zamówienie:</p>
          <div style="background:#eff6ff;border:2px dashed #2563eb;border-radius:10px;padding:20px 32px;display:inline-block;margin:0 0 24px;">
            <p style="margin:0;font-size:28px;font-weight:bold;letter-spacing:4px;color:#1d4ed8;">WELCOME5</p>
          </div>
          <p style="margin:0 0 28px;color:#6b7280;font-size:14px;">Wpisz kod przy składaniu zamówienia na starlinkee.pl</p>
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
</body>
</html>`;
}
