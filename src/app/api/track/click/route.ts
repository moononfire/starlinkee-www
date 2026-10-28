import { NextRequest, NextResponse } from "next/server";
import { recordClick } from "@/lib/db";
import { isAllowedRedirect } from "@/lib/redirectAllowlist";

export async function GET(req: NextRequest) {
  const sid = req.nextUrl.searchParams.get("sid");
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return new NextResponse("Missing url", { status: 400 });
  }

  const target = isAllowedRedirect(url);

  if (sid && target) {
    recordClick(sid, target.toString()).catch(() => {}); // fire and forget
  }

  // Adres spoza allowlisty (open redirect) → strona główna, bez liczenia kliknięcia.
  return NextResponse.redirect(target ?? new URL("/", req.nextUrl.origin));
}
