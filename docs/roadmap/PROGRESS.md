# Postęp

## Krok 01: Usuń kartę lojalnościową i panel admina ze strony głównej
- Powstało: strona główna (pl/en/de/it) bez karty lojalnościowej i panelu: 3 karty funkcji, cennik z 5 pozycjami (klucze `pricing.feature4/5` przenumerowane), usunięty krok `loyalty` z `DemoAnnotation`, przepisane teksty hero/features/liveDemo/footer, SEO (layout) i JSON-LD, neutralne alt obrazka hero.
- Decyzje: zmiany treści minimalne (skracanie w krokach 03–06); `pricing.feature6/7` przenumerowane na `feature4/5`; `loyalty.webp` zostaje w `public`, ale nieużywany; `grep` z kryteriów zwraca 0 poza `orderSuccess.bodyPaid1` (krok 02).
- Odłożono: strona zamówienia i sukcesu (krok 02), skracanie sloganów, blog/polityki/e-maile, treść iframe demo.

## Krok 02: Usuń kartę lojalnościową i panel admina ze ścieżki zamówienia
- Powstało: `/order` (pl/en/de/it) bez wzmianek o karcie lojalnościowej i panelu: nowe `description`, `subscriptionDesc`, lista „W cenie” z 5 pozycjami, neutralne `accountStepSubtitle`; `orderSuccess.bodyPaid1` bez linku do aktywacji panelu.
- Decyzje: w `description` i `subscriptionDesc` w miejsce usuniętych funkcji wstawiono „zbieranie kontaktów” (zgodnie z opisem produktu w CONTEXT.md); kodu checkoutu nie ruszano; build przechodzi.
- Odłożono: „200 SMS” na liście „W cenie” (krok 08), regulamin, polityki, e-maile.
