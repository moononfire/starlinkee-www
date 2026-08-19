import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/email";

export async function POST(request: NextRequest) {
  const { name, email, phone, business, message, website, _challenge } = await request.json();

  // Honeypot check
  if (website || _challenge !== "slk-2026") {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? "vikbobinski@gmail.com";

  const success = await sendMail(
    notifyEmail,
    `Nowe zgłoszenie: ${business || name}`,
    `
      <h2>Nowe zgłoszenie ze strony Starlinkee</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Imię:</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email:</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Telefon:</td><td>${escapeHtml(phone || "—")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Lokal:</td><td>${escapeHtml(business || "—")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Wiadomość:</td><td>${escapeHtml(message || "—")}</td></tr>
      </table>
    `
  );

  if (!success) {
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
