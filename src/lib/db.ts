import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// ─── Subscribers ────────────────────────────────────────────────────────────

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  locale: string;
  sequence_step: number;
  next_send_at: string | null;
  unsubscribed_at: string | null;
}

export async function upsertSubscriber(email: string, source: string, locale: string) {
  const nextSendAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();
  await sql`
    INSERT INTO newsletter_subscribers (email, source, locale, sequence_step, next_send_at)
    VALUES (${email}, ${source}, ${locale}, 1, ${nextSendAt})
    ON CONFLICT (email, source) DO NOTHING
  `;
}

export async function getDueSubscribers(): Promise<Subscriber[]> {
  const now = new Date().toISOString();
  const rows = await sql`
    SELECT * FROM newsletter_subscribers
    WHERE next_send_at <= ${now} AND unsubscribed_at IS NULL
  `;
  return rows as Subscriber[];
}

export async function advanceSubscriber(id: string, nextStep: number, nextSendAt: string | null) {
  await sql`
    UPDATE newsletter_subscribers
    SET sequence_step = ${nextStep}, next_send_at = ${nextSendAt}
    WHERE id = ${id}
  `;
}

// ─── Sends & Tracking ───────────────────────────────────────────────────────

export async function recordSend(
  email: string,
  source: string,
  step: number,
  subject: string
): Promise<string> {
  const rows = await sql`
    INSERT INTO newsletter_sends (email, source, step, subject)
    VALUES (${email}, ${source}, ${step}, ${subject})
    RETURNING id
  `;
  return rows[0].id as string;
}

export async function recordOpen(sendId: string) {
  await sql`INSERT INTO newsletter_opens (send_id) VALUES (${sendId})`;
}

export async function recordClick(sendId: string, url: string) {
  await sql`INSERT INTO newsletter_clicks (send_id, url) VALUES (${sendId}, ${url})`;
}

// ─── Dashboard ──────────────────────────────────────────────────────────────

export interface DashboardData {
  subscribers: Array<{ source: string; sequence_step: number; unsubscribed_at: string | null }>;
  sends: Array<{ id: string; email: string; source: string; step: number; subject: string; sent_at: string }>;
  opens: Array<{ send_id: string }>;
  clicks: Array<{ send_id: string; url: string }>;
}

export async function getDashboardData(): Promise<DashboardData> {
  const [subscribers, sends, opens, clicks] = await Promise.all([
    sql`SELECT source, sequence_step, unsubscribed_at FROM newsletter_subscribers`,
    sql`SELECT * FROM newsletter_sends ORDER BY sent_at DESC LIMIT 200`,
    sql`SELECT send_id FROM newsletter_opens`,
    sql`SELECT send_id, url FROM newsletter_clicks`,
  ]);
  return {
    subscribers: subscribers as DashboardData["subscribers"],
    sends: sends as DashboardData["sends"],
    opens: opens as DashboardData["opens"],
    clicks: clicks as DashboardData["clicks"],
  };
}
