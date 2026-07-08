import { NextRequest, NextResponse } from "next/server";
import { upsertSubscriber } from "@/lib/db";
import { getOrCreateResendAudience } from "@/lib/resend";
import { getSequenceEmail, sendTrackedEmail } from "@/lib/sequence-emails";
import { LOCALES, type Locale } from "@/i18n";

export async function POST(request: NextRequest) {
  const { email, source, locale } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Nieprawidłowy adres e-mail" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? "vikbobinski@gmail.com";

  if (!resendKey) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const src = source ?? "course";
  const loc: Locale = LOCALES.includes(locale) ? locale : "pl";

  // 1. Dodaj do Resend Audience — jeden audience per source+język (np. "course-en"),
  // tworzony/wyszukiwany dynamicznie po nazwie, żeby nie ręcznie zarządzać ID w env.
  const audienceId = await getOrCreateResendAudience(`${src}-${loc}`);
  if (audienceId) {
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
  }

  // 2. Zapisz do bazy — sekwencja (kolejne emaile co 3 dni od kroku 2)
  await upsertSubscriber(email, src, loc);

  // 3. Powiadomienie dla właściciela (bez trackingu)
  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Starlinkee <noreply@starlinkee.com>",
      to: [notifyEmail],
      subject: src === "discount" ? `📬 Nowy zapis na zniżkę: ${email}` : `📬 Nowy zapis na kurs: ${email}`,
      html: `<p>Nowy adres e-mail:<br><strong>${escapeHtml(email)}</strong></p>
             <p>Lista: <em>${src === "discount" ? "Newsletter — Zniżka Powitalna" : "Newsletter — Kurs Wizytówka Google"}</em></p>
             <p>Język: <em>${loc}</em></p>`,
    }),
  }).catch(() => {});

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
