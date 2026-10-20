---
status: todo
---
# Krok 03: Slogany na stronie głównej, wersja polska

## Cel
Polska strona główna mówi to samo co dziś, ale bardzo krótkimi, chwytliwymi sloganami, które grają na uczuciach (spokój, duma, kontrola) i wynikach (więcej 5★, więcej powracających gości). Ta wersja jest wzorcem przekazu dla kroków 04–06.

## Zakres
- `src/i18n.ts`, blok `pl`, klucze strony głównej: `hero`, `features`, `liveDemo` (`sectionTitle`, `sectionSubtitle`, `tour*`), `pricing` (`sectionTitle`, `sectionSubtitle`, `feature*`, `plates`, `annualNote`), `contact` (`sectionTitle`, `sectionSubtitle`), `footer.tagline`.
- Przekaz, który ma zostać zachowany:
  - tabliczka NFC, klient nie potrzebuje aplikacji
  - dobra ocena trafia do Google, zła zostaje u właściciela
  - zbieranie kontaktów i zgód, kupony SMS
  - własna strona z linkami
  - 30 dni za darmo i prosty cennik bez umów
- Limity:
  - tytuł i highlight w hero: po maks. 5 słów
  - `hero.subtitle`, `*.sectionSubtitle`: maks. 12 słów, jedno zdanie
  - tytuły funkcji: maks. 4 słowa
  - opisy funkcji i `tour*`: maks. 15 słów
  - CTA: maks. 4 słowa
- Na górze bloku `pl` dodaj krótki komentarz z 2–3 zasadami tonu, żeby kroki 04–06 trzymały ten sam styl.

## Poza zakresem
- Języki en/de/it (kroki 04–06).
- Ceny, waluty i liczby (199, 29 zł, 200 SMS, 30 dni zostają bez zmian).
- Etykiety pól formularza kontaktowego, czat, `orderSuccess`, `nav`.
- Zmiany układu i komponentów (poza drobną poprawką, jeśli krótszy tekst coś psuje).
- Ponowne dodawanie lojalności lub panelu admina.

## Kryteria akceptacji
- Wszystkie wymienione klucze `pl` mieszczą się w limitach.
- Żadna kluczowa informacja z listy „Przekaz” nie zniknęła ze strony.
- Strona `/pl` renderuje się poprawnie na 375 px i 1280 px.
- W PROGRESS.md jest tabela „przed → po” dla hero i tytułów funkcji.
- `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build` przechodzi.
