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
