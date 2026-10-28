-- Newsletter subscribers + sequence tracking (Neon Postgres)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'course',
  locale TEXT NOT NULL DEFAULT 'pl',
  sequence_step INTEGER DEFAULT 1,
  next_send_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_email_source_idx
  ON newsletter_subscribers(email, source);

-- Individual email sends (for tracking)
CREATE TABLE IF NOT EXISTS newsletter_sends (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT NOT NULL,
  step INTEGER NOT NULL DEFAULT 1,
  subject TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Open events (one row per open)
CREATE TABLE IF NOT EXISTS newsletter_opens (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  send_id UUID REFERENCES newsletter_sends(id) ON DELETE CASCADE,
  opened_at TIMESTAMPTZ DEFAULT NOW()
);

-- Click events
CREATE TABLE IF NOT EXISTS newsletter_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  send_id UUID REFERENCES newsletter_sends(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- Własna analityka (bez cookies, bez IP). Tylko dodaje; nic istniejącego nie zmienia.
-- Uruchom w Neon SQL Editor przed wdrożeniem kodu zbierającego dane. Idempotentne.
CREATE TABLE IF NOT EXISTS analytics_events (
  id BIGSERIAL PRIMARY KEY,
  ts TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  type TEXT NOT NULL,            -- pageview | cta_click | order
  path TEXT NOT NULL,
  locale TEXT,
  referrer_host TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  device TEXT,                   -- desktop | mobile | tablet | ...
  label TEXT,                    -- np. hero, pricing-annual, trial, paid
  visitor TEXT                   -- dzienny HMAC(IP+UA), 16 znaków hex
);
CREATE INDEX IF NOT EXISTS analytics_events_ts_idx ON analytics_events (ts);
CREATE INDEX IF NOT EXISTS analytics_events_type_ts_idx ON analytics_events (type, ts);
