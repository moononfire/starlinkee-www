---
status: done
---
# Krok 07: Przegląd wszystkich języków i SEO strony głównej

## Cel
Cztery wersje strony głównej są spójne: ta sama długość, ten sam ton, nic się nie rozjeżdża wizualnie. Metadane SEO pasują do nowych sloganów.

## Zakres
- Porównaj bloki pl/en/de/it w `src/i18n.ts` (klucze strony głównej). Wyrównaj miejsca, gdzie któryś język jest wyraźnie dłuższy albo gubi punkt przekazu.
- `src/app/[locale]/layout.tsx`: skróć tytuły i opisy SEO tak, żeby pasowały do nowych sloganów. Opis ma mieć maks. ok. 155 znaków, tytuł maks. ok. 60 znaków.
- `src/app/[locale]/page.tsx`: opisy JSON-LD pasujące do nowego przekazu (bez lojalności i panelu).
- Wizualny przegląd `/pl`, `/en`, `/de`, `/it` na 375 px i 1280 px (np. Playwright, który jest w zależnościach). Popraw drobne problemy układu wynikające z krótszych tekstów, np. za duże odstępy albo wiszące pojedyncze słowa.
- Końcowy grep po plikach strony głównej i `/order` na lojalność i panel admina we wszystkich językach.

## Poza zakresem
- Nowe sekcje, nowe grafiki, przebudowa layoutu.
- Blog, regulamin, polityki, e-maile.
- Zmiany na `/order` poza poprawką ewentualnej pozostałej wzmianki o lojalności lub panelu.

## Kryteria akceptacji
- Dla każdego języka zrzuty ekranu 375 px i 1280 px nie pokazują ucinania ani nachodzenia tekstu. Opisz to w PROGRESS.md.
- Grep `lojal|loyal|treue|fedelt|panel|pannello|admin` po plikach strony głównej i `/order` daje 0 trafień w tekstach widocznych dla użytkownika.
- Tytuły i opisy SEO mieszczą się w limitach dla wszystkich 4 języków.
- `DATABASE_URL=postgresql://u:p@localhost:5432/db npm run build` przechodzi.
