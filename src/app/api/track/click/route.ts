import { NextRequest, NextResponse } from "next/server";
import { recordClick } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sid = req.nextUrl.searchParams.get("sid");
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return new NextResponse("Missing url", { status: 400 });
  }

  if (sid) {
    recordClick(sid, url).catch(() => {}); // fire and forget
  }

  return NextResponse.redirect(url);
}
