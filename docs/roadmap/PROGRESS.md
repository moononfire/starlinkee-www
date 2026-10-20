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
