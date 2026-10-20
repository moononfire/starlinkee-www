---
status: todo
---
# Krok 04: Slogany na stronie głównej, wersja angielska (en)

## Cel
Strona `/en` ma tak samo krótkie, emocjonalne i nastawione na wyniki slogany jak wersja polska z kroku 03. Teksty brzmią naturalnie dla native speakera (English), a nie jak dosłowne tłumaczenie.

## Zakres
- `src/i18n.ts`, blok `en`: te same klucze co w kroku 03 (`hero`, `features`, `liveDemo` sectionTitle/sectionSubtitle/tour*, `pricing` sectionTitle/sectionSubtitle/feature* (bez SMS i wsparcia)/plates/annualNote, `contact` sectionTitle/sectionSubtitle, `footer.tagline`).
- Przekaz i zasady tonu bierz z wersji `pl` i komentarza z kroku 03. Limity słów są te same.
- Zastosuj lokalne konwencje rynku (np. krótki, aktywny styl typowy dla SaaS).

## Poza zakresem
- Pozostałe języki.
- Ceny, liczby, formularze, czat, `orderSuccess`, `nav`.
- Pozycje o SMS-ach i wsparciu technicznym (krok 08).
- Zmiany komponentów (poza drobną poprawką, jeśli krótszy tekst coś psuje).

## Kryteria akceptacji
- Wszystkie wymienione klucze `en` mieszczą się w limitach z kroku 03.
- Każdy punkt przekazu z kroku 03 jest obecny na `/en`.
- Brak słów o lojalności i panelu admina.
- `/en` renderuje się poprawnie na 375 px i 1280 px, bez łamania pojedynczych długich słów.
- W PROGRESS.md jest tabela „przed → po” dla hero i tytułów funkcji.
- `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build` przechodzi.
