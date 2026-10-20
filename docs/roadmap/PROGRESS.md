# Postęp

## Krok 01: Usuń kartę lojalnościową i panel admina ze strony głównej
- Powstało: strona główna (pl/en/de/it) bez karty lojalnościowej i panelu: 3 karty funkcji, cennik z 5 pozycjami (klucze `pricing.feature4/5` przenumerowane), usunięty krok `loyalty` z `DemoAnnotation`, przepisane teksty hero/features/liveDemo/footer, SEO (layout) i JSON-LD, neutralne alt obrazka hero.
- Decyzje: zmiany treści minimalne (skracanie w krokach 03–06); `pricing.feature6/7` przenumerowane na `feature4/5`; `loyalty.webp` zostaje w `public`, ale nieużywany; `grep` z kryteriów zwraca 0 poza `orderSuccess.bodyPaid1` (krok 02).
- Odłożono: strona zamówienia i sukcesu (krok 02), skracanie sloganów, blog/polityki/e-maile, treść iframe demo.

## Krok 02: Usuń kartę lojalnościową i panel admina ze ścieżki zamówienia
- Powstało: `/order` (pl/en/de/it) bez wzmianek o karcie lojalnościowej i panelu: nowe `description`, `subscriptionDesc`, lista „W cenie” z 5 pozycjami, neutralne `accountStepSubtitle`; `orderSuccess.bodyPaid1` bez linku do aktywacji panelu.
- Decyzje: w `description` i `subscriptionDesc` w miejsce usuniętych funkcji wstawiono „zbieranie kontaktów” (zgodnie z opisem produktu w CONTEXT.md); kodu checkoutu nie ruszano; build przechodzi.
- Odłożono: „200 SMS” na liście „W cenie” (krok 08), regulamin, polityki, e-maile.

## Krok 03: Slogany na stronie głównej, wersja polska
- Powstało: skrócone teksty `pl` (hero, features, liveDemo, pricing bez SMS i wsparcia, contact, footer.tagline) mieszczące się w limitach; na górze bloku `pl` komentarz z zasadami tonu (krótko, jedno zdanie; uczucia i wyniki; „Ty” i konkret, każdy język naturalnie).

  | Klucz | Przed | Po |
  |---|---|---|
  | hero.title | Więcej pozytywnych opinii. | Więcej gwiazdek 5★. |
  | hero.titleHighlight | Więcej powracających klientów. | Więcej powracających gości. |
  | hero.subtitle | Tabliczki NFC, które automatycznie filtrują… (26 słów) | Jedno dotknięcie: dobre opinie lecą do Google, złe zostają u Ciebie. |
  | features.sectionTitle | Kompleksowe narzędzie do reputacji online | Spokojna głowa. Pełna kontrola. |
  | linktreeTitle | Twoja własna strona z linkami | Twoja strona z linkami |
  | reviewTitle | Ochrona profilu Google | Same dobre opinie |
  | promoTitle | Zbieraj zgody i dane kontaktowe | Goście wracają |

- Decyzje: „gość” zamiast „klient” (ton gastronomii); pozycje cennika 1–3 skrócone do „Tabliczka NFC w cenie”, „Filtr opinii Google”, „Kupony SMS”; opis linktree nie wspomina już o „do 7 linkach” (liczba nie jest ceną ani limitem checkoutu); `liveDemo.cta` skrócone do 4 słów.
- Odłożono: en/de/it (kroki 04–06), SMS i wsparcie w cenniku (krok 08). Build przechodzi; `/pl` nie sprawdzano wizualnie na 375/1280 px (tylko build).

## Krok 04: Slogany na stronie głównej, wersja angielska (en)
- Powstało: skrócone teksty `en` (hero, features, liveDemo, pricing bez SMS i wsparcia, contact, footer.tagline) w limitach z kroku 03, w tonie wzorca `pl`.

  | Klucz | Przed | Po |
  |---|---|---|
  | hero.title | More positive reviews. | More 5★ reviews. |
  | hero.titleHighlight | More returning customers. | More returning guests. |
  | hero.subtitle | NFC plates that automatically filter negative reviews… (24 słowa) | One tap: great reviews go to Google, bad ones stay with you. |
  | features.sectionTitle | Complete online reputation management | Peace of mind. Full control. |
  | linktreeTitle | Your own link page | Your own link page |
  | reviewTitle | Google profile protection | Only great reviews |
  | promoTitle | Collect consent & contact data | Guests come back |

