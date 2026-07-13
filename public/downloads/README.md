Umieść tu zbudowany plik `starlinkee.apk` (dokładnie taka nazwa — link na
stronie `/pobierz-aplikacje` wskazuje na `/downloads/starlinkee.apk`).

Jak go zbudować, patrz `starlinkee-app/README.md`, sekcja "W międzyczasie
(dystrybucja tymczasowa)":

```
cd starlinkee-app
npx eas login
npx eas build --platform android --profile preview
```

Po zakończeniu buildu w chmurze Expo dostaniesz link do pobrania `.apk` —
pobierz plik i wrzuć go tutaj jako `starlinkee.apk`, potem wdróż tę stronę
(`starlinkee-www`).

Przy każdej nowej wersji appki podmień ten plik na nowszy build.
