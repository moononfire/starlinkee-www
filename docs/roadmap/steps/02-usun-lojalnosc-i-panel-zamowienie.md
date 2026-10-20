---
status: todo
---
# Krok 02: Usuń kartę lojalnościową i panel admina ze ścieżki zamówienia

## Cel
Strony `/[locale]/order` i `/[locale]/order/success` we wszystkich 4 językach nie wspominają o karcie lojalnościowej ani o panelu administracyjnym / admin dashboard.

## Zakres
- `src/app/[locale]/order/page.tsx`, teksty pl/en/de/it:
  - `description`: usuń kartę lojalnościową i zwrot „z jednego panelu / admin dashboard”
  - `subscriptionDesc`: usuń „karta lojalnościowa” i „panel administracyjny”
  - `features`: usuń pozycje „Karta lojalnościowa” i „Panel administracyjny” (zostaje 5 pozycji)
  - `accountStepSubtitle`: zamiast „dostęp do panelu administracyjnego” napisz neutralnie, do czego służy konto (np. potwierdzenie i obsługa zamówienia)
  - przejrzyj resztę obiektu tekstów i usuń pozostałe wzmianki o panelu lub lojalności
- `src/i18n.ts`, `orderSuccess` we wszystkich językach: usuń „link do aktywacji panelu” (i odpowiedniki). Zostaw informację o potwierdzeniu e-mailem.
- Jeśli ścieżka zamówienia przekazuje do Stripe opisy produktu z tych tekstów (np. `description`), zostają one automatycznie oczyszczone. Kodu checkoutu nie zmieniaj.

## Poza zakresem
- Strona główna (krok 01 i dalsze).
- Logika, ceny i kroki formularza zamówienia.
- Regulamin, polityki, e-maile sekwencji.

## Kryteria akceptacji
- `grep -n -i "lojal\|loyal\|treue\|fedelt\|panel\|pannello\|dashboard" src/app/[locale]/order/page.tsx` zwraca 0 wyników.
- Ten sam grep na bloku `orderSuccess` w `src/i18n.ts` zwraca 0 wyników.
- Lista „W cenie” na /order ma 5 pozycji we wszystkich językach.
- `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build` przechodzi.