- Decyzje: „guests” zamiast „customers”; opis linktree bez „up to 7 links” (jak w pl); `annualNote` poprawione z mylącego „10 months for the price of 10” na „10 months instead of 12”; `pricing.feature4/5` (SMS, wsparcie) nietknięte (krok 08).
- Odłożono: de/it (kroki 05–06), SMS i wsparcie w cenniku (krok 08). Build przechodzi (ostrzeżenie o pobraniu fontu ★ dla OG image to sprawa sieci); `/en` nie sprawdzano wizualnie na 375/1280 px.

## Krok 05: Slogany na stronie głównej, wersja niemiecka (de)
- Powstało: skrócone teksty `de` (hero, features, liveDemo, pricing bez SMS i wsparcia, contact, footer.tagline) w limitach z kroku 03, w formie „Sie”.

  | Klucz | Przed | Po |
  |---|---|---|
  | hero.title | Mehr positive Bewertungen. | Mehr 5★-Bewertungen. |
  | hero.titleHighlight | Mehr wiederkehrende Gäste. | Mehr Stammgäste. |
  | hero.subtitle | NFC-Aufsteller, die negative Bewertungen automatisch filtern… (21 słów) | Ein Tipp: Gute Bewertungen gehen zu Google, schlechte bleiben bei Ihnen. |
  | features.sectionTitle | Komplettes Online-Reputationsmanagement | Gelassenheit. Volle Kontrolle. |
  | linktreeTitle | Ihre eigene Link-Seite | Ihre eigene Link-Seite |
  | reviewTitle | Google-Profil-Schutz | Nur gute Bewertungen |
  | promoTitle | Einwilligungen & Kontaktdaten sammeln | Gäste kommen wieder |

- Decyzje: „Gast/Stammgäste” zamiast „Kunde”; krótkie złożenia; opis linktree bez „bis zu 7 Links”; `annualNote` „10 Monate statt 12”; `feature1` bez „1” (liczba pakietu nie jest ceną); SMS i wsparcie (`feature4/5`) nietknięte (krok 08).
- Odłożono: it (krok 06), SMS i wsparcie w cenniku (krok 08). Build przechodzi; `/de` nie sprawdzano wizualnie na 375/1280 px.

## Krok 06: Slogany na stronie głównej, wersja włoska (it)
- Powstało: skrócone teksty `it` (hero, features, liveDemo, pricing bez SMS i wsparcia, contact, footer.tagline) w limitach z kroku 03, w formie „tu” (jak reszta strony).

  | Klucz | Przed | Po |
  |---|---|---|
  | hero.title | Più recensioni positive. | Più recensioni 5★. |
  | hero.titleHighlight | Più clienti che ritornano. | Più clienti che tornano. |
  | hero.subtitle | Targhe NFC che filtrano automaticamente… (24 słowa) | Un tocco: le belle recensioni su Google, le brutte restano da te. |
  | features.sectionTitle | Gestione completa della reputazione online | Serenità. Controllo totale. |
  | linktreeTitle | La tua pagina di link personale | La tua pagina link |
  | reviewTitle | Protezione del profilo Google | Solo recensioni top |
  | promoTitle | Raccogli consensi e dati di contatto | I clienti tornano |

- Decyzje: zostaje „clienti” (naturalne we włoskim, w odróżnieniu od „ospiti”); `linktreeTitle` skrócone do 4 słów; opis linktree bez „fino a 7 link”; `annualNote` „10 mesi invece di 12”; `feature1` bez „1”; SMS i wsparcie (`feature4/5`) nietknięte (krok 08).
- Odłożono: SMS i wsparcie w cenniku (krok 08). Build przechodzi; `/it` nie sprawdzano wizualnie na 375/1280 px.

## Krok 07: Przegląd wszystkich języków i SEO strony głównej
- Powstało: tytuły i opisy SEO w `layout.tsx` w stylu sloganów (tytuły 44–51 znaków, opisy 101–115 znaków, limity 60/155); grep `lojal|loyal|treue|fedelt|panel|pannello|admin` po `i18n.ts`, komponentach strony głównej, `page.tsx`, `layout.tsx` i `/order` daje 0 trafień.
- Decyzje: opisy JSON-LD w `page.tsx` bez zmian, bo nie wspominają lojalności ani panelu i zgadzają się z przekazem; przegląd długości tekstów pl/en/de/it: wszystkie klucze strony głównej w limitach, najdłuższe wyrazy w de to ≤18 znaków (łamią się na dywizach), bez zmian w komponentach.
- Odłożono / NIE ZROBIONO: wizualny przegląd 375 px i 1280 px. Playwright w środowisku nie uruchamia Chromium (brak `libnspr4.so`, instalacja wymaga sudo), a innej przeglądarki nie ma. `npm run build` przechodzi, `next start` zwraca 200 dla `/pl`, ale zrzuty nie powstały. Do zrobienia po doinstalowaniu bibliotek (`npx playwright install-deps chromium`).
