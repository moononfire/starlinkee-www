import { NextRequest, NextResponse, after } from "next/server";
import { buildEvent, memoryEvents, memoryStoreEnabled, recordEvent } from "@/lib/analytics";

// Zawsze 204 (także przy odrzuceniu i błędzie bazy), żeby nie zdradzać, co filtrujemy.
export async function POST(req: NextRequest) {
  try {
    const event = buildEvent(req.headers, await req.text());
    if (event) {
      after(async () => {
        try {
          await recordEvent(event);
        } catch {
          // brak tabeli / bazy nie może psuć strony
        }
      });
    }
  } catch {
    // ignoruj
  }
  return new NextResponse(null, { status: 204 });
}

// Podgląd magazynu pamięciowego, wyłącznie w testach e2e (ANALYTICS_STORE=memory). Na produkcji 404.
export async function GET() {
  if (!memoryStoreEnabled()) return new NextResponse(null, { status: 404 });
  return NextResponse.json({ events: memoryEvents() });
}
