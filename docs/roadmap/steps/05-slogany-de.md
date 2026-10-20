---
status: todo
---
# Krok 05: Slogany na stronie głównej, wersja niemiecka (de)

## Cel
Strona `/de` ma tak samo krótkie, emocjonalne i nastawione na wyniki slogany jak wersja polska z kroku 03. Teksty brzmią naturalnie dla native speakera (Deutsch), a nie jak dosłowne tłumaczenie.

## Zakres
- `src/i18n.ts`, blok `de`: te same klucze co w kroku 03 (`hero`, `features`, `liveDemo` sectionTitle/sectionSubtitle/tour*, `pricing` sectionTitle/sectionSubtitle/feature*/plates/annualNote, `contact` sectionTitle/sectionSubtitle, `footer.tagline`).
- Przekaz i zasady tonu bierz z wersji `pl` i komentarza z kroku 03. Limity słów są te same.
- Zastosuj lokalne konwencje rynku (np. „Sie”, krótkie złożenia zamiast długich słów, które psują układ).

## Poza zakresem
- Pozostałe języki.
- Ceny, liczby, formularze, czat, `orderSuccess`, `nav`.
- Zmiany komponentów (poza drobną poprawką, jeśli krótszy tekst coś psuje).

## Kryteria akceptacji
- Wszystkie wymienione klucze `de` mieszczą się w limitach z kroku 03.
- Każdy punkt przekazu z kroku 03 jest obecny na `/de`.
- Brak słów o lojalności i panelu admina.
- `/de` renderuje się poprawnie na 375 px i 1280 px, bez łamania pojedynczych długich słów.
- W PROGRESS.md jest tabela „przed → po” dla hero i tytułów funkcji.
- `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build` przechodzi.
