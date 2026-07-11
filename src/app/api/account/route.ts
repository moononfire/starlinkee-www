import { NextRequest, NextResponse } from "next/server";
import { LOCALES, type Locale } from "@/i18n";

export async function POST(request: NextRequest) {
  const {
    email,
    password,
    name,
    address,
    locale: rawLocale,
  } = await request.json();

  const locale: Locale = LOCALES.includes(rawLocale) ? rawLocale : "pl";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!password || password.length < 8) {
    return NextResponse.json({ error: "Password too short" }, { status: 400 });
  }
  if (!name) {
    return NextResponse.json({ error: "Missing name" }, { status: 400 });
  }

  const v2Url = process.env.STARLINKEE_V2_URL;
  const apiKey = process.env.WWW_API_KEY;
  if (!v2Url || !apiKey) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const res = await fetch(`${v2Url}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-WWW-Key": apiKey },
      body: JSON.stringify({
        email,
        password,
        name,
        address_line1: address?.line1,
        address_city: address?.city,
        address_postal_code: address?.postalCode,
        country: address?.country,
        preferred_language: locale,
        source: "Website checkout",
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ error: data.error ?? "Account creation failed" }, { status: res.status });
    }
    return NextResponse.json({ ok: true, customerId: data.customerId });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Account creation failed";
    console.error("[account]", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
