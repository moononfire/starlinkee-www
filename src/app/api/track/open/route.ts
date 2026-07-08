import { NextRequest, NextResponse } from "next/server";
import { recordOpen } from "@/lib/db";

// 1x1 transparent GIF
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(req: NextRequest) {
  const sid = req.nextUrl.searchParams.get("sid");
  if (sid) {
    recordOpen(sid).catch(() => {}); // fire and forget — nie blokuj odpowiedzi
  }
  return new NextResponse(PIXEL, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
