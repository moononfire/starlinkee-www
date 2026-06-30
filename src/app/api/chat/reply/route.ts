import { NextRequest, NextResponse } from "next/server";
import { addMessage } from "@/lib/chatStore";

export async function POST(request: NextRequest) {
  const { sessionId, text, token } = await request.json();

  const adminToken = process.env.CHAT_ADMIN_TOKEN ?? "changeme";
  if (token !== adminToken) {
    return NextResponse.json({ error: "Nieautoryzowany" }, { status: 401 });
  }

  if (!sessionId || !text?.trim()) {
    return NextResponse.json({ error: "Brak wymaganych danych" }, { status: 400 });
  }

  await addMessage(sessionId, { sender: "owner", text: text.trim() });
  return NextResponse.json({ ok: true });
}
