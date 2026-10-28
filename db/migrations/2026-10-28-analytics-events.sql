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
