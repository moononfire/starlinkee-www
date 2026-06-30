import { NextRequest, NextResponse } from "next/server";
import { upsertSubscriber } from "@/lib/supabase";
import { getSequenceEmail, sendTrackedEmail } from "@/lib/sequence-emails";

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

  const src = source ?? "course";
  const audienceId = src === "discount" ? audienceDiscount : audienceCourse;

  // 1. Dodaj do Resend Audience
  if (audienceId) {
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
  }

  // 2. Zapisz do Supabase — sekwencja (kolejne emaile co 3 dni od kroku 2)
  await upsertSubscriber(email, src);

  // 3. Powiadomienie dla właściciela (bez trackingu)
  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Starlinkee <noreply@starlinkee.com>",
      to: [notifyEmail],
      subject: src === "discount" ? `📬 Nowy zapis na zniżkę: ${email}` : `📬 Nowy zapis na kurs: ${email}`,
      html: `<p>Nowy adres e-mail:<br><strong>${escapeHtml(email)}</strong></p>
             <p>Lista: <em>${src === "discount" ? "Newsletter — Zniżka Powitalna" : "Newsletter — Kurs Wizytówka Google"}</em></p>`,
    }),
  }).catch(() => {});

  // 4. Email powitalny (krok 1) — ze śledzeniem otwarć i kliknięć
  const welcome = getSequenceEmail(src, 1);
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
