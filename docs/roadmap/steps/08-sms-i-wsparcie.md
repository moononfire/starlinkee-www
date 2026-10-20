---
status: todo
---
# Krok 08: 100 SMS-ów marketingowych i błyskawiczne wsparcie

## Cel
Zmieniamy ofertę z 200 na **100 SMS-ów miesięcznie w cenie**. Strona główna i `/order` jasno mówią we wszystkich 4 językach, co to za SMS-y: marketingowe wiadomości, które właściciel wysyła do swoich gości, którzy zostawili numer i zgodę (kupony, promocje, zaproszenie do powrotu). Wsparcie techniczne nazywamy **błyskawicznym**, bo właściciel obsługuje je osobiście.

## Zakres
- `src/i18n.ts`, pozycje cennika strony głównej (pl/en/de/it):
  - pozycja o SMS-ach: 100 zamiast 200 i jasna informacja, że to SMS-y marketingowe do Twoich gości. Krótko, w stylu sloganów z kroków 03–06, np. pl „100 SMS-ów marketingowych/mies. do Twoich gości”. Dziś np. de „200 SMS/Monat inklusive” w ogóle nie mówi, co to za SMS-y.
  - pozycja o wsparciu: pl „Błyskawiczne wsparcie”, en „Lightning-fast support”, de „Blitzschneller Support”, it „Supporto rapidissimo” (albo równie krótkie i naturalne odpowiedniki)
- `src/app/[locale]/order/page.tsx`, wszystkie języki: te same dwie pozycje na liście `features`. W `description` i `subscriptionDesc` doprecyzuj, że kupony SMS to marketing do własnych gości, a pakiet to 100/mies.
- Jeśli `features.promoDesc` lub `liveDemo.tourPromo` na stronie głównej sugerują inną liczbę SMS-ów albo nie mówią, komu je wysyłasz, wyrównaj to jednym krótkim zdaniem w limicie z kroku 03.
- `grep -rn "200" src/i18n.ts src/app/[locale]/order/page.tsx`: upewnij się, że nigdzie nie zostało „200 SMS”.

## Poza zakresem
- Faktyczny limit SMS w aplikacji lub billingu (to inny system).
- Ceny, Stripe, logika checkoutu.
- Regulamin, blog, e-maile.
- Ponowne przepisywanie innych sloganów.

## Kryteria akceptacji
- „100” i słowo „marketingowe” (lub odpowiednik: marketing, Marketing-SMS, marketing SMS) widać w pozycji o SMS-ach w cenniku strony głównej i na `/order`, we wszystkich 4 językach.
- 0 trafień „200 SMS” (w każdym zapisie) w `src/i18n.ts` i `src/app/[locale]/order/page.tsx`.
- Pozycja o wsparciu brzmi „błyskawiczne” (lub odpowiednik) w 4 językach, na stronie głównej i na `/order`.
- `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build` przechodzi.
