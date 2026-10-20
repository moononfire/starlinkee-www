---
status: done
---
# Krok 01: Usuń kartę lojalnościową i panel admina ze strony głównej

## Cel
Strona główna (wszystkie 4 języki) nie obiecuje już karty lojalnościowej ani panelu administracyjnego, bo tych funkcji na razie nie oferujemy.

## Zakres
- `src/components/Features.tsx`: usuń kartę „loyalty” razem z obrazkiem `/features/<locale>/loyalty.webp`. Siatka ma dobrze wyglądać z 3 kartami (desktop i mobile).
- `src/i18n.ts`, we wszystkich językach:
  - usuń `features.loyaltyTitle`, `features.loyaltyDesc`, `liveDemo.tourLoyalty`
  - z cennika usuń pozycje „Karta lojalnościowa” (`pricing.feature4`) i „Panel administracyjny” (`pricing.feature5`) oraz dopasuj `src/components/Pricing.tsx`
  - przepisz zdania, które mówią o lojalności albo o zarządzaniu „z panelu” / „w panelu”: `hero.badge`, `hero.subtitle`, `features.sectionSubtitle`, `features.linktreeDesc`, `liveDemo.tourLinktree`, `liveDemo.tourPromo`, `footer.tagline`. Na tym etapie wystarczy minimalna zmiana treści, a skracanie przyjdzie w krokach 03–06.
- `src/components/DemoAnnotation.tsx`: usuń krok `loyalty` z `RELEVANT_STEPS` i z mapy tekstów. Jeśli iframe wyśle `loyalty`, adnotacja zostaje na poprzednim kroku.
- `src/components/Hero.tsx` i `src/app/[locale]/layout.tsx`: zmień alt „panel zarządzania opiniami” na neutralny opis produktu.
- `src/app/[locale]/layout.tsx`: usuń „lojalność / loyalty / Treue / fedeltà” z tytułów i opisów SEO dla wszystkich języków.
- `src/app/[locale]/page.tsx`: usuń lojalność z opisów JSON-LD.

## Poza zakresem
- Skracanie tekstów do sloganów (kroki 03–06).
- Strona zamówienia i strona sukcesu (krok 02).
- Treść wewnątrz iframe live demo, która pochodzi z zewnętrznej apki.
- Blog, regulamin, polityki, e-maile (`src/lib/sequence-emails.ts`).
- Usuwanie pliku `public/features/*/loyalty.webp`. Plik zostaje, tylko nie jest używany.

## Kryteria akceptacji
- `grep -n -i "lojal\|loyal\|treue\|fedelt\|panel\|pannello" src/i18n.ts src/components/{Hero,Features,Pricing,DemoAnnotation,LiveDemo,Footer}.tsx src/app/[locale]/page.tsx src/app/[locale]/layout.tsx` zwraca 0 wyników (poza `orderSuccess` w i18n, który obsługuje krok 02).
- Sekcja funkcji pokazuje 3 karty, bez dziury w siatce, na szerokości 375 px i 1280 px.
- Cennik na stronie głównej ma 5 pozycji.
- `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build` przechodzi.
