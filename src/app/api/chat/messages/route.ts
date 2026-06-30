import { NextRequest, NextResponse } from "next/server";
import { getMessages } from "@/lib/chatStore";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("s");
  if (!sessionId) {
    return NextResponse.json({ error: "Brak session ID" }, { status: 400 });
  }

  const messages = await getMessages(sessionId);
  return NextResponse.json({ messages });
}
