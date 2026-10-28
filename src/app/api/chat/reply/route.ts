import { NextRequest, NextResponse } from "next/server";
import { addMessage } from "@/lib/chatStore";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  if (!verifyAdminSession(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Nieautoryzowany" }, { status: 401 });
  }
  const { sessionId, text } = await request.json();

  if (!sessionId || !text?.trim()) {
    return NextResponse.json({ error: "Brak wymaganych danych" }, { status: 400 });
  }

  await addMessage(sessionId, { sender: "owner", text: text.trim() });
  return NextResponse.json({ ok: true });
}
