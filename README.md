This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Własna analityka (bez cookies)

Odsłony, kliknięcia CTA (`data-track`) i zamówienia trafiają przez `POST /api/a` do tabeli `analytics_events` w Neon.
IP i User-Agent nie są zapisywane; unikalni to dzienny HMAC (klucz zmienia się co dobę).

Wdrożenie, w tej kolejności:
1. W Neon SQL Editor uruchom `db/migrations/2026-10-28-analytics-events.sql` (idempotentny, tylko dodaje).
2. W Vercel ustaw `ANALYTICS_SALT` (losowy, min. 32 znaki) i `ANALYTICS_ADMIN_PASSWORD` (dla panelu `/admin/analityka`).
3. Dopiero potem push. Bez tabeli lub `ANALYTICS_SALT` endpoint odpowiada 204 i nic nie zapisuje, a strona działa normalnie.

Testy e2e ustawiają `ANALYTICS_STORE=memory` (zapis do pamięci procesu); na produkcji tej zmiennej nie ma.
