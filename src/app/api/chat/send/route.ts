import { NextRequest, NextResponse } from "next/server";
import { addMessage } from "@/lib/chatStore";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  const { sessionId, text, visitorName } = await request.json();

  if (!sessionId || !text?.trim()) {
    return NextResponse.json({ error: "Brak wymaganych danych" }, { status: 400 });
  }

  await addMessage(sessionId, { sender: "user", text: text.trim() });

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? "vikbobinski@gmail.com";
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://starlinkee.com";
  const adminToken = process.env.CHAT_ADMIN_TOKEN ?? "changeme";

  if (resendKey) {
    const replyUrl = `${appUrl}/admin/chat?s=${encodeURIComponent(sessionId)}&t=${encodeURIComponent(adminToken)}`;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Starlinkee Chat <noreply@starlinkee.com>",
        to: [notifyEmail],
        subject: `💬 Nowa wiadomość na czacie${visitorName ? ` od ${visitorName}` : ""}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
            <h2 style="color:#1d4ed8;">Nowa wiadomość z czatu</h2>
            ${visitorName ? `<p><strong>Od:</strong> ${escapeHtml(visitorName)}</p>` : ""}
            <div style="background:#f3f4f6;border-radius:8px;padding:16px;margin:16px 0;">
              <p style="margin:0;font-size:16px;">${escapeHtml(text.trim())}</p>
            </div>
            <a href="${replyUrl}" style="display:inline-block;background:#1d4ed8;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">
              ✉️ Odpowiedz na czacie
            </a>
            <p style="color:#6b7280;font-size:12px;margin-top:16px;">
              Session ID: ${escapeHtml(sessionId)}
            </p>
          </div>
        `,
      }),
    }).catch(console.error);
  }

  return NextResponse.json({ ok: true });
}
