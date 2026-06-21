import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, phone, business, message } = await request.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? "vikbobinski@gmail.com";

  if (!resendKey) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Starlinkee <noreply@starlinkee.com>",
      to: [notifyEmail],
      subject: `Nowe zgłoszenie: ${business || name}`,
      html: `
        <h2>Nowe zgłoszenie ze strony Starlinkee</h2>
        <table style="border-collapse:collapse;">
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Imię:</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email:</td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Telefon:</td><td>${escapeHtml(phone || "—")}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Lokal:</td><td>${escapeHtml(business || "—")}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Wiadomość:</td><td>${escapeHtml(message || "—")}</td></tr>
        </table>
      `,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Resend error:", body);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
