# Kontekst

**Apka:** starlinkee.com to strona marketingowa i sklep Starlinkee Pro: tabliczka NFC dla gastronomii. Filtruje opinie (dobre idą do Google, złe zostają u właściciela), zbiera kontakty i kupony SMS, daje stronę z linkami. Klient nie potrzebuje aplikacji. Strona jest w 4 językach: pl, en, de, it.

**Zakres tej zmiany:**
1. Usunąć wszystkie wzmianki o **karcie lojalnościowej** i **panelu administracyjnym / admin dashboard** ze strony głównej i ścieżki zamówienia (`/order`, `/order/success`). Tych funkcji na razie nie oferujemy.
2. Teksty **strony głównej** we wszystkich 4 językach skrócić do bardzo krótkich, dobrze brzmiących sloganów. Przekaz zostaje ten sam, ale akcent pada na **uczucia** (spokój, duma, kontrola) i **wyniki** (więcej 5★, więcej powracających gości). Każdy język piszemy naturalnie, a nie jako dosłowne tłumaczenie z pl.

**Stack:** Next.js 16 (App Router, `src/app/[locale]/…`), React 19, Tailwind 4, TypeScript. Uwaga: ten Next.js różni się od tego z danych treningowych, więc przed zmianą API czytaj `node_modules/next/dist/docs/`.

**Gdzie są teksty:**
- strona główna: `src/i18n.ts` (klucze `nav`, `hero`, `features`, `pricing`, `liveDemo`, `contact`, `footer`) oraz komponenty `src/components/{Hero,LiveDemo,DemoAnnotation,Features,Pricing,Footer}.tsx`
- SEO: `src/app/[locale]/layout.tsx` (tytuły i opisy), JSON-LD w `src/app/[locale]/page.tsx`
- zamówienie: obiekt tekstów na początku `src/app/[locale]/order/page.tsx`, strona sukcesu korzysta z `orderSuccess` w `src/i18n.ts`

**Konwencje:**
- Typ `Translations` powstaje z `pl`. Klucz usuwasz lub dodajesz we wszystkich 4 językach naraz.
- Oferta SMS to **100 SMS-ów marketingowych miesięcznie** (nie 200), a wsparcie techniczne opisujemy jako **błyskawiczne**, bo obsługuje je osobiście właściciel. Szczegóły w kroku 08.
- Nie zmieniaj cen, logiki checkoutu, Stripe ani formularzy (etykiet pól).
- Weryfikacja: `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build`. Lint ma ponad 200 starych błędów, więc go nie naprawiamy. Nie dodawaj tylko nowych błędów w plikach, które ruszasz.
- Commity po polsku lub angielsku, krótko, z prefiksem (`feat:`, `copy:`, `fix:`).
