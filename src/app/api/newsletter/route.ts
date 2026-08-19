import { NextRequest, NextResponse } from "next/server";
import { upsertSubscriber } from "@/lib/db";
import { sendMail } from "@/lib/email";
import { getSequenceEmail, sendTrackedEmail } from "@/lib/sequence-emails";
import { LOCALES, type Locale } from "@/i18n";

export async function POST(request: NextRequest) {
  const { email, source, locale, website, _challenge } = await request.json();

  if (website || _challenge !== "slk-2026") {
    return NextResponse.json({ ok: true });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Nieprawidłowy adres e-mail" }, { status: 400 });
  }

  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? "vikbobinski@gmail.com";

  const src = source ?? "course";
  const loc: Locale = LOCALES.includes(locale) ? locale : "pl";

  // 2. Zapisz do bazy — sekwencja (kolejne emaile co 3 dni od kroku 2)
  await upsertSubscriber(email, src, loc);

  // 3. Powiadomienie dla właściciela (bez trackingu)
  sendMail(
    notifyEmail,
    src === "discount" ? `📬 Nowy zapis na zniżkę: ${email}` : `📬 Nowy zapis na kurs: ${email}`,
    `<p>Nowy adres e-mail:<br><strong>${escapeHtml(email)}</strong></p>
     <p>Lista: <em>${src === "discount" ? "Newsletter — Zniżka Powitalna" : "Newsletter — Kurs Wizytówka Google"}</em></p>
     <p>Język: <em>${loc}</em></p>`
  ).catch(() => {});

  // 4. Email powitalny (krok 1) — ze śledzeniem otwarć i kliknięć
  const welcome = getSequenceEmail(src, 1, loc);
  if (!welcome) {
    return NextResponse.json({ error: "Brak szablonu powitalnego" }, { status: 500 });
  }

  const ok = await sendTrackedEmail(email, src, 1, welcome.subject, welcome.html);
  if (!ok) {
    return NextResponse.json({ error: "Błąd wysyłki" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
